import { motion } from "framer-motion";
import { Server, Cpu, HardDrive, MemoryStick, Shield, RefreshCw, Lock, Zap, Globe, ArrowUpRight, Cloud, CheckCircle2 } from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.5 },
};

const specs = [
  { icon: Cpu, value: "4", unit: "Núcleos", label: "CPU dedicado" },
  { icon: MemoryStick, value: "16", unit: "GB RAM", label: "Memoria" },
  { icon: HardDrive, value: "512", unit: "GB SSD", label: "Almacenamiento" },
  { icon: RefreshCw, value: "3", unit: "Meses", label: "Retención respaldos" },
];

const pillars = [
  { icon: Shield, title: "Seguridad", items: ["Cifrado en tránsito y reposo", "Control de acceso por roles", "Permisos granulares"], color: "flow-blue" },
  { icon: Zap, title: "Rendimiento", items: ["Transacciones de alta frecuencia", "Procesamiento optimizado", "Latencia mínima"], color: "flow-orange" },
  { icon: ArrowUpRight, title: "Escalabilidad", items: ["Recursos ajustables", "Sin interrupciones", "Crece con FIAGC"], color: "flow-teal" },
  { icon: Globe, title: "Disponibilidad", items: ["Acceso 24/7", "Sin infraestructura local", "Cualquier ubicación"], color: "flow-green" },
];

const BenefitsAndInfra = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-6 max-w-5xl">
        {/* Header */}
        <motion.div {...fade} className="text-center mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--sysde-red))] mb-2">Infraestructura</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Cloud dedicado en Azure
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            SAF+ opera sobre un servidor exclusivo para FIAGC en Microsoft Azure con respaldo, seguridad y rendimiento empresarial.
          </p>
        </motion.div>

        {/* Two-column layout: specs + pillars */}
        <div className="grid lg:grid-cols-5 gap-6 mb-10">
          {/* Server card - takes 2 cols */}
          <motion.div
            {...fade}
            className="lg:col-span-2 rounded-2xl overflow-hidden bg-[hsl(var(--sysde-dark))] text-primary-foreground p-7 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center">
                  <Server className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Servidor Dedicado</h4>
                  <p className="text-xs opacity-50">Microsoft Azure</p>
                </div>
              </div>

              <div className="space-y-3">
                {specs.map((spec, i) => (
                  <motion.div
                    key={spec.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10"
                  >
                    <spec.icon className="h-4 w-4 opacity-50 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs opacity-50">{spec.label}</p>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg font-extrabold">{spec.value}</span>
                      <span className="text-[10px] font-medium opacity-50">{spec.unit}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-primary-foreground/10 flex items-center gap-2">
              <Cloud className="h-4 w-4 opacity-40" />
              <span className="text-xs opacity-40">Instancia exclusiva FIAGC</span>
            </div>
          </motion.div>

          {/* Pillars grid - takes 3 cols */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {pillars.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group p-5 rounded-2xl border border-border bg-card hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className={`w-9 h-9 rounded-xl bg-[hsl(var(--${item.color}-light))] flex items-center justify-center mb-3`}>
                  <item.icon className={`h-4.5 w-4.5 text-[hsl(var(--${item.color}))]`} />
                </div>
                <h4 className="font-bold text-foreground text-sm mb-3">{item.title}</h4>
                <ul className="space-y-1.5">
                  {item.items.map((text) => (
                    <li key={text} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[hsl(var(--flow-green))] shrink-0 mt-0.5" />
                      {text}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Integration premise */}
        <motion.div {...fade} className="p-6 rounded-2xl border border-border bg-muted/50 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[hsl(var(--flow-blue-light))] flex items-center justify-center shrink-0">
            <Lock className="h-5 w-5 text-[hsl(var(--flow-blue))]" />
          </div>
          <div>
            <h4 className="font-bold text-foreground text-sm mb-1">Premisas de Integración</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Si es necesaria la integración con sistemas de terceros, FIAGC deberá plantearlos para que sean analizados por SYSDE y en común acuerdo definir dicha gestión y su cotización. Se incluye acompañamiento de un consultor para responder consultas una vez implementada la solución.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsAndInfra;
