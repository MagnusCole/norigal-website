// app/components/ProjectGrid.tsx
import { motion } from "framer-motion";

export default function ProjectGrid({ projects }: { projects: { title: string; description: string }[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="p-4 border border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-background text-foreground"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p className="text-gray-400">{project.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
