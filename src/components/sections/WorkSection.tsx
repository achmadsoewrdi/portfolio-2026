import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import ProjectItem from '../ui/ProjectItem'
import { projects } from '../../data/projects'
import { fadeUpVariants, fadeUpTransition } from '../../lib/motion'

export default function WorkSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="work" className="px-12 py-24 max-w-300 mx-auto w-full">
      <SectionLabel text="Selected Work" />

      <motion.h2
        ref={ref}
        initial={fadeUpVariants.hidden}
        animate={inView ? fadeUpVariants.show : fadeUpVariants.hidden}
        transition={fadeUpTransition}
        className="font-display text-[clamp(32px,4vw,56px)] leading-[1.1] tracking-[-0.02em] text-white max-w-175"
      >
        Projects I'm <em className="text-muted">proud of.</em>
      </motion.h2>

      <motion.div
        initial={fadeUpVariants.hidden}
        animate={inView ? fadeUpVariants.show : fadeUpVariants.hidden}
        transition={{ ...fadeUpTransition, delay: 0.2 }}
        className="mt-16 flex flex-col gap-px bg-border border border-border rounded-lg overflow-hidden"
      >
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  )
}