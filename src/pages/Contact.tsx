import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import svgPaths from "../imports/svg-q3tn10xa7i";
import imgImageWithFallback from "figma:asset/b9fd6f1006240c3711190fd327f93fe2771b8641.png";
import imgImageWithFallback1 from "figma:asset/cd89cf336183c06875b2f6844fea2226329b918c.png";
import imgImageWithFallback2 from "figma:asset/da2db0edddc31aa30d1d88dfda260c1f4eae135b.png";
import { Instagram, MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

interface ContactProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Contact({ onNavigate, currentPage }: ContactProps) {
  return (
    <div className="min-h-screen bg-black">
      <Header onNavigate={onNavigate} currentPage={currentPage} />
      
      {/* Hero Section - À propos & Contact */}
      <section className="relative bg-gradient-to-b from-[rgba(115,62,10,0.1)] to-[rgba(0,0,0,0)] pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl text-white leading-tight mb-6">
            <span>À propos & </span>
            <span className="bg-clip-text bg-gradient-to-r from-[#fdc700] to-[#d08700] font-bold" style={{ WebkitTextFillColor: "transparent" }}>
              Contact
            </span>
          </h1>
          <p className="text-[#d1d5dc] text-lg leading-relaxed max-w-2xl mx-auto">
            Découvrez l'histoire de YesMoreBet et entrez en contact avec nous pour transformer votre événement
          </p>
        </div>
      </section>

      {/* Section À propos */}
      <section className="py-16 px-4 lg:px-12">
        <div className="container mx-auto max-w-[1199px]">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Image */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative h-[518px] w-full max-w-[491px] mx-auto">
                <div className="absolute bg-gradient-to-r blur-2xl filter from-[#fdc700] h-[406px] left-0 opacity-20 rounded-[10px] to-[#d08700] top-0 w-[383px]" />
                <div className="absolute h-[542px] left-1/2 rounded-[10px] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[490px] max-w-full">
                  <div className="box-border flex flex-col h-full items-center justify-center overflow-clip p-px relative rounded-[inherit] w-full border border-[rgba(208,135,0,0.3)]">
                    <div className="h-full relative shrink-0 w-full overflow-hidden rounded-[10px]">
                      <img alt="Guillaume - Croupier professionnel" className="w-full h-full object-cover" src={imgImageWithFallback} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contenu */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl text-white leading-tight mb-4">À propos</h3>
                <div className="bg-gradient-to-r from-[#fdc700] h-1 rounded-full to-[#d08700] w-20" />
              </div>

              <div className="space-y-4 text-[#d1d5dc]">
                <p className="text-lg leading-relaxed">
                  Je m'appelle Guillaume, croupier professionnel depuis plus de huit ans. J'ai créé YesMoreBet pour recréer l'excitation d'un casino sans enjeu d'argent réel : une expérience 100 % fictive et conforme, où l'on vient pour le plaisir, la convivialité et le spectacle.
                </p>
                <p className="text-lg leading-relaxed">
                  Au programme : table de blackjack, jetons personnalisés, règles expliquées avec pédagogie, et une animation sur-mesure qui fédère vos invités — mariages, entreprises, yachts, anniversaires…
                </p>
                <p className="text-lg leading-relaxed">
                  Mon rôle ? Mettre tout le monde à l'aise, faire monter l'ambiance et offrir un moment chic et fun dont on parle encore le lendemain.
                </p>
              </div>

              <p className="text-[#fdc700] text-lg leading-relaxed italic">
                "Avec YesMoreBet, vos invités jouent, rient et se défient dans une atmosphère élégante — comme au casino, mais sans argent réel."
              </p>

              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[rgba(115,62,10,0.3)] to-[rgba(137,75,0,0.3)] border border-[rgba(208,135,0,0.3)] rounded-[10px] px-4 py-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p19cc0740} fill="#FDC700" />
                  <path d="M4.16667 17.5H15.8333" stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
                <span className="text-white text-sm">8+ années d'expérience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section className="py-16 px-4 lg:px-12 bg-black">
        <div className="container mx-auto max-w-[1199px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl text-white leading-tight mb-6">
              Discutons de <span className="bg-clip-text bg-gradient-to-r from-[#fdc700] to-[#d08700]" style={{ WebkitTextFillColor: "transparent" }}>votre projet</span>
            </h2>
            <p className="text-[#d1d5dc] text-lg">
              Un mariage, un séminaire ou une soirée privée ? Racontez-nous votre projet et recevez une proposition personnalisée
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire */}
            <div className="border border-[rgba(208,135,0,0.3)] rounded-[10px] p-8 lg:p-12">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm mb-2">Nom</label>
                    <input
                      type="text"
                      placeholder="Dupont"
                      className="w-full bg-[rgba(0,0,0,0.5)] border border-[rgba(208,135,0,0.3)] rounded-lg px-3 py-2 text-white placeholder:text-[#6a7282] focus:outline-none focus:border-[#fdc700]"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm mb-2">Prénom</label>
                    <input
                      type="text"
                      placeholder="Jean"
                      className="w-full bg-[rgba(0,0,0,0.5)] border border-[rgba(208,135,0,0.3)] rounded-lg px-3 py-2 text-white placeholder:text-[#6a7282] focus:outline-none focus:border-[#fdc700]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    className="w-full bg-[rgba(0,0,0,0.5)] border border-[rgba(208,135,0,0.3)] rounded-lg px-3 py-2 text-white placeholder:text-[#6a7282] focus:outline-none focus:border-[#fdc700]"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm mb-2">Message</label>
                  <textarea
                    rows={6}
                    placeholder="Parlez-moi de votre projet..."
                    className="w-full bg-[rgba(0,0,0,0.5)] border border-[rgba(208,135,0,0.3)] rounded-lg px-3 py-2 text-white placeholder:text-[#6a7282] focus:outline-none focus:border-[#fdc700] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#fdc700] to-[#d08700] text-black py-3 rounded-lg hover:shadow-lg hover:scale-105 transition-all text-center bg-[rgba(0,0,0,0)] font-bold"
                >
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Coordonnées */}
            <div className="space-y-8">
              <div>
                <h3 className="text-white text-xl mb-6">Coordonnées</h3>
                
                <div className="space-y-4">
                  {/* Email */}
                  <div className="flex gap-4 items-start">
                    <div className="border border-[rgba(208,135,0,0.3)] rounded-lg p-3">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                        <path d={svgPaths.p2f8e7e80} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        <path d={svgPaths.p17070980} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#99a1af] text-sm mb-1">Email</p>
                      <a href="mailto:contact@yesmorebet.fr" className="text-white hover:text-[#fdc700] transition-colors">
                        contact@yesmorebet.fr
                      </a>
                    </div>
                  </div>

                  {/* Téléphone */}
                  <div className="flex gap-4 items-start">
                    <div className="border border-[rgba(208,135,0,0.3)] rounded-lg p-3">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 16 16">
                        <path d={svgPaths.p26187580} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#99a1af] text-sm mb-1">Téléphone</p>
                      <a href="tel:+33123456789" className="text-white hover:text-[#fdc700] transition-colors">
                        +33 1 23 45 67 89
                      </a>
                    </div>
                  </div>

                  {/* Localisation */}
                  <div className="flex gap-4 items-start">
                    <div className="border border-[rgba(208,135,0,0.3)] rounded-lg p-3">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 16 16">
                        <path d={svgPaths.p14548f00} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        <path d={svgPaths.p17781bc0} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#99a1af] text-sm mb-1">Localisation</p>
                      <p className="text-white">Basé à Grasse (06)</p>
                      <p className="text-[#99a1af] text-sm mt-1">
                        Zone : Grasse, Cannes, Antibes, Nice et toute la région Sud
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div>
                <h3 className="text-white text-xl mb-4">Suivez-nous</h3>
                <div className="flex gap-4 mb-4">
                  <a href="#" className="border border-[rgba(208,135,0,0.3)] rounded-lg p-3 hover:bg-[rgba(208,135,0,0.1)] transition-colors">
                    <Instagram className="w-5 h-5" stroke="#FDC700" />
                  </a>
                  <a href="#" className="border border-[rgba(208,135,0,0.3)] rounded-lg p-3 hover:bg-[rgba(208,135,0,0.1)] transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 18 18">
                      <path d={svgPaths.p3c358280} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </a>
                </div>
                <p className="text-[#99a1af] text-sm">
                  Certains moments peuvent être partagés sur nos réseaux (avec accord des participants).
                </p>
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
            <p className="text-white text-lg leading-relaxed">Une expérience casino authentique et conviviale</p>
          </div>

          {/* Carousel simple avec 2 images */}
          <div className="rounded-2xl overflow-hidden relative h-[480px]">
            <div className="grid grid-cols-2 gap-4 h-full p-4">
              <div className="relative h-full rounded-lg overflow-hidden group">
                <img src={imgImageWithFallback1} alt="Table de Blackjack professionnelle" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.2)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-lg">Table de Blackjack professionnelle</p>
                </div>
              </div>
              <div className="relative h-full rounded-lg overflow-hidden group">
                <img src={imgImageWithFallback2} alt="Roue de la Chance" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.2)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-lg">Roue de la Chance</p>
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

      {/* Section FAQ Contact */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* En-tête de section */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-3">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-yellow-400"></div>
                <h2 className="text-3xl md:text-5xl text-white leading-tight">
                  Questions fréquentes
                </h2>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-yellow-400"></div>
              </div>
              <p className="text-gray-400 text-lg">
                Tout savoir sur comment nous joindre et obtenir une réponse rapide
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="bg-gradient-to-br from-zinc-900/50 to-black/50 border border-white/10 rounded-lg overflow-hidden">
              <Accordion type="single" collapsible className="divide-y divide-white/5">
                {/* Question 1 */}
                <AccordionItem value="contact-1" className="border-0 px-6 md:px-8">
                  <AccordionTrigger className="text-white hover:text-yellow-400 transition-colors text-left py-6 hover:no-underline">
                    Sous quel délai puis-je espérer une réponse ?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 pb-6 leading-relaxed">
                    Nous nous engageons à vous répondre dans les 24 heures maximum, 7 jours sur 7. Pour une urgence ou une demande de dernière minute, n'hésitez pas à nous appeler directement au +33 6 26 51 22 17, nous serons ravis de vous répondre immédiatement.
                  </AccordionContent>
                </AccordionItem>

                {/* Question 2 */}
                <AccordionItem value="contact-2" className="border-0 px-6 md:px-8">
                  <AccordionTrigger className="text-white hover:text-yellow-400 transition-colors text-left py-6 hover:no-underline">
                    Intervenez-vous uniquement sur la Côte d'Azur ?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 pb-6 leading-relaxed">
                    Nous sommes basés à Grasse et intervenons principalement sur la Côte d'Azur (Grasse, Cannes, Antibes, Nice, Monaco, Saint-Tropez). Pour des événements en dehors de cette zone, contactez-nous : nous étudions chaque demande et pouvons nous déplacer dans le Var, les Bouches-du-Rhône ou même à l'international selon votre projet.
                  </AccordionContent>
                </AccordionItem>

                {/* Question 3 */}
                <AccordionItem value="contact-3" className="border-0 px-6 md:px-8">
                  <AccordionTrigger className="text-white hover:text-yellow-400 transition-colors text-left py-6 hover:no-underline">
                    Comment obtenir un devis personnalisé ?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 pb-6 leading-relaxed">
                    C'est très simple ! Remplissez notre formulaire de contact en détaillant votre projet (date, lieu, nombre d'invités, type d'événement, formule souhaitée). Vous pouvez aussi nous appeler directement pour en discuter. Nous vous enverrons ensuite un devis détaillé et personnalisé par email dans les 48 heures.
                  </AccordionContent>
                </AccordionItem>

                {/* Question 4 */}
                <AccordionItem value="contact-4" className="border-0 px-6 md:px-8">
                  <AccordionTrigger className="text-white hover:text-yellow-400 transition-colors text-left py-6 hover:no-underline">
                    Puis-je vérifier vos disponibilités avant de m'engager ?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 pb-6 leading-relaxed">
                    Absolument ! Lors de votre premier contact, indiquez-nous simplement votre date souhaitée. Nous vérifions immédiatement nos disponibilités et vous confirmons si cette date est libre. Aucun engagement de votre part n'est nécessaire pour cette vérification.
                  </AccordionContent>
                </AccordionItem>

                {/* Question 5 */}
                <AccordionItem value="contact-5" className="border-0 px-6 md:px-8">
                  <AccordionTrigger className="text-white hover:text-yellow-400 transition-colors text-left py-6 hover:no-underline">
                    Avez-vous des références ou témoignages clients ?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 pb-6 leading-relaxed">
                    Oui, nous avons de nombreux témoignages de clients satisfaits (mariages, entreprises, événements privés). N'hésitez pas à nous demander des références lors de votre prise de contact, nous serons ravis de partager les retours d'expérience de nos précédents clients avec vous.
                  </AccordionContent>
                </AccordionItem>

                {/* Question 6 */}
                <AccordionItem value="contact-6" className="border-0 px-6 md:px-8">
                  <AccordionTrigger className="text-white hover:text-yellow-400 transition-colors text-left py-6 hover:no-underline">
                    Peut-on vous rencontrer avant l'événement ?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 pb-6 leading-relaxed">
                    Bien sûr ! Pour les événements importants (mariages, grands séminaires), nous proposons systématiquement une rencontre préalable pour discuter de vos attentes, voir le lieu de l'événement et affiner tous les détails. Cela permet de créer une relation de confiance et de garantir une animation parfaitement adaptée à vos besoins.
                  </AccordionContent>
                </AccordionItem>

                {/* Question 7 */}
                <AccordionItem value="contact-7" className="border-0 px-6 md:px-8">
                  <AccordionTrigger className="text-white hover:text-yellow-400 transition-colors text-left py-6 hover:no-underline">
                    Quels sont vos horaires de disponibilité téléphonique ?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 pb-6 leading-relaxed">
                    Nous sommes joignables du lundi au dimanche de 9h à 20h. En dehors de ces horaires, vous pouvez nous laisser un message via le formulaire de contact ou par SMS, nous vous recontacterons dès que possible, généralement le lendemain matin.
                  </AccordionContent>
                </AccordionItem>

                {/* Question 8 */}
                <AccordionItem value="contact-8" className="border-0 px-6 md:px-8">
                  <AccordionTrigger className="text-white hover:text-yellow-400 transition-colors text-left py-6 hover:no-underline">
                    Travaillez-vous avec des wedding planners ou organisateurs d'événements ?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 pb-6 leading-relaxed">
                    Oui, nous collaborons régulièrement avec des wedding planners, agences événementielles et traiteurs. Nous avons l'habitude de travailler en coordination avec d'autres prestataires pour garantir un événement fluide et réussi. N'hésitez pas à nous mettre en relation avec votre organisateur.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* CTA en bas de FAQ */}
            <div className="mt-12 text-center border border-[rgba(208,135,0,0.3)] rounded-lg p-8 bg-gradient-to-br from-[rgba(115,62,10,0.1)] to-[rgba(0,0,0,0)]">
              <MessageCircle className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-white text-2xl mb-3">Une autre question ?</h3>
              <p className="text-gray-400 mb-6 max-w-xl mx-auto">
                N'hésitez pas à nous contacter directement. Nous sommes là pour répondre à toutes vos interrogations et vous aider à organiser votre événement parfait.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+33626512217"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-[#fdc700] to-[#d08700] text-black rounded-lg hover:shadow-lg hover:scale-105 transition-all"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 16 16">
                    <path d={svgPaths.p26187580} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                  +33 6 26 51 22 17
                </a>
                <button
                  onClick={() => onNavigate('faq')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[rgba(255,255,255,0.1)] text-white rounded-lg border border-[rgba(208,135,0,0.3)] hover:bg-[rgba(255,255,255,0.15)] hover:scale-105 transition-all"
                >
                  Voir toutes les FAQ
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
