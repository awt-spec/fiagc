import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  CreditCard, Users, Landmark, Wallet, Building2, BookOpen,
  Shield, Package, ArrowDown, Settings2, Plus, Pencil,
  RefreshCw, FileText, BarChart3, Globe, Code2, Puzzle,
  CheckCircle2, DollarSign, Receipt, Banknote, TrendingUp,
  ClipboardList, FolderSearch, MonitorSmartphone
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
    label: "Préstamos",
    icon: CreditCard,
    color: "bg-[hsl(var(--flow-blue))]",
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
              <span key={t} className="bg-card border border-border rounded-lg px-2 py-1.5 text-center text-muted-foreground">
                {t}
              </span>
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
                <div key={s.label} className={`flex items-center justify-between text-xs px-3 py-2 rounded-lg border ${bc[s.c]}`}>
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
              <span key={t} className="bg-card border border-border rounded-lg px-2 py-1.5 text-center text-muted-foreground">
                {t}
              </span>
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
              <span key={t} className="bg-card border border-border rounded-lg px-2 py-1.5 text-center text-muted-foreground">
                {t}
              </span>
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
    color: "bg-[hsl(var(--flow-purple))]",
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
              <span key={t} className="bg-card border border-border rounded-lg px-2 py-1.5 text-center text-muted-foreground">
                {t}
              </span>
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
            Acceso fácil a datos clave del cliente para análisis y desarrollo de estrategias sólidas. Configuración de máscaras de identificación y catálogos personalizables.
          </p>
        </FlowCard>
      </div>
    ),
  },
  {
    id: "cajas",
    label: "Cajas",
    icon: Wallet,
    color: "bg-[hsl(var(--flow-orange))]",
    content: () => (
      <div className="max-w-xl mx-auto">
        <h4 className="text-xl font-bold text-foreground text-center mb-1">Módulo de Cajas</h4>
        <div className="flex items-center justify-center gap-2 mb-8">
          <BadgeTag label="Core Financiero" color="bg-[hsl(var(--flow-orange))]" />
        </div>

        <FlowCard color="orange">
          <div className="flex items-center gap-2 mb-3">
            <Wallet className="h-5 w-5 text-[hsl(var(--flow-orange))]" />
            <span className="font-bold text-sm text-foreground">Operaciones de Caja</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {[
              "Depósitos y retiros",
              "Control de denominación",
              "Cambios de cheques",
              "Compra/venta divisas",
              "Pago depósitos a plazo",
              "Recolección servicios",
              "Anulación/reversa",
              "Reportes de control",
            ].map((t) => (
              <span key={t} className="bg-card border border-border rounded-lg px-2 py-1.5 text-center text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
        </FlowCard>

        <FlowArrow />

        <FlowCard color="neutral">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="h-4 w-4 text-[hsl(var(--flow-orange))]" />
            <span className="font-bold text-sm text-foreground">Control y Parametrización</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Parametrización de transacciones y montos por cajero. Permite controlar qué transacciones y qué montos puede tramitar cada usuario.
          </p>
        </FlowCard>
      </div>
    ),
  },
  {
    id: "cuentas",
    label: "Cuentas de Efectivo",
    icon: Banknote,
    color: "bg-[hsl(var(--flow-teal))]",
    content: () => (
      <div className="max-w-xl mx-auto">
        <h4 className="text-xl font-bold text-foreground text-center mb-1">Módulo Cuentas de Efectivo</h4>
        <div className="flex items-center justify-center gap-2 mb-8">
          <BadgeTag label="Core Financiero" color="bg-[hsl(var(--flow-teal))]" />
        </div>

        <FlowCard color="teal">
          <div className="flex items-center gap-2 mb-3">
            <Banknote className="h-5 w-5 text-[hsl(var(--flow-teal))]" />
            <span className="font-bold text-sm text-foreground">Funcionalidades</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {[
              "Tipos de saldo",
              "Sobregiros",
              "Chequeras",
              "Registro de cuentas",
              "Activar/inactivar cuentas",
              "Pago intereses a socios",
              "Transferencias",
              "Notas crédito/débito",
            ].map((t) => (
              <span key={t} className="bg-card border border-border rounded-lg px-2 py-1.5 text-center text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
        </FlowCard>

        <FlowArrow />

        <FlowCard color="green">
          <div className="flex items-center gap-2 mb-2">
            <RefreshCw className="h-4 w-4 text-[hsl(var(--flow-green))]" />
            <span className="font-bold text-sm text-foreground">Procesos Relacionados</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {["Cierre diario", "Devolución reservas", "Certificados", "Calendario automático"].map((t) => (
              <span key={t} className="bg-card border border-border rounded-lg px-2 py-1.5 text-center text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
        </FlowCard>
      </div>
    ),
  },
  {
    id: "contabilidad",
    label: "Contabilidad",
    icon: Landmark,
    color: "bg-[hsl(var(--flow-green))]",
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
            {[
              "Catálogo contable",
              "Estados financieros",
              "Asientos automáticos",
              "Asientos manuales",
              "Interfaz con módulos",
              "Envío a terceros",
              "Consultas y saldos",
              "Administración por rol",
            ].map((t) => (
              <span key={t} className="bg-card border border-border rounded-lg px-2 py-1.5 text-center text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
        </FlowCard>
      </div>
    ),
  },
  {
    id: "bancos",
    label: "Bancos",
    icon: Building2,
    color: "bg-[hsl(var(--flow-blue))]",
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
            {[
              "Cuentas centralizadas",
              "Emisión de cheques",
              "Reimpresión cheques",
              "Transferencias propias",
              "Transferencias terceros",
              "Control ingresos/egresos",
              "Saldos de cuentas",
              "Diarios e históricos",
            ].map((t) => (
              <span key={t} className="bg-card border border-border rounded-lg px-2 py-1.5 text-center text-muted-foreground">
                {t}
              </span>
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
    color: "bg-[hsl(var(--flow-purple))]",
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
            Administración eficiente que fortalece la confianza de los clientes inversionistas. Desde la inversión hasta la cancelación y contabilización.
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {[
              "Renovación automática",
              "Cancelación anticipada",
              "Múltiples beneficiarios",
              "Administración por carteras",
              "Sustitución de depósitos",
              "Flujos de caja",
            ].map((t) => (
              <span key={t} className="bg-card border border-border rounded-lg px-2 py-1.5 text-center text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
        </FlowCard>
      </div>
    ),
  },
  {
    id: "seguridad",
    label: "Seguridad",
    icon: Shield,
    color: "bg-[hsl(var(--flow-orange))]",
    content: () => (
      <div className="max-w-xl mx-auto">
        <h4 className="text-xl font-bold text-foreground text-center mb-1">Módulo de Seguridad</h4>
        <div className="flex items-center justify-center gap-2 mb-8">
          <BadgeTag label="Core Financiero" color="bg-[hsl(var(--flow-orange))]" />
        </div>

        <FlowCard color="orange">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="h-5 w-5 text-[hsl(var(--flow-orange))]" />
            <span className="font-bold text-sm text-foreground">Control de Acceso</span>
          </div>
          <p className="text-xs text-muted-foreground mb-3">
            Administración de perfiles de usuarios individuales, agrupados en roles de trabajo con permisos de acceso por objetos.
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {[
              "Perfiles de usuario",
              "Roles de trabajo",
              "Permisos por objeto",
              "Vigencia contraseña",
              "Catálogo de puestos",
              "Transacciones por usuario",
            ].map((t) => (
              <span key={t} className="bg-card border border-border rounded-lg px-2 py-1.5 text-center text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
        </FlowCard>
      </div>
    ),
  },
];

const ModulesSection = () => {
  const [activeTab, setActiveTab] = useState(modules[0].id);
  const active = modules.find((m) => m.id === activeTab) ?? modules[0];

  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container px-6 max-w-5xl">
        <motion.div {...fade()} className="text-center mb-14">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-sysde-red mb-2">Módulos</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Módulos del Core Financiero
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            SAF+ integra todos los módulos necesarios para la operación financiera de FIAGC en una sola plataforma.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div {...fade(0.1)} className="flex flex-wrap justify-center gap-2 mb-10">
          {modules.map((m) => (
            <button
              key={m.id}
              onClick={() => setActiveTab(m.id)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300
                ${activeTab === m.id
                  ? `${m.color} text-primary-foreground shadow-lg scale-105`
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20"
                }`}
            >
              <m.icon className="h-3.5 w-3.5" />
              {m.label}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            <active.content />
          </motion.div>
        </AnimatePresence>

        {/* APIs Section */}
        <motion.div {...fade(0.2)} className="mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-2 text-center">APIs e Integraciones</h3>
          <p className="text-sm text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            SAF+ se integra con los sistemas existentes de FIAGC mediante APIs REST y componentes embebibles.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Code2,
                title: "API REST",
                desc: "Endpoints seguros para clientes, parámetros, préstamos y contabilidad.",
                color: "from-[hsl(var(--flow-blue))] to-[hsl(var(--flow-purple))]",
              },
              {
                icon: Globe,
                title: "100% Web",
                desc: "Funciona en cualquier navegador sin instalación. Responsive y adaptable.",
                color: "from-[hsl(var(--flow-teal))] to-[hsl(var(--flow-green))]",
              },
              {
                icon: MonitorSmartphone,
                title: "Apps Móviles",
                desc: "Pagos de créditos y consultas desde aplicaciones móviles.",
                color: "from-[hsl(var(--flow-orange))] to-[hsl(var(--sysde-red))]",
              },
              {
                icon: Puzzle,
                title: "Buró de Crédito",
                desc: "Integración con buró de crédito y reportes regulatorios.",
                color: "from-[hsl(var(--flow-purple))] to-[hsl(var(--flow-blue))]",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
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
        </motion.div>
      </div>
    </section>
  );
};

export default ModulesSection;
