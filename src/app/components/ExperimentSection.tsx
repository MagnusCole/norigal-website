// ExperimentSection.tsx (actualizado)
export default function ExperimentSection() {
    return (
      <section id="experimentos" className="p-8 ">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-mono font-semibold mb-6">Experimento Actual</h2>
          <div className="space-y-4 font-mono">
            <div className="border-l-4 border-cyan-500 pl-4">
              <h3 className="text-lg">Objetivo:</h3>
              <p>
                Automatizar completamente la facturación electrónica SUNAT con Scripts + IA reduciendo al 99% la intervención humana.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="border p-4 rounded-lg bg-white dark:bg-gray-800">
                <h3 className="text-cyan-500">Progreso:</h3>
                <p>Día 15/30 · Script completo + Integración de IA Parcial</p>
              </div>
              <div className="border p-4 rounded-lg bg-white dark:bg-gray-800">
                <h3 className="text-cyan-500">Resultado:</h3>
                <p>Menos intervención humana en el proceso de generación de facturas electrónicas.</p>
              </div>
            </div>
            <a 
              href="[LINK_GOOGLE_SHEETS]" 
              className="inline-block border border-cyan-500 text-cyan-500 px-4 py-2 rounded hover:bg-cyan-500 hover:text-white transition-all"
            >
              Ver datos vivos →
            </a>
          </div>
        </div>
      </section>
    );
  }
  