'use client'

import { motion } from 'framer-motion'
import { GraduationCap, School } from 'lucide-react'
import { useLanguage } from './LanguageProvider'

const educationEN = [
  {
    period: '2018 – 2023',
    degree: 'Bachelor of Public Relations and Publicity',
    institution: 'Marmara University',
    details: 'Faculty of Communication',
  },
  {
    period: '2014 – 2018',
    degree: 'High School Diploma',
    institution: 'Istanbul Burhan Felek Anatolian High School',
    details: 'Visual Communication & Design Focus',
  },
]

const educationTR = [
  {
    period: '2018 – 2023',
    degree: 'Halkla İlişkiler ve Tanıtım Lisans',
    institution: 'Marmara Üniversitesi',
    details: 'İletişim Fakültesi',
  },
  {
    period: '2014 – 2018',
    degree: 'Lise Diploması',
    institution: 'İstanbul Burhan Felek Anadolu Lisesi',
    details: 'Görsel İletişim & Tasarım Odaklı',
  },
]

export default function Education() {
  const { locale } = useLanguage()
  const education = locale === 'tr' ? educationTR : educationEN
  return (
    <section
      id="education"
      className="min-h-screen flex items-center py-24 section-alt"
    >
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-sm md:text-base text-[var(--muted)] tracking-widest uppercase mb-4 font-medium">
            {locale === 'tr' ? 'Eğitim' : 'Education'}
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            {locale === 'tr' ? (
              <>Akademik <span className="text-gradient">geçmiş</span></>
            ) : (
              <>Academic <span className="text-gradient">background</span></>
            )}
          </h3>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[var(--border)] md:-translate-x-1/2" />
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-start gap-6 md:gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`hidden md:block flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-[var(--card)] border border-[var(--border)] text-[var(--muted)]">
                    {edu.period}
                  </span>
                </div>
                
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[var(--accent)] -translate-x-1/2 mt-2 ring-4 ring-[var(--background)]" />
                
                <div className="flex-1 ml-10 md:ml-0">
                  <div className="card p-5">
                    <span className="md:hidden inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--border)] text-[var(--muted)] mb-3">
                      {edu.period}
                    </span>
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)]">
                        {index === 0 ? <GraduationCap size={18} /> : <School size={18} />}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{edu.degree}</h4>
                        <p className="text-sm text-[var(--muted)] font-medium mb-2">{edu.institution}</p>
                        <p className="text-sm text-[var(--muted)]">{edu.details}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
