"use client"

import { Menu, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
}

const Navbar1 = ({
  logo = {
    url: "/",
    src: "/logo3.png",
    alt: "QivOTE Logo",
    title: "QivOTE",
  },
  menu = [
    { title: "À Propos", url: "/a-propos" },
    { title: "Événements", url: "/evenements" },
    { title: "FAQ", url: "/faq" },
    { title: "Nous contacter", url: "/contact" },
  ],
}: Navbar1Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  // Détermine si on est sur la page d'accueil
  const isHomePage = pathname === '/';
  
  // Logo et couleurs selon la page
  const currentLogo = isHomePage ? logo.src : '/logo4.png';
  const textColor = isHomePage ? 'text-white' : 'text-black';
  const separatorColor = isHomePage ? 'bg-white' : 'bg-black';

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { 
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section className={`py-4 fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      isHomePage 
        ? (isScrolled ? 'bg-black' : 'bg-transparent')
        : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 xl:px-0">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex items-center">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link href={logo.url} className="flex items-center gap-2">
              <Image
                src={currentLogo}
                width={120}
                height={120}
                className="max-h-20"
                alt={logo.alt}
              />
            </Link>
            <div className={`h-6 w-px ${separatorColor}`}></div>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList className={`font-bold ${textColor} space-x-8`}>
                  {menu.map((item) => renderMenuItem(item, textColor))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="group flex gap-3 items-center">
            <Link
              href="/devenir-annonceur"
              className={`flex items-center gap-2 rounded-full px-6 py-2 transition-all ${
                isHomePage 
                  ? 'bg-white/10 backdrop-blur-3xl text-white' 
                  : 'bg-black text-white'
              }`}
            >
              Devenir annonceur
              <ArrowRight
                className={`h-5 w-5 transition-transform duration-300 -rotate-45 group-hover:rotate-0 ${isHomePage ? 'text-white' : 'text-black p-1 bg-white rounded-full'}`}
                strokeWidth={2}
              />
            </Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href={logo.url} className="flex items-center gap-2">
              <Image
                src={currentLogo}
                width={100}
                height={100}
                className="max-h-10"
                alt={logo.alt}
              />
            </Link>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto bg-white text-black">
                <SheetHeader>
                  <SheetTitle>
                    <Link href={logo.url} className="flex items-center gap-2">
                      <Image
                        src={currentLogo}
                        width={100}
                        height={100}
                        className="max-h-8"
                        alt={logo.alt}
                      />
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4 text-black"
                  >
                    {menu.map((item) => renderMobileMenuItem(item, textColor))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    <Link href="/devenir-annonceur" className="group rounded-full border-black text-blackpx-6 py-2 flex items-center gap-2">
                      Devenir annonceur
                      <ArrowRight
                        className="h-6 w-6 transition-transform duration-300 -rotate-45 group-hover:rotate-0"
                        strokeWidth={2}
                      />
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem, textColor: string) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger className={`hover:bg-transparent data-[state=open]:bg-transparent ${textColor}`}>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover hover:bg-transparent text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="hover:bg-transparent w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <Link
        href={item.url}
        className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-bold ${textColor} transition-colors hover:bg-transparent hover:no-underline`}
      >
        {item.title}
      </Link>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem, textColor: string) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className={`text-md py-0 font-semibold hover:no-underline hover:bg-transparent ${textColor}`}>
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link key={item.title} href={item.url} className={`text-md font-semibold hover:bg-transparent ${textColor}`}>
      {item.title}
    </Link>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <Link
      className="flex select-none flex-row gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-transparent focus:bg-transparent active:bg-transparent text-white"
      href={item.url}
    >
      <div className="text-white">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold text-white">{item.title}</div>
        {item.description && (
          <p className="text-gray-300 text-sm leading-snug">
            {item.description}
          </p>
        )}
      </div>
    </Link>
  );
};

export default Navbar1;
