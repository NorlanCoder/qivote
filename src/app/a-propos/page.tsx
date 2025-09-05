/* eslint-disable react/no-unescaped-entities */
'use client';
import CustomTitle from '@/components/CustomTitle';
import Image from 'next/image';

const Apropos = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#F5F5F5]">
        <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="text-center">
            <CustomTitle title="Qui sommes-nous ?" position="center" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Votre plateforme de{' '}
              <span className="inline-flex items-center">
                {/*une Image */}
                <svg
                  className="w-8 h-8 md:w-10 md:h-10 mx-2 text-red-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </span>
             <span className="text-gray-600 font-bold">vote en ligne</span> <br />
              sécurisée et intuitive
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed ">
              Que vous soyez une entreprise ou un particulier, notre outil vous
              permet de créer des votes et des nominations en quelques clics, et
              de laisser le public désigner les gagnants selon leurs
              préférences.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Révolutionner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {/*Image*/}
            <Image
              src="/images/apropos/image-appros5.jpg"
              alt="Personne travaillant sur ordinateur"
              width={612}
              height={440}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <CustomTitle title="Notre mission" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Révolutionner la manière dont les événements virtuels sont
              organisés et vécus
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Nous offrons une plateforme de vote en ligne intuitive et
              sécurisée, permettant aux entreprises et aux particuliers de créer
              des expériences engageantes et transparentes. En facilitant la
              participation du public et en garantissant des résultats fiables,
              nous aidons nos utilisateurs à transformer leurs idées en succès.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Expérience inoubliable */}
      <section className="bg-default">
        <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <CustomTitle title="Notre vision" position="left" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Faire de chaque événement une expérience interactive et
                mémorable
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                En combinant innovation technologique et simplicité
                d'utilisation, nous aspirons à être la référence mondiale des
                plateformes de vote en ligne. Notre objectif est d'offrir à
                chacun les outils nécessaires pour engager son audience, prendre
                des décisions éclairées et célébrer le pouvoir de la
                participation collective.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* Grande image à gauche */}
              <div className="row-span-2">
                <Image
                  src="/images/apropos/image-appros2.jpg"
                  alt="Grande image"
                  width={500}
                  height={600}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Image en haut à droite */}
              <div>
                <Image
                  src="/images/apropos/image-appros3.jpg"
                  alt="Haut droite"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Image en bas à droite */}
              <div>
                <Image
                  src="/images/apropos/image-appros4.jpg"
                  alt="Bas droite"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 3: Outils puissants */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto justify-center">
        <div className="text-center mb-16">
          <CustomTitle title="Pourquoi choisir QiVOTE ?" position="center" />
          <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-4 text-center mx-auto justify-center leading-tight max-w-4xl">
            Nous offrons des outils puissants pour créer des événements
            mémorables et engageants.
          </h2>
          <p className="text-gray-600 text-md lg:text-lg justify-center">
            Voici ce qui nous distingue :
          </p>
        </div>

        {/* Grid des cartes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="flex flex-col text-left bg-default p-4 rounded-lg ">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-gray-800 text-white rounded-md flex items-center justify-center">
               {/*IMAGE image.svg */}
               <Image
                 src="/images/apropos/icon2.svg"
                 alt="Image 2"
                 width={40}
                 height={40}
                 className="w-5 h-5"
               />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Simplicité d’utilisation
              </h3>
            </div>
            <p className="text-gray-600 text-sm md:text-[16px] leading-relaxed">
            Notre interface intuitive vous permet de créer et de gérer vos événements en quelques minutes, sans compétences techniques requises.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col text-left bg-default p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-gray-800 text-white rounded-md flex items-center justify-center">
                 <Image
                 src="/images/apropos/icon3.svg"
                 alt="Image 3"
                 width={40}
                 height={40}
                 className="w-5 h-5"
               />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Sécurité renforcée
              </h3>
            </div>
            <p className="text-gray-600 text-sm md:text-[16px] leading-relaxed">
              Nous utilisons les dernières technologies pour garantir la sécurité et l'intégrité de vos votes, afin que vous puissiez organiser vos événements en toute confiance.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col text-left bg-default p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-gray-800 text-white rounded-md flex items-center justify-center">
                <Image
                 src="/images/apropos/icon1.svg"
                 alt="Image 1"
                 width={40}
                 height={40}
                 className="w-5 h-5"
               />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Personnalisation avancée
              </h3>
            </div>
            <p className="text-gray-600 text-sm md:text-[16px] leading-relaxed">
              Adaptez chaque aspect de vos événements à vos besoins, des
              inscriptions aux votes, pour une expérience unique et engageante.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Transformation */}
      <section className="bg-[#F5F5F5]">
        <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <CustomTitle title="Rejoignez-nous" position="left" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Nous transformons la façon dont les votes sont organisés
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Nous cherchons des personnes passionnées pour nous aider à
                révolutionner l'organisation de votes et de nominations. Si vous
                partagez notre vision, rejoignez-nous pour faire la différence.
              </p>
            </div>
            <div>
              {/*Image*/}
              <Image
                src="/images/apropos/image-appros5.jpg"
                alt=""
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apropos;
