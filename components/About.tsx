'use client'

import { motion } from 'framer-motion'
import { useLanguage } from './LanguageProvider'

export default function About() {
  const { locale } = useLanguage()
  return (
    <section
      id="about"
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
            {locale === 'tr' ? 'Hakkımda' : 'About Me'}
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            {locale === 'tr' ? (
              <>On yıllık <span className="text-gradient">yaratıcı evrim</span></>
            ) : (
              <>A decade of <span className="text-gradient">creative evolution</span></>
            )}
          </h3>
        </motion.div>
        
        <div className="card p-6 md:p-8 lg:p-10">
          <div className="space-y-6 text-[var(--muted)] leading-relaxed text-base md:text-lg">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {locale === 'tr' 
                ? <>Profesyonel yolculuğuma 2013 yılında <a href="http://f28.com.tr/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">f/2.8 Prodüksiyon Ajansı</a>'nda Fotoğrafçı Asistanı olarak başladım. Bu dönem, sektörde uygulamalı deneyim kazanırken yaratıcı üretim sürecini derinlemesine anlamamı sağlayan benzersiz bir başlangıç noktası oldu.</>
                : <>I began my professional journey in 2013 as a Photographer's Assistant at <a href="http://f28.com.tr/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">f/2.8 Production Agency</a>. This period marked a unique starting point, allowing me to gain hands-on industry experience while developing a deep understanding of the creative production process.</>
              }
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {locale === 'tr'
                ? <>2014-2018 yılları arasında <a href="https://burhanfeleklisesi.meb.k12.tr/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">İstanbul Burhan Felek Anadolu Lisesi</a>'nde görsel iletişim ve tasarım alanında aktif olarak çalıştım. Bu süreçte poster, pano ve roll-up gibi basılı materyallerden video düzenleme ve post-prodüksiyon çalışmalarına kadar geniş bir yelpazede projelere katkıda bulunarak uzmanlığımı güçlendirdim.</>
                : <>Between 2014 and 2018, I actively worked in the field of visual communication and design at <a href="https://burhanfeleklisesi.meb.k12.tr/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">Istanbul Burhan Felek Anatolian High School</a>. During this time, I strengthened my expertise by contributing to a wide range of projects, from printed materials such as posters, panels, and roll-ups to video editing and post-production work.</>
              }
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {locale === 'tr'
                ? <>Üniversite yıllarımda tasarıma olan tutkum daha çok boyutlu bir pratiğe dönüştü. <a href="https://www.marmara.edu.tr/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">Marmara Üniversitesi</a>'nde okurken İletişim Fakültesi'nin prestijli İletişim Kulübü <a href="https://www.instagram.com/miletisimkulubu/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">MÜİK</a>'e katıldım. 2019-2021 yılları arasında Tasarım Komitesi Lideri ve Yönetim Kurulu Üyesi olarak görev yaptım, takım liderliği ve yaratıcı süreçleri organize etme konusunda önemli deneyimler kazandım.</>
                : <>During my university years, my passion for design evolved into a more multidimensional practice. While studying at <a href="https://www.marmara.edu.tr/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">Marmara University</a>, I joined the Faculty of Communication's prestigious Communication Club <a href="https://www.instagram.com/miletisimkulubu/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">MÜİK</a>. From 2019 to 2021, I served as Design Committee Leader and as a Member of the Executive Board, where I gained substantial experience in team leadership and organizing creative processes.</>
              }
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {locale === 'tr'
                ? <>Mezun olduktan sonra Mayıs 2021'de <a href="https://waltherkranz.com/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">Walther Kranz Ajansı</a>'nda Yaratıcı Tasarımcı olarak kariyerime devam ettim. Burada MediaCat, Rolls-Royce İstanbul ve A1 Capital gibi prestijli markalar için sosyal medya içerik tasarımları geliştirdim. Marka kimliklerini güçlendiren ve hedef kitlelerle anlamlı bağlar kuran projelerle tasarımın sınırlarını sürekli zorladım.</>
                : <>After graduating, I continued my career in May 2021 as a Creative Designer at <a href="https://waltherkranz.com/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">Walther Kranz Agency</a>. There, I developed social media content designs for prestigious brands such as MediaCat, Rolls-Royce Istanbul, and A1 Capital. Through projects that strengthened brand identities and fostered meaningful connections with target audiences, I consistently pushed the boundaries of design.</>
              }
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {locale === 'tr'
                ? <>Kasım 2022 itibarıyla kariyer yolculuğum, bu sefer Rötuşçu olarak <a href="http://f28.com.tr/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">f/2.8 Prodüksiyon Ajansı</a>'na döndüğümde bir başka anlamlı kilometre taşına ulaştı. Yaratıcı görseller üretmek ve 3D projeleri hayata geçirmek, hem profesyonel gelişimime hem de yaratıcı portföyümün genişlemesine önemli ölçüde katkıda bulunmaya devam ediyor.</>
                : <>As of November 2022, my career journey reached another meaningful milestone when I returned to <a href="http://f28.com.tr/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">f/2.8 Production Agency</a>, this time as a Retoucher. Producing creative visuals and bringing 3D projects to life continues to contribute significantly to both my professional growth and the expansion of my creative portfolio.</>
              }
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
