import Image from "next/image";
import Courbe from "../../public/images/courbe.svg";
import Icone1 from "../../public/images/icone1.svg";
import Icone2 from "../../public/images/icone2.svg";
import Icone3 from "../../public/images/icone3.svg";
export default function HowItWorks() {
  return (
    <div className="py-8 lg:py-16  flex flex-col  items-center justify-center max-w-5xl gap-6 mx-auto px-4 lg:px-0 text-black ">
      <div className="text-center max-w-xl lg:max-w-2xl py-4 lg:py-8">
        <h1 className="text-4xl font-bold text-center pb-4">Comment ça marche ?</h1>
        <h1 className="text-xl ">Notre plateforme de billeterie en ligne rend la gestion d&apos;évènements simple, sécurisée et accessible à tous.</h1>
      </div>
      <div className="relative w-full ">
        <Image className="hidden md:block absolute -z-10 top-0 md:-top-4 lg:-top-8 xl:-top-12" src={Courbe} alt="courbe"  height={1100} />
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between px-0  md:px-10 lg:px-20">
            <div className="flex flex-col">
                <Image className="pb-3" src={Icone1} alt="icone1" width={50} height={50} />
                <div className="max-w-56 ">
                    <h1 className="font-bold text-lg  pb-1 ">Choississez un évènement, faites entendre votre voix</h1>
                    <p className="text-sm ">Parcourez les nominé.es par catégorie, explorez les prochaines étapes, suivez les participants et votez en toute simplicité.</p>
                </div>
            </div>
            <div className="flex flex-col pt-1 md:pt-7 lg:pt-10 xl:pt-8 ">
                <Image className="pb-2" src={Icone2} alt="icone2" width={50} height={50} />
                <div className="max-w-56 ">
                    <h1 className="font-bold text-lg  pb-1 ">Votez pour vos favoris (individuellement ou en masse).</h1>
                    <p className="text-sm ">Notre scanner de billets dédié transforme votre téléphone en l&apos;outil ultime pour des enregistrements rapides sans faille.</p>
                </div>
            </div>
            <div className="flex flex-col pt-1 md:pt-7 lg:pt-9 xl:pt-5">
                <Image className="pb-2" src={Icone3} alt="icone3" width={50} height={50} />
                <div className="max-w-56 ">
                    <h1 className="font-bold text-lg pb-1 ">Suivez les résultats en temps réel et partagez!</h1>
                    <p className="text-sm ">Grâce à notre système de paiement fiable, vous et vos clients bénéficiez d&apos;une expérience de paiement universelle.</p>
                </div>
            </div>
        </div>
        
      </div>
    </div>
  );
} 