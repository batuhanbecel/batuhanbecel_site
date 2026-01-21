'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <h2 className="text-sm md:text-base text-[var(--muted)] tracking-wider uppercase mb-4">
          About Me
        </h2>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8">
          A decade of creative evolution
        </h3>
        
        <div className="space-y-6 text-[var(--muted)] leading-relaxed">
          <p>
            I began my professional journey in 2013 as a Photographer's Assistant at f/2.8 Production Agency. This period marked a unique starting point, allowing me to gain hands-on industry experience while developing a deep understanding of the creative production process.
          </p>
          <p>
            Between 2014 and 2018, I actively worked in the field of visual communication and design at Istanbul Burhan Felek Anatolian High School. During this time, I strengthened my expertise by contributing to a wide range of projects, from printed materials such as posters, panels, and roll-ups to video editing and post-production work.
          </p>
          <p>
            During my university years, my passion for design evolved into a more multidimensional practice. While studying at Marmara University, I joined the Faculty of Communication's prestigious Communication Club. From 2019 to 2021, I served as Design Committee Leader and as a Member of the Executive Board, where I gained substantial experience in team leadership and organizing creative processes. This period became a turning point in understanding the critical role of collaboration and leadership within creative work.
          </p>
          <p>
            After graduating, I continued my career in May 2021 as a Creative Designer at Walther Kranz Agency. There, I developed social media content designs for prestigious brands such as MediaCat, Rolls-Royce Istanbul, and A1 Capital. Through projects that strengthened brand identities and fostered meaningful connections with target audiences, I consistently pushed the boundaries of design. This experience played a key role in refining my creative vision and adapting to the discipline of working with global brands.
          </p>
          <p>
            As of November 2022, my career journey reached another meaningful milestone when I returned to f/2.8 Production Agency, this time as a Retoucher. Producing creative visuals and bringing 3D projects to life continues to contribute significantly to both my professional growth and the expansion of my creative portfolio.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
