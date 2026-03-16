import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 2.4 + 0.6
        if (next >= 100) {
          clearInterval(intervalRef.current!)
          return 100
        }
        return next
      })
    }, 85)

    return () => clearInterval(intervalRef.current!)
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        setVisible(false)
      }, 600)
      return () => clearTimeout(timer)
    }
  }, [progress])

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
          className="fixed inset-0 z-9999 bg-bg flex items-center justify-center"
        >
          <span className="font-mono text-[16px] tracking-widest text-text">
            {Math.round(progress)}%
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}