'use client'
import { useIsMobile } from '../lib/useMediaQuery'

export default function Hero() {
  const isMobile = useIsMobile()

  return (
    <section id="hero" style={{ minHeight: '100vh', background: '#080F18', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: isMobile ? '100px 24px 80px' : '120px 60px 100px', position: 'relative', overflow: 'hidden' }}>
      {/* ORBS */}
      <div style={{ position: 'absolute', borderRadius: '50%', pointerEvents: 'none', filter: 'blur(80px)', width: isMobile ? 300 : 600, height: isMobile ? 300 : 600, top: -100, right: -100, background: 'radial-gradient(circle, rgba(29,114,184,0.12) 0%, transparent 70%)' }} />
      <div style={{ position: 'absolute', borderRadius: '50%', pointerEvents: 'none', filter: 'blur(80px)', width: isMobile ? 250 : 500, height: isMobile ? 250 : 500, bottom: -80, left: -80, background: 'radial-gradient(circle, rgba(29,114,184,0.08) 0%, transparent 70%)' }} />
      {/* CIRCLES */}
      {!isMobile && <>
        <div style={{ position: 'absolute', borderRadius: '50%', pointerEvents: 'none', border: '1px solid rgba(255,255,255,0.04)', width: 700, height: 700, top: -200, right: -200 }} />
        <div style={{ position: 'absolute', borderRadius: '50%', pointerEvents: 'none', border: '1px solid rgba(255,255,255,0.04)', width: 500, height: 500, top: -100, right: -100 }} />
      </>}
      <div style={{ position: 'absolute', borderRadius: '50%', pointerEvents: 'none', border: '1px solid rgba(255,255,255,0.04)', width: 400, height: 400, bottom: -150, left: -150 }} />

      {/* BADGE */}
      <div style={{ animation: 'fadeUp 0.7s 0.2s ease both', position: 'relative', zIndex: 2, marginBottom: 40 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', background: 'rgba(29,114,184,0.1)', border: '1px solid rgba(29,114,184,0.25)', borderRadius: 100, fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1D72B8' }}>
          <span style={{ width: 6, height: 6, background: '#1D72B8', borderRadius: '50%', flexShrink: 0, animation: 'pulseDot 2s infinite' }} />
          {isMobile ? 'Compliance · Ética · Integridad' : 'Compliance · Ética · Integridad Corporativa'}
        </div>
      </div>

      {/* HEADLINE */}
      <div style={{ maxWidth: isMobile ? '100%' : 860, marginBottom: 28, animation: 'fadeUp 0.7s 0.35s ease both', position: 'relative', zIndex: 2 }}>
        <h1 style={{ fontSize: isMobile ? 'clamp(2rem, 8vw, 2.6rem)' : 'clamp(2.8rem, 5vw, 4.2rem)', lineHeight: 1.1, letterSpacing: '-0.025em', margin: 0 }}>
          <span style={{ fontWeight: 200, color: 'rgba(255,255,255,0.7)' }}>Diseñamos el programa de </span>
          <span style={{ fontWeight: 800, color: '#FFFFFF', position: 'relative', display: 'inline-block' }}>
            integridad
            <span style={{ position: 'absolute', bottom: 2, left: 0, right: 0, height: 3, background: '#1D72B8', borderRadius: 2, transform: 'scaleX(0)', animation: 'lineReveal 0.5s 1.2s ease forwards' }} />
          </span>
          {' '}<span style={{ fontWeight: 200, color: 'rgba(255,255,255,0.7)' }}>que tu empresa</span>
          {isMobile ? ' ' : <br />}
          <span style={{ fontWeight: 200, color: 'rgba(255,255,255,0.7)' }}>necesita para crecer con </span>
          <span style={{ fontWeight: 800, color: '#FFFFFF' }}>confianza.</span>
        </h1>
      </div>

      {/* SUB */}
      <p style={{ maxWidth: isMobile ? '100%' : 560, color: '#7A95A8', fontSize: isMobile ? '0.95rem' : '1.05rem', fontWeight: 400, lineHeight: 1.75, marginBottom: 44, animation: 'fadeUp 0.7s 0.5s ease both', position: 'relative', zIndex: 2 }}>
        No somos una consultoría genérica. Analizamos los riesgos reales de tu organización y construimos soluciones a medida — sin plantillas, sin atajos.
      </p>

      {/* CTAS */}
      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 12 : 16, justifyContent: 'center', width: isMobile ? '100%' : 'auto', animation: 'fadeUp 0.7s 0.65s ease both', position: 'relative', zIndex: 2 }}>
        <a href="#cta" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '1rem 2rem', background: '#1D72B8', color: '#FFFFFF', borderRadius: 7, fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', transition: 'all 0.2s', width: isMobile ? '100%' : 'auto' }}
          onMouseEnter={e => { e.currentTarget.style.background = '#1560A0'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(29,114,184,0.45)' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#1D72B8'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
          Quiero una consulta gratuita →
        </a>
        <a href="#services" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '1rem 2rem', background: 'transparent', color: 'rgba(255,255,255,0.75)', borderRadius: 7, fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.18)', transition: 'all 0.2s', width: isMobile ? '100%' : 'auto' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.45)'; e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)'; e.currentTarget.style.background = 'transparent' }}>
          Ver nuestros servicios
        </a>
      </div>

      {!isMobile && (
        <div style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, color: '#4A6070', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', animation: 'fadeUp 1s 1s ease both' }}>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)', animation: 'scrollPulse 2s infinite' }} />
          Scroll
        </div>
      )}
    </section>
  )
}
