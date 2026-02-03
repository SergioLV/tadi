'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Navegación principal">
        <div className="flex justify-between h-16 items-center">
          <button onClick={() => scrollTo('inicio')} className="text-xl sm:text-2xl font-bold text-primary">
            Isapre360
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollTo('inicio')} className="text-gray-700 hover:text-primary transition py-2">
              Inicio
            </button>
            <button onClick={() => scrollTo('servicios')} className="text-gray-700 hover:text-primary transition py-2">
              Servicios
            </button>
            <button onClick={() => scrollTo('nosotros')} className="text-gray-700 hover:text-primary transition py-2">
              Nosotros
            </button>
            <button onClick={() => scrollTo('contacto')} className="text-gray-700 hover:text-primary transition py-2">
              Contacto
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 -mr-3 touch-manipulation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-white z-40">
            <div className="flex flex-col p-4 space-y-2">
              <button onClick={() => scrollTo('inicio')} className="w-full text-left py-4 px-4 text-lg text-gray-700 hover:bg-gray-50 rounded-lg touch-manipulation">
                Inicio
              </button>
              <button onClick={() => scrollTo('servicios')} className="w-full text-left py-4 px-4 text-lg text-gray-700 hover:bg-gray-50 rounded-lg touch-manipulation">
                Servicios
              </button>
              <button onClick={() => scrollTo('nosotros')} className="w-full text-left py-4 px-4 text-lg text-gray-700 hover:bg-gray-50 rounded-lg touch-manipulation">
                Nosotros
              </button>
              <button onClick={() => scrollTo('contacto')} className="w-full text-left py-4 px-4 text-lg text-gray-700 hover:bg-gray-50 rounded-lg touch-manipulation">
                Contacto
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
