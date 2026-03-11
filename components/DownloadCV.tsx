'use client'

import { Download } from 'lucide-react'
import { useLanguage } from './LanguageProvider'

export default function DownloadCV() {
  const { locale } = useLanguage()
  
  return (
    <a
      href="/cv/Batuhan%20Becel.pdf"
      download="Batuhan Becel.pdf"
      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-[var(--accent)] text-white rounded-lg hover:bg-[var(--accent-hover)] transition-colors"
    >
      <Download size={16} />
      {locale === 'tr' ? 'CV İndir' : 'Download CV'}
    </a>
  )
}
