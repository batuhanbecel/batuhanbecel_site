'use client'

import { motion } from 'framer-motion'
import { GraduationCap, School } from 'lucide-react'
import { useLanguage } from './LanguageProvider'

const educationEN = [
  { period: '2018 – 2023', degree: 'Bachelor of Public Relations and Publicity', institution: 'Marmara University', details: 'Faculty of Communication' },
  { period: '2014 – 2018', degree: 'High School Diploma', institution: 'Istanbul Burhan Felek Anatolian High School', details: 'Visual Communication & Design Focus' },
]

const educationTR = [
  { period: '2018 – 2023', degree: 'Halkla İlişkiler ve Tanıtım Lisans', institution: 'Marmara Üniversitesi', details: 'İletişim Fakültesi' },
  { period: '2014 – 2018', degree: 'Lise Diploması', institution: 'İstanbul Burhan Felek Anadolu Lisesi', details: 'Görsel İletişim & Tasarım Odaklı' },
]

const fade = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } }

export default function Education() {
  const { locale } = useLanguage()
  const education = locale === 'tr' ? educationTR : educationEN

  return (
    <section id="education" className="py-24 md:py-32 bg-[var(--bg)]">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section label */}
        <motion.div {...fade} className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-[var(--accent)]" />
          <span className="text-xs font-medium uppercase tracking-widest text-[var(--accent)]">
            {locale === 'tr' ? 'Eğitim' : 'Education'}
          </span>
        </motion.div>

        <motion.h2 {...fade} className="text-3xl sm:text-4xl font-bold text-[var(--fg)] leading-tight mb-12">
          {locale === 'tr' ? 'Akademik geçmiş.' : 'Academic background.'}
        </motion.h2>

        {/* Education cards */}
        <div className="grid gap-4">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group p-6 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--border-strong)] transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--accent-muted)] text-[var(--accent)] flex items-center justify-center flex-shrink-0">
                  {i === 0 ? <GraduationCap size={20} /> : <School size={20} />}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-medium text-[var(--muted)] uppercase tracking-wider">{edu.period}</span>
                  <h3 className="text-lg font-semibold text-[var(--fg)] mt-1 mb-1">{edu.degree}</h3>
                  <p className="text-sm font-medium text-[var(--accent)]">{edu.institution}</p>
                  <p className="text-sm text-[var(--fg-secondary)] mt-1">{edu.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
