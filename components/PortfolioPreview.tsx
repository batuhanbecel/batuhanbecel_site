'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface PortfolioPreviewProps {
  images: string[]
}

export default function PortfolioPreview({ images }: PortfolioPreviewProps) {
  const previewImages = images.slice(0, 6)

  return (
    <section
      id="portfolio-preview"
      className="min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-24"
    >
      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <h2 className="text-sm md:text-base text-[var(--muted)] tracking-wider uppercase mb-4">
              Portfolio
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-light">
              Selected works
            </h3>
          </div>
          <Link
            href="/portfolio"
            className="group flex items-center gap-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            View all
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {previewImages.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {previewImages.map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative aspect-[4/5] overflow-hidden rounded-lg group"
              >
                <Image
                  src={`/portfolio-images/${image}`}
                  alt={`Portfolio work ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-[var(--muted)]">
            <p>Add images to /public/portfolio-images to display your work</p>
          </div>
        )}
      </div>
    </section>
  )
}
