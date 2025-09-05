"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { Carousel, CarouselContent, CarouselItem, } from "@/components/ui/carousel";
import Image from "next/image";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

const logos: Logo[] = [
  {
    id: "logo-1",
    description: "Logo 1",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-2",
    description: "Logo 2",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-wordmark.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-3",
    description: "Logo 3",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nextjs-wordmark.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-4",
    description: "Logo 4",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/react-wordmark.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-5",
    description: "Logo 5",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-6",
    description: "Logo 6",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-7",
    description: "Logo 7",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark.svg",
    className: "h-4 w-auto",
  },
  {
    id: "logo-8",
    description: "Logo 8",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-wordmark.svg",
    className: "h-7 w-auto",
  },
];

const Partners = () => {
  return (
    <section className="py-14">
      <div className="max-w-2xl md:max-w-7xl mx-auto px-4 xl:px-0">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
          {/* Partie texte */}
          <div className="flex-shrink-0 lg:max-w-md">
            <p className="text-[#32304C] text-2xl font-semibold text-center lg:text-left">
            Ils nous font déjà confiance pour gérer les votes de leurs projets
          </p>
        </div>
          {/* Partie logos avec scroll automatique */}
          <div className="flex-1 overflow-hidden">
            <div className="relative mx-auto flex items-center justify-center">
              <Carousel
                opts={{ loop: true }}
                plugins={[AutoScroll({ playOnInit: true })]}
              >
                <CarouselContent className="ml-0">
                  {logos.map((logo) => (
                    <CarouselItem
                      key={logo.id}
                      className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                    >
                      <div className="mx-10 md:mx-14 flex shrink-0 items-center justify-center">
                        <div>
                          <Image
                            src={logo.image}
                            alt={logo.description}
                            width={120}
                            height={28}
                            className={logo.className}
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
