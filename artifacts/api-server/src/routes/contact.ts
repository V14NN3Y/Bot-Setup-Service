import { Router } from "express";
import nodemailer from "nodemailer";
import { logger } from "../lib/logger";

const contactRouter = Router();

contactRouter.post("/contact", async (req, res) => {
  const { name, email, companyType, message } = req.body as {
    name: string;
    email: string;
    companyType: string;
    message: string;
  };

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const emailTo = process.env.CONTACT_EMAIL_TO ?? smtpUser;

  if (!smtpUser || !smtpPass) {
    logger.warn("Email credentials not configured — SMTP_USER or SMTP_PASS missing");
    return res.status(500).json({
      success: false,
      message: "La configuration email est manquante sur le serveur.",
    });
  }

  const companyTypeLabels: Record<string, string> = {
    ecommerce: "Boutique e-commerce",
    clinique: "Clinique / Cabinet",
    concessionnaire: "Concessionnaire auto",
    restaurant: "Restaurant",
    autre: "Autre",
  };

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const htmlBody = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1a4a4a; border-bottom: 2px solid #1a4a4a; padding-bottom: 8px;">
        Nouvelle demande de devis — BotAgence
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin: 24px 0;">
        <tr>
          <td style="padding: 10px; background: #f5f5f5; font-weight: bold; width: 35%;">Nom</td>
          <td style="padding: 10px;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">Email</td>
          <td style="padding: 10px;"><a href="mailto:${email}">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">Type d'entreprise</td>
          <td style="padding: 10px;">${companyTypeLabels[companyType] ?? companyType}</td>
        </tr>
        <tr>
          <td style="padding: 10px; background: #f5f5f5; font-weight: bold; vertical-align: top;">Message</td>
          <td style="padding: 10px;">${message.replace(/\n/g, "<br>")}</td>
        </tr>
      </table>
      <p style="color: #888; font-size: 12px;">
        Reçu le ${new Date().toLocaleDateString("fr-FR", { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" })}
      </p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"BotAgence" <${smtpUser}>`,
      to: emailTo,
      replyTo: email,
      subject: `Nouvelle demande de devis — ${name} (${companyTypeLabels[companyType] ?? companyType})`,
      html: htmlBody,
    });

    req.log.info({ email, companyType }, "Contact email sent");

    return res.json({
      success: true,
      message: "Votre demande a bien été envoyée. Nous vous répondrons sous 24 heures.",
    });
  } catch (err) {
    req.log.error({ err }, "Failed to send contact email");
    return res.status(500).json({
      success: false,
      message: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
    });
  }
});

export default contactRouter;
