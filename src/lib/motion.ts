export const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
} as const

export const fadeUpTransition = {
  duration: 0.7,
  ease: 'easeOut' as const,
}