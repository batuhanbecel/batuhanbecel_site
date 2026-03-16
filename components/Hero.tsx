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
    <section ref={containerRef} id="hero" className="min-h-screen relative bg-[var(--bg)] flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-radial opacity-40" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--accent)] opacity-[0.03] blur-[120px] rounded-full" />
      
      {/* Centered content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 pt-28 pb-24 md:pt-32 md:pb-28 flex flex-col items-center text-center">
        {/* Memoji - top center */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 mb-12"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--accent)]/20 to-transparent blur-3xl animate-pulse" />
          <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-[var(--surface)] to-[var(--surface-hover)] border-2 border-[var(--border-strong)] shadow-xl">
            <Image
              src="/memoji.png"
              alt="Batuhan Becel"
              fill
              className="object-cover scale-105"
              sizes="(max-width: 640px) 176px, (max-width: 768px) 208px, 240px"
              quality={95}
              priority
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[0.95] text-[var(--fg)] mb-5"
        >
          Batuhan <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-hover)] bg-clip-text text-transparent">Becel</span>
        </motion.h1>

        {/* Rotating role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-xl sm:text-2xl text-[var(--fg-secondary)] font-medium mb-8 min-h-[1.75em]"
        >
          <span className="inline-block">{titles[titleIndex]}</span>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-base sm:text-lg text-[var(--fg-tertiary)] leading-relaxed max-w-xl mb-10"
        >
          {locale === 'tr'
            ? 'İstanbul merkezli rötuşçu ve görsel hikaye anlatıcısı. 10+ yıllık deneyimle markalar için yaratıcı görseller üretiyorum.'
            : 'Istanbul-based retoucher and visual storyteller. Crafting creative visuals for brands with 10+ years of experience.'}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          <DownloadCV />
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[var(--fg)] bg-[var(--surface)] border border-[var(--border-strong)] rounded-xl hover:bg-[var(--surface-hover)] hover:border-[var(--border-accent)] hover:shadow-lg transition-all duration-300"
          >
            {locale === 'tr' ? 'Portfolyo' : 'View Work'}
          </a>
        </motion.div>

        {/* Social row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex items-center justify-center gap-3"
        >
          {socialLinks.map(({ href, label, icon: Icon }, index) => (
            <motion.a
              key={label}
              href={href}
              target={label === 'Email' || label === 'Phone' ? '_self' : '_blank'}
              rel={label === 'Email' || label === 'Phone' ? '' : 'noopener noreferrer'}
              className="w-11 h-11 flex items-center justify-center rounded-xl text-[var(--fg-tertiary)] bg-[var(--surface)] border border-[var(--border)] hover:text-[var(--accent)] hover:bg-[var(--accent-subtle)] hover:border-[var(--border-accent)] hover:scale-110 transition-all duration-300"
              aria-label={label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[var(--fg-tertiary)] opacity-50 hover:opacity-100 transition-opacity"
      >
        <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
        <ArrowDown size={18} className="animate-bounce" />
      </motion.div>
    </section>
  )
}
