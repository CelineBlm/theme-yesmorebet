import { Spade, CircleDot, Camera } from "lucide-react";
import blackjackPhoto from 'figma:asset/f254444c5973496dfc9acadcfd18880639b28dcc.png';
import roueDeLaChancePhoto from 'figma:asset/24a0e33e6cc84a4d0707301ceee61bd8882888db.png';
import lunettesPhoto from 'figma:asset/f09d24cbc03c064be6d021a6ea0288a83e62c18b.png';

export function FeaturesSection() {
  const features = [
    {
      icon: Spade,
      title: "Table de Blackjack professionnelle",
      description: "Une vraie table de casino animée par un croupier professionnel pour une expérience authentique.",
      bgImage: blackjackPhoto
    },
    {
      icon: CircleDot,
      title: "Roue de la Chance et tombola à lots",
      description: "Gagnez des tickets de tombola à la Roue de la Chance et remportez des lots en fin de soirée.",
      bgImage: roueDeLaChancePhoto
    },
    {
      icon: Camera,
      title: "Lunettes connectées",
      description: "Immortalisez les meilleurs moments avec des lunettes connectées pour des souvenirs uniques à partager.",
      bgImage: lunettesPhoto
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-yellow-400/10 border border-yellow-600/30 rounded-md text-yellow-400 text-sm mb-4">
            Nos Services
          </span>
          <h2 className="text-3xl md:text-5xl text-white leading-tight mb-4">
            Une animation <span className="text-yellow-400">complète</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Tout ce dont vous avez besoin pour créer une soirée casino inoubliable
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-zinc-900/80 to-black/90 border border-yellow-600/20 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/10 hover:-translate-y-2 hover:border-yellow-600/40"
            >
              {/* Image Container */}
              <div className="relative h-60 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${feature.bgImage})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {feature.description}
                </p>
                <button className="text-yellow-400 hover:text-yellow-300 transition-colors inline-flex items-center gap-2 group/link">
                  En savoir plus
                  <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
