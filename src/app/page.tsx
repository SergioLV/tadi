export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-br from-primary to-blue-700 text-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Isapre360 - Tu Asesor de Salud en Chile
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto">
            Te ayudamos a elegir el mejor plan de salud para ti y tu familia. 
            Comparamos todas las Isapres del mercado sin costo.
          </p>
          <a
            href="#contacto"
            className="inline-block bg-secondary hover:bg-green-600 text-white font-semibold py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition touch-manipulation active:scale-95"
          >
            Solicita Asesoría Gratis
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Nuestros Servicios</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <article className="bg-white p-5 sm:p-6 rounded-xl shadow-md">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📊</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-primary">Comparación de Isapres</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Analizamos Banmédica, Colmena, Cruz Blanca, Consalud, Vida Tres y más para encontrar tu plan ideal.
              </p>
            </article>
            <article className="bg-white p-5 sm:p-6 rounded-xl shadow-md">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔄</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-primary">Cambio de Isapre</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Te asesoramos en el proceso de cambio, asegurando mejor cobertura y precio.
              </p>
            </article>
            <article className="bg-white p-5 sm:p-6 rounded-xl shadow-md sm:col-span-2 md:col-span-1">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">👨‍💼</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-primary">Asesoría Personalizada</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Evaluamos tu situación particular para recomendarte el plan más conveniente.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="nosotros" className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">¿Por Qué Elegirnos?</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center p-4">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">✓</div>
              <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Sin Costo</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Asesoría completamente gratuita</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🏥</div>
              <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Todas las Isapres</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Comparamos todas las opciones</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⭐</div>
              <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Expertos</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Años de experiencia</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🤝</div>
              <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Acompañamiento</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Te guiamos en todo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Contáctanos</h2>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                  <input type="text" id="nombre" name="nombre" required
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent touch-manipulation" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" name="email" required
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent touch-manipulation" />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                  <input type="tel" id="telefono" name="telefono"
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent touch-manipulation" />
                </div>
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                  <textarea id="mensaje" name="mensaje" rows={3} required
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent touch-manipulation"></textarea>
                </div>
                <button type="submit"
                  className="w-full bg-primary hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition touch-manipulation active:scale-[0.98]">
                  Enviar Mensaje
                </button>
              </form>
            </div>
            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <h3 className="font-semibold">Ubicación</h3>
                  <p className="text-gray-600">Santiago, Chile</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📧</span>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:contacto@isapre360.cl" className="text-primary hover:underline break-all">
                    contacto@isapre360.cl
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📱</span>
                <div>
                  <h3 className="font-semibold">Teléfono</h3>
                  <a href="tel:+56912345678" className="text-primary hover:underline">+56 9 1234 5678</a>
                </div>
              </div>
              <div className="pt-2 sm:pt-4">
                <a href="https://wa.me/56912345678?text=Hola,%20necesito%20asesoría%20en%20Isapres"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition touch-manipulation active:scale-95">
                  <span>💬</span> WhatsApp Directo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
