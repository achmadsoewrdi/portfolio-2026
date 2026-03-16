import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import SkillCard from '../ui/SkillCard'
import { skills } from '../../data/skills'
import { fadeUpVariants, fadeUpTransition } from '../../lib/motion'

export default function SkillsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="px-12 py-24 max-w-300 mx-auto w-full">
      <SectionLabel text="Capabilities" />

      <motion.h2
        ref={ref}
        initial={fadeUpVariants.hidden}
        animate={inView ? fadeUpVariants.show : fadeUpVariants.hidden}
        transition={fadeUpTransition}
        className="font-display text-[clamp(32px,4vw,56px)] leading-[1.1] tracking-[-0.02em] text-white max-w-175"
      >
        What I bring to the <em className="text-muted">table.</em>
      </motion.h2>

      <motion.div
        initial={fadeUpVariants.hidden}
        animate={inView ? fadeUpVariants.show : fadeUpVariants.hidden}
        transition={{ ...fadeUpTransition, delay: 0.2 }}
        className="mt-16 grid grid-cols-3 gap-px bg-border border border-border rounded-lg overflow-hidden"
      >
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </motion.div>
    </section>
  )
}