import React from 'react';
import Image from 'next/image';

const page = () => {
  return (
    <section className='max-w-7xl flex flex-wrap justify-center gap-6 py-14'>
        <div className='max-w-1/2 h-[80vh] text-black'>
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/img4.jpg"
                    alt="Hero background"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                />
                {/* Overlay dégradé du bas vers le haut */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-black via-5% to-transparent" />
                {/* Overlay dégradé du haut vers le bas */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/60 via-transparent via-20% to-transparent" />
            </div>
            <div className="absolute top-0 left-0 right-0 z-10  mx-auto px-4  w-full flex items-end pb-20">
                <h1>hello</h1>
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-10 max-w-7xl mx-auto px-4  w-full flex items-end pb-20">
                <h1>hello</h1>
            </div>
        </div>
    </section>
  )
}

export default page