import React from "react";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-2xl md:max-w-7xl mx-auto px-4 xl:px-0">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-4 lg:items-start">
            <div className="flex items-center gap-2 lg:justify-start">
              <Link href="/">
                <Image
                  src="/logo3.png"
                  alt="Qivote"
                  title="QivOTE"
                  width={120}
                  height={32}
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            <p className="font-medium text-muted-foreground text-sm max-w-sm leading-relaxed">
              Plateforme tout-en-un dédiée à l’organisation,
              la gestion et la participation à des campagnes
              de vote en ligne.
            </p>
            <ul className="text-muted-foreground flex items-center">


              <li>
                <a
                  href="https://www.linkedin.com/company/qivote"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-white hover:text-gray-200"
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>
              </li>
            </ul>
            <p className="text-[10px] text-gray-400">
              © QIVOTE {new Date().getFullYear()} - Tous droits réservés
            </p>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            <div>
              <h3 className="mb-4 font-semibold text-white">Navigation</h3>
              <ul className="text-muted-foreground space-y-3 text-sm">
                <li className="hover:text-white font-medium"><Link href="/">Accueil</Link></li>
                <li className="hover:text-white font-medium"><Link href="/evenements">Événements</Link></li>
                <li className="hover:text-white font-medium"><Link href="/faq">FAQ</Link></li>
                <li className="hover:text-white font-medium"><Link href="/contact">Nous contacter</Link></li>
                <li className="hover:text-white font-medium"><a href="#publish">Publier une annonce</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-white">Ressources</h3>
              <ul className="text-muted-foreground space-y-3 text-sm">
                <li className="hover:text-white font-medium"><a href="#">Centre d’aide</a></li>
                <li className="hover:text-white font-medium"><a href="#">Politique de confidentialité</a></li>
                <li className="hover:text-white font-medium"><a href="#">Conditions d’utilisation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-white">Contact</h3>
              <ul className="text-muted-foreground space-y-3 text-sm">
                <li className="font-medium">
                  <a href="mailto:hello@qivote.com" className="hover:text-white">
                    hello@qivote.com
                  </a>
                </li>
                <li className="font-medium">
                  <a href="tel:+220011234567890" className="hover:text-white">
                    +220 01 12 34 56 78 90
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
