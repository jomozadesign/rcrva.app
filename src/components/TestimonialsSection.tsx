/**
 * TestimonialsSection
 * Propósito: Sección de testimonios de negocios ficticios para rcrva.
 * Entrada: Ninguna (por ahora).
 * Salida: JSX.Element con testimonios.
 * Ejemplo de uso: <TestimonialsSection />
 */
export default function TestimonialsSection() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full text-center px-4">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Testimonios</h2>
      <div className="flex flex-col md:flex-row gap-8 max-w-4xl w-full justify-center items-center">
        <div className="bg-white rounded-xl shadow p-6 max-w-xs border-l-4 border-green-400">
          <p className="mb-4 text-gray-700">“Desde que usamos rcrva, nuestros clientes reservan más fácil y nuestro equipo ahorra tiempo cada semana.”</p>
          <span className="font-semibold text-blue-700">Spa Relax Total</span>
        </div>
        <div className="bg-white rounded-xl shadow p-6 max-w-xs border-l-4 border-green-400">
          <p className="mb-4 text-gray-700">“La gestión de horarios y productos es súper intuitiva. ¡Recomendado para cualquier negocio físico!”</p>
          <span className="font-semibold text-blue-700">Restaurante El Sabor</span>
        </div>
        <div className="bg-white rounded-xl shadow p-6 max-w-xs border-l-4 border-green-400">
          <p className="mb-4 text-gray-700">“Ahora mis pacientes pueden reservar consulta online y yo administro todo desde mi celular.”</p>
          <span className="font-semibold text-blue-700">Consultorio Vida Sana</span>
        </div>
      </div>
    </div>
  );
} 