'use client'

import { motion } from 'framer-motion'
import { useLanguage } from './LanguageProvider'

const fade = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } }

export default function About() {
  const { locale } = useLanguage()
  return (
    <section id="about" className="py-24 md:py-32 bg-[var(--bg)]">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section label */}
        <motion.div {...fade} className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-[var(--accent)]" />
          <span className="text-xs font-medium uppercase tracking-widest text-[var(--accent)]">
            {locale === 'tr' ? 'Hakkımda' : 'About'}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2 {...fade} className="text-3xl sm:text-4xl font-bold text-[var(--fg)] leading-tight mb-10">
          {locale === 'tr' 
            ? 'Yaratıcı görsellerin gücüne inanan bir profesyonel.' 
            : 'A professional who believes in the power of creative visuals.'}
        </motion.h2>

        {/* Editorial text */}
        <div className="space-y-6 text-[var(--fg-secondary)] leading-relaxed text-base">
          <motion.p {...fade}>
            {locale === 'tr' 
              ? <>Profesyonel yolculuğuma 2013 yılında <a href="http://f28.com.tr/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">f/2.8 Prodüksiyon Ajansı</a>&apos;nda Fotoğrafçı Asistanı olarak başladım. Bu dönem, yaratıcı üretim sürecini derinlemesine anlamamı sağlayan benzersiz bir başlangıç noktası oldu.</>
              : <>I began my professional journey in 2013 as a Photographer&apos;s Assistant at <a href="http://f28.com.tr/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">f/2.8 Production Agency</a>. This period marked a unique starting point, allowing me to develop a deep understanding of the creative production process.</>
            }
          </motion.p>
          <motion.p {...fade}>
            {locale === 'tr'
              ? <>2014-2018 yılları arasında <a href="https://burhanfeleklisesi.meb.k12.tr/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">İstanbul Burhan Felek Anadolu Lisesi</a>&apos;nde görsel iletişim ve tasarım alanında aktif olarak çalıştım. Poster, pano ve roll-up gibi basılı materyallerden video düzenleme ve post-prodüksiyon çalışmalarına kadar geniş bir yelpazede projelere katkıda bulundum.</>
              : <>Between 2014 and 2018, I worked in visual communication and design at <a href="https://burhanfeleklisesi.meb.k12.tr/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">Istanbul Burhan Felek Anatolian High School</a>. I strengthened my expertise through a wide range of projects, from printed materials to video editing and post-production.</>
            }
          </motion.p>
          <motion.p {...fade}>
            {locale === 'tr'
              ? <>Üniversite yıllarımda <a href="https://www.marmara.edu.tr/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">Marmara Üniversitesi</a>&apos;nde okurken İletişim Fakültesi&apos;nin <a href="https://www.instagram.com/miletisimkulubu/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">MÜİK</a> kulübüne katıldım. 2019-2021 yılları arasında Tasarım Komitesi Lideri ve Yönetim Kurulu Üyesi olarak görev yaptım.</>
              : <>During my university years at <a href="https://www.marmara.edu.tr/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">Marmara University</a>, I joined the Communication Club <a href="https://www.instagram.com/miletisimkulubu/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">MÜİK</a>. From 2019 to 2021, I served as Design Committee Leader and Executive Board Member.</>
            }
          </motion.p>
          <motion.p {...fade}>
            {locale === 'tr'
              ? <>Mezun olduktan sonra <a href="https://waltherkranz.com/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">Walther Kranz Ajansı</a>&apos;nda Yaratıcı Tasarımcı olarak MediaCat, Rolls-Royce İstanbul ve A1 Capital gibi prestijli markalar için sosyal medya içerik tasarımları geliştirdim.</>
              : <>After graduating, I continued as a Creative Designer at <a href="https://waltherkranz.com/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">Walther Kranz Agency</a>, developing social media content for brands like MediaCat, Rolls-Royce Istanbul, and A1 Capital.</>
            }
          </motion.p>
          <motion.p {...fade}>
            {locale === 'tr'
              ? <>Kasım 2022 itibarıyla <a href="http://f28.com.tr/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">f/2.8 Prodüksiyon Ajansı</a>&apos;na Rötuşçu olarak döndüm. Yaratıcı görseller üretmek ve 3D projeleri hayata geçirmek, profesyonel gelişimime katkıda bulunmaya devam ediyor.</>
              : <>As of November 2022, I returned to <a href="http://f28.com.tr/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">f/2.8 Production Agency</a> as a Retoucher. Producing creative visuals and bringing 3D projects to life continues to drive my professional growth.</>
            }
          </motion.p>
        </div>
      </div>
    </section>
  )
}
