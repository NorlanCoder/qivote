// components/CardNomine.tsx
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { SquaresSubtract } from 'lucide-react';

interface CardNomineProps {
  numero: number;
  nombre: number;
}

export default function CardNomine({ numero, nombre}: CardNomineProps) {
  return (
    <div className="relative rounded-sm overflow-hidden h-[420px] ">
      <Image
        src="/images/img7.png"
        alt="Image"
        fill
        className="object-cover rounded"
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-black via-5% to-transparent" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/60 via-transparent via-20% to-transparent" />
      <div className="absolute inset-0 p-6 flex flex-col justify-between text-white text-xs">
        <div className='bg-[rgba(200,200,200,0.3)] border border-[rgba(200,200,200,0.8)] rounded p-1 w-fit'>
          <h1>{nombre} votes</h1>
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex flex-col'>
            <h1 className='pb-1'>Nominé {numero}</h1>
            <div className='flex gap-2 items-center text-[rgba(255,255,255,0.8)]'>
              <h1>ID nominé {numero}</h1>
              <SquaresSubtract size={12}/>
            </div>
          </div>
          <div>
            <Link href="/evenements" className='text-white text-sm flex gap-1 items-center bg-[rgba(200,200,200,0.3)] border border-[rgba(200,200,200,0.2)] rounded-full p-3'>
              <span>Voter</span>
              <ArrowRight size={12} className='font-bold'/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
