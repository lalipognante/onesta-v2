'use client'
import { useReveal } from '../lib/useReveal'
import { useIsMobile, useIsTablet } from '../lib/useMediaQuery'

const services = [
  { num: '01', icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20, stroke: '#1D72B8' }}><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M9 9h6M9 12h6M9 15h4" /></svg>, title: 'Matriz de Riesgo', body: 'Identificamos y mapeamos los riesgos específicos de tu actividad con entrevistas personalizadas y cuestionarios de diagnóstico profundo.' },
  { num: '02', icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20, stroke: '#1D72B8' }}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>, title: 'Programas de Integridad', body: 'Diseño e implementación de programas adaptados a tu empresa: código de ética, políticas internas y protocolos de interacción pública.' },
  { num: '03', icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20, stroke: '#1D72B8' }}><path d="M18 20V10M12 20V4M6 20v-6" /></svg>, title: 'Capacitación', body: 'Seminarios y capacitaciones diseñadas a medida de cada área, con evaluación de aprendizaje y metodologías didácticas efectivas.' },
  { num: '04', icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20, stroke: '#1D72B8' }}><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>, title: 'Asesoramiento Externo', body: 'Apoyo permanente para la gestión continua del programa de integridad diseñado para tu compañía.' },
  { num: '05', icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20, stroke: '#1D72B8' }}><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>, title: 'Alineamientos ISO', body: 'Acompañamiento para certificación ISO 37001 (Anticorrupción) e ISO 37301 (Compliance) con estándares internacionales.' },
  { num: '06', icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20, stroke: '#1D72B8' }}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>, title: 'Investigaciones Internas', body: 'Gestión y judicialización de denuncias recibidas a través de la línea ética, con protocolos de confidencialidad y trazabilidad.' },
]

export default function Services() {
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  const [headerRef, headerVisible] = useReveal()

  const cols = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'

  return (
    <section id="services" style={{ background: '#080F18', padding: isMobile ? '80px 0' : '120px 0' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: isMobile ? '0 24px' : '0 60px' }}>
        <div ref={headerRef} className={`reveal${headerVisible ? ' visible' : ''}`}
          style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'flex-start', justifyContent: 'space-between', marginBottom: isMobile ? 40 : 64, gap: 24 }}>
          <div>
            <div className="section-label">Nuestros servicios</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15, maxWidth: 440, margin: 0 }}>
              Todo lo que tu empresa necesita para operar con integridad.
            </h2>
          </div>
          {!isMobile && <p style={{ maxWidth: 360, color: '#7A95A8', fontSize: '0.95rem', lineHeight: 1.75, paddingTop: 8 }}>Desde el diagnóstico inicial hasta la certificación ISO, diseñamos cada etapa del programa con vos.</p>}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: cols, gap: isMobile ? 12 : 16 }}>
          {services.map((s, i) => <ServiceCard key={s.num} service={s} delay={((i % 3) + 1) as 1|2|3} isMobile={isMobile} />)}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, delay, isMobile }: { service: typeof services[0]; delay: 1|2|3; isMobile: boolean }) {
  const [ref, visible] = useReveal()
  return (
    <div ref={ref} className={`reveal reveal-delay-${delay} service-card-glow${visible ? ' visible' : ''}`}
      style={{ background: '#111E2E', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: isMobile ? '28px 24px' : '36px 32px', position: 'relative', cursor: 'pointer', transition: 'all 0.3s ease', overflow: 'hidden' }}>
      <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', color: '#1D72B8', marginBottom: 20, opacity: 0.7 }}>{service.num}</div>
      <div style={{ width: 40, height: 40, border: '1px solid rgba(29,114,184,0.3)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>{service.icon}</div>
      <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 12, color: '#FFFFFF', letterSpacing: '-0.01em' }}>{service.title}</h3>
      <p style={{ fontSize: '0.84rem', color: '#7A95A8', lineHeight: 1.7, marginBottom: 24 }}>{service.body}</p>
      <span className="service-link-arrow" style={{ fontSize: '0.78rem', fontWeight: 600, color: '#1D72B8', letterSpacing: '0.03em', display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'gap 0.2s' }}>Ver más →</span>
    </div>
  )
}
