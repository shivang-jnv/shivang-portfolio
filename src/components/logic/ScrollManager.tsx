'use client'

import { createContext, useContext, useEffect, useState, useRef } from 'react'
import Lenis from 'lenis'

interface ScrollContextType {
  lenis: Lenis | null
}

const ScrollContext = createContext<ScrollContextType>({
  lenis: null
})

export const useScroll = () => useContext(ScrollContext)

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const [lenis, setLenis] = useState<Lenis | null>(null)
  const reqIdRef = useRef<number | null>(null)
  const [isNavigating, setIsNavigating] = useState(false)
  const [currentSection, setCurrentSection] = useState('#home')

  // Initialize Lenis
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const lenisInstance = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    setLenis(lenisInstance)

    const raf = (time: number) => {
      lenisInstance.raf(time)
      reqIdRef.current = requestAnimationFrame(raf)
    }
    
    reqIdRef.current = requestAnimationFrame(raf)

    return () => {
      if (reqIdRef.current) cancelAnimationFrame(reqIdRef.current)
      lenisInstance.destroy()
      setLenis(null)
    }
  }, [])

  // Scroll Tracking Logic
  useEffect(() => {
    // Ensure page starts at #home on initial load if no hash
    if (window.location.hash === '' || window.location.hash === '#') {
      if (window.scrollY < 100) {
           window.history.replaceState(null, '', '#home')
           setCurrentSection('#home')
      }
    }

    const handleScroll = () => {
      if (isNavigating) return

      const sections = ['home', 'about', 'education', 'certificates', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      let foundSection = 'home'

      for (const section of sections) {
        const element = document.getElementById(section)
        
        if (element) {
          const { offsetTop, offsetHeight } = element
          const sectionBottom = offsetTop + offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < sectionBottom) {
            foundSection = section
            break
          }
        }
      }

      const newHash = `#${foundSection}`
      
      if (newHash !== currentSection) {
        setCurrentSection(newHash)
        window.history.replaceState(null, '', newHash)
      }
    }

    // Use Lenis scroll event if available, otherwise fallback to window scroll
    // Actually, window scroll works fine with Lenis too.
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })
    handleScroll() // Check on mount

    return () => {
      window.removeEventListener('scroll', throttledScroll)
    }
  }, [currentSection, isNavigating])

  return (
    <ScrollContext.Provider value={{ lenis }}>
      {children}
    </ScrollContext.Provider>
  )
}
