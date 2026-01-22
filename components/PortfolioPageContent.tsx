'use client'

import Link from 'next/link'
import { ArrowLeft, ImageIcon } from 'lucide-react'
import MasonryGrid from '@/components/MasonryGrid'
import { useLanguage } from './LanguageProvider'

interface PortfolioPageContentProps {
  images: string[]
}

export default function PortfolioPageContent({ images }: PortfolioPageContentProps) {
  const { locale } = useLanguage()

  return (
    <div className="min-h-screen py-24">
      <div className="w-full max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--accent)] transition-colors text-sm mb-6"
          >
            <ArrowLeft size={16} />
            {locale === 'tr' ? 'Ana sayfaya dön' : 'Back to home'}
          </Link>
          
          <div className="text-center">
            <p className="text-sm md:text-base text-[var(--muted)] tracking-widest uppercase mb-4 font-medium">
              {locale === 'tr' ? 'Portfolyo' : 'Portfolio'}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {locale === 'tr' ? (
                <>Tüm <span className="text-gradient">çalışmalar</span></>
              ) : (
                <>All <span className="text-gradient">works</span></>
              )}
            </h1>
            <p className="text-[var(--muted)] text-base max-w-md mx-auto">
              {locale === 'tr' 
                ? 'Rötuş, tasarım ve yaratıcı projelerimin tam koleksiyonu.'
                : 'A complete collection of my retouching, design, and creative projects.'}
            </p>
          </div>
        </div>

        {/* Image count badge */}
        {images.length > 0 && (
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--card)] border border-[var(--border)] text-sm text-[var(--muted)]">
              <ImageIcon size={14} />
              {images.length} {locale === 'tr' ? 'proje' : (images.length === 1 ? 'project' : 'projects')}
            </span>
          </div>
        )}

        {/* Grid */}
        {images.length > 0 ? (
          <MasonryGrid images={images} />
        ) : (
          <div className="card flex flex-col items-center justify-center py-24">
            <div className="p-4 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] mb-4">
              <ImageIcon size={32} />
            </div>
            <p className="text-[var(--foreground)] text-lg font-medium mb-2">
              {locale === 'tr' ? 'Henüz görsel yok' : 'No images yet'}
            </p>
            <p className="text-[var(--muted)] text-sm text-center">
              {locale === 'tr' 
                ? 'Çalışmalarınızı göstermek için /public/portfolio-images klasörüne resim ekleyin'
                : 'Add images to /public/portfolio-images to display your work'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
