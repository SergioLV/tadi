'use client';

import Image from 'next/image';

const isapres = [
  { name: 'Banmédica', logo: '/logos/banmedica.png' },
  { name: 'Colmena', logo: '/logos/colmena.png' },
  { name: 'Consalud', logo: '/logos/consalud.png' },
  { name: 'Cruz Blanca', logo: '/logos/cruz_blanca.webp' },
  { name: 'Esencial', logo: '/logos/esencial.svg' },
  { name: 'Nueva Masvida', logo: '/logos/nueva_mas_vida.png' },
  { name: 'Vida Tres', logo: '/logos/vida_tres.png' },
];

export default function IsapreCarousel() {
  return (
    <div className="w-full overflow-hidden py-6">
      <p className="text-center text-text-light text-sm mb-4">Comparamos todas las Isapres</p>
      <div className="relative">
        <div className="flex animate-scroll-seamless">
          {/* Primera copia */}
          <div className="flex gap-8 sm:gap-12 pr-8 sm:pr-12">
            {isapres.map((isapre) => (
              <div
                key={isapre.name}
                className="flex-shrink-0 bg-white/80 backdrop-blur rounded-xl px-6 py-4 flex items-center justify-center h-16 sm:h-20 w-[140px] sm:w-[160px]"
              >
                <Image
                  src={isapre.logo}
                  alt={`Logo ${isapre.name}`}
                  className="max-h-8 sm:max-h-10 w-auto object-contain transition-all hover:scale-110"
                  width={120}
                  height={40}
                  quality={90}
                />
              </div>
            ))}
          </div>
          {/* Segunda copia (duplicado exacto) */}
          <div className="flex gap-8 sm:gap-12 pr-8 sm:pr-12">
            {isapres.map((isapre) => (
              <div
                key={`${isapre.name}-dup`}
                className="flex-shrink-0 bg-white/80 backdrop-blur rounded-xl px-6 py-4 flex items-center justify-center h-16 sm:h-20 w-[140px] sm:w-[160px]"
              >
                <Image
                  src={isapre.logo}
                  alt={`Logo ${isapre.name}`}
                  className="max-h-8 sm:max-h-10 w-auto object-contain transition-all hover:scale-110"
                  width={120}
                  height={40}
                  quality={90}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
