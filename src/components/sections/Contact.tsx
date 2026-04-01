'use client'
import { motion } from 'framer-motion'
import { Copy, Check, Github, Linkedin, Twitter } from 'lucide-react'
import React, { useState, useCallback } from 'react'

const EMAIL = 'skjnvspn@gmail.com'

const socials = [
  { Icon: Github,   href: 'https://github.com/shivang-jnv',                        label: 'GitHub'   },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/shivang-kanaujia-973a6a175/', label: 'LinkedIn' },
  { Icon: Twitter,  href: 'https://twitter.com/shivang_jnv',                         label: 'Twitter'  },
]

const ease = [0.21, 0.47, 0.32, 0.98] as const

const Contact = React.memo(function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }, [])

  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="max-w-2xl mx-auto text-center">

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease }}
          className="text-xs uppercase tracking-[0.25em] text-gray-600 font-semibold mb-5"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: 0.08, ease }}
          className="text-4xl md:text-5xl font-black tracking-tight text-white mb-5 leading-tight whitespace-nowrap"
        >
          Let&apos;s work together.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.15, ease }}
          className="text-gray-500 text-base mb-12 leading-relaxed"
        >
          Open to full-time roles, freelance projects, and interesting conversations.
        </motion.p>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.22, ease }}
          className="flex items-center justify-center gap-3 mb-14"
        >
          <a
            href={`mailto:${EMAIL}`}
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-100 hover:-translate-y-0.5 transition-all duration-200"
          >
            {EMAIL}
          </a>
          <button
            onClick={handleCopy}
            aria-label="Copy email"
            className="p-3 rounded-full border border-white/[0.1] bg-white/[0.04] text-gray-400 hover:text-white hover:border-white/25 hover:bg-white/[0.08] transition-all duration-200"
          >
            {copied
              ? <Check size={15} className="text-emerald-400" />
              : <Copy size={15} />
            }
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.3, ease }}
          className="flex items-center justify-center gap-5"
        >
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2.5 text-gray-500 hover:text-white transition-colors duration-200"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>

      </div>
    </section>
  )
})

export default Contact
