'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{
      background: '#050B12',
      padding: '64px 0 36px',
      borderTop: '1px solid rgba(255,255,255,0.05)',
    }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 60px' }}>
        {/* TOP */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
          gap: 60,
          marginBottom: 60,
        }}>
          {/* Brand */}
          <div>
            <Link href="#hero" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none', marginBottom: 16 }}>
              <div style={{
                width: 32, height: 32,
                borderRadius: '50%',
                overflow: 'hidden',
                border: '1.5px solid rgba(29,114,184,0.4)',
                flexShrink: 0,
              }}>
                <Image
                  src="/manosLogo2.png"
                  alt="Onestà logo"
                  width={32}
                  height={32}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <span style={{
                fontFamily: 'var(--font)',
                fontSize: '1rem',
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '0.04em',
              }}>
                ONEST<span style={{ color: '#1D72B8' }}>À</span>
              </span>
            </Link>
            <p style={{
              fontSize: '0.85rem',
              color: '#7A95A8',
              lineHeight: 1.75,
              maxWidth: 280,
            }}>
              Diseñamos programas de integridad para empresas que quieren crecer con confianza y operar con solidez ética y legal.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 style={{
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#4A6070',
              marginBottom: 20,
            }}>
              Navegación
            </h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {[
                { href: '#why', label: 'Por qué Onestà' },
                { href: '#services', label: 'Servicios' },
                { href: '#process', label: 'Proceso' },
                { href: '#team', label: 'Equipo' },
              ].map(link => (
                <li key={link.href} style={{ marginBottom: 12 }}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#4A6070',
              marginBottom: 20,
            }}>
              Servicios
            </h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {[
                'Matriz de Riesgo',
                'Programas de Integridad',
                'Capacitación',
                'Alineamientos ISO',
                'Asesoramiento Externo',
              ].map(s => (
                <li key={s} style={{ marginBottom: 12 }}>
                  <FooterLink href="#services">{s}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#4A6070',
              marginBottom: 20,
            }}>
              Contacto
            </h4>
            {[
              'Córdoba, Argentina',
              '+54 (0351) 516-9365',
              'onestacompliance@gmail.com',
            ].map(c => (
              <p key={c} style={{ fontSize: '0.84rem', color: '#7A95A8', marginBottom: 10, lineHeight: 1.5 }}>
                {c}
              </p>
            ))}
          </div>
        </div>

        {/* BOTTOM */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: 28,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <span style={{ fontSize: '0.75rem', color: '#4A6070', letterSpacing: '0.03em' }}>
            © 2025 Onestà Compliance. Todos los derechos reservados.
          </span>
          <div style={{ display: 'flex', gap: 16 }}>
            <SocialLink href="https://instagram.com/onestacompliance" title="Instagram">IG</SocialLink>
            <SocialLink href="https://linkedin.com" title="LinkedIn">in</SocialLink>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={{ color: '#7A95A8', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 400, transition: 'color 0.2s' }}
      onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
      onMouseLeave={e => (e.currentTarget.style.color = '#7A95A8')}
    >
      {children}
    </Link>
  )
}

function SocialLink({ href, title, children }: { href: string; title: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        width: 32, height: 32,
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#4A6070',
        textDecoration: 'none',
        fontSize: '0.75rem',
        fontWeight: 600,
        transition: 'all 0.2s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(29,114,184,0.5)'
        e.currentTarget.style.color = '#1D72B8'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
        e.currentTarget.style.color = '#4A6070'
      }}
    >
      {children}
    </a>
  )
}
