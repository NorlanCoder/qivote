import { FaArrowUp } from 'react-icons/fa'
export default function Cta() {
  return (
    <div className="py-5 lg:py-10 ">
      <div className="justify-center flex flex-col items-center text-center w-2/3 lg:w-1/3 mx-auto px-10 pt-5 pb-2 space-y-4 bg-white">
        <h1 className='font-bold text-lg lg:text-xl'>Vous êtes à un clic de l'évènement parfait!</h1>
        <h2 className='text-sm lg:text-lg font-medium'>Rejoignez la meilleure plateforme d'Afrique pour des évènements réussis à chaque étape.</h2>
        <button className="flex space-x-2 items-center rounded-lg p-4 text-white text-sm lg:text-lg font-medium bg-[#918EF4] ">
            <span>Publier une annonce</span>
            <FaArrowUp size={10} />
        </button>
      </div>
    </div>
  );
} 