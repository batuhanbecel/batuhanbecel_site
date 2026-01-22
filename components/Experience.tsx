'use client'

import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { useLanguage } from './LanguageProvider'

const experiencesEN = [
  {
    period: 'Nov 2022 – Present',
    role: 'Retoucher',
    company: 'f/2.8 Production Agency',
    description: 'Producing creative visuals and bringing 3D projects to life.',
    current: true,
  },
  {
    period: 'May 2021 – Nov 2022',
    role: 'Creative Designer',
    company: 'Walther Kranz Agency',
    description: 'Developed social media content designs for MediaCat, Rolls-Royce Istanbul, and A1 Capital.',
    current: false,
  },
  {
    period: '2019 – 2021',
    role: 'Design Committee Leader & Executive Board Member',
    company: 'Marmara University Communication Club',
    description: 'Led creative processes and team collaboration within the Faculty of Communication.',
    current: false,
  },
  {
    period: '2014 – 2018',
    role: 'Visual Communication & Design',
    company: 'Istanbul Burhan Felek Anatolian High School',
    description: 'Created posters, panels, roll-ups, video editing, and post-production work.',
    current: false,
  },
  {
    period: '2013',
    role: "Photographer's Assistant",
    company: 'f/2.8 Production Agency',
    description: 'Gained hands-on industry experience in creative production.',
    current: false,
  },
]

const experiencesTR = [
  {
    period: 'Kas 2022 – Günümüz',
    role: 'Rötuşçu',
    company: 'f/2.8 Prodüksiyon Ajansı',
    description: 'Yaratıcı görseller üretme ve 3D projeleri hayata geçirme.',
    current: true,
  },
  {
    period: 'May 2021 – Kas 2022',
    role: 'Yaratıcı Tasarımcı',
    company: 'Walther Kranz Ajansı',
    description: 'MediaCat, Rolls-Royce İstanbul ve A1 Capital için sosyal medya içerik tasarımları geliştirdim.',
    current: false,
  },
  {
    period: '2019 – 2021',
    role: 'Tasarım Komitesi Lideri & Yönetim Kurulu Üyesi',
    company: 'Marmara Üniversitesi İletişim Kulübü',
    description: 'İletişim Fakültesi bünyesinde yaratıcı süreçleri ve takım işbirliğini yönettim.',
    current: false,
  },
  {
    period: '2014 – 2018',
    role: 'Görsel İletişim & Tasarım',
    company: 'İstanbul Burhan Felek Anadolu Lisesi',
    description: 'Poster, pano, roll-up tasarımı, video düzenleme ve post-prodüksiyon çalışmaları.',
    current: false,
  },
  {
    period: '2013',
    role: 'Fotoğrafçı Asistanı',
    company: 'f/2.8 Prodüksiyon Ajansı',
    description: 'Yaratıcı prodüksiyon alanında uygulamalı sektör deneyimi kazandım.',
    current: false,
  },
]

export default function Experience() {
  const { locale } = useLanguage()
  const experiences = locale === 'tr' ? experiencesTR : experiencesEN
  return (
    <section
      id="experience"
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
            {locale === 'tr' ? 'Deneyim' : 'Experience'}
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            {locale === 'tr' ? (
              <>Profesyonel <span className="text-gradient">yolculuk</span></>
            ) : (
              <>Professional <span className="text-gradient">journey</span></>
            )}
          </h3>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[var(--border)] md:-translate-x-1/2" />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
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
                  <span className={`inline-block px-4 py-1.5 text-sm font-medium rounded-full ${
                    exp.current 
                      ? 'bg-[var(--accent)] text-white' 
                      : 'bg-[var(--card)] border border-[var(--border)] text-[var(--muted)]'
                  }`}>
                    {exp.period}
                  </span>
                </div>
                
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[var(--accent)] -translate-x-1/2 mt-2 ring-4 ring-[var(--background)]" />
                
                <div className="flex-1 ml-10 md:ml-0">
                  <div className="card p-5">
                    <span className={`md:hidden inline-block px-3 py-1 text-xs font-medium rounded-full mb-3 ${
                      exp.current 
                        ? 'bg-[var(--accent)] text-white' 
                        : 'bg-[var(--border)] text-[var(--muted)]'
                    }`}>
                      {exp.period}
                    </span>
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)]">
                        <Briefcase size={18} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{exp.role}</h4>
                        <p className="text-sm text-[var(--muted)] font-medium mb-2">{exp.company}</p>
                        <p className="text-sm text-[var(--muted)]">{exp.description}</p>
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
