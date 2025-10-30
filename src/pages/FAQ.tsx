import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import svgPaths from "../imports/svg-67n4n2dgei";
import imgImageWithFallback from "figma:asset/cd89cf336183c06875b2f6844fea2226329b918c.png";
import imgImageWithFallback1 from "figma:asset/da2db0edddc31aa30d1d88dfda260c1f4eae135b.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Info, CreditCard, Settings, Sparkles, Palette } from "lucide-react";

interface FAQProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function FAQ({ onNavigate, currentPage }: FAQProps) {
  const faqs = [
    {
      question: "Qu'est-ce que YesMoreBet exactement ?",
      answer: "YesMoreBet est une entreprise d'animation de casino fictif pour événements privés sur la Côte d'Azur. Nous proposons une expérience authentique avec croupier professionnel, tables de Blackjack, Roue de la Chance et lunettes connectées pour capturer vos meilleurs moments. Le tout sans argent réel, dans une ambiance conviviale et élégante."
    },
    {
      question: "Quels jeux proposez-vous ?",
      answer: "Nous proposons principalement du Blackjack avec un croupier professionnel, ainsi qu'une Roue de la Chance pour gagner des tickets de tombola. Ces animations sont conçues pour créer une ambiance casino authentique tout en restant accessibles à tous les niveaux de joueurs."
    },
    {
      question: "L'argent utilisé pendant la soirée est-il réel ?",
      answer: "Non, absolument pas. YesMoreBet propose uniquement des animations de casino fictif. Nous utilisons des jetons sans valeur monétaire réelle. Il s'agit d'une animation ludique et conviviale, totalement légale, sans aucun enjeu financier."
    },
    {
      question: "Comment se déroule une soirée avec YesMoreBet ?",
      answer: "La soirée commence par l'accueil des invités et la distribution de jetons fictifs. Les participants jouent au Blackjack avec notre croupier professionnel et peuvent tenter leur chance à la Roue de la Chance. Les moments forts sont capturés avec nos lunettes connectées. En fin de soirée, les jetons accumulés sont convertis en tickets de tombola pour remporter les lots que vous avez choisis."
    },
    {
      question: "Combien de temps dure une animation ?",
      answer: "Nos animations sont flexibles et s'adaptent à votre événement. La durée standard est de 3 heures, mais nous pouvons proposer des formules plus courtes (2h) ou plus longues (4h) selon vos besoins et le type d'événement."
    },
    {
      question: "Faut-il prévoir un espace spécifique pour installer les tables ?",
      answer: "Oui, nous avons besoin d'un espace d'environ 15-20m² pour installer confortablement les tables de jeu et permettre une circulation fluide autour. L'idéal est un espace intérieur ou couvert, avec un éclairage suffisant et quelques chaises pour les joueurs."
    },
    {
      question: "Quel est le nombre minimum et maximum d'invités ?",
      answer: "Nous recommandons un minimum de 20 invités pour créer une belle ambiance. Le nombre maximum dépend de la formule choisie, mais nous pouvons accueillir jusqu'à 150 invités avec plusieurs tables de jeu en rotation."
    },
    {
      question: "Quels sont vos tarifs ?",
      answer: "Nos tarifs varient selon la formule choisie. La formule Essentielle (Blackjack + Croupier) commence à 590€, la formule Premium (+ Roue de la Chance) à 890€, et la formule Prestige (+ Lunettes connectées) à 1190€. Consultez notre page Prestations pour tous les détails."
    },
    {
      question: "Comment réserver une soirée avec YesMoreBet ?",
      answer: "Pour réserver, contactez-nous par téléphone au +33 6 26 51 22 17 ou via notre formulaire de contact. Nous échangerons sur vos besoins, la date souhaitée et la formule adaptée. Une fois votre choix validé, nous vous envoyons un devis détaillé et un contrat de prestation."
    },
    {
      question: "Que se passe-t-il en cas d'annulation ?",
      answer: "Les conditions d'annulation dépendent du délai. Annulation plus de 30 jours avant l'événement : remboursement intégral. Entre 15 et 30 jours : 50% du montant retenu. Moins de 15 jours : aucun remboursement. En cas de force majeure, nous étudions chaque situation au cas par cas."
    },
    {
      question: "Peut-on choisir les lots de la tombola ?",
      answer: "Absolument ! Vous êtes libre de choisir les lots de la tombola selon votre budget et vos préférences. Nous pouvons vous conseiller sur des lots adaptés à votre événement (coffrets cadeaux, bouteilles, bons d'achat, expériences...) ou vous pouvez fournir vos propres lots."
    },
    {
      question: "Les photos et vidéos sont-elles incluses ?",
      answer: "Les photos et vidéos capturées avec les lunettes connectées sont incluses uniquement dans la formule Prestige. Vous recevez un lien de téléchargement après l'événement pour récupérer tous vos souvenirs en haute qualité."
    },
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
    <div className="min-h-screen bg-black">
      <Header onNavigate={onNavigate} currentPage={currentPage} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[rgba(115,62,10,0.1)] to-[rgba(0,0,0,0)] pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl text-white leading-tight mb-6">
            <span className="bg-clip-text bg-gradient-to-r from-[#fdc700] to-[#d08700]" style={{ WebkitTextFillColor: "transparent" }}>
              Questions fréquentes
            </span>
          </h1>
          <div className="text-[#d1d5dc] max-w-2xl mx-auto space-y-4">
            <p>
              Tout ce que vous devez savoir sur{" "}
              <span className="bg-clip-text bg-gradient-to-r from-[#fdc700] to-[#d08700]" style={{ WebkitTextFillColor: "transparent" }}>
                YesMoreBet
              </span>
            </p>
            <p>
              Vous avez des questions ? Nous avons les réponses ! Découvrez tout ce qu'il faut savoir sur nos animations casino pour vos événements.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section - Style unifié avec la page d'accueil */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Catégorie 1: À propos de YesMoreBet */}
            <div>
              <h3 className="text-2xl text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#fdc700] to-[#d08700] flex items-center justify-center flex-shrink-0">
                  <Info className="w-5 h-5 text-black" />
                </div>
                <span>À propos de YesMoreBet</span>
              </h3>
              <div className="bg-gradient-to-br from-zinc-900/50 to-black/50 border border-white/10 rounded-lg overflow-hidden">
                <Accordion type="single" collapsible className="divide-y divide-white/5">
                  {[
                    faqs[0], faqs[1], faqs[2], faqs[3]
                  ].map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`concept-${index}`}
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

