'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-soft' : 'bg-white/80 backdrop-blur-md'}`}>
      <nav className="max-w-6xl mx-auto px-5 sm:px-6" aria-label="Navegación principal">
        <div className="flex justify-between h-16 sm:h-20 items-center">
          <a href="#inicio" className="text-xl sm:text-2xl font-bold text-primary">
            Elige un <span className="text-health-green">Plan</span>
          </a>

          <a
            href="#formulario"
            className="bg-health-green hover:bg-health-green-dark text-white font-semibold py-2.5 px-5 sm:px-6 rounded-full text-sm transition touch-manipulation"
          >
            Evaluar gratis
          </a>
        </div>
      </nav>
    </header>
  );
}
