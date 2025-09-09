import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react';
import { Bookmark } from "lucide-react";
import { Calendar } from "lucide-react";
import { Search } from "lucide-react";
import CardNomine from '@/components/CardNomine';

function page() {
  return (
    <section>
        <div className='relative h-[90vh] flex items-center'>
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/img5.png"
                    alt="Hero background"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                />
            </div>
            <div className='absolute inset-0 z-10 flex flex-col justify-between max-w-7xl w-full mx-auto py-14 px-6 xl:px-0'>
                <div className='flex justify-between pt-14'>
                    <div className="rounded-full border-[rgba(200,200,200,0.8)] border w-8 h-8 bg-[rgba(200,200,200,0.3)] flex justify-center items-center">
                        <Link href="/evenements">
                            <ArrowLeft size={12} className='text-white font-bold'/>
                        </Link>
                    </div>
                    <div className="rounded-full border-[rgba(200,200,200,0.8)] border w-8 h-8 bg-[rgba(200,200,200,0.3)] flex justify-center items-center">
                        <Link href="/evenements">
                            <Bookmark size={12} className='text-white font-bold'/>
                        </Link>
                    </div>
                </div>
                <div className='flex flex-wrap justify-between items-center gap-6 md:gap-0'>
                    <div className='flex flex-col space-y-3 text-white'>
                        <div className='flex gap-2 text-xs'>
                            <div className='rounded border-[rgba(200,200,200,0.8)] border bg-[rgba(200,200,200,0.3)] py-1 px-2 flex justify-center items-center gap-x-1'>
                                <div className='w-1 h-1 bg-white rounded-full'></div>
                                <span>Sport</span>
                            </div>
                            <div className='rounded border-[rgba(200,200,200,0.8)] border bg-[rgba(200,200,200,0.3)] py-1 px-2 flex justify-center items-center gap-x-1'>
                                <div className='w-1 h-1 bg-white rounded-full'></div>
                                <span>Competition</span>
                            </div>
                            <div className='rounded border-[rgba(200,200,200,0.8)] border bg-[rgba(200,200,200,0.3)] py-1 px-2 flex justify-center items-center gap-x-1'>
                                <div className='w-1 h-1 bg-white rounded-full'></div>
                                <span>Culture</span>
                            </div>
                        </div>
                        <h1 className='font-bold text-2xl'>BBALL CHAMPIONSHIP</h1>
                        <div className='flex gap-1 text-xs text-[rgba(255,255,255,0.8)]'>
                            <Calendar size={12} className='font-bold'/>
                            <h1>Ferme le:</h1>
                            <h1> 12/12/12</h1>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center text-center items-center'>
                        <h1 className='text-sm pb-4 text-[rgba(255,255,255,0.8)]'>Se termine dans:</h1>
                        <div className='flex flex-wrap justify-center gap-6 text-xs'>
                            <div className='flex flex-col items-center'>
                                <div className='border border-[rgba(200,200,200,0.8)] text-white w-10 h-10 rounded-sm bg-[rgba(200,200,200,0.2)] flex items-center justify-center'>
                                    <h1>04</h1>
                                </div>
                                <h1 className='text-[rgba(255,255,255,0.8)] pt-2'>Jours</h1>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='border border-[rgba(200,200,200,0.8)] text-white w-10 h-10 rounded-sm bg-[rgba(200,200,200,0.2)] flex items-center justify-center'>
                                    <h1>02</h1>
                                </div>
                                <h1 className='text-[rgba(255,255,255,0.8)] pt-2'>Heures</h1>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='border border-[rgba(200,200,200,0.8)] text-white w-10 h-10 rounded-sm bg-[rgba(200,200,200,0.2)] flex items-center justify-center'>
                                    <h1>24</h1>
                                </div>
                                <h1 className='text-[rgba(255,255,255,0.8)] pt-2'>Minutes</h1>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='border border-[rgba(200,200,200,0.8)] text-white w-10 h-10 rounded-sm bg-[rgba(200,200,200,0.2)] flex items-center justify-center'>
                                    <h1>34</h1>
                                </div>
                                <h1 className='text-[rgba(255,255,255,0.8)] pt-2'>Secondes</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='max-w-7xl w-full mx-auto bg-white py-14 relative px-6 xl:px-0'>
            <div className='absolute z-0 bottom-86 md:bottom-52 lg:bottom-48 xl:bottom-44'>
                <Image
                    src="/images/img6.png"
                    alt="Hero background"
                    width={80}
                    height={80}
                    className="rounded-full"
                    priority
                    quality={100}
                />
            </div>
            <div className='text-black space-y-1'>
                <h1 className='font-bold text-2xl'>A propos de l&apos;évènement</h1>
                <p className='text-sm'>Le B-Ball Championship n&apos;est pas juste un tournoi de basketball, c&apos;est une véritable
                    célébration de la jeunesse, du sport et de la culture urbaine. C&apos;est l&apos;évènement incontournable du Bénin
                    où se rencontrent compétition intense et ambiance festive.
                </p>
                <p className='text-sm'>Un rendez-vous annuel qui réunit étudiants, élèves, jeunes professionnels, passionnés de basket et
                    amateurs de bonne musique pour une expérience unique et mémorable.
                </p>
            </div>
        </div>
        <div className='py-14 bg-gray-100 w-full'>
            <div className='max-w-7xl mx-auto px-6 xl:px-0'>
                <div className='space-y-4'>
                    <h1 className='font-bold text-2xl'>Les nominés</h1>
                    <div className='flex flex-wrap gap-2 md:gap-0 justify-between text-xs items-center'>
                        <div className='flex gap-4'>
                            <div className="flex items-start gap-2">
                                <select className=" text-gray-600">
                                    <option>Toutes les catégories</option>
                                    <option></option>
                                </select>
                            </div>
                            <div className="flex items-start gap-2">
                                <select className=" text-gray-600">
                                    <option>Dernière édition</option>
                                    <option></option>
                                </select>
                            </div>
                        </div>
                        <div className="relative w-72">
                            <input
                                type="text"
                                placeholder="Rechercher..."
                                className="text-gray-700 w-full py-2 pl-5 rounded bg-white focus:outline-none focus:ring-1 focus:ring-black/50"
                            />
                            <Search
                                size={12}
                                className="absolute left-1 top-1/2 -translate-y-1/2"
                                color='gray'
                            />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        <CardNomine 
                        numero={1} 
                        nombre={1344}
                        />
                        <CardNomine  
                        numero={2} 
                        nombre={1344} 
                        />
                        <CardNomine 
                        numero={3} 
                        nombre={1344}
                        />
                        <CardNomine 
                        numero={1} 
                        nombre={1344}
                        />
                        <CardNomine  
                        numero={2} 
                        nombre={1344} 
                        />
                        <CardNomine 
                        numero={3} 
                        nombre={1344}
                        />
                        <CardNomine 
                        numero={3} 
                        nombre={1344}
                        />
                        <CardNomine  
                        numero={2} 
                        nombre={1344} 
                        />
                        <CardNomine 
                        numero={3} 
                        nombre={1344}
                        />
                        <CardNomine 
                        numero={3} 
                        nombre={1344}
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default page