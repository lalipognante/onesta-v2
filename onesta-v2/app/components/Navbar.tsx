'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useIsMobile } from '../lib/useMediaQuery'

const NAV_LINKS = [
  { href: '#why',      label: 'Por qué nosotros' },
  { href: '#services', label: 'Servicios' },
  { href: '#process',  label: 'Proceso' },
  { href: '#team',     label: 'Equipo' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isMobile) setMenuOpen(false)
  }, [isMobile])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          height: '68px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: isMobile ? '0 20px' : '0 60px',
          background: scrolled || menuOpen ? 'rgba(5,11,18,0.98)' : 'rgba(8,15,24,0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          zIndex: 999,
          transition: 'background 0.3s ease',
          animation: 'fadeDown 0.6s ease both',
        }}
      >
        <Link href="#hero" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div style={{
            width: '36px', height: '36px',
            borderRadius: '50%',
            overflow: 'hidden',
            flexShrink: 0,
            border: '1.5px solid rgba(29,114,184,0.4)',
            background: '#111E2E',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Image
              src="/manosBlancasLOGO.png"
              alt="Onestà Compliance logo"
              width={36}
              height={36}
              style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '5px' }}
              priority
            />
          </div>
          <span style={{ fontFamily: 'var(--font)', fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.04em' }}>
            ONEST<span style={{ color: '#1D72B8' }}>À</span>
          </span>
        </Link>

        {!isMobile && (
          <ul style={{ display: 'flex', gap: '36px', listStyle: 'none', margin: 0, padding: 0 }}>
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <Link href={link.href} style={{ color: '#7A95A8', textDecoration: 'none', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#7A95A8')}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {!isMobile && (
          <Link href="#cta" style={{ background: '#1D72B8', color: '#FFFFFF', padding: '0.6rem 1.4rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.03em', textDecoration: 'none', display: 'inline-block', transition: 'background 0.2s, transform 0.15s, box-shadow 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#1560A0'; e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(29,114,184,0.4)' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#1D72B8'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
            Hablemos
          </Link>
        )}

        {isMobile && (
          <button onClick={() => setMenuOpen(o => !o)} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end' }}>
            <span style={{ display: 'block', width: '22px', height: '2px', background: '#FFFFFF', borderRadius: 2, transition: 'transform 0.25s', transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
            <span style={{ display: 'block', width: '16px', height: '2px', background: '#FFFFFF', borderRadius: 2, transition: 'opacity 0.25s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: '22px', height: '2px', background: '#FFFFFF', borderRadius: 2, transition: 'transform 0.25s', transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
          </button>
        )}
      </nav>

      {isMobile && (
        <div style={{
          position: 'fixed',
          top: '68px', left: 0, right: 0, bottom: 0,
          background: 'rgba(5,11,18,0.98)',
          backdropFilter: 'blur(20px)',
          zIndex: 998,
          display: 'flex',
          flexDirection: 'column',
          padding: '40px 32px',
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? 'translateY(0)' : 'translateY(-8px)',
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.25s ease, transform 0.25s ease',
        }}>
          {NAV_LINKS.map((link, i) => (
            <Link key={link.href} href={link.href} onClick={closeMenu}
              style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '1.4rem', fontWeight: 700, letterSpacing: '-0.01em', padding: '18px 0', borderBottom: i < NAV_LINKS.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
              {link.label}
            </Link>
          ))}
          <Link href="#cta" onClick={closeMenu}
            style={{ marginTop: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '1rem 2rem', background: '#1D72B8', color: '#FFFFFF', borderRadius: 7, fontSize: '1rem', fontWeight: 600, textDecoration: 'none', textAlign: 'center' }}>
            Hablemos →
          </Link>
        </div>
      )}
    </>
  )
}
