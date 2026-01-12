'use client'
import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Award, Calendar, ExternalLink, CheckCircle, Star, ChevronLeft, ChevronRight } from 'lucide-react'

const certificates = [
  {
    title: 'OCI 2025 Certified Developer Professional',
    issuer: 'Oracle',
    date: '2025',
    credentialId: '102999301OCID25CP',
    description: 'Comprehensive certification validating advanced competence in Oracle Cloud Infrastructure architecture, development, and deployment workflows.',
    skills: ['Cloud-native', 'Microservices', 'Containers', 'Kubernetes', 'Serverless', 'APIs', 'Streaming', 'Queues', 'Events', 'Security', 'Testing', 'Observability']
,
    verified: true,
    featured: true
  },
  {
    title: 'Back End Development and APIs ',
    issuer: 'FreeCodeCamp',
    date: '2025',
    credentialId: 'shivang-jnv-bedaa',
    description: 'Comprehensive certification demonstrating proficiency in Node.js, Express.js, MongoDB, and RESTful API design through practical project implementations.',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Authentication', 'Database Design', 'Server Development', 'API Testing']
,
    verified: true,
    featured: true
  },
  {
    title: 'OCI 2025 Certified AI Foundations Associate',
    issuer: 'Oracle',
    date: '2025',
    credentialId: '102999301OCI25AICFA',
    description: 'Introductory learning path covering core concepts in AI, machine learning, deep learning, and generative AI with direct application on OCI',
    skills: ['AI', 'Machine Learning', 'Deep Learning', 'Generative AI', 'Modeling', 'Inference', 'Cloud Deployment', 'OCI Services'  ]
,
    verified: true,
    featured: false
  },
  {
    title: 'J. P. Morgan - Software Enginering Job Simulation',
    issuer: 'Forage',
    date: '2025',
    credentialId: 'KJKGrfmkDx2LsddLi',
    description: 'A hands-on virtual experience learning JPMorgan Chase\'s programming skills and tools through real software engineering tasks.',
    skills: ['Spring', 'Java', 'Kafka', 'Maven', 'REST API', 'SQL'],
    verified: true,
    featured: false
  },
  {
    title: 'AWS Solutions	Architecture Job Simulation',
    issuer: 'Forage',
    date: '2025',
    credentialId: 'rLWQeT4Miej7bMzK4',
    description: 'AWS Solutions Architecture job simulation on Forage, designing scalable hosting architectures using Elastic Beanstalk, load balancing, and multi-service AWS implementations for high-growth clients.',
    skills: ['AWS Architecture Design', 'Elastic Beanstalk', 'Load Balancing', 'Auto Scaling', 'Multi-AZ Deployment', 'Cost Optimization', 'Technical Communication', 'Cloud Solutions']
,
    verified: true,
    featured: false
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'FreeCodeCamp',
    date: '2024',
    credentialId: 'FCC-JSADS-2022-123',
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
    description: 'AWS certification, demonstrating expertise in generative AI interactions, LLM optimization, and advanced prompting techniques.',
    skills: ['Prompt Engineering', 'Generative AI', 'LLMs', 'Chain-of-Thought', 'AI Optimization', 'Context Design'],
    verified: true,
    featured: false
  },
  {
    title: 'Accenture UK - Developer and Technology Job Simulation',
    issuer: 'Forage',
    date: '2025',
    credentialId: 'gt88MFfnM85g7R4bY',
    description: 'comprehensive software development lifecycle simulation covering SDLC methodologies, algorithmic thinking, code debugging, and software testing practices through hands-on projects and technical analysis.',
    skills: ['SDLC', 'Agile', 'Waterfall', 'Software Testing', 'Algorithmic Thinking', 'Code Debugging', 'Pseudocoding', 'Flow Diagramming', 'DevOps', 'Software QA']
,
    verified: true,
    featured: false
  }
]

