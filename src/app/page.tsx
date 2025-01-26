// app/page.tsx
"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-background text-foreground">
      <motion.h1
        className="text-5xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Bienvenido a Norigal
      </motion.h1>
      <motion.p
        className="text-lg mb-12 text-center max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        En Norigal, transformamos ideas en proyectos de alto impacto. Explora
        nuestro portafolio para conocer más sobre nuestras soluciones
        innovadoras o contáctanos para colaborar.
      </motion.p>
      <motion.div
        className="flex space-x-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <a
          href="/portafolio"
          className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all"
        >
          Ver Portafolio
        </a>
        <a
          href="/contacto"
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-all"
        >
          Contáctanos
        </a>
      </motion.div>
    </div>
  );
}
