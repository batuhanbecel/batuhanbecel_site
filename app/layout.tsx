import type { Metadata } from 'next'
import './globals.css'
import dynamic from 'next/dynamic'
import { ThemeProvider } from '@/components/ThemeProvider'
import JsonLd from '@/components/JsonLd'
import PageTransition from '@/components/PageTransition'
import { LanguageProvider } from '@/components/LanguageProvider'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'

const Navigation = dynamic(() => import('@/components/Navigation'))
const HeaderControls = dynamic(() => import('@/components/HeaderControls'))
const MobileHeader = dynamic(() => import('@/components/MobileHeader'))
const SpotifyPlayer = dynamic(() => import('@/components/SpotifyPlayer'))

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://batuhanbecel.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Batuhan Becel | Retoucher',
    template: '%s | Batuhan Becel',
  },
  description: 'Retoucher based in Istanbul, Türkiye. Creative visuals, 3D projects, and high-end retouching for brands and agencies worldwide.',
  keywords: ['retoucher', 'photo retouching', 'creative designer', 'Istanbul', 'Batuhan Becel', 'photo editing', 'visual artist'],
  authors: [{ name: 'Batuhan Becel', url: siteUrl }],
  creator: 'Batuhan Becel',
  publisher: 'Batuhan Becel',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'tr_TR',
    url: siteUrl,
    siteName: 'Batuhan Becel',
    title: 'Batuhan Becel | Retoucher',
    description: 'Retoucher based in Istanbul, Türkiye. Creative visuals, 3D projects, and high-end retouching for brands and agencies.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Batuhan Becel - Retoucher',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Batuhan Becel | Retoucher',
    description: 'Retoucher based in Istanbul, Türkiye.',
    images: ['/og-image.png'],
    creator: '@batuhanbecel',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'en-US': '/en',
      'tr-TR': '/tr',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#fafafa" media="(prefers-color-scheme: light)" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <style>{`
          @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url('https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2') format('woff2');
          }
        `}</style>
      </head>
      <body className="antialiased">
        <JsonLd />
        <ThemeProvider>
          <LanguageProvider>
            <a 
              href="#main-content" 
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[var(--accent)] text-[var(--background)] px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
            >
              Skip to main content
            </a>
            <MobileHeader />
            <HeaderControls />
            <Navigation />
            <main id="main-content" className="pb-20 md:pb-0">
              <PageTransition>
                {children}
              </PageTransition>
            </main>
          </LanguageProvider>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
