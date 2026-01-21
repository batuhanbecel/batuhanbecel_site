'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    period: 'Nov 2022 – Present',
    role: 'Retoucher',
    company: 'f/2.8 Production Agency',
    description: 'Producing creative visuals and bringing 3D projects to life.',
  },
  {
    period: 'May 2021 – Nov 2022',
    role: 'Creative Designer',
    company: 'Walther Kranz Agency',
    description: 'Developed social media content designs for MediaCat, Rolls-Royce Istanbul, and A1 Capital.',
  },
  {
    period: '2019 – 2021',
    role: 'Design Committee Leader & Executive Board Member',
    company: 'Marmara University Communication Club',
    description: 'Led creative processes and team collaboration within the Faculty of Communication.',
  },
  {
    period: '2014 – 2018',
    role: 'Visual Communication & Design',
    company: 'Istanbul Burhan Felek Anatolian High School',
    description: 'Created posters, panels, roll-ups, video editing, and post-production work.',
  },
  {
    period: '2013',
    role: "Photographer's Assistant",
    company: 'f/2.8 Production Agency',
    description: 'Gained hands-on industry experience in creative production.',
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
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
            Experience
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-light mb-12">
            Professional journey
          </h3>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative pl-8 border-l-2 border-[var(--border)] hover:border-[var(--foreground)] transition-colors"
            >
              <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-[var(--border)] group-hover:bg-[var(--foreground)] transition-colors" />
              <p className="text-sm text-[var(--muted)] mb-1">{exp.period}</p>
              <h4 className="text-xl font-medium mb-1">{exp.role}</h4>
              <p className="text-[var(--muted)] mb-2">{exp.company}</p>
              <p className="text-sm text-[var(--muted)]">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
