import FadeSection from '@/components/FadeSection';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section id="inicio" className="min-h-[90vh] sm:min-h-screen flex items-center bg-gradient-to-br from-gray-light to-white pt-20 sm:pt-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-8 sm:py-20">
          <div className="max-w-3xl">
            <h1 className="text-[2rem] leading-[1.15] sm:text-5xl lg:text-6xl font-bold sm:leading-tight mb-5 sm:mb-6">
              Elige tu Isapre <span className="text-mint">sin perderte</span> en la letra chica
            </h1>
            <p className="text-base sm:text-xl text-gray-medium mb-6 sm:mb-8 max-w-2xl leading-relaxed">
              En Isapre360, Gustavo —profesional de la salud— te ayuda a cotizar, comparar y elegir el mejor plan para ti y tu familia.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#contacto"
                className="cta-primary bg-mint hover:bg-mint-dark text-primary font-semibold py-4 px-8 rounded-full text-center text-base sm:text-lg transition touch-manipulation active:scale-[0.98]"
              >
                Cotizar gratis
              </a>
              <a
                href="#como-funciona"
                className="border-2 border-primary/20 hover:border-primary/40 text-primary font-semibold py-4 px-8 rounded-full text-center text-base sm:text-lg transition touch-manipulation"
              >
                Ver cómo funciona
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section id="como-funciona" className="py-14 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <FadeSection>
            <h2 className="text-2xl sm:text-4xl font-bold text-center mb-3 sm:mb-4">Cómo funciona</h2>
            <p className="text-gray-medium text-center mb-10 sm:mb-12 text-sm sm:text-base">Simple, rápido y sin compromiso</p>
          </FadeSection>
          
          <div className="grid gap-4 sm:grid-cols-3 sm:gap-8">
            {[
              { step: '1', title: 'Cuéntame tu situación', desc: 'Me escribes por WhatsApp y me cuentas qué necesitas: presupuesto, cargas, uso del sistema.' },
              { step: '2', title: 'Te muestro opciones reales', desc: 'Comparo planes de todas las Isapres y te explico las diferencias sin letra chica.' },
              { step: '3', title: 'Te acompaño en el cambio', desc: 'Si decides cambiarte, te guío en todo el proceso hasta que quedes afiliado.' },
            ].map((item, i) => (
              <FadeSection key={i} delay={i * 100}>
                <div className="card-hover bg-gray-light rounded-2xl p-5 sm:p-8 text-center">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-mint text-primary font-bold text-lg sm:text-xl rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-medium text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUÉ ISAPRE360 */}
      <section className="py-14 sm:py-24 bg-gray-light">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <FadeSection>
            <h2 className="text-2xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">¿Por qué Isapre360?</h2>
          </FadeSection>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {[
              { icon: '✓', title: 'Sin letra chica', desc: 'Te explico todo en simple' },
              { icon: '🎯', title: 'Sin empujarte', desc: 'No trabajo para ninguna Isapre' },
              { icon: '👤', title: '1 a 1', desc: 'Atención personalizada' },
              { icon: '💡', title: 'Tu uso real', desc: 'Según lo que necesitas' },
            ].map((item, i) => (
              <FadeSection key={i} delay={i * 80}>
                <div className="card-hover bg-white rounded-2xl p-4 sm:p-6 text-center h-full">
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-sm sm:text-base mb-1">{item.title}</h3>
                  <p className="text-gray-medium text-xs sm:text-sm">{item.desc}</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE GUSTAVO */}
      <section id="gustavo" className="py-14 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-12 items-center">
            <FadeSection>
              <div className="bg-gray-light rounded-2xl sm:rounded-3xl p-6 sm:p-12 flex items-center justify-center">
                <div className="w-28 h-28 sm:w-40 sm:h-40 bg-mint/20 rounded-full flex items-center justify-center">
                  <span className="text-5xl sm:text-7xl">👨‍⚕️</span>
                </div>
              </div>
            </FadeSection>
            <FadeSection delay={100}>
              <div>
                <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6">Soy Gustavo</h2>
                <p className="text-gray-medium text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                  Profesional de la salud con años de experiencia en el sistema de Isapres. Mi trabajo es ayudarte a entender y elegir tu plan de forma clara, sin presiones ni ventas engañosas.
                </p>
                <p className="text-gray-medium text-sm sm:text-base leading-relaxed">
                  Te explico las diferencias, los riesgos y lo que realmente importa según tu situación. No trabajo para ninguna Isapre, trabajo para ti.
                </p>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* PROBLEMAS QUE RESUELVE */}
      <section className="py-14 sm:py-24 bg-gray-light">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <FadeSection>
            <h2 className="text-2xl sm:text-4xl font-bold text-center mb-3 sm:mb-4">¿Te suena familiar?</h2>
            <p className="text-gray-medium text-center mb-8 sm:mb-12 text-sm sm:text-base">Estos son los problemas que resuelvo todos los días</p>
          </FadeSection>
          
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-6 max-w-3xl mx-auto">
            {[
              { emoji: '💸', title: 'Pago demasiado', desc: 'Siento que mi plan es muy caro para lo que uso' },
              { emoji: '😵', title: 'No entiendo mi plan', desc: 'No sé qué cubre ni cuánto me devuelven' },
              { emoji: '🔄', title: 'Quiero cambiarme', desc: 'Pero no sé por dónde empezar ni qué mirar' },
              { emoji: '👨‍👩‍👧', title: 'Plan familiar', desc: 'Quiero algo que cubra a todos sin pagar de más' },
            ].map((item, i) => (
              <FadeSection key={i} delay={i * 80}>
                <div className="card-hover bg-white rounded-2xl p-4 sm:p-6 flex gap-3 sm:gap-4 items-start">
                  <span className="text-2xl sm:text-3xl flex-shrink-0">{item.emoji}</span>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base mb-1">{item.title}</h3>
                    <p className="text-gray-medium text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARACIÓN */}
      <section className="py-14 sm:py-24 bg-primary">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <FadeSection>
            <h2 className="text-2xl sm:text-4xl font-bold text-center mb-3 sm:mb-4 text-white">La diferencia</h2>
            <p className="text-white/60 text-center mb-10 sm:mb-12 text-sm sm:text-base">Lo que pasa cuando eliges solo vs con asesoría</p>
          </FadeSection>
          
          <FadeSection delay={100}>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4 sm:gap-6">
              {/* Columna SOLO */}
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-5 sm:mb-6">
                  <span className="text-xl">😓</span>
                  <h3 className="text-white/60 font-semibold text-sm sm:text-base">Eligiendo solo</h3>
                </div>
                <ul className="space-y-3 sm:space-y-4">
                  {[
                    'Horas comparando en internet',
                    'Letra chica que no entiendes',
                    'Vendedores que te presionan',
                    'Dudas sin resolver',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/50 text-sm sm:text-base">
                      <span className="text-red-400 mt-0.5">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Columna CON ISAPRE360 */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl">
                <div className="flex items-center gap-2 mb-5 sm:mb-6">
                  <span className="text-xl">🎯</span>
                  <h3 className="text-primary font-semibold text-sm sm:text-base">Con Isapre360</h3>
                </div>
                <ul className="space-y-3 sm:space-y-4">
                  {[
                    'Cotización en 15 minutos',
                    'Todo explicado en simple',
                    'Recomendación objetiva',
                    'Acompañamiento completo',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-medium text-sm sm:text-base">
                      <span className="text-mint mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className="mt-6 block w-full bg-mint hover:bg-mint-dark text-primary font-semibold py-3 sm:py-4 px-6 rounded-full text-center text-sm sm:text-base transition touch-manipulation active:scale-[0.98]"
                >
                  Cotizar ahora
                </a>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-14 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <FadeSection>
            <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Lo que dicen mis clientes</h2>
          </FadeSection>
          
          <div className="grid sm:grid-cols-3 gap-3 sm:gap-6">
            {[
              { name: 'Carolina M.', age: '34 años', text: 'Bajé mi copago a la mitad y ahora entiendo lo que pago. Gustavo me explicó todo con paciencia.' },
              { name: 'Roberto S.', age: '45 años', text: 'Me cambié de Isapre sin estrés. Gustavo se encargó de todo el papeleo.' },
              { name: 'Francisca L.', age: '29 años', text: 'Venía de Fonasa y no entendía nada. Ahora tengo un plan que se ajusta a lo que necesito.' },
            ].map((item, i) => (
              <FadeSection key={i} delay={i * 100}>
                <div className="card-hover bg-gray-light rounded-2xl p-5 sm:p-6">
                  <p className="text-gray-medium text-sm sm:text-base mb-4 italic leading-relaxed">"{item.text}"</p>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">{item.name}</p>
                    <p className="text-gray-medium text-xs sm:text-sm">{item.age}</p>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULARIO DE CONTACTO */}
      <section id="contacto" className="py-14 sm:py-24 bg-gray-light">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start">
              <FadeSection>
                <div>
                  <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6">
                    Cotiza gratis en <span className="text-mint">15 minutos</span>
                  </h2>
                  <p className="text-gray-medium text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                    Déjame tus datos y te contacto para ayudarte a encontrar el mejor plan de Isapre según tu situación.
                  </p>
                  
                  <div className="space-y-4 hidden sm:block">
                    {[
                      { icon: '⚡', text: 'Respuesta en menos de 24 horas' },
                      { icon: '💬', text: 'Te contacto por WhatsApp' },
                      { icon: '🎯', text: 'Asesoría personalizada y gratuita' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-gray-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeSection>

              <FadeSection delay={100}>
                <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl">
                  <ContactForm />
                </div>
              </FadeSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-14 sm:py-24 bg-primary text-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
          <FadeSection>
            <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
              ¿Listo para encontrar tu Isapre ideal?
            </h2>
            <p className="text-white/70 text-base sm:text-lg mb-6 sm:mb-8">
              Completa el formulario y Gustavo te contactará en menos de 24 horas
            </p>
            <a
              href="#contacto"
              className="cta-primary inline-block bg-mint hover:bg-mint-dark text-primary font-semibold py-4 px-8 sm:px-10 rounded-full text-base sm:text-lg transition touch-manipulation active:scale-[0.98]"
            >
              Cotizar gratis
            </a>
          </FadeSection>
        </div>
      </section>

      {/* Spacer for WhatsApp button on mobile */}
      <div className="h-20 sm:h-0 bg-primary"></div>
    </>
  );
}
