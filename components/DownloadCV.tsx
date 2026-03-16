'use client'

import { Download } from 'lucide-react'
import { useLanguage } from './LanguageProvider'

export default function DownloadCV() {
  const { locale } = useLanguage()
  
  return (
    <a
      href="/cv/Batuhan%20Becel.pdf"
      download="Batuhan Becel.pdf"
      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-[var(--accent)] text-white rounded-xl hover:bg-[var(--accent-hover)] hover:shadow-lg hover:shadow-[var(--shadow-accent)] hover:scale-105 transition-all duration-300"
    >
      <Download size={18} />
      {locale === 'tr' ? 'CV İndir' : 'Download CV'}
    </a>
  )
}
