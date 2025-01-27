// CommunitySection.tsx (actualizado)
export default function CommunitySection() {
    return (
      <section id="comunidad" className="p-8 ">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-mono font-semibold mb-6">Comunidad & Recursos</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Accede a un espacio donde emprendedores y expertos comparten ideas, fracasos y aprendizajes sobre cómo la tecnología impulsa negocios.
          </p>
          <div className="space-y-4">
            <div className="border p-4  rounded-lg">
              <h3 className="text-cyan-500 font-mono">Talleres en Vivo</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Participa en sesiones online donde resolvemos desafíos reales: automatización, ventas digitales y más.
              </p>
            </div>
            <div className="border p-4  rounded-lg">
              <h3 className="text-cyan-500 font-mono">Recursos Gratis</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Plantillas, guías y ejemplos de implementación tecnológica para todo tipo de empresa.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  