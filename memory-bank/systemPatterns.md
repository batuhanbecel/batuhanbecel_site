# System Patterns

## Architecture
- **App Router**: Next.js 16 with app directory structure
- **Server Components**: Default for static content
- **Client Components**: For interactive elements (navigation, lightbox)

## Component Patterns
- Atomic design: Small, reusable components
- Props-based configuration
- TypeScript interfaces for all props

## Navigation Pattern
- Floating vertical nav on left
- Icon-based with tooltips
- Intersection Observer for active section detection
- Smooth scroll behavior

## Portfolio Pattern
- Dynamic image loading from /public/portfolio-images
- Masonry grid layout (CSS columns or grid)
- Lightbox with keyboard navigation (←, →, Esc)
- Next/Image for optimization

## Styling Pattern
- Tailwind utility classes
- Minimal custom CSS
- CSS variables for theme colors
- Responsive: mobile-first approach

## Animation Pattern
- Framer Motion for entrance animations
- Subtle, professional transitions
- No distracting effects
