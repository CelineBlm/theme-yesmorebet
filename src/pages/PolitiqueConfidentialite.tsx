import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import svgPaths from "../imports/svg-jntku4h6x1";

interface PolitiqueConfidentialiteProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function PolitiqueConfidentialite({ onNavigate, currentPage }: PolitiqueConfidentialiteProps) {
  return (
    <div className="min-h-screen bg-black">
      <Header onNavigate={onNavigate} currentPage={currentPage} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[rgba(115,62,10,0.1)] to-[rgba(0,0,0,0)] pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-[896px] text-center">
          <h1 className="bg-clip-text bg-gradient-to-r from-[#fdc700] to-[#d08700] mb-6" style={{ WebkitTextFillColor: "transparent" }}>
            <span className="text-white">Politique de </span>
            <span>confidentialité</span>
          </h1>
          <p className="text-white text-[16px] leading-[24px]">
            Protection et traitement de vos données personnelles
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 lg:px-12">
        <div className="container mx-auto max-w-[1199px] space-y-[37px]">
          
          {/* Introduction */}
          <div className="border border-[rgba(208,135,0,0.3)] rounded-[10px] p-8 lg:p-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6">
                <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p2dfab7c0} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p2c300c0} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <h2 className="text-white font-['Quicksand'] font-semibold text-[16px] tracking-[-0.3125px]">Introduction</h2>
            </div>

            <div className="space-y-4">
              <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                YesMoreBet, représenté par Guillaume Peyrot, accorde une importance particulière à la protection de votre vie privée et au respect de vos données personnelles.
              </p>
              <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                La présente Politique de confidentialité a pour objectif de vous informer sur la manière dont nous collectons, utilisons, partageons et protégeons vos données personnelles dans le cadre de l'utilisation de notre site web et de nos services d'animation de casino fictif.
              </p>
              <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                Cette politique est conforme au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
              </p>
            </div>
          </div>

          {/* Responsable du traitement */}
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
              <h2 className="text-white font-['Quicksand'] font-semibold text-[16px] tracking-[-0.3125px]">Responsable du traitement des données</h2>
            </div>

            <div className="text-[14px] tracking-[-0.1504px] leading-[22.75px]">
              <p className="mb-0"><span className="font-['Quicksand'] font-bold text-[#fdc700]">Nom : </span><span className="font-['Quicksand'] font-medium text-white">Guillaume Peyrot</span></p>
              <p className="mb-0"><span className="font-['Quicksand'] font-bold text-[#fdc700]">Nom commercial : </span><span className="font-['Quicksand'] font-medium text-white">YesMoreBet</span></p>
              <p className="mb-0"><span className="font-['Quicksand'] font-bold text-[#fdc700]">Adresse : </span><span className="text-white">20 avenue Pierre Sémard 06130 Grasse</span></p>
              <p className="mb-0"><span className="font-['Quicksand'] font-bold text-[#fdc700]">Email : </span><span className="text-white">yesmorebet@hotmail.com</span></p>
              <p><span className="font-['Quicksand'] font-bold text-[#fdc700]">Téléphone : </span><span className="text-white">+33 6 26 51 22 17</span></p>
            </div>
          </div>

          {/* Données collectées */}
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
              <h2 className="text-white font-['Quicksand'] font-semibold text-[16px] tracking-[-0.3125px]">Données personnelles collectées</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-white font-['Quicksand'] font-bold text-[18px] tracking-[-0.4395px] mb-2">Données collectées via le formulaire de contact</h3>
                <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px] mb-2">
                  Lorsque vous nous contactez via le formulaire ou demandez un devis, nous collectons :
                </p>
                <div className="ml-6 text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                  <p className="mb-0">• Nom et prénom</p>
                  <p className="mb-0">• Adresse email</p>
                  <p className="mb-0">• Numéro de téléphone</p>
                  <p className="mb-0">• Type d'événement</p>
                  <p className="mb-0">• Date souhaitée</p>
                  <p className="mb-0">• Nombre d'invités</p>
                  <p>• Localisation de l'événement</p>
                </div>
              </div>

              <div>
                <h3 className="text-white font-['Quicksand'] font-bold text-[18px] tracking-[-0.4395px] mb-2">Données de navigation</h3>
                <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px] mb-2">
                  Lors de votre visite sur notre site, nous pouvons collecter automatiquement :
                </p>
                <div className="ml-6 text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                  <p className="mb-0">• Adresse IP</p>
                  <p className="mb-0">• Type de navigateur</p>
                  <p className="mb-0">• Pages consultées</p>
                  <p className="mb-0">• Date et heure de connexion</p>
                  <p>• Système d'exploitation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Finalités du traitement */}
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
              <h2 className="text-white font-['Quicksand'] font-semibold text-[16px] tracking-[-0.3125px]">Finalités du traitement</h2>
            </div>

            <div className="space-y-4">
              <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                Vos données personnelles sont collectées et traitées pour les finalités suivantes :
              </p>
              <div className="space-y-3">
                <div className="text-[14px] tracking-[-0.1504px] leading-[20px]">
                  <p className="font-['Quicksand'] font-bold text-[#fdc700] mb-0">Gestion des demandes de devis et réservations</p>
                  <p className="text-white">Traiter vos demandes, établir des devis personnalisés et gérer vos réservations d'animations.</p>
                </div>
                <div className="text-[14px] tracking-[-0.1504px] leading-[20px]">
                  <p className="font-['Quicksand'] font-bold text-[#fdc700] mb-0">Communication et relation client</p>
                  <p className="text-white">Répondre à vos questions, vous informer sur nos prestations et assurer le suivi de nos échanges.</p>
                </div>
                <div className="text-[14px] tracking-[-0.1504px] leading-[20px]">
                  <p className="font-['Quicksand'] font-bold text-[#fdc700] mb-0">Amélioration de nos services</p>
                  <p className="text-white">Analyser l'utilisation du site et améliorer la qualité de nos prestations.</p>
                </div>
                <div className="text-[14px] tracking-[-0.1504px] leading-[20px]">
                  <p className="font-['Quicksand'] font-bold text-[#fdc700] mb-0">Respect des obligations légales</p>
                  <p className="text-white">Conserver les informations nécessaires pour respecter nos obligations comptables et fiscales.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Base légale */}
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
              <h2 className="text-white font-['Quicksand'] font-semibold text-[16px] tracking-[-0.3125px]">Base légale du traitement</h2>
            </div>

            <div className="space-y-3">
              <div className="text-[14px] tracking-[-0.1504px] leading-[20px]">
                <p className="font-['Quicksand'] font-bold text-[#fdc700] mb-0">Exécution du contrat</p>
                <p className="text-white">Le traitement de vos données est nécessaire à l'exécution de la prestation que vous demandez ou de mesures précontractuelles prises à votre demande.</p>
              </div>
              <div className="text-[14px] tracking-[-0.1504px] leading-[20px]">
                <p className="font-['Quicksand'] font-bold text-[#fdc700] mb-0">Consentement</p>
                <p className="text-white">Pour certaines finalités comme l'envoi de communications marketing, nous obtenons votre consentement explicite que vous pouvez retirer à tout moment.</p>
              </div>
              <div className="text-[14px] tracking-[-0.1504px] leading-[20px]">
                <p className="font-['Quicksand'] font-bold text-[#fdc700] mb-0">Intérêt légitime</p>
                <p className="text-white">L'amélioration de nos services et la sécurité de notre site constituent des intérêts légitimes justifiant le traitement de certaines données.</p>
              </div>
            </div>
          </div>

          {/* Durée de conservation */}
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
              <h2 className="text-white font-['Quicksand'] font-semibold text-[16px] tracking-[-0.3125px]">Durée de conservation des données</h2>
            </div>

            <div className="space-y-3">
              <div className="text-[14px] tracking-[-0.1504px] leading-[20px]">
                <p className="font-['Quicksand'] font-bold text-[#fdc700] mb-0">Prospects</p>
                <p className="text-white">Les données des personnes ayant demandé un devis sans donner suite sont conservées pendant 3 ans à compter du dernier contact.</p>
              </div>
              <div className="text-[14px] tracking-[-0.1504px] leading-[20px]">
                <p className="font-['Quicksand'] font-bold text-[#fdc700] mb-0">Clients</p>
                <p className="text-white">Les données des clients sont conservées pendant la durée de la relation contractuelle puis archivées pour respecter les obligations légales (10 ans pour les factures).</p>
              </div>
              <div className="text-[14px] tracking-[-0.1504px] leading-[20px]">
                <p className="font-['Quicksand'] font-bold text-[#fdc700] mb-0">Données de navigation</p>
                <p className="text-white">Les données de navigation sont conservées pendant une durée maximum de 13 mois.</p>
              </div>
            </div>
          </div>

          {/* Vos droits */}
          <div className="border border-[rgba(208,135,0,0.3)] rounded-[10px] p-8 lg:p-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6">
                <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p2dfab7c0} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p2c300c0} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <h2 className="text-white font-['Quicksand'] font-semibold text-[16px] tracking-[-0.3125px]">Vos droits sur vos données</h2>
            </div>

            <div className="space-y-6">
              <p className="text-[#d1d5dc] font-['Quicksand'] font-medium text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants sur vos données personnelles :
              </p>

              <div className="ml-6 space-y-1 text-[14px] tracking-[-0.1504px] leading-[20px]">
                <p className="mb-0"><span className="font-['Quicksand'] font-bold text-[#fdc700]">Droit d'accès : </span><span className="text-white">Obtenir la confirmation que vos données sont traitées et en recevoir une copie</span></p>
                <p className="mb-0"><span className="font-['Quicksand'] font-bold text-[#fdc700]">Droit de rectification : </span><span className="text-[#d1d5dc]">Faire corriger vos données inexactes ou incomplètes</span></p>
                <p className="mb-0"><span className="font-['Quicksand'] font-bold text-[#fdc700]">Droit à l'effacement : </span><span className="text-white">Demander la suppression de vos données dans certains cas</span></p>
                <p className="mb-0"><span className="font-['Quicksand'] font-bold text-[#fdc700]">Droit d'opposition : </span><span className="text-white">Vous opposer au traitement de vos données pour des raisons tenant à votre situation particulière</span></p>
                <p className="mb-0"><span className="font-['Quicksand'] font-bold text-[#fdc700]">Droit à la limitation : </span><span className="text-white">Demander la limitation du traitement de vos données</span></p>
                <p className="mb-0"><span className="font-['Quicksand'] font-bold text-[#fdc700]">Droit à la portabilité : </span><span className="text-white">Recevoir vos données dans un format structuré et couramment utilisé</span></p>
                <p><span className="font-['Quicksand'] font-bold text-[#fdc700]">Droit de retirer votre consentement : </span><span className="text-white">Retirer à tout moment votre consentement au traitement de vos données</span></p>
              </div>

              <div className="bg-[rgba(0,0,0,0.5)] border border-[rgba(208,135,0,0.2)] rounded-[10px] p-4">
                <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px] mb-2">
                  Pour exercer ces droits, contactez-nous :
                </p>
                <div className="text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                  <p className="font-['Quicksand'] font-bold text-[#fdc700] mb-0">Par email : yesmorebet@hotmail.com</p>
                  <p className="mb-0"><span className="font-['Quicksand'] font-bold text-[#fdc700]">Par courrier : </span><span className="text-white">20 avenue Pierre Sémard 06130 Grasse</span></p>
                  <p><span className="font-['Quicksand'] font-bold text-[#fdc700]">Téléphone : </span><span className="text-white">+33 6 26 51 22 17</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Sécurité et partage */}
          <div className="border border-[rgba(208,135,0,0.3)] rounded-[10px] p-8 lg:p-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6">
                <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p2dfab7c0} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p2c300c0} stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <h2 className="text-white font-['Quicksand'] font-semibold text-[16px] tracking-[-0.3125px]">Sécurité et partage des données</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-white font-['Quicksand'] font-bold text-[18px] tracking-[-0.4395px] mb-2">Mesures de sécurité</h3>
                <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                  Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour garantir la sécurité de vos données personnelles et empêcher leur altération, leur perte ou l'accès non autorisé par des tiers.
                </p>
              </div>

              <div>
                <h3 className="text-white font-['Quicksand'] font-bold text-[18px] tracking-[-0.4395px] mb-2">Destinataires des données</h3>
                <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                  Vos données personnelles sont destinées uniquement à YesMoreBet. Elles ne sont jamais vendues à des tiers. Elles peuvent être partagées avec nos prestataires techniques (hébergeur, service d'emailing) uniquement dans le cadre strict de la réalisation de nos prestations et sous réserve d'engagements de confidentialité.
                </p>
              </div>

              <div>
                <h3 className="text-white font-['Quicksand'] font-bold text-[18px] tracking-[-0.4395px] mb-2">Transferts hors UE</h3>
                <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                  Vos données personnelles sont hébergées et traitées en France et ne font l'objet d'aucun transfert en dehors de l'Union Européenne.
                </p>
              </div>
            </div>
          </div>

          {/* Réclamation */}
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
              <h2 className="text-white font-['Quicksand'] font-semibold text-[16px] tracking-[-0.3125px]">Droit de réclamation auprès de la CNIL</h2>
            </div>

            <div className="space-y-4">
              <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                Si vous estimez, après nous avoir contactés, que vos droits sur vos données ne sont pas respectés, vous avez le droit d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) :
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

          {/* Modification de la politique */}
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
              <h2 className="text-white font-['Quicksand'] font-semibold text-[16px] tracking-[-0.3125px]">Modifications de la politique</h2>
            </div>

            <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
              Nous nous réservons le droit de modifier cette Politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour. Nous vous encourageons à consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.
            </p>
            <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px] mt-4">
              <span className="font-['Quicksand'] font-bold text-[#fdc700]">Dernière mise à jour : </span>
              <span className="text-white">28 octobre 2025</span>
            </p>
          </div>

        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
