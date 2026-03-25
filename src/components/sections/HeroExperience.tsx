'use client'

import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

const experiences = [
  {
    period: 'Dec 2025 – Present',
    role: 'Junior Engineer',
    company: 'Aalgorix',
    bullets: [
      'Deployed containerized applications to Digital Ocean using Docker, managing cloud infrastructure and SSH-based server administration.',
      'Identified and resolved AWS EC2 auto-scaling misconfiguration, reducing unnecessary running instances from 5 to 1 and optimizing resource utilization.',
      'Contributed to frontend development for AI tutoring platform using React and TailwindCSS, implementing responsive UI components.',
    ],
  },
  {
    period: 'Sept 2022 – Nov 2022',
    role: 'Arduino Coding Intern',
    company: 'Plantech Innovations Ltd.',
    bullets: [
      'Developed embedded firmware for sensor integration in C++.',
      'Debugged hardware-software compatibility issues, improving reliability.',
      'Collaborated with team to deliver functional prototypes on schedule.',
    ],
  },
]

export default function HeroExperience() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="flex flex-col gap-6 max-h-[80vh] overflow-y-auto pr-1 lg:pl-16"
      style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.08) transparent' }}
    >
      {/* Heading */}
      <div className="flex items-center gap-3 mb-1">
        <div className="p-2 rounded-lg bg-white/[0.06] border border-white/[0.08]">
          <Briefcase size={16} className="text-gray-300" />
        </div>
        <h2 className="text-xl font-bold text-white tracking-tight">Work Experience</h2>
      </div>

      {experiences.map((exp, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.6 + i * 0.18 }}
          className="group p-[1px] rounded-2xl transition-all duration-500"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 50%, rgba(255,255,255,0.08) 100%)',
          }}
          whileHover={{ y: -3 }}
        >
          {/* Inner card */}
          <div
            className="relative rounded-2xl p-6 overflow-hidden transition-all duration-500"
            style={{ background: 'linear-gradient(135deg, #0e0e0e 0%, #0a0a0a 100%)' }}
          >
{/* Accent left bar — white */}
            <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-r-full bg-white/60" />

            {/* Content */}
            <div className="pl-5">
              {/* Top row: role + period */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="mt-1.5">
                    <span className="text-sm font-semibold text-gray-300">
                      {exp.company}
                    </span>
                  </div>
                </div>

                {/* Period badge — minimal rounding */}
                <span className="shrink-0 mt-0.5 px-3 py-1 text-[11px] font-medium rounded-[3px] bg-white/[0.05] border border-white/[0.08] text-gray-400">
                  {exp.period}
                </span>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent mb-4" />

              {/* Bullets */}
              <ul className="space-y-3">
                {exp.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-3 text-base text-gray-400 leading-relaxed">
                    <span className="mt-[9px] w-[5px] h-[5px] rounded-full bg-white/50 shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            {/* Subtle top-edge shine */}
            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }}
            />

            {/* Hover glow overlay */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%)' }}
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
