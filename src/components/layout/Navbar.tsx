'use client'
import { useState, useEffect, memo, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Layers, Briefcase, Mail, GraduationCap, Award } from 'lucide-react'
import { Magnetic } from '../ui/Magnetic'
import { useScroll } from '../logic/ScrollManager'

const navItems = [
  { href: '#techstack', label: 'Tech Stack', icon: Layers },
  { href: '#projects', label: 'Projects', icon: Briefcase },
  { href: '#education', label: 'Education', icon: GraduationCap },
  { href: '#certificates', label: 'Certificates', icon: Award },
  { href: '#contact', label: 'Contact', icon: Mail },
]

const Navbar = memo(function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')
  const { lenis } = useScroll()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      if (lenis) {
        lenis.scrollTo(element, { offset: -50 })
      } else {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      setIsOpen(false)
    }
  }

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 80)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace('#', ''))
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.25, rootMargin: '-80px 0px -40% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 fixed-layer ${
        scrolled
          ? 'bg-black/60 backdrop-blur-md border-b border-white/[0.08]'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold cursor-pointer transition-all duration-200 hover:brightness-125"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-gradient">SK</span>
          </motion.button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.replace('#', '')
              return (
                <Magnetic key={item.href}>
                  <motion.button
                    onClick={() => scrollToSection(item.href)}
                    className={`transition-colors duration-200 text-sm font-medium relative group flex items-center space-x-2 ${
                      isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <item.icon size={15} />
                    <span>{item.label}</span>
                    <span
                      className={`absolute -bottom-1 left-0 h-[1.5px] bg-white transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </motion.button>
                </Magnetic>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white flex items-center justify-center w-11 h-11"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-6 space-y-2 bg-black/90 backdrop-blur-xl border-t border-white/[0.06] rounded-b-xl px-6 shadow-2xl shadow-black/30"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '')
              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`w-full py-3 transition-colors flex items-center space-x-3 text-left touch-manipulation min-h-[44px] ${
                    isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <item.icon size={16} />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              )
            })}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
})

export default Navbar
