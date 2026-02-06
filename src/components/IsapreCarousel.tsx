'use client';

const isapres = [
  { name: 'Banmédica', logo: '/logos/banmedica.png' },
  { name: 'Colmena', logo: '/logos/colmena.png' },
  { name: 'Cruz Blanca', logo: '/logos/cruzblanca.png' },
  { name: 'Consalud', logo: '/logos/consalud.png' },
  { name: 'Vida Tres', logo: '/logos/vidatres.png' },
  { name: 'Nueva Masvida', logo: '/logos/nuevamasvida.png' },
];

export default function IsapreCarousel() {
  // Duplicamos para loop infinito
  const duplicatedIsapres = [...isapres, ...isapres];

  return (
    <div className="w-full overflow-hidden py-6">
      <p className="text-center text-text-light text-sm mb-4">Comparamos todas las Isapres</p>
      <div className="relative">
        <div className="flex animate-scroll gap-8 sm:gap-12">
          {duplicatedIsapres.map((isapre, i) => (
            <div
              key={`${isapre.name}-${i}`}
              className="flex-shrink-0 bg-white/80 backdrop-blur rounded-xl px-6 py-4 flex items-center justify-center h-16 sm:h-20 min-w-[140px] sm:min-w-[160px]"
            >
              <img
                src={isapre.logo}
                alt={`Logo ${isapre.name}`}
                className="max-h-8 sm:max-h-10 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
