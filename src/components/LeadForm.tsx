'use client';

import { useState } from 'react';
import { API } from '@/config/api';

const motivos = [
  'Quiero pagar menos',
  'Quiero mejor cobertura',
  'Quiero cambiarme de Isapre',
  'Vengo de Fonasa',
  'Necesito plan familiar',
  'No entiendo mi plan actual',
  'Otra consulta'
];

export default function LeadForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    motivo: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.nombre.trim()) newErrors.nombre = 'Por favor ingresa tu nombre';
    if (!formData.telefono.trim()) newErrors.telefono = 'Por favor ingresa tu teléfono';
    if (!formData.motivo) newErrors.motivo = 'Por favor selecciona un motivo';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitError(null);

    const apiData = {
      name: formData.nombre,
      phone: formData.telefono,
      age: '',
      rut: '',
      dependents: '',
      current_isapre: '',
      monthly_income: '',
      region: '',
      reason: formData.motivo,
    };

    try {
      const response = await fetch(API.leads, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(apiData),
      });
      if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);
      await response.json();
      setSubmitted(true);
      setShowPopup(true);
    } catch (error) {
      console.error('Error submitting lead:', error);
      setSubmitError('Hubo un problema al enviar tu solicitud. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'telefono') {
      // Auto-format Chilean phone: only digits, max 11 (56 9 XXXX XXXX)
      const digits = value.replace(/\D/g, '');
      let formatted = digits;
      if (digits.length > 0) {
        if (!digits.startsWith('56')) {
          formatted = '56' + digits;
        }
        // Format: +56 9 XXXX XXXX
        const d = formatted.slice(0, 11);
        if (d.length <= 2) formatted = '+' + d;
        else if (d.length <= 3) formatted = '+' + d.slice(0, 2) + ' ' + d.slice(2);
        else if (d.length <= 7) formatted = '+' + d.slice(0, 2) + ' ' + d.slice(2, 3) + ' ' + d.slice(3);
        else formatted = '+' + d.slice(0, 2) + ' ' + d.slice(2, 3) + ' ' + d.slice(3, 7) + ' ' + d.slice(7);
      }
      setFormData({ ...formData, telefono: formatted });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  if (submitted && !showPopup) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-text-dark mb-2">¡Recibimos tu solicitud!</h3>
        <p className="text-text-medium">Gracias por confiar en nosotros.</p>
      </div>
    );
  }

  const selectArrow = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394A3B8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`;

  return (
    <>
      {/* Success Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowPopup(false)} />
          
          {/* Confetti / Serpentinas */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            {Array.from({ length: 80 }).map((_, i) => (
              <div
                key={i}
                className="confetti-piece"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 0.15}s`,
                  animationDuration: `${1.2 + Math.random() * 1.3}s`,
                  backgroundColor: ['#059669', '#10B981', '#34D399', '#0F172A', '#3B82F6', '#F59E0B', '#EC4899', '#8B5CF6', '#EF4444', '#06B6D4'][i % 10],
                  width: `${8 + Math.random() * 10}px`,
                  height: `${18 + Math.random() * 22}px`,
                  borderRadius: `${Math.random() > 0.5 ? '2px' : '50%'}`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                  opacity: 0.95,
                }}
              />
            ))}
          </div>

          <div className="relative bg-white rounded-3xl p-8 sm:p-10 max-w-md w-full shadow-xl">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-bg-light hover:bg-bg-gray transition text-text-light"
              aria-label="Cerrar"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text-dark mb-3">¡Recibimos tu información correctamente!</h3>
              <p className="text-text-medium leading-relaxed mb-2">
                Nuestro equipo de asesores en salud ya está revisando tu caso de manera personalizada y confidencial. Recuerda que nuestra finalidad es que tengas la mejor cobertura, evites alzas y bajemos costos.
              </p>
              <p className="text-text-medium leading-relaxed mb-6">
                En breve te contactaremos para ayudarte a encontrar la mejor opción para ti. 💚
              </p>
              <p className="text-3xl mb-6">💚</p>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-accent hover:bg-accent-dark text-white font-semibold py-3 px-8 rounded-full transition touch-manipulation"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-text-dark mb-1.5">
            Nombre *
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Tu nombre"
            className={`form-input w-full px-4 py-3 bg-bg-light border rounded-xl text-text-dark placeholder:text-text-light transition ${
              errors.nombre ? 'border-red-400 focus:border-red-400' : 'border-bg-gray'
            }`}
          />
          {errors.nombre && <p className="text-red-500 text-xs mt-1">{errors.nombre}</p>}
        </div>

        <div>
          <label htmlFor="telefono" className="block text-sm font-medium text-text-dark mb-1.5">
            Teléfono *
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="+56 9 1234 5678"
            className={`form-input w-full px-4 py-3 bg-bg-light border rounded-xl text-text-dark placeholder:text-text-light transition ${
              errors.telefono ? 'border-red-400 focus:border-red-400' : 'border-bg-gray'
            }`}
          />
          {errors.telefono && <p className="text-red-500 text-xs mt-1">{errors.telefono}</p>}
        </div>

        <div>
          <label htmlFor="motivo" className="block text-sm font-medium text-text-dark mb-1.5">
            ¿Qué te gustaría evaluar? *
          </label>
          <select
            id="motivo"
            name="motivo"
            value={formData.motivo}
            onChange={handleChange}
            className={`form-input w-full px-4 py-3 bg-bg-light border rounded-xl text-text-dark transition appearance-none cursor-pointer ${
              errors.motivo ? 'border-red-400 focus:border-red-400' : 'border-bg-gray'
            }`}
            style={{ backgroundImage: selectArrow, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px' }}
          >
            <option value="">Selecciona un motivo</option>
            {motivos.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
          {errors.motivo && <p className="text-red-500 text-xs mt-1">{errors.motivo}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full bg-accent hover:bg-accent-dark disabled:bg-accent/50 text-white font-semibold py-4 px-6 rounded-full text-base sm:text-lg transition touch-manipulation disabled:cursor-not-allowed mt-2"
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
            'Quiero que me asesoren gratis'
          )}
        </button>

        {submitError && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
            {submitError}
          </div>
        )}

        <p className="text-center text-xs text-text-light pt-1">
          Sin compromiso. Sin spam. Sin llamadas incómodas.
        </p>
      </form>
    </>
  );
}
