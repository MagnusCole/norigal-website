// ContactSection.tsx
export default function ContactSection() {
    return (
      <section id="contacto" className="p-8 ">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-mono font-semibold mb-4">¿Hablemos?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Si tienes una idea o proyecto en mente, contáctanos. Respetamos tu tiempo.
          </p>
          <form
            action="https://formspree.io/f/mqaepzej" // Reemplaza con tu URL
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Tu nombre (opcional)"
              className="w-full p-2 bg-transparent border-b border-gray-300 focus:outline-none focus:border-cyan-500 dark:border-gray-700 dark:focus:border-cyan-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Tu correo"
              required
              className="w-full p-2 bg-transparent border-b border-gray-300 focus:outline-none focus:border-cyan-500 dark:border-gray-700 dark:focus:border-cyan-400"
            />
            <textarea
              name="message"
              rows={3}
              placeholder="Tu mensaje"
              required
              className="w-full p-2 bg-transparent border-b border-gray-300 focus:outline-none focus:border-cyan-500 dark:border-gray-700 dark:focus:border-cyan-400"
            ></textarea>
            <button
              type="submit"
              className="w-full text-center text-cyan-500 hover:text-white border border-cyan-500 px-4 py-2 rounded-full hover:bg-cyan-500 transition-colors"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>
    );
  }
  