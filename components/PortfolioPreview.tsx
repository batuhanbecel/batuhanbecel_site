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
  const previewImages = images.slice(0, 8).map(img => img.replace(/\.[^/.]+$/, '.webp'))
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }
  const handleNext = () => setCurrentIndex((p) => (p + 1) % previewImages.length)
  const handlePrev = () => setCurrentIndex((p) => (p - 1 + previewImages.length) % previewImages.length)

  return (
    <section id="portfolio-preview" className="py-24 md:py-32 bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-px bg-[var(--accent)]" />
              <span className="text-xs font-medium uppercase tracking-widest text-[var(--accent)]">
                {locale === 'tr' ? 'Portfolyo' : 'Portfolio'}
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-3xl sm:text-4xl font-bold text-[var(--fg)] leading-tight"
            >
              {locale === 'tr' ? 'Seçilmiş çalışmalar.' : 'Selected works.'}
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:underline"
            >
              {locale === 'tr' ? 'Tümünü gör' : 'View all'}
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        {previewImages.length > 0 ? (
          <>
            {/* 4-column grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {previewImages.map((image, index) => (
                <motion.div
                  key={image}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="relative aspect-[3/4] overflow-hidden rounded-xl group cursor-pointer bg-[var(--surface)]"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={`/portfolio-images/favorites/${image}`}
                    alt={`Portfolio work ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
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
          <div className="flex flex-col items-center justify-center py-20 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
            <div className="w-12 h-12 rounded-xl bg-[var(--accent-muted)] text-[var(--accent)] flex items-center justify-center mb-4">
              <ImageIcon size={24} />
            </div>
            <p className="text-[var(--fg)] font-medium mb-1">
              {locale === 'tr' ? 'Henüz favori yok' : 'No favorites yet'}
            </p>
            <p className="text-[var(--muted)] text-sm">
              {locale === 'tr' ? 'favorites klasörüne resim ekleyin' : 'Add images to the favorites folder'}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
