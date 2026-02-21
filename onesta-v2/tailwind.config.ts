import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          deep:   '#080F18',
          mid:    '#0D1B2A',
          card:   '#111E2E',
          border: '#1A2E44',
          steel:  '#2D4E6B',
        },
        accent: {
          DEFAULT: '#1D72B8',
          hover:   '#1560A0',
          glow:    'rgba(29,114,184,0.25)',
        },
        gray: {
          cool:  '#7A95A8',
          muted: '#4A6070',
        },
        'off-white': '#F4F7FA',
        'blue-tint': '#C8D8E8',
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.8rem, 5vw, 4.2rem)', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'h2':      ['clamp(2rem, 3vw, 2.8rem)',   { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'h3':      ['clamp(1.6rem, 2.5vw, 2.2rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      },
      boxShadow: {
        'card':      '0 4px 24px rgba(13,27,42,0.12)',
        'card-hover':'0 8px 40px rgba(13,27,42,0.20)',
        'glow':      '0 0 40px rgba(29,114,184,0.15)',
        'glow-lg':   '0 0 80px rgba(29,114,184,0.2)',
        'btn':       '0 10px 30px rgba(29,114,184,0.45)',
        'nav-btn':   '0 6px 20px rgba(29,114,184,0.4)',
      },
      animation: {
        'fade-down': 'fadeDown 0.6s ease both',
        'fade-up':   'fadeUp 0.7s ease both',
        'pulse-dot': 'pulseDot 2s infinite',
        'scroll-pulse': 'scrollPulse 2s infinite',
        'line-reveal': 'lineReveal 0.5s ease forwards',
      },
      keyframes: {
        fadeDown: {
          from: { opacity: '0', transform: 'translateY(-12px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.5', transform: 'scale(0.8)' },
        },
        scrollPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%':      { opacity: '1' },
        },
        lineReveal: {
          to: { transform: 'scaleX(1)' },
        },
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}

export default config
