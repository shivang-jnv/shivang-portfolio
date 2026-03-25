'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, Calendar, CheckCircle, Star } from 'lucide-react'

const certificates = [
  {
    title: 'OCI 2025 Certified Developer Professional',
    issuer: 'Oracle',
    date: '2025',
    credentialId: '102999301OCID25CP',
    credentialUrl: 'https://drive.google.com/file/d/19DAu_bkzxAV6rEgUWNQV31UID-Sit-Au/view?usp=drive_link',
    description: 'Comprehensive certification validating advanced competence in Oracle Cloud Infrastructure architecture, development, and deployment workflows.',
    skills: ['Cloud-native', 'Microservices', 'Containers', 'Kubernetes', 'Serverless', 'APIs', 'Streaming', 'Queues', 'Events', 'Security', 'Testing', 'Observability'],
    verified: true,
    featured: true
  },
  {
    title: 'Back End Development and APIs',
    issuer: 'FreeCodeCamp',
    date: '2025',
    credentialId: 'shivang-jnv-bedaa',
    credentialUrl: 'https://www.freecodecamp.org/certification/1a2377fc-5c8e-4442-9cc9-189ea75dbf58/back-end-development-and-apis',
    description: 'Comprehensive certification demonstrating proficiency in Node.js, Express.js, MongoDB, and RESTful API design through practical project implementations.',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Authentication', 'Database Design', 'Server Development', 'API Testing'],
    verified: true,
    featured: true
  },
  {
    title: 'OCI 2025 Certified AI Foundations Associate',
    issuer: 'Oracle',
    date: '2025',
    credentialId: '102999301OCI25AICFA',
    credentialUrl: 'https://drive.google.com/file/d/1vteMG9t0jYDeREOIGJVOZ7cJkvtTaz6_/view?usp=drive_link',
    description: 'Introductory learning path covering core concepts in AI, machine learning, deep learning, and generative AI with direct application on OCI.',
    skills: ['AI', 'Machine Learning', 'Deep Learning', 'Generative AI', 'Modeling', 'Inference', 'Cloud Deployment', 'OCI Services'],
    verified: true,
    featured: false
  },
  {
    title: 'J. P. Morgan - Software Engineering Job Simulation',
    issuer: 'Forage',
    date: '2025',
    credentialId: 'KJKGrfmkDx2LsddLi',
    credentialUrl: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_HjhcRibaTuF7JNrbs_1751662484798_completion_certificate.pdf',
    description: "A hands-on virtual experience learning JPMorgan Chase's programming skills and tools through real software engineering tasks.",
    skills: ['Spring', 'Java', 'Kafka', 'Maven', 'REST API', 'SQL'],
    verified: true,
    featured: false
  },
  {
    title: 'AWS Solutions Architecture Job Simulation',
    issuer: 'Forage',
    date: '2025',
    credentialId: 'rLWQeT4Miej7bMzK4',
    credentialUrl: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_HjhcRibaTuF7JNrbs_1751742561204_completion_certificate.pdf',
    description: 'AWS Solutions Architecture job simulation designing scalable hosting architectures using Elastic Beanstalk, load balancing, and multi-service AWS implementations.',
    skills: ['AWS Architecture', 'Elastic Beanstalk', 'Load Balancing', 'Auto Scaling', 'Multi-AZ Deployment', 'Cost Optimization'],
    verified: true,
    featured: false
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'FreeCodeCamp',
    date: '2024',
    credentialId: 'FCC-JSADS-2022-123',
    credentialUrl: 'https://freecodecamp.org/certification/1a2377fc-5c8e-4442-9cc9-189ea75dbf58/javascript-algorithms-and-data-structures-v8',
    description: 'Advanced JavaScript programming with focus on algorithms, data structures, and problem-solving techniques.',
    skills: ['JavaScript', 'Algorithms', 'Data Structures', 'Problem Solving'],
    verified: true,
    featured: false
  },
  {
    title: 'Foundations of Prompt Engineering',
    issuer: 'AWS',
    date: '2025',
    credentialId: '',
    credentialUrl: 'https://drive.google.com/file/d/1HlV33RHgYvRq13ovvYi9smFqI0x0pWfo/view?usp=drive_link',
    description: 'AWS certification demonstrating expertise in generative AI interactions, LLM optimization, and advanced prompting techniques.',
    skills: ['Prompt Engineering', 'Generative AI', 'LLMs', 'Chain-of-Thought', 'AI Optimization'],
    verified: true,
    featured: false
  },
  {
    title: 'Accenture UK - Developer and Technology Job Simulation',
    issuer: 'Forage',
    date: '2025',
    credentialId: 'gt88MFfnM85g7R4bY',
    credentialUrl: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ovyvuqqNRQKBjNxbj/3xnZEj9kfpoQKW885_ovyvuqqNRQKBjNxbj_HjhcRibaTuF7JNrbs_1751312225810_completion_certificate.pdf',
    description: 'Comprehensive SDLC simulation covering Agile/Waterfall methodologies, algorithmic thinking, code debugging, and software testing practices.',
    skills: ['SDLC', 'Agile', 'Waterfall', 'Software Testing', 'Algorithmic Thinking', 'Code Debugging'],
    verified: true,
    featured: false
  }
]

