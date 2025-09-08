import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
export default function Cta() {
  return (
    <div className="relative py-32 px-10 lg:px-0">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#d1d1d1_1px,transparent_2px),linear-gradient(to_bottom,#d1d1d1_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <div className="">
        <div className="justify-center flex flex-col items-center text-center max-w-2xl lg:max-w-3xl mx-auto px-2 lg:px-16 pt-5 pb-2 space-y-3 bg-white">
          <h1 className='font-semibold text-3xl sm:text-4xl text-black'>Vous êtes à un clic de l&apos;évènement parfait! </h1>
          <h2 className='text-lg text-black px-2'>Rejoignez la meilleure plateforme d&apos;Afrique pour des évènements réussis à chaque étape.</h2>
          <Link href="/devenir-annonceur" className="group flex space-x-2 items-center rounded-xl mb-5 py-3 px-4 md:px-8 text-white text-sm lg:text-lg font-medium bg-black ">
              <span>Devenir annonceur</span>
              <ArrowUpRight className="rotate-45 group-hover:rotate-0 transition-all"  />
          </Link>
        </div>
      </div>
    </div>
  );
} 