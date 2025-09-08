"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from 'lucide-react';
import { FileDown } from "lucide-react";
import { Formik, Form, Field, ErrorMessage, FieldProps } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Page() {
  const [step, setStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      const timer = setTimeout(() => {
        setIsModalOpen(false);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [isModalOpen]);

  const validationSchemaStep1 = Yup.object({
    eventName: Yup.string().required("Le nom de l’événement est obligatoire"),
    isNew: Yup.string().required("Veuillez choisir une option"),
    representative: Yup.string().required("Le nom du représentant est obligatoire"),
    email: Yup.string().email("Email invalide").required("L'email est obligatoire"),
    phone: Yup.string().required("Le numéro de téléphone est obligatoire"),
    country: Yup.string().required("Le pays est obligatoire"),
  });

  const validationSchemaStep2 = Yup.object({
    ifu: Yup.mixed().required("L'IFU est obligatoire"),
    logo: Yup.mixed().required("Le logo est obligatoire"),
  });

  const fullValidationSchema = Yup.object().shape({
    ...validationSchemaStep1.fields,
    ...validationSchemaStep2.fields,
  });

  const handleSubmit = (values: { eventName: string; isNew: string; representative: string; email: string; phone: string; country: string; ifu: File | null; logo: File | null; }) => {
    const formattedValues = {
      ...values,
      ifu: values.ifu ? { name: values.ifu.name, size: values.ifu.size, type: values.ifu.type } : null,
      logo: values.logo ? { name: values.logo.name, size: values.logo.size, type: values.logo.type } : null,
    };
    console.log("Données soumises :", formattedValues);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center px-4 xl:px-0 pt-20">
      <div className="py-12 max-w-7xl rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch h-full">
        {/* Colonne Gauche - Image */}
        <div className="relative rounded-3xl overflow-hidden hidden lg:block">
          <Image
            src="/images/img4.jpg"
            alt="Soumission"
            layout="fill"
            className="rounded-3xl object-cover"
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-black via-5% to-transparent" />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/60 via-transparent via-20% to-transparent" />
          <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
            <h2 className="text-2xl font-semibold mt-4">Soumission d&apos;annonce</h2>
            <p className="text-sm mb-4">
              Merci de prendre quelques minutes pour remplir ce formulaire. Vos réponses nous permettront de publier votre annonce de manière claire et efficace sur notre plateforme.
            </p>
          </div>
        </div>

        {/* Colonne Droite - Form */}
        <div className="p-8 space-y-6 shadow rounded-3xl bg-white">
          <Formik
            initialValues={{
              eventName: "",
              isNew: "",
              representative: "",
              email: "",
              phone: "",
              country: "",
              ifu: null,
              logo: null,
            }}
            validationSchema={fullValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, validateForm, setTouched }) => (
              <Form className="space-y-5">
                {/* Barre de progression */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`flex-1 h-2 rounded-full mr-2 transition-all duration-500 ${
                      step >= 1 ? "bg-black" : "bg-gray-200"
                    }`}
                  />
                  <div
                    className={`flex-1 h-2 rounded-full transition-all duration-500 ${
                      step === 2 ? "bg-black" : "bg-gray-200"
                    }`}
                  />
                </div>

                {/* STEP 1 */}
                {step === 1 && (
                  <>
                    <h3 className="text-xl font-bold pb-1">Informations générales</h3>
                    <p className="text-gray-900 text-xs mb-4">
                      Ces informations nous permettront d&apos;identifier votre événement et de vous contacter facilement.
                    </p>

                    <div>
                      <label className="block text-xs font-medium pb-1 text-black">
                        Nom de l&apos;évènement (obligatoire)
                      </label>
                      <Field
                        name="eventName"
                        placeholder="Ex : Awards du cinéma 2025"
                        className="w-full border rounded-lg px-4 py-3 text-xs font-medium bg-gray-50"
                      />
                      <ErrorMessage name="eventName" component="div" className="text-red-500 text-xs" />
                    </div>

                    <div>
                      <label className="block font-medium text-xs mb-1 text-black">
                        Est-ce un nouvel évènement ? (obligatoire)
                      </label>
                      <div className="space-y-2 text-xs">
                        <label className="flex items-center space-x-2">
                          <Field type="radio" name="isNew" value="oui" className="accent-black" />
                          <span>Oui, c&apos;est une nouvelle édition </span>
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
                      <Field
                        name="representative"
                        placeholder="Ex : Jean Dupont"
                        className="w-full border rounded-lg px-4 py-3 text-xs bg-gray-50"
                      />
                      <ErrorMessage name="representative" component="div" className="text-red-500 text-xs" />
                    </div>

                    <div>
                      <label className="block font-medium text-xs mb-1 text-black">Adresse email (obligatoire)</label>
                      <Field
                        name="email"
                        type="email"
                        placeholder="test.prenom@gmail.com"
                        className="w-full border rounded-lg px-4 py-3 text-xs bg-gray-50"
                      />
                      <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
                    </div>

                    <div>
                      <label className="block font-medium mb-1 text-xs">Numéro de téléphone (obligatoire)</label>
                      <Field name="phone">
                        {({ field, form }: FieldProps) => (
                          <PhoneInput
                            country={"bj"}
                            value={field.value}
                            onChange={(value) => form.setFieldValue("phone", value)}
                            inputClass="!w-full !py-3 !px-4 !text-sm"
                            dropdownClass="!text-xs"
                          />
                        )}
                      </Field>
                      <ErrorMessage name="phone" component="div" className="text-red-500 text-xs" />
                    </div>

                    <div>
                      <label className="block font-medium text-xs mb-1 text-black">Pays (obligatoire)</label>
                      <Field
                        as="select"
                        name="country"
                        className="w-full border rounded-lg px-4 py-3 bg-gray-50 text-xs text-gray-500"
                      >
                        <option value="">Sélectionnez un pays</option>
                        <option value="bj">Bénin</option>
                        <option value="fr">France</option>
                        <option value="ci">Côte d&apos;Ivoire</option>
                      </Field>
                      <ErrorMessage name="country" component="div" className="text-red-500 text-xs" />
                    </div>

                    <button
                      type="button"
                      onClick={async () => {
                        setTouched({
                          eventName: true,
                          isNew: true,
                          representative: true,
                          email: true,
                          phone: true,
                          country: true,
                        });

                        const errors = await validateForm();
                        const step1Fields = Object.keys(validationSchemaStep1.fields);
                        if (!step1Fields.some((field) => errors[field as keyof typeof errors])) {
                          setStep(2);
                        }
                      }}
                      className="w-full flex justify-center gap-x-3 items-center bg-black text-white font-medium py-3 rounded-full text-xs hover:bg-gray-900"
                    >
                      <span>Continuer</span>
                      <ArrowRight size={12} />
                    </button>
                  </>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <>
                    <h3 className="text-xl font-bold pb-1">Identité visuelle</h3>
                    <p className="text-gray-900 text-xs mb-4">
                      Ces visuels aideront à rendre votre événement unique et facilement reconnaissable.
                    </p>

                    <div>
                      <label className="block font-medium text-xs mb-1 text-black">
                        IFU (obligatoire)
                      </label>
                      <div className="flex justify-between items-center border rounded-lg bg-gray-50 px-3 py-3">
                        <input
                          type="file"
                          onChange={(e) => setFieldValue("ifu", e.currentTarget.files?.[0] || null)}
                          className="w-full text-xs focus:outline-none"
                        />
                        <FileDown className="w-4 h-4 text-black" />
                      </div>
                      <ErrorMessage name="ifu" component="div" className="text-red-500 text-xs" />
                    </div>

                    <div>
                      <label className="block font-medium text-xs mb-1 text-black">Logo (obligatoire)</label>
                      <div className="flex justify-between items-center border rounded-lg bg-gray-50 px-3 py-3">
                        <input
                          type="file"
                          onChange={(e) => setFieldValue("logo", e.currentTarget.files?.[0] || null)}
                          className="w-full text-xs focus:outline-none"
                        />
                        <FileDown className="w-4 h-4 text-black" />
                      </div>
                      <ErrorMessage name="logo" component="div" className="text-red-500 text-xs" />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex justify-center gap-x-3 items-center bg-black text-white font-medium py-3 rounded-full text-xs hover:bg-gray-900"
                    >
                      <span>Soumettre mon annonce</span>
                      <ArrowRight size={12} />
                    </button>
                  </>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </div>

      {/* Modal de confirmation */}
      {isModalOpen && (
        <div className="absolute top-80 md:top-52 xl:bottom-32 inset-4 bg-opacity-50 flex items-center justify-center z-60">
          <div className="bg-white px-10 py-12 md:py-20 rounded shadow-xl max-w-sm w-full text-center flex flex-col items-center">
            <div className="mb-4 flex justify-center">
              <Image src="/images/peace.svg" alt="Peace" width={50} height={50} />
            </div>
            <h2 className="text-lg font-semibold mb-2">Merci pour votre soumission !</h2>
            <p className="text-gray-600 text-xs">
              Votre soumission a bien été effectuée, notre équipe s&apos;occupe d&apos;analyser vos réponses.
              Vous aurez un retour sous peu par mail !
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
