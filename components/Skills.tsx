'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from './LanguageProvider'

const softwareSkills = [
  {
    name: 'Adobe Photoshop',
    percentage: 85,
    icon: '/icons/photoshop-svgrepo-com.svg',
    color: '#31A8FF',
  },
  {
    name: 'Adobe Lightroom',
    percentage: 70,
    icon: '/icons/adobe-light-room-cc-svgrepo-com.svg',
    color: '#31A8FF',
  },
  {
    name: 'Adobe Premiere Pro',
    percentage: 55,
    icon: '/icons/adobepremierepro-svgrepo-com.svg',
    color: '#9999FF',
  },
  {
    name: 'Adobe After Effects',
    percentage: 50,
    icon: '/icons/adobeaftereffects-svgrepo-com.svg',
    color: '#9999FF',
  },
  {
    name: 'Adobe Illustrator',
    percentage: 70,
    icon: '/icons/illustrator-svgrepo-com.svg',
    color: '#FF9A00',
  },
  {
    name: 'Microsoft Office',
    percentage: 85,
    icon: '/icons/microsoftoffice-svgrepo-com.svg',
    color: '#D83B01',
  },
]

const languageSkillsEN = [
  { name: 'Turkish', level: 5, label: 'Native' },
  { name: 'English', level: 4, label: 'Advanced' },
]

const languageSkillsTR = [
  { name: 'Türkçe', level: 5, label: 'Ana Dil' },
  { name: 'İngilizce', level: 4, label: 'İleri Düzey' },
]

const hobbiesEN = [
  { name: 'Photography', icon: CameraIcon },
  { name: 'Travel', icon: PlaneIcon },
  { name: 'Music', icon: MusicIcon },
  { name: 'Gaming', icon: GameIcon },
]

const hobbiesTR = [
  { name: 'Fotoğrafçılık', icon: CameraIcon },
  { name: 'Seyahat', icon: PlaneIcon },
  { name: 'Müzik', icon: MusicIcon },
  { name: 'Oyun', icon: GameIcon },
]

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill={filled ? 'currentColor' : 'none'} 
      stroke="currentColor" 
      strokeWidth="2"
      className={filled ? 'text-[var(--accent)]' : 'text-[var(--muted)]'}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function CameraIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
      <circle cx="12" cy="13" r="4"/>
    </svg>
  )
}

function PlaneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
    </svg>
  )
}

function MusicIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18V5l12-2v13"/>
      <circle cx="6" cy="18" r="3"/>
      <circle cx="18" cy="16" r="3"/>
    </svg>
  )
}

function GameIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="6" x2="10" y1="12" y2="12"/>
      <line x1="8" x2="8" y1="10" y2="14"/>
      <line x1="15" x2="15.01" y1="13" y2="13"/>
      <line x1="18" x2="18.01" y1="11" y2="11"/>
      <rect width="20" height="12" x="2" y="6" rx="2"/>
    </svg>
  )
}

function LanguageIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" x2="22" y1="12" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  )
}

export default function Skills() {
  const { locale } = useLanguage()
  const languageSkills = locale === 'tr' ? languageSkillsTR : languageSkillsEN
  const hobbies = locale === 'tr' ? hobbiesTR : hobbiesEN
  
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center py-24"
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
            {locale === 'tr' ? 'Yetenekler' : 'Skills'}
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            {locale === 'tr' ? (
              <>Yazılım <span className="text-gradient">yetkinliği</span></>
            ) : (
              <>Software <span className="text-gradient">proficiency</span></>
            )}
          </h3>
        </motion.div>

        {/* Software Skills */}
        <div className="grid gap-6 md:grid-cols-2 mb-16">
          {softwareSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-5"
            >
              <div className="flex items-center gap-4 mb-3">
                <div 
                  className="p-2.5 rounded-xl transition-colors flex items-center justify-center"
                  style={{ backgroundColor: `${skill.color}20` }}
                >
                  <Image 
                    src={skill.icon} 
                    alt={skill.name} 
                    width={24} 
                    height={24}
                    className="w-6 h-6 skill-icon"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold">{skill.name}</h4>
                    <span className="text-sm font-medium text-[var(--muted)]">{skill.percentage}%</span>
                  </div>
                </div>
              </div>
              <div className="progress-bar h-2">
                <motion.div
                  className="progress-fill h-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages & Hobbies */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Language Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                <LanguageIcon />
              </div>
              {locale === 'tr' ? 'Diller' : 'Languages'}
            </h4>
            <div className="space-y-4">
              {languageSkills.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="card p-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-medium">{lang.name}</h5>
                      <p className="text-sm text-[var(--muted)]">{lang.label}</p>
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon key={star} filled={star <= lang.level} />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hobbies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                </svg>
              </div>
              {locale === 'tr' ? 'Hobiler & İlgi Alanları' : 'Hobbies & Interests'}
            </h4>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {hobbies.slice(0, 2).map((hobby, index) => (
                  <motion.div
                    key={hobby.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="card p-4 flex items-center gap-3"
                  >
                    <div className="p-2 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] flex-shrink-0">
                      <hobby.icon />
                    </div>
                    <span className="font-medium text-sm">{hobby.name}</span>
                  </motion.div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4">
                {hobbies.slice(2, 4).map((hobby, index) => (
                  <motion.div
                    key={hobby.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (index + 2) * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="card p-4 flex items-center gap-3"
                  >
                    <div className="p-2 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] flex-shrink-0">
                      <hobby.icon />
                    </div>
                    <span className="font-medium text-sm">{hobby.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
