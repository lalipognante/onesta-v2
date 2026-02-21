'use client'

import { useReveal } from '../lib/useReveal'

const steps = [
  {
    num: '01',
    title: 'Diagnóstico inicial',
    body: 'Reunión sin costo para entender tu empresa, sector y exposición real a riesgos de compliance. Sin compromiso, sin formularios interminables.',
  },
  {
    num: '02',
    title: 'Análisis y Matriz de Riesgo',
    body: 'Entrevistas en profundidad, revisión documental y mapeo de los riesgos específicos de tu organización según su actividad y estructura.',
  },
  {
    num: '03',
    title: 'Diseño del programa',
    body: 'Elaboramos el programa de integridad a medida: código de ética, políticas internas, protocolos y canales de denuncia alineados a tu cultura.',
  },
  {
    num: '04',
    title: 'Implementación y acompañamiento',
    body: 'Capacitamos a tu equipo, instalamos el programa y quedamos disponibles como soporte externo permanente. No te dejamos solo en la etapa más crítica.',
  },
]

export default function Process() {
  const [leftRef, leftVisible] = useReveal()
  const [rightRef, rightVisible] = useReveal()

  return (
    <section id="process" style={{ background: '#F4F7FA', padding: '120px 0', color: '#0D1B2A' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 60px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 100,
          alignItems: 'start',
        }}>
          {/* LEFT — sticky */}
          <div
            ref={leftRef}
            className={`reveal${leftVisible ? ' visible' : ''}`}
            style={{ position: 'sticky', top: 100 }}
          >
            <div className="section-label">Cómo trabajamos</div>
            <h2 style={{
              fontSize: 'clamp(2rem, 3vw, 2.8rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              marginBottom: 20,
              color: '#080F18',
            }}>
              Un proceso claro,{' '}
              <span style={{ color: '#1D72B8' }}>sin sorpresas.</span>
            </h2>
            <p style={{
              color: '#4A6070',
              fontSize: '0.95rem',
              lineHeight: 1.75,
              marginBottom: 36,
            }}>
              Cada organización es distinta. Por eso empezamos escuchando antes de proponer. El resultado es un programa que tu equipo entiende y puede sostener.
            </p>
            <a
              href="#cta"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '1rem 2rem',
                background: '#1D72B8',
                color: '#FFFFFF',
                borderRadius: 7,
                fontSize: '0.9rem',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#1560A0'
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(29,114,184,0.45)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#1D72B8'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              Empezar ahora →
            </a>
          </div>

          {/* RIGHT — steps */}
          <div
            ref={rightRef}
            className={`reveal reveal-delay-2${rightVisible ? ' visible' : ''}`}
            style={{ position: 'relative' }}
          >
            <div className="process-line" />
            {steps.map(step => (
              <div
                key={step.num}
                style={{
                  display: 'flex',
                  gap: 28,
                  paddingBottom: 44,
                  position: 'relative',
                }}
              >
                <div style={{
                  width: 40, height: 40,
                  minWidth: 40,
                  background: '#FFFFFF',
                  border: '2px solid #1D72B8',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  color: '#1D72B8',
                  letterSpacing: '0.02em',
                  position: 'relative',
                  zIndex: 1,
                  flexShrink: 0,
                }}>
                  {step.num}
                </div>
                <div style={{ paddingTop: 8 }}>
                  <h4 style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#080F18',
                    marginBottom: 8,
                  }}>
                    {step.title}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: '#4A6070', lineHeight: 1.7 }}>
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
