
import Image from "next/image";


export default function Figure() {
  return (
    <section className="relative h-[80vh] flex items-center">
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg_hero.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Overlay dégradé du bas vers le haut */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-black via-5% to-transparent" />
        {/* Overlay dégradé du haut vers le bas */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/60 via-transparent via-20% to-transparent" />
      </div>

      {/* Contenu */}
      <div className="text-white absolute bottom-0 left-0 right-0 z-10  px-4 xl:px-0 w-full flex max-w-7xl mx-auto items-end pb-20 justify-between ">
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center gap-12 lg:gap-20 xl:gap-44">
          <div className="max-w-2xl pb-2">
            <div className={`flex  mb-6`}>
              <div className="inline-flex items-center px-3 py-2 rounded-full text-white text-sm font-medium bg-white/10 backdrop-blur-md border-none">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                <h1>QiVOTE en chiffres</h1>
              </div>
            </div>
            <h1 className="text-4xl font-semibold">QiVOTE, c&apos;est une communauté grandissante et des chiffres concrets</h1>
          </div>
          <div  className="max-w-3xl flex flex-wrap justify-between gap-5 md:gap-10">
            <div className="flex justify-between gap-10">
              <div className="font-medium text-xl">
                <h1 className="font-medium text-3xl">+120</h1>
                <h1 className="text-lg">évènements gérés</h1>
              </div>
              <div >
                <h1 className="font-medium text-3xl">+85 000</h1>
                <h1 className="text-lg">votes enregistrés</h1>
              </div>
            </div>
            <div className="flex justify-between gap-10">
              <div className="font-medium text-xl">
                <h1 className="font-medium text-3xl">+30000</h1>
                <h1 className="text-lg">évènements gérés</h1>
              </div>
              <div className="font-medium text-xl">
                <h1 className="font-medium text-3xl">15</h1>
                <h1 className="text-lg">pays représentés</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
