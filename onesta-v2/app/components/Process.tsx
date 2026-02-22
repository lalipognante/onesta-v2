'use client'
import { useReveal } from '../lib/useReveal'
import { useIsMobile } from '../lib/useMediaQuery'

// ── ÍCONOS PROCESO — simbolismo jurídico/estratégico con volumen ─────────────

const IconDiagnostico = () => (
  <svg viewBox="0 0 48 48" fill="none" style={{ width: 26, height: 26 }}>
    {/* Microscopio estilizado / lupa con destello */}
    <circle cx="20" cy="20" r="11" fill="rgba(29,114,184,0.15)" stroke="#1D72B8" strokeWidth="1.8"/>
    <circle cx="20" cy="20" r="6" fill="rgba(29,114,184,0.25)" stroke="#4A90D9" strokeWidth="1.2"/>
    <circle cx="18" cy="18" r="2" fill="rgba(255,255,255,0.15)"/>
    {/* Líneas de búsqueda */}
    <line x1="28" y1="28" x2="40" y2="40" stroke="#1D72B8" strokeWidth="3" strokeLinecap="round"/>
    <line x1="36" y1="36" x2="40" y2="40" stroke="#4A90D9" strokeWidth="4" strokeLinecap="round" opacity="0.5"/>
    {/* Destello */}
    <line x1="8" y1="8" x2="11" y2="11" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
    <line x1="9" y1="6" x2="9" y2="9" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.3"/>
    <line x1="6" y1="9" x2="9" y2="9" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.3"/>
  </svg>
)

const IconAnalisis = () => (
  <svg viewBox="0 0 48 48" fill="none" style={{ width: 26, height: 26 }}>
    {/* Gráfico de barras con alerta — análisis de riesgo */}
    <rect x="4" y="28" width="8" height="16" rx="2" fill="rgba(29,114,184,0.4)" stroke="#1D72B8" strokeWidth="1.2"/>
    <rect x="16" y="18" width="8" height="26" rx="2" fill="rgba(29,114,184,0.6)" stroke="#1D72B8" strokeWidth="1.2"/>
    <rect x="28" y="8" width="8" height="36" rx="2" fill="#1D72B8" stroke="#4A90D9" strokeWidth="1"/>
    {/* Línea de tendencia */}
    <polyline points="8,28 20,18 32,8" stroke="#4A90D9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 2" opacity="0.7"/>
    {/* Triángulo de alerta */}
    <path d="M38 4 L44 14 L32 14 Z" fill="rgba(255,180,0,0.2)" stroke="#FFB400" strokeWidth="1.2" strokeLinejoin="round"/>
    <line x1="38" y1="7" x2="38" y2="11" stroke="#FFB400" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="38" cy="13" r="0.8" fill="#FFB400"/>
  </svg>
)

const IconDiseno = () => (
  <svg viewBox="0 0 48 48" fill="none" style={{ width: 26, height: 26 }}>
    {/* Documento con escudo + pluma */}
    <rect x="6" y="4" width="26" height="34" rx="3" fill="rgba(29,114,184,0.1)" stroke="#1D72B8" strokeWidth="1.5"/>
    <rect x="6" y="4" width="26" height="9" rx="3" fill="rgba(29,114,184,0.3)"/>
    <line x1="12" y1="20" x2="26" y2="20" stroke="#4A90D9" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="12" y1="25" x2="26" y2="25" stroke="#4A90D9" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    <line x1="12" y1="30" x2="20" y2="30" stroke="#4A90D9" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
    {/* Escudo superpuesto */}
    <path d="M28 22 L34 24 L40 22 L40 32 Q34 38 28 32 Z" fill="rgba(29,114,184,0.25)" stroke="#1D72B8" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M31 28 L33 30 L37 26" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconImplementacion = () => (
  <svg viewBox="0 0 48 48" fill="none" style={{ width: 26, height: 26 }}>
    {/* Engranaje + personas — implementación en equipo */}
    <circle cx="18" cy="24" r="9" fill="rgba(29,114,184,0.12)" stroke="#1D72B8" strokeWidth="1.5"/>
    <circle cx="18" cy="24" r="4" fill="rgba(29,114,184,0.3)" stroke="#4A90D9" strokeWidth="1"/>
    {/* Dientes del engranaje */}
    {[0,45,90,135,180,225,270,315].map((angle, i) => {
      const rad = (angle * Math.PI) / 180
      const x1 = 18 + 9 * Math.cos(rad)
      const y1 = 24 + 9 * Math.sin(rad)
      const x2 = 18 + 12 * Math.cos(rad)
      const y2 = 24 + 12 * Math.sin(rad)
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1D72B8" strokeWidth="2.5" strokeLinecap="round"/>
    })}
    {/* Personas a la derecha */}
    <circle cx="36" cy="18" r="4" fill="rgba(29,114,184,0.3)" stroke="#4A90D9" strokeWidth="1.2"/>
    <path d="M28 36 Q28 28 36 28 Q44 28 44 36" fill="rgba(29,114,184,0.2)" stroke="#1D72B8" strokeWidth="1.2" strokeLinecap="round"/>
    {/* Check de éxito */}
    <circle cx="36" cy="18" r="1.5" fill="white" opacity="0.6"/>
  </svg>
)

