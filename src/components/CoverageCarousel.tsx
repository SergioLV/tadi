'use client';

import React, { useRef, useState, useCallback, useEffect } from 'react';

const coverages: { title: string; image?: string }[] = [
  { title: 'Garantías Explícitas de Salud: GES', image: '/images/section2/ges.jpg' },
  { title: 'Cobertura adicional para enfermedades catastróficas: CAEC', image: '/images/section2/cuidado.jpg' },
  { title: 'Exámenes preventivos gratuitos', image: '/images/section2/examenes.jpg' },
  { title: 'Cobertura en urgencias simples y complejas', image: '/images/section2/urgencia.jpg' },
  { title: 'Cobertura dental', image: '/images/section2/dentista.jpg' },
  { title: 'Atención kinesiológica a domicilio gratuita', image: '/images/section2/kinesiologo.jpeg' },
  { title: 'Atención terapeuta ocupacional y fonoaudióloga gratuita', image: '/images/section2/terapeuta_ocupacional.jpg' },
];

function CoverageCard({ title, image }: { title: string; image?: string }) {
  return (
    <div className="flex-shrink-0 w-[300px] sm:w-[340px] group rounded-2xl overflow-hidden shadow-soft transition-all duration-300 hover:scale-105 hover:shadow-medium cursor-pointer flex flex-col select-none">
      <div className="relative h-52 sm:h-60 bg-gradient-to-br from-bg-light to-bg-gray overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover pointer-events-none" loading="lazy" draggable={false} />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-white/30 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-text-light/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
        )}
      </div>
      <div className="bg-bg-light p-5 flex-1 flex items-center">
        <h3 className="text-text-dark font-semibold text-base leading-snug">{title}</h3>
      </div>
    </div>
  );
}

export default function CoverageCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const resumeTimer = useRef<NodeJS.Timeout | null>(null);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  const handleEnd = useCallback(() => {
    setIsDragging(false);
    resumeTimer.current = setTimeout(() => setIsPaused(false), 2000);
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!containerRef.current) return;
    setIsPaused(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!containerRef.current) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  }, [startX, scrollLeft]);

  const handleTouchEnd = useCallback(() => {
    resumeTimer.current = setTimeout(() => setIsPaused(false), 2000);
  }, []);

  // Auto-scroll with requestAnimationFrame
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let animId: number;
    const speed = 0.8; // px per frame

    const step = () => {
      if (!isPaused && !isDragging) {
        el.scrollLeft += speed;
        // Reset to start when halfway (seamless loop)
        const halfScroll = el.scrollWidth / 2;
        if (el.scrollLeft >= halfScroll) {
          el.scrollLeft -= halfScroll;
        }
      }
      animId = requestAnimationFrame(step);
    };
    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isPaused, isDragging]);

  useEffect(() => {
    return () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={containerRef}
        className={`flex gap-5 overflow-x-scroll scrollbar-hide ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Two copies for seamless loop */}
        {[...coverages, ...coverages].map((item, i) => (
          <CoverageCard key={i} title={item.title} image={item.image} />
        ))}
      </div>
    </div>
  );
}
