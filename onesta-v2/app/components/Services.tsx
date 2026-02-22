'use client'
import { useReveal } from '../lib/useReveal'
import { useIsMobile, useIsTablet } from '../lib/useMediaQuery'

// ── ÍCONOS CON CARÁCTER ──────────────────────────────────────────────────────
const IconMatriz = () => (
  <svg viewBox="0 0 48 48" fill="none" style={{ width: 28, height: 28 }}>
    {/* Grid con lupa — simboliza mapeo y análisis */}
    <rect x="4" y="4" width="16" height="16" rx="2" fill="rgba(29,114,184,0.15)" stroke="#1D72B8" strokeWidth="1.5"/>
    <rect x="4" y="28" width="16" height="16" rx="2" fill="rgba(29,114,184,0.25)" stroke="#1D72B8" strokeWidth="1.5"/>
    <rect x="28" y="4" width="16" height="16" rx="2" fill="rgba(29,114,184,0.25)" stroke="#1D72B8" strokeWidth="1.5"/>
    <rect x="28" y="28" width="16" height="16" rx="2" fill="rgba(29,114,184,0.08)" stroke="#4A90D9" strokeWidth="1.5" strokeDasharray="3 2"/>
    <circle cx="36" cy="36" r="5" fill="none" stroke="#1D72B8" strokeWidth="2"/>
    <line x1="39.5" y1="39.5" x2="43" y2="43" stroke="#1D72B8" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="10" y1="10" x2="14" y2="10" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    <line x1="10" y1="13" x2="13" y2="13" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
  </svg>
)

