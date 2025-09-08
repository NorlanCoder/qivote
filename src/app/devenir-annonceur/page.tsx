"use client";
import { useState } from "react";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


export default function Page() {
  const [step, setStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const validationSchemaStep1 = Yup.object({
    eventName: Yup.string().required("Le nom de l’événement est obligatoire"),
    isNew: Yup.string().required("Veuillez sélectionner une option"),
    representative: Yup.string().required("Le nom du représentant est obligatoire"),
    email: Yup.string().email("Email invalide").required("L'email est obligatoire"),
    phone: Yup.string().required("Le numéro de téléphone est obligatoire"),
    country: Yup.string().required("Le pays est obligatoire"),
  });

  const validationSchemaStep2 = Yup.object({
    logo: Yup.mixed().required("Le logo est obligatoire"),
    banner: Yup.mixed().required("La bannière est obligatoire"),
  });

  const handleSubmit = (values) => {
    console.log("Données soumises:", values);
    setIsModalOpen(true);
  };

  return (
    <div className=" bg-gray-100 flex items-center justify-center px-4 pt-28 pb-14">
      <div className="max-w-2xl lg:max-w-4xl xl:max-w-6xl bg-red rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch h-full">
        {/* Colonne Gauche - Image */}
        <div className="relative rounded-3xl overflow-hidden h-96 md:h-full">
          <Image
            src="/images/img4.jpg"
            alt="Soumission"
            layout="fill"
            className="rounded-3xl object-cover"
          />
          <div className="absolute inset-0 bg-black bg-transparent-10 p-6 flex flex-col justify-between text-white">
            <h2 className="text-2xl font-semibold mt-4">Soumission d&apos;annonce</h2>
            <p className="text-sm mb-4">
              Merci de prendre quelques minutes pour remplir ce formulaire. Vos réponses nous permettront de publier votre annonce de manière claire et efficace sur notre plateforme.
            </p>
          </div>
        </div>

        {/* Colonne Droite - Form */}
        <div className="p-8 space-y-6 shadow rounded-3xl bg-white">
        {/* Barre de progression divisée */}
        <div
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={step === 1 ? 50 : 100}
            className="flex items-center justify-between mb-6"
        >
            <div className={`flex-1 h-2 rounded-full mr-2 transition-all duration-500 ${step >= 1 ? 'bg-black' : 'bg-gray-200'}`}/>
            <div className={`flex-1 h-2 rounded-full transition-all duration-500 ${step === 2 ? 'bg-black' : 'bg-gray-200'}`}/>
        </div>


          {step === 1 && (
            <Formik
              initialValues={{ eventName: "", isNew: "", representative: "", email: "", phone: "", country: "" }}
              validationSchema={validationSchemaStep1}
              onSubmit={() => setStep(2)}
            >
              {() => (
                <Form className="space-y-5">
                  <div>
                    <h3 className="text-xl font-bold pb-1">Informations générales</h3>
                    <p className="text-gray-900 text-xs mb-4">
                      Ces informations nous permettront d&apos;identifier votre événement et de vous contacter facilement.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-medium pb-1 text-black">Nom de l&apos;évènement (obligatoire)</label>
                    <Field name="eventName" placeholder="Ex : Awards du cinéma 2025" className="w-full border rounded-lg px-4 py-2 text-xs font-medium bg-gray-50" />
                    <ErrorMessage name="eventName" component="div" className="text-red-500 text-xs" />
                  </div>

                  <div>
                    <label className="block font-medium text-xs mb-1 text-black">Est-ce un nouvel évènement ? (obligatoire)</label>
                    <div className="space-y-2 text-xs">
                      <label className="flex items-center space-x-2">
                        <Field type="radio" name="isNew" value="oui" className="accent-black" />
                        <span>Oui, c&apos;est une nouvelle édition</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <Field type="radio" name="isNew" value="non" className="accent-black" />
                        <span>Non, événement déjà existant</span>
                      </label>
                    </div>
                    <ErrorMessage name="isNew" component="div" className="text-red-500 text-xs" />
                  </div>

                  <div>
                    <label className="block font-medium text-xs mb-1 text-black">Nom du représentant (obligatoire)</label>
                    <Field name="representative" placeholder="Ex : Jean Dupont" className="w-full border rounded-lg px-4 py-2 text-sm" />
                    <ErrorMessage name="representative" component="div" className="text-red-500 text-xs" />
                  </div>

                  <div>
                    <label className="block font-medium text-xs mb-1 text-black">Adresse email (obligatoire)</label>
                    <Field name="email" type="email" placeholder="test.prenom@gmail.com" className="w-full border rounded-lg px-4 py-2 text-sm" />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
                  </div>

                  <div>
                    <label className="block font-medium text-xs mb-1 text-black">Numéro de téléphone (obligatoire)</label>
                    <Field name="phone" placeholder="01 00 00 00 00" className="w-full border rounded-lg px-4 py-2 text-sm" />
                    <ErrorMessage name="phone" component="div" className="text-red-500 text-xs" />
                  </div>

                  <div>
                    <label className="block font-medium text-xs mb-1 text-black">Pays (obligatoire)</label>
                    <Field as="select" name="country" className="w-full border rounded-lg px-4 py-2 text-sm">
                      <option value="">Sélectionnez un pays</option>
                      <option value="bj">Bénin</option>
                      <option value="fr">France</option>
                      <option value="ci">Côte d&apos;Ivoire</option>
                    </Field>
                    <ErrorMessage name="country" component="div" className="text-red-500 text-xs" />
                  </div>

                  <button type="submit" className="w-full bg-black text-white py-3 rounded-full text-sm font-medium hover:bg-gray-900">
                    Continuer →
                  </button>
                </Form>
              )}
            </Formik>
          )}

          {step === 2 && (
            <Formik
              initialValues={{ logo: "", banner: "" }}
              validationSchema={validationSchemaStep2}
              onSubmit={handleSubmit}
            >
              {({ setFieldValue }) => (
                <Form className="space-y-5">
                  <div>
                    <h3 className="text-2xl font-bold">Identité visuelle</h3>
                    <p className="text-gray-500 text-sm mb-4">
                      Ces visuels aideront à rendre votre événement unique et facilement reconnaissable.
                    </p>
                  </div>

                  <div>
                    <label className="block font-medium mb-1">Logo (500x500px recommandé) *</label>
                    <input type="file" onChange={(e) => setFieldValue("logo", e.currentTarget.files[0])} className="w-full border rounded-lg px-4 py-2 text-sm" />
                    <ErrorMessage name="logo" component="div" className="text-red-500 text-xs" />
                  </div>

                  <div>
                    <label className="block font-medium mb-1">Bannière (1920x600px recommandé) *</label>
                    <input type="file" onChange={(e) => setFieldValue("banner", e.currentTarget.files[0])} className="w-full border rounded-lg px-4 py-2 text-sm" />
                    <ErrorMessage name="banner" component="div" className="text-red-500 text-xs" />
                  </div>

                  <button type="submit" className="w-full bg-black text-white py-3 rounded-full text-sm font-medium hover:bg-gray-900">
                    Soumettre mon annonce →
                  </button>
                </Form>
              )}
            </Formik>
          )}
        </div>
      </div>

      {/* Modal de confirmation */}
      {isModalOpen && (
        <div className="absolute top-0 md:top-32 xl:bottom-32 inset-4 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center flex flex-col items-center">
                {/* Conteneur centré */}
                <div className="mb-4 flex justify-center">
                    <Image
                        src="/images/peace.svg"
                        alt="Peace"
                        width={50}
                        height={50}
                    />
                </div>
                <h2 className="text-xl font-semibold mb-2">Merci pour votre soumission !</h2>
                <p className="text-gray-600 text-sm">
                    Votre soumission a bien été effectuée, notre équipe s&apos;occupe d&apos;analyser vos réponses.
                    Vous aurez un retour sous peu par mail !
                </p>
                <button
                    onClick={() => setIsModalOpen(false)}
                    className="mt-6 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-900"
                >
                    Fermer
                </button>
            </div>
        </div>
        )}
    </div>
  );
};