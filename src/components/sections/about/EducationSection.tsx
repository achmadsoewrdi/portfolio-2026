import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUpVariants, fadeUpTransition } from '../../../lib/motion'
import { education } from '../../../data/about'
import SectionLabel from '../../ui/SectionLabel'

export default function EducationSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="px-12 py-24 max-w-300 mx-auto w-full">
      <SectionLabel text="Education" />

      <motion.h2
        ref={ref}
        initial={fadeUpVariants.hidden}
        animate={inView ? fadeUpVariants.show : fadeUpVariants.hidden}
        transition={fadeUpTransition}
        className="font-display text-[clamp(32px,4vw,56px)] leading-[1.1] tracking-[-0.02em] text-white max-w-175"
      >
        Academic <em className="text-muted">background.</em>
      </motion.h2>

      <motion.div
        initial={fadeUpVariants.hidden}
        animate={inView ? fadeUpVariants.show : fadeUpVariants.hidden}
        transition={{ ...fadeUpTransition, delay: 0.2 }}
        className="mt-16 flex flex-col gap-px bg-border border border-border rounded-lg overflow-hidden"
      >
        {education.map((edu) => (
          <div
            key={edu.id}
            className="grid grid-cols-[160px_1fr] bg-surface hover:bg-[#111111] transition-colors duration-200"
          >
            {/* year */}
            <div className="px-8 py-8 border-r border-border flex flex-col justify-center">
              <p className="font-mono text-[12px] tracking-[0.08em] text-subtle">
                {edu.startYear}
              </p>
              <p className="font-mono text-[12px] tracking-[0.08em] text-subtle">
                — {edu.endYear}
              </p>
            </div>

            {/* info */}
            <div className="px-8 py-8">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-[16px] font-semibold text-text">
                  {edu.institution}
                </h3>
                <span className="font-mono text-[11px] tracking-[0.08em] text-subtle shrink-0 mt-0.5">
                  {edu.degree}
                </span>
              </div>
              <p className="text-[14px] text-muted">{edu.major}</p>
              <p className="font-mono text-[11px] text-subtle mt-1">
                {edu.location}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}