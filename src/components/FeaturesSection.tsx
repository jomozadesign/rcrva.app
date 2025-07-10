/**
 * FeaturesSection
 * Propósito: Sección de características principales de rcrva.
 * Entrada: Ninguna (por ahora).
 * Salida: JSX.Element con la lista de características.
 * Ejemplo de uso: <FeaturesSection />
 */
export default function FeaturesSection() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full text-center px-4">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Características principales</h2>
      <ul className="grid gap-6 max-w-2xl w-full">
        <li className="bg-white rounded-xl shadow p-6 text-left border-l-4 border-blue-700">
          <span className="font-semibold">Fácil de implementar:</span> Integra rcrva en minutos en cualquier negocio físico.
        </li>
        <li className="bg-white rounded-xl shadow p-6 text-left border-l-4 border-blue-700">
          <span className="font-semibold">Gestión de productos y servicios:</span> Administra lo que ofreces y sus precios desde un panel intuitivo.
        </li>
        <li className="bg-white rounded-xl shadow p-6 text-left border-l-4 border-blue-700">
          <span className="font-semibold">Horarios personalizables:</span> Define y ajusta tus horarios de atención fácilmente.
        </li>
        <li className="bg-white rounded-xl shadow p-6 text-left border-l-4 border-blue-700">
          <span className="font-semibold">Reservas online:</span> Tus clientes pueden reservar desde cualquier lugar, en cualquier momento.
        </li>
        <li className="bg-white rounded-xl shadow p-6 text-left border-l-4 border-blue-700">
          <span className="font-semibold">Panel de control:</span> Visualiza y gestiona todas tus reservaciones en un solo lugar.
        </li>
      </ul>
    </div>
  );
} 