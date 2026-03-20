import { motion } from "framer-motion";

const EmbedSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/40">
      <div className="container px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--sysde-red))] mb-2">
            Mapa Funcional
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
            Plataforma en acción
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore una demostración interactiva de las capacidades del sistema.
          </p>
        </motion.div>

        {/* Embed container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl border border-border bg-card shadow-xl overflow-hidden"
        >
          {/* Browser-style top bar */}
          <div className="flex items-center gap-3 px-5 py-3 bg-muted/60 border-b border-border">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-destructive/60" />
              <span className="w-3 h-3 rounded-full bg-[hsl(var(--flow-orange))]/60" />
              <span className="w-3 h-3 rounded-full bg-[hsl(var(--flow-green))]/60" />
            </div>
            <div className="flex-1 flex justify-center">
              <span className="text-xs text-muted-foreground font-mono">
                SAF+ — Demo Interactiva
              </span>
            </div>
          </div>

          {/* Iframe */}
          <iframe
            src="https://learn-pages-spark.lovable.app"
            className="w-full border-0"
            style={{ height: "80vh" }}
            title="Demo interactiva"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
            sandbox="allow-scripts allow-same-origin allow-popups"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default EmbedSection;
