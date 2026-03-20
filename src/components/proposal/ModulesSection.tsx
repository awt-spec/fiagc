import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  CreditCard, Users, Landmark, Wallet, Building2, BookOpen,
  Shield, ArrowDown, Settings2, X, ArrowLeft,
  RefreshCw, DollarSign, Receipt, Banknote,
  FolderSearch, Code2, Globe, MonitorSmartphone, Puzzle,
  FileText, Send, Database, Lock, BarChart3, Smartphone, Link2, Workflow,
  ChevronRight, Terminal, Braces,
} from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.5, delay },
});

const FlowArrow = () => (
  <div className="flex justify-center py-2">
    <ArrowDown className="h-5 w-5 text-muted-foreground/40" />
  </div>
);

const FlowCard = ({
  children,
  color = "blue",
  className = "",
}: {
  children: React.ReactNode;
  color?: "blue" | "purple" | "green" | "orange" | "teal" | "neutral";
  className?: string;
}) => {
  const colorMap = {
    blue: "border-[hsl(var(--flow-blue)/0.3)] bg-[hsl(var(--flow-blue-light))]",
    purple: "border-[hsl(var(--flow-purple)/0.3)] bg-[hsl(var(--flow-purple-light))]",
    green: "border-[hsl(var(--flow-green)/0.3)] bg-[hsl(var(--flow-green-light))]",
    orange: "border-[hsl(var(--flow-orange)/0.3)] bg-[hsl(var(--flow-orange-light))]",
    teal: "border-[hsl(var(--flow-teal)/0.3)] bg-[hsl(var(--flow-teal-light))]",
    neutral: "border-border bg-card",
  };
  return (
    <div className={`rounded-xl border-2 p-5 ${colorMap[color]} ${className}`}>
      {children}
    </div>
  );
};

