'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import dynamic from 'next/dynamic'
import { useLanguage } from './LanguageProvider'

const DownloadCV = dynamic(() => import('./DownloadCV'), { ssr: false })
const Mail = dynamic(() => import('lucide-react').then(mod => mod.Mail), { ssr: false })
const Instagram = dynamic(() => import('lucide-react').then(mod => mod.Instagram), { ssr: false })
const Linkedin = dynamic(() => import('lucide-react').then(mod => mod.Linkedin), { ssr: false })
const Phone = dynamic(() => import('lucide-react').then(mod => mod.Phone), { ssr: false })
const Music = dynamic(() => import('lucide-react').then(mod => mod.Music), { ssr: false })
const ArrowDown = dynamic(() => import('lucide-react').then(mod => mod.ArrowDown), { ssr: false })

const titlesEN = ['Retoucher', 'Creative Designer', 'Video Editor', 'Visual Artist']
const titlesTR = ['Rötuşçu', 'Yaratıcı Tasarımcı', 'Video Editörü', 'Görsel Sanatçı']

const socialLinks = [
  { href: 'https://www.behance.net/batuhanbecel', label: 'Behance', icon: BehanceIcon },
  { href: 'https://www.linkedin.com/in/batuhanbecel/', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://www.instagram.com/batuhanbecel_/', label: 'Instagram', icon: Instagram },
  { href: 'https://open.spotify.com/user/batuhanbecel?si=b28af4e5d9fa4bb9', label: 'Spotify', icon: Music },
  { href: 'mailto:batuhanbecel@gmail.com', label: 'Email', icon: Mail },
  { href: 'tel:+905411670898', label: 'Phone', icon: Phone },
]

function BehanceIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
    </svg>
  )
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const [titleIndex, setTitleIndex] = useState(0)
  const { locale } = useLanguage()
  const titles = locale === 'tr' ? titlesTR : titlesEN

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [titles.length])

  return (
    <section ref={containerRef} id="hero" className="min-h-screen relative bg-[var(--bg)] flex items-center justify-center">
      {/* Centered content */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-6 pt-24 pb-20 md:pt-28 md:pb-24 flex flex-col items-center text-center">
        {/* Memoji - top center */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 mb-10"
        >
          <div className="absolute inset-2 rounded-full bg-[var(--accent)]/8 blur-2xl" />
          <div className="relative w-full h-full rounded-full overflow-hidden bg-[var(--surface)] border border-[var(--border)]">
            <Image
              src="/memoji.png"
              alt="Batuhan Becel"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, 224px"
              quality={95}
              priority
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[0.95] text-[var(--fg)] mb-4"
        >
          Batuhan <span className="text-[var(--accent)]">Becel</span>
        </motion.h1>

        {/* Rotating role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-[var(--fg-secondary)] font-light mb-6 min-h-[1.5em]"
        >
          {titles[titleIndex]}
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm sm:text-base text-[var(--muted)] leading-relaxed max-w-md mb-8"
        >
          {locale === 'tr'
            ? 'İstanbul merkezli rötuşçu ve görsel hikaye anlatıcısı. 10+ yıllık deneyimle markalar için yaratıcı görseller üretiyorum.'
            : 'Istanbul-based retoucher and visual storyteller. Crafting creative visuals for brands with 10+ years of experience.'}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          <DownloadCV />
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-[var(--fg)] border border-[var(--border-strong)] rounded-lg hover:bg-[var(--surface)] transition-colors"
          >
            {locale === 'tr' ? 'Portfolyo' : 'View Work'}
          </a>
        </motion.div>

        {/* Social row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-2"
        >
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={label === 'Email' || label === 'Phone' ? '_self' : '_blank'}
              rel={label === 'Email' || label === 'Phone' ? '' : 'noopener noreferrer'}
              className="w-9 h-9 flex items-center justify-center rounded-lg text-[var(--muted)] hover:text-[var(--accent)] hover:bg-[var(--accent-muted)] transition-colors"
              aria-label={label}
            >
              <Icon size={17} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[var(--muted)] opacity-40">
        <ArrowDown size={16} className="animate-bounce" />
      </div>
    </section>
  )
}
