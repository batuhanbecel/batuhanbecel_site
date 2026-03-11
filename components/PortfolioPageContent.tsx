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
    <div className="min-h-screen bg-[var(--bg)] pt-20 pb-24">
      {/* Header - contained */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--fg)] transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          {locale === 'tr' ? 'Ana sayfa' : 'Home'}
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-[var(--accent)]" />
          <span className="text-xs font-medium uppercase tracking-widest text-[var(--accent)]">
            {locale === 'tr' ? 'Portfolyo' : 'Portfolio'}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--fg)] mb-3">
          {locale === 'tr' ? 'Tüm çalışmalar.' : 'All works.'}
        </h1>
        <p className="text-[var(--fg-secondary)] text-base max-w-lg">
          {locale === 'tr'
            ? 'Rötuş, tasarım ve yaratıcı projelerimin tam koleksiyonu.'
            : 'A complete collection of my retouching, design, and creative projects.'}
        </p>

        {images.length > 0 && (
          <div className="mt-4">
            <span className="text-xs text-[var(--muted)]">
              {images.length} {locale === 'tr' ? 'proje' : (images.length === 1 ? 'project' : 'projects')}
            </span>
          </div>
        )}
      </div>

      {/* Grid */}
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6">
        {images.length > 0 ? (
          <MasonryGrid images={images} />
        ) : (
          <div className="max-w-6xl mx-auto flex flex-col items-center justify-center py-20 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
            <div className="w-12 h-12 rounded-xl bg-[var(--accent-muted)] text-[var(--accent)] flex items-center justify-center mb-4">
              <ImageIcon size={24} />
            </div>
            <p className="text-[var(--fg)] font-medium mb-1">
              {locale === 'tr' ? 'Henüz görsel yok' : 'No images yet'}
            </p>
            <p className="text-[var(--muted)] text-sm">
              {locale === 'tr' ? 'portfolio-images klasörüne resim ekleyin' : 'Add images to portfolio-images folder'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
