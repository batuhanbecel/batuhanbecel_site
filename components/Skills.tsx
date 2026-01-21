'use client'

import { motion } from 'framer-motion'
import { Palette, Layers, Monitor, Clapperboard } from 'lucide-react'

const skillCategories = [
  {
    title: 'Retouching',
    icon: Palette,
    color: 'from-pink-500/20 to-rose-500/20',
    skills: ['High-End Beauty Retouching', 'Product Retouching', 'Color Grading', 'Compositing', 'Skin Retouching'],
  },
  {
    title: 'Design',
    icon: Layers,
    color: 'from-blue-500/20 to-indigo-500/20',
    skills: ['Visual Communication', 'Brand Identity', 'Social Media Design', 'Print Design', 'Layout Design'],
  },
  {
    title: 'Software',
    icon: Monitor,
    color: 'from-emerald-500/20 to-teal-500/20',
    skills: ['Adobe Photoshop', 'Adobe Lightroom', 'Capture One', '3D Software', 'Adobe Premiere Pro'],
  },
  {
    title: 'Production',
    icon: Clapperboard,
    color: 'from-amber-500/20 to-orange-500/20',
    skills: ['Creative Direction', 'Post-Production', 'Video Editing', 'Team Leadership', 'Project Management'],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-24 relative"
    >
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl" />
      
      <div className="w-full max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm md:text-base text-[var(--muted)] tracking-widest uppercase mb-4 font-medium">
            Skills
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
            Expertise & <span className="text-gradient">tools</span>
          </h3>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-6 bg-[var(--card)] border border-[var(--border)] rounded-2xl hover:border-[var(--muted)] transition-all duration-300 hover-lift overflow-hidden relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[var(--border)] group-hover:bg-[var(--foreground)] group-hover:text-[var(--background)] transition-colors">
                    <category.icon size={20} />
                  </div>
                  <h4 className="text-lg font-semibold">{category.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-[var(--border)] rounded-full transition-colors group-hover:bg-[var(--background)]/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
