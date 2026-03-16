import { motion } from 'framer-motion'
import Button from '../ui/Button'
import { fadeUpVariants, fadeUpTransition } from '../../lib/motion'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-12 overflow-hidden">

      {/* grid background */}
      <div
        className="absolute inset-0 pointer-events-none -z-9999"
        style={{
          backgroundImage: `
            linear-gradient(#1f1f1f 1px, transparent 1px),
            linear-gradient(90deg, #1f1f1f 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%)',
        }}
      />

      {/* badge */}
      <motion.div
        initial={fadeUpVariants.hidden}
        animate={fadeUpVariants.show}
        transition={{ ...fadeUpTransition, delay: 0.2 }}
        className="flex items-center gap-2 mb-8 w-fit"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80] animate-pulse" />
        <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-subtle">
          Available for work
        </span>
      </motion.div>

      {/* title */}
      <motion.h1
        initial={fadeUpVariants.hidden}
        animate={fadeUpVariants.show}
        transition={{ ...fadeUpTransition, delay: 0.4 }}
        className="font-display text-[clamp(52px,8vw,112px)] leading-none tracking-[-0.03em] text-white max-w-225"
      >
        Crafting digital<br />
        <em className="text-muted">experiences</em><br />
        that matter.
      </motion.h1>

      {/* subtitle */}
      <motion.p
        initial={fadeUpVariants.hidden}
        animate={fadeUpVariants.show}
        transition={{ ...fadeUpTransition, delay: 0.6 }}
        className="mt-7 text-[16px] text-muted max-w-120 leading-[1.7]"
      >
        Software engineer with a passion for UI/UX and web design.
        I build interfaces that feel intuitive, look beautiful, and perform seamlessly.
      </motion.p>

      {/* cta */}
      <motion.div
        initial={fadeUpVariants.hidden}
        animate={fadeUpVariants.show}
        transition={{ ...fadeUpTransition, delay: 0.8 }}
        className="mt-12 flex gap-3 items-center"
      >
        <Button variant="primary" href="#work">View Work →</Button>
        <Button variant="ghost" href="#contact">Get in Touch</Button>
      </motion.div>

      {/* scroll hint */}
      <motion.div
        initial={fadeUpVariants.hidden}
        animate={fadeUpVariants.show}
        transition={{ ...fadeUpTransition, delay: 1.2 }}
        className="absolute bottom-9 left-12 flex items-center gap-2.5"
      >
        <span className="block w-px h-9 bg-linear-to-b from-transparent to-subtle" />
        <span className="font-mono text-[11px] tracking-widest uppercase text-subtle">
          Scroll to explore
        </span>
      </motion.div>

      {/* decorative number */}
      <motion.div
        initial={fadeUpVariants.hidden}
        animate={fadeUpVariants.show}
        transition={{ ...fadeUpTransition, delay: 0.8 }}
        className="absolute bottom-12 right-12 font-display text-[200px] leading-none pointer-events-none select-none"
        style={{ color: 'transparent', WebkitTextStroke: '1px #262626' }}
      >
        01
      </motion.div>

    </section>
  )
}