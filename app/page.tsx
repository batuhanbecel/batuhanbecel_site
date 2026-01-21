import fs from 'fs'
import path from 'path'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import PortfolioPreview from '@/components/PortfolioPreview'

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

export default function Home() {
  const images = getPortfolioImages()

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <PortfolioPreview images={images} />
    </>
  )
}
