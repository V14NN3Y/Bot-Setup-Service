import { Link } from "wouter";
import { MessageSquare, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  navigation: [
    { label: "Accueil", href: "/" },
    { label: "Tarifs", href: "/#tarifs" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/#contact" },
  ],
  services: [
    { label: "Chatbot pour e-commerce", href: "/" },
    { label: "Chatbot pour cliniques", href: "/" },
    { label: "Chatbot pour concessionnaires", href: "/" },
    { label: "Chatbot sur mesure", href: "/" },
  ],
  legal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
    { label: "CGV", href: "/cgv" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold">BotAgence</span>
            </div>
            <p className="text-sm text-background/60 leading-relaxed mb-6">
              Nous installons des assistants IA sur le site de votre entreprise pour répondre à vos clients 24h/24, sans abonnement mensuel.
            </p>
            <div className="space-y-2 text-sm text-background/60">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:contact@botagence.fr" className="hover:text-primary transition-colors">
                  contact@botagence.fr
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+33600000000" className="hover:text-primary transition-colors">
                  +33 6 00 00 00 00
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>France</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-background/40 mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-background/40 mb-4">Nos solutions</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA block */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-background/40 mb-4">Démarrer</h3>
            <p className="text-sm text-background/60 mb-4 leading-relaxed">
              Prêt à automatiser votre relation client ? Obtenez votre devis gratuit en 2 minutes.
            </p>
            <a
              href="/#contact"
              data-testid="link-footer-cta"
              className="inline-block bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
            >
              Obtenir mon devis
            </a>
            <div className="mt-6 pt-6 border-t border-background/10">
              <p className="text-xs text-background/40 mb-2">Espace pro</p>
              <Link
                href="/admin"
                data-testid="link-footer-admin"
                className="text-sm text-background/60 hover:text-primary transition-colors"
              >
                Administration
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/40">
            &copy; {new Date().getFullYear()} BotAgence. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm text-background/50 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
