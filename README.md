# Batuhan Becel Portfolio

Personal portfolio website for Batuhan Becel, a professional retoucher based in Istanbul, Türkiye.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel / Docker

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
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

## Docker

### Development

```bash
docker-compose --profile dev up
```

### Production

```bash
docker-compose up -d
```

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
