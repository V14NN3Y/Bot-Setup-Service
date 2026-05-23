import { Link } from "wouter";
import { ArrowLeft, MessageSquare } from "lucide-react";

export default function CGV() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-primary" />
            <span className="font-bold">BotAgence</span>
          </Link>
          <Link href="/" data-testid="link-back-cgv" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />
            Retour au site
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-3xl font-bold mb-2">Conditions Générales de Vente</h1>
        <p className="text-muted-foreground mb-10">Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { month: "long", year: "numeric" })}</p>

        <div className="space-y-8 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold mb-3">1. Objet</h2>
            <p className="text-muted-foreground">
              Les présentes Conditions Générales de Vente (CGV) régissent les prestations de services proposées par BotAgence, notamment la configuration et le déploiement d'assistants virtuels (chatbots IA) sur les sites web des clients.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">2. Prestations</h2>
            <p className="text-muted-foreground mb-2">
              La prestation comprend :
            </p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>L'analyse des documents et du site web du client (FAQ, PDF, URL)</li>
              <li>La création et la configuration du chatbot via la plateforme Botpress</li>
              <li>La personnalisation visuelle (couleurs, nom, message d'accueil)</li>
              <li>Les tests de performance avant livraison</li>
              <li>La fourniture du code d'intégration (script HTML)</li>
              <li>Une assistance à l'installation d'une durée de 7 jours après livraison</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">3. Tarifs et paiement</h2>
            <p className="text-muted-foreground">
              Le tarif de configuration est fixé à <strong>50 €</strong> (hors taxes), payable en une seule fois avant le début de la prestation. Le paiement s'effectue par virement bancaire ou via lien de paiement sécurisé. Aucun abonnement mensuel n'est facturé par BotAgence. Si le client dépasse les limites du forfait gratuit de la plateforme tierce (Botpress), les frais supplémentaires sont à la charge exclusive du client.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">4. Délai de livraison</h2>
            <p className="text-muted-foreground">
              La livraison du chatbot configuré intervient dans un délai de <strong>48 heures ouvrées</strong> à compter de la réception de l'ensemble des informations nécessaires (documents, accès, informations produits) et du règlement de la prestation.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">5. Garantie de satisfaction</h2>
            <p className="text-muted-foreground">
              Si le chatbot livré ne correspond pas aux attentes convenues lors du devis, BotAgence s'engage à effectuer les modifications nécessaires gratuitement. En cas d'insatisfaction persistante après deux cycles de modifications, un remboursement intégral sera effectué dans un délai de 14 jours.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">6. Obligations du client</h2>
            <p className="text-muted-foreground">
              Le client s'engage à fournir des informations exactes et à jour (FAQ, catalogue, politique tarifaire) et à répondre aux demandes de précisions dans un délai raisonnable. BotAgence ne saurait être tenu responsable des erreurs de réponse du chatbot résultant d'informations erronées ou incomplètes fournies par le client.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">7. Propriété du chatbot</h2>
            <p className="text-muted-foreground">
              À la livraison et après règlement complet de la prestation, le client est propriétaire de la configuration du chatbot. BotAgence ne conserve aucun droit d'exploitation sur le bot livré.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">8. Droit applicable et litiges</h2>
            <p className="text-muted-foreground">
              Les présentes CGV sont soumises au droit français. En cas de litige, les parties s'engagent à rechercher une solution amiable avant toute action judiciaire. À défaut d'accord, le tribunal compétent sera celui du ressort du siège social de BotAgence.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
