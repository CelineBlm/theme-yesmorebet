import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import svgPaths from "../imports/svg-jntku4h6x1";

interface CGVProps {
  onNavigate: (page: string) => void;
}

interface SectionProps {
  iconPaths: string[];
  title: string;
  children: React.ReactNode;
}

function Section({ iconPaths, title, children }: SectionProps) {
  return (
    <div className="border border-[rgba(208,135,0,0.3)] rounded-[10px] p-8 lg:p-16">
      <div className="flex items-center gap-3 mb-6">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
          {iconPaths.map((path, idx) => (
            <path 
              key={idx} 
              d={path} 
              stroke="#FDC700" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
            />
          ))}
        </svg>
        <h2 className="text-white font-['Quicksand'] font-semibold text-[16px] tracking-[-0.3125px]">
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
}

export function CGV({ onNavigate }: CGVProps) {
  return (
    <div className="min-h-screen bg-black">
      <Header onNavigate={onNavigate} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[rgba(115,62,10,0.1)] to-[rgba(0,0,0,0)] pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-[896px] text-center">
          <h1 className="bg-clip-text bg-gradient-to-r from-[#fdc700] to-[#d08700] mb-6" style={{ WebkitTextFillColor: "transparent" }}>
            <span className="text-white">Conditions Générales </span>
            <span>de Vente</span>
          </h1>
          <p className="text-white">
            Modalités et conditions applicables aux prestations YesMoreBet
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 lg:px-12">
        <div className="container mx-auto max-w-[1199px] space-y-[37px]">
          
          {/* Préambule */}
          <Section iconPaths={[svgPaths.pb47f400, svgPaths.p17a13100, "M10 9H8", "M16 13H8", "M16 17H8"]} title="Préambule">
            <div className="space-y-4 text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
              <p>
                Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre YesMoreBet, représenté par Guillaume Peyrot, auto-entrepreneur (SIRET : 801 748 914), et toute personne physique ou morale (ci-après "le Client") souhaitant bénéficier des prestations d'animation de casino fictif proposées par YesMoreBet.
              </p>
              <p>
                Toute commande de prestation implique l'acceptation sans réserve des présentes CGV qui prévalent sur tout autre document du Client, à l'exception de dérogations qui auraient fait l'objet d'un accord écrit et préalable.
              </p>
            </div>
          </Section>

          {/* Prestations proposées */}
          <Section iconPaths={[svgPaths.p3976c380, "M8.5 8.5V8.51", "M16 15.5V15.51", "M12 12V12.01", "M11 17V17.01", "M7 14V14.01"]} title="Prestations proposées">
            <div className="space-y-6">
              <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                YesMoreBet propose des animations de casino fictif pour événements privés et professionnels, comprenant :
              </p>

              <div className="space-y-3 text-[14px] tracking-[-0.1504px] leading-[20px]">
                <div>
                  <p className="font-['Quicksand'] font-bold text-[#fdc700] mb-0">Table de Blackjack avec croupier professionnel</p>
                  <p className="text-white">Animation avec un croupier diplômé et expérimenté, jetons de casino, cartes professionnelles.</p>
                </div>
                <div>
                  <p className="font-['Quicksand'] font-bold text-[#fdc700] mb-0">Roue de la Chance</p>
                  <p className="text-white">Roue lumineuse pour gagner des tickets de tombola, animation interactive pour vos invités.</p>
                </div>
                <div>
                  <p className="font-['Quicksand'] font-bold text-[#fdc700] mb-0">Lunettes connectées</p>
                  <p className="text-white">Captation photo/vidéo des moments forts de votre événement en temps réel.</p>
                </div>
              </div>

              <div className="bg-[rgba(253,199,0,0.1)] border border-[rgba(208,135,0,0.3)] rounded-[10px] p-4">
                <p className="text-[#fdc700] font-['Quicksand'] font-bold text-[14px] tracking-[-0.1504px] leading-[22.75px] mb-0">
                  ⚠️ Important : Il s'agit d'animations de casino FICTIF, sans argent réel. Aucune somme d'argent ne change de main pendant la prestation. Les jetons fournis n'ont aucune valeur monétaire.
                </p>
              </div>
            </div>
          </Section>

          {/* Commande et devis */}
          <Section iconPaths={[svgPaths.p1d820380, svgPaths.p27451300, svgPaths.p2981fe00, svgPaths.p161d4800]} title="Commande et devis">
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-['Quicksand'] font-bold text-[18px] tracking-[-0.4395px] mb-2">Demande de devis</h3>
                <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                  Le Client peut demander un devis personnalisé via le formulaire de contact du site web, par email ou par téléphone. Le devis est gratuit et sans engagement.
                </p>
              </div>

              <div>
                <h3 className="text-white font-['Quicksand'] font-bold text-[18px] tracking-[-0.4395px] mb-2">Validité du devis</h3>
                <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                  Tout devis établi par YesMoreBet est valable 30 jours à compter de sa date d'émission.
                </p>
              </div>

              <div>
                <h3 className="text-white font-['Quicksand'] font-bold text-[18px] tracking-[-0.4395px] mb-2">Acceptation du devis</h3>
                <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                  La commande est considérée comme ferme et définitive dès réception par YesMoreBet du devis signé et du versement de l'acompte. Le contrat est alors formé entre les parties.
                </p>
              </div>
            </div>
          </Section>

          {/* Tarifs et paiement */}
          <Section iconPaths={[svgPaths.p2dfab7c0, svgPaths.p2c300c0]} title="Tarifs et modalités de paiement">
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-['Quicksand'] font-bold text-[18px] tracking-[-0.4395px] mb-2">Tarifs</h3>
                <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                  Les tarifs sont indiqués en euros TTC (TVA non applicable, article 293 B du CGI). Les prix affichés sur le site web sont indicatifs et peuvent être personnalisés selon les besoins spécifiques du Client. Le tarif définitif est celui mentionné sur le devis accepté.
                </p>
              </div>

              <div>
                <h3 className="text-white font-['Quicksand'] font-bold text-[18px] tracking-[-0.4395px] mb-2">Modalités de paiement</h3>
                <div className="ml-6 text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                  <p className="mb-0">• Acompte de <span className="text-[#fdc700]">30 %</span> à la réservation</p>
                  <p>• Solde le jour de la prestation</p>
                </div>
                <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px] mt-2">
                  Le paiement de l'acompte vaut acceptation des présentes CGV. Les paiements peuvent être effectués par virement bancaire, chèque ou espèces.
                </p>
              </div>

              <div>
                <h3 className="text-white font-['Quicksand'] font-bold text-[18px] tracking-[-0.4395px] mb-2">Supplément déplacement</h3>
                <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                  Les frais de déplacement sont facturés à <span className="text-[#fdc700]">0,65 € par kilomètre</span> au-delà de 25 km (aller simple) depuis Grasse. Ces frais sont indiqués dans le devis.
                </p>
                <p className="text-[#99a1af] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                  Exemple : Nice ≈ 9,75 € supplémentaires.
                </p>
              </div>

              <div>
                <h3 className="text-white font-['Quicksand'] font-bold text-[18px] tracking-[-0.4395px] mb-2">Conditions de durée</h3>
                <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                  Chaque formule inclut une durée déterminée (2/3h, 5h ou 7h selon le forfait choisi). Une prolongation est possible au tarif de <span className="text-[#fdc700]">100 € par heure supplémentaire</span> entamée.
                </p>
              </div>
            </div>
          </Section>

          {/* Annulation et modification */}
          <Section iconPaths={[svgPaths.p3976c380, "M8.5 8.5V8.51", "M16 15.5V15.51", "M12 12V12.01", "M11 17V17.01", "M7 14V14.01"]} title="Conditions d'annulation">
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-['Quicksand'] font-bold text-[18px] tracking-[-0.4395px] mb-2">Annulation par le Client</h3>
                <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px] mb-3">
                  Toute annulation doit être notifiée par écrit (email ou courrier recommandé). Les conditions d'annulation sont les suivantes :
                </p>
                <div className="ml-6 text-[14px] tracking-[-0.1504px] leading-[20px] space-y-2">
                  <p className="mb-0"><span className="font-['Quicksand'] font-bold text-[#fdc700]">Plus de 14 jours avant l'événement : </span><span className="text-white">Acompte remboursé intégralement</span></p>
                  <p className="mb-0"><span className="font-['Quicksand'] font-bold text-[#fdc700]">Moins de 14 jours avant l'événement : </span><span className="text-white">Acompte non remboursable</span></p>
                  <p><span className="font-['Quicksand'] font-bold text-[#fdc700]">Moins de 72 heures avant l'événement : </span><span className="text-white">90 % du montant total dû</span></p>
                </div>
              </div>

              <div>
                <h3 className="text-white font-['Quicksand'] font-bold text-[18px] tracking-[-0.4395px] mb-2">Modification par le Client</h3>
                <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                  Toute modification de la prestation (date, lieu, horaires, formule) doit être notifiée par écrit. Les modifications sont possibles sans frais jusqu'à 14 jours avant l'événement, sous réserve de la disponibilité de YesMoreBet.
                </p>
              </div>

              <div>
                <h3 className="text-white font-['Quicksand'] font-bold text-[18px] tracking-[-0.4395px] mb-2">Annulation par YesMoreBet</h3>
                <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                  En cas de force majeure (maladie, accident, intempéries majeures), YesMoreBet se réserve le droit d'annuler la prestation. Dans ce cas, l'intégralité des sommes versées sera remboursée, sans autre indemnité.
                </p>
              </div>
            </div>
          </Section>

          {/* Obligations des parties */}
          <Section iconPaths={[svgPaths.pb47f400, svgPaths.p17a13100, "M10 9H8", "M16 13H8", "M16 17H8"]} title="Obligations des parties">
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-['Quicksand'] font-bold text-[18px] tracking-[-0.4395px] mb-2">Obligations de YesMoreBet</h3>
                <div className="ml-6 text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                  <p className="mb-0">• Fournir une prestation conforme au devis accepté</p>
                  <p className="mb-0">• Arriver à l'heure convenue avec le matériel complet et en bon état</p>
                  <p className="mb-0">• Assurer une animation professionnelle et de qualité</p>
                  <p>• Respecter les règles du lieu de l'événement</p>
                </div>
              </div>

              <div>
                <h3 className="text-white font-['Quicksand'] font-bold text-[18px] tracking-[-0.4395px] mb-2">Obligations du Client</h3>
                <div className="ml-6 text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                  <p className="mb-0">• Fournir des informations exactes sur le lieu, la date et les conditions de l'événement</p>
                  <p className="mb-0">• Mettre à disposition un espace adapté pour installer les tables de jeu (précisé dans le devis)</p>
                  <p className="mb-0">• Assurer l'accès au lieu de l'événement et faciliter l'installation</p>
                  <p className="mb-0">• Garantir la sécurité du prestataire et de son matériel</p>
                  <p>• Informer ses invités du caractère fictif de l'animation (sans argent réel)</p>
                </div>
              </div>
            </div>
          </Section>

          {/* Responsabilité */}
          <Section iconPaths={[svgPaths.p2dfab7c0, svgPaths.p2c300c0]} title="Responsabilité et assurance">
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-['Quicksand'] font-bold text-[18px] tracking-[-0.4395px] mb-2">Assurance</h3>
                <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                  YesMoreBet dispose d'une assurance responsabilité civile professionnelle couvrant les dommages causés dans le cadre de ses prestations.
                </p>
              </div>

              <div>
                <h3 className="text-white font-['Quicksand'] font-bold text-[18px] tracking-[-0.4395px] mb-2">Limitation de responsabilité</h3>
                <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                  YesMoreBet ne peut être tenu responsable des dommages indirects, pertes de profits, préjudices moraux ou de tout autre dommage immatériel résultant de l'exécution ou de l'inexécution de ses prestations. La responsabilité de YesMoreBet est limitée au montant payé par le Client pour la prestation.
                </p>
              </div>

              <div>
                <h3 className="text-white font-['Quicksand'] font-bold text-[18px] tracking-[-0.4395px] mb-2">Vol et dégradation</h3>
                <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                  Le Client est responsable de tout vol ou dégradation du matériel de YesMoreBet survenant pendant l'événement. En cas de vol ou de dégradation, le matériel sera facturé à sa valeur de remplacement.
                </p>
              </div>
            </div>
          </Section>

          {/* Propriété intellectuelle */}
          <Section iconPaths={[svgPaths.pb47f400, svgPaths.p17a13100, "M10 9H8", "M16 13H8", "M16 17H8"]} title="Propriété intellectuelle et droit à l'image">
            <div className="space-y-4 text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
              <p>
                Les photos et vidéos prises lors de l'événement avec les lunettes connectées restent la propriété du Client. YesMoreBet se réserve le droit d'utiliser ces contenus à des fins promotionnelles (site web, réseaux sociaux) sauf opposition écrite du Client.
              </p>
              <p>
                Le Client s'engage à ne pas reproduire, copier ou imiter le concept, le matériel ou les éléments distinctifs de YesMoreBet à des fins commerciales.
              </p>
            </div>
          </Section>

          {/* Protection des données */}
          <Section iconPaths={[svgPaths.p2dfab7c0, svgPaths.p2c300c0]} title="Protection des données personnelles">
            <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
              Les données personnelles collectées dans le cadre de la commande sont traitées conformément à notre Politique de confidentialité et au RGPD. Le Client dispose d'un droit d'accès, de rectification et de suppression de ses données.
            </p>
          </Section>

          {/* Litiges */}
          <Section iconPaths={[svgPaths.p1d820380, svgPaths.p27451300, svgPaths.p2981fe00, svgPaths.p161d4800]} title="Règlement des litiges">
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-['Quicksand'] font-bold text-[18px] tracking-[-0.4395px] mb-2">Médiation</h3>
                <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                  En cas de litige, les parties s'engagent à rechercher une solution amiable avant toute action judiciaire. Le Client peut recourir à une médiation conventionnelle ou à tout autre mode alternatif de règlement des différends.
                </p>
              </div>

              <div>
                <h3 className="text-white font-['Quicksand'] font-bold text-[18px] tracking-[-0.4395px] mb-2">Droit applicable et juridiction compétente</h3>
                <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                  Les présentes CGV sont soumises au droit français. En cas d'échec de la recherche d'une solution amiable, compétence exclusive est attribuée aux tribunaux de Grasse, nonobstant pluralité de défendeurs ou appel en garantie.
                </p>
              </div>
            </div>
          </Section>

          {/* Dispositions finales */}
          <Section iconPaths={[svgPaths.pb47f400, svgPaths.p17a13100, "M10 9H8", "M16 13H8", "M16 17H8"]} title="Dispositions finales">
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-['Quicksand'] font-bold text-[18px] tracking-[-0.4395px] mb-2">Modification des CGV</h3>
                <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                  YesMoreBet se réserve le droit de modifier les présentes CGV à tout moment. Les CGV applicables sont celles en vigueur à la date de la commande.
                </p>
              </div>

              <div>
                <h3 className="text-white font-['Quicksand'] font-bold text-[18px] tracking-[-0.4395px] mb-2">Nullité partielle</h3>
                <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px]">
                  Si une ou plusieurs stipulations des présentes CGV sont tenues pour non valides ou déclarées comme telles, les autres stipulations gardent toute leur force et leur portée.
                </p>
              </div>

              <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px] mt-6">
                <span className="font-['Quicksand'] font-bold text-[#fdc700]">Dernière mise à jour : </span>
                <span className="text-white">28 octobre 2025</span>
              </p>
            </div>
          </Section>

          {/* Contact */}
          <Section iconPaths={[svgPaths.p1d820380, svgPaths.p27451300, svgPaths.p2981fe00, svgPaths.p161d4800]} title="Contact">
            <p className="text-[#d1d5dc] text-[14px] tracking-[-0.1504px] leading-[22.75px] mb-4">
              Pour toute question concernant ces Conditions Générales de Vente, vous pouvez nous contacter :
            </p>

            <div className="bg-[rgba(0,0,0,0.5)] border border-[rgba(208,135,0,0.2)] rounded-[10px] p-4 text-[14px] tracking-[-0.1504px] leading-[22.75px]">
              <p className="font-['Quicksand'] font-bold text-[#fdc700] mb-0">YesMoreBet - Guillaume Peyrot</p>
              <p className="text-white mb-0">20 avenue Pierre Sémard 06130 Grasse</p>
              <p className="mb-0"><span className="font-['Quicksand'] font-bold text-[#fdc700]">Email : </span><span className="text-white">yesmorebet@hotmail.com</span></p>
              <p><span className="font-['Quicksand'] font-bold text-[#fdc700]">Téléphone : </span><span className="text-white">+33 6 26 51 22 17</span></p>
            </div>
          </Section>

        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
