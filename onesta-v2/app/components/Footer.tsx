'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useIsMobile, useIsTablet } from '../lib/useMediaQuery'

export default function Footer() {
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()

  return (
    <footer style={{ background: '#050B12', padding: isMobile ? '48px 0 28px' : '64px 0 36px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: isMobile ? '0 24px' : '0 60px' }}>

        {/* TOP GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : '2fr 1fr 1fr 1.5fr', gap: isMobile ? 40 : 60, marginBottom: isMobile ? 40 : 60 }}>

          {/* Brand */}
          <div>
            <Link href="#hero" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none', marginBottom: 16 }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', overflow: 'hidden', border: '1.5px solid rgba(29,114,184,0.4)', flexShrink: 0, background: '#111E2E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src="/manosBlancasLOGO.png" alt="Onestà logo" width={32} height={32} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '4px' }} />
              </div>
              <span style={{ fontFamily: 'var(--font)', fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.04em' }}>
                ONEST<span style={{ color: '#1D72B8' }}>À</span>
              </span>
            </Link>
            <p style={{ fontSize: '0.85rem', color: '#7A95A8', lineHeight: 1.75, maxWidth: 280 }}>
              Diseñamos programas de integridad para empresas que quieren crecer con confianza y operar con solidez ética y legal.
            </p>
          </div>

          {/* On mobile: nav + services side by side */}
          {isMobile ? (
            <>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
                <FooterCol title="Navegación" items={[
                  { href: '#why', label: 'Por qué Onestà' },
                  { href: '#services', label: 'Servicios' },
                  { href: '#process', label: 'Proceso' },
                  { href: '#team', label: 'Equipo' },
                ]} />
                <FooterCol title="Servicios" items={[
                  { href: '#services', label: 'Matriz de Riesgo' },
                  { href: '#services', label: 'Programas' },
                  { href: '#services', label: 'Capacitación' },
                  { href: '#services', label: 'ISO 37001' },
                ]} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4A6070', marginBottom: 16 }}>Contacto</h4>
                {['Córdoba, Argentina', '+54 (0351) 516-9365', 'onestacompliance@gmail.com'].map(c => (
                  <p key={c} style={{ fontSize: '0.84rem', color: '#7A95A8', marginBottom: 8, lineHeight: 1.5 }}>{c}</p>
                ))}
              </div>
            </>
          ) : (
            <>
              <FooterCol title="Navegación" items={[
                { href: '#why', label: 'Por qué Onestà' },
                { href: '#services', label: 'Servicios' },
                { href: '#process', label: 'Proceso' },
                { href: '#team', label: 'Equipo' },
              ]} />
              <FooterCol title="Servicios" items={[
                { href: '#services', label: 'Matriz de Riesgo' },
                { href: '#services', label: 'Programas de Integridad' },
                { href: '#services', label: 'Capacitación' },
                { href: '#services', label: 'Alineamientos ISO' },
                { href: '#services', label: 'Asesoramiento Externo' },
              ]} />
              <div>
                <h4 style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4A6070', marginBottom: 20 }}>Contacto</h4>
                {['Córdoba, Argentina', '+54 (0351) 516-9365', 'onestacompliance@gmail.com'].map(c => (
                  <p key={c} style={{ fontSize: '0.84rem', color: '#7A95A8', marginBottom: 10, lineHeight: 1.5 }}>{c}</p>
                ))}
              </div>
            </>
          )}
        </div>

        {/* BOTTOM */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 24, display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'center' : 'center', justifyContent: 'space-between', gap: isMobile ? 16 : 0 }}>
          <span style={{ fontSize: '0.75rem', color: '#4A6070', letterSpacing: '0.03em', textAlign: isMobile ? 'center' : 'left' }}>
            © 2025 Onestà Compliance. Todos los derechos reservados.
          </span>
          <div style={{ display: 'flex', gap: 12 }}>
            <SocialLink href="https://instagram.com/onestacompliance" title="Instagram">IG</SocialLink>
            <SocialLink href="https://linkedin.com" title="LinkedIn">in</SocialLink>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, items }: { title: string; items: { href: string; label: string }[] }) {
  return (
    <div>
      <h4 style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4A6070', marginBottom: 20 }}>{title}</h4>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {items.map(item => (
          <li key={item.label} style={{ marginBottom: 12 }}>
            <Link href={item.href} style={{ color: '#7A95A8', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 400, transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={e => (e.currentTarget.style.color = '#7A95A8')}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SocialLink({ href, title, children }: { href: string; title: string; children: React.ReactNode }) {
  return (
    <a href={href} title={title} target="_blank" rel="noopener noreferrer"
      style={{ width: 32, height: 32, border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4A6070', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 600, transition: 'all 0.2s' }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(29,114,184,0.5)'; e.currentTarget.style.color = '#1D72B8' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#4A6070' }}>
      {children}
    </a>
  )
}
