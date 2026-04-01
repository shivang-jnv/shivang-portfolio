'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Github, ExternalLink, Calendar, Layers, ArrowUpRight } from 'lucide-react'
import { useRef } from 'react'
import type { Project } from '@/lib/projects'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
})

export default function ProjectDetail({ project }: { project: Project }) {
  const imageRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: imageRef, offset: ['start end', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Dot grid background */}
      <div className="fixed inset-0 dot-grid pointer-events-none opacity-50" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 py-12">

        {/* Back button */}
        <motion.div {...fade(0)} className="mb-12">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 group text-sm font-medium"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Title + meta */}
        <motion.div {...fade(0.08)} className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[3px] bg-white/[0.06] border border-white/[0.1] text-gray-400 text-xs font-medium">
              <Calendar size={11} />
              {project.year}
            </span>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-[3px] bg-white/[0.04] border border-white/[0.08] text-gray-500 text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">
            {project.title}
          </h1>
        </motion.div>

        {/* Screenshot */}
        <motion.div {...fade(0.14)} className="mb-12">
          {project.screenshots.length > 0 ? (
            <div
              ref={imageRef}
              className="relative w-full overflow-hidden rounded-2xl border border-white/[0.08]"
              style={{ height: '420px' }}
            >
              <motion.div className="absolute inset-0" style={{ y: imageY }}>
                <Image
                  src={project.screenshots[0]}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 896px"
                  priority
                />
              </motion.div>
            </div>
          ) : (
            <div
              className="w-full rounded-2xl border border-white/[0.08] flex items-center justify-center"
              style={{ height: '280px', background: 'linear-gradient(135deg, #0e0e0e, #111)' }}
            >
              <span className="text-2xl md:text-3xl font-black text-white/[0.06] tracking-tight text-center px-8">
                {project.title}
              </span>
            </div>
          )}
        </motion.div>

        {/* Problem statement */}
        <motion.div {...fade(0.18)} className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-white/[0.06]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-gray-600 font-bold shrink-0">The Problem</span>
            <div className="h-px flex-1 bg-white/[0.06]" />
          </div>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            {project.summary}
          </p>
        </motion.div>

        {/* Tech stack */}
        <motion.div {...fade(0.22)} className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <Layers size={14} className="text-gray-600" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-gray-600 font-bold">Tech Stack</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-gray-300 text-sm hover:border-white/[0.2] hover:bg-white/[0.08] transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Architecture & Decisions */}
        <motion.div {...fade(0.26)} className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-white/[0.06]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-gray-600 font-bold shrink-0">Architecture &amp; Decisions</span>
            <div className="h-px flex-1 bg-white/[0.06]" />
          </div>
          <div
            className="p-[1px] rounded-2xl"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)' }}
          >
            <div className="rounded-2xl px-8 py-7 space-y-5" style={{ background: '#0c0c0c' }}>
              {project.architectureNotes.trim().split('\n\n').map((para, i) => (
                <p key={i} className="text-gray-400 leading-relaxed text-base">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Action buttons */}
        <motion.div {...fade(0.3)} className="flex flex-col sm:flex-row gap-4 pb-20">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-200 hover:-translate-y-0.5 transition-all duration-200"
          >
            <Github size={16} />
            View on GitHub
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-transparent border border-white/20 text-white font-bold text-sm hover:bg-white/[0.08] hover:border-white/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <ExternalLink size={16} />
              Live Demo
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
          )}
        </motion.div>
      </div>
    </main>
  )
}
