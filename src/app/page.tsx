'use client'

import { motion, useAnimation } from 'framer-motion'
import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import dynamic from 'next/dynamic'
import Navbar from '@/components/layout/Navbar'
import { trackPerformanceMetrics } from '@/utils/Performance';


// Lazy load sections that aren't immediately visible
const About = dynamic(() => import('@/components/sections/About'), {
  loading: () => <div className="h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
  </div>,
  ssr: true // Keep SSR for SEO
})

const Projects = dynamic(() => import('@/components/sections/Projects'), {
  loading: () => <div className="h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
  </div>,
  ssr: true
})

const Contact = dynamic(() => import('@/components/sections/Contact'), {
  loading: () => <div className="h-96 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
  </div>,
  ssr: true
})

const Footer = dynamic(() => import('@/components/layout/Footer'), {
  loading: () => <div className="h-64 bg-black" />,
  ssr: true
})

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Added this new useEffect for performance
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
  }
}, [])

useEffect(() => {
  trackPerformanceMetrics();
}, []);


// Memoize the callback to prevent unnecessary re-renders
const updateMousePosition = useCallback((e: MouseEvent) => {
  setMousePosition({ x: e.clientX, y: e.clientY })
}, [])

// Optimize the effect
useEffect(() => {
  window.addEventListener('mousemove', updateMousePosition, { passive: true })
  return () => window.removeEventListener('mousemove', updateMousePosition)
}, [updateMousePosition])

// Memoize expensive calculations
const mouseFollowerStyle = useMemo(() => ({
  x: mousePosition.x - 12,
  y: mousePosition.y - 12,
}), [mousePosition.x, mousePosition.y])


  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Navbar />
      
      {/* Dot Grid Background */}
      <div className="fixed inset-0 dot-grid pointer-events-none" />
      
      {/* Mouse Follower - Optimized */}
      <motion.div
        className="fixed w-6 h-6 border border-gray-400 rounded-full pointer-events-none z-40 gpu-optimized"
        animate={mouseFollowerStyle}
        transition={{ 
          type: "spring", 
          damping: 27, 
          stiffness: 300,
          mass: 0.8,
          restSpeed: 0.01
        }}
      />

      



      <main id="home" className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="text-center max-w-6xl">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-7xl md:text-9xl font-black mb-6 tracking-tight"
              animate={{ 
                textShadow: [
                  "0 0 0px rgba(255, 255, 255, 0)",
                  "0 0 20px rgba(255, 255, 255, 0.5)",
                  "0 0 0px rgba(255, 255, 255, 0)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-gradient">Shivang Kanaujia</span>
            </motion.h1>
            
            <motion.div 
              className="text-2xl md:text-3xl font-light mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <span className="liquid-metal">Full Stack Developer</span>
            </motion.div>


            <motion.p 
              className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Crafting digital experiences with modern technologies. 
              Passionate about creating beautiful, functional web applications 
              that solve real-world problems.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <motion.button
                className="group relative px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full font-semibold text-white overflow-hidden border border-gray-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
              >
                <span className="relative z-10">View My Work</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              
              <motion.button
                className="px-8 py-4 border-2 border-gray-500 rounded-full font-semibold text-gray-300 hover:bg-gray-500 hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex justify-center space-x-6 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: '#', label: 'Email' }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToSection('about')}
          whileHover={{ scale: 1.1 }}
        >
          <div className="flex flex-col items-center space-y-2">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center relative">
              <motion.div 
                className="w-1 h-3 bg-gradient-to-b from-gray-400 to-white rounded-full mt-2"
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <ChevronDown className="text-gray-400" size={16} />
          </div>
        </motion.div>
      </main>

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />

       {/* Footer */}
      <Footer />
    </>
  )
}
