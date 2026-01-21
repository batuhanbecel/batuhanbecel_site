import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'

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
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main className="ml-0 md:ml-16">
          {children}
        </main>
      </body>
    </html>
  )
}
