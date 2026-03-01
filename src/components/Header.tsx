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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/70 backdrop-blur-xl shadow-[0_1px_12px_rgba(0,0,0,0.06)] border-b border-white/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-6" aria-label="Navegación principal">
        <div className="flex justify-between h-16 sm:h-20 items-center">
          <a href="#inicio" className="flex items-center">
            <img src="/images/eligeunplan/eligeunplan.webp" alt="Elige un Plan" className="h-[47px] sm:h-[57px] w-auto" />
          </a>

          <a
            href="#formulario"
            className="bg-accent hover:bg-accent-dark text-white font-semibold py-2.5 px-5 sm:px-6 rounded-full text-sm transition touch-manipulation"
          >
            Evaluar gratis
          </a>
        </div>
      </nav>
    </header>
  );
}
