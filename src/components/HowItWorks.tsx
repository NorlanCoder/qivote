import Image from "next/image";
import Courbe from "../../public/images/courbe.png";
import Icone1 from "../../public/images/icone1.png";
import Icone2 from "../../public/images/icone2.png";
import Icone3 from "../../public/images/icone3.png";
export default function HowItWorks() {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="py-8 lg:py-20 flex flex-col items-center justify-center max-w-7xl gap-6 mx-auto px-4 lg:px-0 text-black ">
        <div className="max-w-4xl lg:max-w-2xl mx-auto py-4 lg:py-8">
          <h1 className="text-4xl font-bold text-center pb-4">Comment ça marche ?</h1>
          <h1 className="text-xl mx-auto">Notre plateforme de billeterie en ligne rend la gestion d&apos;évènements simple, sécurisée et accessible à tous.</h1>
        </div>
        <div className="relative w-full ">
          <Image className="hidden md:block absolute z-10 top-0 md:-top-4 lg:-top-8 xl:-top-12" src={Courbe} alt="courbe"  height={1100} />
          <div className="flex flex-nowrap md:gap-10 justify-center md:justify-between px-0  md:px-10 lg:px-10">
            <div className="flex flex-col z-20">
              <Image className="pb-1" src={Icone1} alt="icone1" width={60} height={60} />
              <div className="max-w-xs">
                <h1 className="font-bold text-lg pb-1">Choississez un évènement, faites entendre votre voix</h1>
                <p className="text-sm ">Parcourez les nominé.es par catégorie, explorez les prochaines étapes, suivez les participants et votez en toute simplicité.</p>
              </div>
            </div>
            <div className="flex flex-col pt-1 md:pt-7 lg:pt-10 xl:pt-8 z-20">
              <Image className="pb-1" src={Icone2} alt="icone2" width={60} height={60} />
              <div className="max-w-xs">
                <h1 className="font-bold text-lg pb-1">Votez pour vos favoris (individuellement ou en masse).</h1>
                <p className="text-sm ">Notre scanner de billets dédié transforme votre téléphone en l&apos;outil ultime pour des enregistrements rapides sans faille.</p>
              </div>
            </div>
            <div className="flex flex-col pt-1 md:pt-7 lg:pt-9 xl:pt-5 z-20">
              <Image className="pb-1" src={Icone3} alt="icone3" width={60} height={60} />
              <div className="max-w-xs">
                <h1 className="font-bold text-lg pb-1">Suivez les résultats en temps réel et partagez!</h1>
                <p className="text-sm ">Grâce à notre système de paiement fiable, vous et vos clients bénéficiez d&apos;une expérience de paiement universelle.</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
} 