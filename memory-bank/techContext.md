# Tech Context

## Technologies
- **Next.js 16.1.4**: App Router, Server Components, Turbopack
- **Tailwind CSS 4**: Utility-first styling
- **Framer Motion 11**: Animations
- **TypeScript 5.7**: Type safety
- **Lucide React**: Icons
- **Inter Font**: Google Fonts
- **@react-pdf/renderer**: Dynamic PDF generation
- **clsx + tailwind-merge**: Utility class helpers

## Development Setup
```bash
npm install
npm run dev
```

## Docker Setup
```bash
docker-compose up -d
```

## Dependencies
- next: 16.1.4
- react: ^19.0.0
- tailwindcss: ^4.0.0
- framer-motion: ^11.15.0
- lucide-react: ^0.468.0
- @react-pdf/renderer: ^4.3.2
- clsx: ^2.1.1
- tailwind-merge: ^3.4.0

## File Structure
```
/app
  /globals.css          # Theme variables, design system
  /layout.tsx           # Providers, Navigation, PageTransition
  /page.tsx             # Main page sections
  /portfolio/page.tsx   # Full portfolio gallery
  /not-found.tsx        # Custom 404 page
  /sitemap.ts           # Dynamic sitemap
  /robots.ts            # Robots.txt
  /manifest.ts          # PWA manifest
/components
  /ThemeProvider.tsx    # Dark/light mode context
  /LanguageProvider.tsx # Multi-language context (EN/TR)
  /Navigation.tsx       # Glass nav, bottom on mobile
  /Hero.tsx             # Social icons, DownloadCV
  /About.tsx
  /Experience.tsx
  /Education.tsx
  /Skills.tsx
  /PortfolioPreview.tsx
  /Lightbox.tsx
  /MasonryGrid.tsx
  /PageTransition.tsx   # Page animations
  /JsonLd.tsx           # Structured data
  /Skeleton.tsx         # Loading states
  /CVDocument.tsx       # PDF CV template
  /DownloadCV.tsx       # PDF download button
  /LanguageToggle.tsx   # Language switcher
/lib
  /utils.ts             # cn() helper
  /i18n.ts              # Translations (EN/TR)
/public
  /portfolio-images/
  /portfolio-images/favorites/  # Home page images
/memory-bank/           # Project documentation
```

## Key CSS Classes
- `.glass` - Glass morphism effect
- `.gradient-bg` - Background gradient
- `.text-gradient` - Text gradient
- `.hover-lift` - Hover animation

## Deployment
- Platform: Vercel
- Domain: Custom domain
- Build: `npm run build`
