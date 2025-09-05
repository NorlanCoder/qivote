import Image from "next/image";
import { Check } from "lucide-react";
import Img1 from "../../public/images/img1.jpg";
export default function Advantage() {
  return (
    <div className="w-full  py-14">
        <div  className="max-w-7xl mx-auto  items-center gap-6 lg:gap-12 flex flex-col md:flex-row px-4 md:px-8">
            <div className=" max-w-lg lg:max-w-xl mt-6 md:mt-0 space-y-5">
                <h1  className=" ">Pourquoi choisir QiVOTE?</h1>
                <h1 className="text-gray-900 text-3xl font-semibold sm:text-4xl">Une plateforme pensée pour la simplicité, l'éfficacité ... et le succès de vos évènements.</h1>
                <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-center gap-2"><Check size={20} className="text-black font-extrabold" />Expérience utilisateur fluide</li>
                    <li className="flex items-center gap-2"><Check size={20} className="text-black font-extrabold" />Outils tout-en-un</li>
                    <li className="flex items-center gap-2"><Check size={20} className="text-black font-extrabold" />Flexibilité & personnalisation</li>
                    <li className="flex items-center gap-2"><Check size={20} className="text-black font-extrabold" />Sécurité et transparence</li>
                    <li className="flex items-center gap-2"><Check size={20} className="text-black font-extrabold " />Support dédié</li>
                </ul>
            </div>
            <Image className="rounded-lg" src={Img1} alt="ChiffreImg" width={470} height={320} />
        </div>
    </div>
    
  );
} 