            {/* Catégorie 2: Réservation et Tarifs */}
            <div>
              <h3 className="text-2xl text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#fdc700] to-[#d08700] flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-5 h-5 text-black" />
                </div>
                <span>Réservation et Tarifs</span>
              </h3>
              <div className="bg-gradient-to-br from-zinc-900/50 to-black/50 border border-white/10 rounded-lg overflow-hidden">
                <Accordion type="single" collapsible className="divide-y divide-white/5">
                  {[
                    faqs[7], faqs[8], faqs[9], faqs[4]
                  ].map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`booking-${index}`}
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

            {/* Catégorie 3: Organisation et Logistique */}
            <div>
              <h3 className="text-2xl text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#fdc700] to-[#d08700] flex items-center justify-center flex-shrink-0">
                  <Settings className="w-5 h-5 text-black" />
                </div>
                <span>Organisation et Logistique</span>
              </h3>
              <div className="bg-gradient-to-br from-zinc-900/50 to-black/50 border border-white/10 rounded-lg overflow-hidden">
                <Accordion type="single" collapsible className="divide-y divide-white/5">
                  {[
                    faqs[5], faqs[6], faqs[17], faqs[18], faqs[15]
                  ].map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`logistics-${index}`}
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

            {/* Catégorie 4: Animation et Expérience */}
            <div>
              <h3 className="text-2xl text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#fdc700] to-[#d08700] flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-black" />
                </div>
                <span>Animation et Expérience</span>
              </h3>
              <div className="bg-gradient-to-br from-zinc-900/50 to-black/50 border border-white/10 rounded-lg overflow-hidden">
                <Accordion type="single" collapsible className="divide-y divide-white/5">
                  {[
                    faqs[13], faqs[14], faqs[16], faqs[10], faqs[19]
                  ].map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`experience-${index}`}
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

            {/* Catégorie 5: Personnalisation et Services */}
            <div>
              <h3 className="text-2xl text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#fdc700] to-[#d08700] flex items-center justify-center flex-shrink-0">
                  <Palette className="w-5 h-5 text-black" />
                </div>
                <span>Personnalisation et Services</span>
              </h3>
              <div className="bg-gradient-to-br from-zinc-900/50 to-black/50 border border-white/10 rounded-lg overflow-hidden">
                <Accordion type="single" collapsible className="divide-y divide-white/5">
                  {[
                    faqs[12], faqs[11]
                  ].map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`custom-${index}`}
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
        </div>
      </section>

      {/* Section Galerie L'ambiance YesMoreBet */}
      <section className="py-16 px-4 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl text-white leading-tight mb-4">
              <span>L'ambiance </span>
              <span className="bg-clip-text bg-gradient-to-r from-[#fdc700] to-[#d08700]" style={{ WebkitTextFillColor: "transparent" }}>
                YesMoreBet
              </span>
            </h2>
            <p className="text-white">Une expérience casino authentique et conviviale</p>
          </div>

          {/* Carousel simple avec 2 images */}
          <div className="rounded-2xl overflow-hidden relative h-[480px]">
            <div className="grid grid-cols-2 gap-4 h-full p-4">
              <div className="relative h-full rounded-lg overflow-hidden group">
                <img src={imgImageWithFallback} alt="Table de Blackjack professionnelle" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.2)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white">Table de Blackjack professionnelle</p>
                </div>
              </div>
              <div className="relative h-full rounded-lg overflow-hidden group">
                <img src={imgImageWithFallback1} alt="Roue de la Chance" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.2)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white">Roue de la Chance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Indicateurs de pagination */}
          <div className="flex justify-center gap-2 mt-6">
            <div className="w-8 h-2 bg-gradient-to-r from-[#fdc700] to-[#d08700] rounded-full" />
            {[...Array(6).keys()].map((i) => (
              <div key={i} className="w-2 h-2 bg-[#4a5565] rounded-full" />
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-16 px-4 bg-black">
        <div className="container mx-auto max-w-4xl">
          <div className="border border-[rgba(208,135,0,0.3)] rounded-lg p-12 text-center">
            <h2 className="text-white mb-4">Vous ne trouvez pas la réponse à votre question ?</h2>
            <p className="text-[#d1d5dc] mb-8 max-w-2xl mx-auto">
              Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans l'organisation de votre événement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+33626512217"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-[#fdc700] to-[#d08700] text-black rounded-lg hover:shadow-lg hover:scale-105 transition-all"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p28f08480} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
                Appelez-nous
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[rgba(255,255,255,0.1)] text-white rounded-lg border border-[rgba(208,135,0,0.3)] hover:bg-[rgba(255,255,255,0.15)] hover:scale-105 transition-all"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p2f723e40} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
                Envoyez un message
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
