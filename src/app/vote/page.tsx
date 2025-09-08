"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { BanknoteIcon } from "lucide-react";

export default function Page() {
  const [selectedCategories, setSelectedCategories] = useState<{[key: string]: number}>({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const validationSchema = Yup.object({
    phone: Yup.string().required("Le numéro de téléphone est obligatoire"),
  });

  const categories = [
    "Catégorie 1",
    "Catégorie 2", 
    "Catégorie 3",
    "Catégorie 4"
  ];


  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev => {
      if (prev[category]) {
        const { [category]: _, ...rest } = prev;
        return rest;
      } else {
        return { ...prev, [category]: 1 };
      }
    });
  };

  const handleVoteChange = (category: string, votes: number) => {
    setSelectedCategories(prev => ({
      ...prev,
      [category]: Math.max(1, votes)
    }));
  };

  const getTotalVotes = () => {
    return Object.values(selectedCategories).reduce((sum, votes) => sum + votes, 0);
  };

  const getTotalCategories = () => {
    return Object.keys(selectedCategories).length;
  };

  const calculateAmount = () => {
    return getTotalVotes() * 500;
  };

  const getDisplayText = () => {
    const count = getTotalCategories();
    if (count === 0) return "Sélectionnez des catégories";
    if (count === 1) return Object.keys(selectedCategories)[0];
    return `${count} catégories sélectionnées`;
  };

  const handleStep1Submit = (values: { phone: string }) => {
    setPhoneNumber(values.phone);
    if (getTotalCategories() > 0) {
      setStep(2);
    }
  };

  const handleFinalSubmit = () => {
    console.log("Vote soumis:", {
      phone: phoneNumber,
      categories: selectedCategories,
      totalVotes: getTotalVotes(),
      totalCategories: getTotalCategories(),
      amount: calculateAmount()
    });
  };

  return (
    <div className="bg-[#F5F5F5] min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-6xl">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
          {/* Colonne Gauche - Formulaire de vote */}
          <div className="p-6 space-y-6 bg-white rounded-2xl">
            {/* Header avec flèche retour */}
            <div className="flex items-center space-x-3 mb-4">
              <button 
                onClick={() => {
                  if (step === 2) {
                    setStep(1);
                  } else {
                    window.history.back();
                  }
                }}
                className="text-gray-600 hover:bg-[#F5F5F5] hover:text-black hover:cursor-pointer p-1 rounded-full transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h1 className="text-2xl font-semibold">Votez pour [Nom du nominé]</h1>
            </div>

            <p className="text-gray-600 text-sm mb-6">
              Montrez votre soutien et aidez [Nom du nominé] à atteindre la première place.
            </p>

          {/* Barre de progression */}
          <div className="flex items-center space-x-2 mb-8">
            <div className={`flex-1 h-2 rounded-full transition-all duration-500 ${step >= 1 ? 'bg-black' : 'bg-gray-200'}`}></div>
            <div className={`flex-1 h-2 rounded-full transition-all duration-500 ${step >= 2 ? 'bg-black' : 'bg-gray-200'}`}></div>
          </div>

            {step === 1 ? (
              <Formik
                initialValues={{ phone: phoneNumber }}
                enableReinitialize={true}
                validationSchema={validationSchema}
                onSubmit={handleStep1Submit}
              >
                {() => (
                  <Form className="space-y-6">
                  {/* Sélection des catégories */}
                  <div>
                    <label className="block text-sm font-medium mb-3 text-black">
                      Choisissez les catégories dans lesquelles vous souhaitez voter:
                    </label>
                    <div className="relative" ref={dropdownRef}>
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full border rounded-lg px-4 py-3 text-sm bg-gray-50 text-left flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-colors"
                      >
                        <span className={getTotalCategories() === 0 ? "text-gray-500" : "text-black"}>
                          {getDisplayText()}
                        </span>
                        <svg 
                          className={`w-4 h-4 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                          {categories.map((category) => (
                            <div key={category} className="p-3 border-b border-gray-100 last:border-b-0">
                              <div className="flex items-center justify-between mb-2">
                                <label className="flex items-center space-x-3 cursor-pointer flex-1">
                                  <input
                                    type="checkbox"
                                    checked={!!selectedCategories[category]}
                                    onChange={() => handleCategoryToggle(category)}
                                    className="w-4 h-4 accent-black"
                                  />
                                  <span className="text-sm font-medium">{category}</span>
                                </label>
                              </div>
                              
                              {selectedCategories[category] && (
                                <div className="ml-7 flex items-center space-x-2">
                                  <span className="text-xs text-gray-600">Votes:</span>
                                  <input
                                    type="number"
                                    min="1"
                                    value={selectedCategories[category]}
                                    onChange={(e) => handleVoteChange(category, parseInt(e.target.value) || 1)}
                                    className="w-16 px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
                                  />
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Vous pouvez en sélectionner plusieurs</p>
                  </div>

                  {/* Numéro de téléphone */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-black">
                      Mon numéro de téléphone c&apos;est le...
                    </label>
                    <div className="flex items-center border rounded-lg px-4 py-3 bg-gray-50">
                      <Field 
                        name="phone" 
                        type="tel"
                        placeholder="01 00 00 00 00" 
                        className="flex-1 bg-transparent text-sm outline-none" 
                      />
                    </div>
                    <ErrorMessage name="phone" component="div" className="text-red-500 text-xs mt-1" />
                  </div>

                  {/* Résumé des votes */}
                  {/* {getTotalCategories() > 0 && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-sm font-medium mb-2">Résumé de vos votes:</h4>
                      {Object.entries(selectedCategories).map(([category, votes]) => (
                        <div key={category} className="flex justify-between text-sm mb-1">
                          <span>{category}:</span>
                          <span>{votes} vote{votes > 1 ? 's' : ''}</span>
                        </div>
                      ))}
                      <div className="border-t border-gray-300 pt-2 mt-2">
                        <div className="flex justify-between text-sm font-medium">
                          <span>Total votes:</span>
                          <span>{getTotalVotes()}</span>
                        </div>
                        <div className="flex justify-between text-sm font-medium">
                          <span>Total catégories:</span>
                          <span>{getTotalCategories()}</span>
                        </div>
                      </div>
                    </div>
                  )} */}

                  {/* Total votes */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-black">
                      Total votes:
                    </label>
                    <div className="w-full border rounded-lg px-4 py-3 text-sm bg-gray-50 text-left font-medium">
                      {getTotalVotes()} vote{getTotalVotes() > 1 ? 's' : ''}
                    </div>
                  </div>

                  <p className="text-xs text-[#757575]">
                    Le montant sera calculé automatiquement: [Nombre de votes] x [Nombre de catégorie] x 500 XOF
                  </p>

                    {/* Bouton continuer */}
                    <button 
                      type="submit" 
                      disabled={getTotalCategories() === 0}
                      className="w-full bg-black text-white py-4 rounded-lg text-sm font-medium hover:cursor-pointer disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      <span>Voter</span>
                      <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </button>
                  </Form>
                )}
              </Formik>
            ) : (
              /* Step 2 - Confirmation */
              <div className="space-y-20">
                {/* Votre sélection */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Votre sélection :</h3>
                  <div className="space-y-3">
                    {Object.entries(selectedCategories).map(([category, votes]) => (
                      <div key={category} className="flex items-center space-x-3">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-sm font-medium">{category}</span>
                        <span className="text-sm text-gray-500">({votes} vote{votes > 1 ? 's' : ''})</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Montant total */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Montant total :</h3>
                  <div className="flex items-center space-x-3 rounded-lg">
                    <BanknoteIcon className="w-6 h-6" />
                    <span className="text-lg font-bold">{calculateAmount()} XOF</span>
                  </div>
                </div>

                {/* Bouton confirmer et voter */}
                <button 
                  onClick={handleFinalSubmit}
                  className="w-full bg-black text-white py-4 rounded-lg text-sm font-medium hover:cursor-pointer flex items-center justify-center space-x-2"
                >
                  <span>Confirmer et voter</span>
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* Colonne Droite - Profil du nominé */}
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/images/vote/bg_vote.png"
              alt="Nominé 1"
              layout="fill"
              className="object-cover"
            />
            
            {/* Badge de votes */}
            <div className="absolute top-6 right-6 bg-white/5 backdrop-blur-xl text-white px-4 py-2 rounded-lg">
              <span className="text-sm font-medium">1334 votes</span>
            </div>

            {/* Informations du nominé */}
            {/* Infos du nominé */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              {/* Bloc nominé */}
              <div>
                <h2 className="text-2xl font-bold mb-1">Nominé 1</h2>
                <div className="flex items-center space-x-2">
                  <span className="text-sm opacity-80">ID nominé 1</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM8 15V9h4v6H8z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              {/* Bloc catégories */}
              <div className="space-y-2 md:space-y-0 md:flex md:flex-col md:items-end">
                {categories.map((category, index) => (
                  <div key={index} className="text-sm opacity-90">
                    [ {category} ]
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>        
      </div>
    </div>
  );
}