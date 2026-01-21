'use client'

import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface LightboxProps {
  images: string[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export default function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return
      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowRight':
          onNext()
          break
        case 'ArrowLeft':
          onPrev()
          break
      }
    },
    [isOpen, onClose, onNext, onPrev]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              onPrev()
            }}
            className="absolute left-4 p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={36} />
          </button>

          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative w-[90vw] h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/portfolio-images/${images[currentIndex]}`}
              alt={`Portfolio image ${currentIndex + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </motion.div>

          <button
            onClick={(e) => {
              e.stopPropagation()
              onNext()
            }}
            className="absolute right-4 p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={36} />
          </button>

          <div className="absolute bottom-4 text-white/70 text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
