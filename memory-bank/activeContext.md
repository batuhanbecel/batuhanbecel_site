# Active Context

## Current Focus
Portfolio Website - Feature Complete with Full Turkish/English Support

## Recent Changes (Latest Session)
- **Full Multi-language Support (EN/TR)**:
  - All sections translated: Hero, About, Experience, Education, Skills, Portfolio
  - Navigation labels translated
  - Language toggle in navigation (Globe icon on desktop, locale code on mobile)
  - LanguageProvider context manages locale state
- **Hero Section Improvements**:
  - Static description (no longer changes with rotating title)
  - Centered content on mobile
  - Social icons integrated with profile picture (floating on right edge)
  - Red accent corner decorations on photo
- **Static CV Download**:
  - Replaced dynamic PDF generation with static PDF link
  - CV file location: /public/cv/Batuhan_Becel_CV.pdf
- **SEO Enhancements**:
  - Comprehensive metadata with Open Graph and Twitter cards
  - JSON-LD structured data (Person, Website, Portfolio schemas)
  - Dynamic sitemap.xml and robots.txt
- **PWA Support**:
  - manifest.ts with app icons and theme colors
- **Page Transitions**:
  - PageTransition component with framer-motion
- **Custom 404 Page**:
  - Styled error page matching design system
- **Next.js 16.1.4**:
  - Updated from 15.x to 16.1.4 with Turbopack

## Design System (globals.css)

### Typography
- `.text-display`: clamp(3rem, 8vw, 6rem) - Hero name
- `.text-h1`: clamp(2rem, 5vw, 3.5rem) - Section titles
- `.text-body`: 1rem, line-height 1.6
- `.text-label`: 0.75rem, uppercase, tracking 0.1em

### Spacing
- Section padding: py-24 (6rem)
- Container narrow: max-w-48rem (768px)
- Header margin: mb-12 (3rem)
- Card padding: p-5 (1.25rem)
- Gap between items: gap-4 or gap-6

### Components
- **Buttons**: `.btn .btn-solid` / `.btn .btn-outline` / `.btn .btn-ghost`
- **Cards**: `.card` (0.75rem radius, 0.2s transition, border-color hover)
- **Icons**: lucide-react library, size 16-20px

### Interactions
- Hover: border-color change to accent, subtle shadow
- Transitions: 0.2s ease (fast, responsive)
- No aggressive transforms on cards

### Colors (CSS Variables)
- `--background`: #0a0a0a (dark) / #fafafa (light)
- `--foreground`: #fafafa (dark) / #18181b (light)
- `--accent`: #dc2626 (red)
- `--muted`: #a1a1aa (dark) / #71717a (light)
- `--card`: #18181b (dark) / #ffffff (light)
- `--border`: #27272a (dark) / #e4e4e7 (light)

## Section Backgrounds
- Hero: default
- About: section-alt
- Experience: default
- Education: section-alt
- Skills: default
- Portfolio: section-alt

## Important Notes
- Contact: batuhanbecel@gmail.com, +90 541 167 0898
- Icons: lucide-react (except Behance - custom SVG)
- Profile photo: /public/profile.jpg
- Skill icons: /public/icons/ folder with CSS filter for dark/light
- Favorites folder: /public/portfolio-images/favorites/ (shows on home page)

## Suggested Future Features
### High Priority
- Contact form with email integration (Resend/EmailJS/Formspree)
- SEO: Open Graph images, JSON-LD structured data, sitemap.xml
- Custom 404 page
- Loading states/skeleton loaders

### Medium Priority
- Testimonials section with carousel
- Services/pricing section
- Blog/articles section
- Project detail pages (individual portfolio items)
- Resume/CV PDF download

### Nice to Have
- Page transition animations
- Analytics (Vercel/Google)
- PWA support
- Multi-language (TR/EN)
- Contact section on home page
