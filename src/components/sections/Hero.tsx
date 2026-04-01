'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter, ArrowRight, FileText } from 'lucide-react'
import { Magnetic } from '../ui/Magnetic'
import { useScroll } from '../logic/ScrollManager'
import HeroExperience from './HeroExperience'

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

  const ease = [0.21, 0.47, 0.32, 0.98] as const

  return (
    <section className="min-h-screen relative overflow-hidden pt-16 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-screen items-center px-6 lg:px-16">

        {/* ── LEFT HALF ── */}
        <div className="flex flex-col items-start z-10">
          {/* Name */}
          <motion.h1
            className="text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 tracking-tight w-full text-center whitespace-nowrap"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
          >
            <span className="text-gradient">Shivang Kanaujia</span>
          </motion.h1>

          {/* Title — centered in left column */}
          <motion.div
            className="text-2xl md:text-3xl font-light mb-4 w-full text-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease }}
          >
            <span className="text-white/80">Full Stack Developer</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-md md:text-lg text-gray-400 mb-12 w-full leading-relaxed"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease }}
          >
            Software Engineer with 5+ months of production experience building and deploying AI-powered applications in a fast-paced startup. Skilled across full-stack development, cloud infrastructure (Docker, Kubernetes, AWS, Nginx, SSL), and modern AI systems (RAG, ChromaDB). Active open-source contributor with 7+ merged PRs.
          </motion.p>

          {/* Buttons — centered in left column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all min-w-[160px] flex items-center justify-center gap-2 group"
            >
              View Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="/resume-shivang-updated.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent border border-gray-700 text-white rounded-full font-bold hover:bg-gray-800 transition-all min-w-[160px] flex items-center justify-center gap-2 group"
            >
              <FileText size={18} />
              View Resume
            </a>
          </motion.div>

          {/* Social Icons — centered in left column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55, ease }}
            className="flex items-center justify-center gap-6 w-full"
          >
            {[
              { Icon: Github, href: 'https://github.com/shivang-jnv' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/shivang-kanaujia-973a6a175/' },
              { Icon: Twitter, href: 'https://twitter.com/shivang_jnv' },
              { Icon: Mail, href: 'mailto:skjnvspn@gmail.com' },
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
        </div>

        {/* ── RIGHT HALF ── */}
        <HeroExperience />
      </div>
    </section>
  )
}
