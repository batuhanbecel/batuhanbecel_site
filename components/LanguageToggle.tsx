'use client'

import { motion } from 'framer-motion'
import { useLanguage } from './LanguageProvider'
import { Globe } from 'lucide-react'

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage()

  return (
    <motion.button
      onClick={() => setLocale(locale === 'en' ? 'tr' : 'en')}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--card)] border border-[var(--border)] text-sm font-medium hover:border-[var(--accent)] transition-all"
      aria-label="Toggle language"
    >
      <Globe size={16} />
      <span className="uppercase">{locale}</span>
    </motion.button>
  )
}
