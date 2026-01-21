'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Home, 
  User, 
  Briefcase, 
  GraduationCap, 
  Wrench, 
  Images,
  Sun,
  Moon
} from 'lucide-react'
import { useTheme } from './ThemeProvider'

const navItems = [
  { id: 'hero', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'experience', icon: Briefcase, label: 'Experience' },
  { id: 'education', icon: GraduationCap, label: 'Education' },
  { id: 'skills', icon: Wrench, label: 'Skills' },
  { id: 'portfolio-preview', icon: Images, label: 'Portfolio' },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero')
  const { theme, setTheme, resolvedTheme } = useTheme()

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

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
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
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`group relative p-3 rounded-xl transition-all duration-300 ${
              activeSection === id
                ? 'bg-[var(--foreground)] text-[var(--background)] shadow-lg'
                : 'hover:bg-[var(--card-hover)]'
            }`}
            aria-label={label}
          >
            <Icon size={20} />
            <span className="absolute left-full ml-4 px-3 py-1.5 text-sm whitespace-nowrap glass rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none translate-x-2 group-hover:translate-x-0">
              {label}
            </span>
          </motion.button>
        ))}
        
        <div className="w-8 h-px bg-[var(--border)] my-2" />
        
        <motion.button
          onClick={toggleTheme}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-xl hover:bg-[var(--card-hover)] transition-all duration-300"
          aria-label="Toggle theme"
        >
          <AnimatePresence mode="wait">
            {resolvedTheme === 'dark' ? (
              <motion.div
                key="sun"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Sun size={20} />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Moon size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.nav>

      {/* Mobile Navigation - Bottom */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed bottom-4 left-4 right-4 z-50 md:hidden glass rounded-2xl p-2"
      >
        <div className="flex items-center justify-around">
          {navItems.map(({ id, icon: Icon, label }) => (
            <motion.button
              key={id}
              onClick={() => scrollToSection(id)}
              whileTap={{ scale: 0.9 }}
              className={`relative p-3 rounded-xl transition-all duration-300 ${
                activeSection === id
                  ? 'bg-[var(--foreground)] text-[var(--background)]'
                  : ''
              }`}
              aria-label={label}
            >
              <Icon size={20} />
              {activeSection === id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[var(--background)] rounded-full"
                />
              )}
            </motion.button>
          ))}
          
          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-xl transition-all duration-300"
            aria-label="Toggle theme"
          >
            {resolvedTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </div>
      </motion.nav>
    </>
  )
}
