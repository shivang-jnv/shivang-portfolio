'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="fixed inset-0 dot-grid pointer-events-none opacity-30" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative text-center"
      >
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/25 font-semibold mb-6">
          Error
        </p>
        <h1
          className="font-black text-white/[0.06] leading-none tracking-tighter mb-8 select-none"
          style={{ fontSize: 'clamp(6rem, 20vw, 16rem)' }}
        >
          404
        </h1>
        <p className="text-lg font-semibold text-white mb-2 -mt-4">Page not found</p>
        <p className="text-sm text-white/40 mb-10 max-w-xs mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2.5 text-sm font-semibold text-white/60 hover:text-white transition-colors duration-200 group"
        >
          <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform duration-200" />
          Back to home
        </Link>
      </motion.div>
    </main>
  )
}
