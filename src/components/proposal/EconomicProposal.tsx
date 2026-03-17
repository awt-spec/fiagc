import { motion } from "framer-motion";
import { CheckCircle2, CreditCard, FileCheck, Calendar, Shield, Infinity, Zap, HeadphonesIcon, Users, Landmark } from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.5, delay },
});

const EconomicProposal = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-6 max-w-5xl">
        <motion.div {...fade()} className="text-center mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-sysde-red mb-2">Inversión</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Inversión Económica
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Modalidad SaaS (Software as a Service) que permite a FIAGC acceder al SAF+ Core Financiero a través de un navegador web.
          </p>
        </motion.div>

        {/* Included - Soporte Ilimitado */}
        <motion.div {...fade(0.1)} className="mb-12">
          <div className="p-8 rounded-2xl border-2 border-sysde-red/20 bg-card relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-sysde" />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-sysde-red/10 flex items-center justify-center">
                <Infinity className="h-6 w-6 text-sysde-red" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-xl">Soporte, Capacitación y Evolución Ilimitados</h4>
                <p className="text-sm text-muted-foreground">Incluido en tu suscripción, sin límites</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { icon: Zap, text: "Licenciamiento SAF+ Core Financiero" },
                { icon: Users, text: "20 usuarios incluidos" },
                { icon: HeadphonesIcon, text: "Capacitación progresiva ilimitada" },
                { icon: Shield, text: "Mantenimiento evolutivo ilimitado" },
                { icon: CheckCircle2, text: "Infraestructura en la nube (Azure)" },
                { icon: CheckCircle2, text: "Soporte y acompañamiento ilimitado" },
                { icon: CheckCircle2, text: "Acceso web desde cualquier navegador" },
                { icon: Landmark, text: "8 módulos financieros incluidos" },
              ].map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className="flex items-start gap-2.5 text-sm text-muted-foreground"
                >
                  <item.icon className="h-4 w-4 text-sysde-red mt-0.5 flex-shrink-0" />
                  {item.text}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Pricing Table */}
        <motion.div {...fade(0.2)} className="mb-12">
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="bg-sysde-red text-primary-foreground">
              <div className="grid grid-cols-3 text-center">
                <div className="px-4 py-4 font-semibold border-r border-primary-foreground/20">Concepto</div>
                <div className="px-4 py-4 font-semibold border-r border-primary-foreground/20">Detalle</div>
                <div className="px-4 py-4 font-semibold">Precio USD</div>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-3 text-center">
                <div className="px-4 py-4 text-foreground font-medium border-r border-border flex items-center justify-center">
                  Suscripción Mensual
                </div>
                <div className="px-4 py-4 text-sm text-muted-foreground border-r border-border flex items-center justify-center">
                  20 usuarios + Core completo (8 módulos)
                </div>
                <div className="px-4 py-4 flex items-center justify-center">
                  <span className="text-foreground font-bold text-xl">USD $1,500.00</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Payment + Terms */}
        <div className="grid sm:grid-cols-2 gap-6">
          <motion.div {...fade(0.25)} className="p-7 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-[hsl(var(--flow-blue-light))] flex items-center justify-center">
                <CreditCard className="h-5 w-5 text-[hsl(var(--flow-blue))]" />
              </div>
              <h4 className="font-bold text-foreground text-lg">Método de Pago</h4>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/50">
                <Calendar className="h-4 w-4 text-sysde-red mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Facturación mensual</p>
                  <p className="text-xs text-muted-foreground">Se factura el primer día hábil de cada mes a partir de la firma del contrato.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/50">
                <FileCheck className="h-4 w-4 text-sysde-red mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Contrato mínimo</p>
                  <p className="text-xs text-muted-foreground">Tres (3) años para la renta del SAF+ e infraestructura Azure.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/50">
                <Shield className="h-4 w-4 text-sysde-red mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Moneda</p>
                  <p className="text-xs text-muted-foreground">Todos los precios en USD (dólares estadounidenses).</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...fade(0.3)} className="p-7 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-[hsl(var(--flow-orange-light))] flex items-center justify-center">
                <FileCheck className="h-5 w-5 text-[hsl(var(--flow-orange))]" />
              </div>
              <h4 className="font-bold text-foreground text-lg">Términos y Condiciones</h4>
            </div>
            <div className="space-y-3">
              {[
                { title: "Impuestos", desc: "Los precios no incluyen impuestos, tasas ni retenciones." },
                { title: "Vigencia", desc: "Contrato mínimo de tres años para la renta del SAF+." },
                { title: "Modificaciones", desc: "Se realizarán mediante orden de cambio con cotización independiente." },
                { title: "Viáticos", desc: "Gastos de viaje no incluidos; deben indicarse en negociación." },
                { title: "Validez", desc: "Esta propuesta anula cualquier otra entregada anteriormente." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sysde-red flex-shrink-0 mt-2" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EconomicProposal;
