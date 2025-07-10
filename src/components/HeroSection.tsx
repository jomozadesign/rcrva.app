/**
 * HeroSection
 * Propósito: Sección principal de la landing page de rcrva. Presenta el nombre, slogan y CTA principal.
 * Entrada: Ninguna (por ahora).
 * Salida: JSX.Element con el contenido del hero.
 * Ejemplo de uso: <HeroSection />
 */
export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full text-center px-4">
      <h1 className="text-5xl font-bold mb-4 text-blue-700">rcrva</h1>
      <p className="text-xl mb-8 text-gray-700 max-w-xl">Gestiona las reservaciones de tu negocio físico de forma simple, moderna y online. ¡Haz crecer tu negocio con la plataforma más fácil de implementar!</p>
      <a href="#" className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-800 transition">Registrarse</a>
    </div>
  );
} 