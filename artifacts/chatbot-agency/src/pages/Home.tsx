import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, MessageSquare, Shield, ArrowRight, XCircle, Zap, ShieldCheck } from "lucide-react";

import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  companyType: z.string().min(1, "Veuillez sélectionner un type d'entreprise"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

export default function Home() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      companyType: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof contactSchema>) {
    toast({
      title: "Demande envoyée avec succès !",
      description: "Notre équipe vous contactera d'ici 24 heures.",
    });
    form.reset();
  }

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold tracking-tight">BotAgence</span>
          </div>
          <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Réserver ma configuration
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="container mx-auto max-w-5xl text-center">
          <motion.div initial="initial" animate="animate" variants={fadeIn}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium mb-6">
              <Zap className="w-4 h-4 text-secondary" />
              Installation rapide, aucun abonnement
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Votre assistant IA disponible <br className="hidden md:block" />
              <span className="text-primary">24h/24, 7j/7</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ne perdez plus de clients en dehors de vos heures d'ouverture. Nous installons un chatbot intelligent sur votre site web qui répond, rassure et convertit vos visiteurs. Un seul client gagné rembourse votre investissement.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Obtenir mon devis gratuit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Aucun abonnement mensuel</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> 100% No-Code pour vous</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Livraison en 48h</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-3xl font-bold mb-6">Le problème : vos clients n'attendent pas.</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Un visiteur a une question à 21h30 sur vos horaires, vos tarifs ou une urgence. Personne ne répond. Que fait-il ?
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <XCircle className="w-6 h-6 text-destructive shrink-0" />
                  <span>Il quitte votre site et va chez le concurrent qui a répondu.</span>
                </li>
                <li className="flex gap-3">
                  <XCircle className="w-6 h-6 text-destructive shrink-0" />
                  <span>Votre équipe perd du temps à répondre aux mêmes questions basiques par email.</span>
                </li>
              </ul>
            </motion.div>
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeIn}>
              <Card className="border-primary/20 bg-background shadow-lg">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg rounded-tl-none w-[80%]">
                      <p className="text-sm font-medium mb-1">Visiteur à 22h15</p>
                      <p>Bonjour, êtes-vous ouverts le dimanche matin pour une urgence dentaire ?</p>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg rounded-tr-none w-[80%] ml-auto text-right">
                      <p className="text-sm font-medium mb-1 text-primary">Assistant IA</p>
                      <p>Bonjour ! Oui, notre clinique gère les urgences le dimanche de 9h à 13h. Souhaitez-vous que je vous réserve un créneau ?</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-3xl font-bold mb-4">Pensé pour les entreprises locales</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Nous concevons des assistants spécialisés qui connaissent votre métier sur le bout des doigts.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Boutiques E-commerce",
                desc: "Répondez aux questions sur les stocks, les délais de livraison et les retours instantanément."
              },
              {
                title: "Cliniques & Cabinets",
                desc: "Gérez les questions fréquentes, rassurez les patients et facilitez la prise de rendez-vous."
              },
              {
                title: "Concessions Auto",
                desc: "Informez sur l'inventaire des véhicules, les options de financement et prenez des leads."
              }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeIn}>
                <Card className="h-full border-border/50 hover:border-primary/50 transition-colors">
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">3 étapes simples, zéro technicité</h2>
            <p className="text-primary-foreground/80 text-lg">On s'occupe de la technique. Vous profitez des résultats.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-20 right-20 h-0.5 bg-primary-foreground/20" />
            
            {[
              {
                step: "1",
                title: "Vos informations",
                desc: "Transmettez-nous votre URL, votre FAQ et vos documents. L'IA apprendra de vos données."
              },
              {
                step: "2",
                title: "Notre configuration",
                desc: "Nous construisons, entraînons et testons votre chatbot sur mesure."
              },
              {
                step: "3",
                title: "Un simple code à coller",
                desc: "Nous vous envoyons un petit bout de code. Vous le collez sur votre site. C'est en ligne."
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 bg-background text-primary rounded-full flex items-center justify-center text-3xl font-bold mb-6 shadow-xl">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-primary-foreground/80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Offer */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeIn}>
            <Card className="border-2 border-primary overflow-hidden shadow-2xl relative">
              <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground px-4 py-1 font-bold text-sm rounded-bl-lg">
                Offre Limitée
              </div>
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-2">Une offre claire et sans surprise</h2>
                  <p className="text-muted-foreground">Pas de frais cachés. Pas de contrat mensuel.</p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
                  <div className="text-center md:text-right">
                    <div className="text-5xl font-black text-primary">497 €</div>
                    <div className="text-muted-foreground font-medium">Paiement unique</div>
                    <div className="text-sm text-muted-foreground">Frais de configuration</div>
                  </div>
                  <div className="hidden md:block w-px h-16 bg-border" />
                  <div className="text-center md:text-left">
                    <div className="text-5xl font-black">0 €</div>
                    <div className="text-muted-foreground font-medium">Abonnement mensuel</div>
                    <div className="text-sm text-muted-foreground">Grâce à Botpress</div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    "Analyse de vos documents et site web",
                    "Création et entraînement de l'IA personnalisée",
                    "Personnalisation visuelle (vos couleurs, votre logo)",
                    "Tests de performance et ajustements",
                    "Guide d'installation simple (5 minutes)"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-primary/5 p-4 rounded-lg flex items-start gap-4 mb-8">
                  <ShieldCheck className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold">Garantie de satisfaction 100%</h4>
                    <p className="text-sm text-muted-foreground">Si le bot ne répond pas correctement à vos attentes après l'installation, nous le modifions gratuitement jusqu'à ce qu'il soit parfait, ou nous vous remboursons.</p>
                  </div>
                </div>

                <Button size="lg" className="w-full text-lg h-14" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Réserver ma configuration maintenant
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Questions fréquentes</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">Comment pouvez-vous proposer 0€/mois ?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Nous utilisons la plateforme robuste de Botpress qui offre un plan gratuit très généreux. Pour 95% des PME locales, le volume de requêtes mensuelles reste largement dans ce plan gratuit. Vous ne payez que notre expertise pour configurer parfaitement l'outil la première fois.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">Est-ce difficile à installer sur mon site ?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Pas du tout. Nous vous fournissons un petit script (quelques lignes de code) à copier-coller. Cela prend 2 minutes sur Wordpress, Shopify, Wix, Webflow, etc. Si vous avez un webmaster, il le fera en 30 secondes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">Et si le bot donne une mauvaise information ?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Le bot est strictement contraint par les documents que vous nous fournissez (FAQ, grille tarifaire, site web). S'il ne connaît pas la réponse, il est programmé pour dire "Je n'ai pas cette information, mais vous pouvez laisser votre email et un humain vous répondra très vite."
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">Combien de temps faut-il pour la mise en place ?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                À partir du moment où vous nous fournissez vos documents, il faut compter 48h ouvrées pour vous livrer le bot testé et prêt à être installé.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-6">Prêt à automatiser votre service client ?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Remplissez ce formulaire pour réserver votre configuration. Nous vous recontacterons rapidement pour recueillir vos documents et lancer le processus.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Mise en place en 48h</h4>
                    <p className="text-sm text-muted-foreground">Dès réception de vos informations</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">100% Sécurisé</h4>
                    <p className="text-sm text-muted-foreground">Vos données restent confidentielles</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="shadow-lg border-border">
              <CardContent className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom et Prénom</FormLabel>
                          <FormControl>
                            <Input placeholder="Jean Dupont" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email professionnel</FormLabel>
                          <FormControl>
                            <Input placeholder="jean@entreprise.com" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="companyType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Type d'entreprise</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Sélectionnez..." />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="ecommerce">Boutique E-commerce</SelectItem>
                              <SelectItem value="clinic">Clinique / Cabinet Médical</SelectItem>
                              <SelectItem value="auto">Concession Automobile</SelectItem>
                              <SelectItem value="other">Autre commerce local</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Parlez-nous de votre besoin</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Lien vers votre site web, principales questions de vos clients..." 
                              className="resize-none min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full h-12 text-lg">
                      Demander mon devis gratuit
                    </Button>
                    <p className="text-xs text-center text-muted-foreground mt-4">
                      Aucun paiement requis aujourd'hui.
                    </p>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center border-b border-muted-foreground/20 pb-8 mb-8">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <MessageSquare className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold">BotAgence</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-primary transition-colors">Politique de confidentialité</a>
              <a href="#" className="hover:text-primary transition-colors">CGV</a>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} BotAgence. Tous droits réservés. Propulsez votre entreprise avec l'IA.
          </div>
        </div>
      </footer>
    </div>
  );
}
