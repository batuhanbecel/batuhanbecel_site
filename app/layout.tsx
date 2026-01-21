import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Batuhan Becel | Professional Retoucher',
  description: 'Professional retoucher based in Istanbul, Türkiye. Creative visuals, 3D projects, and high-end retouching for brands and agencies.',
  keywords: ['retoucher', 'photo retouching', 'creative designer', 'Istanbul', 'Batuhan Becel'],
  authors: [{ name: 'Batuhan Becel' }],
  openGraph: {
    title: 'Batuhan Becel | Professional Retoucher',
    description: 'Professional retoucher based in Istanbul, Türkiye.',
    type: 'website',
    locale: 'en_US',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <Navigation />
          <main className="pb-24 md:pb-0 md:ml-20">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
