'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Retouching',
    skills: ['High-End Beauty Retouching', 'Product Retouching', 'Color Grading', 'Compositing', 'Skin Retouching'],
  },
  {
    title: 'Design',
    skills: ['Visual Communication', 'Brand Identity', 'Social Media Design', 'Print Design', 'Layout Design'],
  },
  {
    title: 'Software',
    skills: ['Adobe Photoshop', 'Adobe Lightroom', 'Capture One', '3D Software', 'Adobe Premiere Pro'],
  },
  {
    title: 'Production',
    skills: ['Creative Direction', 'Post-Production', 'Video Editing', 'Team Leadership', 'Project Management'],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
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
            Skills
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-light mb-12">
            Expertise & tools
          </h3>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 border border-[var(--border)] rounded-lg"
            >
              <h4 className="text-lg font-medium mb-4">{category.title}</h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-[var(--border)] rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
