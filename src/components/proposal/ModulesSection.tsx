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
    id: "prestamos",
    label: "Módulo de Préstamos",
    icon: CreditCard,
    summary: "Administración completa de créditos: consumo, comercial, hipotecario, nómina, puente y retail. Con manejo de desembolsos, refinanciamientos y recuperación.",
    content: () => (
      <div className="max-w-xl mx-auto">
        <h4 className="text-xl font-bold text-foreground text-center mb-1">Módulo de Préstamos</h4>
        <div className="flex items-center justify-center gap-2 mb-8">
          <BadgeTag label="Core Financiero" color="bg-[hsl(var(--flow-blue))]" />
        </div>
        <FlowCard color="blue">
          <div className="flex items-center gap-2 mb-3">
            <CreditCard className="h-5 w-5 text-[hsl(var(--flow-blue))]" />
            <span className="font-bold text-sm text-foreground">Tipos de Crédito</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-xs">
            {["Consumo", "Comercial", "Hipotecario", "Nómina", "Puente", "Retail"].map((t) => (
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
            {[
              { label: "Tipo de crédito y variables financieras", c: "purple" as const },
              { label: "Rubros y componentes de cuota", c: "blue" as const },
              { label: "Configuración contable por rubro", c: "orange" as const },
              { label: "IVA sobre intereses reales", c: "green" as const },
            ].map((s) => {
              const bc = {
                purple: "border-[hsl(var(--flow-purple)/0.3)] bg-[hsl(var(--flow-purple-light))]",
                blue: "border-[hsl(var(--flow-blue)/0.3)] bg-[hsl(var(--flow-blue-light))]",
                orange: "border-[hsl(var(--flow-orange)/0.3)] bg-[hsl(var(--flow-orange-light))]",
                green: "border-[hsl(var(--flow-green)/0.3)] bg-[hsl(var(--flow-green-light))]",
              };
              return (
                <div key={s.label} className={`flex items-center text-xs px-3 py-2 rounded-lg border ${bc[s.c]}`}>
                  <span className="text-foreground font-medium">{s.label}</span>
                </div>
              );
            })}
          </div>
        </FlowCard>
        <FlowArrow />
        <FlowCard color="orange">
          <div className="flex items-center gap-2 mb-3">
            <Receipt className="h-5 w-5 text-[hsl(var(--flow-orange))]" />
            <span className="font-bold text-sm text-foreground">Funcionalidades Clave</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {["Desembolso con fecha valor", "Cuentas referenciadas", "Posposición de cuotas", "Grupo interés económico", "Refinanciamientos", "Carga de documentos"].map((t) => (
              <span key={t} className="bg-card border border-border rounded-lg px-2 py-1.5 text-center text-muted-foreground">{t}</span>
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
            {["Carga masiva de pagos", "Pagos con fecha valor", "Saldo a favor", "No identificados", "Pago de nómina", "Cobranza"].map((t) => (
              <span key={t} className="bg-card border border-border rounded-lg px-2 py-1.5 text-center text-muted-foreground">{t}</span>
            ))}
          </div>
        </FlowCard>
      </div>
    ),
  },
  {
    id: "clientes",
    label: "Módulo de Clientes",
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
    id: "contabilidad",
    label: "Módulo de Contabilidad",
    icon: Landmark,
    summary: "Registro contable automático producto de la gestión financiera. Generación de estados financieros, catálogo contable y envío de información a terceros.",
    content: () => (
      <div className="max-w-xl mx-auto">
        <h4 className="text-xl font-bold text-foreground text-center mb-1">Módulo de Contabilidad</h4>
        <div className="flex items-center justify-center gap-2 mb-8">
          <BadgeTag label="Core Financiero" color="bg-[hsl(var(--flow-green))]" />
        </div>
        <FlowCard color="green">
          <div className="flex items-center gap-2 mb-3">
            <Landmark className="h-5 w-5 text-[hsl(var(--flow-green))]" />
            <span className="font-bold text-sm text-foreground">Contabilidad Automatizada</span>
          </div>
          <p className="text-xs text-muted-foreground mb-3">
            Registra datos contables automáticamente producto de la gestión financiera y operativa de cada módulo del SAF+.
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {["Catálogo contable", "Estados financieros", "Asientos automáticos", "Asientos manuales", "Interfaz con módulos", "Envío a terceros", "Consultas y saldos", "Administración por rol"].map((t) => (
              <span key={t} className="bg-card border border-border rounded-lg px-2 py-1.5 text-center text-muted-foreground">{t}</span>
            ))}
          </div>
        </FlowCard>
      </div>
    ),
  },
  {
    id: "cajas",
    label: "Cajas y Cuentas",
    icon: Wallet,
    summary: "Control de transacciones de caja, depósitos, retiros, cuentas de ahorro y corriente, sobregiros, chequeras y más.",
    content: () => (
      <div className="max-w-xl mx-auto">
        <h4 className="text-xl font-bold text-foreground text-center mb-1">Cajas y Cuentas de Efectivo</h4>
        <div className="flex items-center justify-center gap-2 mb-8">
          <BadgeTag label="Core Financiero" color="bg-[hsl(var(--flow-orange))]" />
        </div>
        <FlowCard color="orange">
          <div className="flex items-center gap-2 mb-3">
            <Wallet className="h-5 w-5 text-[hsl(var(--flow-orange))]" />
            <span className="font-bold text-sm text-foreground">Operaciones de Caja</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {["Depósitos y retiros", "Control de denominación", "Cambios de cheques", "Compra/venta divisas", "Pago depósitos a plazo", "Recolección servicios", "Anulación/reversa", "Reportes de control"].map((t) => (
              <span key={t} className="bg-card border border-border rounded-lg px-2 py-1.5 text-center text-muted-foreground">{t}</span>
            ))}
          </div>
        </FlowCard>
        <FlowArrow />
        <FlowCard color="teal">
          <div className="flex items-center gap-2 mb-3">
            <Banknote className="h-5 w-5 text-[hsl(var(--flow-teal))]" />
            <span className="font-bold text-sm text-foreground">Cuentas de Efectivo</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {["Tipos de saldo", "Sobregiros", "Chequeras", "Registro de cuentas", "Pago intereses a socios", "Transferencias", "Notas crédito/débito", "Cierre diario"].map((t) => (
              <span key={t} className="bg-card border border-border rounded-lg px-2 py-1.5 text-center text-muted-foreground">{t}</span>
            ))}
          </div>
        </FlowCard>
      </div>
    ),
  },
  {
    id: "bancos",
    label: "Bancos y Tesorería",
    icon: Building2,
    summary: "Administración de cuentas bancarias, emisión de cheques, transferencias, control de ingresos y egresos.",
    content: () => (
      <div className="max-w-xl mx-auto">
        <h4 className="text-xl font-bold text-foreground text-center mb-1">Módulo de Bancos / Tesorería</h4>
        <div className="flex items-center justify-center gap-2 mb-8">
          <BadgeTag label="Core Financiero" color="bg-[hsl(var(--flow-blue))]" />
        </div>
        <FlowCard color="blue">
          <div className="flex items-center gap-2 mb-3">
            <Building2 className="h-5 w-5 text-[hsl(var(--flow-blue))]" />
            <span className="font-bold text-sm text-foreground">Administración Bancaria</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {["Cuentas centralizadas", "Emisión de cheques", "Reimpresión cheques", "Transferencias propias", "Transferencias terceros", "Control ingresos/egresos", "Saldos de cuentas", "Diarios e históricos"].map((t) => (
              <span key={t} className="bg-card border border-border rounded-lg px-2 py-1.5 text-center text-muted-foreground">{t}</span>
            ))}
          </div>
        </FlowCard>
      </div>
    ),
  },
  {
    id: "depositos",
    label: "Depósitos a Plazo",
    icon: BookOpen,
    summary: "Gestión eficiente de depósitos a plazo: renovación automática, cancelación anticipada, múltiples beneficiarios y cupones.",
    content: () => (
      <div className="max-w-xl mx-auto">
        <h4 className="text-xl font-bold text-foreground text-center mb-1">Depósitos a Plazo</h4>
        <div className="flex items-center justify-center gap-2 mb-8">
          <BadgeTag label="Core Financiero" color="bg-[hsl(var(--flow-purple))]" />
        </div>
        <FlowCard color="purple">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="h-5 w-5 text-[hsl(var(--flow-purple))]" />
            <span className="font-bold text-sm text-foreground">Gestión de Depósitos</span>
          </div>
          <p className="text-xs text-muted-foreground mb-3">
            Administración eficiente que fortalece la confianza de los clientes inversionistas.
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {["Renovación automática", "Cancelación anticipada", "Múltiples beneficiarios", "Administración por carteras", "Sustitución de depósitos", "Flujos de caja"].map((t) => (
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
  { icon: Smartphone, title: "Banca Digital", desc: "Portales de autoservicio y banca en línea para clientes finales.", category: "canales", color: "flow-purple" },
  { icon: Send, title: "Notificaciones", desc: "Alertas por correo electrónico y SMS a clientes y usuarios internos.", category: "canales", color: "sysde-red" },
  { icon: Puzzle, title: "Buró de Crédito", desc: "Consulta y reporte automático para análisis de riesgo crediticio.", category: "integraciones", color: "flow-purple" },
  { icon: Lock, title: "KYC / AML", desc: "Validación de identidad y prevención de lavado de activos.", category: "integraciones", color: "flow-orange" },
  { icon: FileText, title: "Reportes Regulatorios", desc: "Generación automática para entes reguladores y auditorías.", category: "integraciones", color: "flow-green" },
  { icon: Link2, title: "Pasarelas de Pago", desc: "Integración con procesadores y pasarelas para cobros en línea.", category: "integraciones", color: "flow-green" },
  { icon: BarChart3, title: "Business Intelligence", desc: "Extracción de datos para Power BI, Tableau y dashboards.", category: "integraciones", color: "flow-teal" },
  { icon: Settings2, title: "Otros", desc: "Integraciones adicionales según necesidades específicas de FIAGC. Sujetas a análisis y cotización.", category: "integraciones", color: "sysde-blue" },
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
    : integrations.filter((i) => i.category === activeCategory);

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

      {/* Bottom note */}
      <motion.div {...fade(0.3)} className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--flow-green))] animate-pulse" />
        <span>Integraciones con terceros requieren análisis y cotización independiente</span>
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
                <h2 className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--sysde-red))] mb-2">Plataforma</h2>
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                  SAF+ Core de Servicios Financieros
                </h3>
                <p className="text-lg text-muted-foreground max-w-3xl">
                  SYSDE ofrece a FIAGC su plataforma colaborativa SAF+ para la administración integral de servicios financieros. Una solución robusta, moderna y 100% web que cubre préstamos, captación, tesorería, contabilidad y más.
                </p>
              </motion.div>

              {/* Card Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
                {modules.map((m, i) => (
                  <motion.button
                    key={m.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    onClick={() => setSelectedModule(m.id)}
                    className="group text-left p-7 rounded-2xl border border-border bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <m.icon className="h-7 w-7 text-[hsl(var(--sysde-red))] mb-5" />
                    <h4 className="font-bold text-foreground text-lg mb-3">{m.label}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{m.summary}</p>
                  </motion.button>
                ))}
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
