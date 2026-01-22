# Batuhan Becel Portfolio

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-16.1.4-black?style=for-the-badge&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Framer_Motion-0055CC?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion">
</div>

A modern, multilingual portfolio website for Batuhan Becel, a professional retoucher and creative designer based in Istanbul, Türkiye.

## ✨ Features

- 🌍 **Multilingual Support** - Full English/Turkish translations
- 📱 **Responsive Design** - Optimized for all devices
- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations
- 🖼️ **Image Gallery** - Lightbox with click-outside-to-close functionality
- 🎵 **Music Player** - Local MP3 player with animated equalizer
- 🌙 **Dark/Light Themes** - Seamless theme switching
- ⚡ **Performance Optimized** - WebP images, lazy loading, optimized build
- 🔍 **SEO Ready** - Meta tags, structured data, sitemap
- 📧 **Contact Integration** - Email, phone, and social media links

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.4 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Image Optimization**: Sharp (WebP conversion)
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/batuhanbecel/batuhanbecel-portfolio.git
cd batuhanbecel-portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
batuhanbecel-portfolio/
├── app/                    # Next.js app directory
│   ├── globals.css         # Global styles and CSS variables
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx            # Home page
│   └── portfolio/          # Portfolio page
├── components/             # React components
│   ├── Hero.tsx            # Hero section with animations
│   ├── Navigation.tsx      # Navigation component
│   ├── Lightbox.tsx        # Image lightbox
│   └── ...
├── public/                 # Static assets
│   ├── portfolio-images/  # Portfolio images (auto-optimized)
│   ├── music/              # Music files
│   └── cv/                 # CV files
├── scripts/                # Build scripts
│   └── optimize-images.js  # Image optimization script
└── memory-bank/           # Project documentation
```

## 🎨 Customization

### Adding Portfolio Images

1. Add images to `/public/portfolio-images/`
2. Run `npm run optimize-images` to convert to WebP
3. Images are automatically optimized and displayed

### Theme Customization

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --accent: #ffbd59;        /* Accent color */
  --accent-hover: #ffd080;  /* Accent hover state */
  /* ... other variables */
}
```

### Adding Languages

1. Update `LanguageProvider.tsx` with new locale
2. Add translations to components
3. Update navigation items if needed

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run optimize-images` - Optimize portfolio images
- `npm run watch-images` - Auto-optimize new images

## 📱 Mobile Features

- **Mobile Header**: Language toggle, Istanbul time, theme switcher
- **Responsive Layout**: Optimized for all screen sizes
- **Touch-Friendly**: Large touch targets and gestures
- **Performance**: Optimized images and lazy loading

## 🌐 SEO & Performance

- **Meta Tags**: Open Graph, Twitter Cards
- **Structured Data**: JSON-LD for search engines
- **Sitemap**: Auto-generated sitemap.xml
- **Image Optimization**: 98.8% space savings with WebP
- **Performance**: Lighthouse optimized

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: batuhanbecel@gmail.com
- **Phone**: +90 541 167 0898
- **LinkedIn**: [batuhanbecel](https://www.linkedin.com/in/batuhanbecel/)
- **Instagram**: [@batuhanbecel_](https://www.instagram.com/batuhanbecel_/)
- **Behance**: [batuhanbecel](https://www.behance.net/batuhanbecel)

---

<div align="center">
  Made with ❤️ by Batuhan Becel
</div>

## Portfolio Images

Add your portfolio images to `/public/portfolio-images/`. Supported formats:
- JPG/JPEG
- PNG
- GIF
- WebP
- AVIF

Images will automatically appear on the main page preview and the `/portfolio` page.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Home page with all sections
│   ├── globals.css         # Global styles
│   └── portfolio/
│       └── page.tsx        # Full portfolio gallery
├── components/
│   ├── Navigation.tsx      # Floating vertical nav
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Experience.tsx      # Experience timeline
│   ├── Education.tsx       # Education cards
│   ├── Skills.tsx          # Skills grid
│   ├── PortfolioPreview.tsx # Portfolio preview grid
│   ├── MasonryGrid.tsx     # Masonry layout for portfolio
│   └── Lightbox.tsx        # Image lightbox with keyboard nav
├── public/
│   └── portfolio-images/   # Your portfolio images
├── memory-bank/            # Project documentation
├── Dockerfile              # Production Docker image
└── docker-compose.yml      # Docker Compose config
```

## Features

- Floating vertical navigation with active section indicator
- Smooth scrolling between sections
- Responsive design (mobile-first)
- Dark/light mode support
- Masonry grid portfolio layout
- Lightbox with keyboard navigation (←, →, Esc)
- Automatic image loading from filesystem
- SEO optimized
- Docker ready

## Deployment

### Vercel

Connect your GitHub repository to Vercel for automatic deployments.

### Docker

Build and run the production image:

```bash
docker build -t batuhanbecel-portfolio .
docker run -p 3000:3000 batuhanbecel-portfolio
```

## License

Private - All rights reserved.
