/**
 * PlansSection
 * Propósito: Sección de planes y precios de rcrva.
 * Entrada: Ninguna (por ahora).
 * Salida: JSX.Element con la tabla de planes y CTA.
 * Ejemplo de uso: <PlansSection />
 */
export default function PlansSection() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full text-center px-4">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Planes y precios</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full max-w-4xl">
        <div className="bg-white rounded-xl shadow p-8 border-2 border-blue-200 flex-1 min-w-[260px]">
          <h3 className="text-xl font-semibold mb-2">Plan Básico</h3>
          <p className="text-3xl font-bold text-blue-700 mb-4">Gratis</p>
          <ul className="text-left mb-6">
            <li>✔️ Hasta 1 negocio</li>
            <li>✔️ Gestión de productos y horarios</li>
            <li>✔️ Reservas ilimitadas</li>
            <li>✔️ Soporte por email</li>
          </ul>
          <a href="#" className="bg-blue-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-800 transition">Registrarse</a>
        </div>
        <div className="bg-white rounded-xl shadow p-8 border-4 border-blue-700 flex-1 min-w-[260px] scale-105">
          <h3 className="text-xl font-semibold mb-2">Plan Pro</h3>
          <p className="text-3xl font-bold text-blue-700 mb-4">$299<span className="text-base font-normal">/mes</span></p>
          <ul className="text-left mb-6">
            <li>✔️ Negocios ilimitados</li>
            <li>✔️ Personalización avanzada</li>
            <li>✔️ Integración con pagos</li>
            <li>✔️ Soporte prioritario</li>
          </ul>
          <a href="#" className="bg-blue-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-800 transition">Registrarse</a>
        </div>
      </div>
    </div>
  );
} 