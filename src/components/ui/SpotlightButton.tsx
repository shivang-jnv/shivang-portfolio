'use client'

import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface SpotlightButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export const SpotlightButton = ({ children, onClick, className = '', ...props }: SpotlightButtonProps) => {
  const btnRef = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current) return

    const rect = btnRef.current.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  return (
    <motion.button
      ref={btnRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.98 }}
      className={`relative overflow-hidden rounded-full bg-slate-950 px-8 py-4 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/25 border border-slate-800 ${className}`}
      {...props as any}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 40%)`,
        }}
      />
      <span className="relative z-10 flex items-center justify-center gap-2 font-medium">
        {children}
      </span>
    </motion.button>
  )
}
