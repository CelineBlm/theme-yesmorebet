import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "Pouvons-nous personnaliser les jetons et la décoration ?",
      answer: "Absolument ! Nous pouvons personnaliser les jetons avec votre logo, vos initiales ou un design spécifique lié à votre événement (mariage, entreprise, anniversaire). La décoration autour de la table peut également s'adapter au thème de votre soirée pour créer une ambiance unique et mémorable."
    },
    {
      question: "Le croupier peut-il s'adapter au niveau des joueurs ?",
      answer: "Bien sûr ! Notre croupier professionnel s'adapte à tous les niveaux. Il explique les règles du blackjack de manière simple et ludique pour les débutants, tout en maintenant un rythme dynamique pour les joueurs expérimentés. L'objectif est que tout le monde s'amuse, quel que soit son niveau."
    },
    {
      question: "Quelle tenue vestimentaire porte le croupier ?",
      answer: "Notre croupier arbore une tenue élégante et professionnelle : chemise noire, pantalon noir et nœud papillon doré, dans l'esprit des croupiers de casino. Cette tenue renforce l'authenticité de l'expérience et s'adapte parfaitement à tout type d'événement chic ou décontracté."
    },
    {
      question: "Peut-on combiner votre animation avec d'autres prestations ?",
      answer: "Oui, tout à fait ! Notre animation casino se marie parfaitement avec d'autres prestations : DJ, photobooth, traiteur, bar à cocktails, magicien, etc. Nous pouvons coordonner nos horaires pour que l'animation s'intègre harmonieusement dans le déroulé de votre soirée."
    },
    {
      question: "Y a-t-il une limite d'âge pour participer ?",
      answer: "L'animation YesMoreBet est accessible dès 16 ans, bien qu'il s'agisse d'un jeu fictif sans argent réel. Pour les événements familiaux avec des enfants plus jeunes, nous pouvons adapter l'animation pour la rendre accessible et ludique pour tous."
    },
    {
      question: "Comment fonctionne exactement la tombola finale ?",
      answer: "Tout au long de la soirée, les participants accumulent des jetons en jouant au blackjack. À la fin de l'animation, ces jetons sont convertis en tickets de tombola : plus vous avez de jetons, plus vous avez de chances de gagner ! Le tirage au sort final permet de remporter les lots que vous avez choisis."
    },
    {
      question: "Proposez-vous des animations en extérieur ?",
      answer: "Oui, nous pouvons intervenir en extérieur à condition de disposer d'un espace couvert et protégé (tonnelle, tente, patio). Le matériel de jeu (cartes, jetons) doit être à l'abri du vent et des intempéries. Pour les jardins, terrasses ou poolhouse, c'est parfaitement adapté !"
    },
    {
      question: "Faut-il prévoir une connexion électrique ou un accès Wi-Fi ?",
      answer: "Aucune connexion électrique ou Wi-Fi n'est nécessaire pour l'animation casino. Les lunettes connectées fonctionnent en autonomie totale. Vous n'avez qu'à prévoir l'espace, l'éclairage ambiant et les chaises — nous gérons tout le reste en toute autonomie."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-yellow-400"></div>
              <h2 className="text-3xl md:text-5xl text-white leading-tight">
                Questions fréquentes
              </h2>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-yellow-400"></div>
            </div>
            <p className="text-gray-400 text-lg">
              Tout ce que vous devez savoir sur nos animations casino
            </p>
          </div>

          {/* FAQ Accordion - Single Container */}
          <div className="bg-gradient-to-br from-zinc-900/50 to-black/50 border border-white/10 rounded-lg overflow-hidden">
            <Accordion type="single" collapsible className="divide-y divide-white/5">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-0 px-6 md:px-8"
                >
                  <AccordionTrigger className="text-white hover:text-yellow-400 transition-colors text-left py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
