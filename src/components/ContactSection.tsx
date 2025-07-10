/**
 * ContactSection
 * Propósito: Sección de contacto para rcrva.
 * Entrada: Ninguna (por ahora).
 * Salida: JSX.Element con formulario o datos de contacto.
 * Ejemplo de uso: <ContactSection />
 */
export default function ContactSection() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full text-center px-4">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Contacto</h2>
      <p className="mb-6 text-gray-700">¿Tienes dudas o quieres saber más? Escríbenos y te responderemos pronto.</p>
      <form className="max-w-md w-full mx-auto grid gap-4">
        <input type="text" placeholder="Nombre" className="border rounded px-4 py-2 w-full" required />
        <input type="email" placeholder="Correo electrónico" className="border rounded px-4 py-2 w-full" required />
        <textarea placeholder="Mensaje" className="border rounded px-4 py-2 w-full" rows={4} required />
        <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-800 transition">Enviar mensaje</button>
      </form>
      <div className="mt-8 text-gray-500 text-sm">O escríbenos a <a href="mailto:info@rcrva.com" className="underline text-blue-700">info@rcrva.com</a></div>
    </div>
  );
} 