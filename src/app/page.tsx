
import dynamic from 'next/dynamic'
import Navbar from '@/components/layout/Navbar'
import Education from '@/components/sections/Education'
import Certificates from '@/components/sections/Certificates'
import TechStack from '@/components/sections/TechStack'

import { MouseFollower } from '@/components/ui/MouseFollower'
import { ScrollIndicator } from '@/components/ui/ScrollIndicator'
import { Hero } from '@/components/sections/Hero'

// Lazy load heavy sections
const About = dynamic(() => import('@/components/sections/About'), {
  loading: () => <div className="h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
  </div>,
  ssr: true
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
  return (
    <>
      <Navbar />

      {/* Dot Grid Background */}
      <div className="fixed inset-0 dot-grid pointer-events-none" />

      <MouseFollower />

      {/* Hero Section */}
      <main id="home" className="min-h-screen flex items-center justify-center px-6 relative">
        <Hero />
        <ScrollIndicator />
      </main>

      {/* Tech Stack Section */}
      <TechStack />

      {/* Projects Section */}
      <Projects />

      {/* About Section */}
      <About />

      {/* Education Section */}
      <Education />

      {/* Certificates Section */}
      <Certificates />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </>
  )
}
