'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    situacion: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío - aquí conectarías con tu backend
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8 sm:py-12">
        <div className="text-5xl sm:text-6xl mb-4">🎉</div>
        <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">¡Listo!</h3>
        <p className="text-gray-medium">Gustavo te contactará dentro de las próximas horas.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-primary mb-1.5">
          Nombre *
        </label>
        <input
          type="text"
          id="nombre"
          required
          value={formData.nombre}
          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
          placeholder="¿Cómo te llamas?"
          className="w-full px-4 py-3.5 bg-gray-light border-2 border-transparent rounded-xl text-primary placeholder:text-gray-medium/50 focus:border-mint focus:bg-white focus:outline-none transition touch-manipulation"
        />
      </div>

      <div>
        <label htmlFor="telefono" className="block text-sm font-medium text-primary mb-1.5">
          WhatsApp *
        </label>
        <input
          type="tel"
          id="telefono"
          required
          value={formData.telefono}
          onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
          placeholder="+56 9 1234 5678"
          className="w-full px-4 py-3.5 bg-gray-light border-2 border-transparent rounded-xl text-primary placeholder:text-gray-medium/50 focus:border-mint focus:bg-white focus:outline-none transition touch-manipulation"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-primary mb-1.5">
          Email <span className="text-gray-medium font-normal">(opcional)</span>
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="tu@email.com"
          className="w-full px-4 py-3.5 bg-gray-light border-2 border-transparent rounded-xl text-primary placeholder:text-gray-medium/50 focus:border-mint focus:bg-white focus:outline-none transition touch-manipulation"
        />
      </div>

      <div>
        <label htmlFor="situacion" className="block text-sm font-medium text-primary mb-1.5">
          ¿Cuál es tu situación? *
        </label>
        <select
          id="situacion"
          required
          value={formData.situacion}
          onChange={(e) => setFormData({ ...formData, situacion: e.target.value })}
          className="w-full px-4 py-3.5 bg-gray-light border-2 border-transparent rounded-xl text-primary focus:border-mint focus:bg-white focus:outline-none transition touch-manipulation appearance-none cursor-pointer"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748B'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px' }}
        >
          <option value="">Selecciona una opción</option>
          <option value="pago-mucho">Pago demasiado en mi Isapre</option>
          <option value="quiero-cambiarme">Quiero cambiarme de Isapre</option>
          <option value="vengo-fonasa">Vengo de Fonasa y quiero Isapre</option>
          <option value="plan-familiar">Busco un plan familiar</option>
          <option value="no-entiendo">No entiendo mi plan actual</option>
          <option value="otro">Otra consulta</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-mint hover:bg-mint-dark disabled:bg-mint/50 text-primary font-semibold py-4 px-6 rounded-full text-base sm:text-lg transition touch-manipulation active:scale-[0.98] disabled:cursor-not-allowed mt-2"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Enviando...
          </span>
        ) : (
          'Quiero que me contacten'
        )}
      </button>

      <p className="text-center text-xs text-gray-medium pt-2">
        🔒 Tu información está segura. No spam, solo asesoría.
      </p>
    </form>
  );
}
