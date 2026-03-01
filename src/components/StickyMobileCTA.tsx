'use client';

import { useState, useEffect } from 'react';

export default function StickyMobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const form = document.getElementById('formulario');
    if (!form) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShow(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(form);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-30 lg:hidden transition-transform duration-300 ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-md border-t border-bg-gray/50 px-4 py-3 shadow-[0_-2px_10px_rgba(0,0,0,0.06)]">
        <a
          href="#formulario"
          className="btn-primary block w-full bg-accent hover:bg-accent-dark text-white font-semibold py-3 rounded-full text-center text-sm transition touch-manipulation"
        >
          Quiero que me asesoren gratis
        </a>
      </div>
    </div>
  );
}
