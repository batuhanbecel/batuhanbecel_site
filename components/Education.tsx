'use client'

import { motion } from 'framer-motion'

const education = [
  {
    period: '2018 – 2022',
    degree: 'Bachelor of Communication',
    institution: 'Marmara University',
    details: 'Faculty of Communication',
  },
  {
    period: '2014 – 2018',
    degree: 'High School Diploma',
    institution: 'Istanbul Burhan Felek Anatolian High School',
    details: 'Visual Communication & Design Focus',
  },
]

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-24"
    >
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm md:text-base text-[var(--muted)] tracking-wider uppercase mb-4">
            Education
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-light mb-12">
            Academic background
          </h3>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="p-6 border border-[var(--border)] rounded-lg hover:border-[var(--foreground)] transition-colors"
            >
              <p className="text-sm text-[var(--muted)] mb-2">{edu.period}</p>
              <h4 className="text-xl font-medium mb-1">{edu.degree}</h4>
              <p className="text-[var(--muted)]">{edu.institution}</p>
              <p className="text-sm text-[var(--muted)] mt-2">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
