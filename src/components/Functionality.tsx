import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckIcon } from "lucide-react";
import Frame15 from "../../public/images/Frame15.jpg";
import Frame16 from "../../public/images/Frame16.jpg";
import Frame17 from "../../public/images/Frame17.jpg";
import Frame18 from "../../public/images/Frame18.jpg";

const Functionality = () => {
  return (
    <section className="py-14 bg-[#F5F5F5] text-black">
      <div className="max-w-7xl mx-auto px-4 xl:px-0">
        <div className="flex flex-col lg:flex-row items-center lg:gap-x-12 sm:px-4 md:px-0">
          <div className="px-4 space-y-5 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
            <h2 className="text-black text-3xl font-semibold sm:text-4xl">
              Tout ce qu’il vous faut, réuni
              <br />
              dans une seule plateforme.
            </h2>
            <p className="lg:max-w-xl">
              Gagnez du temps et offrez une expérience fluide à vos participants grâce à notre solution tout-en-un. Plus besoin de jongler entre plusieurs outils : tout est pensé pour simplifier votre organisation, valoriser votre image, et garder le contrôle, à chaque étape.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <CheckIcon className="h-5 w-5" />
                <span>Gagnez du temps, de la sérénité et de la confiance à chaque étape</span>
              </li>
              <li className="flex gap-3">
                <CheckIcon className="h-5 w-5" />
                <span>Offrez une expérience fluide et moderne à vos participants</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/accueil" className="group inline-flex items-center font-lignt gap-2 rounded-md bg-black px-5 py-3 text-white shadow transition-all">
                Voter maintenant
                <div className="p-1 bg-white rounded-full ml-2 text-black">
                  <ArrowRight
                    className="h-5 w-5 transition-transform duration-300 -rotate-45 group-hover:rotate-0"
                    strokeWidth={2}
                  />
                </div>
              </Link>
            </div>
          </div>

          <div className="lg:flex-1 w-full mt-10 lg:mt-0">
            {/* Ajout de w-full et mt-8 pour s'assurer que la grille s'affiche bien en mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Panneau 1 - Créez et partagez vos événements */}
              <div className="relative h-48 sm:h-56 md:h-72 overflow-hidden rounded-xl bg-gray-100 shadow">
                <div className="flex flex-row sm:flex-row items-center gap-3 h-full">
                  <Image src={Frame15} alt="Créez et partagez vos événements" fill className="object-cover" sizes="(min-width: 1024px) 400px, 50vw" />
                  <div className="absolute bottom-4 left-4 bg-black/10 backdrop-blur-sm rounded-lg p-3 max-w-[300px] flex">
                    <div className="flex items-center gap-2 mb-2">
                      <Image src="/icônes/icone-confettis.png" alt="Icône événement" width={20} height={20} />
                    </div>
                    <p className="text-white text-xs font-medium">Créez et partagez vos événements <br /> en quelques clics</p>
                  </div>
                </div>
              </div>

              {/* Panneau 2 - Gérez vos nominations */}
              <div className="relative h-48 sm:h-56 md:h-72 overflow-hidden rounded-xl bg-gray-100 shadow flex">
                <div className="flex flex-row sm:flex-row items-center gap-3 h-full">
                  <Image src={Frame17} alt="Gérez vos nominations, inscriptions et réservations" fill className="object-cover" sizes="(min-width: 1024px) 400px, 50vw" />
                  <div className="absolute bottom-4 left-4 bg-black/10 backdrop-blur-sm rounded-lg p-3 max-w-[300px] flex">
                    <div className="flex items-center gap-2 mb-2">
                      <Image src="/icônes/icone-disposition-du-tableau.png" alt="Icône gestion" width={20} height={20} />
                    </div>
                    <p className="text-white text-xs font-medium">Gérez vos nominations, inscrits <br /> et réservations en temps réel</p>
                  </div>
                </div>
              </div>

              {/* Panneau 3 - Scannez, votez, validez */}
              <div className="relative h-48 sm:h-56 md:h-72 overflow-hidden rounded-xl bg-gray-100 shadow">
                <div className="flex flex-row sm:flex-row items-center gap-3 h-full">
                  <Image src={Frame16} alt="Scannez, votez, validez... depuis votre téléphone" fill className="object-cover" sizes="(min-width: 1024px) 400px, 50vw" />
                  <div className="absolute bottom-4 left-4 bg-black/10 backdrop-blur-sm rounded-lg p-3 max-w-[300px] flex">
                    <div className="flex items-center gap-2 mb-2">
                      <Image src="/icônes/icone-vote.png" alt="Icône vote" width={20} height={20} />
                    </div>
                    <p className="text-white text-xs font-medium">Scannez, votez, validez... <br /> directement depuis votre téléphone</p>
                  </div>
                </div>
              </div>

              {/* Panneau 4 - Paiement */}
              <div className="relative h-48 sm:h-56 md:h-72 overflow-hidden rounded-xl bg-gray-100 shadow">
                <div className="flex flex-row sm:flex-row items-center gap-3 h-full">
                  <Image src={Frame18} alt="Paiement sécurisé" fill className="object-cover" sizes="(min-width: 1024px) 400px, 50vw" />
                  <div className="absolute bottom-4 left-4 bg-black/10 backdrop-blur-sm rounded-lg p-3 max-w-[300px] flex">
                    <div className="flex items-center gap-2 mb-2">
                      <Image src="/icônes/icone-paiment.png" alt="Icône paiement" width={20} height={20} />
                    </div>
                    <p className="text-white text-xs font-medium">Paiements sécurisés et transactions <br /> instantanées </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Functionality;
