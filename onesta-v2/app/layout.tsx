import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ONESTÀ Compliance | Ética Corporativa',
  description: 'Diseñamos programas de integridad a medida para tu organización. Compliance, ética corporativa y gestión de riesgos en Argentina.',
  keywords: ['compliance', 'ética corporativa', 'programas de integridad', 'ley 27401', 'Argentina', 'Córdoba'],
  openGraph: {
    title: 'ONESTÀ Compliance | Ética Corporativa',
    description: 'Diseñamos programas de integridad a medida para tu organización.',
    locale: 'es_AR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={plusJakarta.variable}>
      <body className={plusJakarta.className}>
        {children}
      </body>
    </html>
  )
}
