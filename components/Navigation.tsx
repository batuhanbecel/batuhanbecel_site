'use client'

import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { 
  Home, User, Briefcase, GraduationCap, Wrench, Images,
  Sun, Moon, Globe
} from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { useLanguage } from './LanguageProvider'
import dynamic from 'next/dynamic'

const MusicPlayer = dynamic(() => import('./SpotifyPlayer'), { ssr: false })

const navItemsEN = [
  { id: 'hero', icon: Home, label: 'Home', short: 'Home' },
  { id: 'about', icon: User, label: 'About', short: 'About' },
  { id: 'experience', icon: Briefcase, label: 'Experience', short: 'Work' },
  { id: 'education', icon: GraduationCap, label: 'Education', short: 'Edu' },
  { id: 'skills', icon: Wrench, label: 'Skills', short: 'Skills' },
  { id: 'portfolio-preview', icon: Images, label: 'Portfolio', short: 'Work' },
]

const navItemsTR = [
  { id: 'hero', icon: Home, label: 'Ana Sayfa', short: 'Ana' },
  { id: 'about', icon: User, label: 'Hakkımda', short: 'Ben' },
  { id: 'experience', icon: Briefcase, label: 'Deneyim', short: 'İş' },
  { id: 'education', icon: GraduationCap, label: 'Eğitim', short: 'Eğt' },
  { id: 'skills', icon: Wrench, label: 'Yetenekler', short: 'Beceri' },
  { id: 'portfolio-preview', icon: Images, label: 'Portfolyo', short: 'Port' },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero')
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const { locale, setLocale } = useLanguage()
  const pathname = usePathname()
  const router = useRouter()
  
  const navItems = locale === 'tr' ? navItemsTR : navItemsEN
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const detectSection = () => {
      const atBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50
      if (atBottom) {
        setActiveSection(navItemsEN[navItemsEN.length - 1].id)
        return
      }
      const scrollY = window.scrollY + window.innerHeight / 3
      let current = 'hero'
      for (const { id } of navItemsEN) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollY) {
          current = id
        }
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', detectSection, { passive: true })
    detectSection()
    return () => window.removeEventListener('scroll', detectSection)
  }, [])

  const scrollToSection = (id: string) => {
    setActiveSection(id)
    if (isHomePage) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      router.push(`/#${id}`)
    }
  }

  const toggleTheme = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  const toggleLanguage = () => setLocale(locale === 'en' ? 'tr' : 'en')

  return (
    <>
      {/* ── Desktop: Horizontal top bar ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-500 ${
          scrolled
            ? 'bg-[var(--bg)]/70 backdrop-blur-xl border-b border-[var(--border)] shadow-lg'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-8">
          {/* Logo / Name */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-base font-bold tracking-tight text-[var(--fg)] hover:text-[var(--accent)] transition-all duration-300 hover:scale-105"
          >
            batuhan<span className="text-[var(--accent)] text-xl">.</span>
          </button>

          {/* Section links */}
          <nav className="flex items-center gap-2">
            {navItems.slice(1).map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
                  activeSection === id
                    ? 'text-[var(--accent)] bg-[var(--accent-muted)] shadow-sm scale-105'
                    : 'text-[var(--fg-secondary)] hover:text-[var(--fg)] hover:bg-[var(--surface)]'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <MusicPlayer />
            <div className="w-px h-5 bg-[var(--border-strong)]" />
            <button
              onClick={toggleLanguage}
              className="w-10 h-10 flex items-center justify-center rounded-xl text-[var(--fg-tertiary)] hover:text-[var(--accent)] hover:bg-[var(--accent-subtle)] transition-all duration-300 hover:scale-110"
              aria-label="Toggle language"
            >
              <Globe size={18} />
            </button>
            <button
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center rounded-xl text-[var(--fg-tertiary)] hover:text-[var(--accent)] hover:bg-[var(--accent-subtle)] transition-all duration-300 hover:scale-110"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {resolvedTheme === 'dark' ? (
                  <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Sun size={18} />
                  </motion.div>
                ) : (
                  <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Moon size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile: Top bar ── */}
      <header className="fixed top-0 left-0 right-0 z-50 md:hidden bg-[var(--bg)]/70 backdrop-blur-xl border-b border-[var(--border)] shadow-lg">
        <div className="flex items-center justify-between h-16 px-5">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-base font-bold text-[var(--fg)] hover:text-[var(--accent)] transition-colors"
          >
            batuhan<span className="text-[var(--accent)] text-lg">.</span>
          </button>
          <div className="flex items-center gap-2">
            <MusicPlayer />
            <div className="w-px h-5 bg-[var(--border-strong)]" />
            <button onClick={toggleLanguage} className="w-10 h-10 flex items-center justify-center rounded-xl text-[var(--fg-tertiary)] hover:text-[var(--accent)] hover:bg-[var(--accent-subtle)] transition-all" aria-label="Toggle language">
              <Globe size={18} />
            </button>
            <button onClick={toggleTheme} className="w-10 h-10 flex items-center justify-center rounded-xl text-[var(--fg-tertiary)] hover:text-[var(--accent)] hover:bg-[var(--accent-subtle)] transition-all" aria-label="Toggle theme">
              {resolvedTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile: Bottom tab bar ── */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[var(--bg)]/70 backdrop-blur-xl border-t border-[var(--border)] shadow-[0_-4px_24px_rgba(0,0,0,0.3)] pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        <div className="flex items-center justify-around h-16 px-2">
          {navItems.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`flex flex-col items-center justify-center gap-1 flex-1 h-full rounded-xl transition-all duration-300 ${
                activeSection === id
                  ? 'text-[var(--accent)] scale-105'
                  : 'text-[var(--fg-tertiary)] hover:text-[var(--fg-secondary)]'
              }`}
              aria-label={label}
            >
              <Icon size={20} strokeWidth={activeSection === id ? 2.5 : 2} />
              {activeSection === id && (
                <motion.div 
                  layoutId="activeTab"
                  className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" 
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </nav>
    </>
  )
}
