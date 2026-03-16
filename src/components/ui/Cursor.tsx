import { useEffect, useRef } from 'react'
import { cn } from '../../lib/utils'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const hovered = useRef(false)

  useEffect(() => {
    // track mouse position
    const handleMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }

    // track hover
    const handleEnter = () => {
      hovered.current = true
      dotRef.current?.classList.add('scale-[1.8]')
      ringRef.current?.classList.add('!w-14', '!h-14', '!opacity-50')
    }
    const handleLeave = () => {
      hovered.current = false
      dotRef.current?.classList.remove('scale-[1.8]')
      ringRef.current?.classList.remove('!w-14', '!h-14', '!opacity-50')
    }

    window.addEventListener('mousemove', handleMove)

    const interactives = document.querySelectorAll('a, button, [data-cursor-hover]')
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', handleEnter)
      el.addEventListener('mouseleave', handleLeave)
    })

    // animation loop
    let animId: number
    const animate = () => {
      // dot — langsung snap ke posisi mouse (no delay)
      if (dotRef.current) {
        dotRef.current.style.left = pos.current.x + 'px'
        dotRef.current.style.top = pos.current.y + 'px'
      }

      // ring — lag effect
      ring.current.x += (pos.current.x - ring.current.x) * 0.12
      ring.current.y += (pos.current.y - ring.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px'
        ringRef.current.style.top = ring.current.y + 'px'
      }

      animId = requestAnimationFrame(animate)
    }
    animId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', handleMove)
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', handleEnter)
        el.removeEventListener('mouseleave', handleLeave)
      })
    }
  }, [])

  return (
    <>
      {/* dot — snap langsung */}
      <div
        ref={dotRef}
        className={cn(
          'fixed pointer-events-none z-9999',
          'w-2.5 h-2.5 rounded-full bg-white',
          'mix-blend-difference',
          '-translate-x-1/2 -translate-y-1/2',
          'transition-transform duration-200'
        )}
      />

      {/* ring — lag trailing */}
      <div
        ref={ringRef}
        className={cn(
          'fixed pointer-events-none z-9998',
          'w-9 h-9 rounded-full',
          'border border-white/35',
          '-translate-x-1/2 -translate-y-1/2',
          'transition-[width,height,opacity] duration-200'
        )}
      />
    </>
  )
}