'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { BalancedMasonryGrid, Frame } from '@masonry-grid/react'
import Lightbox from './Lightbox'

interface MasonryGridProps {
  images: string[]
}

interface ImageDimension {
  src: string
  w: number
  h: number
}

function useImageDimensions(images: string[], prefix: string) {
  const [dims, setDims] = useState<ImageDimension[]>([])

  useEffect(() => {
    let cancelled = false
    const results: ImageDimension[] = []

    Promise.all(
      images.map(
        (img) =>
          new Promise<ImageDimension>((resolve) => {
            const el = new window.Image()
            el.onload = () => resolve({ src: img, w: el.naturalWidth, h: el.naturalHeight })
            el.onerror = () => resolve({ src: img, w: 3, h: 4 })
            el.src = `${prefix}${img}`
          })
      )
    ).then((loaded) => {
      if (!cancelled) setDims(loaded)
    })

    return () => { cancelled = true }
  }, [images, prefix])

  return dims
}

export default function MasonryGrid({ images }: MasonryGridProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const dims = useImageDimensions(images, '/portfolio-images/')

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }
  const handleNext = () => setCurrentIndex((p) => (p + 1) % images.length)
  const handlePrev = () => setCurrentIndex((p) => (p - 1 + images.length) % images.length)

  if (dims.length === 0) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 animate-pulse">
        {images.slice(0, 8).map((_, i) => (
          <div key={i} className="aspect-[3/4] rounded-xl bg-[var(--surface)]" />
        ))}
      </div>
    )
  }

  return (
    <>
      <BalancedMasonryGrid frameWidth={340} gap={10}>
        {dims.map(({ src, w, h }, index) => (
          <Frame key={src} width={w} height={h}>
            <div
              className="relative w-full h-full overflow-hidden rounded-xl cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={`/portfolio-images/${src}`}
                alt={`Portfolio work ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 50vw, (max-width: 1280px) 25vw, 25vw"
                quality={90}
                onError={(e) => {
                  console.error(`Failed to load image: ${src}`)
                  e.currentTarget.style.display = 'none'
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          </Frame>
        ))}
      </BalancedMasonryGrid>

      <Lightbox
        images={images}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </>
  )
}
