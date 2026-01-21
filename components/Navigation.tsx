'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Home, 
  User, 
  Briefcase, 
  GraduationCap, 
  Wrench, 
  Images,
  Menu,
  X
} from 'lucide-react'

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
  const [isOpen, setIsOpen] = useState(false)

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
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-[var(--background)] border border-[var(--border)] md:hidden"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Navigation */}
      <motion.nav
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed left-0 top-0 h-full z-40 flex flex-col items-center justify-center gap-2 py-8 px-3 bg-[var(--background)] border-r border-[var(--border)] transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {navItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`group relative p-3 rounded-lg transition-all duration-200 ${
              activeSection === id
                ? 'bg-[var(--foreground)] text-[var(--background)]'
                : 'hover:bg-[var(--border)]'
            }`}
            aria-label={label}
          >
            <Icon size={20} />
            <span className="absolute left-full ml-3 px-2 py-1 text-sm whitespace-nowrap bg-[var(--foreground)] text-[var(--background)] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {label}
            </span>
          </button>
        ))}
      </motion.nav>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
