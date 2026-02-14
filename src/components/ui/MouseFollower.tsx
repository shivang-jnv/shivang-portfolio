'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useCallback, useMemo } from 'react'

export const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  // Memoize the callback to prevent unnecessary re-renders
  const updateMousePosition = useCallback((e: MouseEvent) => {
    // Direct state update is fine here, Framer Motion handles the interpolation
    setMousePosition({ x: e.clientX, y: e.clientY })
    if (!isVisible) setIsVisible(true)
  }, [isVisible])

  // Optimize the effect
  useEffect(() => {
    // Only add if device likely has a mouse (not strictly necessary but good practice)
    const mediaQuery = window.matchMedia("(pointer: fine)")
    if (!mediaQuery.matches) return

    window.addEventListener('mousemove', updateMousePosition, { passive: true })
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [updateMousePosition])



  return (
      <motion.div
        className="fixed w-6 h-6 border border-gray-400 rounded-full pointer-events-none z-50 gpu-optimized hidden md:block will-change-transform"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ 
          type: "spring", 
          damping: 25, 
          stiffness: 250,
          mass: 0.5,
          restSpeed: 0.001
        }}
        style={{ 
          pointerEvents: 'none',
          // Force hardware acceleration
          transform: 'translateZ(0)' 
        }}
      />
  )
}
