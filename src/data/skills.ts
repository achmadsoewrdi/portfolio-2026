import { type Skill } from '../types'

export const skills: Skill[] = [
  {
    id: 'ui-design',
    icon: '✦',
    title: 'UI Design',
    description:
      'Pixel-perfect interfaces with strong visual hierarchy, typography, and spatial reasoning.',
    items: ['Figma', 'Framer', 'Design Systems', 'Prototyping'],
  },
  {
    id: 'ux-research',
    icon: '◎',
    title: 'UX Research',
    description:
      'Understanding users through research, testing, and iteration to build what actually works.',
    items: ['User Interviews', 'Usability Tests', 'Journey Mapping'],
  },
  {
    id: 'frontend',
    icon: '⬡',
    title: 'Frontend Dev',
    description:
      'Translating designs into clean, performant, accessible code that ships on time.',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    id: 'motion',
    icon: '▣',
    title: 'Motion Design',
    description:
      'Purposeful animations and transitions that guide attention and delight users.',
    items: ['Framer Motion', 'GSAP', 'CSS Animation'],
  },
  {
    id: 'performance',
    icon: '◈',
    title: 'Web Performance',
    description:
      'Fast, optimized experiences that score high on Core Web Vitals and real-world usage.',
    items: ['Lighthouse', 'Web Vitals', 'Optimization'],
  },
  {
    id: 'collaboration',
    icon: '⊕',
    title: 'Collaboration',
    description:
      'Working closely with product, engineering, and stakeholders to ship cohesive work.',
    items: ['Agile/Scrum', 'Documentation', 'Handoff'],
  },
]