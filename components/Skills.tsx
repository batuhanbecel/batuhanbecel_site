'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from './LanguageProvider'

const softwareSkills = [
  { name: 'Adobe Photoshop', percentage: 85, icon: '/icons/photoshop-svgrepo-com.svg' },
  { name: 'Adobe Lightroom', percentage: 70, icon: '/icons/adobe-light-room-cc-svgrepo-com.svg' },
  { name: 'Adobe Premiere Pro', percentage: 55, icon: '/icons/adobepremierepro-svgrepo-com.svg' },
  { name: 'Adobe After Effects', percentage: 50, icon: '/icons/adobeaftereffects-svgrepo-com.svg' },
  { name: 'Adobe Illustrator', percentage: 70, icon: '/icons/illustrator-svgrepo-com.svg' },
  { name: 'Microsoft Office', percentage: 85, icon: '/icons/microsoftoffice-svgrepo-com.svg' },
]

const languageSkillsEN = [
  { name: 'Turkish', label: 'Native' },
  { name: 'English', label: 'Advanced' },
]
const languageSkillsTR = [
  { name: 'Türkçe', label: 'Ana Dil' },
  { name: 'İngilizce', label: 'İleri Düzey' },
]

const hobbiesEN = ['Photography', 'Travel', 'Music', 'Gaming']
const hobbiesTR = ['Fotoğrafçılık', 'Seyahat', 'Müzik', 'Oyun']

const fade = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } }

export default function Skills() {
  const { locale } = useLanguage()
  const languageSkills = locale === 'tr' ? languageSkillsTR : languageSkillsEN
  const hobbies = locale === 'tr' ? hobbiesTR : hobbiesEN

  return (
    <section id="skills" className="py-28 md:py-36 bg-[var(--bg-alt)] relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[var(--accent)] opacity-[0.02] blur-[100px] rounded-full" />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section label */}
        <motion.div {...fade} className="flex items-center gap-4 mb-10">
          <div className="w-12 h-[2px] bg-gradient-to-r from-[var(--accent)] to-transparent rounded-full" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
            {locale === 'tr' ? 'Yetenekler' : 'Skills'}
          </span>
        </motion.div>

        <motion.h2 {...fade} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-5xl font-bold text-[var(--fg)] leading-tight mb-16">
          {locale === 'tr' ? 'Araçlar ve yetkinlikler.' : 'Tools & proficiency.'}
        </motion.h2>

        {/* Software Skills */}
        <div className="space-y-6 mb-20">
          {softwareSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center gap-5"
            >
              <div className="w-14 h-14 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center flex-shrink-0 shadow-sm hover:shadow-md hover:border-[var(--border-strong)] transition-all duration-300">
                <Image src={skill.icon} alt={skill.name} width={26} height={26} className="w-[26px] h-[26px] skill-icon" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-base font-semibold text-[var(--fg)]">{skill.name}</span>
                  <span className="text-sm font-bold text-[var(--accent)] tabular-nums">{skill.percentage}%</span>
                </div>
                <div className="progress-bar h-2">
                  <motion.div
                    className="progress-fill h-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages & Hobbies side by side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Languages */}
          <motion.div {...fade} transition={{ duration: 0.5, delay: 0.2 }}>
            <h3 className="text-base font-bold text-[var(--fg)] mb-5">
              {locale === 'tr' ? 'Diller' : 'Languages'}
            </h3>
            <div className="space-y-3">
              {languageSkills.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--border-strong)] hover:shadow-md transition-all duration-300">
                  <span className="text-sm font-semibold text-[var(--fg)]">{lang.name}</span>
                  <span className="text-xs text-[var(--accent)] font-bold uppercase tracking-wider">{lang.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hobbies */}
          <motion.div {...fade} transition={{ duration: 0.5, delay: 0.3 }}>
            <h3 className="text-base font-bold text-[var(--fg)] mb-5">
              {locale === 'tr' ? 'İlgi Alanları' : 'Interests'}
            </h3>
            <div className="flex flex-wrap gap-3">
              {hobbies.map((hobby) => (
                <span key={hobby} className="px-4 py-2 text-sm font-medium rounded-xl bg-[var(--surface)] border border-[var(--border)] text-[var(--fg-secondary)] hover:text-[var(--accent)] hover:border-[var(--border-accent)] hover:bg-[var(--accent-subtle)] transition-all duration-300 cursor-default">
                  {hobby}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
