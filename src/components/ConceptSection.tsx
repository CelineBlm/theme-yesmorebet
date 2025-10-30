import { Check, MapPin, Users, Gift, Sparkles } from "lucide-react";

export function ConceptSection() {
  const benefits = [
    "Jetons fictifs distribués à tous vos invités",
    "Animation par un croupier professionnel",
    "Table de Blackjack authentique",
    "Roue de la Chance pour gagner des tickets de tombola",
    "Lots personnalisés choisis par vos soins",
    "Souvenirs photo/vidéo avec lunettes connectées"
  ];

  const locations = [
    "Grasse",
    "Cannes",
    "Antibes",
    "Nice",
    "Toute la région Sud sur demande"
  ];

  return (
    <section id="concept" className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #FACC15 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Concept */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Text Content */}
            <div className="space-y-6">
              <span className="inline-block px-4 py-2 bg-yellow-400/10 border border-yellow-600/30 rounded-md text-yellow-400 text-sm">
                Le Concept
              </span>
              <h2 className="text-3xl md:text-5xl text-white leading-tight">
                Une expérience <span className="text-yellow-400">unique</span>, conviviale et 100% divertissante
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Une animation clé en main : vos invités reçoivent des jetons fictifs, jouent au Blackjack, 
                gagnent des tickets de tombola grâce à la Roue de la Chance et repartent avec des lots choisis par vos soins.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Une expérience unique, conviviale et 100 % divertissante.
              </p>

              {/* CTA */}
              <div className="pt-4">
                <a
                  href="#prestations"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-md hover:shadow-xl hover:shadow-yellow-400/50 transition-all hover:scale-105"
                >
                  <Sparkles size={20} />
                  Découvrir les formules
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-full">
              <div className="relative rounded-lg overflow-hidden shadow-2xl shadow-yellow-400/20 h-full">
                <img
                  src="https://images.unsplash.com/photo-1760331339913-da9637154477?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwYXJ0eSUyMGV2ZW50JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzYwOTgwNjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Événement élégant"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
