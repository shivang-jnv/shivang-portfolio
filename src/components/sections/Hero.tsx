'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter, ArrowRight } from 'lucide-react'
import { Magnetic } from '../ui/Magnetic'
import { useScroll } from '../logic/ScrollManager'

export const Hero = () => {
  const { lenis } = useScroll()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      if (lenis) {
        lenis.scrollTo(element, { offset: -50 })
      } else {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-center w-full z-10 px-4"
      >
        <motion.h1 
          className="text-3xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tight whitespace-nowrap"
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a 
            href="#projects" 
            className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all w-auto min-w-[160px] flex items-center justify-center gap-2 group"
          >
            View Work
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a 
            href="#contact" 
            className="px-8 py-4 bg-transparent border border-gray-700 text-white rounded-full font-bold hover:bg-gray-800 transition-all w-auto min-w-[160px]"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex items-center justify-center gap-6"
        >
          {[
            { Icon: Github, href: "https://github.com/shivang-jnv" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/shivang-kanaujia-973a6a175/" },
            { Icon: Twitter, href: "https://twitter.com/shivang_jnv" },
            { Icon: Mail, href: "mailto:skjnvspn@gmail.com" }
          ].map(({ Icon, href }, index) => (
            <Magnetic key={index}>
              <motion.a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-400 hover:text-white transition-colors block"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={24} />
              </motion.a>
            </Magnetic>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
