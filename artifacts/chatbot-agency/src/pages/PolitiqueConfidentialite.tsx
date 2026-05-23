import { Link } from "wouter";
import { ArrowLeft, MessageSquare } from "lucide-react";

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-primary" />
            <span className="font-bold">BotAgence</span>
          </Link>
          <Link href="/" data-testid="link-back-politique" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />
            Retour au site
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-3xl font-bold mb-2">Politique de confidentialité</h1>
        <p className="text-muted-foreground mb-10">Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { month: "long", year: "numeric" })}</p>

        <div className="space-y-8 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold mb-3">1. Données collectées</h2>
            <p className="text-muted-foreground">
              Lorsque vous remplissez notre formulaire de contact, nous collectons les informations suivantes :
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
              <li>Votre nom et prénom</li>
              <li>Votre adresse email</li>
              <li>Le type de votre entreprise</li>
              <li>Le contenu de votre message</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">2. Finalité du traitement</h2>
            <p className="text-muted-foreground">
              Ces données sont collectées dans le but exclusif de vous répondre dans les meilleurs délais et de vous proposer un devis personnalisé. Elles ne sont en aucun cas utilisées à des fins commerciales tierces ni transmises à des partenaires.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">3. Durée de conservation</h2>
            <p className="text-muted-foreground">
              Vos données sont conservées pendant la durée nécessaire au traitement de votre demande, et au maximum pendant 3 ans à compter de notre dernier contact.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">4. Vos droits</h2>
            <p className="text-muted-foreground">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données. Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@botagence.fr" className="text-primary hover:underline">contact@botagence.fr</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">5. Cookies</h2>
            <p className="text-muted-foreground">
              Ce site n'utilise pas de cookies de suivi ou publicitaires. Seul un stockage local (localStorage) est utilisé pour le bon fonctionnement de l'interface, sans collecte de données personnelles.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">6. Contact</h2>
            <p className="text-muted-foreground">
              Pour toute question relative à la protection de vos données, vous pouvez nous joindre par email à : <a href="mailto:contact@botagence.fr" className="text-primary hover:underline">contact@botagence.fr</a>.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
