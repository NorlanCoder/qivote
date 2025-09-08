import Link from "next/link";
import EventCard from "./EventCard";

// Données des événements
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
  }
];

const Events = () => {
  return (
    <section className="py-14 text-black">
      <div className="max-w-7xl mx-auto px-4 xl:px-0">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">
            Découvrez et participez aux campagnes de vote actives
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 px-4 xl:px-0">
            Suivez vos projets préférés, soutenez vos talents favoris et faites entendre votre voix en temps réel !
          </p>
          <Link
            href="/evenements"
            className="group inline-flex items-center justify-center px-6 py-3 bg-black text-white font-medium rounded-lg transition-colors"
          >
            Voir la liste complète
          </Link>
        </div>

        {/* Event Cards Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
