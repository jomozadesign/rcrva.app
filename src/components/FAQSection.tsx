/**
 * FAQSection
 * Propósito: Sección de preguntas frecuentes para rcrva.
 * Entrada: Ninguna (por ahora).
 * Salida: JSX.Element con preguntas y respuestas frecuentes.
 * Ejemplo de uso: <FAQSection />
 */
export default function FAQSection() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full text-center px-4">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Preguntas frecuentes</h2>
      <div className="max-w-2xl w-full mx-auto text-left grid gap-6">
        <div>
          <h3 className="font-semibold text-blue-700">¿Qué tipo de negocios pueden usar rcrva?</h3>
          <p>Todo negocio físico que requiera gestionar reservaciones: spas, restaurantes, consultorios, salones, etc.</p>
        </div>
        <div>
          <h3 className="font-semibold text-blue-700">¿Es difícil de implementar?</h3>
          <p>No, puedes empezar a usar rcrva en minutos, sin conocimientos técnicos avanzados.</p>
        </div>
        <div>
          <h3 className="font-semibold text-blue-700">¿Puedo gestionar varios negocios?</h3>
          <p>Sí, con el plan Pro puedes gestionar múltiples negocios desde una sola cuenta.</p>
        </div>
        <div>
          <h3 className="font-semibold text-blue-700">¿Mis clientes necesitan instalar algo?</h3>
          <p>No, tus clientes reservan directamente desde la web, sin descargas ni registros complicados.</p>
        </div>
        <div>
          <h3 className="font-semibold text-blue-700">¿Qué métodos de pago aceptan?</h3>
          <p>Próximamente podrás aceptar pagos online con Stripe en el plan Pro.</p>
        </div>
      </div>
    </div>
  );
} 