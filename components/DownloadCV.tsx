'use client'

import { Download } from 'lucide-react'
import { useLanguage } from './LanguageProvider'

export default function DownloadCV() {
  const { locale } = useLanguage()
  
  return (
    <a
      href="/cv/Batuhan_Becel_CV.pdf"
      download="Batuhan_Becel_CV.pdf"
      className="btn btn-outline h-10"
    >
      <Download size={16} />
      {locale === 'tr' ? 'CV İndir' : 'Download CV'}
    </a>
  )
}
