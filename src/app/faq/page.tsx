/* eslint-disable react/no-unescaped-entities */

"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CustomTitle from '@/components/CustomTitle';

type Question = {
  question: string;
  answer: string;
};

type Tab = {
  label: string;
  questions: Question[];
};

const tabs: Tab[] = [
  {
    label: "À propos de Notre Système",
    questions: [
      {
        question: "Comment fonctionne le système de vote sur la plateforme ?",
        answer:
          "Notre système repose sur un mécanisme sécurisé garantissant un enregistrement unique et une traçabilité transparente.",
      },
      {
        question: "Comment garantissez-vous la transparence et l’égalité des votes ?",
        answer:
          "Chaque vote est vérifié et chiffré afin de garantir qu’il ne puisse pas être modifié ou falsifié.",
      },
      {
        question: "Combien de temps dure un vote ?",
        answer:
          "La durée d’un vote dépend de la configuration de l’évènement, en moyenne entre 24h et 72h.",
      },
    ],
  },
  {
    label: "Support et Accessibilité",
    questions: [
      {
        question: "Comment obtenir de l’aide rapidement ?",
        answer:
          "Notre support est disponible 24/7 par chat et email pour répondre à toutes vos questions.",
      },
    ],
  },
];

export default function FaqSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
          <div className="bg-[#F5F5F5]">
        <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="text-center">
            <CustomTitle title="Foire aux questions" position="center" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Donnez du {' '}
             <span className="text-gray-600 font-bold">pouvoir</span> à votre <br />
              audience
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed ">
             Notre plateforme sécurisée révolutionne le vote en ligne pour les artistes, concours, musiques, miss et bien plus encore. Offrez une expérience de vote simple, transparente et engageante pour votre communauté !
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-8">
        {/* Titre en haut */}
        <h2 className="text-2xl font-bold text-gray-900 mb-10">
          Questions fréquentes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Colonne onglets */}
          <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-gray-200">
            <nav className="flex overflow-x-auto md:flex-col space-x-6 md:space-x-0 md:space-y-6 pb-2 md:pb-0">
              {tabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveTab(idx);
                    setOpenIndex(null);
                  }}
                  className={`relative whitespace-nowrap divide-x divide-gray-200  text-lg text-left font-medium transition-colors pb-1 ${
                    activeTab === idx
                      ? "text-gray-900 "
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Colonne FAQ */}
          <div className="md:col-span-3 pl-0 md:pl-8">
            <div className="divide-y divide-gray-200 ">
              {tabs[activeTab].questions.map((q, idx) => (
                <div key={idx}>
                  <button
                    onClick={() => handleToggle(idx)}
                    className="w-full flex justify-between items-center py-5 text-left text-lg font-semibold text-gray-900"
                  >
                    {q.question}
                    <ChevronDown
                      className={`h-6 w-6 text-gray-500 transition-transform duration-200 ${
                        openIndex === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openIndex === idx && (
                    <div className="pb-5 text-base text-gray-600">{q.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
          {/* Section bas - Call to Action avec fond SVG */}
   <div className="relative pt-16 overflow-hidden z-0">
<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
        
        {/* Contenu centré avec fond blanc */}
        <div className="relative z-10 flex justify-center">
          <div className="bg-white  p-8 max-w-lg text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Vous êtes à un clic de l'évènement parfait !
            </h2>
            <p className="text-gray-600 mb-8">
             Rejoignez la meilleure plateforme d’Afrique pour des évènements réussis à chaque étape.
            </p>
            <Button
              className="bg-black text-white py-4 px-8 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 inline-flex items-center gap-3 group"
            >
              Devenir annonceur
              <div className="">
                <ArrowUpRight className="h-3 w-3 text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
