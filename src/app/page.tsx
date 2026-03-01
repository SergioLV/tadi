import FadeSection from '@/components/FadeSection';
import LeadForm from '@/components/LeadForm';
import IsapreCarousel from '@/components/IsapreCarousel';
import CoverageCarousel from '@/components/CoverageCarousel';
import Image from 'next/image';

export default function Home() {
  // Schema para casos de éxito (testimonios)
  const testimonialsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Felipe Rojas' },
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
        reviewBody: 'Profesional independiente que encontró un plan con mejor cobertura ambulatoria y ahorra $360.000 al año.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Javiera Muñoz' },
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
        reviewBody: 'Madre de familia con plan adaptado y excelente cobertura pediátrica. Ahorra $720.000 al año.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Constanza Silva' },
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
        reviewBody: 'Pareja joven con plan conjunto y excelente cobertura de maternidad. Ahorra $540.000 al año.',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(testimonialsSchema) }}
      />
      {/* HERO with Form */}
      <section id="inicio" className="pt-20 sm:pt-28 pb-4 sm:pb-12 bg-gradient-to-br from-bg-light via-white to-bg-light relative">
        {/* Subtle decorative shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" aria-hidden="true" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-5 lg:gap-16 items-start">
            {/* Left: Content */}
            <div className="lg:pt-4 min-w-0">
              <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-text-dark leading-tight mb-4 sm:mb-5 break-words">
                Deja de pagar de más por tu <span className="text-accent">plan de salud</span>
              </h1>
              <p className="text-sm sm:text-lg lg:text-xl text-text-medium mb-5 sm:mb-6 leading-relaxed break-words">
                Equipo experto en <strong className="text-accent">Fonasa e Isapres</strong>. Te ayudamos a escoger el mejor plan del mercado, con una asesoría rápida, <span className="bg-accent/10 text-accent font-semibold px-1.5 sm:px-2 py-0.5 rounded-md">100% gratuita</span> y confidencial. Súmate a las más de <strong className="text-text-dark">1.200 personas asesoradas</strong>.
              </p>

              {/* Trust bullets */}
              <ul className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
                {[
                  'Mejora tu cobertura sin pagar de más',
                  'Evita alzas injustificadas',
                  'Copagos claros y beneficios reales',
                  'Planes individuales y familiares',
                  'Acompañamiento permanente',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 sm:gap-3">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-text-dark font-medium text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Convenios - hidden on mobile, shown on sm+ */}
              <div className="hidden sm:block mb-6">
                <p className="text-text-light text-sm font-medium mb-2">Convenios incluidos:</p>
                <div className="flex flex-wrap gap-2">
                  {['Salud mental', 'Dental', 'Kinesiológico', 'Terapeuta ocupacional', 'Telemedicina 24/7', 'Cobertura maternal'].map((convenio) => (
                    <span key={convenio} className="inline-flex items-center gap-1.5 text-sm font-medium text-accent bg-accent/10 px-3 py-1.5 rounded-full">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {convenio}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: Form */}
            <div id="formulario" className="lg:pt-4 min-w-0">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-medium border border-bg-gray/50">
                <div className="text-center mb-3 sm:mb-6">
                  <h2 className="text-lg sm:text-2xl font-bold text-text-dark mb-1">
                    Evalúa tu Isapre <span className="text-accent">gratis</span>
                  </h2>
                  <p className="text-text-medium text-xs sm:text-sm">
                    Completa el formulario y te contactamos lo antes posible.
                  </p>
                </div>
                <LeadForm />
              </div>
              {/* Isapre Carousel - below form */}
              <div className="mt-4 sm:mt-6">
                <IsapreCarousel />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coberturas de Isapre */}
      <section className="py-12 sm:py-16 bg-white" aria-labelledby="coberturas-title">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <FadeSection>
            <div className="text-center mb-10">
              <p className="text-accent font-semibold mb-2">🏥 Conoce tus beneficios</p>
              <h2 id="coberturas-title" className="text-2xl sm:text-3xl font-bold text-text-dark mb-3">
                ¿Qué coberturas incluye tu Isapre?
              </h2>
              <p className="text-text-medium max-w-2xl mx-auto">
                Conoce las principales coberturas que puedes obtener con un buen plan
              </p>
            </div>
          </FadeSection>

          <FadeSection delay={100}>
            <CoverageCarousel />
          </FadeSection>
        </div>
      </section>

      {/* Ejemplo real - Sección de casos de éxito - COMENTADO
      <section className="py-12 sm:py-16 bg-gradient-to-br from-accent/5 via-white to-accent/5" aria-labelledby="ejemplo-title">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <FadeSection>
            <div className="text-center mb-10">
              <p className="text-accent font-semibold mb-2">💡 Casos reales de éxito</p>
              <h2 id="ejemplo-title" className="text-2xl sm:text-3xl font-bold text-text-dark mb-3">
                Así ayudamos a personas como tú a ahorrar
              </h2>
              <p className="text-text-medium max-w-2xl mx-auto">
                Miles de chilenos ya están ahorrando con mejores planes de Isapre
              </p>
            </div>
          </FadeSection>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Caso 1: Felipe * /}
            <FadeSection delay={0}>
              <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-medium border border-accent/10 h-full flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="flex flex-col gap-6 flex-1">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-text-dark font-bold text-lg">Felipe Rojas</p>
                        <p className="text-text-medium text-sm">35 años, soltero</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-5 border border-accent/20 flex-1">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center pb-2 border-b border-accent/20">
                        <span className="text-text-medium text-sm">Pagaba antes:</span>
                        <span className="text-text-dark font-bold line-through">$95.000</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-accent/20">
                        <span className="text-text-medium text-sm">Paga ahora:</span>
                        <span className="text-accent font-bold text-xl">$65.000</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-accent/20">
                        <span className="text-text-medium text-sm">Ahorro mensual:</span>
                        <span className="text-accent font-bold">$30.000</span>
                      </div>
                      <div className="bg-accent/10 rounded-xl p-3 mt-3">
                        <div className="flex justify-between items-center">
                          <span className="text-text-dark font-semibold text-sm">Ahorro anual:</span>
                          <span className="text-accent font-bold text-2xl">$360.000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-text-medium text-sm leading-relaxed">
                    Profesional independiente con mejor cobertura ambulatoria.
                  </p>
                </div>
              </div>
            </FadeSection>

            {/* Caso 2: Javiera * /}
            <FadeSection delay={100}>
              <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-medium border border-accent/10 h-full flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="flex flex-col gap-6 flex-1">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-text-dark font-bold text-lg">Javiera Muñoz</p>
                        <p className="text-text-medium text-sm">42 años, 2 hijos</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-5 border border-accent/20 flex-1">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center pb-2 border-b border-accent/20">
                        <span className="text-text-medium text-sm">Pagaba antes:</span>
                        <span className="text-text-dark font-bold line-through">$180.000</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-accent/20">
                        <span className="text-text-medium text-sm">Paga ahora:</span>
                        <span className="text-accent font-bold text-xl">$120.000</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-accent/20">
                        <span className="text-text-medium text-sm">Ahorro mensual:</span>
                        <span className="text-accent font-bold">$60.000</span>
                      </div>
                      <div className="bg-accent/10 rounded-xl p-3 mt-3">
                        <div className="flex justify-between items-center">
                          <span className="text-text-dark font-semibold text-sm">Ahorro anual:</span>
                          <span className="text-accent font-bold text-2xl">$720.000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-text-medium text-sm leading-relaxed">
                    Madre de familia con plan adaptado y excelente cobertura pediátrica.
                  </p>
                </div>
              </div>
            </FadeSection>

            {/* Caso 3: Constanza * /}
            <FadeSection delay={200}>
              <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-medium border border-accent/10 h-full flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="flex flex-col gap-6 flex-1">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-text-dark font-bold text-lg">Constanza Silva</p>
                        <p className="text-text-medium text-sm">28 años, recién casada</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-5 border border-accent/20 flex-1">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center pb-2 border-b border-accent/20">
                        <span className="text-text-medium text-sm">Pagaba antes:</span>
                        <span className="text-text-dark font-bold line-through">$140.000</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-accent/20">
                        <span className="text-text-medium text-sm">Paga ahora:</span>
                        <span className="text-accent font-bold text-xl">$95.000</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-accent/20">
                        <span className="text-text-medium text-sm">Ahorro mensual:</span>
                        <span className="text-accent font-bold">$45.000</span>
                      </div>
                      <div className="bg-accent/10 rounded-xl p-3 mt-3">
                        <div className="flex justify-between items-center">
                          <span className="text-text-dark font-semibold text-sm">Ahorro anual:</span>
                          <span className="text-accent font-bold text-2xl">$540.000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-text-medium text-sm leading-relaxed">
                    Pareja joven con plan conjunto y excelente cobertura de maternidad.
                  </p>
                </div>
              </div>
            </FadeSection>
          </div>

          <FadeSection delay={300}>
            <div className="mt-10 text-center">
              <p className="text-text-medium mb-4 text-lg">¿Quieres saber cuánto podrías ahorrar tú?</p>
              <a
                href="#formulario"
                className="btn-primary inline-block bg-accent hover:bg-accent-dark text-white font-semibold py-4 px-10 rounded-full text-lg transition touch-manipulation"
              >
                Evaluar mi caso gratis
              </a>
            </div>
          </FadeSection>
        </div>
      </section>
      */}

      {/* Problem Section - Empatía y validación */}
      <section className="py-16 sm:py-24 bg-white" aria-labelledby="problema-title">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <FadeSection>
            <header className="text-center mb-12">
              <p className="text-accent font-medium mb-3">¿Te sientes identificado?</p>
              <h2 id="problema-title" className="text-2xl sm:text-4xl font-bold text-text-dark mb-6">
                Si llegaste aquí, probablemente algo no está bien con tu Isapre
              </h2>
            </header>
          </FadeSection>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
            {/* Left: Image */}
            <FadeSection delay={100}>
              <div className="relative rounded-2xl overflow-hidden shadow-soft">
                <Image 
                  src="/images/familia.jpg" 
                  alt="Personas chilenas de diferentes edades comparando planes de Isapre y ahorrando en salud"
                  className="w-full h-auto object-cover"
                  width={600}
                  height={400}
                  priority={false}
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
              </div>
            </FadeSection>

            {/* Right: Questions */}
            <div className="space-y-4">
              {[
                '¿Sientes que pagas demasiado cada mes?',
                '¿No entiendes bien qué cubre tu plan?',
                '¿Tienes coberturas que nunca usas?',
                '¿Te da miedo cambiarte porque no sabes por dónde empezar?',
              ].map((question, i) => (
                <FadeSection key={i} delay={200 + i * 100}>
                  <div className="flex items-center gap-4 bg-bg-light rounded-xl p-5 hover:bg-bg-gray/50 transition">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-text-dark font-medium text-lg">{question}</p>
                  </div>
                </FadeSection>
              ))}
            </div>
          </div>

          <FadeSection delay={650}>
            <div className="text-center bg-bg-light rounded-2xl p-8">
              <p className="text-text-medium text-lg mb-6">
                <strong className="text-text-dark">No estás solo.</strong> Miles de chilenos pagan más de lo necesario por su Isapre. La buena noticia es que tiene solución.
              </p>
              <a
                href="#formulario"
                className="btn-primary inline-block bg-accent hover:bg-accent-dark text-white font-semibold py-4 px-10 rounded-full text-lg transition touch-manipulation"
              >
                Quiero saber si estoy pagando de más
              </a>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* How it works - La solución - COMENTADO */}
      {false && (<section className="py-16 sm:py-24 bg-gradient-to-br from-bg-light via-white to-bg-light relative overflow-hidden" aria-labelledby="proceso-title">
        {/* Decorative shapes */}
        <div className="absolute top-10 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-10 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />

        <div className="max-w-6xl mx-auto px-5 sm:px-6 relative">
          <FadeSection>
            <header className="text-center mb-14 sm:mb-20">
              <p className="text-accent font-semibold mb-3 text-sm uppercase tracking-wider">Así te ayudamos</p>
              <h2 id="proceso-title" className="text-2xl sm:text-4xl font-bold text-text-dark mb-4">
                En 3 simples pasos, encuentras tu plan ideal
              </h2>
              <p className="text-text-medium max-w-xl mx-auto text-lg">Sin trámites, sin letra chica. Solo resultados.</p>
            </header>
          </FadeSection>

          {/* Timeline layout */}
          <div className="relative">
            {/* Vertical connector line - desktop */}
            <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/20 via-accent/40 to-accent/20" aria-hidden="true" />

            <div className="space-y-10 sm:space-y-0">
              {/* Step 1 */}
              <FadeSection delay={0}>
                <div className="sm:grid sm:grid-cols-2 sm:gap-12 items-center sm:pb-16">
                  <div className="sm:text-right sm:pr-8">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <span className="w-10 h-10 bg-accent text-white font-bold text-lg rounded-xl flex items-center justify-center shadow-md">1</span>
                      <h3 className="font-bold text-text-dark text-xl sm:text-2xl">Cuéntanos tu situación</h3>
                    </div>
                    <p className="text-text-medium text-base leading-relaxed mb-4">
                      Completa un formulario rápido con tu información básica: edad, Isapre actual, cargas y presupuesto. No necesitas tener tu contrato a mano.
                    </p>
                    <div className="flex sm:justify-end gap-3">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent bg-accent/10 px-3 py-1.5 rounded-full">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        2 minutos
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                        100% seguro
                      </span>
                    </div>
                  </div>
                  <div className="hidden sm:flex justify-start pl-8">
                    <div className="w-48 h-48 bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl flex items-center justify-center">
                      <svg className="w-20 h-20 text-accent/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </FadeSection>

              {/* Step 2 */}
              <FadeSection delay={150}>
                <div className="sm:grid sm:grid-cols-2 sm:gap-12 items-center sm:pb-16">
                  <div className="hidden sm:flex justify-end pr-8">
                    <div className="w-48 h-48 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl flex items-center justify-center">
                      <svg className="w-20 h-20 text-primary/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="sm:pl-8">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <span className="w-10 h-10 bg-accent text-white font-bold text-lg rounded-xl flex items-center justify-center shadow-md">2</span>
                      <h3 className="font-bold text-text-dark text-xl sm:text-2xl">Analizamos tus opciones</h3>
                    </div>
                    <p className="text-text-medium text-base leading-relaxed mb-4">
                      Nuestro equipo compara planes de todas las Isapres del mercado según tu perfil. Evaluamos cobertura, precio, red de prestadores y beneficios adicionales.
                    </p>
                    <div className="flex gap-3">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent bg-accent/10 px-3 py-1.5 rounded-full">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        Todas las Isapres
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                        Análisis personalizado
                      </span>
                    </div>
                  </div>
                </div>
              </FadeSection>

              {/* Step 3 */}
              <FadeSection delay={300}>
                <div className="sm:grid sm:grid-cols-2 sm:gap-12 items-center">
                  <div className="sm:text-right sm:pr-8">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <span className="w-10 h-10 bg-accent text-white font-bold text-lg rounded-xl flex items-center justify-center shadow-md">3</span>
                      <h3 className="font-bold text-text-dark text-xl sm:text-2xl">Tú decides, sin presión</h3>
                    </div>
                    <p className="text-text-medium text-base leading-relaxed mb-4">
                      Te presentamos las mejores opciones con números claros. Si te convence, te acompañamos en el cambio. Si no, no pasa nada. Cero compromiso.
                    </p>
                    <div className="flex sm:justify-end gap-3">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent bg-accent/10 px-3 py-1.5 rounded-full">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        Sin compromiso
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        100% gratis
                      </span>
                    </div>
                  </div>
                  <div className="hidden sm:flex justify-start pl-8">
                    <div className="w-48 h-48 bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl flex items-center justify-center">
                      <svg className="w-20 h-20 text-accent/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </FadeSection>
            </div>
          </div>

          {/* CTA */}
          <FadeSection delay={400}>
            <div className="mt-14 text-center">
              <a
                href="#formulario"
                className="btn-primary inline-block bg-accent hover:bg-accent-dark text-white font-semibold py-4 px-10 rounded-full text-lg transition touch-manipulation"
              >
                Empezar ahora — es gratis
              </a>
            </div>
          </FadeSection>
        </div>
      </section>)}

      {/* Isapres we compare */}
      <section className="py-16 sm:py-24 bg-bg-light" aria-labelledby="isapres-title">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <FadeSection>
            <header className="text-center mb-10 sm:mb-12">
              <p className="text-accent font-medium mb-3">Respaldo</p>
              <h2 id="isapres-title" className="text-2xl sm:text-4xl font-bold text-text-dark mb-4">
                Comparamos todas las Isapres
              </h2>
              <p className="text-text-medium">Para encontrar la mejor opción para ti</p>
            </header>
          </FadeSection>

          <FadeSection delay={100}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 sm:gap-6">
              {[
                { name: 'Banmédica', logo: '/logos/banmedica.png' },
                { name: 'Colmena', logo: '/logos/colmena.png' },
                { name: 'Cruz Blanca', logo: '/logos/cruz_blanca.webp' },
                { name: 'Consalud', logo: '/logos/consalud.png' },
                { name: 'Vida Tres', logo: '/logos/vida_tres.png' },
                { name: 'Nueva Masvida', logo: '/logos/nueva_mas_vida.png' },
                { name: 'Esencial', logo: '/logos/esencial.svg' },
              ].map((isapre) => (
                <div
                  key={isapre.name}
                  className="bg-white rounded-xl p-4 sm:p-6 flex items-center justify-center h-20 sm:h-24 shadow-soft"
                >
                  <Image 
                    src={isapre.logo} 
                    alt={`Comparar planes de ${isapre.name} - Isapre en Chile`}
                    className="max-h-10 sm:max-h-12 w-auto object-contain transition-all hover:scale-110"
                    width={120}
                    height={48}
                    quality={90}
                  />
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 bg-secondary" aria-labelledby="cta-title">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
          <FadeSection>
            <h2 id="cta-title" className="text-2xl sm:text-4xl font-bold text-white mb-4">
              ¿Listo para saber si puedes ahorrar?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Completa el formulario y te contactamos lo antes posible
            </p>
            <a
              href="#formulario"
              className="btn-primary inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-10 rounded-full text-lg transition touch-manipulation"
            >
              Quiero que me asesoren gratis
            </a>
            <p className="text-white/50 text-sm mt-4">Sin compromiso • Sin spam • Sin llamadas incómodas</p>
          </FadeSection>
        </div>
      </section>
    </>
  );
}
