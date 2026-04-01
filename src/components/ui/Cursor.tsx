'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export function Cursor() {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)
  const rawX = useRef(0)
  const rawY = useRef(0)

  const springConfig = { stiffness: 400, damping: 28 }
  const x = useSpring(0, springConfig)
  const y = useSpring(0, springConfig)

  useEffect(() => {
    // Don't render on touch devices
    if (typeof window === 'undefined' || 'ontouchstart' in window) return

    const onMove = (e: MouseEvent) => {
      rawX.current = e.clientX
      rawY.current = e.clientY
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
    }

    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    const onHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [role="button"], input, textarea, select')) {
        setHovered(true)
      }
    }
    const onHoverEnd = () => setHovered(false)

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    document.addEventListener('mouseover', onHoverStart)
    document.addEventListener('mouseout', onHoverEnd)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mouseover', onHoverStart)
      document.removeEventListener('mouseout', onHoverEnd)
    }
  }, [x, y])

  // Don't render on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
      style={{
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
        width: hovered ? 32 : 8,
        height: hovered ? 32 : 8,
        background: hovered ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.9)',
        opacity: visible ? 1 : 0,
        transition: 'width 0.2s ease, height 0.2s ease, background 0.2s ease, opacity 0.15s ease',
      }}
    />
  )
}
