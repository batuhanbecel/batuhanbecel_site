# Tech Context

## Technologies
- **Next.js 16.1.3**: App Router, Server Components
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Subtle animations
- **TypeScript**: Type safety

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
- next: 16.1.3
- react: 19.x
- tailwindcss: 4.x
- framer-motion: 11.x
- lucide-react: icons

## File Structure
```
/app
  /layout.tsx
  /page.tsx
  /portfolio/page.tsx
/components
  /Navigation.tsx
  /Hero.tsx
  /About.tsx
  /Experience.tsx
  /Education.tsx
  /Skills.tsx
  /PortfolioPreview.tsx
  /Lightbox.tsx
  /MasonryGrid.tsx
/public
  /portfolio-images/
```

## Deployment
- Platform: Vercel
- Domain: Custom domain
- Build: `npm run build`
