import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import StatCard from '../ui/StatCard'
import { fadeUpVariants, fadeUpTransition } from '../../lib/motion'
import { type StatItem } from '../../types'

const stats: StatItem[] = [
  { value: '4+', label: 'Years of experience' },
  { value: '30+', label: 'Projects shipped' },
  { value: '12+', label: 'Happy clients' },
  { value: '∞', label: 'Design iterations' },
]

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="px-12 py-24 max-w-300 mx-auto w-full">
      <SectionLabel text="About" />

      <motion.h2
        ref={ref}
        initial={fadeUpVariants.hidden}
        animate={inView ? fadeUpVariants.show : fadeUpVariants.hidden}
        transition={fadeUpTransition}
        className="font-display text-[clamp(32px,4vw,56px)] leading-[1.1] tracking-[-0.02em] text-white max-w-175"
      >
        Where design meets <em className="text-muted">engineering.</em>
      </motion.h2>

      <div className="mt-16 grid grid-cols-2 gap-20 items-start">

        <motion.div
          initial={fadeUpVariants.hidden}
          animate={inView ? fadeUpVariants.show : fadeUpVariants.hidden}
          transition={{ ...fadeUpTransition, delay: 0.15 }}
          className="flex flex-col gap-5"
        >
          <p className="text-[16px] text-muted leading-[1.8]">
            <strong className="text-white font-semibold">Hi, I'm Achmad Soewardi</strong>.
            I'm a software engineer who bridges the gap between{' '}
            <strong className="text-white font-semibold">design and code</strong>.
            With a deep focus on UI/UX, I create digital products that aren't just
            functional — they're experiences that users actually enjoy.
          </p>
          <p className="text-[16px] text-muted leading-[1.8]">
            My workflow spans from early-stage user research and wireframing to
            building pixel-perfect, performant interfaces. I believe that{' '}
            <strong className="text-white font-semibold">great design is invisible</strong>{' '}
            — it just feels right.
          </p>
          <p className="text-[16px] text-muted leading-[1.8]">
            Currently based in Bandung, working with clients and teams across
            Southeast Asia to bring thoughtful digital products to life.
          </p>
        </motion.div>

        <motion.div
          initial={fadeUpVariants.hidden}
          animate={inView ? fadeUpVariants.show : fadeUpVariants.hidden}
          transition={{ ...fadeUpTransition, delay: 0.3 }}
          className="grid grid-cols-2 gap-px bg-border border border-border rounded-lg overflow-hidden"
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </motion.div>

      </div>
    </section>
  )
}