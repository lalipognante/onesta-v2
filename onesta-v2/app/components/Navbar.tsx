'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NAV_LINKS = [
  { href: '#why',      label: 'Por qué nosotros' },
  { href: '#services', label: 'Servicios' },
  { href: '#process',  label: 'Proceso' },
  { href: '#team',     label: 'Equipo' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        height: '68px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 60px',
        background: scrolled ? 'rgba(5,11,18,0.95)' : 'rgba(8,15,24,0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        zIndex: 999,
        transition: 'background 0.3s ease',
        animation: 'fadeDown 0.6s ease both',
      }}
    >
      {/* LOGO */}
      <Link href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
        <div style={{
          width: '36px', height: '36px',
          borderRadius: '50%',
          overflow: 'hidden',
          flexShrink: 0,
          border: '1.5px solid rgba(29,114,184,0.4)',
        }}>
          <Image
            src="/logoOnestaBlanco.jpg"
            alt="Onestà Compliance logo"
            width={36}
            height={36}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            priority
          />
        </div>
        <span style={{
          fontFamily: 'var(--font)',
          fontSize: '1.05rem',
          fontWeight: 700,
          color: '#FFFFFF',
          letterSpacing: '0.04em',
        }}>
          ONEST<span style={{ color: '#1D72B8' }}>À</span>
        </span>
      </Link>

      {/* LINKS */}
      <ul style={{ display: 'flex', gap: '36px', listStyle: 'none', margin: 0, padding: 0 }}>
        {NAV_LINKS.map(link => (
          <li key={link.href}>
            <Link
              href={link.href}
              style={{
                color: '#7A95A8',
                textDecoration: 'none',
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={e => (e.currentTarget.style.color = '#7A95A8')}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href="#cta"
        style={{
          background: '#1D72B8',
          color: '#FFFFFF',
          padding: '0.6rem 1.4rem',
          borderRadius: '6px',
          fontSize: '0.8rem',
          fontWeight: 600,
          letterSpacing: '0.03em',
          textDecoration: 'none',
          transition: 'background 0.2s, transform 0.15s, box-shadow 0.2s',
          display: 'inline-block',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = '#1560A0'
          e.currentTarget.style.transform = 'translateY(-1px)'
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(29,114,184,0.4)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = '#1D72B8'
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        Hablemos
      </Link>
    </nav>
  )
}
