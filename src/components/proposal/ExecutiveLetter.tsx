import { motion } from "framer-motion";
import { Landmark, Users, CreditCard, Wallet, BookOpen, Building2 } from "lucide-react";

const ExecutiveLetter = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-sm font-semibold uppercase tracking-wider text-sysde-red mb-2">
            Plataforma
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            SAF+ Core de Servicios Financieros
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mb-12">
            SYSDE ofrece a FIAGC su plataforma colaborativa SAF+ para la administración integral de servicios financieros. Una solución robusta, moderna y 100% web que cubre préstamos, captación, tesorería, contabilidad y más.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: CreditCard,
                title: "Módulo de Préstamos",
                desc: "Administración completa de créditos: consumo, comercial, hipotecario, nómina, puente y retail. Con manejo de desembolsos, refinanciamientos y recuperación.",
              },
              {
                icon: Users,
                title: "Módulo de Clientes",
                desc: "Gestión centralizada de personas físicas y jurídicas. Información consolidada del cliente con documentación digital y asignación de cliente único.",
              },
              {
                icon: Landmark,
                title: "Módulo de Contabilidad",
                desc: "Registro contable automático producto de la gestión financiera. Generación de estados financieros, catálogo contable y envío de información a terceros.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-7 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-sysde-red/10 flex items-center justify-center mb-4">
                  <item.icon className="h-5 w-5 text-sysde-red" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Wallet,
                title: "Cajas y Cuentas",
                desc: "Control de transacciones de caja, depósitos, retiros, cuentas de ahorro y corriente, sobregiros, chequeras y más.",
              },
              {
                icon: Building2,
                title: "Bancos y Tesorería",
                desc: "Administración de cuentas bancarias, emisión de cheques, transferencias, control de ingresos y egresos.",
              },
              {
                icon: BookOpen,
                title: "Depósitos a Plazo",
                desc: "Gestión eficiente de depósitos a plazo: renovación automática, cancelación anticipada, múltiples beneficiarios y cupones.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="p-7 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-sysde-red/10 flex items-center justify-center mb-4">
                  <item.icon className="h-5 w-5 text-sysde-red" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="p-6 rounded-xl bg-muted/50 border border-border"
          >
            <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider text-sysde-red">Arquitectura Moderna y Colaborativa</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              SAF+ es agnóstico al sistema operativo, utiliza tecnología de punta y arquitectura que permite intercomunicación con sistemas externos mediante APIs REST. La plataforma es 100% web, robusta en seguridad, rendimiento, mantenibilidad y escalabilidad. Incluye integración con buró de crédito, reportes regulatorios, KYC y aplicaciones móviles.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExecutiveLetter;
