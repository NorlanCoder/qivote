import Image from "next/image";

export default function Figure() {
  return (
    <div className="py-5 lg:py-14  flex flex-wrap  items-center justify-center xl:justify-between w-4/5 lg:w-2/3 mx-auto gap-6 ">
      <div className="">
        <h1 className="font-bold text-xl lg:text-3xl xl:text-4xl pb-2">En chiffres</h1>
        <div className=" max-w-2xs sm:max-w-sm">
            <p className="text-sm lg:text-lg">Qivote, c'est bien plus qu'une plateforme. C'est une communauté grandissante et des résultats concrets.</p>
            <div className="flex flex-wrap justify-between gap-y-4 lg:gap-y-8 pt-4 lg:pt-6">
              <div className="border-l-2 border-gray-300 pl-2 py-1 flex flex-col  ">
                <h1 className="font-bold text-xl lg:text-3xl text-gray-500">+120</h1>
                <h1 className="text-sm lg:text-lg text-gray-400 font-medium">évènements gérés</h1>
              </div>
              <div className="border-l-2 border-gray-300 pl-2 py-1 flex flex-col ">
                <h1 className="font-bold text-xl lg:text-3xl text-gray-500">+85 000</h1>
                <h1 className="text-sm lg:text-lg text-gray-400 font-medium">votes enregistrés</h1>
              </div>
              <div className="border-l-2 border-gray-300 pl-2 py-1 flex flex-col ">
                <h1 className="font-bold text-xl lg:text-3xl text-gray-500">+30 000</h1>
                <h1 className="text-sm lg:text-lg text-gray-400 font-medium">évènements gérés</h1>
              </div>
              <div className="border-l-2 border-gray-300 pl-2  flex flex-col ">
                <h1 className="font-bold text-xl lg:text-3xl text-gray-500">15</h1>
                <h1 className="text-sm lg:text-lg text-gray-400 font-medium">pays représentés</h1>
              </div>
            </div>
            
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        <Image className="" src="/images/img2.png" alt="ChiffreImg" width={210} height={310} />
        <Image className="" src="/images/img3.png" alt="ChiffreImg" width={210} height={310} />
      </div>
      
    </div>
  );
} 