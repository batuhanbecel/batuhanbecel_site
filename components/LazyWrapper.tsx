'use client'

import { useEffect, useState } from 'react'

interface LazyWrapperProps {
  children: React.ReactNode
  threshold?: number
  rootMargin?: string
}

export default function LazyWrapper({ 
  children, 
  threshold = 0.1, 
  rootMargin = '50px' 
}: LazyWrapperProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [element, setElement] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [element, threshold, rootMargin])

  return (
    <div ref={setElement}>
      {isVisible ? children : <div style={{ height: '200px' }} />}
    </div>
  )
}
