import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Frame15 from "../../public/images/Frame15.svg";
import Frame16 from "../../public/images/Frame16.svg";
import Frame17 from "../../public/images/Frame17.svg";
import Frame18 from "../../public/images/Frame18.svg";

const Functionality = () => {
  return (
    <section className="py-14">
      <div className="max-w-6xl mx-auto md:px-8">
        <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
          <div className="max-w-xl px-4 space-y-5 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
            <h2 className="text-gray-900 text-3xl font-semibold sm:text-4xl">
              Tout ce qu’il vous faut, réuni
              <br />
              dans une seule plateforme.
            </h2>
            <p className="text-gray-600 max-w-md">
              Gagnez du temps et offrez une expérience fluide à vos participants grâce à notre solution tout-en-un. Plus besoin de jongler entre plusieurs outils : tout est pensé pour simplifier votre organisation, valoriser votre image, et garder le contrôle, à chaque étape.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-gray-700">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#918EF4] text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M16.704 5.29a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l2.47 2.47 6.97-6.97a.75.75 0 011.06 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>Gagnez du temps, de la sérénité et de la confiance à chaque étape</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#918EF4] text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M16.704 5.29a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l2.47 2.47 6.97-6.97a.75.75 0 011.06 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>Offrez une expérience fluide et moderne à vos participants</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/accueil" className="inline-flex items-center gap-2 rounded-md bg-[#A7A2F6] px-5 py-3 text-white shadow transition-all hover:bg-[#7c78e8]">
                Voter maintenant
                <ArrowRight
                  className="h-5 w-5 transition-transform duration-300 -rotate-45"
                  strokeWidth={2}
                />
              </Link>
              <Link href="/evenements" className="inline-flex items-center gap-2 rounded-md border border-[#918EF4] px-5 py-3 text-[#918EF4]">
                Publier une annonce
            </Link>
            </div>
          </div>
          <div className="flex-1 sm:hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden rounded-xl bg-gray-100 shadow">
                <Image src={Frame15} alt="Créez et partagez vos événements" fill className="object-cover" sizes="(min-width: 1024px) 400px, 50vw" />
              </div>
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden rounded-xl bg-gray-100 shadow">
                <Image src={Frame17} alt="Scannez, votez, validez... depuis votre téléphone" fill className="object-cover" sizes="(min-width: 1024px) 400px, 50vw" />
              </div>
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden rounded-xl bg-gray-100 shadow">
                <Image src={Frame16} alt="Gérez vos nominations, inscriptions et réservations" fill className="object-cover" sizes="(min-width: 1024px) 400px, 50vw" />
              </div>
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden rounded-xl bg-gray-100 shadow">
                <Image src={Frame18} alt="Scannez, votez, validez... depuis votre téléphone" fill className="object-cover" sizes="(min-width: 1024px) 400px, 50vw" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Functionality;
