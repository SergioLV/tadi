import FadeSection from '@/components/FadeSection';
import LeadForm from '@/components/LeadForm';
import IsapreCarousel from '@/components/IsapreCarousel';

export default function Home() {
  return (
    <>
      {/* HERO with Form */}
      <section id="inicio" className="min-h-screen pt-20 sm:pt-24 pb-6 sm:pb-12 bg-gradient-to-br from-bg-light via-white to-bg-light relative overflow-hidden">
        {/* Subtle decorative shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-health-green/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" aria-hidden="true" />
        
        <div className="max-w-6xl mx-auto px-5 sm:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left: Content */}
            <div className="pt-4 sm:pt-8 lg:pt-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark leading-tight mb-5 sm:mb-6">
                ¿Pensando en cambiarte a una <span className="text-primary">mejor Isapre</span> en Chile?
              </h1>
              <p className="text-lg sm:text-xl text-text-medium mb-8 leading-relaxed">
                Te ayudamos a <strong>reducir costos</strong> y <strong>mejorar tu cobertura de salud</strong> — gratis y sin compromiso.
              </p>

              {/* Trust bullets */}
              <ul className="space-y-4 mb-8">
                {[
                  'Ahorra en tus pagos mensuales',
                  'Mejor cobertura y beneficios',
                  'Asesoría 100% gratuita',
                  'Rápido, seguro y confidencial',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-health-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-health-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-text-dark font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Trust indicators - desktop */}
              <div className="hidden lg:flex items-center gap-6 pt-4 border-t border-bg-gray">
                <div className="flex items-center gap-2 text-text-light text-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Datos seguros
                </div>
                <div className="flex items-center gap-2 text-text-light text-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Expertos en Chile
                </div>
                <div className="flex items-center gap-2 text-text-light text-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Planes personalizados
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div id="formulario" className="lg:sticky lg:top-24">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-medium border border-bg-gray/50">
                <div className="text-center mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-text-dark mb-2">
                    Evalúa tu Isapre gratis
                  </h2>
                  <p className="text-text-medium text-sm">
                    Completa el formulario y te contactamos en 24 horas
                  </p>
                </div>
                <LeadForm />
              </div>
            </div>
          </div>
        </div>

        {/* Isapre Carousel */}
        <div className="mt-8 sm:mt-12">
          <IsapreCarousel />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-24 bg-white" aria-labelledby="beneficios-title">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <FadeSection>
            <header className="text-center mb-12 sm:mb-16">
              <h2 id="beneficios-title" className="text-2xl sm:text-4xl font-bold text-text-dark mb-4">
                ¿Por qué evaluar tu Isapre con nosotros?
              </h2>
              <p className="text-text-medium max-w-2xl mx-auto">
                Te acompañamos en todo el proceso de forma transparente y sin presiones
              </p>
            </header>
          </FadeSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Ahorro real',
                desc: 'Encontramos planes que se ajustan a tu presupuesto sin sacrificar cobertura',
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Sin letra chica',
                desc: 'Te explicamos cada detalle de forma clara y transparente',
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: 'Atención personalizada',
                desc: 'Cada caso es único, por eso te asesoramos según tu situación real',
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                title: '100% confidencial',
                desc: 'Tu información está protegida y nunca la compartimos con terceros',
              },
            ].map((item, i) => (
              <FadeSection key={i} delay={i * 80}>
                <article className="card-hover bg-bg-light rounded-2xl p-6 text-center h-full">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-text-dark mb-2">{item.title}</h3>
                  <p className="text-text-medium text-sm">{item.desc}</p>
                </article>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-24 bg-bg-light" aria-labelledby="proceso-title">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <FadeSection>
            <header className="text-center mb-12 sm:mb-16">
              <h2 id="proceso-title" className="text-2xl sm:text-4xl font-bold text-text-dark mb-4">
                ¿Cómo funciona?
              </h2>
              <p className="text-text-medium">Tres pasos simples para mejorar tu salud</p>
            </header>
          </FadeSection>

          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              { step: '1', title: 'Completa el formulario', desc: 'Nos cuentas tu situación actual y qué estás buscando' },
              { step: '2', title: 'Recibe tu evaluación', desc: 'Analizamos las mejores opciones según tu perfil' },
              { step: '3', title: 'Decide con información', desc: 'Te acompañamos en el cambio si decides hacerlo' },
            ].map((item, i) => (
              <FadeSection key={i} delay={i * 100}>
                <article className="relative">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-soft h-full">
                    <div className="w-10 h-10 bg-primary text-white font-bold rounded-full flex items-center justify-center mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-semibold text-text-dark mb-2">{item.title}</h3>
                    <p className="text-text-medium text-sm">{item.desc}</p>
                  </div>
                  {i < 2 && (
                    <div className="hidden sm:block absolute top-1/2 -right-4 w-8 text-bg-gray" aria-hidden="true">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </article>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Isapres we compare */}
      <section className="py-16 sm:py-24 bg-white" aria-labelledby="isapres-title">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <FadeSection>
            <header className="text-center mb-10 sm:mb-12">
              <h2 id="isapres-title" className="text-2xl sm:text-4xl font-bold text-text-dark mb-4">
                Comparamos todas las Isapres de Chile
              </h2>
              <p className="text-text-medium">Para encontrar la mejor opción para ti</p>
            </header>
          </FadeSection>

          <FadeSection delay={100}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-12">
              {[
                { name: 'Banmédica', logo: '/logos/banmedica.png' },
                { name: 'Colmena', logo: '/logos/colmena.png' },
                { name: 'Cruz Blanca', logo: '/logos/cruzblanca.png' },
                { name: 'Consalud', logo: '/logos/consalud.png' },
                { name: 'Vida Tres', logo: '/logos/vidatres.png' },
                { name: 'Nueva Masvida', logo: '/logos/nuevamasvida.png' },
              ].map((isapre) => (
                <div
                  key={isapre.name}
                  className="bg-bg-light rounded-xl p-4 sm:p-6 flex items-center justify-center h-20 sm:h-24"
                >
                  <img 
                    src={isapre.logo} 
                    alt={`Logo ${isapre.name}`}
                    className="max-h-10 sm:max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </FadeSection>

          {/* Superintendencia de Salud */}
          <FadeSection delay={200}>
            <div className="border-t border-bg-gray pt-10">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <img 
                  src="/logos/superintendencia-salud.png" 
                  alt="Superintendencia de Salud de Chile"
                  className="h-12 sm:h-16 w-auto object-contain"
                  loading="lazy"
                />
                <div className="text-center sm:text-left">
                  <p className="text-text-medium text-sm">
                    Información basada en datos de la
                  </p>
                  <p className="text-text-dark font-semibold">
                    Superintendencia de Salud de Chile
                  </p>
                </div>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 bg-primary" aria-labelledby="cta-title">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
          <FadeSection>
            <h2 id="cta-title" className="text-2xl sm:text-4xl font-bold text-white mb-4">
              Evalúa tu Isapre hoy
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Sin compromiso, sin spam, sin llamadas incómodas
            </p>
            <a
              href="#formulario"
              className="btn-primary inline-block bg-health-green hover:bg-health-green-dark text-white font-semibold py-4 px-10 rounded-full text-lg transition touch-manipulation"
            >
              Comenzar evaluación gratis
            </a>
          </FadeSection>
        </div>
      </section>
    </>
  );
}
