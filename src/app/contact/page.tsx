/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import Image from "next/image";
import PhoneInput from "react-phone-number-input";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import "react-phone-number-input/style.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-default">
      {/* Section principale avec formulaire */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Section gauche - Contactez-nous */}
          <div className="relative">
            <div 
              className="rounded-2xl p-8 text-white relative overflow-hidden h-full flex flex-col justify-between"
            >
            
      <div className="absolute inset-0 rounded-2xl overflow-hidden" style={{ zIndex: 1 }}>
          <Image
            src="/images/image-contact.jpg"
            alt="Background"
            fill
            className="object-cover w-full h-full"
            style={{ 
              filter: "blur(20px)",
              transform: "scale(1.1)" 
            }}
          />
        </div>
              <div 
                className="absolute inset-0 bg-black opacity-70 rounded-2xl "
                style={{ zIndex: 2 }}
              />
              
              {/* Titre en haut à gauche */}
              <div className="relative z-10">
                <h1 className="text-3xl font-bold">Contactez-nous</h1>
              </div>
              
              {/* Paragraphe en bas à gauche */}
              <div className="relative z-10">
                <p className="text-gray-200 text-[16px] leading-relaxed max-w-sm">
                  Que vous ayez des questions sur notre plateforme, besoin d'aide ou que vous souhaitiez devenir partenaire, notre équipe est à votre écoute.
                </p>
              </div>
            </div>
          </div>

          {/* Section droite - Formulaire */}
          <div className="bg-white rounded-2xl shadow p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nom et Prénom */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nom" className="text-sm font-medium text-gray-700">
                    Hello, mon prénom c'est...
                  </Label>
                  <Input
                    id="nom"
                    type="text"
                    value={formData.nom}
                    onChange={(e) => handleInputChange("nom", e.target.value)}
                    placeholder="John"
                    className="w-full px-3 py-3 border bg-gray-50 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="prenom" className="text-sm font-medium text-gray-700">
                    Et mon nom c'est...
                  </Label>
                  <Input
                    id="prenom"
                    type="text"
                    value={formData.prenom}
                    onChange={(e) => handleInputChange("prenom", e.target.value)}
                    placeholder="Doe"
                    className="w-full px-3 py-3 border bg-gray-100 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

                 {/* Téléphone avec indicatif */}
              <div className="space-y-2">
                <Label htmlFor="telephone" className="text-sm font-medium text-gray-700">
                  Mon numéro de téléphone c’est le...
                </Label>
               
                  <PhoneInput
                    international
                    defaultCountry="BJ"
                    value={formData.telephone}
                    placeholder="+229 01 00 00 00 00"
                    onChange={(value) => handleInputChange("telephone", value || "")}
                    className="w-full border rounded-lg py-2 px-3"
                  />
                
              </div>


              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Mon adresse email c'est...
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  placeholder="test.prenom@gmail.com"
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

             

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Comment pouvons-nous vous aider ?
                </Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  placeholder="Ecrivez ici..."
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  required
                />
              </div>

              {/* Bouton submit */}
              <Button
                type="submit"
                className="w-full bg-black text-white py-6 rounded-full font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-3 group"
              >
                Envoyer le message
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <ArrowUpRight className="h-3 w-3 text-black transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Section bas - Call to Action avec fond SVG */}
   <div className="relative py-16 overflow-hidden z-0">
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