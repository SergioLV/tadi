export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <p className="text-xl font-bold">Isapre<span className="text-mint">360</span></p>
            <p className="text-white/60 text-sm mt-1">Asesoría personalizada en Isapres</p>
          </div>
          <div className="text-white/60 text-sm text-center sm:text-right">
            <p>Santiago, Chile</p>
            <p>contacto@isapre360.cl</p>
          </div>
        </div>
        <div className="border-t border-white/10 mt-6 pt-6 text-center text-white/40 text-xs">
          <p>© {new Date().getFullYear()} Isapre360. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
