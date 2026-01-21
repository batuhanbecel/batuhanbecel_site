'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-24 relative"
    >
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl relative z-10"
      >
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-sm md:text-base text-[var(--muted)] tracking-widest uppercase mb-4 font-medium"
        >
          About Me
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10"
        >
          A decade of <span className="text-gradient">creative evolution</span>
        </motion.h3>
        
        <div className="space-y-6 text-[var(--muted)] leading-relaxed text-lg">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            I began my professional journey in 2013 as a Photographer's Assistant at f/2.8 Production Agency. This period marked a unique starting point, allowing me to gain hands-on industry experience while developing a deep understanding of the creative production process.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Between 2014 and 2018, I actively worked in the field of visual communication and design at Istanbul Burhan Felek Anatolian High School. During this time, I strengthened my expertise by contributing to a wide range of projects, from printed materials such as posters, panels, and roll-ups to video editing and post-production work.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            During my university years, my passion for design evolved into a more multidimensional practice. While studying at Marmara University, I joined the Faculty of Communication's prestigious Communication Club. From 2019 to 2021, I served as Design Committee Leader and as a Member of the Executive Board, where I gained substantial experience in team leadership and organizing creative processes. This period became a turning point in understanding the critical role of collaboration and leadership within creative work.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            After graduating, I continued my career in May 2021 as a Creative Designer at Walther Kranz Agency. There, I developed social media content designs for prestigious brands such as MediaCat, Rolls-Royce Istanbul, and A1 Capital. Through projects that strengthened brand identities and fostered meaningful connections with target audiences, I consistently pushed the boundaries of design. This experience played a key role in refining my creative vision and adapting to the discipline of working with global brands.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            As of November 2022, my career journey reached another meaningful milestone when I returned to f/2.8 Production Agency, this time as a Retoucher. Producing creative visuals and bringing 3D projects to life continues to contribute significantly to both my professional growth and the expansion of my creative portfolio.
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}
