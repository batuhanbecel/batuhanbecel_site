# Tech Context

## Technologies
- **Next.js 15.5.9**: App Router, Server Components
- **Tailwind CSS 4**: Utility-first styling
- **Framer Motion 11**: Animations
- **TypeScript 5.7**: Type safety
- **Lucide React**: Icons
- **Inter Font**: Google Fonts

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
- next: ^15.1.3
- react: ^19.0.0
- tailwindcss: ^4.0.0
- framer-motion: ^11.15.0
- lucide-react: ^0.468.0

## File Structure
```
/app
  /globals.css          # Theme variables, glass morphism
  /layout.tsx           # ThemeProvider, Navigation
  /page.tsx             # Main page sections
  /portfolio/page.tsx   # Full portfolio gallery
/components
  /ThemeProvider.tsx    # Dark/light mode context
  /Navigation.tsx       # Glass nav, bottom on mobile
  /Hero.tsx             # Social icons (custom SVGs)
  /About.tsx
  /Experience.tsx
  /Education.tsx
  /Skills.tsx
  /PortfolioPreview.tsx
  /Lightbox.tsx
  /MasonryGrid.tsx
/public
  /portfolio-images/
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
