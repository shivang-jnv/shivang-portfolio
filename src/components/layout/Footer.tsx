'use client'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, MapPin, Heart, ArrowUp } from 'lucide-react'
import React from 'react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/shivang-jnv', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/shivang-kanaujia-973a6a175/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/shivang_jnv', label: 'Twitter' },
  { icon: Mail, href: 'mailto:sknvspn@gmail.com', label: 'Email' },
]

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
  { label: 'Resume', href: '#' },
]

const Footer = React.memo(() => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gray-950 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section - Compact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h3 className="text-2xl font-black mb-3 text-gradient">Shivang Kanaujia</h3>
            <p className="text-gray-400 mb-4 leading-relaxed text-sm">
              Full-stack developer passionate about creating exceptional digital experiences.
            </p>
            
            {/* Compact Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin size={14} />
                <span>India</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail size={14} />
                <a href="mailto:skjnvspn@gmail.com" className="hover:text-white transition-colors">
                  skjnvspn@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links - Compact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >

            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social & Tech - Compact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h4 className="text-lg font-bold text-white mb-4">Connect</h4>
            
            {/* Compact Social Links */}
            <div className="flex space-x-3 mb-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={16} className="text-gray-400 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Compact Bottom Section */}
        <motion.div
          className="border-t border-gray-800 mt-8 pt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            {/* Compact Copyright */}
            <div className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-3 text-gray-400 text-xs">
              <span>&copy; {currentYear} Shivang Kanaujia. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center space-x-1">
                <span>Built with</span>
                <Heart size={12} className="text-red-500 mx-1" />
                <span>using Next.js & Tailwind CSS</span>
              </span>
            </div>

            {/* Compact Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Top</span>
              <ArrowUp size={14} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
})

export default Footer;
