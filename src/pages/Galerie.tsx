import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import svgPaths from "../imports/svg-mlp1re2fvt";
import imgImageWithFallback from "figma:asset/f02209812fbd0ce205d5c03df14aab752a303e55.png";
import imgImageWithFallback1 from "figma:asset/394b0427825b38310d126720ed55da6a9aba1810.png";
import imgImageWithFallback2 from "figma:asset/1f9018131dbe4e864b2ae51cd3f1dc45b9e97262.png";
import imgImageWithFallback3 from "figma:asset/60c4a79ca457d69435c4bf55119b5e96ebfd1acd.png";
import imgImageWithFallback4 from "figma:asset/646aea610b777cae1391c58069d4da92250537b9.png";
import imgImageWithFallback5 from "figma:asset/ff3e2b781516ca3cb066fde16c564692b05f7da2.png";
import imgImageWithFallback6 from "figma:asset/cd89cf336183c06875b2f6844fea2226329b918c.png";
import imgImageWithFallback7 from "figma:asset/13c89b9c8ae0afcfea18a12be11b149ced93266f.png";
import imgImageWithFallback8 from "figma:asset/889850bc70eec69d8508b14e794b6014cc94541f.png";
import imgImageWithFallback9 from "figma:asset/1ae0e975a995662db46a0145e65287b6f6c95c74.png";
import imgImageWithFallback10 from "figma:asset/ffc0787832c1cc4426b2341d8d427f6fe0322448.png";
import imgImageWithFallback11 from "figma:asset/da2db0edddc31aa30d1d88dfda260c1f4eae135b.png";

interface GalerieProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

// Composants du Hero Section
function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] h-[437px] items-start leading-[0] relative shrink-0 tracking-[-0.3125px] w-full max-w-[920px]" data-name="Container">
      <h1 className="text-3xl md:text-5xl text-white leading-tight">
        <span>{`Un aperçu de l'expérience `}</span>
        <span className="bg-clip-text bg-gradient-to-r from-[#fdc700] to-[#d08700] font-bold" style={{ WebkitTextFillColor: "transparent" }}>
          YesMoreBet
        </span>
      </h1>
      <div className="space-y-4 text-[#d1d5dc]">
        <p className="text-lg leading-relaxed">{`Nos lunettes connectées capturent l'ambiance authentique de vos événements pour créer des souvenirs uniques à partager.`}</p>
        <p className="text-lg leading-relaxed">{`Découvrez les moments forts de nos animations casino : tables de Blackjack enflammées, roues de la chance en action, et surtout des invités qui s'amusent dans une ambiance conviviale et élégante. Chaque événement est unique, chaque souvenir est précieux.`}</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_66_974)" id="Icon">
          <path d={svgPaths.p4b98700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3162b40} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M14.5833 5.41667H14.5917" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_66_974">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[192.859px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[192.859px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Suivez-nous sur Instagram</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[50px] relative rounded-[10px] shrink-0 w-[274.859px] hover:bg-[rgba(255,255,255,0.15)] hover:scale-105 transition-all cursor-pointer" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[rgba(208,135,0,0.5)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[50px] items-center justify-center p-px relative w-[274.859px]">
        <Icon />
        <Text />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[190.094px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[190.094px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-black text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Réserver votre événement</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-gradient-to-r from-[#fdc700] h-[50px] relative rounded-[10px] shrink-0 to-[#d08700] w-[238.094px] hover:scale-105 hover:shadow-lg transition-all cursor-pointer" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[50px] items-center justify-center relative w-[238.094px]">
        <Text1 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[12px] h-[50px] items-start relative shrink-0 w-[543.5px]" data-name="Container">
      <Link />
      <Link1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[46px] h-[437px] items-start relative rounded-[8px] shrink-0 w-full max-w-[969px]" data-name="Container">
      <Container />
      <Container1 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute h-[640px] left-[calc(50%+0.5px)] top-[calc(50%+5.5px)] translate-x-[-50%] translate-y-[-50%] w-[360px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d={svgPaths.p3c1f6780} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-gradient-to-r box-border content-stretch flex from-[#fdc700] items-center justify-center left-[70px] pl-[8px] pr-0 py-0 rounded-[1.67772e+07px] size-[96px] to-[#d08700] top-[32px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Paragraph() {
  return <div className="absolute h-[20px] left-0 top-[140px] w-[235.68px]" data-name="Paragraph" />;
}

function Container4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.4)] h-[160px] left-[calc(50%+0.34px)] top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[235.68px]" data-name="Container">
      <Container3 />
      <Paragraph />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[596px] relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback />
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#101828] h-[597px] relative rounded-[8px] shrink-0 w-full max-w-[401px]" data-name="Container">
      <div className="content-stretch flex flex-col h-[597px] items-start overflow-clip relative rounded-[inherit] w-full">
        <Container5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(208,135,0,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Section() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 py-16 px-4 lg:px-12 relative w-full max-w-[1199px] mx-auto">
      <div className="w-full lg:w-[60%]">
        <Container2 />
      </div>
      <div className="w-full lg:w-[30%]">
        <Container6 />
      </div>
    </div>
  );
}

// Composants de la galerie (simplifié pour l'espace)
function GalleryImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`bg-[#101828] overflow-clip rounded-[10px] ${className}`}>
      <div className="relative h-full group">
        <img alt={alt} className="w-full h-full object-cover" src={src} />
        <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0)] via-50% via-[rgba(0,0,0,0.2)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-0 flex items-end p-4">
          <p className="text-white text-lg">{alt}</p>
        </div>
      </div>
    </div>
  );
}

