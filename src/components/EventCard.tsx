import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface Event {
  id: number;
  title: string;
  closingDate: string;
  tags: string[];
  description: string;
  image: string;
  image2: string;
  flag: string;
  link: string;
}

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative">
      {/* Image avec drapeau */}
      <div className="relative w-full h-48 overflow-hidden flex items-center justify-center bg-gray-100">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      <div className="absolute left-1/2 top-48 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
          <Image
            src={event.image2}
            alt={event.title}
            fill
            className="object-cover object-center rounded-full"
            sizes="100px"
          />
        </div>
      </div>

      {/* Contenu de la carte */}
      <div className="p-4 pt-10">
        {/* Titre et date de fermeture */}
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-bold text-black">{event.title}</h3>
          <span className="text-sm text-gray-500 ml-2">Ferme le: {event.closingDate}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {event.tags.map((tag, index) => (
            <div
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              <span className="text-gray-600 text-xs rounded-full h-5 w-5"></span>
              {tag}
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {event.description}
        </p>

        {/* Bouton "En savoir plus" */}
        <div className="flex justify-end items-center mt-5">
          <Link href="/" className="group inline-flex items-center font-lignt gap-2 rounded-full bg-black px-5 py-3 text-white shadow transition-all">
            En savoir plus
            <div className="p-1 bg-white rounded-full ml-2 text-black">
              <ArrowRight
                className="h-5 w-5 transition-transform duration-300 -rotate-45 group-hover:rotate-0"
                strokeWidth={2}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
