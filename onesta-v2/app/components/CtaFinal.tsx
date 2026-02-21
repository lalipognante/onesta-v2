'use client'

import { useReveal } from '../lib/useReveal'

export default function CtaFinal() {
  const [ref, visible] = useReveal()

  return (
    <section
      id="cta"
      style={{
        background: '#080F18',
        padding: '140px 0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800, height: 800,
        background: 'radial-gradient(circle, rgba(29,114,184,0.07) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div
        ref={ref}
        className={`reveal${visible ? ' visible' : ''}`}
        style={{ maxWidth: 1240, margin: '0 auto', padding: '0 60px', position: 'relative' }}
      >
        {/* TAG */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '6px 18px',
          background: 'rgba(29,114,184,0.08)',
          border: '1px solid rgba(29,114,184,0.2)',
          borderRadius: 100,
          fontSize: '0.65rem',
          fontWeight: 700,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#1D72B8',
          marginBottom: 40,
        }}>
          Diagnóstico sin costo
        </div>

        {/* HEADLINE */}
        <h2 style={{
          fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
          fontWeight: 800,
          letterSpacing: '-0.025em',
          lineHeight: 1.1,
          marginBottom: 20,
          maxWidth: 700,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          ¿Tu empresa está expuesta sin saberlo?
        </h2>

        {/* SUB */}
        <p style={{
          color: '#7A95A8',
          fontSize: '1rem',
          lineHeight: 1.7,
          maxWidth: 480,
          margin: '0 auto 52px',
        }}>
          Hacemos una primera reunión sin cargo para identificar los riesgos específicos de tu organización. Sin compromiso. Sin formularios interminables.
        </p>

        {/* ACTIONS */}
        <div style={{
          display: 'flex',
          gap: 16,
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
          <a
            href="https://wa.me/3515169365?text=Hola%2C+quiero+agendar+una+reuni%C3%B3n+de+diagn%C3%B3stico."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '1.1rem 2.2rem',
              background: '#1D72B8',
              color: '#FFFFFF',
              borderRadius: 7,
              fontSize: '0.95rem',
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
            Agendá una reunión de 15 minutos →
          </a>

          <a
            href="https://wa.me/3515169365"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '0.82rem',
              fontWeight: 500,
              color: '#7A95A8',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
            onMouseLeave={e => (e.currentTarget.style.color = '#7A95A8')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.853L.064 23.192a.75.75 0 0 0 .908.94l5.474-1.437A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.73 9.73 0 0 1-5.001-1.383l-.36-.213-3.718.976.995-3.636-.234-.374A9.704 9.704 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
            </svg>
            O escribinos por WhatsApp
          </a>
        </div>

        <p style={{
          marginTop: 28,
          fontSize: '0.72rem',
          color: '#4A6070',
          letterSpacing: '0.04em',
        }}>
          Sin compromiso · Sin costo · Respuesta en menos de 24 horas
        </p>
      </div>
    </section>
  )
}
