import fs from 'fs'
import path from 'path'
import dynamic from 'next/dynamic'

const PortfolioPageContent = dynamic(() => import('@/components/PortfolioPageContent'), {
  ssr: false,
  loading: () => <div className="min-h-screen flex items-center justify-center">Loading...</div>
})

function getPortfolioImages(): string[] {
  const portfolioDir = path.join(process.cwd(), 'public', 'portfolio-images')
  
  try {
    const files = fs.readdirSync(portfolioDir)
    return files.filter((file) => {
      const ext = path.extname(file).toLowerCase()
      return !['.git', '.gitignore', '.ds_store', '.env', '.env.local'].includes(ext)
    })
  } catch {
    return []
  }
}

export default function PortfolioPage() {
  const images = getPortfolioImages()

  return <PortfolioPageContent images={images} />
}
