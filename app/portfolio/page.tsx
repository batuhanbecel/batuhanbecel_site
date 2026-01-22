import fs from 'fs'
import path from 'path'
import PortfolioPageContent from '@/components/PortfolioPageContent'

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

  return <PortfolioPageContent images={images} />
}