const VISIBLE_DEFAULT = 3
const extra = certificates.slice(VISIBLE_DEFAULT)

const CertCard = ({ cert, index }: { cert: typeof certificates[number]; index: number }) => (
  <motion.div
    key={cert.credentialId}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.45, delay: index * 0.07 }}
    onClick={() => cert.credentialUrl && window.open(cert.credentialUrl, '_blank')}
    className="group relative bg-black border-2 border-gray-800 rounded-xl overflow-hidden cursor-pointer hover:border-gray-600 transition-all duration-300"
    style={{ minHeight: 260 }}
  >
    {/* Top accent */}
    <div className="h-[2px] bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 group-hover:via-gray-400 transition-all duration-300" />

    <div className="p-5 flex flex-col h-full">
      {/* Header */}
      <div className="flex items-start gap-3 mb-3">
        <div className="p-2 bg-gray-900 border border-gray-800 rounded-lg group-hover:border-gray-700 transition-colors shrink-0">
          <Award className="text-gray-400 group-hover:text-white transition-colors" size={16} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            {cert.featured && (
              <span className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                <Star size={9} fill="currentColor" /> Featured
              </span>
            )}
            {cert.verified && (
              <span className="flex items-center gap-1 px-1.5 py-0.5 bg-gray-900 border border-gray-800 rounded-full text-[10px] text-gray-400">
                <CheckCircle size={9} /> Verified
              </span>
            )}
          </div>
          <h4 className="text-sm font-bold text-white leading-snug line-clamp-2 group-hover:text-gradient transition-all duration-300">
            {cert.title}
          </h4>
          <p className="text-xs text-gray-400 font-medium mt-0.5">{cert.issuer}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-3 flex-1">
        {cert.description}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {cert.skills.slice(0, 4).map(skill => (
          <span
            key={skill}
            className="px-2 py-0.5 text-[10px] font-medium bg-gray-900 text-gray-300 border border-gray-800 rounded"
          >
            {skill}
          </span>
        ))}
        {cert.skills.length > 4 && (
          <span className="px-2 py-0.5 text-[10px] text-gray-500 border border-gray-800 rounded">
            +{cert.skills.length - 4}
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center gap-1.5 pt-2.5 border-t border-gray-800 text-gray-500">
        <Calendar size={10} />
        <span className="text-xs font-medium">{cert.date}</span>
      </div>
    </div>

    {/* Hover overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
  </motion.div>
)

const Certificates = React.memo(() => {
  const [showAll, setShowAll] = useState(false)

  return (
    <section id="certificates" className="py-20 px-6 lg:px-16 relative">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-4 text-gradient">
            Certifications
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Professional certifications and credentials validating my expertise across technologies and development practices.
          </p>
        </motion.div>

        {/* Top 3 — always visible */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.slice(0, VISIBLE_DEFAULT).map((cert, i) => (
            <CertCard key={cert.credentialId} cert={cert} index={i} />
          ))}
        </div>

        {/* Expanded grid — unfolds below */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                {extra.map((cert, i) => (
                  <CertCard key={cert.credentialId} cert={cert} index={i} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle button */}
        <div className="flex justify-center mt-8">
          <motion.button
            onClick={() => setShowAll(v => !v)}
            className="px-6 py-2.5 text-sm font-medium rounded-full border border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white transition-all duration-200"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {showAll ? 'Show less' : `Show ${extra.length} more`}
          </motion.button>
        </div>

      </div>
    </section>
  )
})

Certificates.displayName = 'Certificates'
export default Certificates
