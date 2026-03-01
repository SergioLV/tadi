'use client';

import { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    name: 'Felipe Rojas',
    age: 35,
    location: 'Santiago',
    quote: 'Estaba pagando $95.000 mensuales y no tenía idea de que podía tener mejor cobertura por menos. Me ahorraron $30.000 al mes sin perder nada.',
    saving: '$360.000/año',
    rating: 5,
    initials: 'FR',
  },
  {
    name: 'Javiera Muñoz',
    age: 42,
    location: 'Viña del Mar',
    quote: 'Con dos hijos, necesitaba un plan familiar que realmente cubriera pediatría. Me encontraron uno perfecto y ahorro $60.000 mensuales.',
    saving: '$720.000/año',
    rating: 5,
    initials: 'JM',
  },
  {
    name: 'Constanza Silva',
    age: 28,
    location: 'Concepción',
    quote: 'Recién casada y sin idea de planes de salud. Me explicaron todo con paciencia, compararon opciones y encontramos un plan con cobertura de maternidad increíble.',
    saving: '$540.000/año',
    rating: 5,
    initials: 'CS',
  },
  {
    name: 'Roberto Díaz',
    age: 55,
    location: 'Temuco',
    quote: 'A mi edad, las Isapres te cobran mucho. Pensé que no había nada que hacer, pero me encontraron un plan con mejor cobertura hospitalaria y pagando menos.',
    saving: '$480.000/año',
    rating: 5,
    initials: 'RD',
  },
  {
    name: 'Camila Herrera',
    age: 31,
    location: 'Antofagasta',
    quote: 'Venía de Fonasa y no sabía por dónde empezar con las Isapres. Me guiaron paso a paso y ahora tengo una cobertura que jamás imaginé. Todo gratis y sin presión.',
    saving: '$300.000/año',
    rating: 5,
    initials: 'CH',
  },
];

function TestimonialCard({ item, isPreview = false }: { item: typeof testimonials[0]; isPreview?: boolean }) {
  return (
    <div className={`bg-white rounded-2xl p-5 sm:p-6 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.06)] border border-gray-100/60 relative overflow-hidden transition-all duration-500 ${
      isPreview ? 'opacity-50 scale-[0.97] origin-top' : ''
    }`}>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-emerald-400" />

      <div className="flex items-center justify-between mb-3">
        <div className="flex gap-0.5">
          {Array.from({ length: item.rating }).map((_, j) => (
            <svg key={j} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="inline-flex items-center gap-1 text-xs font-bold text-accent bg-accent/10 px-2.5 py-1 rounded-full">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          {item.saving}
        </span>
      </div>

      <blockquote className={`text-text-dark leading-relaxed mb-4 ${isPreview ? 'text-sm line-clamp-2' : 'text-sm sm:text-[15px]'}`}>
        &ldquo;{item.quote}&rdquo;
      </blockquote>

      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-emerald-400 flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-[11px]">{item.initials}</span>
        </div>
        <div>
          <p className="text-text-dark font-semibold text-sm">{item.name}</p>
          <p className="text-text-light text-xs">{item.age} años, {item.location}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsCarousel() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextIndex = (active + 1) % testimonials.length;

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Stacked cards: active + next preview */}
      <div className="space-y-3">
        {/* Active card */}
        <div className="relative" key={active}>
          <div className="animate-fade-in">
            <TestimonialCard item={testimonials[active]} />
          </div>
        </div>

        {/* Next card preview */}
        <div className="relative cursor-pointer" onClick={next} key={`preview-${nextIndex}`}>
          <div className="animate-fade-in">
            <TestimonialCard item={testimonials[nextIndex]} isPreview />
          </div>
          {/* Fade overlay to hint "there's more" */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80 rounded-2xl pointer-events-none" />
        </div>
      </div>

      {/* Controls: dots + arrows */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${
                i === active ? 'w-7 h-2.5 bg-accent' : 'w-2.5 h-2.5 bg-text-light/30 hover:bg-text-light/50'
              }`}
              aria-label={`Ver testimonio ${i + 1}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={prev}
            className="w-9 h-9 bg-white border border-gray-200 rounded-full flex items-center justify-center text-text-medium hover:text-accent hover:border-accent/30 transition-all"
            aria-label="Anterior"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="w-9 h-9 bg-white border border-gray-200 rounded-full flex items-center justify-center text-text-medium hover:text-accent hover:border-accent/30 transition-all"
            aria-label="Siguiente"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
