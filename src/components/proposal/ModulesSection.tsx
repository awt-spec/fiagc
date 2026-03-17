import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  CreditCard, Users, Landmark, Wallet, Building2, BookOpen,
  Shield, ArrowDown, Settings2, X,
  RefreshCw, DollarSign, Receipt, Banknote,
  FolderSearch, Code2, Globe, MonitorSmartphone, Puzzle,
  FileText, Send, Database, Lock, BarChart3, Smartphone, Link2, Workflow,
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
    color: "hsl(var(--flow-blue))",
    bgColor: "bg-[hsl(var(--flow-blue))]",
    orbitIndex: 0,
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
    label: "Clientes",
    icon: Users,
    color: "hsl(var(--flow-purple))",
    bgColor: "bg-[hsl(var(--flow-purple))]",
    orbitIndex: 1,
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
    id: "cajas",
    label: "Cajas",
    icon: Wallet,
    color: "hsl(var(--flow-orange))",
    bgColor: "bg-[hsl(var(--flow-orange))]",
    orbitIndex: 2,
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
            {["Depósitos y retiros", "Control de denominación", "Cambios de cheques", "Compra/venta divisas", "Pago depósitos a plazo", "Recolección servicios", "Anulación/reversa", "Reportes de control"].map((t) => (
              <span key={t} className="bg-card border border-border rounded-lg px-2 py-1.5 text-center text-muted-foreground">{t}</span>
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
            Parametrización de transacciones y montos por cajero.
          </p>
        </FlowCard>
      </div>
    ),
  },
  {
    id: "cuentas",
    label: "Cuentas",
    icon: Banknote,
    color: "hsl(var(--flow-teal))",
    bgColor: "bg-[hsl(var(--flow-teal))]",
    orbitIndex: 3,
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
            {["Tipos de saldo", "Sobregiros", "Chequeras", "Registro de cuentas", "Activar/inactivar cuentas", "Pago intereses a socios", "Transferencias", "Notas crédito/débito"].map((t) => (
              <span key={t} className="bg-card border border-border rounded-lg px-2 py-1.5 text-center text-muted-foreground">{t}</span>
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
              <span key={t} className="bg-card border border-border rounded-lg px-2 py-1.5 text-center text-muted-foreground">{t}</span>
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
    color: "hsl(var(--flow-green))",
    bgColor: "bg-[hsl(var(--flow-green))]",
    orbitIndex: 4,
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
    id: "bancos",
    label: "Bancos",
    icon: Building2,
    color: "hsl(var(--flow-blue))",
    bgColor: "bg-[hsl(var(--flow-blue))]",
    orbitIndex: 5,
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
    label: "Depósitos",
    icon: BookOpen,
    color: "hsl(var(--flow-purple))",
    bgColor: "bg-[hsl(var(--flow-purple))]",
    orbitIndex: 6,
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
  {
    id: "seguridad",
    label: "Seguridad",
    icon: Shield,
    color: "hsl(var(--flow-orange))",
    bgColor: "bg-[hsl(var(--flow-orange))]",
    orbitIndex: 7,
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
            {["Perfiles de usuario", "Roles de trabajo", "Permisos por objeto", "Vigencia contraseña", "Catálogo de puestos", "Transacciones por usuario"].map((t) => (
              <span key={t} className="bg-card border border-border rounded-lg px-2 py-1.5 text-center text-muted-foreground">{t}</span>
            ))}
          </div>
        </FlowCard>
      </div>
    ),
  },
];

/* ─── Solar System Component ─── */

const ORBIT_RADII = [140, 140, 140, 140, 195, 195, 195, 195]; // two rings
const PLANET_SIZE = 56;

function getPlanetPosition(index: number, _total: number) {
  // Split into inner ring (0-3) and outer ring (4-7)
  const isOuter = index >= 4;
  const ringIndex = isOuter ? index - 4 : index;
  const ringTotal = 4;
  // Offset outer ring by 45° so labels don't overlap
  const offsetAngle = isOuter ? Math.PI / 4 : 0;
  const angle = (ringIndex / ringTotal) * 2 * Math.PI - Math.PI / 2 + offsetAngle;
  const radius = isOuter ? 205 : 130;
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
  };
}

const SolarSystem = ({ onSelect }: { onSelect: (id: string) => void }) => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="relative w-full flex items-center justify-center" style={{ height: 520 }}>
      {/* Orbit rings */}
      <div className="absolute rounded-full border border-dashed border-muted-foreground/15" style={{ width: 260, height: 260 }} />
      <div className="absolute rounded-full border border-dashed border-muted-foreground/15" style={{ width: 410, height: 410 }} />

      {/* Sun - SAF+ */}
      <motion.div
        className="absolute z-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[hsl(var(--sysde-red))] to-[hsl(var(--sysde-red-light))] shadow-2xl cursor-default"
        style={{ width: 80, height: 80 }}
        animate={{
          boxShadow: [
            "0 0 20px hsl(355 72% 40% / 0.3)",
            "0 0 40px hsl(355 72% 40% / 0.5)",
            "0 0 20px hsl(355 72% 40% / 0.3)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-primary-foreground font-extrabold text-sm tracking-tight">SAF+</span>
      </motion.div>

      {/* Planets */}
      {modules.map((m, i) => {
        const pos = getPlanetPosition(i, modules.length);
        const isHovered = hovered === m.id;

        return (
          <motion.button
            key={m.id}
            className="absolute z-20 flex flex-col items-center gap-1 group"
            style={{
              left: `calc(50% + ${pos.x}px - ${PLANET_SIZE / 2}px)`,
              top: `calc(50% + ${pos.y}px - ${PLANET_SIZE / 2}px)`,
            }}
            onClick={() => onSelect(m.id)}
            onMouseEnter={() => setHovered(m.id)}
            onMouseLeave={() => setHovered(null)}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Planet */}
            <div
              className={`${m.bgColor} rounded-full flex items-center justify-center shadow-lg transition-shadow duration-300`}
              style={{
                width: PLANET_SIZE,
                height: PLANET_SIZE,
                boxShadow: isHovered ? `0 0 24px ${m.color}` : `0 4px 12px ${m.color}40`,
              }}
            >
              <m.icon className="h-5 w-5 text-primary-foreground" />
            </div>
            {/* Label */}
            <span className={`text-[10px] font-semibold whitespace-nowrap transition-colors duration-200 ${isHovered ? 'text-foreground' : 'text-muted-foreground'}`}>
              {m.label}
            </span>
          </motion.button>
        );
      })}

      {/* Hint */}
      <motion.p
        className="absolute -bottom-2 text-xs text-muted-foreground/60 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
      >
        Haz clic en un módulo para ver el detalle
      </motion.p>
    </div>
  );
};

/* ─── Detail Overlay ─── */

const DetailView = ({
  moduleId,
  onClose,
}: {
  moduleId: string;
  onClose: () => void;
}) => {
  const mod = modules.find((m) => m.id === moduleId);
  if (!mod) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 30 }}
      transition={{ duration: 0.35, type: "spring", stiffness: 300, damping: 25 }}
      className="relative"
    >
      {/* Close button */}
      <div className="flex justify-center mb-6">
        <motion.button
          onClick={onClose}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all text-sm font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <X className="h-4 w-4" />
          Volver a módulos
        </motion.button>
      </div>

      {/* Module content */}
      <mod.content />
    </motion.div>
  );
};