const steps = [
  {
    num: '01',
    Icon: IconDiagnostico,
    title: 'Diagnóstico inicial',
    body: 'Reunión sin costo para entender tu empresa, sector y exposición real a riesgos de compliance. Sin compromiso, sin formularios interminables.',
  },
  {
    num: '02',
    Icon: IconAnalisis,
    title: 'Análisis y Matriz de Riesgo',
    body: 'Entrevistas en profundidad, revisión documental y mapeo de los riesgos específicos de tu organización según su actividad y estructura.',
  },
  {
    num: '03',
    Icon: IconDiseno,
    title: 'Diseño del programa',
    body: 'Elaboramos el programa de integridad a medida: código de ética, políticas internas, protocolos y canales de denuncia alineados a tu cultura.',
  },
  {
    num: '04',
    Icon: IconImplementacion,
    title: 'Implementación y acompañamiento',
    body: 'Capacitamos a tu equipo, instalamos el programa y quedamos disponibles como soporte externo permanente. No te dejamos solo en la etapa más crítica.',
  },
]

export default function Process() {
  const isMobile = useIsMobile()
  const [leftRef, leftVisible] = useReveal()
  const [rightRef, rightVisible] = useReveal()

  return (
    <section id="process" style={{ background: '#F4F7FA', padding: isMobile ? '80px 0' : '120px 0', color: '#0D1B2A' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: isMobile ? '0 24px' : '0 60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 48 : 100, alignItems: 'start' }}>

          {/* LEFT */}
          <div ref={leftRef} className={`reveal${leftVisible ? ' visible' : ''}`}
            style={{ position: isMobile ? 'relative' : 'sticky', top: isMobile ? 'auto' : 100 }}>
            <div className="section-label">Cómo trabajamos</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: 20, color: '#080F18' }}>
              Un proceso claro, <span style={{ color: '#1D72B8' }}>sin sorpresas.</span>
            </h2>
            <p style={{ color: '#4A6070', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: 36 }}>
              Cada organización es distinta. Por eso empezamos escuchando antes de proponer. El resultado es un programa que tu equipo entiende y puede sostener.
            </p>
            <a href="#cta" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '1rem 2rem', background: '#1D72B8', color: '#FFFFFF', borderRadius: 7, fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1560A0'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(29,114,184,0.45)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#1D72B8'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
              Empezar ahora →
            </a>
          </div>

          {/* RIGHT — steps */}
          <div ref={rightRef} className={`reveal reveal-delay-2${rightVisible ? ' visible' : ''}`} style={{ position: 'relative' }}>
            <div className="process-line" />
            {steps.map(step => (
              <div key={step.num} style={{ display: 'flex', gap: 24, paddingBottom: 44, position: 'relative' }}>
                {/* Dot con ícono */}
                <div style={{
                  width: 48, height: 48,
                  minWidth: 48,
                  background: 'linear-gradient(135deg, #1A3A5C, #0D1B2A)',
                  border: '2px solid #1D72B8',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  zIndex: 1,
                  flexShrink: 0,
                  boxShadow: '0 4px 16px rgba(29,114,184,0.25)',
                }}>
                  <step.Icon />
                </div>
                <div style={{ paddingTop: 10 }}>
                  <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', color: '#1D72B8', marginBottom: 4, textTransform: 'uppercase' }}>
                    Etapa {step.num}
                  </div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#080F18', marginBottom: 8 }}>{step.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: '#4A6070', lineHeight: 1.7 }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
