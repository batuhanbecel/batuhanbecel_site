import fs from 'fs'
import path from 'path'
import PortfolioPageContent from '@/components/PortfolioPageContent'

function getPortfolioImages(): string[] {
  const portfolioDir = path.join(process.cwd(), 'public', 'portfolio-images')
  
  try {
    const files = fs.readdirSync(portfolioDir)
    return files.filter((file) => {
      const ext = path.extname(file).toLowerCase()
      const basename = path.basename(file, ext)
      const stats = fs.statSync(path.join(portfolioDir, file))
      
      // Only include files (not directories)
      if (!stats.isFile()) return false
      
      // Filter out unwanted files and directories
      return !['.git', '.gitignore', '.ds_store', '.env', '.env.local'].includes(ext) && 
             !file.startsWith('.') && 
             basename !== '.gitkeep' &&
             ext !== '' &&
             !file.includes('favorites') &&  // Exclude favorites folder
             ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif'].includes(ext)
    })
  } catch {
    return []
  }
}

export default function PortfolioPage() {
  const images = getPortfolioImages()

  return <PortfolioPageContent images={images} />
}
