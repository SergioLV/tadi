'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll(); // Check initial state
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-white shadow-sm' : 'bg-white/80 backdrop-blur-md'}`}>
      <nav className="max-w-6xl mx-auto px-5 sm:px-6" aria-label="Navegación principal">
        <div className="flex justify-between h-16 items-center">
          <button onClick={() => scrollTo('inicio')} className="text-xl font-bold text-primary touch-manipulation">
            Isapre<span className="text-mint">360</span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollTo('como-funciona')} className="text-gray-medium hover:text-primary transition text-sm font-medium">
              Cómo funciona
            </button>
            <button onClick={() => scrollTo('gustavo')} className="text-gray-medium hover:text-primary transition text-sm font-medium">
              Sobre Gustavo
            </button>
            <a
              href="#contacto"
              className="bg-mint hover:bg-mint-dark text-primary font-semibold py-2.5 px-5 rounded-full text-sm transition touch-manipulation"
            >
              Cotizar ahora
            </a>
          </div>

          <button
            className="md:hidden p-2 -mr-2 touch-manipulation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-white z-40 overflow-y-auto">
            <div className="flex flex-col p-5 space-y-1">
              <button onClick={() => scrollTo('como-funciona')} className="w-full text-left py-4 px-4 text-base text-primary hover:bg-gray-light rounded-xl touch-manipulation active:bg-gray-light">
                Cómo funciona
              </button>
              <button onClick={() => scrollTo('gustavo')} className="w-full text-left py-4 px-4 text-base text-primary hover:bg-gray-light rounded-xl touch-manipulation active:bg-gray-light">
                Sobre Gustavo
              </button>
              <button onClick={() => scrollTo('contacto')} className="w-full text-left py-4 px-4 text-base text-primary hover:bg-gray-light rounded-xl touch-manipulation active:bg-gray-light">
                Contacto
              </button>
              <div className="pt-4">
                <a
                  href="#contacto"
                  onClick={() => setIsMenuOpen(false)}
                  className="block bg-mint text-primary font-semibold py-4 px-6 rounded-full text-center text-base touch-manipulation active:bg-mint-dark"
                >
                  Cotizar gratis
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