const Certificates = React.memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [cardsPerView, setCardsPerView] = useState(3)
  const [isMobile, setIsMobile] = useState(false)

  // Detect screen size and adjust cards per view with debouncing
  React.useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const updateCardsPerView = () => {
      const width = window.innerWidth
      setIsMobile(width < 768)
      
      if (width < 768) {
        setCardsPerView(2)
      } else if (width < 1024) {
        setCardsPerView(2)
      } else {
        setCardsPerView(3)
      }
    }

    const debouncedUpdate = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(updateCardsPerView, 150)
    }

    updateCardsPerView()
    window.addEventListener('resize', debouncedUpdate, { passive: true })
    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('resize', debouncedUpdate)
    }
  }, [])

  const scroll = React.useCallback((direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentIndex(prev => Math.max(0, prev - 1))
    } else {
      setCurrentIndex(prev => Math.min(certificates.length - cardsPerView, prev + 1))
    }
  }, [cardsPerView])

  return (
    <section id="certificates" className="min-h-screen py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-gradient">
            Certifications
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Professional certifications and credentials that validate my expertise 
            across various technologies and development practices.
          </p>
        </motion.div>

        {/* Mobile: Vertical Strip Cards / Desktop: Horizontal Carousel */}
        <div className="relative">
          {/* Navigation Buttons - Desktop only */}
          <motion.button
            onClick={() => scroll('left')}
            disabled={currentIndex === 0}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gray-900 border-2 border-gray-700 rounded-full items-center justify-center hover:bg-gray-800 hover:border-gray-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 shadow-xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="text-gray-300" size={20} />
          </motion.button>

          <motion.button
            onClick={() => scroll('right')}
            disabled={currentIndex >= certificates.length - cardsPerView}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gray-900 border-2 border-gray-700 rounded-full items-center justify-center hover:bg-gray-800 hover:border-gray-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 shadow-xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="text-gray-300" size={20} />
          </motion.button>

          {/* Fade Gradients - Desktop only */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

          {/* Mobile: Vertical Strips */}
          <div className="md:hidden space-y-3 px-4">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.credentialId}
                className="group relative bg-black border-2 border-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-gray-600"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                {/* Top accent bar */}
                <div className="h-0.5 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700" />
                
                <div className="flex items-center justify-between p-3">
                  <div className="flex items-center space-x-3 flex-1 min-w-0">
                    <Award className="text-gray-400 flex-shrink-0" size={16} />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-white truncate group-hover:text-gradient transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-gray-500">{cert.issuer}</p>
                    </div>
                  </div>
                  {cert.verified && (
                    <CheckCircle className="text-gray-600 flex-shrink-0 ml-2" size={14} />
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop: Horizontal Carousel */}
          <div className="hidden md:block overflow-hidden px-16">
            <motion.div
              ref={scrollContainerRef}
              className="flex gap-6"
              animate={{ x: `-${currentIndex * (100 / cardsPerView)}%` }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {certificates.map((cert) => (
                <motion.div
                  key={cert.credentialId}
                  className="group relative bg-black border-2 border-gray-800 rounded-xl overflow-hidden flex-shrink-0 transition-all duration-300"
                  style={{ 
                    width: isMobile ? 'calc(50% - 8px)' : `calc(${100 / cardsPerView}% - 16px)`, 
                    height: isMobile ? '280px' : '280px'
                  }}
                  whileHover={{ 
                    y: -8,
                    borderColor: '#6b7280',
                    boxShadow: "0 24px 48px rgba(0, 0, 0, 0.4)",
                    transition: { duration: 0.3, ease: "easeOut" } 
                  }}
                >
                  {/* Top accent bar */}
                  <div className="h-1 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 group-hover:from-gray-600 group-hover:via-gray-400 group-hover:to-gray-600 transition-all duration-300" />

                  {/* Subtle grid pattern background */}
                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                    <div 
                      className="w-full h-full"
                      style={{
                        backgroundImage: 'linear-gradient(0deg, #fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                      }}
                    />
                  </div>

                  <div className={`relative ${isMobile ? 'p-4' : 'p-5'} flex flex-col justify-between h-full`}>
                    {/* Header - Simplified for mobile */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start space-x-2 flex-1 min-w-0">
                        <div className={`${isMobile ? 'p-1.5' : 'p-2'} bg-gray-900 border border-gray-800 rounded-lg group-hover:border-gray-700 group-hover:bg-gray-800 transition-all duration-300 flex-shrink-0`}>
                          <Award className="text-gray-400 group-hover:text-white transition-colors duration-300" size={isMobile ? 14 : 18} />
                        </div>
                        <div className="flex-1 min-w-0">
                          {!isMobile && (
                            <div className="flex items-center gap-2 mb-1.5">
                              {cert.featured && (
                                <div className="flex items-center space-x-1">
                                  <Star className="text-gray-500 group-hover:text-gray-400 transition-colors" size={10} fill="currentColor" />
                                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Featured</span>
                                </div>
                              )}
                              {cert.verified && (
                                <div className="flex items-center space-x-1 px-2 py-0.5 bg-gray-900 border border-gray-800 rounded-full">
                                  <CheckCircle className="text-gray-400" size={9} />
                                  <span className="text-xs text-gray-400 font-medium">Verified</span>
                                </div>
                              )}
                            </div>
                          )}
                          <h4 className={`${isMobile ? 'text-sm' : 'text-base'} font-bold text-white mb-1 group-hover:text-gradient transition-all duration-300 leading-tight ${isMobile ? 'line-clamp-2' : 'line-clamp-2'}`}>
                            {cert.title}
                          </h4>
                          <p className={`text-gray-400 ${isMobile ? 'text-xs' : 'text-xs'} font-medium`}>{cert.issuer}</p>
                        </div>
                      </div>
                    </div>

                    {/* Description - Shorter on mobile */}
                    <p className={`text-gray-400 leading-relaxed ${isMobile ? 'mb-3 text-xs line-clamp-4' : 'mb-2 text-xs line-clamp-2'}`}>
                      {cert.description}
                    </p>

                    {/* Skills tags - Hidden on mobile */}
                    {!isMobile && (
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {cert.skills.slice(0, 4).map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 text-xs font-medium bg-gray-900 text-gray-300 border border-gray-800 rounded hover:border-gray-600 hover:bg-gray-800 transition-all duration-200"
                          >
                            {skill}
                          </span>
                        ))}
                        {cert.skills.length > 4 && (
                          <span className="px-2 py-0.5 text-xs font-medium text-gray-500 border border-gray-800 rounded">
                            +{cert.skills.length - 4}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Footer with date and credential */}
                    <div className={`flex items-center justify-between ${isMobile ? 'pt-2' : 'pt-2.5'} border-t border-gray-800 group-hover:border-gray-700 transition-colors`}>
                      <div className="flex items-center space-x-1.5 text-gray-500">
                        <Calendar size={isMobile ? 10 : 11} />
                        <span className={`${isMobile ? 'text-xs' : 'text-xs'} font-medium`}>{cert.date}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-500 group-hover:text-gray-300 transition-colors cursor-pointer">
                        <span className={`${isMobile ? 'text-xs' : 'text-xs'} font-medium`}>View</span>
                        <ExternalLink size={isMobile ? 9 : 10} />
                      </div>
                    </div>
                  </div>

                  {/* Hover overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center space-x-2 mt-8">
            {Array.from({ length: Math.max(1, certificates.length - 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'w-8 bg-gray-500' 
                    : 'w-2 bg-gray-700 hover:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})

Certificates.displayName = 'Certificates'
export default Certificates
