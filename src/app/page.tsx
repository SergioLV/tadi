import FadeSection from '@/components/FadeSection';
import LeadForm from '@/components/LeadForm';
import IsapreCarousel from '@/components/IsapreCarousel';

export default function Home() {
  return (
    <>
      {/* HERO with Form */}
      <section id="inicio" className="min-h-screen pt-24 sm:pt-28 pb-6 sm:pb-12 bg-gradient-to-br from-bg-light via-white to-bg-light relative overflow-hidden">
        {/* Subtle decorative shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" aria-hidden="true" />
        
        <div className="max-w-6xl mx-auto px-5 sm:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left: Content */}
            <div className="pt-4 sm:pt-8 lg:pt-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark leading-tight mb-5 sm:mb-6">
                ¿Pensando en cambiarte a una <span className="text-accent">mejor Isapre</span> en Chile?
              </h1>
              <p className="text-lg sm:text-xl text-text-medium mb-8 leading-relaxed">
                Te ayudamos a <strong className="text-accent">reducir costos</strong> y <strong className="text-accent">mejorar tu cobertura</strong> — gratis y sin compromiso.
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
                    <span className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

              {/* Isapre Carousel - desktop */}
              <div className="hidden lg:block mt-6">
                <IsapreCarousel />
              </div>
            </div>

            {/* Right: Form */}
            <div id="formulario" className="lg:sticky lg:top-24">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-medium border border-bg-gray/50">
                <div className="text-center mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-text-dark mb-2">
                    Evalúa tu Isapre <span className="text-accent">gratis</span>
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

        {/* Isapre Carousel - mobile only */}
        <div className="mt-8 sm:mt-12 lg:hidden">
          <IsapreCarousel />
        </div>
      </section>

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
                <img 
                  src="/images/familia.png" 
                  alt="Familia chilena protegida con mejor cobertura de Isapre"
                  className="w-full h-auto object-cover"
                  loading="lazy"
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

      {/* How it works - La solución */}
      <section className="py-16 sm:py-24 bg-bg-light" aria-labelledby="proceso-title">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <FadeSection>
            <header className="text-center mb-12 sm:mb-16">
              <p className="text-accent font-medium mb-3">Así te ayudamos</p>
              <h2 id="proceso-title" className="text-2xl sm:text-4xl font-bold text-text-dark mb-4">
                Evaluar tu Isapre es más fácil de lo que crees
              </h2>
              <p className="text-text-medium max-w-2xl mx-auto">Solo necesitas 2 minutos para empezar</p>
            </header>
          </FadeSection>

          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              { step: '1', title: 'Cuéntanos tu situación', desc: 'Completa un formulario simple con tu información básica' },
              { step: '2', title: 'Analizamos tus opciones', desc: 'Comparamos planes de todas las Isapres según tu perfil' },
              { step: '3', title: 'Tú decides', desc: 'Te presentamos las mejores opciones y tú eliges sin presión' },
            ].map((item, i) => (
              <FadeSection key={i} delay={i * 100}>
                <article className="relative">
                  {/* Connector line - hidden on mobile, shown on tablet+ */}
                  {i < 2 && (
                    <div className="hidden sm:block absolute top-6 left-[calc(100%+1rem)] w-8 h-0.5 bg-accent/30" aria-hidden="true" />
                  )}
                  
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-soft h-full text-center relative transition-all duration-300 hover:scale-105 hover:shadow-medium">
                    {/* Step number badge */}
                    <div className="relative inline-block mb-5">
                      <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent-dark text-white font-bold text-2xl rounded-2xl flex items-center justify-center shadow-md">
                        {item.step}
                      </div>
                      {/* Small accent dot */}
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-white" />
                    </div>
                    
                    <h3 className="font-semibold text-text-dark text-lg mb-2">{item.title}</h3>
                    <p className="text-text-medium">{item.desc}</p>
                  </div>
                </article>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section - Por qué confiar */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-bg-light to-white relative overflow-hidden" aria-labelledby="beneficios-title">
        {/* Decorative background shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />
        
        <div className="max-w-6xl mx-auto px-5 sm:px-6 relative">
          <FadeSection>
            <header className="text-center mb-12 sm:mb-16">
              <p className="text-accent font-medium mb-3">¿Por qué nosotros?</p>
              <h2 id="beneficios-title" className="text-2xl sm:text-4xl font-bold text-text-dark mb-4">
                Asesoría transparente, sin letra chica
              </h2>
            </header>
          </FadeSection>

          <div className="grid sm:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: '100% gratis',
                desc: 'No te cobramos nada por la evaluación',
                color: 'from-accent/10 to-accent/5',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Sin presiones',
                desc: 'Tú decides si quieres cambiarte o no',
                color: 'from-primary/10 to-primary/5',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: 'Expertos locales',
                desc: 'Conocemos el mercado chileno a fondo',
                color: 'from-accent/10 to-accent/5',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                title: 'Datos seguros',
                desc: 'Tu información está protegida',
                color: 'from-primary/10 to-primary/5',
              },
            ].map((item, i) => (
              <FadeSection key={i} delay={i * 80}>
                <article className="group">
                  <div className={`bg-gradient-to-br ${item.color} backdrop-blur-sm rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:scale-105 hover:shadow-soft border border-white/50 ${
                    i % 2 === 0 ? 'sm:flex sm:flex-row sm:items-center sm:text-left' : 'sm:flex sm:flex-row-reverse sm:items-center sm:text-right'
                  }`}>
                    {/* Icon */}
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl flex items-center justify-center text-accent shadow-sm group-hover:shadow-md transition-shadow flex-shrink-0 ${
                      i % 2 === 0 ? 'mx-auto sm:mx-0 sm:mr-6 mb-4 sm:mb-0' : 'mx-auto sm:mx-0 sm:ml-6 mb-4 sm:mb-0'
                    }`}>
                      {item.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="text-center sm:text-inherit flex-1">
                      <h3 className="font-semibold text-text-dark mb-2 text-lg sm:text-xl">{item.title}</h3>
                      <p className="text-text-medium text-sm sm:text-base leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </article>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

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
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
              {[
                { name: 'Banmédica', logo: '/logos/banmedica.png' },
                { name: 'Colmena', logo: '/logos/colmena.png' },
                { name: 'Cruz Blanca', logo: '/logos/cruz_blanca.webp' },
                { name: 'Consalud', logo: '/logos/consalud.png' },
                { name: 'Vida Tres', logo: '/logos/vida_tres.png' },
                { name: 'Nueva Masvida', logo: '/logos/nueva_mas_vida.png' },
              ].map((isapre) => (
                <div
                  key={isapre.name}
                  className="bg-white rounded-xl p-4 sm:p-6 flex items-center justify-center h-20 sm:h-24 shadow-soft"
                >
                  <img 
                    src={isapre.logo} 
                    alt={`Logo ${isapre.name}`}
                    className="max-h-10 sm:max-h-12 w-auto object-contain transition-all hover:scale-110"
                    loading="lazy"
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
              Completa el formulario y te contactamos en menos de 24 horas
            </p>
            <a
              href="#formulario"
              className="btn-primary inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-10 rounded-full text-lg transition touch-manipulation"
            >
              Evaluar mi Isapre gratis
            </a>
            <p className="text-white/50 text-sm mt-4">Sin compromiso • Sin spam • Sin llamadas incómodas</p>
          </FadeSection>
        </div>
      </section>
    </>
  );
}
