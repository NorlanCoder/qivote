import Image from "next/image";
import { Check } from "lucide-react";
export default function Advantage() {
  return (
    <div className="w-full bg-[#F5F3FE] py-14">
        <div  className="max-w-6xl mx-auto  items-center gap-12 flex flex-col lg:flex-row px-4 lg:px-8">
            <div className=" ">
                <h1  className="text-gray-900 text-3xl font-semibold sm:text-4xl ">Pourquoi choisir Qivote?</h1>
                <div className=" max-w-xl mt-6 md:mt-0">
                    <h1 className="text-sm lg:text-lg pb-3">Une plateforme pensée pour la simplicité, l'éfficacité ... et le succès de vos évènements</h1>
                    <ul className="space-y-3 text-xs lg:text-sm">
                        <li className="flex items-center gap-2"><Check size={16} className="text-[#7976C7]" />Expérience utilisateur fluide</li>
                        <li className="flex items-center gap-2"><Check size={16} className="text-[#7976C7]" />Outils tout-en-un</li>
                        <li className="flex items-center gap-2"><Check size={16} className="text-[#7976C7]" />Flexibilité & personnalisation</li>
                        <li className="flex items-center gap-2"><Check size={16} className="text-[#7976C7]" />Sécurité et transparence</li>
                        <li className="flex items-center gap-2"><Check size={16} className="text-[#7976C7]" />Support dédié</li>
                    </ul>
                </div>
            </div>
            <Image className="rounded-lg" src="/images/img1.jpg" alt="ChiffreImg" width={470} height={320} />
        </div>
    </div>
    
  );
} 