export default function TrustBand() {
  const items = [
    'Córdoba',
    'Buenos Aires',
    'Industria · Construcción · Finanzas',
    'Certificación ISO 37001 · 37301',
  ]

  return (
    <div style={{
      background: '#111E2E',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      padding: '28px 60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 60,
      flexWrap: 'wrap',
    }}>
      <span style={{
        fontSize: '0.68rem',
        fontWeight: 600,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: '#4A6070',
        whiteSpace: 'nowrap',
      }}>
        Presencia en
      </span>

      <div style={{ width: 1, height: 20, background: 'rgba(255,255,255,0.1)', flexShrink: 0 }} />

      <div style={{ display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
        {items.map(item => (
          <span key={item} style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            color: 'rgba(255,255,255,0.45)',
            fontSize: '0.78rem',
            fontWeight: 500,
            letterSpacing: '0.04em',
          }}>
            <span style={{
              width: 4, height: 4,
              background: '#1D72B8',
              borderRadius: '50%',
              opacity: 0.6,
              flexShrink: 0,
            }} />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
