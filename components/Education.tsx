'use client'

import { motion } from 'framer-motion'
import { GraduationCap, School } from 'lucide-react'

const education = [
  {
    period: '2018 – 2022',
    degree: 'Bachelor of Communication',
    institution: 'Marmara University',
    details: 'Faculty of Communication',
    icon: GraduationCap,
  },
  {
    period: '2014 – 2018',
    degree: 'High School Diploma',
    institution: 'Istanbul Burhan Felek Anatolian High School',
    details: 'Visual Communication & Design Focus',
    icon: School,
  },
]

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-24 relative"
    >
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl" />
      
      <div className="w-full max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm md:text-base text-[var(--muted)] tracking-widest uppercase mb-4 font-medium">
            Education
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
            Academic <span className="text-gradient">background</span>
          </h3>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group p-6 bg-[var(--card)] border border-[var(--border)] rounded-2xl hover:border-[var(--muted)] transition-all duration-300 hover-lift"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[var(--border)] group-hover:bg-[var(--foreground)] group-hover:text-[var(--background)] transition-colors">
                  <edu.icon size={24} />
                </div>
                <div className="flex-1">
                  <span className="text-sm text-[var(--muted)] font-medium">{edu.period}</span>
                  <h4 className="text-xl font-semibold mt-1 mb-1">{edu.degree}</h4>
                  <p className="text-[var(--muted)] font-medium">{edu.institution}</p>
                  <p className="text-sm text-[var(--muted)] mt-2">{edu.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
