'use client'

import { motion } from 'framer-motion'
import { Linkedin, Instagram } from 'lucide-react'

const socialLinks = [
  { href: 'https://www.behance.net/batuhanbecel', label: 'Behance', icon: BehanceIcon },
  { href: 'https://www.instagram.com/batuhanbecel_/', label: 'Instagram', icon: Instagram },
  { href: 'https://www.linkedin.com/in/batuhanbecel/', label: 'LinkedIn', icon: Linkedin },
]

function BehanceIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12h6.5a3.5 3.5 0 1 0 0-7H3v14h7a4 4 0 1 0 0-8" />
      <path d="M14 19h6" />
      <path d="M14 15h6" />
      <path d="M17 11a4 4 0 1 1 0 8" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-3xl"
      >
        <p className="text-[var(--muted)] text-sm md:text-base mb-4 tracking-wider uppercase">
          Professional Retoucher
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6">
          Batuhan Becel
        </h1>
        <p className="text-lg md:text-xl text-[var(--muted)] max-w-xl mb-8 leading-relaxed">
          Creating compelling visual narratives through high-end retouching and creative design. Based in Istanbul, Türkiye.
        </p>
        
        <div className="flex items-center gap-4">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 border border-[var(--border)] rounded-lg hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors"
              aria-label={label}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[var(--muted)] rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-[var(--muted)] rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}
