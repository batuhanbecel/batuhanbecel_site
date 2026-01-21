'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ImageIcon } from 'lucide-react'

interface PortfolioPreviewProps {
  images: string[]
}

export default function PortfolioPreview({ images }: PortfolioPreviewProps) {
  const previewImages = images.slice(0, 6)

  return (
    <section
      id="portfolio-preview"
      className="min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-24 relative"
    >
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
      
      <div className="w-full max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
        >
          <div>
            <h2 className="text-sm md:text-base text-[var(--muted)] tracking-widest uppercase mb-4 font-medium">
              Portfolio
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Selected <span className="text-gradient">works</span>
            </h3>
          </div>
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 px-5 py-2.5 glass rounded-xl text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all duration-300"
          >
            View all works
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
                className="relative aspect-[4/5] overflow-hidden rounded-2xl group cursor-pointer"
              >
                <Image
                  src={`/portfolio-images/${image}`}
                  alt={`Portfolio work ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center py-24 glass rounded-2xl"
          >
            <div className="p-4 rounded-full bg-[var(--border)] mb-4">
              <ImageIcon size={32} className="text-[var(--muted)]" />
            </div>
            <p className="text-[var(--muted)] text-lg mb-2">No images yet</p>
            <p className="text-[var(--muted)] text-sm">Add images to /public/portfolio-images to display your work</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
