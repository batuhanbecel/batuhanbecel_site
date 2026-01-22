'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ImageIcon } from 'lucide-react'
import Lightbox from './Lightbox'
import { useLanguage } from './LanguageProvider'

interface PortfolioPreviewProps {
  images: string[]
}

export default function PortfolioPreview({ images }: PortfolioPreviewProps) {
  const { locale } = useLanguage()
  const previewImages = images.slice(0, 6).map(img => img.replace(/\.[^/.]+$/, '.webp'))
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % previewImages.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + previewImages.length) % previewImages.length)
  }

  return (
    <section
      id="portfolio-preview"
      className="min-h-screen flex items-center py-24 section-alt"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-sm md:text-base text-[var(--muted)] tracking-widest uppercase mb-4 font-medium">
            {locale === 'tr' ? 'Portfolyo' : 'Portfolio'}
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {locale === 'tr' ? (
              <>Seçilmiş <span className="text-gradient">çalışmalar</span></>
            ) : (
              <>Selected <span className="text-gradient">works</span></>
            )}
          </h3>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-[var(--accent)] font-medium hover:underline transition-all"
          >
            {locale === 'tr' ? 'Tüm projeleri gör' : 'View all projects'}
            <ArrowRight size={16} />
          </Link>
        </motion.div>

        {previewImages.length > 0 ? (
          <>
            <div className="grid grid-cols-2 gap-5">
              {previewImages.map((image, index) => (
                <motion.div
                  key={image}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative aspect-[3/4] overflow-hidden rounded-2xl group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={`/portfolio-images/favorites/${image}`}
                    alt={`Portfolio work ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, 50vw"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </motion.div>
              ))}
            </div>
            
            <Lightbox
              images={previewImages.map(img => `favorites/${img}`)}
              currentIndex={currentIndex}
              isOpen={lightboxOpen}
              onClose={() => setLightboxOpen(false)}
              onNext={handleNext}
              onPrev={handlePrev}
            />
          </>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card flex flex-col items-center justify-center py-24"
          >
            <div className="p-4 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] mb-4">
              <ImageIcon size={32} />
            </div>
            <p className="text-[var(--foreground)] text-lg font-medium mb-2">
              {locale === 'tr' ? 'Henüz favori yok' : 'No favorites yet'}
            </p>
            <p className="text-[var(--muted)] text-sm text-center">
              {locale === 'tr' ? 'Burada görüntülemek için /public/portfolio-images/favorites klasörüne resim ekleyin' : 'Add images to /public/portfolio-images/favorites to display here'}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