const IconProgramas = () => (
  <svg viewBox="0 0 48 48" fill="none" style={{ width: 28, height: 28 }}>
    {/* Documento con sello/escudo */}
    <rect x="8" y="4" width="24" height="32" rx="3" fill="rgba(29,114,184,0.12)" stroke="#1D72B8" strokeWidth="1.5"/>
    <rect x="8" y="4" width="24" height="8" rx="3" fill="rgba(29,114,184,0.3)"/>
    <line x1="14" y1="18" x2="26" y2="18" stroke="#4A90D9" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="14" y1="22" x2="26" y2="22" stroke="#4A90D9" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    <line x1="14" y1="26" x2="22" y2="26" stroke="#4A90D9" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
    {/* Sello de integridad */}
    <path d="M30 28 L34 30 L38 28 L38 36 Q34 40 30 36 Z" fill="rgba(29,114,184,0.3)" stroke="#1D72B8" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M32 33 L33.5 34.5 L36 31.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconCapacitacion = () => (
  <svg viewBox="0 0 48 48" fill="none" style={{ width: 28, height: 28 }}>
    {/* Birrete + personas */}
    <path d="M24 8 L44 16 L24 24 L4 16 Z" fill="rgba(29,114,184,0.25)" stroke="#1D72B8" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M24 24 L24 36" stroke="#1D72B8" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M14 20 L14 32 Q14 38 24 38 Q34 38 34 32 L34 20" stroke="#4A90D9" strokeWidth="1.5" strokeLinecap="round" fill="rgba(29,114,184,0.08)"/>
    <circle cx="40" cy="16" r="2" fill="#1D72B8"/>
    <line x1="40" y1="18" x2="40" y2="26" stroke="#1D72B8" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M37 26 L43 26" stroke="#1D72B8" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const IconAsesoramiento = () => (
  <svg viewBox="0 0 48 48" fill="none" style={{ width: 28, height: 28 }}>
    {/* Handshake estilizado / apretón de manos */}
    <path d="M4 20 L16 20 L20 16 L28 16 L32 20 L44 20" stroke="#1D72B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 20 L16 32 Q16 36 20 36 L28 36 Q32 36 32 32 L32 20" fill="rgba(29,114,184,0.12)" stroke="#1D72B8" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M20 26 Q24 30 28 26" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7"/>
    <circle cx="24" cy="22" r="2.5" fill="rgba(29,114,184,0.4)" stroke="#4A90D9" strokeWidth="1"/>
    <path d="M4 20 L4 32" stroke="#1D72B8" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
    <path d="M44 20 L44 32" stroke="#1D72B8" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
  </svg>
)

const IconISO = () => (
  <svg viewBox="0 0 48 48" fill="none" style={{ width: 28, height: 28 }}>
    {/* Estrella de certificación / medalla */}
    <circle cx="24" cy="22" r="12" fill="rgba(29,114,184,0.15)" stroke="#1D72B8" strokeWidth="1.5"/>
    <circle cx="24" cy="22" r="8" fill="rgba(29,114,184,0.2)" stroke="#4A90D9" strokeWidth="1"/>
    <path d="M24 16 L25.5 20.5 L30 20.5 L26.5 23.5 L28 28 L24 25 L20 28 L21.5 23.5 L18 20.5 L22.5 20.5 Z" fill="#1D72B8"/>
    {/* Cinta de medalla */}
    <path d="M20 33 L18 44 L24 40 L30 44 L28 33" fill="rgba(29,114,184,0.2)" stroke="#1D72B8" strokeWidth="1.2" strokeLinejoin="round"/>
    <line x1="18" y1="37" x2="30" y2="37" stroke="#4A90D9" strokeWidth="1" opacity="0.6"/>
  </svg>
)

const IconInvestigaciones = () => (
  <svg viewBox="0 0 48 48" fill="none" style={{ width: 28, height: 28 }}>
    {/* Lupa sobre documento legal con balanza */}
    <rect x="6" y="6" width="22" height="28" rx="3" fill="rgba(29,114,184,0.1)" stroke="#1D72B8" strokeWidth="1.5"/>
    <line x1="11" y1="14" x2="23" y2="14" stroke="#4A90D9" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="11" y1="19" x2="23" y2="19" stroke="#4A90D9" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    <line x1="11" y1="24" x2="18" y2="24" stroke="#4A90D9" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
    {/* Balanza */}
    <line x1="34" y1="10" x2="34" y2="36" stroke="#1D72B8" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="28" y1="14" x2="40" y2="14" stroke="#1D72B8" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M28 14 L25 22 L31 22 Z" fill="rgba(29,114,184,0.3)" stroke="#1D72B8" strokeWidth="1" strokeLinejoin="round"/>
    <path d="M40 14 L37 20 L43 20 Z" fill="rgba(29,114,184,0.15)" stroke="#4A90D9" strokeWidth="1" strokeLinejoin="round"/>
    <line x1="30" y1="36" x2="38" y2="36" stroke="#1D72B8" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const serviceIcons = [IconMatriz, IconProgramas, IconCapacitacion, IconAsesoramiento, IconISO, IconInvestigaciones]

const services = [
  { num: '01', title: 'Matriz de Riesgo', body: 'Identificamos y mapeamos los riesgos específicos de tu actividad con entrevistas personalizadas y cuestionarios de diagnóstico profundo.' },
  { num: '02', title: 'Programas de Integridad', body: 'Diseño e implementación de programas adaptados a tu empresa: código de ética, políticas internas y protocolos de interacción pública.' },
  { num: '03', title: 'Capacitación', body: 'Seminarios y capacitaciones diseñadas a medida de cada área, con evaluación de aprendizaje y metodologías didácticas efectivas.' },
  { num: '04', title: 'Asesoramiento Externo', body: 'Apoyo permanente para la gestión continua del programa de integridad diseñado para tu compañía.' },
  { num: '05', title: 'Alineamientos ISO', body: 'Acompañamiento para certificación ISO 37001 (Anticorrupción) e ISO 37301 (Compliance) con estándares internacionales.' },
  { num: '06', title: 'Investigaciones Internas', body: 'Gestión y judicialización de denuncias recibidas a través de la línea ética, con protocolos de confidencialidad y trazabilidad.' },
]

export default function Services() {
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  const [headerRef, headerVisible] = useReveal()
  const cols = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'

  return (
    <section id="services" style={{ background: '#080F18', padding: isMobile ? '80px 0' : '120px 0' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: isMobile ? '0 24px' : '0 60px' }}>
        <div ref={headerRef} className={`reveal${headerVisible ? ' visible' : ''}`}
          style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: isMobile ? 40 : 64, gap: 24 }}>
          <div>
            <div className="section-label">Nuestros servicios</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15, maxWidth: 440, margin: 0 }}>
              Todo lo que tu empresa necesita para operar con integridad.
            </h2>
          </div>
          {!isMobile && <p style={{ maxWidth: 360, color: '#7A95A8', fontSize: '0.95rem', lineHeight: 1.75, paddingTop: 8 }}>Desde el diagnóstico inicial hasta la certificación ISO, diseñamos cada etapa del programa con vos.</p>}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: cols, gap: isMobile ? 12 : 16 }}>
          {services.map((s, i) => <ServiceCard key={s.num} service={s} Icon={serviceIcons[i]} delay={((i % 3) + 1) as 1|2|3} isMobile={isMobile} />)}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, Icon, delay, isMobile }: { service: typeof services[0]; Icon: () => JSX.Element; delay: 1|2|3; isMobile: boolean }) {
  const [ref, visible] = useReveal()
  return (
    <div ref={ref} className={`reveal reveal-delay-${delay} service-card-glow${visible ? ' visible' : ''}`}
      style={{ background: '#111E2E', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: isMobile ? '28px 24px' : '36px 32px', position: 'relative', cursor: 'pointer', transition: 'all 0.3s ease', overflow: 'hidden' }}>
      <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', color: '#1D72B8', marginBottom: 20, opacity: 0.7 }}>{service.num}</div>
      {/* Ícono con contenedor premium */}
      <div style={{
        width: 52, height: 52,
        background: 'linear-gradient(135deg, rgba(29,114,184,0.15) 0%, rgba(29,114,184,0.05) 100%)',
        border: '1px solid rgba(29,114,184,0.25)',
        borderRadius: 12,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 20,
        boxShadow: '0 4px 16px rgba(29,114,184,0.1)',
      }}>
        <Icon />
      </div>
      <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 12, color: '#FFFFFF', letterSpacing: '-0.01em' }}>{service.title}</h3>
      <p style={{ fontSize: '0.84rem', color: '#7A95A8', lineHeight: 1.7, margin: 0 }}>{service.body}</p>
    </div>
  )
}
