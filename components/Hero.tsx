'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import { Mail, MapPin, Instagram, Linkedin, Phone, Music } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useLanguage } from './LanguageProvider'

const DownloadCV = dynamic(() => import('./DownloadCV'), { ssr: false })
const ArrowRight = dynamic(() => import('lucide-react').then(mod => mod.ArrowRight), { ssr: false })
const MusicPlayer = dynamic(() => import('./SpotifyPlayer'), { ssr: false })

const titlesEN = ['Retoucher', 'Wordpress Designer', 'Video Editor', 'Creative Designer']
const titlesTR = ['Rötuşçu', 'Wordpress Tasarımcısı', 'Video Editörü', 'Yaratıcı Tasarımcı']

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
  const [isMobile, setIsMobile] = useState(false)
  const [titleIndex, setTitleIndex] = useState(0)
  const { locale } = useLanguage()
  
  const titles = locale === 'tr' ? titlesTR : titlesEN
  const [istanbulTime, setIstanbulTime] = useState('')
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])
  
  useEffect(() => {
    const updateTime = () => {
      const time = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Europe/Istanbul',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      })
      setIstanbulTime(time)
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])
  
  // Mouse position tracking
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  
  // Smooth spring physics for parallax
  const springConfig = { damping: 50, stiffness: 100 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)
  
  // Parallax transforms for different layers
  const layer1X = useTransform(smoothX, [0, 1], [-15, 15])
  const layer1Y = useTransform(smoothY, [0, 1], [-10, 10])
  const layer2X = useTransform(smoothX, [0, 1], [10, -10])
  const layer2Y = useTransform(smoothY, [0, 1], [8, -8])
  const layer3X = useTransform(smoothX, [0, 1], [-8, 8])
  const layer3Y = useTransform(smoothY, [0, 1], [-6, 6])
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  useEffect(() => {
    if (isMobile) return
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      mouseX.set(x)
      mouseY.set(y)
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isMobile, mouseX, mouseY])

  return (
    <section
      ref={containerRef}
      id="hero"
      className="min-h-screen relative overflow-hidden bg-[var(--background)]"
    >
      {/* Music Player - Top Left */}
      <MusicPlayer />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 md:px-12 lg:px-24 pt-16 pb-24 md:py-0">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            
            {/* Left - Text Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              {/* Greeting */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[var(--muted)] text-sm md:text-base mb-4"
              >
                {locale === 'tr' ? 'Merhaba, ben' : 'Hello there, I am'}
              </motion.p>
              
              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-3 md:mb-4"
              >
                <span className="text-gradient">Batuhan</span> Becel
              </motion.h1>
              
              {/* Role with rotating text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-[var(--muted)] mb-4 md:mb-6"
              >
                <span className="text-[var(--accent)]">{titles[titleIndex]}</span>
              </motion.p>
              
              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-[var(--muted)] text-sm sm:text-base md:text-lg max-w-md leading-relaxed mb-6 md:mb-8 mx-auto lg:mx-0"
              >
                {locale === 'tr' ? "10+ yıllık deneyime sahip yaratıcı bir profesyonelim. Fotoğraf rötuşu, video düzenleme ve görsel içerik üretimi konularında uzmanım. Sektörde 100'den fazla projede çalıştım." : 'Creative professional with 10+ years of experience in photo retouching, video editing, and visual content creation. Worked on 100+ projects with clients.'}
              </motion.p>
              
              {/* CTA and Status */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col items-center justify-center lg:items-start lg:justify-start gap-4 mb-6 md:mb-8"
              >
                {/* Top row: CV and Portfolio */}
                <div className="flex flex-wrap items-center gap-3 md:gap-4">
                  <DownloadCV />
                  <a 
                    href="/portfolio"
                    className="btn btn-outline h-10"
                  >
                    {locale === 'tr' ? 'Portfolyo' : 'Portfolio'}
                    <ArrowRight size={16} />
                  </a>
                </div>
                
                {/* Bottom row: Contact and Status */}
                <div className="flex flex-wrap items-center gap-3 md:gap-4">
                  <a 
                    href="mailto:batuhanbecel@gmail.com"
                    className="btn btn-solid h-10"
                  >
                    {locale === 'tr' ? 'İletişim' : 'Contact'}
                    <Mail size={16} />
                  </a>
                  <div className="flex items-center gap-2 text-[var(--muted)] text-sm h-10">
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 bg-[var(--accent)] rounded-full"
                    />
                    {locale === 'tr' ? 'İş birliğine açığım' : 'Available for collaboration'}
                  </div>
                </div>
              </motion.div>
              
              </div>
            
            {/* Right - Photo with Social Icons */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg aspect-[3/4] mx-auto lg:mx-0">
                {/* Photo container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                  <Image
                    src="/profile.jpg"
                    alt="Batuhan Becel"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 512px"
                    quality={90}
                    priority
                  />
                  {/* Gradient overlay for social icons */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Social icons floating on the right edge */}
                <div className="absolute -right-3 md:-right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 md:gap-3">
                  {socialLinks.map(({ href, label, icon: Icon }, index) => (
                    <motion.a
                      key={label}
                      href={href}
                      target={label === 'Email' || label === 'Phone' ? '_self' : '_blank'}
                      rel={label === 'Email' || label === 'Phone' ? '' : 'noopener noreferrer'}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.1, x: 4 }}
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[var(--card)] border border-[var(--border)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all shadow-lg"
                      aria-label={label}
                    >
                      <Icon size={16} className="md:w-[18px] md:h-[18px]" />
                    </motion.a>
                  ))}
                </div>
                
                {/* Decorative border */}
                <div className="absolute -inset-1 rounded-2xl border border-[var(--border)] -z-10" />
                
                {/* Accent corner decoration */}
                <div className="absolute -bottom-2 -left-2 w-12 h-12 md:w-16 md:h-16 border-l-2 border-b-2 border-[var(--accent)] rounded-bl-2xl -z-10" />
                <div className="absolute -top-2 -right-2 w-12 h-12 md:w-16 md:h-16 border-r-2 border-t-2 border-[var(--accent)] rounded-tr-2xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Location & Time badge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute top-8 left-1/2 -translate-x-1/2 md:top-12 z-20 hidden md:block"
      >
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-2 text-[var(--muted)] text-sm">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-[var(--accent)] rounded-full"
            />
            Istanbul, Türkiye
          </div>
          <div className="text-[var(--muted)] text-xs font-mono tracking-wider opacity-60">
            {istanbulTime}
          </div>
        </div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-20"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[var(--muted)] text-xs tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[var(--accent)] to-transparent" />
        </motion.div>
      </motion.a>
    </section>
  )
}
