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
    <section id="experience" className="py-28 md:py-36 bg-[var(--bg-alt)] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--accent)] opacity-[0.02] blur-[100px] rounded-full" />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section label */}
        <motion.div {...fade} className="flex items-center gap-4 mb-10">
          <div className="w-12 h-[2px] bg-gradient-to-r from-[var(--accent)] to-transparent rounded-full" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
            {locale === 'tr' ? 'Deneyim' : 'Experience'}
          </span>
        </motion.div>

        <motion.h2 {...fade} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-5xl font-bold text-[var(--fg)] leading-tight mb-16">
          {locale === 'tr' ? 'Profesyonel yolculuk.' : 'Professional journey.'}
        </motion.h2>

        {/* Timeline */}
        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-10 pb-12 last:pb-0 border-l-2 border-[var(--border-strong)]"
            >
              {/* Dot */}
              <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-[var(--bg-alt)] ${
                exp.current ? 'bg-[var(--accent)] shadow-[0_0_12px_var(--accent)]' : 'bg-[var(--surface)]'
              }`} />

              {/* Period */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold text-[var(--fg-tertiary)] uppercase tracking-[0.15em]">{exp.period}</span>
                {exp.current && (
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[var(--accent-muted)] text-[var(--accent)] border border-[var(--border-accent)]">
                    {locale === 'tr' ? 'Güncel' : 'Current'}
                  </span>
                )}
              </div>

              {/* Role & Company */}
              <h3 className="text-xl font-bold text-[var(--fg)] mb-2">{exp.role}</h3>
              <p className="text-sm font-semibold text-[var(--accent)] mb-3">{exp.company}</p>
              <p className="text-base text-[var(--fg-secondary)] leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
