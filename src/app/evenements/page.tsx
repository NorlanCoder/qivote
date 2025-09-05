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
    image: "/images/Frame15.jpg",
    flag: "🇧🇯", // Drapeau du Bénin
    link: "/evenements/1"
  },
  {
    id: 2,
    title: "BBALL",
    closingDate: "12/12/12",
    tags: ["Sport", "Competition", "Culture"],
    description: "Le B-Ball Championship est un tournoi universitaire annuel de basketball qui se positionne comme le plus grand événement sportif universitaire du Bénin.",
    image: "/images/Frame16.jpg",
    flag: "🇧🇯",
    link: "/evenements/2"
  },
  {
    id: 3,
    title: "BBALL",
    closingDate: "12/12/12",
    tags: ["Sport", "Competition", "Culture"],
    description: "Le B-Ball Championship est un tournoi universitaire annuel de basketball qui se positionne comme le plus grand événement sportif universitaire du Bénin.",
    image: "/images/Frame17.jpg",
    flag: "🇧🇯",
    link: "/evenements/3"
  },
  {
    id: 4,
    title: "BBALL",
    closingDate: "12/12/12",
    tags: ["Sport", "Competition", "Culture"],
    description: "Le B-Ball Championship est un tournoi universitaire annuel de basketball qui se positionne comme le plus grand événement sportif universitaire du Bénin.",
    image: "/images/Frame18.jpg",
    flag: "🇧🇯",
    link: "/evenements/4"
  },
  {
    id: 5,
    title: "BBALL",
    closingDate: "12/12/12",
    tags: ["Sport", "Competition", "Culture"],
    description: "Le B-Ball Championship est un tournoi universitaire annuel de basketball qui se positionne comme le plus grand événement sportif universitaire du Bénin.",
    image: "/images/Frame18.jpg",
    flag: "🇧🇯",
    link: "/evenements/4"
  },
  {
    id: 6,
    title: "BBALL",
    closingDate: "12/12/12",
    tags: ["Sport", "Competition", "Culture"],
    description: "Le B-Ball Championship est un tournoi universitaire annuel de basketball qui se positionne comme le plus grand événement sportif universitaire du Bénin.",
    image: "/images/Frame18.jpg",
    flag: "🇧🇯",
    link: "/evenements/4"
  },
  {
    id: 7,
    title: "BBALL",
    closingDate: "12/12/12",
    tags: ["Sport", "Competition", "Culture"],
    description: "Le B-Ball Championship est un tournoi universitaire annuel de basketball qui se positionne comme le plus grand événement sportif universitaire du Bénin.",
    image: "/images/Frame18.jpg",
    flag: "🇧🇯",
    link: "/evenements/4"
  },
  {
    id: 8,
    title: "BBALL",
    closingDate: "12/12/12",
    tags: ["Sport", "Competition", "Culture"],
    description: "Le B-Ball Championship est un tournoi universitaire annuel de basketball qui se positionne comme le plus grand événement sportif universitaire du Bénin.",
    image: "/images/Frame18.jpg",
    flag: "🇧🇯",
    link: "/evenements/4"
  },
  {
    id: 9,
    title: "BBALL",
    closingDate: "12/12/12",
    tags: ["Sport", "Competition", "Culture"],
    description: "Le B-Ball Championship est un tournoi universitaire annuel de basketball qui se positionne comme le plus grand événement sportif universitaire du Bénin.",
    image: "/images/Frame18.jpg",
    flag: "🇧🇯",
    link: "/evenements/4"
  },
  {
    id: 10,
    title: "BBALL",
    closingDate: "12/12/12",
    tags: ["Sport", "Competition", "Culture"],
    description: "Le B-Ball Championship est un tournoi universitaire annuel de basketball qui se positionne comme le plus grand événement sportif universitaire du Bénin.",
    image: "/images/Frame18.jpg",
    flag: "🇧🇯",
    link: "/evenements/4"
  }
];

export default function EvenementsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
        Événements
      </h1>
      <p className="mt-3 text-black/70 dark:text-white/70">
        Cette page listera les prochains événements. Nous ajouterons le contenu
        bientôt.
      </p>

      {/* Event Cards Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
