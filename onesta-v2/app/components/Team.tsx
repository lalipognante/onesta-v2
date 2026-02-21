'use client'

import Image from 'next/image'
import { useReveal } from '../lib/useReveal'
import { teamMembers, type TeamMember } from '../lib/team'

export default function Team() {
  const [headerRef, headerVisible] = useReveal()
  const [gridRef, gridVisible] = useReveal()

  return (
    <section id="team" style={{ background: '#080F18', padding: '120px 0' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 60px' }}>
        {/* HEADER */}
        <div
          ref={headerRef}
          className={`reveal${headerVisible ? ' visible' : ''}`}
          style={{ textAlign: 'center', marginBottom: 72 }}
        >
          <div className="section-label section-label-center">El equipo</div>
          <h2 style={{
            fontSize: 'clamp(2rem, 3vw, 2.8rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: 16,
          }}>
            Conocé a las personas detrás del programa.
          </h2>
          <p style={{
            color: '#7A95A8',
            fontSize: '0.95rem',
            maxWidth: 480,
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            Abogados con formación especializada, certificaciones internacionales y experiencia real en compliance corporativo en Argentina.
          </p>
        </div>

        {/* GRID — 3 columns, director card is wider (spans description visible on hover) */}
        <div
          ref={gridRef}
          className={`reveal${gridVisible ? ' visible' : ''}`}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
          }}
        >
          {teamMembers.map((member, i) => (
            <TeamCard key={member.id} member={member} featured={i === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamCard({ member, featured }: { member: TeamMember; featured: boolean }) {
  return (
    <div
      className="team-card-hover"
      style={{
        background: '#111E2E',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: 12,
        overflow: 'hidden',
        cursor: 'pointer',
        gridColumn: featured ? 'span 1' : undefined,
      }}
    >
      {/* PHOTO */}
      <div style={{
        position: 'relative',
        width: '100%',
        aspectRatio: featured ? '1.1' : '1',
        overflow: 'hidden',
      }}>
        <Image
          src={member.image}
          alt={`Foto de ${member.name}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
          style={{
            objectFit: 'cover',
            objectPosition: 'top center',
            filter: 'grayscale(30%) brightness(0.9)',
            transition: 'filter 0.4s ease, transform 0.4s ease',
          }}
          onMouseEnter={e => {
            const img = e.currentTarget as HTMLImageElement
            img.style.filter = 'grayscale(0%) brightness(1)'
            img.style.transform = 'scale(1.03)'
          }}
          onMouseLeave={e => {
            const img = e.currentTarget as HTMLImageElement
            img.style.filter = 'grayscale(30%) brightness(0.9)'
            img.style.transform = 'scale(1)'
          }}
        />
        {/* OVERLAY */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, transparent 40%, rgba(8,15,24,0.85) 100%)',
          pointerEvents: 'none',
        }} />
      </div>

      {/* INFO */}
      <div style={{ padding: '20px 22px 24px' }}>
        <div style={{
          fontSize: '0.6rem',
          fontWeight: 700,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#1D72B8',
          marginBottom: 6,
        }}>
          {member.position}
        </div>
        <div style={{
          fontSize: featured ? '1.1rem' : '0.95rem',
          fontWeight: 700,
          color: '#FFFFFF',
          marginBottom: 10,
        }}>
          {member.name}
        </div>
        {/* First curriculum item as specialization preview */}
        <div style={{
          fontSize: '0.75rem',
          color: '#7A95A8',
          lineHeight: 1.6,
          marginBottom: 12,
        }}>
          {member.curriculum[0]}
          {member.curriculum.length > 1 && (
            <> · {member.curriculum[1]}</>
          )}
        </div>
        {/* LinkedIn */}
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontSize: '0.7rem',
            fontWeight: 600,
            color: '#1D72B8',
            textDecoration: 'none',
            letterSpacing: '0.04em',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
          onMouseLeave={e => (e.currentTarget.style.color = '#1D72B8')}
          onClick={e => e.stopPropagation()}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
          LinkedIn
        </a>
      </div>
    </div>
  )
}
