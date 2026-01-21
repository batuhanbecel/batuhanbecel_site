'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    period: 'Nov 2022 – Present',
    role: 'Retoucher',
    company: 'f/2.8 Production Agency',
    description: 'Producing creative visuals and bringing 3D projects to life.',
    current: true,
  },
  {
    period: 'May 2021 – Nov 2022',
    role: 'Creative Designer',
    company: 'Walther Kranz Agency',
    description: 'Developed social media content designs for MediaCat, Rolls-Royce Istanbul, and A1 Capital.',
    current: false,
  },
  {
    period: '2019 – 2021',
    role: 'Design Committee Leader & Executive Board Member',
    company: 'Marmara University Communication Club',
    description: 'Led creative processes and team collaboration within the Faculty of Communication.',
    current: false,
  },
  {
    period: '2014 – 2018',
    role: 'Visual Communication & Design',
    company: 'Istanbul Burhan Felek Anatolian High School',
    description: 'Created posters, panels, roll-ups, video editing, and post-production work.',
    current: false,
  },
  {
    period: '2013',
    role: "Photographer's Assistant",
    company: 'f/2.8 Production Agency',
    description: 'Gained hands-on industry experience in creative production.',
    current: false,
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-24 relative"
    >
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="w-full max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm md:text-base text-[var(--muted)] tracking-widest uppercase mb-4 font-medium">
            Experience
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
            Professional <span className="text-gradient">journey</span>
          </h3>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`p-6 rounded-2xl border transition-all duration-300 hover-lift ${
                exp.current 
                  ? 'glass border-indigo-500/30' 
                  : 'bg-[var(--card)] border-[var(--border)] hover:border-[var(--muted)]'
              }`}>
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <h4 className="text-xl font-semibold mb-1">{exp.role}</h4>
                    <p className="text-[var(--muted)] font-medium">{exp.company}</p>
                  </div>
                  <span className={`px-3 py-1 text-sm rounded-full ${
                    exp.current 
                      ? 'bg-indigo-500/20 text-indigo-400' 
                      : 'bg-[var(--border)] text-[var(--muted)]'
                  }`}>
                    {exp.period}
                  </span>
                </div>
                <p className="text-[var(--muted)]">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
