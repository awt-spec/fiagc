import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const documentContent = `
# SAF+ Core de Servicios Financieros — Propuesta para FIACG

## Información Principal:
- **Cliente**: FIACG
- **Solución**: SAF+ Core de Servicios Financieros Colaborativos
- **Empresa**: SYSDE

## Plataforma SAF+:
SYSDE ofrece a FIACG su plataforma colaborativa SAF+ para la administración integral de servicios financieros. Una solución robusta, moderna y 100% web.

### Módulos incluidos:

#### 1. Módulo de Préstamos:
- Tipos de crédito: Consumo, Comercial, Hipotecario, Nómina, Puente, Retail
- Configuración: tipo de crédito, rubros, componentes de cuota, configuración contable
- Funcionalidades: desembolso con fecha valor, cuentas referenciadas, posposición de cuotas, grupo interés económico, refinanciamientos, carga de documentos
- Recuperación: carga masiva de pagos, pagos con fecha valor, saldo a favor, no identificados, pago de nómina, cobranza
- Cálculo de intereses basado en años de 360 o 365 días
- Pagos con frecuencia mensual, bimensual, trimestral, semestral, anual o al vencimiento

#### 2. Módulo de Clientes:
- Personas físicas y jurídicas
- Cliente único, documentos digitales
- Actividad económica, convenios nómina
- Configuración de máscaras de identificación

#### 3. Módulo de Cajas:
- Depósitos y retiros, control de denominación
- Cambios de cheques, compra/venta divisas
- Pago depósitos a plazo, recolección servicios
- Anulación/reversa, reportes de control
- Parametrización de transacciones y montos por cajero

#### 4. Módulo Cuentas de Efectivo:
- Tipos de saldo (Disponible, Reserva, Embargo)
- Sobregiros, chequeras, registro de cuentas
- Pago intereses a socios, transferencias
- Cierre diario, devolución reservas, certificados

#### 5. Módulo de Contabilidad:
- Registro contable automático
- Catálogo contable, estados financieros
- Asientos automáticos y manuales
- Interfaz con todos los módulos
- Envío de información a terceros

#### 6. Módulo de Bancos / Tesorería:
- Cuentas centralizadas, emisión de cheques
- Transferencias propias y a terceros
- Control de ingresos y egresos
- Saldos de cuentas, diarios e históricos

#### 7. Depósitos a Plazo:
- Renovación automática, cancelación anticipada
- Múltiples beneficiarios, administración por carteras
- Sustitución de depósitos, flujos de caja

#### 8. Módulo de Seguridad:
- Perfiles de usuario, roles de trabajo
- Permisos por objeto, vigencia contraseña
- Catálogo de puestos, transacciones por usuario

### APIs e Integraciones:
- API REST para clientes, parámetros, préstamos y contabilidad
- 100% web sin instalación
- Apps móviles para pagos de créditos
- Integración con buró de crédito y reportes regulatorios
- KYC

### Arquitectura:
- Agnóstico al sistema operativo
- Tecnología de punta
- Intercomunicación con sistemas externos
- Seguridad, rendimiento, mantenibilidad y escalabilidad

## Infraestructura ON-CLOUD:
- Servidor: Microsoft Azure, 4 núcleos, 512 GB disco, 16 GB RAM
- Servicios de Red: Respaldo mensual, 3 meses de retención

## Inversión Económica:
| Suscripción Mensual para 20 usuarios (8 módulos) | USD $1,500.00 |
| Módulo adicional | USD $199.00/mes |

### SAF+ Champions:
- Acompañamiento experto: USD $30.00 por hora

### Incluido en la suscripción:
- Licenciamiento SAF+ Core Financiero
- 20 usuarios
- 8 módulos financieros
- Capacitación progresiva
- Mantenimiento evolutivo
- Infraestructura Azure
- Consultor de acompañamiento

### Método de Pago:
Se factura el primer día hábil de cada mes. Contrato mínimo de tres años.

## Cronograma (3 meses / 12 semanas):
| Etapa | Tarea |
|-------|-------|
| 0 | Configuración de instancia y ambiente |
| 1 | Implementación Seguridad y Clientes |
| 2 | Implementación módulo Préstamos |
| 3 | Cajas, Cuentas y Contabilidad |
| 4 | Bancos, Depósitos a Plazo y Activos Fijos |
| 5 | Capacitación y acompañamiento |

## Términos y Condiciones:
- Precios en USD, no incluyen impuestos
- Contrato mínimo de tres años
- Modificaciones mediante orden de cambio
- Gastos de viaje no incluidos
`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { question } = await req.json();
    
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `Eres un asistente especializado en la propuesta del SAF+ Core de Servicios Financieros de SYSDE para FIACG. Responde preguntas sobre esta propuesta de manera clara, profesional y útil.

INFORMACIÓN DEL DOCUMENTO:
${documentContent}

INSTRUCCIONES:
1. Responde SOLO sobre la información contenida en la propuesta
2. Si la pregunta no está relacionada, redirige educadamente hacia los temas de la propuesta
3. Sé claro, conciso y profesional
4. Usa emojis moderadamente
5. Si no tienes información específica, sugiere contactar al equipo de SYSDE
6. Formatea en markdown`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: question },
        ],
        max_tokens: 800,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Demasiadas consultas." }), { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Servicio temporalmente no disponible." }), { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "Error del servicio de IA." }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const data = await response.json();
    const aiResponse = data.choices?.[0]?.message?.content || "Lo siento, no pude procesar tu pregunta.";

    return new Response(JSON.stringify({ response: aiResponse }), { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Error desconocido" }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});
