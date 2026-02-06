'use client';

import { useState } from 'react';

const regiones = [
  'Arica y Parinacota', 'Tarapacá', 'Antofagasta', 'Atacama', 'Coquimbo',
  'Valparaíso', 'Metropolitana', "O'Higgins", 'Maule', 'Ñuble', 'Biobío',
  'La Araucanía', 'Los Ríos', 'Los Lagos', 'Aysén', 'Magallanes'
];

const isapres = [
  'Banmédica', 'Colmena', 'Cruz Blanca', 'Consalud', 'Vida Tres', 
  'Nueva Masvida', 'Fonasa', 'Otra', 'No tengo'
];

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
    edad: '',
    rut: '',
    cargas: '',
    isapre: '',
    ingreso: '',
    region: '',
    motivo: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-text-dark mb-2">¡Recibimos tu solicitud!</h3>
        <p className="text-text-medium">Te contactaremos dentro de las próximas 24 horas hábiles.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-text-dark mb-1.5">
            Nombre completo *
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Tu nombre"
            className="form-input w-full px-4 py-3 bg-bg-light border border-bg-gray rounded-xl text-text-dark placeholder:text-text-light transition"
          />
        </div>
        <div>
          <label htmlFor="telefono" className="block text-sm font-medium text-text-dark mb-1.5">
            Teléfono *
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            required
            value={formData.telefono}
            onChange={handleChange}
            placeholder="+56 9 1234 5678"
            className="form-input w-full px-4 py-3 bg-bg-light border border-bg-gray rounded-xl text-text-dark placeholder:text-text-light transition"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="edad" className="block text-sm font-medium text-text-dark mb-1.5">
            Edad *
          </label>
          <input
            type="number"
            id="edad"
            name="edad"
            required
            min="18"
            max="100"
            value={formData.edad}
            onChange={handleChange}
            placeholder="35"
            className="form-input w-full px-4 py-3 bg-bg-light border border-bg-gray rounded-xl text-text-dark placeholder:text-text-light transition"
          />
        </div>
        <div>
          <label htmlFor="rut" className="block text-sm font-medium text-text-dark mb-1.5">
            RUT *
          </label>
          <input
            type="text"
            id="rut"
            name="rut"
            required
            value={formData.rut}
            onChange={handleChange}
            placeholder="12.345.678-9"
            className="form-input w-full px-4 py-3 bg-bg-light border border-bg-gray rounded-xl text-text-dark placeholder:text-text-light transition"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cargas" className="block text-sm font-medium text-text-dark mb-1.5">
            Cargas familiares *
          </label>
          <select
            id="cargas"
            name="cargas"
            required
            value={formData.cargas}
            onChange={handleChange}
            className="form-input w-full px-4 py-3 bg-bg-light border border-bg-gray rounded-xl text-text-dark transition appearance-none cursor-pointer"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394A3B8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px' }}
          >
            <option value="">Selecciona</option>
            <option value="0">Sin cargas</option>
            <option value="1">1 carga</option>
            <option value="2">2 cargas</option>
            <option value="3">3 cargas</option>
            <option value="4+">4 o más cargas</option>
          </select>
        </div>
        <div>
          <label htmlFor="isapre" className="block text-sm font-medium text-text-dark mb-1.5">
            Isapre actual *
          </label>
          <select
            id="isapre"
            name="isapre"
            required
            value={formData.isapre}
            onChange={handleChange}
            className="form-input w-full px-4 py-3 bg-bg-light border border-bg-gray rounded-xl text-text-dark transition appearance-none cursor-pointer"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394A3B8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px' }}
          >
            <option value="">Selecciona</option>
            {isapres.map(i => <option key={i} value={i}>{i}</option>)}
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ingreso" className="block text-sm font-medium text-text-dark mb-1.5">
            Ingreso mensual aprox. (CLP) *
          </label>
          <select
            id="ingreso"
            name="ingreso"
            required
            value={formData.ingreso}
            onChange={handleChange}
            className="form-input w-full px-4 py-3 bg-bg-light border border-bg-gray rounded-xl text-text-dark transition appearance-none cursor-pointer"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394A3B8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px' }}
          >
            <option value="">Selecciona</option>
            <option value="500-800">$500.000 - $800.000</option>
            <option value="800-1200">$800.000 - $1.200.000</option>
            <option value="1200-1800">$1.200.000 - $1.800.000</option>
            <option value="1800-2500">$1.800.000 - $2.500.000</option>
            <option value="2500+">Más de $2.500.000</option>
          </select>
        </div>
        <div>
          <label htmlFor="region" className="block text-sm font-medium text-text-dark mb-1.5">
            Región *
          </label>
          <select
            id="region"
            name="region"
            required
            value={formData.region}
            onChange={handleChange}
            className="form-input w-full px-4 py-3 bg-bg-light border border-bg-gray rounded-xl text-text-dark transition appearance-none cursor-pointer"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394A3B8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px' }}
          >
            <option value="">Selecciona</option>
            {regiones.map(r => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="motivo" className="block text-sm font-medium text-text-dark mb-1.5">
          ¿Qué te gustaría evaluar? *
        </label>
        <select
          id="motivo"
          name="motivo"
          required
          value={formData.motivo}
          onChange={handleChange}
          className="form-input w-full px-4 py-3 bg-bg-light border border-bg-gray rounded-xl text-text-dark transition appearance-none cursor-pointer"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394A3B8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px' }}
        >
          <option value="">Selecciona un motivo</option>
          {motivos.map(m => <option key={m} value={m}>{m}</option>)}
        </select>
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
          'Evaluar mi Isapre gratis'
        )}
      </button>

      <p className="text-center text-xs text-text-light pt-1">
        Sin compromiso. Sin spam. Sin llamadas incómodas.
      </p>
    </form>
  );
}
