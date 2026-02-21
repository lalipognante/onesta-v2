# ONESTÀ Compliance v2

Proyecto nuevo en Next.js 14 con App Router, TypeScript y Tailwind.

## Estructura de carpetas

```
onesta-v2/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx          # Nav fija con blur + scroll effect
│   │   ├── Hero.tsx            # Hero full-screen con animaciones
│   │   ├── TrustBand.tsx       # Banda de confianza/presencia
│   │   ├── Why.tsx             # Por qué Onestà — 3 pilares
│   │   ├── Services.tsx        # 6 servicios en grilla 3 cols
│   │   ├── Process.tsx         # Proceso en timeline — sticky left
│   │   ├── Team.tsx            # 7 miembros con next/image
│   │   ├── Law.tsx             # Sección Ley 27.401
│   │   ├── CtaFinal.tsx        # CTA final con WhatsApp
│   │   ├── Footer.tsx          # Footer 4 columnas
│   │   └── WaFloat.tsx         # Botón flotante WhatsApp
│   ├── lib/
│   │   ├── team.ts             # Data de los 7 miembros del equipo
│   │   └── useReveal.ts        # Hook scroll-reveal con IntersectionObserver
│   ├── globals.css             # Design tokens + animaciones + CSS global
│   ├── layout.tsx              # Root layout con metadata y fuente
│   └── page.tsx                # Home — ensambla todos los componentes
├── public/
│   ├── manosLogo2.png          # Logo oficial (copiar desde repo actual)
│   ├── gabrielPognante.jpg
│   ├── agustinPascualini.jpg
│   ├── edgardoRuibal.jpg
│   ├── federicoAlfaro.jpg
│   ├── constanzaZucchella2.jpeg
│   ├── concepcionBonetto.jpg
│   └── florenciaBonino2.jpeg
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
└── package.json
```

## Setup

```bash
# 1. Crear carpeta e inicializar
mkdir onesta-v2 && cd onesta-v2

# 2. Copiar todos los archivos del proyecto

# 3. Copiar imágenes desde el repo anterior
#    Origen: next-app/public/
#    Destino: public/
#    Archivos necesarios:
#      manosLogo2.png
#      gabrielPognante.jpg
#      agustinPascualini.jpg
#      edgardoRuibal.jpg
#      federicoAlfaro.jpg
#      constanzaZucchella2.jpeg
#      concepcionBonetto.jpg
#      florenciaBonino2.jpeg

# 4. Instalar dependencias
npm install

# 5. Correr en desarrollo
npm run dev
```

## Deploy en Vercel

```bash
# Desde la carpeta raíz del proyecto (no hay subcarpeta /next-app)
vercel
```

En Vercel, no necesitás configurar ningún subdirectorio — el proyecto está en la raíz.

## Notas importantes

- La fuente Plus Jakarta Sans se carga desde Google Fonts via `next/font/google` (optimizado, sin layout shift)
- Las imágenes del equipo usan `next/image` con `fill` y `sizes` correctos para optimización automática
- Los efectos hover están en inline styles con `onMouseEnter/Leave` para compatibilidad sin CSS modules
- El hook `useReveal` maneja el scroll-reveal de forma performante con IntersectionObserver
- Sin flip cards, sin background-image en CSS, sin clases legacy
