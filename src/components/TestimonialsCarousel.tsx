'use client';

import { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    name: 'Felipe Rojas',
    age: 35,
    location: 'Santiago',
    quote: 'Estaba pagando $95.000 mensuales y no tenía idea de que podía tener mejor cobertura por menos. Me ahorraron $30.000 al mes sin perder nada. Ojalá los hubiera encontrado antes.',
    saving: '$360.000/año',
    rating: 5,
    initials: 'FR',
  },
  {
    name: 'Javiera Muñoz',
    age: 42,
    location: 'Viña del Mar',
    quote: 'Con dos hijos, necesitaba un plan familiar que realmente cubriera pediatría. Me encontraron uno perfecto y ahorro $60.000 mensuales. El proceso fue súper rápido y sin estrés.',
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
    quote: 'A mi edad, las Isapres te cobran mucho. Pensé que no había nada que hacer, pero me encontraron un plan con mejor cobertura hospitalaria y pagando menos. Increíble servicio.',
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

export default function TestimonialsCarousel() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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
      {/* Cards container */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {testimonials.map((t, i) => (
            <div key={i} className="w-full flex-shrink-0 px-2 sm:px-4">
              <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.06)] border border-gray-100/60 relative overflow-hidden">
                  {/* Decorative accent */}
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-accent to-emerald-400" />

                  {/* Quote icon */}
                  <div className="mb-5 sm:mb-6">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-accent/20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Quote text */}
                  <blockquote className="text-text-dark text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 font-medium">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  {/* Bottom: author + saving */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-3">
                      {/* Avatar */}
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-emerald-400 flex items-center justify-center flex-shrink-0 shadow-md">
                        <span className="text-white font-bold text-sm">{t.initials}</span>
                      </div>
                      <div>
                        <p className="text-text-dark font-bold">{t.name}</p>
                        <p className="text-text-light text-sm">{t.age} años, {t.location}</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-start sm:items-end gap-1">
                      {/* Stars */}
                      <div className="flex gap-0.5">
                        {Array.from({ length: t.rating }).map((_, j) => (
                          <svg key={j} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      {/* Saving badge */}
                      <span className="inline-flex items-center gap-1.5 text-sm font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        Ahorro: {t.saving}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur rounded-full shadow-[0_1px_8px_-2px_rgba(0,0,0,0.08)] flex items-center justify-center text-text-medium hover:text-accent hover:shadow-[0_2px_12px_-2px_rgba(0,0,0,0.12)] transition-all z-10"
        aria-label="Testimonio anterior"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur rounded-full shadow-[0_1px_8px_-2px_rgba(0,0,0,0.08)] flex items-center justify-center text-text-medium hover:text-accent hover:shadow-[0_2px_12px_-2px_rgba(0,0,0,0.12)] transition-all z-10"
        aria-label="Siguiente testimonio"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6 sm:mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`rounded-full transition-all duration-300 ${
              i === active
                ? 'w-8 h-2.5 bg-accent'
                : 'w-2.5 h-2.5 bg-text-light/30 hover:bg-text-light/50'
            }`}
            aria-label={`Ver testimonio ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
