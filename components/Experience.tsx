'use client'

import { motion } from 'framer-motion'
import { useLanguage } from './LanguageProvider'

const experiencesEN = [
  { period: 'Nov 2022 – Present', role: 'Retoucher', company: 'f/2.8 Production Agency', description: 'Producing creative visuals and bringing 3D projects to life.', current: true },
  { period: 'May 2021 – Nov 2022', role: 'Creative Designer', company: 'Walther Kranz Agency', description: 'Developed social media content designs for MediaCat, Rolls-Royce Istanbul, and A1 Capital.', current: false },
  { period: '2019 – 2021', role: 'Design Committee Leader', company: 'Marmara University Communication Club', description: 'Led creative processes and team collaboration within the Faculty of Communication.', current: false },
  { period: '2014 – 2018', role: 'Visual Communication & Design', company: 'Istanbul Burhan Felek Anatolian High School', description: 'Created posters, panels, roll-ups, video editing, and post-production work.', current: false },
  { period: '2013', role: "Photographer's Assistant", company: 'f/2.8 Production Agency', description: 'Gained hands-on industry experience in creative production.', current: false },
]

const experiencesTR = [
  { period: 'Kas 2022 – Günümüz', role: 'Rötuşçu', company: 'f/2.8 Prodüksiyon Ajansı', description: 'Yaratıcı görseller üretme ve 3D projeleri hayata geçirme.', current: true },
  { period: 'May 2021 – Kas 2022', role: 'Yaratıcı Tasarımcı', company: 'Walther Kranz Ajansı', description: 'MediaCat, Rolls-Royce İstanbul ve A1 Capital için sosyal medya içerik tasarımları.', current: false },
  { period: '2019 – 2021', role: 'Tasarım Komitesi Lideri', company: 'Marmara Üniversitesi İletişim Kulübü', description: 'Yaratıcı süreçleri ve takım işbirliğini yönettim.', current: false },
  { period: '2014 – 2018', role: 'Görsel İletişim & Tasarım', company: 'İstanbul Burhan Felek Anadolu Lisesi', description: 'Poster, pano, roll-up, video düzenleme ve post-prodüksiyon.', current: false },
  { period: '2013', role: 'Fotoğrafçı Asistanı', company: 'f/2.8 Prodüksiyon Ajansı', description: 'Yaratıcı prodüksiyon alanında uygulamalı deneyim.', current: false },
]

const fade = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } }

export default function Experience() {
  const { locale } = useLanguage()
  const experiences = locale === 'tr' ? experiencesTR : experiencesEN

  return (
    <section id="experience" className="py-24 md:py-32 bg-[var(--bg-alt)]">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section label */}
        <motion.div {...fade} className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-[var(--accent)]" />
          <span className="text-xs font-medium uppercase tracking-widest text-[var(--accent)]">
            {locale === 'tr' ? 'Deneyim' : 'Experience'}
          </span>
        </motion.div>

        <motion.h2 {...fade} className="text-3xl sm:text-4xl font-bold text-[var(--fg)] leading-tight mb-12">
          {locale === 'tr' ? 'Profesyonel yolculuk.' : 'Professional journey.'}
        </motion.h2>

        {/* Timeline */}
        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative pl-8 pb-10 last:pb-0 border-l border-[var(--border)]"
            >
              {/* Dot */}
              <div className={`absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full ${
                exp.current ? 'bg-[var(--accent)]' : 'bg-[var(--muted)]'
              }`} />

              {/* Period */}
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-medium text-[var(--muted)] uppercase tracking-wider">{exp.period}</span>
                {exp.current && (
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--accent-muted)] text-[var(--accent)]">
                    {locale === 'tr' ? 'Güncel' : 'Current'}
                  </span>
                )}
              </div>

              {/* Role & Company */}
              <h3 className="text-lg font-semibold text-[var(--fg)] mb-1">{exp.role}</h3>
              <p className="text-sm font-medium text-[var(--accent)] mb-2">{exp.company}</p>
              <p className="text-sm text-[var(--fg-secondary)] leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
