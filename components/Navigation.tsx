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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.3, rootMargin: '-10% 0px -10% 0px' }
    )
    navItemsEN.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
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
        className={`fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-300 ${
          scrolled
            ? 'bg-[var(--bg)]/80 backdrop-blur-xl border-b border-[var(--border)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-6">
          {/* Logo / Name */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-sm font-semibold tracking-tight text-[var(--fg)] hover:text-[var(--accent)] transition-colors"
          >
            batuhan<span className="text-[var(--accent)]">.</span>
          </button>

          {/* Section links */}
          <nav className="flex items-center gap-1">
            {navItems.slice(1).map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`px-3 py-1.5 text-[13px] font-medium rounded-md transition-colors ${
                  activeSection === id
                    ? 'text-[var(--accent)] bg-[var(--accent-muted)]'
                    : 'text-[var(--fg-secondary)] hover:text-[var(--fg)]'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-2.5">
            <MusicPlayer />
            <div className="w-px h-4 bg-[var(--border)]" />
            <button
              onClick={toggleLanguage}
              className="w-8 h-8 flex items-center justify-center rounded-md text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--surface)] transition-colors"
              aria-label="Toggle language"
            >
              <Globe size={16} />
            </button>
            <button
              onClick={toggleTheme}
              className="w-8 h-8 flex items-center justify-center rounded-md text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--surface)] transition-colors"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {resolvedTheme === 'dark' ? (
                  <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Sun size={16} />
                  </motion.div>
                ) : (
                  <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Moon size={16} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile: Top bar ── */}
      <header className="fixed top-0 left-0 right-0 z-50 md:hidden bg-[var(--bg)]/80 backdrop-blur-xl border-b border-[var(--border)]">
        <div className="flex items-center justify-between h-12 px-4">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-sm font-semibold text-[var(--fg)]"
          >
            batuhan<span className="text-[var(--accent)]">.</span>
          </button>
          <div className="flex items-center gap-1.5">
            <MusicPlayer />
            <div className="w-px h-4 bg-[var(--border)]" />
            <button onClick={toggleLanguage} className="w-8 h-8 flex items-center justify-center text-[var(--muted)]" aria-label="Toggle language">
              <Globe size={16} />
            </button>
            <button onClick={toggleTheme} className="w-8 h-8 flex items-center justify-center text-[var(--muted)]" aria-label="Toggle theme">
              {resolvedTheme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile: Bottom tab bar ── */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[var(--bg)]/90 backdrop-blur-xl border-t border-[var(--border)] pb-[max(0.25rem,env(safe-area-inset-bottom))]">
        <div className="flex items-center justify-around h-14">
          {navItems.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`flex flex-col items-center justify-center gap-0.5 w-14 h-full transition-colors ${
                activeSection === id
                  ? 'text-[var(--accent)]'
                  : 'text-[var(--muted)]'
              }`}
              aria-label={label}
            >
              <Icon size={18} />
              {activeSection === id && (
                <div className="w-1 h-1 rounded-full bg-[var(--accent)]" />
              )}
            </button>
          ))}
        </div>
      </nav>
    </>
  )
}
