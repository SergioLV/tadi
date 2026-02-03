export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 sm:py-8 mb-20 sm:mb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="font-bold">Isapre360</p>
          <address className="text-gray-400 not-italic text-xs sm:text-sm text-center sm:text-right">
            <span className="block sm:inline">Santiago, Chile</span>
            <span className="hidden sm:inline"> · </span>
            <span className="block sm:inline">contacto@isapre360.cl</span>
            <span className="hidden sm:inline"> · </span>
            <span className="block sm:inline">+56 9 1234 5678</span>
          </address>
        </div>
        <div className="border-t border-gray-800 mt-4 sm:mt-6 pt-4 sm:pt-6 text-center text-gray-400 text-xs sm:text-sm">
          <p>&copy; {new Date().getFullYear()} Isapre360. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
