export default function Footer() {
  return (
    <footer className="bg-text-dark text-white py-12" role="contentinfo">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Trust indicators */}
        <div className="grid sm:grid-cols-3 gap-6 mb-10 pb-10 border-b border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-health-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-sm">Datos seguros</h3>
              <p className="text-white/60 text-xs">Tu información está protegida</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-health-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-sm">Planes personalizados</h3>
              <p className="text-white/60 text-xs">Según tu situación real</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-health-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-sm">Expertos en Chile</h3>
              <p className="text-white/60 text-xs">Conocemos el mercado local</p>
            </div>
          </div>
        </div>

        {/* Footer content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <p className="text-xl font-bold mb-3">
              Elige un <span className="text-health-green">Plan</span>
            </p>
            <p className="text-white/60 text-sm">
              Asesoría gratuita para elegir tu plan de Isapre en Chile.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-sm">Servicios</h3>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>Evaluación de Isapre</li>
              <li>Comparación de planes</li>
              <li>Cambio de Isapre</li>
              <li>Asesoría familiar</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-sm">Isapres</h3>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>Banmédica</li>
              <li>Colmena</li>
              <li>Cruz Blanca</li>
              <li>Consalud</li>
              <li>Vida Tres</li>
            </ul>
          </div>

          <address className="not-italic">
            <h3 className="font-semibold mb-3 text-sm">Contacto</h3>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>Santiago, Chile</li>
              <li>
                <a href="mailto:contacto@isapre360.cl" className="hover:text-health-green transition">
                  contacto@isapre360.cl
                </a>
              </li>
            </ul>
          </address>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Elige un Plan. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-3">
            <img 
              src="/logos/superintendencia-salud-white.png" 
              alt="Superintendencia de Salud"
              className="h-8 w-auto opacity-60"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
