export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        background: '#080F18',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '120px 60px 100px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── ATMOSPHERIC ORBS ── */}
      <div style={{
        position: 'absolute', borderRadius: '50%', pointerEvents: 'none', filter: 'blur(80px)',
        width: 600, height: 600, top: -150, right: -150,
        background: 'radial-gradient(circle, rgba(29,114,184,0.12) 0%, transparent 70%)',
      }} />
      <div style={{
        position: 'absolute', borderRadius: '50%', pointerEvents: 'none', filter: 'blur(80px)',
        width: 500, height: 500, bottom: -100, left: -100,
        background: 'radial-gradient(circle, rgba(29,114,184,0.08) 0%, transparent 70%)',
      }} />
      <div style={{
        position: 'absolute', borderRadius: '50%', pointerEvents: 'none', filter: 'blur(80px)',
        width: 300, height: 300, top: '40%', left: '20%',
        background: 'radial-gradient(circle, rgba(45,78,107,0.15) 0%, transparent 70%)',
      }} />

      {/* ── GEOMETRIC CIRCLES (Instagram style) ── */}
      <div style={{
        position: 'absolute', borderRadius: '50%', pointerEvents: 'none',
        border: '1px solid rgba(255,255,255,0.04)',
        width: 700, height: 700, top: -200, right: -200,
      }} />
      <div style={{
        position: 'absolute', borderRadius: '50%', pointerEvents: 'none',
        border: '1px solid rgba(255,255,255,0.04)',
        width: 500, height: 500, top: -100, right: -100,
      }} />
      <div style={{
        position: 'absolute', borderRadius: '50%', pointerEvents: 'none',
        border: '1px solid rgba(255,255,255,0.04)',
        width: 400, height: 400, bottom: -150, left: -150,
      }} />

      {/* ── CONTENT ── */}
      <div style={{ animation: 'fadeUp 0.7s 0.2s ease both', position: 'relative', zIndex: 2 }}>
        {/* BADGE */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '6px 16px',
          background: 'rgba(29,114,184,0.1)',
          border: '1px solid rgba(29,114,184,0.25)',
          borderRadius: 100,
          fontSize: '0.65rem',
          fontWeight: 700,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#1D72B8',
          marginBottom: 40,
        }}>
          <span style={{
            width: 6, height: 6,
            background: '#1D72B8',
            borderRadius: '50%',
            flexShrink: 0,
            animation: 'pulseDot 2s infinite',
          }} />
          Compliance · Ética · Integridad Corporativa
        </div>
      </div>

      {/* HEADLINE */}
      <div style={{
        maxWidth: 860,
        marginBottom: 28,
        animation: 'fadeUp 0.7s 0.35s ease both',
        position: 'relative',
        zIndex: 2,
      }}>
        <h1 style={{
          fontSize: 'clamp(2.8rem, 5vw, 4.2rem)',
          lineHeight: 1.08,
          letterSpacing: '-0.025em',
          margin: 0,
        }}>
          <span style={{ fontWeight: 200, color: 'rgba(255,255,255,0.7)' }}>Diseñamos el programa de </span>
          <span style={{ fontWeight: 800, color: '#FFFFFF', position: 'relative', display: 'inline-block' }}>
            integridad
            <span style={{
              position: 'absolute',
              bottom: 2, left: 0, right: 0,
              height: 3,
              background: '#1D72B8',
              borderRadius: 2,
              transform: 'scaleX(0)',
              animation: 'lineReveal 0.5s 1.2s ease forwards',
            }} />
          </span>
          <span style={{ fontWeight: 200, color: 'rgba(255,255,255,0.7)' }}> que tu empresa</span>
          <br />
          <span style={{ fontWeight: 200, color: 'rgba(255,255,255,0.7)' }}>necesita para crecer con </span>
          <span style={{ fontWeight: 800, color: '#FFFFFF' }}>confianza.</span>
        </h1>
      </div>

      {/* SUBHEADLINE */}
      <p style={{
        maxWidth: 560,
        color: '#7A95A8',
        fontSize: '1.05rem',
        fontWeight: 400,
        lineHeight: 1.75,
        marginBottom: 52,
        animation: 'fadeUp 0.7s 0.5s ease both',
        position: 'relative',
        zIndex: 2,
      }}>
        No somos una consultoría genérica. Analizamos los riesgos reales de tu organización y construimos soluciones a medida — sin plantillas, sin atajos.
      </p>

      {/* CTAS */}
      <div style={{
        display: 'flex',
        gap: 16,
        justifyContent: 'center',
        flexWrap: 'wrap',
        animation: 'fadeUp 0.7s 0.65s ease both',
        position: 'relative',
        zIndex: 2,
      }}>
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
            letterSpacing: '0.02em',
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
          Quiero una consulta gratuita
          <span style={{ transition: 'transform 0.2s' }}>→</span>
        </a>

        <a
          href="#services"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '1rem 2rem',
            background: 'transparent',
            color: 'rgba(255,255,255,0.75)',
            borderRadius: 7,
            fontSize: '0.9rem',
            fontWeight: 500,
            letterSpacing: '0.02em',
            textDecoration: 'none',
            border: '1.5px solid rgba(255,255,255,0.18)',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.45)'
            e.currentTarget.style.color = '#FFFFFF'
            e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'
            e.currentTarget.style.color = 'rgba(255,255,255,0.75)'
            e.currentTarget.style.background = 'transparent'
          }}
        >
          Ver nuestros servicios
        </a>
      </div>

      {/* SCROLL INDICATOR */}
      <div style={{
        position: 'absolute',
        bottom: 36, left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        color: '#4A6070',
        fontSize: '0.65rem',
        fontWeight: 600,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        animation: 'fadeUp 1s 1s ease both',
      }}>
        <div style={{
          width: 1, height: 40,
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)',
          animation: 'scrollPulse 2s infinite',
        }} />
        Scroll
      </div>
    </section>
  )
}
