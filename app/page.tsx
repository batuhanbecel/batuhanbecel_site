import fs from 'fs'
import path from 'path'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import PortfolioPreview from '@/components/PortfolioPreview'

function getFavoriteImages(): string[] {
  const favoritesDir = path.join(process.cwd(), 'public', 'portfolio-images', 'favorites')
  
  try {
    const files = fs.readdirSync(favoritesDir)
    return files.filter((file) => {
      const ext = path.extname(file).toLowerCase()
      return ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif'].includes(ext)
    })
  } catch {
    return []
  }
}

export default function Home() {
  const images = getFavoriteImages()

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
