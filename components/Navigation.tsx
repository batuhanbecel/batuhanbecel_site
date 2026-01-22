'use client'

import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Home, 
  User, 
  Briefcase, 
  GraduationCap, 
  Wrench, 
  Images,
  Sun,
  Moon,
  Globe
} from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { useLanguage } from './LanguageProvider'

const navItemsEN = [
  { id: 'hero', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'experience', icon: Briefcase, label: 'Experience' },
  { id: 'education', icon: GraduationCap, label: 'Education' },
  { id: 'skills', icon: Wrench, label: 'Skills' },
  { id: 'portfolio-preview', icon: Images, label: 'Portfolio' },
]

const navItemsTR = [
  { id: 'hero', icon: Home, label: 'Ana Sayfa' },
  { id: 'about', icon: User, label: 'Hakkımda' },
  { id: 'experience', icon: Briefcase, label: 'Deneyim' },
  { id: 'education', icon: GraduationCap, label: 'Eğitim' },
  { id: 'skills', icon: Wrench, label: 'Yetenekler' },
  { id: 'portfolio-preview', icon: Images, label: 'Portfolyo' },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero')
  const { theme, setTheme, resolvedTheme } = useTheme()
  const { locale, setLocale } = useLanguage()
  const pathname = usePathname()
  const router = useRouter()
  
  const navItems = locale === 'tr' ? navItemsTR : navItemsEN
  const isHomePage = pathname === '/'

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: '-10% 0px -10% 0px' }
    )

    navItemsEN.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    if (isHomePage) {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      router.push(`/#${id}`)
    }
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'tr' : 'en')
  }

  return (
    <>
      {/* Desktop Navigation - Left Side */}
      <motion.nav
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-2 p-3 glass rounded-2xl"
      >
        {navItems.map(({ id, icon: Icon, label }) => (
          <motion.button
            key={id}
            onClick={() => scrollToSection(id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`group relative p-3 rounded-xl transition-all duration-300 ${
              activeSection === id
                ? 'bg-[var(--accent)] text-white shadow-lg'
                : 'hover:bg-[var(--accent)] hover:text-white'
            }`}
            aria-label={label}
          >
            <Icon size={20} />
          </motion.button>
        ))}
      </motion.nav>

      {/* Mobile Navigation - Bottom with safe area */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[var(--background)]/80 backdrop-blur-sm border-t border-[var(--border)] rounded-t-2xl p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]"
      >
        <div className="flex items-center justify-around">
          {navItems.map(({ id, icon: Icon, label }) => (
            <motion.button
              key={id}
              onClick={() => scrollToSection(id)}
              whileTap={{ scale: 0.9 }}
              className={`relative p-3 rounded-xl transition-all duration-300 ${
                activeSection === id
                  ? 'bg-[var(--accent)] text-white'
                  : ''
              }`}
              aria-label={label}
            >
              <Icon size={20} />
            </motion.button>
          ))}
        </div>
      </motion.nav>
    </>
  )
}
