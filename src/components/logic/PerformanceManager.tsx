'use client'

import { useEffect } from 'react'

export const PerformanceManager = () => {
  useEffect(() => {
    // Safe check for browser environment
    if (typeof window === 'undefined') return
    
    // Reduce motion for low-end devices
    const isLowEndDevice = (
      (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) || 
      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    )
    
    if (isLowEndDevice) {
      document.documentElement.style.setProperty('--motion-scale', '0.5')
      document.body.classList.add('reduce-motion')
    }
  }, [])

  return null
}
