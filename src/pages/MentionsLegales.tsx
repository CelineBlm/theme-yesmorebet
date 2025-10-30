import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import svgPaths from "../imports/svg-jntku4h6x1";

interface MentionsLegalesProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function MentionsLegales({ onNavigate, currentPage }: MentionsLegalesProps) {
  return (
    <div className="min-h-screen bg-black">
      <Header onNavigate={onNavigate} currentPage={currentPage} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[rgba(115,62,10,0.1)] to-[rgba(0,0,0,0)] pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-[896px] text-center">
          <h1 className="bg-clip-text bg-gradient-to-r from-[#fdc700] to-[#d08700] mb-6" style={{ WebkitTextFillColor: "transparent" }}>
            <span className="text-white">Mentions légales & </span>
            <span>Politique de confidentialité</span>
          </h1>
          <p className="text-white text-[16px] leading-[24px]">
            Informations légales et protection de vos données personnelles
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 lg:px-12">
        <div className="container mx-auto max-w-[1199px] space-y-[37px]">
          
          {/* Mentions légales */}
          <div className="border border-[rgba(208,135,0,0.3)] rounded-[10px] p-8 lg:p-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6">
                <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.pb47f400} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p17a13100} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M10 9H8" stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M16 13H8" stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M16 17H8" stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <h2 className="text-white font-['Quicksand'] font-semibold text-[16px] tracking-[-0.3125px]">Mentions légales</h2>
            </div>

            <div className="space-y-6">
              {/* Éditeur du site */}
              <div>
                <h3 className="text-white font-['Quicksand'] font-semibold text-[18px] tracking-[-0.4395px] mb-2">Éditeur du site</h3>
                <div className="text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                  <p className="mb-0"><span className="font-['Quicksand'] font-bold text-[#fdc700]">Nom : </span><span className="font-['Quicksand'] font-medium text-white">Guillaume Peyrot</span></p>
                  <p className="mb-0"><span className="font-['Quicksand'] font-bold text-[#fdc700]">Nom commercial : </span><span className="font-['Quicksand'] font-medium text-white">YesMoreBet</span></p>
                  <p className="mb-0"><span className="font-['Quicksand'] font-bold text-[#fdc700]">Statut juridique : </span><span className="font-['Quicksand'] font-medium text-white">Auto-entrepreneur</span></p>
                  <p className="mb-0"><span className="font-['Quicksand'] font-bold text-[#fdc700]">SIRET : </span><span className="font-['Quicksand'] font-medium text-white">801 748 914</span></p>
                  <p className="mb-0"><span className="font-['Quicksand'] font-bold text-[#fdc700]">Adresse : </span><span className="text-white">20 avenue Pierre Sémard 06130 Grasse</span></p>
                  <p className="mb-0"><span className="font-['Quicksand'] font-bold text-[#fdc700]">Email : </span><span className="text-white">yesmorebet@hotmail.com</span></p>
                  <p><span className="font-['Quicksand'] font-bold text-[#fdc700]">Téléphone : </span><span className="text-white">+33 6 26 51 22 17</span></p>
                </div>
              </div>

              {/* Directeur de la publication */}
              <div>
                <h3 className="text-white font-['Quicksand'] font-semibold text-[18px] tracking-[-0.4395px] mb-2">Directeur de la publication</h3>
                <p className="font-['Quicksand'] font-medium text-[14px] text-white tracking-[-0.1504px] leading-[22.75px]">Guillaume Peyrot</p>
              </div>

              {/* Hébergement du site */}
              <div>
                <h3 className="text-white font-['Quicksand'] font-semibold text-[18px] tracking-[-0.4395px] mb-2">Hébergement du site</h3>
                <div className="font-['Quicksand'] font-medium text-[14px] text-white tracking-[-0.1504px] leading-[22.75px]">
                  <p className="mb-0"><span className="font-bold text-[#fdc700]">Hébergeur : </span>OVH</p>
                  <p><span className="font-bold text-[#fdc700]">Adresse : </span>2 RUE KELLERMANN 59100 ROUBAIX</p>
                </div>
              </div>

              {/* Propriété intellectuelle */}
              <div>
                <h3 className="text-white font-['Quicksand'] font-semibold text-[18px] tracking-[-0.4395px] mb-2">Propriété intellectuelle</h3>
                <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                  L'ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes) est la propriété exclusive de YesMoreBet, sauf mention contraire. Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents éléments est strictement interdite sans l'accord écrit de YesMoreBet.
                </p>
              </div>

              {/* Nature de l'activité */}
              <div>
                <h3 className="text-white font-['Quicksand'] font-semibold text-[18px] tracking-[-0.4395px] mb-2">Nature de l'activité</h3>
                <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                  YesMoreBet propose une animation de casino fictif, sans argent réel, destinée exclusivement à l'événementiel privé et professionnel. Les jeux proposés ont un but exclusivement ludique et ne constituent en aucun cas une activité de jeux d'argent au sens de la réglementation française.
                </p>
              </div>

              {/* Limitation de responsabilité */}
              <div>
                <h3 className="text-white font-['Quicksand'] font-semibold text-[18px] tracking-[-0.4395px] mb-2">Limitation de responsabilité</h3>
                <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                  YesMoreBet met tout en œuvre pour offrir aux utilisateurs des informations et/ou des outils disponibles et vérifiés. Toutefois, YesMoreBet ne peut être tenu responsable des erreurs, d'une absence de disponibilité des informations et/ou de la présence de virus sur son site.
                </p>
              </div>
            </div>
          </div>

          {/* Politique de confidentialité */}
          <div className="border border-[rgba(208,135,0,0.3)] rounded-[10px] p-8 lg:p-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6">
                <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p2dfab7c0} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p2c300c0} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <h2 className="text-white font-['Quicksand'] text-[16px] tracking-[-0.3125px]">Politique de confidentialité</h2>
            </div>

            <div className="space-y-6">
              {/* Collecte des données */}
              <div>
                <h3 className="text-white font-['Quicksand'] font-bold text-[18px] tracking-[-0.4395px] mb-2">Collecte des données personnelles</h3>
                <div className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                  <p className="mb-0">Dans le cadre de l'utilisation du site YesMoreBet et de la demande de prestations, nous sommes amenés à collecter les données personnelles suivantes :</p>
                  <p className="mb-0 ml-6">• Nom et prénom</p>
                  <p className="mb-0 ml-6">• Adresse email</p>
                  <p className="mb-0 ml-6">• Numéro de téléphone</p>
                  <p className="ml-6">• Informations relatives à l'événement (date, lieu, type d'événement)</p>
                </div>
              </div>

              {/* Finalité du traitement */}
              <div>
                <h3 className="text-white font-['Quicksand'] font-bold text-[18px] tracking-[-0.4395px] mb-2">Finalité du traitement</h3>
                <div className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                  <p className="mb-0">Les données collectées sont utilisées exclusivement pour :</p>
                  <p className="mb-0 ml-6">• Répondre à vos demandes de devis</p>
                  <p className="mb-0 ml-6">• Organiser et gérer vos réservations</p>
                  <p className="mb-0 ml-6">• Vous contacter dans le cadre de la prestation</p>
                  <p className="mb-0 ml-6">• Améliorer nos services</p>
                  <p className="ml-6">• Vous envoyer des informations sur nos prestations (avec votre consentement)</p>
                </div>
              </div>

              {/* Base légale */}
              <div>
                <h3 className="text-white font-['Quicksand'] font-bold text-[18px] tracking-[-0.4395px] mb-2">Base légale du traitement</h3>
                <div className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                  <p className="mb-0">Le traitement de vos données personnelles est fondé sur :</p>
                  <p className="mb-0 ml-6">• L'exécution d'un contrat ou de mesures précontractuelles</p>
                  <p className="mb-0 ml-6">• Votre consentement pour l'envoi de communications marketing</p>
                  <p className="ml-6">• Notre intérêt légitime à améliorer nos services</p>
                </div>
              </div>

              {/* Conservation des données */}
              <div>
                <h3 className="text-white font-['Quicksand'] font-bold text-[18px] tracking-[-0.4395px] mb-2">Conservation des données</h3>
                <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                  Vos données personnelles sont conservées pendant la durée nécessaire à l'accomplissement des finalités mentionnées ci-dessus, et dans le respect des délais légaux de conservation. Les données relatives aux prospects sont conservées pendant une durée de 3 ans à compter du dernier contact.
                </p>
              </div>

              {/* Vos droits */}
              <div>
                <h3 className="text-white font-['Quicksand'] font-bold text-[18px] tracking-[-0.4395px] mb-2">Vos droits</h3>
                <p className="text-[#d1d5dc] font-['Quicksand'] font-medium text-[14px] tracking-[-0.1504px] leading-[22.75px] mb-3">
                  Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants :
                </p>
                <div className="text-[14px] tracking-[-0.1504px] leading-[20px] ml-6 space-y-1">
                  <p className="mb-0"><span className="font-['Quicksand'] font-bold text-[#fdc700]">Droit d'accès : </span><span className="text-white">obtenir la confirmation que vos données sont traitées et en obtenir une copie</span></p>
                  <p className="mb-0"><span className="font-['Quicksand'] font-bold text-[#fdc700]">Droit de rectification : </span><span className="text-[#d1d5dc]">corriger vos données inexactes ou incomplètes</span></p>
                  <p className="mb-0"><span className="font-['Quicksand'] font-bold text-[#fdc700]">Droit à l'effacement : </span><span className="text-white">demander la suppression de vos données</span></p>
                  <p className="mb-0"><span className="font-['Quicksand'] font-bold text-[#fdc700]">Droit d'opposition : </span><span className="text-white">vous opposer au traitement de vos données</span></p>
                  <p className="mb-0"><span className="font-['Quicksand'] font-bold text-[#fdc700]">Droit à la limitation : </span><span className="text-white">demander la limitation du traitement</span></p>
                  <p><span className="font-['Quicksand'] font-bold text-[#fdc700]">Droit à la portabilité : </span><span className="text-white">recevoir vos données dans un format structuré</span></p>
                </div>
                <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px] mt-3">
                  Pour exercer ces droits, contactez-nous par email à : <span className="font-['Quicksand'] font-bold text-[#fdc700]">yesmorebet@hotmail.com</span>
                </p>
              </div>

              {/* Sécurité des données */}
              <div>
                <h3 className="text-white font-['Quicksand'] font-bold text-[18px] tracking-[-0.4395px] mb-2">Sécurité des données</h3>
                <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                  Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées afin de garantir un niveau de sécurité adapté au risque, notamment contre la destruction, la perte, l'altération, la divulgation non autorisée de données personnelles transmises, conservées ou traitées d'une autre manière.
                </p>
              </div>

              {/* Partage des données */}
              <div>
                <h3 className="text-white font-['Quicksand'] font-bold text-[18px] tracking-[-0.4395px] mb-2">Partage des données</h3>
                <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                  Vos données personnelles ne sont jamais vendues à des tiers. Elles peuvent être partagées uniquement avec nos prestataires techniques (hébergement, emailing) dans le strict cadre de la réalisation de nos prestations, et sous réserve d'engagements de confidentialité appropriés.
                </p>
              </div>
            </div>
          </div>

          {/* Politique relative aux cookies */}
          <div className="border border-[rgba(208,135,0,0.3)] rounded-[10px] p-8 lg:p-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6">
                <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p3976c380} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M8.5 8.5V8.51" stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M16 15.5V15.51" stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M12 12V12.01" stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M11 17V17.01" stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M7 14V14.01" stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <h2 className="text-white font-['Quicksand'] font-bold text-[16px] tracking-[-0.3125px]">Politique relative aux cookies</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-white font-['Quicksand'] font-bold text-[18px] tracking-[-0.4395px] mb-2">Qu'est-ce qu'un cookie ?</h3>
                <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                  Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, smartphone, tablette) lors de la visite d'un site internet. Il permet de collecter des informations relatives à votre navigation et de vous adresser des services adaptés à votre terminal.
                </p>
              </div>

              <div>
                <h3 className="text-white font-['Quicksand'] font-bold text-[18px] tracking-[-0.4395px] mb-2">Types de cookies utilisés</h3>
                <div className="space-y-3">
                  <div className="text-[14px] tracking-[-0.1504px] leading-[20px]">
                    <p className="font-['Quicksand'] font-bold text-[#fdc700] mb-0">Cookies strictement nécessaires :</p>
                    <p className="text-white">Ces cookies sont indispensables au bon fonctionnement du site et ne peuvent pas être désactivés. Ils sont généralement activés en réponse à des actions que vous effectuez (paramétrage de confidentialité, connexion).</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-white font-['Quicksand'] font-bold text-[18px] tracking-[-0.4395px] mb-2">Gestion du consentement</h3>
                <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                  Lors de votre première visite sur notre site, un bandeau vous informe de l'utilisation de cookies et vous permet de paramétrer vos préférences. Vous pouvez à tout moment modifier ou retirer votre consentement en cliquant sur le lien « Gérer les cookies » disponible en bas de chaque page du site.
                </p>
              </div>

              <div>
                <h3 className="text-white font-['Quicksand'] font-bold text-[18px] tracking-[-0.4395px] mb-2">Gestion des cookies</h3>
                <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                  Vous pouvez à tout moment choisir de désactiver ces cookies via les paramètres de votre navigateur. Cependant, cela peut affecter votre expérience sur notre site et les services que nous sommes en mesure de vous offrir.
                </p>
              </div>
            </div>
          </div>

          {/* Contact et réclamations */}
          <div className="border border-[rgba(208,135,0,0.3)] rounded-[10px] p-8 lg:p-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6">
                <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p1d820380} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p27451300} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p2981fe00} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p161d4800} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <h2 className="text-white font-['Quicksand'] font-bold text-[16px] tracking-[-0.3125px]">Contact et réclamations</h2>
            </div>

            <div className="space-y-4">
              <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                Pour toute question relative à la protection de vos données personnelles ou pour exercer vos droits, vous pouvez nous contacter :
              </p>

              <div className="bg-[rgba(0,0,0,0.5)] border border-[rgba(208,135,0,0.2)] rounded-[10px] p-4">
                <div className="text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                  <p className="font-['Quicksand'] font-bold text-[#fdc700] mb-0">Par email : yesmorebet@hotmail.com</p>
                  <p className="mb-0"><span className="font-['Quicksand'] font-bold text-[#fdc700]">Par courrier : </span><span className="text-white">20 avenue Pierre Sémard 06130 Grasse</span></p>
                  <p><span className="font-['Quicksand'] font-bold text-[#fdc700]">Téléphone : </span><span className="text-white">+33 6 26 51 22 17</span></p>
                </div>
              </div>

              <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL (Commission Nationale de l'Informatique et des Libertés) :
              </p>

              <div className="bg-[rgba(0,0,0,0.5)] border border-[rgba(208,135,0,0.2)] rounded-[10px] p-4">
                <div className="text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                  <p className="text-[#d1d5dc] mb-0">CNIL - 3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07</p>
                  <p className="text-[#d1d5dc] mb-0">Téléphone : 01 53 73 22 22</p>
                  <p className="text-[#d1d5dc]"><span>Site web : </span><span className="font-['Quicksand'] font-bold text-[#fdc700]">www.cnil.fr</span></p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
