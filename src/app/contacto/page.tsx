// app/contacto/page.tsx
"use client";

import { motion } from "framer-motion";

export default function ContactoPage() {
  return (
    <div className="min-h-screen p-8 bg-background text-foreground">
      <motion.h1
        className="text-5xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contáctanos
      </motion.h1>
      <motion.p
        className="text-lg mb-12 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Si tienes preguntas, deseas colaborar o simplemente quieres conocernos mejor, completa el formulario o utiliza los enlaces directos.
      </motion.p>
      <motion.form
        className="max-w-xl mx-auto space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <label htmlFor="name" className="block text-sm font-medium">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            className="w-full mt-1 p-2 border border-gray-700 rounded bg-background text-foreground"
            placeholder="Tu nombre"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <label htmlFor="email" className="block text-sm font-medium">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            className="w-full mt-1 p-2 border border-gray-700 rounded bg-background text-foreground"
            placeholder="tu@email.com"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <label htmlFor="message" className="block text-sm font-medium">
            Mensaje
          </label>
          <textarea
            id="message"
            className="w-full mt-1 p-2 border border-gray-700 rounded bg-background text-foreground"
            rows={4}
            placeholder="Escribe tu mensaje aquí"
          />
        </motion.div>
        <motion.button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all"
          whileHover={{ scale: 1.05 }}
        >
          Enviar
        </motion.button>
      </motion.form>
    </div>
  );
}
