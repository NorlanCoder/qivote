import { ArrowUp } from 'lucide-react';
export default function Cta() {
  return (
    <div className="py-5 lg:py-10 ">
      <div className="justify-center flex flex-col items-center text-center w-2/3 lg:w-1/2 mx-auto px-2 lg:px-16 pt-5 pb-2 space-y-4 bg-white">
        <h1 className='font-semibold text-xl lg:text-2xl xl:text-4xl'>Vous êtes à un clic de l'évènement parfait!</h1>
        <h2 className='text-sm lg:text-lg '>Rejoignez la meilleure plateforme d'Afrique pour des évènements réussis à chaque étape.</h2>
        <button className="flex space-x-2 items-center rounded-xl py-3 px-4 lg:px-8 text-white text-sm lg:text-lg font-medium bg-black ">
            <span>Devenir annonceur</span>
            <ArrowUp className='rotate-45'  />
        </button>
      </div>
    </div>
  );
} 