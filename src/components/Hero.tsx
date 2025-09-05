import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-16 sm:pt-16 min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-60px)] flex items-center">
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
        {/* Overlay dégradé du bas vers le haut pour améliorer la lisibilité du texte */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/90 via-black/70 via-20% to-transparent" />
      </div>

      {/* Contenu */}
      {/* Contenu déplacé vers la fin de la section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 xl:px-0 w-full mt-auto mb-14 flex items-end">
        <div className="max-w-2xl">
          {/* Titre principal */}
          <h1 className="font-chillax font-semibold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6 animate-in fade-in-50 slide-in-from-bottom duration-700">
            VOTEZ, SOUTENEZ,
            <br />
            ET CÉLÉBREZ LES TALENTS
            <br />
            <span>DU MONDE ENTIER !</span>
          </h1>

          {/* Sous-titre */}
          <p className="text-md sm:text-lg text-white/90 mb-8 leading-relaxed font-medium animate-in fade-in-50 slide-in-from-bottom duration-700 delay-200">
            Notre plateforme révolutionne le vote en ligne pour vos événements favoris.
            <br />
            Participez et influencez les résultats dès maintenant.
          </p>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in-50 slide-in-from-bottom duration-700 delay-400">
            <Link
              href="/vote"
              className="group inline-flex items-center justify-center px-8 py-4 hover:bg-[#918EF4] text-white font-semibold rounded-xl bg-[#7c78e8] transition-all"
            >
              Voter maintenant
              <ArrowRight
                className="ml-2 h-5 w-5 transition-transform duration-300 -rotate-45"
                strokeWidth={2}
              />
            </Link>

            <Link
              href="/publish"
              className="group inline-flex items-center justify-center px-8 py-4 bg-transparent font-semibold rounded-xl border-2 text-[#918EF4] border-[#918EF4]"
            >
              Publier une annonce
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
