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
    <section id="skills" className="py-24 md:py-32 bg-[var(--bg-alt)]">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section label */}
        <motion.div {...fade} className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-[var(--accent)]" />
          <span className="text-xs font-medium uppercase tracking-widest text-[var(--accent)]">
            {locale === 'tr' ? 'Yetenekler' : 'Skills'}
          </span>
        </motion.div>

        <motion.h2 {...fade} className="text-3xl sm:text-4xl font-bold text-[var(--fg)] leading-tight mb-12">
          {locale === 'tr' ? 'Araçlar ve yetkinlikler.' : 'Tools & proficiency.'}
        </motion.h2>

        {/* Software Skills */}
        <div className="space-y-5 mb-16">
          {softwareSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center flex-shrink-0">
                <Image src={skill.icon} alt={skill.name} width={22} height={22} className="w-[22px] h-[22px] skill-icon" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium text-[var(--fg)]">{skill.name}</span>
                  <span className="text-xs text-[var(--muted)] tabular-nums">{skill.percentage}%</span>
                </div>
                <div className="progress-bar h-1.5">
                  <motion.div
                    className="progress-fill h-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 + i * 0.06, ease: 'easeOut' }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages & Hobbies side by side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Languages */}
          <motion.div {...fade}>
            <h3 className="text-sm font-semibold text-[var(--fg)] mb-4">
              {locale === 'tr' ? 'Diller' : 'Languages'}
            </h3>
            <div className="space-y-3">
              {languageSkills.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between p-3 rounded-lg bg-[var(--surface)] border border-[var(--border)]">
                  <span className="text-sm font-medium text-[var(--fg)]">{lang.name}</span>
                  <span className="text-xs text-[var(--accent)] font-medium">{lang.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hobbies */}
          <motion.div {...fade}>
            <h3 className="text-sm font-semibold text-[var(--fg)] mb-4">
              {locale === 'tr' ? 'İlgi Alanları' : 'Interests'}
            </h3>
            <div className="flex flex-wrap gap-2">
              {hobbies.map((hobby) => (
                <span key={hobby} className="px-3 py-1.5 text-sm rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[var(--fg-secondary)]">
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
