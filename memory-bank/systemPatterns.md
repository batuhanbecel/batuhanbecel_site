# System Patterns

## Architecture
- **App Router**: Next.js 15 with app directory structure
- **Server Components**: Default for static content
- **Client Components**: For interactive elements (navigation, lightbox, theme)

## Component Patterns
- Atomic design: Small, reusable components
- Props-based configuration
- TypeScript interfaces for all props
- ThemeProvider context for dark/light mode

## Navigation Pattern
- Desktop: Floating vertical nav on left with glass blur
- Mobile: Bottom navigation bar with glass blur
- Icon-based with tooltips (desktop)
- Intersection Observer for active section detection
- Smooth scroll behavior
- Theme toggle button integrated

## Portfolio Pattern
- Dynamic image loading from /public/portfolio-images
- Masonry grid layout (CSS columns)
- Lightbox with keyboard navigation (←, →, Esc)
- Next/Image for optimization

## Styling Pattern
- Tailwind utility classes
- CSS variables for theme colors (light/dark)
- Glass morphism: backdrop-blur with semi-transparent backgrounds
- Responsive: mobile-first approach
- Inter font from Google Fonts

## Animation Pattern
- Framer Motion for entrance animations
- hover-lift effect for cards
- Gradient hover effects on skill cards
- Smooth theme transitions
- AnimatePresence for theme icon rotation

## Theme Pattern
- ThemeProvider wraps app
- localStorage persistence
- System preference detection
- CSS class-based switching (.light / .dark)
