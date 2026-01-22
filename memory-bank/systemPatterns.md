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
- Accent color for active/hover states
- Intersection Observer for active section detection
- Smooth scroll behavior

## Portfolio Pattern
- Dynamic image loading from /public/portfolio-images
- Masonry grid layout (CSS columns)
- Lightbox with keyboard navigation (←, →, Esc)
- Next/Image for optimization

## Styling Pattern
- Tailwind utility classes + custom CSS classes
- CSS variables for theme colors (light/dark)
- Accent color system (#6366f1 / #818cf8)
- Alternating section backgrounds (section-alt)
- Card class for content containers
- icon-btn class for icon buttons
- btn-primary class for CTA buttons
- progress-bar/progress-fill for skills
- Responsive: mobile-first approach
- Inter font from Google Fonts

## Animation Pattern
- Framer Motion for entrance animations
- Card hover: border-color change + shadow + translateY
- Progress bar fill animation on scroll
- Smooth theme transitions
- AnimatePresence for theme icon rotation

## Theme Pattern
- ThemeProvider wraps app
- localStorage persistence
- System preference detection
- CSS class-based switching (.light / .dark)

## Section Layout Pattern
- Hero: Full viewport, centered content
- About: section-alt background, card container
- Experience: Timeline layout, alternating sides
- Education: section-alt background, grid cards
- Skills: section-alt background, progress bars
- Portfolio: Grid layout, card hover effects
