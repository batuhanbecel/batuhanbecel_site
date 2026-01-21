import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import MasonryGrid from '@/components/MasonryGrid'

function getPortfolioImages(): string[] {
  const portfolioDir = path.join(process.cwd(), 'public', 'portfolio-images')
  
  try {
    const files = fs.readdirSync(portfolioDir)
    return files.filter((file) => {
      const ext = path.extname(file).toLowerCase()
      return ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif'].includes(ext)
    })
  } catch {
    return []
  }
}

export default function PortfolioPage() {
  const images = getPortfolioImages()

  return (
    <div className="min-h-screen px-6 md:px-16 lg:px-24 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors mb-4"
            >
              <ArrowLeft size={18} />
              Back
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light">
              Portfolio
            </h1>
          </div>
        </div>

        {images.length > 0 ? (
          <MasonryGrid images={images} />
        ) : (
          <div className="text-center py-24 text-[var(--muted)]">
            <p className="text-lg mb-2">No images found</p>
            <p className="text-sm">Add images to /public/portfolio-images to display your work</p>
          </div>
        )}
      </div>
    </div>
  )
}
