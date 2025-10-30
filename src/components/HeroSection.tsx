import { ChevronDown, MapPin } from "lucide-react";
import heroImage from "figma:asset/60c4a79ca457d69435c4bf55119b5e96ebfd1acd.png";

export function HeroSection() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Casino table ambiance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 text-center z-10">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white leading-tight mt-16 md:mt-20">
            YesMoreBet
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            L'expérience casino fictif pour vos soirées privées, mariages et événements d'entreprise sur la Côte d'Azur.
          </h2>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-yellow-400">
            <MapPin size={20} />
            <span className="text-gray-300">Grasse • Cannes • Antibes • Nice • Région PACA</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#prestations"
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-md hover:shadow-xl hover:shadow-yellow-400/50 transition-all hover:scale-105"
            >
              Découvrir les formules
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-md hover:bg-white/20 backdrop-blur-sm transition-all hover:scale-105"
            >
              Me contacter
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-yellow-400" size={32} />
        </div>
      </div>
    </section>
  );
}
