import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

// Import des images et SVG paths de Figma
import svgPaths from "../imports/svg-rhcqju84e9";
import imgImageWithFallback from "figma:asset/9272d40209142abac12d843a413731189c8dda4a.png";
import imgImageWithFallback1 from "figma:asset/722e83523026f282038a82b12d7583452b7f7171.png";
import imgImageWithFallback2 from "figma:asset/f1fd880b7ebd6cefe53c02dea028ee006ec531c2.png";
import imgImageWithFallback3 from "figma:asset/2b3bcaad731be6d39705219bac944d3f12ea3f62.png";
import imgImageWithFallback4 from "figma:asset/cd89cf336183c06875b2f6844fea2226329b918c.png";
import imgImageWithFallback5 from "figma:asset/da2db0edddc31aa30d1d88dfda260c1f4eae135b.png";

interface PrestationsProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Prestations({ onNavigate, currentPage }: PrestationsProps) {
  return (
    <div className="min-h-screen bg-black">
      <Header onNavigate={onNavigate} currentPage={currentPage} />
      
      {/* Hero Section */}
      <section className="relative bg-black pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={imgImageWithFallback3} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[rgba(0,0,0,0.8)] to-black" />
        
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-[rgba(208,135,0,0.2)] border border-[rgba(208,135,0,0.3)] rounded-full px-6 py-2 text-[#fdc700]">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                <path d={svgPaths.p1d19c880} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                <path d="M13.3333 1.33333V4" stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                <path d="M14.6667 2.66667H12" stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                <path d={svgPaths.p22966600} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
              <span>Animation casino fictif sans argent réel</span>
            </span>
          </div>
          
          <h1 className="text-white mb-6">
            <span className="bg-clip-text bg-gradient-to-r from-[#fdc700] to-[#d08700]" style={{ WebkitTextFillColor: "transparent" }}>
              Prestations
            </span>
            <span> & tarifs</span>
          </h1>
          
          <div className="text-white max-w-3xl mx-auto space-y-4">
            <p>Nos formules s'adaptent à la taille et au rythme de votre événement.</p>
            <p>Que vous soyez 20 ou 100 invités, YesMoreBet garantit une animation fluide et mémorable.</p>
          </div>
        </div>
      </section>

      {/* Section des 3 formules */}
      <section className="py-16 px-4 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="relative">
            {/* Badge Recommandée - positionné au-dessus de la grille */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 md:left-[50%] bg-gradient-to-r from-[#facc15] to-[#ca8a04] text-black px-6 py-2 rounded-lg shadow-[0px_10px_15px_-3px_rgba(250,204,21,0.3)] z-30">
              Recommandée
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {/* Formule Découverte */}
              <div className="bg-[rgba(255,255,255,0)] rounded-lg overflow-hidden shadow-[0px_10px_15px_-3px_rgba(208,135,0,0.1),0px_4px_6px_-4px_rgba(208,135,0,0.1)]">
                <div className="h-64 overflow-hidden relative">
                  <ImageWithFallback src={imgImageWithFallback} alt="Découverte" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-[rgba(0,0,0,0.7)] to-transparent" />
                </div>
                
                <div className="p-6 border border-[rgba(208,135,0,0.3)] border-t-0">
                  <h3 className="text-white text-center mb-4">Découverte</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center gap-2 text-white">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                        <path d="M10 5V10L13.3333 11.6667" stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d={svgPaths.p14d24500} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </svg>
                      <span>2/3h d'animation</span>
                    </div>
                    
                    <div className="flex items-center justify-center gap-2 text-white">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                        <path d={svgPaths.p25397b80} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d={svgPaths.p18406864} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d={svgPaths.p2241fff0} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d={svgPaths.p2c4f400} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </svg>
                      <span>entre 20 et 40 personnes</span>
                    </div>
                    
                    <div className="flex items-center justify-center gap-2 border-t border-[#1e2939] pt-2">
                      <span className="text-[#fdc700]">✓</span>
                      <span className="text-white text-sm">Anniversaires, soirées entre amis</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-[rgba(208,135,0,0.3)] pt-4">
                    <div className="text-center">
                      <span className="bg-clip-text bg-gradient-to-r from-[#fdc700] to-[#d08700]" style={{ WebkitTextFillColor: "transparent" }}>450 €</span>
                      <span className="text-[#99a1af] ml-2">TTC</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formule Classique (mise en avant) */}
              <div className="bg-[rgba(0,0,0,0.2)] rounded-lg overflow-hidden shadow-[0px_0px_0px_2px_#d08700,0px_25px_50px_-12px_rgba(208,135,0,0.3)] relative">
                <div className="h-64 overflow-hidden relative">
                  <ImageWithFallback src={imgImageWithFallback1} alt="Classique" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-[rgba(0,0,0,0.7)] to-transparent" />
                </div>
              
              <div className="p-6 border border-[rgba(208,135,0,0.3)] border-t-0">
                <h3 className="text-white text-center mb-4">Classique</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center gap-2 text-white">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 21 21">
                      <path d="M10.5 5.25V10.5L14 12.25" stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                      <path d={svgPaths.p16460300} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                    </svg>
                    <span>4/5h d'animation</span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 text-[#d1d5dc]">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 21 21">
                      <path d={svgPaths.p2265e500} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                      <path d={svgPaths.p2a1bd260} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                      <path d={svgPaths.p1414c800} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                      <path d={svgPaths.p18641020} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                    </svg>
                    <span>entre 40 et 60 personnes</span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 border-t border-[#1e2939] pt-2">
                    <span className="text-[#fdc700]">✓</span>
                    <span className="text-[rgb(255,255,255)] text-sm font-bold">Mariages, <span className="text-white">entreprises</span></span>
                  </div>
                </div>
                
                <div className="border-t border-[rgba(208,135,0,0.3)] pt-4">
                  <div className="text-center">
                    <span className="bg-clip-text bg-gradient-to-r from-[#fdc700] to-[#d08700]" style={{ WebkitTextFillColor: "transparent" }}>700 €</span>
                    <span className="text-[#99a1af] ml-2">TTC</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Formule Prestige */}
            <div className="bg-[rgba(255,255,255,0)] rounded-lg overflow-hidden shadow-[0px_10px_15px_-3px_rgba(208,135,0,0.1),0px_4px_6px_-4px_rgba(208,135,0,0.1)]">
              <div className="h-64 overflow-hidden relative">
                <ImageWithFallback src={imgImageWithFallback2} alt="Prestige" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-[rgba(0,0,0,0.7)] to-transparent" />
              </div>
              
              <div className="p-6 border border-[rgba(208,135,0,0.3)] border-t-0">
                <h3 className="text-white text-center mb-4">Prestige</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center gap-2 text-white">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                      <path d="M10 5V10L13.3333 11.6667" stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p14d24500} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </svg>
                    <span>6/7h d'animation</span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 text-white">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                      <path d={svgPaths.p25397b80} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p18406864} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p2241fff0} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p2c4f400} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </svg>
                    <span>entre 60 et 100 personnes</span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 border-t border-[#1e2939] pt-2">
                    <span className="text-[#fdc700]">✓</span>
                    <span className="text-white text-sm">Grandes soirées, yachts</span>
                  </div>
                </div>
                
                <div className="border-t border-[rgba(208,135,0,0.3)] pt-4">
                  <div className="text-center">
                    <span className="bg-clip-text bg-gradient-to-r from-[#fdc700] to-[#d08700]" style={{ WebkitTextFillColor: "transparent" }}>950 €</span>
                    <span className="text-[#99a1af] ml-2">TTC</span>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section "Chaque prestation comprend" */}
      <section className="py-16 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl text-white leading-tight mb-4">
              <span className="font-['Quicksand:Regular',sans-serif]">Chaque </span>
              <span className="bg-clip-text bg-gradient-to-r from-[#fdc700] to-[#d08700]" style={{ WebkitTextFillColor: "transparent" }}>prestation</span>
              <span className="font-['Quicksand:Regular',sans-serif]"> comprend</span>
            </h2>
            <p className="text-white text-lg leading-relaxed">Tout le nécessaire pour une soirée réussie</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Table de Blackjack complète",
                description: "Table professionnelle avec tous les accessoires nécessaires"
              },
              {
                title: "Roue de la Chance",
                description: "Grande roue pour gagner des tickets de tombola"
              },
              {
                title: "Croupier professionnel",
                description: "Animation par un croupier expérimenté et convivial"
              },
              {
                title: "Lunettes connectées",
                description: "Photos et vidéos souvenirs à partager sur les réseaux"
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-4 p-6 border border-[rgba(208,135,0,0.3)] rounded-lg shadow-[0px_10px_15px_-3px_rgba(208,135,0,0.1),0px_4px_6px_-4px_rgba(208,135,0,0.1)]">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p32ddfd00} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white mb-2">{item.title}</h3>
                  <p className="text-[#99a1af] text-lg leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section des conditions (déplacement, durée, paiement, annulation) */}
      <section className="py-16 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Supplément déplacement */}
            <div className="p-6 border border-[rgba(208,135,0,0.3)] rounded-lg shadow-[0px_4px_6px_-1px_rgba(208,135,0,0.1),0px_2px_4px_-2px_rgba(208,135,0,0.1)]">
              <div className="flex gap-2 items-start mb-4">
                <svg className="w-5 h-5 flex-shrink-0 mt-1" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p26ddc800} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.p35ba4680} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
                <h3 className="text-white">Supplément déplacement</h3>
              </div>
              <p className="text-[#d1d5dc] text-lg leading-relaxed mb-4">
                <span className="text-[#fdc700]">0,65 €</span> par kilomètre au-delà de 25 km (aller simple).
              </p>
              <p className="text-[#99a1af] text-sm">
                Exemple : Nice ≈ 9,75 € supplémentaires.
              </p>
            </div>

            {/* Conditions de durée */}
            <div className="p-6 border border-[rgba(208,135,0,0.3)] rounded-lg shadow-[0px_4px_6px_-1px_rgba(208,135,0,0.1),0px_2px_4px_-2px_rgba(208,135,0,0.1)]">
              <div className="flex gap-2 items-start mb-4">
                <svg className="w-5 h-5 flex-shrink-0 mt-1" fill="none" viewBox="0 0 20 20">
                  <path d="M10 5V10L13.3333 11.6667" stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.p14d24500} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
                <h3 className="text-white">Conditions de durée</h3>
              </div>
              <p className="text-[#d1d5dc] text-lg leading-relaxed mb-4">
                Chaque formule inclut jusqu'à 2/3h, 5h ou 7h selon le forfait.
              </p>
              <p className="text-[#d1d5dc] text-lg leading-relaxed mb-4">
                Prolongation possible au tarif de <span className="text-[#fdc700]">100 € par heure</span> supplémentaire entamée.
              </p>
              <div className="bg-[rgba(115,62,10,0.2)] border border-[rgba(208,135,0,0.3)] rounded-lg p-3 flex gap-2 items-start">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p39ee6532} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M8 5.33333V8" stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M8 10.6667H8.00667" stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
                <p className="text-[#d1d5dc] text-sm">
                  Le paiement vaut acceptation des conditions.
                </p>
              </div>
            </div>

            {/* Modalités de paiement */}
            <div className="p-6 border border-[rgba(208,135,0,0.3)] rounded-lg shadow-[0px_4px_6px_-1px_rgba(208,135,0,0.1),0px_2px_4px_-2px_rgba(208,135,0,0.1)]">
              <div className="flex gap-2 items-start mb-4">
                <svg className="w-5 h-5 flex-shrink-0 mt-1" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p16dd5f0} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d="M1.66667 8.33333H18.3333" stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
                <h3 className="text-white">Modalités de paiement</h3>
              </div>
              <div className="space-y-3">
                <div className="flex gap-2 items-start">
                  <svg className="w-4 h-4 flex-shrink-0 mt-1" fill="none" viewBox="0 0 16 16">
                    <path d={svgPaths.p39be50} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                  <p className="text-[#d1d5dc] text-lg leading-relaxed">
                    Acompte de <span className="text-[#fdc700]">30 %</span> à la réservation
                  </p>
                </div>
                <div className="flex gap-2 items-start">
                  <svg className="w-4 h-4 flex-shrink-0 mt-1" fill="none" viewBox="0 0 16 16">
                    <path d={svgPaths.p39be50} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                  <p className="text-[#d1d5dc] text-lg leading-relaxed">
                    Solde le jour de la prestation
                  </p>
                </div>
              </div>
            </div>

            {/* Conditions d'annulation */}
            <div className="p-6 border border-[rgba(208,135,0,0.3)] rounded-lg shadow-[0px_4px_6px_-1px_rgba(208,135,0,0.1),0px_2px_4px_-2px_rgba(208,135,0,0.1)]">
              <div className="flex gap-2 items-start mb-4">
                <svg className="w-5 h-5 flex-shrink-0 mt-1" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p14d24500} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d="M10 6.66667V10" stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d="M10 13.3333H10.0083" stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
                <h3 className="text-white">Conditions d'annulation</h3>
              </div>
              <div className="space-y-3">
                <div className="flex gap-2 items-start">
                  <span className="text-[#fdc700]">→</span>
                  <p className="text-[#d1d5dc] text-lg leading-relaxed">
                    <span className="text-[#fdc700]">&gt; 14 jours</span> : acompte remboursé
                  </p>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="text-[#fdc700]">→</span>
                  <p className="text-[#d1d5dc] text-lg leading-relaxed">
                    <span className="text-[#fdc700]">&lt; 14 jours</span> : acompte non remboursable
                  </p>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="text-[#fdc700]">→</span>
                  <p className="text-[#d1d5dc] text-lg leading-relaxed">
                    <span className="text-[#fdc700]">&lt; 72 h</span> : 90 % du montant dû
                  </p>
                </div>
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
              <span className="font-['Quicksand:Medium',sans-serif]">L'ambiance </span>
              <span className="bg-clip-text bg-gradient-to-r from-[#fdc700] to-[#d08700]" style={{ WebkitTextFillColor: "transparent" }}>
                YesMoreBet
              </span>
            </h2>
            <p className="text-white text-lg leading-relaxed">Une expérience casino authentique et conviviale</p>
          </div>

          {/* Carousel simple avec 2 images */}
          <div className="rounded-2xl overflow-hidden relative h-[480px]">
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="relative h-full rounded-lg overflow-hidden">
                <img src={imgImageWithFallback4} alt="Table de Blackjack professionnelle" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.2)] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-lg">Table de Blackjack professionnelle</p>
                </div>
              </div>
              <div className="relative h-full rounded-lg overflow-hidden">
                <img src={imgImageWithFallback5} alt="Roue de la Chance" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.2)] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
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

      {/* Section FAQ */}
      <section className="py-16 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#d08700]" />
            <h2 className="text-3xl md:text-5xl text-white leading-tight text-center">Questions fréquentes</h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#d08700]" />
          </div>
          <p className="text-[#99a1af] text-lg leading-relaxed text-center mb-12">
            Tout ce que vous devez savoir sur nos animations casino
          </p>

          <div className="bg-gradient-to-br from-zinc-900/50 to-black/50 border border-white/10 rounded-lg overflow-hidden">
            <Accordion type="single" collapsible className="divide-y divide-white/5">
              {[
                {
                  question: "Quelle est la différence entre vos trois formules ?",
                  answer: "La formule Découverte (2/3h, 20-40 personnes, 450€) est idéale pour les anniversaires et soirées entre amis. La formule Classique (4/5h, 40-60 personnes, 700€) est notre offre recommandée pour les mariages et événements d'entreprise. La formule Prestige (6/7h, 60-80 personnes, 950€) convient aux grandes soirées et événements sur yachts avec une animation prolongée."
                },
                {
                  question: "Fournissez-vous le matériel sonore et l'éclairage ?",
                  answer: "Nous fournissons tout le matériel de jeu (table de blackjack, jetons, cartes) et les lunettes connectées pour capturer les moments forts. Le matériel sonore et l'éclairage ambiant ne sont pas inclus, mais nous pouvons vous recommander des prestataires partenaires si besoin."
                },
                {
                  question: "Les joueurs doivent-ils connaître les règles du Blackjack à l'avance ?",
                  answer: "Absolument pas ! Notre croupier professionnel explique les règles de manière simple et ludique en début de partie. Il accompagne les débutants tout au long de l'animation pour que chacun puisse profiter pleinement de l'expérience, quel que soit son niveau."
                },
                {
                  question: "Peut-on réserver pour un événement professionnel ?",
                  answer: "Oui, nos formules Classique et Prestige sont particulièrement adaptées aux événements d'entreprise : soirées de fin d'année, team building, lancements de produits, séminaires. Nous pouvons personnaliser l'animation selon vos besoins et votre image de marque."
                },
                {
                  question: "Que se passe-t-il si un joueur perd tous ses jetons ?",
                  answer: "Pas de panique ! Chaque joueur peut refaire le plein de jetons autant de fois que nécessaire pendant la soirée. L'objectif est que tout le monde s'amuse et participe à la tombola finale, pas de créer de la frustration. C'est avant tout une animation conviviale."
                },
                {
                  question: "Intervenez-vous également sur des bateaux ou yachts ?",
                  answer: "Oui, notre formule Prestige est spécialement conçue pour les événements sur yachts et bateaux sur la Côte d'Azur. Nous adaptons notre installation aux contraintes de l'espace et veillons à la sécurité du matériel en milieu maritime."
                },
                {
                  question: "Combien de temps faut-il pour installer et désinstaller le matériel ?",
                  answer: "L'installation nécessite environ 30 à 45 minutes avant le début de l'animation. Le démontage prend environ 20 à 30 minutes. Nous gérons tout en autonomie et de manière discrète pour ne pas perturber votre événement."
                },
                {
                  question: "Peut-on avoir plusieurs croupiers pour un grand événement ?",
                  answer: "Oui, pour les événements de plus de 80 personnes ou si vous souhaitez plusieurs tables de jeu simultanées, nous pouvons mobiliser plusieurs croupiers professionnels. Contactez-nous pour un devis personnalisé adapté à la taille de votre événement."
                }
              ].map((faq, index) => (
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
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl text-white leading-tight mb-6">
            Prêt à transformer votre événement<br />
            en <span className="bg-clip-text bg-gradient-to-r from-[#fdc700] to-[#d08700]" style={{ WebkitTextFillColor: "transparent" }}>soirée inoubliable ?</span>
          </h2>
          <p className="text-white text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Réservez dès maintenant votre animation casino et offrez à vos invités une expérience unique, conviviale et pleine de souvenirs.
          </p>
          <a
            href="/#contact"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
              setTimeout(() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#fdc700] to-[#d08700] text-black rounded-lg shadow-[0px_10px_15px_-3px_rgba(208,135,0,0.2),0px_4px_6px_-4px_rgba(208,135,0,0.2)] hover:shadow-lg hover:scale-105 transition-all"
          >
            Réserver une prestation →
          </a>
          <p className="text-white mt-6">Réponse sous 24h • Devis personnalisé gratuit</p>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
