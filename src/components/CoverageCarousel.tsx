'use client';

import React, { useRef, useState, useCallback, useEffect } from 'react';
import Image from 'next/image';

const coverages = [
  { title: 'Garantías Explícitas de Salud: GES', image: '/images/section2/ges.jpg', icon: '🛡️' },
  { title: 'Cobertura adicional para enfermedades catastróficas: CAEC', image: '/images/section2/cuidado.jpg', icon: '🏥' },
  { title: 'Exámenes preventivos gratuitos', image: '/images/section2/examenes.jpg', icon: '🔬' },
  { title: 'Cobertura en urgencias simples y complejas', image: '/images/section2/urgencia.jpg', icon: '🚑' },
  { title: 'Cobertura dental', image: '/images/section2/dentista.jpg', icon: '🦷' },
  { title: 'Atención kinesiológica a domicilio gratuita', image: '/images/section2/kinesiologo.jpeg', icon: '💪' },
  { title: 'Atención terapeuta ocupacional y fonoaudióloga gratuita', image: '/images/section2/terapeuta_ocupacional.jpg', icon: '🧠' },
];

function CoverageCard({ title, image, icon }: { title: string; image: string; icon: string }) {
  return (
    <div className="flex-shrink-0 w-[280px] sm:w-[320px] group rounded-2xl overflow-hidden cursor-pointer select-none relative">
      {/* Image with gradient overlay */}
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={640}
          height={480}
          className="w-full h-full object-cover pointer-events-none transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          sizes="320px"
          quality={75}
          draggable={false}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        {/* Icon badge */}
        <div className="absolute top-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-lg border border-white/10">
          {icon}
        </div>

        {/* Accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>

      {/* Title area - glassmorphism */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-white font-semibold text-sm sm:text-base leading-snug drop-shadow-md">{title}</h3>
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

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let animId: number;
    const speed = 0.8;

    const step = () => {
      if (!isPaused && !isDragging) {
        el.scrollLeft += speed;
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
        className={`flex gap-4 sm:gap-5 overflow-x-scroll scrollbar-hide ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {[...coverages, ...coverages].map((item, i) => (
          <CoverageCard key={i} title={item.title} image={item.image} icon={item.icon} />
        ))}
      </div>
    </div>
  );
}