/* ─── Main Section ─── */

const ModulesSection = () => {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container px-6 max-w-5xl">
        <motion.div {...fade()} className="text-center mb-14">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--sysde-red))] mb-2">Módulos</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Módulos del Core Financiero
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            SAF+ integra todos los módulos necesarios para la operación financiera de FIAGC en una sola plataforma.
          </p>
        </motion.div>

        {/* Solar System or Detail View */}
        <AnimatePresence mode="wait">
          {selectedModule ? (
            <DetailView
              key="detail"
              moduleId={selectedModule}
              onClose={() => setSelectedModule(null)}
            />
          ) : (
            <motion.div
              key="solar"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <SolarSystem onSelect={setSelectedModule} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* APIs Section */}
        <motion.div {...fade(0.2)} className="mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-2 text-center">APIs e Integraciones</h3>
          <p className="text-sm text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            SAF+ se integra con los sistemas existentes de FIAGC mediante APIs REST y componentes embebibles.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Code2, title: "API REST", desc: "Endpoints seguros para clientes, parámetros, préstamos y contabilidad.", color: "from-[hsl(var(--flow-blue))] to-[hsl(var(--flow-purple))]" },
              { icon: Globe, title: "100% Web", desc: "Funciona en cualquier navegador sin instalación. Responsive y adaptable.", color: "from-[hsl(var(--flow-teal))] to-[hsl(var(--flow-green))]" },
              { icon: MonitorSmartphone, title: "Apps Móviles", desc: "Pagos de créditos y consultas desde aplicaciones móviles.", color: "from-[hsl(var(--flow-orange))] to-[hsl(var(--sysde-red))]" },
              { icon: Puzzle, title: "Buró de Crédito", desc: "Integración con buró de crédito y reportes regulatorios.", color: "from-[hsl(var(--flow-purple))] to-[hsl(var(--flow-blue))]" },
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
