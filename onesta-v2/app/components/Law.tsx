'use client'
import { useReveal } from '../lib/useReveal'
import { useIsMobile } from '../lib/useMediaQuery'

export default function Law() {
  const isMobile = useIsMobile()
  const [leftRef, leftVisible] = useReveal()
  const [rightRef, rightVisible] = useReveal()

  return (
    <section id="law" style={{ background: '#111E2E', padding: isMobile ? '80px 0' : '100px 0', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: isMobile ? '0 24px' : '0 60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 48 : 80, alignItems: 'center' }}>

          <div ref={leftRef} className={`reveal${leftVisible ? ' visible' : ''}`}>
            <div className="section-label">Marco legal</div>
            <div className="law-big-num">27.401</div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 20 }}>
              La ley que cambia las reglas del juego para las empresas argentinas.
            </h2>
            <p style={{ color: '#7A95A8', fontSize: '0.92rem', lineHeight: 1.8, marginBottom: 32 }}>
              La Ley Nacional 27.401 de Responsabilidad Penal de las Personas Jurídicas establece que las empresas pueden ser sancionadas penalmente por actos de corrupción cometidos en su nombre. Un programa de integridad efectivo es la herramienta que permite mitigar ese riesgo y, en muchos casos, quedar exenta de responsabilidad.
            </p>
            <a href="#cta" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '1rem 2rem', background: '#1D72B8', color: '#FFFFFF', borderRadius: 7, fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', transition: 'all 0.2s', width: isMobile ? '100%' : 'auto', justifyContent: isMobile ? 'center' : 'flex-start' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1560A0'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(29,114,184,0.45)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#1D72B8'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
              Evaluá el riesgo de tu empresa →
            </a>
          </div>

          <div ref={rightRef} className={`reveal reveal-delay-2${rightVisible ? ' visible' : ''}`}
            style={{ background: 'linear-gradient(135deg, #1A2E44, #0D1B2A)', borderRadius: 16, padding: isMobile ? '32px 24px' : 48, border: '1px solid rgba(255,255,255,0.06)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, border: '1px solid rgba(29,114,184,0.15)', borderRadius: '50%', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: -20, right: -20, width: 120, height: 120, border: '1px solid rgba(29,114,184,0.1)', borderRadius: '50%', pointerEvents: 'none' }} />
            {[
              { num: '+5', suffix: ' años', label: 'de vigencia de la Ley 27.401 — y cada vez más empresas son inspeccionadas por organismos de control.' },
              { num: 'ISO', suffix: ' 37001', label: 'Estándar internacional de Sistema de Gestión Anticorrupción. Acompañamos tu proceso de certificación de inicio a fin.' },
              { num: '0', suffix: ' plantillas', label: 'Todos nuestros programas son diseñados desde cero, a medida del tamaño, sector y riesgos específicos de tu organización.' },
            ].map((stat, i, arr) => (
              <div key={stat.label} style={{ marginBottom: i < arr.length - 1 ? 28 : 0, paddingBottom: i < arr.length - 1 ? 28 : 0, borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none', position: 'relative', zIndex: 1 }}>
                <div style={{ fontSize: isMobile ? '2rem' : '2.5rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', marginBottom: 6, lineHeight: 1 }}>
                  <span style={{ color: '#1D72B8' }}>{stat.num}</span>{stat.suffix}
                </div>
                <div style={{ fontSize: '0.82rem', color: '#7A95A8', lineHeight: 1.6 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
