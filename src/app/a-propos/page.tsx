/* eslint-disable react/no-unescaped-entities */
"use client";
const Apropos = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Votre plateforme de{' '}
            <span className="inline-flex items-center">
              <svg className="w-8 h-8 md:w-10 md:h-10 mx-2 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </span>
            vote en ligne{' '}
            <br />
            sécurisée et intuitive
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Une expérience de vote complète avec des fonctionnalités avancées, 
            une sécurité renforcée et une interface intuitive pour tous les utilisateurs.
          </p>
        </div>
      </section>

      {/* Section 1: Révolutionner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/lovable-uploads/7e7fbc73-2466-4ebf-a537-b22d2e838641.png"
              alt="Personne travaillant sur ordinateur"
              className="w-full h-80 object-cover rounded-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Révolutionner la manière dont les événements virtuels sont organisés et vécus
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Notre plateforme transforme complètement l'expérience des événements virtuels 
              en offrant des outils innovants et une technologie de pointe qui permettent 
              d'organiser des votes en ligne sécurisés et transparents.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Nous créons des moments de démocratie participative grâce à une interface 
              intuitive, des fonctionnalités interactives avancées et une sécurité optimale 
              pour tous vos processus électoraux numériques.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Expérience inoubliable */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Faire de chaque événement une expérience inoubliable et engageante
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Nous mettons l'accent sur l'engagement et l'interaction pour créer 
              des expériences de vote virtuel qui marquent les esprits et rassemblent 
              les communautés autour de décisions importantes.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Chaque détail est pensé pour maximiser la participation et 
              l'engagement de vos électeurs, créant ainsi des processus démocratiques 
              inclusifs et transparents.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/lovable-uploads/7e7fbc73-2466-4ebf-a537-b22d2e838641.png"
              alt="Événement de vote 1"
              className="w-full h-48 object-cover rounded-lg"
            />
            <img
              src="/lovable-uploads/7e7fbc73-2466-4ebf-a537-b22d2e838641.png"
              alt="Événement de vote 2"
              className="w-full h-48 object-cover rounded-lg"
            />
            <img
              src="/lovable-uploads/7e7fbc73-2466-4ebf-a537-b22d2e838641.png"
              alt="Événement de vote 3"
              className="w-full h-48 object-cover rounded-lg"
            />
            <img
              src="/lovable-uploads/7e7fbc73-2466-4ebf-a537-b22d2e838641.png"
              alt="Événement de vote 4"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Section 3: Outils puissants */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Nous offrons des outils puissants pour créer des événements mémorables et engageants
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Interface intuitive</h3>
            <p className="text-gray-600 leading-relaxed">
              Une interface utilisateur simple et élégante qui permet à chacun 
              de voter facilement et de profiter pleinement de l'expérience démocratique.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Sécurité avancée</h3>
            <p className="text-gray-600 leading-relaxed">
              Protection maximale de vos données et de vos processus électoraux grâce 
              à nos protocoles de sécurité de niveau bancaire et cryptographie avancée.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Performance optimale</h3>
            <p className="text-gray-600 leading-relaxed">
              Des performances exceptionnelles qui garantissent une expérience 
              fluide même lors d'élections à grande échelle avec des milliers de participants.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Transformation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Nous transformons la façon dont les vies sont organisées
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Notre équipe passionnée travaille chaque jour pour démocratiser l'accès 
              au vote numérique et créer des expériences démocratiques qui 
              dépassent toutes les attentes en termes de transparence et d'engagement.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Ensemble, nous bâtissons l'avenir de la démocratie numérique 
              en combinant innovation technologique, sécurité de pointe et 
              une expertise reconnue en processus électoraux.
            </p>
          </div>
          <div>
            <img
              src="/lovable-uploads/7e7fbc73-2466-4ebf-a537-b22d2e838641.png"
              alt="Équipe travaillant ensemble sur le vote numérique"
              className="w-full h-80 object-cover rounded-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apropos;