import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg_hero.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Overlay dégradé du bas vers le haut */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-black via-5% to-transparent" />
        {/* Overlay dégradé du haut vers le bas */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/60 via-transparent via-20% to-transparent" />
      </div>

      {/* Contenu */}
      <div className="absolute bottom-0 left-0 right-0 z-10 max-w-7xl mx-auto px-4 xl:px-0 w-full flex items-end pb-20">
        <div className="max-w-3xl">
          {/* Titre principal */}
          <h1 className="font-chillax font-semibold text-3xl sm:text-5xl lg:text-6xl text-white leading-tight mb-4 animate-in fade-in-50 slide-in-from-bottom duration-700">
            <span className="xs:text-lg sm:text-4xl lg:text-4xl font-chillax font-semibold">Votez,</span>
            <br />
            VOS COUPS DE CŒUR DU
            <br />
            MONDE ENTIER !
          </h1>

          {/* Sous-titre */}
          <p className="text-md sm:text-lg text-white/90 mb-4 leading-relaxed font-light animate-in fade-in-50 slide-in-from-bottom duration-700 delay-200">
            Notre plateforme révolutionne le vote en ligne pour vos événements favoris. <br /> Participez et influencez les résultats dès maintenant.
          </p>

          {/* Boutons d'action */}
          <div className="flex flex-row gap-4 animate-in fade-in-50 slide-in-from-bottom duration-700 delay-400">
            <Link
              href="/vote"
              className="group inline-flex items-center justify-center p-2 px-3 bg-white text-black font-light rounded-full hover:bg-gray-100 transition-all"
            >
              Voter maintenant
              <div className="p-2 bg-black rounded-full ml-2">
                <ArrowRight
                  className="h-5 w-5 text-white transition-transform duration-300 -rotate-45 group-hover:rotate-0"
                  strokeWidth={2}
                />
              </div>
            </Link>

            <Link
              href="/publish"
              className="group inline-flex items-center justify-center p-2 px-3 bg-white/10 backdrop-blur-md text-white font-light rounded-full transition-all"
            >
              Devenir annonceur
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}