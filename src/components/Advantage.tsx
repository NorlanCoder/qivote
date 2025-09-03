import Image from "next/image";
import { Check } from "lucide-react";
export default function Advantage() {
  return (
    <div className="w-full bg-[#F5F3FE]">
        <div  className="py-5 lg:py-14  flex flex-wrap  items-center justify-center xl:justify-between w-4/5 lg:w-2/3 mx-auto gap-6 ">
            <div>
                <h1  className="font-bold text-2xl lg:text-3xl xl:text-4xl pb-3 lg:pb-4">Pourquoi choisir Qivote?</h1>
                <div className=" max-w-2xs sm:max-w-md">
                    <h1 className="text-sm lg:text-lg pb-2">Une plateforme pensée pour la simplicité, l'éfficacité ... et le succès de vos évènements</h1>
                    <ul className="space-y-2 text-xs lg:text-sm">
                        <li className="flex items-center gap-2"><Check size={16} className="text-[#7976C7]" />Expérience utilisateur fluide</li>
                        <li className="flex items-center gap-2"><Check size={16} className="text-[#7976C7]" />Outils tout-en-un</li>
                        <li className="flex items-center gap-2"><Check size={16} className="text-[#7976C7]" />Flexibilité & personnalisation</li>
                        <li className="flex items-center gap-2"><Check size={16} className="text-[#7976C7]" />Sécurité et transparence</li>
                        <li className="flex items-center gap-2"><Check size={16} className="text-[#7976C7]" />Support dédié</li>
                    </ul>
                </div>
            </div>
            <Image className="rounded-lg" src="/images/img1.jpg" alt="ChiffreImg" width={400} height={300} />
        </div>
    </div>
    
  );
} 