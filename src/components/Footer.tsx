import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8 sm:py-12" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-xl font-bold mb-2">
              Isapre<span className="text-mint">360</span>
            </p>
            <p className="text-white/60 text-sm">
              Asesoría gratuita y personalizada para elegir tu plan de Isapre en Chile.
            </p>
          </div>

          {/* Servicios */}
          <nav aria-label="Servicios">
            <h3 className="font-semibold mb-3 text-sm">Servicios</h3>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>Cotización de Isapre</li>
              <li>Comparación de planes</li>
              <li>Cambio de Isapre</li>
              <li>Asesoría familiar</li>
            </ul>
          </nav>

          {/* Isapres */}
          <div>
            <h3 className="font-semibold mb-3 text-sm">Isapres que comparamos</h3>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>Banmédica</li>
              <li>Colmena</li>
              <li>Cruz Blanca</li>
              <li>Consalud</li>
              <li>Vida Tres</li>
              <li>Nueva Masvida</li>
            </ul>
          </div>

          {/* Contacto */}
          <address className="not-italic">
            <h3 className="font-semibold mb-3 text-sm">Contacto</h3>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>Santiago, Chile</li>
              <li>
                <a href="mailto:contacto@isapre360.cl" className="hover:text-mint transition">
                  contacto@isapre360.cl
                </a>
              </li>
              <li>
                <a href="tel:+56912345678" className="hover:text-mint transition">
                  +56 9 1234 5678
                </a>
              </li>
            </ul>
          </address>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Isapre360. Todos los derechos reservados.
          </p>
          <nav aria-label="Enlaces legales" className="flex gap-4 text-white/40 text-xs">
            <Link href="/privacidad" className="hover:text-white transition">
              Política de Privacidad
            </Link>
            <Link href="/terminos" className="hover:text-white transition">
              Términos de Uso
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
