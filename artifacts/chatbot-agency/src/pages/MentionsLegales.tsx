import { Link } from "wouter";
import { ArrowLeft, MessageSquare } from "lucide-react";

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-primary" />
            <span className="font-bold">BotAgence</span>
          </Link>
          <Link href="/" data-testid="link-back-mentions" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />
            Retour au site
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-3xl font-bold mb-2">Mentions légales</h1>
        <p className="text-muted-foreground mb-10">Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { month: "long", year: "numeric" })}</p>

        <div className="prose prose-slate max-w-none space-y-8 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold mb-3">Éditeur du site</h2>
            <p className="text-muted-foreground">
              Le présent site <strong>botagence.fr</strong> est édité par :<br />
              <strong>BotAgence</strong> — Auto-entrepreneur<br />
              Adresse : France<br />
              Email : contact@botagence.fr<br />
              Numéro SIRET : [à compléter]<br />
              Responsable de la publication : [Votre nom]
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">Hébergement</h2>
            <p className="text-muted-foreground">
              Ce site est hébergé par :<br />
              <strong>Replit, Inc.</strong><br />
              655 Mission Street, Suite 300, San Francisco, CA 94105, États-Unis<br />
              Site : replit.com
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">Propriété intellectuelle</h2>
            <p className="text-muted-foreground">
              L'ensemble des contenus présents sur ce site (textes, images, logos, graphismes) est protégé par le droit de la propriété intellectuelle et appartient exclusivement à BotAgence, sauf mention contraire. Toute reproduction, distribution ou utilisation sans autorisation écrite préalable est strictement interdite.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">Limitation de responsabilité</h2>
            <p className="text-muted-foreground">
              BotAgence s'efforce de fournir des informations exactes et à jour. Cependant, des erreurs ou omissions peuvent survenir. L'éditeur ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation de ce site ou de l'impossibilité d'y accéder.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">Droit applicable</h2>
            <p className="text-muted-foreground">
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront compétents.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
