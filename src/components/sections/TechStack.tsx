'use client'

import { motion } from 'framer-motion'
import React from 'react'

const DEVICONS = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'
const SIMPLEICONS = 'https://cdn.simpleicons.org'

type TechItem = {
  name: string
  src?: string
  invert?: boolean
  icon?: React.ReactNode
}

/* ── Inline SVGs for icons not in Devicons/SimpleIcons ── */
const WsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none"
    stroke="rgba(255,255,255,0.85)" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round"
    className="block shrink-0 h-[22px] w-[22px]">
    <path d="M5 12h14" />
    <path d="M15 7l5 5-5 5" />
    <path d="M9 7L4 12l5 5" />
  </svg>
)

const RestIcon = () => (
  <svg viewBox="0 0 24 24" fill="none"
    stroke="rgba(255,255,255,0.85)" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round"
    className="block shrink-0 h-[22px] w-[22px]">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
)

const categories: { label: string; items: TechItem[] }[] = [
  {
    label: 'Frontend',
    items: [
      { name: 'React',      src: `${DEVICONS}/react/react-original.svg` },
      { name: 'Next.js',    src: `${DEVICONS}/nextjs/nextjs-original.svg` },
      { name: 'TypeScript', src: `${DEVICONS}/typescript/typescript-original.svg` },
      { name: 'Tailwind',   src: `${DEVICONS}/tailwindcss/tailwindcss-original.svg` },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'Node.js',    src: `${DEVICONS}/nodejs/nodejs-original.svg` },
      { name: 'Express',    src: `${DEVICONS}/express/express-original.svg`, invert: true },
      { name: 'GraphQL',    src: `${DEVICONS}/graphql/graphql-plain.svg` },
      { name: 'Kafka',      src: `${SIMPLEICONS}/apachekafka/ffffff` },
      { name: 'REST APIs',  icon: <RestIcon /> },
      { name: 'WebSockets', icon: <WsIcon /> },
    ],
  },
  {
    label: 'Database',
    items: [
      { name: 'PostgreSQL', src: `${DEVICONS}/postgresql/postgresql-original.svg` },
      { name: 'MongoDB',    src: `${DEVICONS}/mongodb/mongodb-original.svg` },
      { name: 'Redis',      src: `${DEVICONS}/redis/redis-original.svg` },
      { name: 'Prisma ORM', src: `${SIMPLEICONS}/prisma/ffffff` },
    ],
  },
  {
    label: 'Cloud & DevOps',
    items: [
      { name: 'Docker',      src: `${DEVICONS}/docker/docker-original.svg` },
      { name: 'Kubernetes',  src: `${DEVICONS}/kubernetes/kubernetes-plain.svg` },
      { name: 'AWS',         src: `${DEVICONS}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
      { name: 'Jenkins',     src: `${DEVICONS}/jenkins/jenkins-original.svg` },
      { name: 'Git',         src: `${DEVICONS}/git/git-original.svg` },
      { name: 'Linux',       src: `${DEVICONS}/linux/linux-original.svg` },
    ],
  },
]

const pillVariants = {
  hidden:  { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 120, damping: 20 } },
}

export default function TechStack() {
  return (
    <section id="techstack" className="py-24 px-6 lg:px-16 relative">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="mb-16 text-center"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-gray-500 font-semibold mb-3">
          Tools &amp; Technologies
        </p>
        <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">
          Tech Stack
        </h2>
        <div className="mt-4 mx-auto w-12 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </motion.div>

      {/* Categories */}
      <div className="max-w-4xl mx-auto">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: ci * 0.08 }}
            className={ci !== 0 ? 'mt-10' : ''}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.05 }}
              className="flex flex-col lg:flex-row lg:flex-nowrap lg:items-center gap-3"
            >
              {/* Category label */}
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-gray-500 lg:w-36 shrink-0 border-l-2 border-white/20 pl-3">
                {cat.label}
              </span>

              {/* Pills */}
              <div className="flex flex-wrap lg:flex-nowrap gap-3">
                {cat.items.map((tech) => (
                  <motion.div
                    key={tech.name}
                    variants={pillVariants}
                    className="group/pill flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/[0.10] transition-all duration-200 cursor-default"
                  >
                    {tech.icon ? (
                      tech.icon
                    ) : (
                      <img
                        src={tech.src}
                        alt={tech.name}
                        className="block shrink-0 h-[22px] w-[22px] object-contain opacity-90 group-hover/pill:scale-110 transition-transform duration-200"
                        style={tech.invert ? { filter: 'invert(1)' } : undefined}
                      />
                    )}
                    <span className="text-base text-gray-300 whitespace-nowrap">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