const BadgeTag = ({ label, color }: { label: string; color: string }) => (
  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground ${color}`}>
    <DollarSign className="h-3 w-3" />
    {label}
  </span>
);

const modules = [
  {
    id: "parametros",
    label: "Parámetros y Seguridad",
    icon: Shield,
    summary: "Configuración de parámetros generales del sistema, políticas de seguridad, gestión de usuarios, roles y permisos de acceso.",
    content: () => (
      <div className="max-w-xl mx-auto">
        <h4 className="text-xl font-bold text-foreground text-center mb-1">Parámetros y Seguridad</h4>
        <div className="flex items-center justify-center gap-2 mb-8">
          <BadgeTag label="Core Financiero" color="bg-[hsl(var(--sysde-red))]" />
        </div>
        <FlowCard color="orange">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="h-5 w-5 text-[hsl(var(--flow-orange))]" />
            <span className="font-bold text-sm text-foreground">Administración del Sistema</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {["Usuarios y roles", "Permisos granulares", "Políticas de negocio", "Parámetros generales", "Auditoría de accesos", "Configuración global"].map((t) => (
              <span key={t} className="bg-card border border-border rounded-lg px-2 py-1.5 text-center text-muted-foreground">{t}</span>
            ))}
          </div>
        </FlowCard>
      </div>
    ),
  },
  {
    id: "clientes",
    label: "Clientes",
    icon: Users,
    summary: "Gestión centralizada de personas físicas y jurídicas. Información consolidada del cliente con documentación digital y asignación de cliente único.",
    content: () => (
      <div className="max-w-xl mx-auto">
        <h4 className="text-xl font-bold text-foreground text-center mb-1">Módulo de Clientes</h4>
        <div className="flex items-center justify-center gap-2 mb-8">
          <BadgeTag label="Core Financiero" color="bg-[hsl(var(--flow-purple))]" />
        </div>
        <FlowCard color="purple">
          <div className="flex items-center gap-2 mb-3">
            <Users className="h-5 w-5 text-[hsl(var(--flow-purple))]" />
            <span className="font-bold text-sm text-foreground">Gestión de Clientes</span>
          </div>
          <p className="text-xs text-muted-foreground mb-3">
            Administración de personas físicas y jurídicas. Información centralizada utilizada por todas las aplicaciones del sistema.
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {["Personas físicas", "Personas jurídicas", "Cliente único", "Documentos digitales", "Actividad económica", "Convenios nómina"].map((t) => (
              <span key={t} className="bg-card border border-border rounded-lg px-2 py-1.5 text-center text-muted-foreground">{t}</span>
            ))}
          </div>
        </FlowCard>
        <FlowArrow />
        <FlowCard color="blue">
          <div className="flex items-center gap-2 mb-3">
            <FolderSearch className="h-5 w-5 text-[hsl(var(--flow-blue))]" />
            <span className="font-bold text-sm text-foreground">Información Consolidada</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Acceso fácil a datos clave del cliente para análisis y desarrollo de estrategias sólidas.
          </p>
        </FlowCard>
      </div>
    ),
  },
  {
    id: "bancos",
    label: "Bancos y Contabilidad",
    icon: Building2,
    summary: "Administración de cuentas bancarias, registro contable automático, estados financieros, catálogo contable y control de tesorería.",
    content: () => (
      <div className="max-w-xl mx-auto">
        <h4 className="text-xl font-bold text-foreground text-center mb-1">Bancos y Contabilidad</h4>
        <div className="flex items-center justify-center gap-2 mb-8">
          <BadgeTag label="Core Financiero" color="bg-[hsl(var(--flow-green))]" />
        </div>
        <FlowCard color="blue">
          <div className="flex items-center gap-2 mb-3">
            <Building2 className="h-5 w-5 text-[hsl(var(--flow-blue))]" />
            <span className="font-bold text-sm text-foreground">Administración Bancaria</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {["Cuentas centralizadas", "Emisión de cheques", "Transferencias", "Control ingresos/egresos", "Saldos de cuentas", "Diarios e históricos"].map((t) => (
              <span key={t} className="bg-card border border-border rounded-lg px-2 py-1.5 text-center text-muted-foreground">{t}</span>
            ))}
          </div>
        </FlowCard>
        <FlowArrow />
        <FlowCard color="green">
          <div className="flex items-center gap-2 mb-3">
            <Landmark className="h-5 w-5 text-[hsl(var(--flow-green))]" />
            <span className="font-bold text-sm text-foreground">Contabilidad General</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {["Catálogo contable", "Estados financieros", "Asientos automáticos", "Asientos manuales", "Envío a terceros", "Consultas y saldos"].map((t) => (
              <span key={t} className="bg-card border border-border rounded-lg px-2 py-1.5 text-center text-muted-foreground">{t}</span>
            ))}
          </div>
        </FlowCard>
      </div>
    ),
  },
  {
    id: "prestamos",
    label: "Préstamos Individuales y Microcrédito",
    icon: CreditCard,
    summary: "Administración completa de créditos individuales y microcrédito: desembolsos, refinanciamientos, recuperación y cobranza.",
    content: () => (
      <div className="max-w-xl mx-auto">
        <h4 className="text-xl font-bold text-foreground text-center mb-1">Préstamos Individuales y Microcrédito</h4>
        <div className="flex items-center justify-center gap-2 mb-8">
          <BadgeTag label="Core Financiero" color="bg-[hsl(var(--flow-blue))]" />
        </div>
        <FlowCard color="blue">
          <div className="flex items-center gap-2 mb-3">
            <CreditCard className="h-5 w-5 text-[hsl(var(--flow-blue))]" />
            <span className="font-bold text-sm text-foreground">Tipos de Crédito</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {["Individual", "Microcrédito", "Consumo", "Comercial", "Nómina", "Líneas de crédito"].map((t) => (
              <span key={t} className="bg-card border border-border rounded-lg px-2 py-1.5 text-center text-muted-foreground">{t}</span>
            ))}
          </div>
        </FlowCard>
        <FlowArrow />
        <FlowCard color="purple">
          <div className="flex items-center gap-2 mb-3">
            <Settings2 className="h-5 w-5 text-[hsl(var(--flow-purple))]" />
            <span className="font-bold text-sm text-foreground">Configuración</span>
          </div>
          <div className="space-y-1.5">
            {["Tipo de crédito y variables financieras", "Rubros y componentes de cuota", "Configuración contable por rubro", "IVA sobre intereses reales"].map((s) => (
              <div key={s} className="flex items-center text-xs px-3 py-2 rounded-lg border border-[hsl(var(--flow-purple)/0.3)] bg-[hsl(var(--flow-purple-light))]">
                <span className="text-foreground font-medium">{s}</span>
              </div>
            ))}
          </div>
        </FlowCard>
        <FlowArrow />
        <FlowCard color="green">
          <div className="flex items-center gap-2 mb-3">
            <Banknote className="h-5 w-5 text-[hsl(var(--flow-green))]" />
            <span className="font-bold text-sm text-foreground">Recuperación de Créditos</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {["Carga masiva de pagos", "Pagos con fecha valor", "Saldo a favor", "Cobranza", "Pago de nómina", "Refinanciamientos"].map((t) => (
              <span key={t} className="bg-card border border-border rounded-lg px-2 py-1.5 text-center text-muted-foreground">{t}</span>
            ))}
          </div>
        </FlowCard>
      </div>
    ),
  },
];

const integrations = [
  { icon: Code2, title: "API REST", desc: "Endpoints seguros para clientes, préstamos, cuentas, contabilidad y parámetros.", category: "plataforma", color: "flow-blue" },
  { icon: Globe, title: "100% Web", desc: "Acceso desde cualquier navegador sin instalación. Responsive y adaptable.", category: "plataforma", color: "flow-teal" },
  { icon: Workflow, title: "Webhooks & Eventos", desc: "Notificaciones en tiempo real ante eventos del sistema para automatizaciones.", category: "plataforma", color: "flow-blue" },
  { icon: Database, title: "Migración de Datos", desc: "Herramientas para importación masiva desde sistemas legacy.", category: "plataforma", color: "flow-purple" },
  { icon: MonitorSmartphone, title: "Apps Móviles", desc: "Pagos de créditos, consultas de saldos y notificaciones push.", category: "canales", color: "flow-orange" },
  
  { icon: Send, title: "Notificaciones", desc: "Alertas por correo electrónico y SMS a clientes y usuarios internos.", category: "canales", color: "sysde-red" },
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
      {/* Header with tech accent */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Terminal className="h-4 w-4 text-[hsl(var(--flow-blue))]" />
            <span className="text-xs font-mono text-[hsl(var(--flow-blue))] tracking-wider uppercase">api.saf+.fiagc</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">APIs e Integraciones</h3>
          <p className="text-sm text-muted-foreground mt-1 max-w-lg">
            Todos los endpoints necesarios incluidos en la suscripción.
          </p>
        </div>

        {/* Category filter pills */}
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

      {/* Interactive grid */}
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
              className="group relative rounded-xl border border-border bg-card p-4 cursor-default overflow-hidden transition-all duration-300 hover:border-[hsl(var(--${item.color})/0.5)] hover:shadow-lg"
            >
              {/* Animated gradient line */}
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

              {/* Category badge */}
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
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container px-6 max-w-5xl">
        <AnimatePresence mode="wait">
          {selectedModule ? (
            <motion.div
              key="detail"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-center mb-8">
                <motion.button
                  onClick={() => setSelectedModule(null)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowLeft className="h-4 w-4" />
                  Volver a módulos
                </motion.button>
              </div>
              {modules.find((m) => m.id === selectedModule)?.content()}
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
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

              {/* Alcance Hub - Professional structured layout */}
              <div className="mb-16 space-y-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="flex justify-center mb-2"
                >
                  <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[hsl(var(--sysde-red))] text-primary-foreground text-sm font-bold shadow-lg">
                    <Shield className="h-4 w-4" />
                    SAF+ — Módulos Incluidos
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* 1. Parámetros y Seguridad */}
                  <motion.div
                    {...fade(0)}
                    className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedModule("parametros")}
                  >
                    <div className="bg-[hsl(var(--sysde-red))] px-5 py-3 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                        <Shield className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <h4 className="font-bold text-primary-foreground uppercase tracking-wide text-sm">1. Parámetros y Seguridad</h4>
                    </div>
                    <div className="p-5 space-y-2">
                      {["Usuarios y roles", "Permisos granulares", "Políticas de negocio", "Parámetros generales"].map((item, i) => (
                        <div key={item} className="flex items-center gap-3 py-2 px-3 rounded-lg bg-muted/50 border border-border/50 group-hover:border-[hsl(var(--sysde-red)/0.2)] transition-colors">
                          <span className="text-sm text-foreground font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* 2. Clientes */}
                  <motion.div
                    {...fade(0.1)}
                    className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedModule("clientes")}
                  >
                    <div className="bg-[hsl(var(--flow-purple))] px-5 py-3 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                        <Users className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <h4 className="font-bold text-primary-foreground uppercase tracking-wide text-sm">2. Clientes</h4>
                    </div>
                    <div className="p-5 space-y-2">
                      {["Personas físicas y jurídicas", "Cliente único", "Documentos digitales", "Información consolidada"].map((item, i) => (
                        <div key={item} className="flex items-center gap-3 py-2 px-3 rounded-lg bg-muted/50 border border-border/50 group-hover:border-[hsl(var(--flow-purple)/0.2)] transition-colors">
                          <span className="text-sm text-foreground font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* 3. Bancos y Contabilidad */}
                  <motion.div
                    {...fade(0.2)}
                    className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedModule("bancos")}
                  >
                    <div className="bg-[hsl(var(--flow-green))] px-5 py-3 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                        <Building2 className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <h4 className="font-bold text-primary-foreground uppercase tracking-wide text-sm">3. Bancos y Contabilidad</h4>
                    </div>
                    <div className="p-5 space-y-2">
                      {["Administración bancaria", "Contabilidad general", "Estados financieros", "Catálogo contable"].map((item, i) => (
                        <div key={item} className="flex items-center gap-3 py-2 px-3 rounded-lg bg-muted/50 border border-border/50 group-hover:border-[hsl(var(--flow-green)/0.2)] transition-colors">
                          <span className="text-sm text-foreground font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* 4. Préstamos Individuales y Microcrédito */}
                  <motion.div
                    {...fade(0.3)}
                    className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedModule("prestamos")}
                  >
                    <div className="bg-[hsl(var(--flow-blue))] px-5 py-3 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                        <CreditCard className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <h4 className="font-bold text-primary-foreground uppercase tracking-wide text-sm">4. Préstamos Individuales y Microcrédito</h4>
                    </div>
                    <div className="p-5 space-y-2">
                      {["Créditos individuales", "Microcrédito", "Desembolsos", "Recuperación y cobranza"].map((item, i) => (
                        <div key={item} className="flex items-center gap-3 py-2 px-3 rounded-lg bg-muted/50 border border-border/50 group-hover:border-[hsl(var(--flow-blue)/0.2)] transition-colors">
                          <span className="text-sm text-foreground font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* APIs Section - Interactive Tech Style */}
              <IntegrationsHub />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ModulesSection;
