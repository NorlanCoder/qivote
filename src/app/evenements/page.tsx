import EventCard from "@/components/EventCard";

export const metadata = {
  title: 'Événements | Qivote',
  description: 'Découvrez et participez aux événements sur Qivote.',
};

const events = [
  {
    id: 1,
    title: "BBALL",
    closingDate: "12/12/12",
    tags: ["Sport", "Competition", "Culture"],
    description: "Le B-Ball Championship est un tournoi universitaire annuel de basketball qui se positionne comme le plus grand événement sportif universitaire du Bénin.",
    image: "/images/accueil/event2.png",
    image2: "/images/accueil/event1.png",
    flag: "🇧🇯", // Drapeau du Bénin
    link: "/evenements/1"
  },
  {
    id: 2,
    title: "BBALL",
    closingDate: "12/12/12",
    tags: ["Sport", "Competition", "Culture"],
    description: "Le B-Ball Championship est un tournoi universitaire annuel de basketball qui se positionne comme le plus grand événement sportif universitaire du Bénin.",
    image: "/images/accueil/event2.png",
    image2: "/images/accueil/event1.png",
    flag: "🇧🇯",
    link: "/evenements/2"
  },
  {
    id: 3,
    title: "BBALL",
    closingDate: "12/12/12",
    tags: ["Sport", "Competition", "Culture"],
    description: "Le B-Ball Championship est un tournoi universitaire annuel de basketball qui se positionne comme le plus grand événement sportif universitaire du Bénin.",
    image: "/images/accueil/event2.png",
    image2: "/images/accueil/event1.png",
    flag: "🇧🇯",
    link: "/evenements/3"
  },
  {
    id: 4,
    title: "BBALL",
    closingDate: "12/12/12",
    tags: ["Sport", "Competition", "Culture"],
    description: "Le B-Ball Championship est un tournoi universitaire annuel de basketball qui se positionne comme le plus grand événement sportif universitaire du Bénin.",
    image: "/images/accueil/event2.png",
    image2: "/images/accueil/event1.png",
    flag: "🇧🇯",
    link: "/evenements/4"
  },
  {
    id: 5,
    title: "BBALL",
    closingDate: "12/12/12",
    tags: ["Sport", "Competition", "Culture"],
    description: "Le B-Ball Championship est un tournoi universitaire annuel de basketball qui se positionne comme le plus grand événement sportif universitaire du Bénin.",
    image: "/images/accueil/event2.png",
    image2: "/images/accueil/event1.png",
    flag: "🇧🇯",
    link: "/evenements/4"
  },
  {
    id: 6,
    title: "BBALL",
    closingDate: "12/12/12",
    tags: ["Sport", "Competition", "Culture"],
    description: "Le B-Ball Championship est un tournoi universitaire annuel de basketball qui se positionne comme le plus grand événement sportif universitaire du Bénin.",
    image: "/images/accueil/event2.png",
    image2: "/images/accueil/event1.png",
    flag: "🇧🇯",
    link: "/evenements/4"
  },
  {
    id: 7,
    title: "BBALL",
    closingDate: "12/12/12",
    tags: ["Sport", "Competition", "Culture"],
    description: "Le B-Ball Championship est un tournoi universitaire annuel de basketball qui se positionne comme le plus grand événement sportif universitaire du Bénin.",
    image: "/images/accueil/event2.png",
    image2: "/images/accueil/event1.png",
    flag: "🇧🇯",
    link: "/evenements/4"
  },
  {
    id: 8,
    title: "BBALL",
    closingDate: "12/12/12",
    tags: ["Sport", "Competition", "Culture"],
    description: "Le B-Ball Championship est un tournoi universitaire annuel de basketball qui se positionne comme le plus grand événement sportif universitaire du Bénin.",
    image: "/images/accueil/event2.png",
    image2: "/images/accueil/event1.png",
    flag: "🇧🇯",
    link: "/evenements/4"
  },
  {
    id: 9,
    title: "BBALL",
    closingDate: "12/12/12",
    tags: ["Sport", "Competition", "Culture"],
    description: "Le B-Ball Championship est un tournoi universitaire annuel de basketball qui se positionne comme le plus grand événement sportif universitaire du Bénin.",
    image: "/images/accueil/event2.png",
    image2: "/images/accueil/event1.png",
    flag: "🇧🇯",
    link: "/evenements/4"
  },
  {
    id: 10,
    title: "BBALL",
    closingDate: "12/12/12",
    tags: ["Sport", "Competition", "Culture"],
    description: "Le B-Ball Championship est un tournoi universitaire annuel de basketball qui se positionne comme le plus grand événement sportif universitaire du Bénin.",
    image: "/images/accueil/event2.png",
    image2: "/images/accueil/event1.png",
    flag: "🇧🇯",
    link: "/evenements/4"
  }
];

export default function EvenementsPage() {
  return (
    <div className="bg-[#F5F5F5] pt-20">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Votez pour vos événements préférés
        </h1>
        <p className="mt-3 text-black text-md md:text-xl">
          Découvrez les événements ouverts au vote en ce moment. Sélectionnez, explorez, votez : c&apos;est simple, rapide et sans inscription.
        </p>

        {/* Filters Section */}
        <div className="my-8 md:flex flex-wrap md:flex-nowrap justify-between items-center gap-4 p-2 bg-[#FAFAFA] ">
          <div className="flex flex-wrap md:flex-nowrap justify-between gap-2 md:w-2/3">
            {/* Search Input */}
            <div className="relative flex-1 w-full md:max-w-xl">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Rechercher un événement..."
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none accent-black focus:border-transparent"
              />
            </div>

            {/* Date Filter */}
            <div className="flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 cursor-pointer hover:bg-gray-200 transition-colors w-full md:max-w-md">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-gray-700 font-medium">Date</span>
              <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 cursor-pointer hover:bg-gray-200 transition-colors w-full md:max-w-sm">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span className="text-gray-700 font-medium">Catégorie</span>
              <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div className="flex gap-2 justify-end pt-2 md:pt-0 md:w-1/3">
            {/* Status Filter */}
            <div className="flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 cursor-pointer hover:bg-gray-200 transition-colors md:max-w-sm">
              <span className="text-gray-700 font-medium">Statut</span>
              <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Country Filter */}
            <div className="flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 cursor-pointer hover:bg-gray-200 transition-colors md:max-w-sm">
              <span className="text-lg">🇧🇯</span>
              <span className="text-gray-700 font-medium">Pays</span>
              <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Event Cards Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-6">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}
