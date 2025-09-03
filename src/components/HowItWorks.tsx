import Image from "next/image";
export default function HowItWorks() {
  return (
    <div className="py-5 lg:py-16  flex flex-col  items-center justify-center w-5/6 lg:w-2/3 mx-auto gap-6 ">
      <div className="relative w-full">
        <Image className="absolute -z-10 " src="/images/courbe.svg" alt="courbe" fill />
        <div className="flex justify-between px-0 md:px-5 xl:px-16 ">
            <div className="flex flex-col items-start">
                <Image className="pb-4" src="/images/icone1.svg" alt="icone1" width={50} height={50} />
                <div className="max-w-52 ">
                    <h1 className="font-bold text-sm lg:text-lg pb-1">Comment ça marche?</h1>
                    <p className="text-xs lg:text-sm ">Qivote simplifie l'organisation d'évènements en vous offrant une plateforme intuitive pour gérer chaque étape, de la planification à la réalisation.</p>
                </div>
            </div>
            <div className="flex flex-col items-start">
                <Image className="" src="/images/icone2.svg" alt="icone2" width={50} height={50} />
                <div className="max-w-52 ">
                    <h1 className="font-bold text-sm lg:text-lg pb-1">Comment ça marche?</h1>
                    <p className="text-xs lg:text-sm ">Qivote simplifie l'organisation d'évènements en vous offrant une plateforme intuitive pour gérer chaque étape, de la planification à la réalisation.</p>
                </div>
            </div>
            <div className="flex flex-col items-start">
                <Image className="" src="/images/icone3.svg" alt="icone3" width={50} height={50} />
                <div className="max-w-52 ">
                    <h1 className="font-bold text-sm lg:text-lg pb-1">Comment ça marche?</h1>
                    <p className="text-xs lg:text-sm ">Qivote simplifie l'organisation d'évènements en vous offrant une plateforme intuitive pour gérer chaque étape, de la planification à la réalisation.</p>
                </div>
            </div>
        </div>
        
      </div>
    </div>
  );
} 