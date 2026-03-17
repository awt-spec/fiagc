import { motion } from "framer-motion";
import { Server, Cpu, HardDrive, MemoryStick, Shield, Cloud, RefreshCw, Lock, Zap, Globe, ArrowUpRight } from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.5 },
};

const BenefitsAndInfra = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container px-6 max-w-5xl">
        <motion.div {...fade} className="text-center mb-14">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--sysde-red))] mb-2">Plataforma</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Arquitectura ON-CLOUD
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            SAF+ opera sobre infraestructura empresarial en Microsoft Azure, garantizando disponibilidad, seguridad y rendimiento.
          </p>
        </motion.div>

        {/* Server specs - visual card */}
        <motion.div
          {...fade}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[hsl(var(--sysde-dark))] to-[hsl(var(--sysde-dark)/0.9)] text-primary-foreground p-8 md:p-10 mb-10"
        >
          {/* Decorative grid */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }} />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center">
                <Server className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Servidor Dedicado</h4>
                <p className="text-sm opacity-60">Microsoft Azure — instancia dedicada para FIAGC</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Cpu, value: "4", unit: "Núcleos", label: "CPU dedicado" },
                { icon: MemoryStick, value: "16", unit: "GB RAM", label: "Memoria" },
                { icon: HardDrive, value: "512", unit: "GB SSD", label: "Almacenamiento" },
                { icon: RefreshCw, value: "3", unit: "Meses", label: "Retención respaldos" },
              ].map((spec, i) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="p-4 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors"
                >
                  <spec.icon className="h-5 w-5 opacity-50 mb-3" />
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-2xl font-extrabold">{spec.value}</span>
                    <span className="text-xs font-medium opacity-60">{spec.unit}</span>
                  </div>
                  <p className="text-xs opacity-50">{spec.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Architecture pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[
            { icon: Shield, title: "Seguridad", desc: "Cifrado en tránsito y reposo. Control de acceso por roles y permisos granulares.", color: "from-[hsl(var(--flow-blue))] to-[hsl(var(--flow-purple))]" },
            { icon: Zap, title: "Rendimiento", desc: "Arquitectura optimizada para transacciones financieras de alta frecuencia.", color: "from-[hsl(var(--flow-orange))] to-[hsl(var(--sysde-red))]" },
            { icon: ArrowUpRight, title: "Escalabilidad", desc: "Crece con FIAGC. Recursos ajustables según demanda sin interrupciones.", color: "from-[hsl(var(--flow-teal))] to-[hsl(var(--flow-green))]" },
            { icon: Globe, title: "Disponibilidad", desc: "Acceso 24/7 desde cualquier ubicación. Sin dependencia de infraestructura local.", color: "from-[hsl(var(--flow-purple))] to-[hsl(var(--flow-blue))]" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative p-5 rounded-2xl border border-border bg-card overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} opacity-60 group-hover:opacity-100 transition-opacity`} />
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3`}>
                <item.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-foreground text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Premisas */}
        <motion.div {...fade} className="p-7 rounded-2xl border border-border bg-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[hsl(var(--flow-blue-light))] flex items-center justify-center">
              <Lock className="h-5 w-5 text-[hsl(var(--flow-blue))]" />
            </div>
            <h4 className="font-bold text-foreground">Premisas de Integración</h4>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Si es necesaria la integración con sistemas de terceros, FIAGC deberá plantearlos para que sean analizados por SYSDE y en común acuerdo definir dicha gestión y su cotización. Se incluye acompañamiento de un consultor para responder consultas una vez implementada la solución.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsAndInfra;
