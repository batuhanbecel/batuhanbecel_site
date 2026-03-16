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
    <section id="portfolio-preview" className="py-28 md:py-36 bg-[var(--bg)] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--accent)] opacity-[0.02] blur-[120px] rounded-full" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="w-12 h-[2px] bg-gradient-to-r from-[var(--accent)] to-transparent rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
                {locale === 'tr' ? 'Portfolyo' : 'Portfolio'}
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-[var(--fg)] leading-tight"
            >
              {locale === 'tr' ? 'Seçilmiş çalışmalar.' : 'Selected works.'}
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[var(--accent)] bg-[var(--accent-subtle)] border border-[var(--border-accent)] rounded-xl hover:bg-[var(--accent-muted)] hover:shadow-md transition-all duration-300"
            >
              {locale === 'tr' ? 'Tümünü gör' : 'View all'}
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        {previewImages.length > 0 ? (
          <>
            {/* 4-column grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {previewImages.map((image, index) => (
                <motion.div
                  key={image}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative aspect-[3/4] overflow-hidden rounded-2xl group cursor-pointer bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--border-strong)] shadow-sm hover:shadow-xl transition-all duration-300"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={`/portfolio-images/favorites/${image}`}
                    alt={`Portfolio work ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
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
          <div className="flex flex-col items-center justify-center py-24 rounded-2xl bg-[var(--surface)] border-2 border-dashed border-[var(--border)]">
            <div className="w-16 h-16 rounded-2xl bg-[var(--accent-muted)] text-[var(--accent)] flex items-center justify-center mb-5">
              <ImageIcon size={28} />
            </div>
            <p className="text-[var(--fg)] font-semibold text-lg mb-2">
              {locale === 'tr' ? 'Henüz favori yok' : 'No favorites yet'}
            </p>
            <p className="text-[var(--fg-tertiary)] text-sm">
              {locale === 'tr' ? 'favorites klasörüne resim ekleyin' : 'Add images to the favorites folder'}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
