import { ArrowUp } from 'lucide-react';
export default function Cta() {
  return (
    <div className="py-5 lg:py-10 ">
      <div className="justify-center flex flex-col items-center text-center max-w-2xs sm:max-w-2xl lg:max-w-3xl mx-auto px-2 lg:px-16 pt-5 pb-2 space-y-3 bg-white">
        <h1 className='font-semibold text-3xl sm:text-4xl text-gray-900'>Vous êtes à un clic de l'évènement parfait! </h1>
        <h2 className='text-lg text-gray-700'>Rejoignez la meilleure plateforme d'Afrique pour des évènements réussis à chaque étape.</h2>
        <button className="flex space-x-2 items-center rounded-xl py-3 px-4 md:px-8 text-white text-sm lg:text-lg font-medium bg-black ">
            <span>Devenir annonceur</span>
            <ArrowUp className='rotate-45'  />
        </button>
      </div>
    </div>
  );
} 