import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  CreditCard, Users, Building2,
  Shield, Settings2,
  Code2, Globe, MonitorSmartphone, Puzzle,
  FileText, Send, Database, Lock, BarChart3, Link2, Workflow,
  ChevronRight, Terminal, Braces,
} from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.5, delay },
});

const modules = [
  { id: "parametros", label: "Parámetros y Seguridad", icon: Shield, color: "sysde-red", number: "01" },
  { id: "clientes", label: "Clientes", icon: Users, color: "flow-purple", number: "02" },
  { id: "bancos", label: "Bancos y Contabilidad", icon: Building2, color: "flow-green", number: "03" },
  { id: "prestamos", label: "Préstamos Individuales y Microcrédito", icon: CreditCard, color: "flow-blue", number: "04" },
];

const integrations = [
  { icon: Code2, title: "API REST", desc: "Endpoints seguros para clientes, préstamos, cuentas, contabilidad y parámetros.", category: "plataforma", color: "flow-blue" },
  { icon: Globe, title: "100% Web", desc: "Acceso desde cualquier navegador sin instalación. Responsive y adaptable.", category: "plataforma", color: "flow-teal" },
  { icon: Workflow, title: "Webhooks & Eventos", desc: "Notificaciones en tiempo real ante eventos del sistema para automatizaciones.", category: "plataforma", color: "flow-blue" },
  { icon: Database, title: "Migración de Datos", desc: "Herramientas para importación masiva desde sistemas legacy.", category: "plataforma", color: "flow-purple" },
  { icon: MonitorSmartphone, title: "Apps Móviles", desc: "Pagos de créditos, consultas de saldos y notificaciones push.", category: "canales", color: "flow-orange" },
  { icon: Send, title: "Notificaciones", desc: "Alertas por correo electrónico, SMS, WhatsApp y Telegram a clientes y usuarios internos.", category: "canales", color: "sysde-red" },
  { icon: Puzzle, title: "Buró de Crédito", desc: "Consulta y reporte automático para análisis de riesgo crediticio.", category: "integraciones", color: "flow-purple" },
  { icon: Lock, title: "KYC / AML", desc: "Validación de identidad y prevención de lavado de activos.", category: "integraciones", color: "flow-orange" },
  { icon: FileText, title: "Reportes Regulatorios", desc: "Generación automática para entes reguladores y auditorías.", category: "integraciones", color: "flow-green" },
  { icon: Link2, title: "Pasarelas de Pago", desc: "Integración con procesadores y pasarelas para cobros en línea.", category: "integraciones", color: "flow-green" },
  { icon: BarChart3, title: "Business Intelligence", desc: "Extracción de datos para Power BI, Tableau y dashboards.", category: "integraciones", color: "flow-teal" },
  { icon: Settings2, title: "Otros", desc: "Integraciones adicionales según necesidades específicas de FIACG. Sujetas a análisis y cotización.", category: "integraciones", color: "sysde-blue" },
];

const categories = [
  { id: "all", label: "Todos" },
  { id: "plataforma", label: "Plataforma" },
  { id: "canales", label: "Canales" },
  { id: "integraciones", label: "Integraciones" },
];

const IntegrationsHub = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const filtered = activeCategory === "all"
    ? integrations
    : integrations.filter((i) => i.category === activeCategory || i.title === "Otros");

  return (
    <motion.div {...fade(0.2)} className="relative">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Terminal className="h-4 w-4 text-[hsl(var(--flow-blue))]" />
            <span className="text-xs font-mono text-[hsl(var(--flow-blue))] tracking-wider uppercase">api.saf+.fiacg</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">APIs e Integraciones</h3>
          <p className="text-sm text-muted-foreground mt-1 max-w-lg">
            Todos los endpoints necesarios incluidos en la suscripción.
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              whileTap={{ scale: 0.95 }}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${
                activeCategory === cat.id
                  ? "bg-[hsl(var(--sysde-dark))] text-primary-foreground border-transparent"
                  : "bg-card text-muted-foreground border-border hover:border-foreground/30 hover:text-foreground"
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((item, i) => (
            <motion.div
              key={item.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group relative rounded-xl border border-border bg-card p-4 cursor-default overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <motion.div
                className={`absolute top-0 left-0 h-[2px] bg-[hsl(var(--${item.color}))]`}
                initial={{ width: "0%" }}
                animate={{ width: hoveredIdx === i ? "100%" : "0%" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
              <div className="flex items-start gap-3">
                <div className={`w-9 h-9 rounded-lg bg-[hsl(var(--${item.color})/0.1)] border border-[hsl(var(--${item.color})/0.2)] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`h-4 w-4 text-[hsl(var(--${item.color}))]`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                    <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/0 group-hover:text-muted-foreground transition-all duration-300 group-hover:translate-x-0 -translate-x-1" />
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-1.5">
                <Braces className="h-3 w-3 text-muted-foreground/40" />
                <span className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">{item.category}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

/* ─── Main Section ─── */

const ModulesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container px-6 max-w-5xl">
        {/* Header */}
        <motion.div {...fade()} className="mb-14">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--sysde-red))] mb-2">Alcance</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Módulos a Rentar
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Los módulos a ser implementados en FIACG de la solución SYSDE SAF+, son los que a continuación se detallan.
          </p>
        </motion.div>

        {/* Modules - Clean title-only cards */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[hsl(var(--sysde-red))] text-primary-foreground text-sm font-bold shadow-lg">
              <Shield className="h-4 w-4" />
              SAF+ — Módulos Incluidos
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {modules.map((mod, i) => (
              <motion.div
                key={mod.id}
                {...fade(i * 0.1)}
                className="group relative rounded-2xl border-2 border-border bg-card overflow-hidden hover:shadow-xl transition-all duration-500"
              >
                {/* Color accent bar */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-[hsl(var(--${mod.color}))]`} />

                <div className="p-6 flex items-center gap-5">
                  {/* Number */}
                  <span className={`text-4xl font-black text-[hsl(var(--${mod.color})/0.15)] select-none leading-none`}>
                    {mod.number}
                  </span>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-[hsl(var(--${mod.color})/0.1)] border border-[hsl(var(--${mod.color})/0.25)] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <mod.icon className={`h-5 w-5 text-[hsl(var(--${mod.color}))]`} />
                  </div>

                  {/* Title */}
                  <h4 className="text-base md:text-lg font-bold text-foreground leading-tight">
                    {mod.label}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* APIs Section */}
        <IntegrationsHub />
      </div>
    </section>
  );
};

export default ModulesSection;
