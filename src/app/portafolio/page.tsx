// app/portafolio/page.tsx
"use client";

import { motion } from "framer-motion";
import ProjectGrid from "@/app/components/ProjectGrid";

const projects = [
  { title: "Proyecto A", description: "Solución de software innovadora para empresas tecnológicas." },
  { title: "Proyecto B", description: "Plataforma de inteligencia artificial para optimizar procesos industriales." },
  { title: "Proyecto C", description: "Aplicación móvil para la gestión eficiente de equipos remotos." },
];

export default function PortafolioPage() {
  return (
    <div className="min-h-screen p-8 bg-background text-foreground">
      <motion.h1
        className="text-5xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Portafolio
      </motion.h1>
      <motion.p
        className="text-lg mb-12 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Descubre algunos de nuestros proyectos más destacados. En Norigal, llevamos innovación y resultados a cada solución.
      </motion.p>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }}
      >
        <ProjectGrid projects={projects} />
      </motion.div>
    </div>
  );
}
