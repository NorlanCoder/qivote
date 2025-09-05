"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqItems = [
    {
      question: "Comment fonctionne le système de vote sur la plateforme ?",
      answer: "Notre système de vote permet aux utilisateurs de participer activement aux décisions importantes de la plateforme."
    },
    {
      question: "Comment puis-je voir les transparence et l'équité des votes ?",
      answer: "Nous garantissons une transparence totale grâce à notre système de blockchain qui enregistre tous les votes de manière immuable."
    },
    {
      question: "Quelles sont les frais pour voter ?",
      answer: "Le vote sur notre plateforme est entièrement gratuit pour tous les utilisateurs vérifiés."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600 mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Aide aux utilisateurs
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Donnez du <span className="text-blue-600">pouvoir</span> à votre audience
          </h1>
          
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Notre plateforme sécurisée de blockchain de vote sur la gouvernance des artistes, concours, 
            musiciens, mise en lien avec encore. Offrez une expérience de vote simple, 
            transparente et engageante pour votre communauté !
          </p>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes</h2>
          
          <div className="space-y-0 bg-white rounded-lg border border-gray-200 overflow-hidden">
            {faqItems.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-medium text-gray-900 pr-4">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-5 border-t border-gray-100">
                    <p className="text-gray-600 pt-4 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
                
                {/* Séparateur horizontal sauf pour le dernier élément */}
                {index < faqItems.length - 1 && (
                  <hr className="border-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}