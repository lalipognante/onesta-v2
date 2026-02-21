'use client'

import { useReveal } from '../lib/useReveal'

const pillars = [
  {
    num: '01',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22, stroke: '#1D72B8' }}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Programas a medida',
    body: 'Ningún programa de integridad es igual al de tu competidor. El nuestro parte de un diagnóstico real de tu organización, no de una plantilla.',
  },
  {
    num: '02',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22, stroke: '#1D72B8' }}>
        <circle cx="12" cy="8" r="4" />
        <path d="M20 21a8 8 0 1 0-16 0" />
      </svg>
    ),
    title: 'Equipo con certificación internacional',
    body: 'Abogados especializados con formación en universidades de España, Argentina y certificaciones IFCA-AAEC de validez internacional.',
  },
  {
    num: '03',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22, stroke: '#1D72B8' }}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        <circle cx="9" cy="7" r="4" />
      </svg>
    ),
    title: 'Acompañamiento continuo',
    body: 'No entregamos un manual y nos vamos. Somos parte de tu equipo mientras lo necesitás, con soporte externo permanente para la gestión del programa.',
  },
]

export default function Why() {
  const [headerRef, headerVisible] = useReveal()
  const [gridRef, gridVisible] = useReveal()

  return (
    <section
      id="why"
      style={{ background: '#F4F7FA', padding: '120px 0', color: '#0D1B2A' }}
    >
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 60px' }}>
        {/* HEADER */}
        <div
          ref={headerRef}
          className={`reveal${headerVisible ? ' visible' : ''}`}
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: 72,
            gap: 40,
          }}
        >
          <div>
            <div className="section-label">Por qué elegirnos</div>
            <h2 style={{
              fontSize: 'clamp(2rem, 3vw, 2.8rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              color: '#080F18',
              maxWidth: 500,
              margin: 0,
            }}>
              Compliance que construye valor,{' '}
              <span style={{ color: '#1D72B8' }}>no solo cumple.</span>
            </h2>
          </div>
          <p style={{
            maxWidth: 380,
            color: '#4A6070',
            fontSize: '0.95rem',
            lineHeight: 1.75,
            margin: 0,
          }}>
            La mayoría de las consultoras trabajan desde el miedo. Nosotros trabajamos desde la estrategia. Tu programa de integridad debe ser un activo, no una carga.
          </p>
        </div>

        {/* GRID */}
        <div
          ref={gridRef}
          className={`reveal${gridVisible ? ' visible' : ''}`}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 2,
            background: 'rgba(13,27,42,0.07)',
            borderRadius: 14,
            overflow: 'hidden',
          }}
        >
          {pillars.map((pillar, i) => (
            <div
              key={pillar.num}
              className={`reveal-delay-${i + 1}`}
              style={{
                background: '#FFFFFF',
                padding: '44px 36px',
                position: 'relative',
                transition: 'background 0.25s',
                cursor: 'default',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#f8fafc')}
              onMouseLeave={e => (e.currentTarget.style.background = '#FFFFFF')}
            >
              <div style={{
                fontSize: '4rem',
                fontWeight: 800,
                color: 'rgba(13,27,42,0.05)',
                lineHeight: 1,
                marginBottom: 24,
                letterSpacing: '-0.04em',
              }}>
                {pillar.num}
              </div>
              <div style={{
                width: 44, height: 44,
                background: 'rgba(29,114,184,0.08)',
                borderRadius: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20,
              }}>
                {pillar.icon}
              </div>
              <h3 style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: '#080F18',
                marginBottom: 12,
                letterSpacing: '-0.01em',
              }}>
                {pillar.title}
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#5A7080', lineHeight: 1.75 }}>
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