export function Galerie({ onNavigate, currentPage }: GalerieProps) {
  return (
    <div className="min-h-screen bg-black">
      <Header onNavigate={onNavigate} currentPage={currentPage} />
      
      <main className="pt-[80px] bg-black">
        {/* Hero Section */}
        <Section />

        {/* Gallery Grid Section */}
        <section className="py-16 px-4 bg-black">
          <div className="container mx-auto max-w-[1447px]">
            {/* Titre de la galerie */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl text-white leading-tight mb-4">
                <span className="font-['Quicksand:Medium',sans-serif]">L'ambiance </span>
                <span className="bg-clip-text bg-gradient-to-r from-[#fdc700] to-[#d08700] font-['Quicksand:SemiBold',sans-serif] font-semibold" style={{ WebkitTextFillColor: "transparent" }}>
                  YesMoreBet
                </span>
              </h2>
              <p className="text-white text-lg leading-relaxed">Une expérience casino authentique et conviviale</p>
            </div>

            {/* Grid de galerie - version responsive */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[10px]">
              {/* Colonne 1 */}
              <div className="flex flex-col gap-[10px]">
                <GalleryImage src={imgImageWithFallback1} alt="Table de Blackjack professionnelle" className="h-[320px]" />
                <GalleryImage src={imgImageWithFallback2} alt="Ambiance festive" className="h-[384px]" />
                <GalleryImage src={imgImageWithFallback3} alt="Décoration élégante noir et or" className="h-[256px]" />
              </div>

              {/* Colonne 2 */}
              <div className="flex flex-col gap-[10px]">
                <GalleryImage src={imgImageWithFallback4} alt="Roue de la Chance" className="h-[384px]" />
                <GalleryImage src={imgImageWithFallback5} alt="Invités s'amusant ensemble" className="h-[256px]" />
                <GalleryImage src={imgImageWithFallback6} alt="Éclairage d'ambiance pour événements de luxe" className="h-[320px]" />
              </div>

              {/* Colonne 3 */}
              <div className="flex flex-col gap-[10px]">
                <GalleryImage src={imgImageWithFallback7} alt="Jetons et cartes de casino" className="h-[256px]" />
                <GalleryImage src={imgImageWithFallback8} alt="Moments de célébration entre amis" className="h-[320px]" />
                <GalleryImage src={imgImageWithFallback9} alt="Réception de mariage avec animation" className="h-[384px]" />
              </div>

              {/* Colonne 4 */}
              <div className="flex flex-col gap-[10px]">
                <GalleryImage src={imgImageWithFallback9} alt="Table de poker pour événements" className="h-[320px]" />
                <GalleryImage src={imgImageWithFallback10} alt="Animation événementielle haut de gamme" className="h-[384px]" />
                <GalleryImage src={imgImageWithFallback11} alt="Animation pour événements d'entreprise" className="h-[256px]" />
              </div>
            </div>

            {/* Pagination (simplifiée) */}
            <div className="flex justify-center items-center gap-1 mt-16">
              <button className="h-[36px] px-4 rounded-[8px] opacity-50 text-white flex items-center gap-2 hover:opacity-70 transition-all">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                  <path d="M10 12L6 8L10 4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
                Précédent
              </button>
              <button className="size-[36px] rounded-[8px] bg-gradient-to-r from-[#fdc700] to-[#d08700] text-black flex items-center justify-center hover:scale-105 transition-all">
                1
              </button>
              <button className="size-[36px] rounded-[8px] text-white flex items-center justify-center hover:bg-white/10 transition-all">
                2
              </button>
              <button className="h-[36px] px-4 rounded-[8px] text-white flex items-center gap-2 hover:bg-white/10 transition-all">
                Suivant
                <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                  <path d="M6 12L10 8L6 4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
