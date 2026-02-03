import FadeSection from '@/components/FadeSection';

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
                href="https://wa.me/56912345678?text=Hola%20Gustavo,%20quiero%20cotizar%20mi%20Isapre"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary bg-mint hover:bg-mint-dark text-primary font-semibold py-4 px-8 rounded-full text-center text-base sm:text-lg transition touch-manipulation active:scale-[0.98]"
              >
                Cotizar por WhatsApp
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
      <section className="py-14 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <FadeSection>
            <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">La diferencia</h2>
          </FadeSection>
          
          <FadeSection delay={100}>
            <div className="max-w-3xl mx-auto -mx-5 sm:mx-auto px-5 sm:px-0 overflow-x-auto">
              <table className="w-full min-w-[320px]">
                <thead>
                  <tr className="border-b-2 border-gray-light">
                    <th className="py-3 sm:py-4 pr-2 sm:px-4 text-left font-semibold text-xs sm:text-base"></th>
                    <th className="py-3 sm:py-4 px-2 sm:px-4 text-center font-semibold text-gray-medium text-xs sm:text-base">Solo</th>
                    <th className="py-3 sm:py-4 pl-2 sm:px-4 text-center font-semibold text-mint text-xs sm:text-base">Con Isapre360</th>
                  </tr>
                </thead>
                <tbody className="text-xs sm:text-base">
                  {[
                    ['Comparar planes', 'Horas buscando', '15 minutos'],
                    ['Entender coberturas', 'Letra chica', 'Explicación clara'],
                    ['Elegir Isapre', 'Presión de vendedores', 'Recomendación objetiva'],
                    ['Hacer el cambio', 'Solo y con dudas', 'Acompañamiento total'],
                  ].map(([label, solo, con360], i) => (
                    <tr key={i} className="border-b border-gray-light">
                      <td className="py-3 sm:py-4 pr-2 sm:px-4 font-medium">{label}</td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-center text-gray-medium">{solo}</td>
                      <td className="py-3 sm:py-4 pl-2 sm:px-4 text-center text-mint font-medium">{con360}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-14 sm:py-24 bg-gray-light">
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
                <div className="card-hover bg-white rounded-2xl p-5 sm:p-6">
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

      {/* CTA FINAL */}
      <section className="py-14 sm:py-24 bg-primary text-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
          <FadeSection>
            <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
              Cotiza tu Isapre con Gustavo en 15 minutos
            </h2>
            <p className="text-white/70 text-base sm:text-lg mb-6 sm:mb-8">
              Sin compromiso, sin presiones, sin letra chica
            </p>
            <a
              href="https://wa.me/56912345678?text=Hola%20Gustavo,%20quiero%20cotizar%20mi%20Isapre"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary inline-block bg-mint hover:bg-mint-dark text-primary font-semibold py-4 px-8 sm:px-10 rounded-full text-base sm:text-lg transition touch-manipulation active:scale-[0.98]"
            >
              Hablar por WhatsApp
            </a>
          </FadeSection>
        </div>
      </section>

      {/* Spacer for WhatsApp button on mobile */}
      <div className="h-20 sm:h-0 bg-primary"></div>
    </>
  );
}
