'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Code2, ArrowRight, Tag, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useMemo, useState, memo, useRef, useCallback } from 'react'




const projects = [
  {
    id: 1,
    title: 'Finance App',
    description: 'A personal finance management application that allows users to track accounts, categorize transactions, and visualize financial health through interactive charts and dashboards.',
    longDescription: 'A modern, full-stack personal finance management application built with Next.js, React, Drizzle ORM, Neon serverless Postgres, Clerk authentication, and Hono API framework. Track your accounts, categorize transactions, and visualize your financial health with beautiful charts and dashboards.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Shadcn UI', 'Hono', 'Drizzle ORM', 'PostgreSQL', 'Clerk Auth', 'React Query', 'Zustand', 'Recharts'],
    liveUrl: 'https://finance-app-sigma-lovat.vercel.app',
    repoUrl: 'https://github.com/shivang-jnv/Finance-app',
    year: '2025',
    featured: true,
    category: 'Full Stack',
    metrics: { users: 'NA', performance: '95%', uptime: '99.9%' },
    imageUrl: '/finance-app.png'
  },
  {
    id: 2,
    title: 'Team Chat App',
    description: 'A modern, full-stack Slack clone.',
    longDescription: 'Built with Next.js, Convex, and TypeScript. This project demonstrates real-time messaging, channels, direct messages, reactions, file uploads, and workspace management, providing a collaborative chat experience similar to Slack.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Convex', 'Jotai', 'OAuth', 'Bun', 'PostCSS'],
    liveUrl: 'https://slack-clone-chi-five.vercel.app',
    repoUrl: 'https://github.com/shivang-jnv/slack-clone',
    year: '2024',
    featured: true,
    category: 'Full Stack',
    metrics: { Channels: '50+', Performance: '95%', uptime: '99.9%' },
    imageUrl: '/team-chat-platform.png'

  },
  {
    id: 3,
    title: 'Weather Analytics Dashboard',
    description: 'Data visualization dashboard showing weather patterns, forecasts, and historical climate data.',
    longDescription: 'Python Flask backend with React frontend. Integrates multiple weather APIs and provides interactive charts and geographical visualizations with machine learning predictions.',
    tech: ['Python', 'Flask', 'React', 'Chart.js', 'OpenWeather API', 'D3.js'],
    liveUrl: null,
    repoUrl: '',
    year: '2023',
    featured: false,
    category: 'Data Visualization',
    metrics: { accuracy: '94%', cities: '500+', requests: '10K+' }
  },
  {
    id: 4,
    title: 'Social Media API',
    description: 'RESTful API for social media platform with authentication, posts, comments, and user relationships.',
    longDescription: 'Node.js and Express backend with MongoDB. Implements JWT authentication, image uploads, comprehensive social features, and rate limiting for optimal performance.',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Cloudinary', 'Redis'],
    liveUrl: null,
    repoUrl: '',
    year: '2024',
    featured: false,
    category: 'Backend',
    metrics: { endpoints: '25+', response: '<100ms', security: 'A+' }
  },
  {
    id: 5,
    title: 'AI Chatbot Assistant',
    description: 'Intelligent chatbot with natural language processing and context-aware responses.',
    longDescription: 'Python-based chatbot using OpenAI API with custom training data. Deployed as a web service with conversation history, user preferences, and multi-language support.',
    tech: ['Python', 'OpenAI API', 'FastAPI', 'SQLite', 'Docker', 'NLP'],
    liveUrl: null,
    repoUrl: '',
    year: '2024',
    featured: false,
    category: 'AI/ML',
    metrics: { accuracy: '96%', languages: '5+', conversations: '5K+' }
  },
  {
    id: 6,
    title: 'Real-Time Video Chat App',
    description: 'Secure video conferencing platform with screen sharing, chat, and room management features.',
    longDescription: 'Built with React, Node.js, and WebRTC technology. Features include end-to-end encryption, multi-participant rooms, screen sharing, file transfer, and recording capabilities with cloud storage integration.',
    tech: ['React', 'Node.js', 'WebRTC', 'Socket.io', 'AWS S3', 'WebSocket'],
    liveUrl: null,
    repoUrl: '',
    year: '2023',
    featured: false,
    category: 'Full Stack',
    metrics: { rooms: '800+', concurrent: '50+', quality: 'HD' }
  }
]

const Projects = memo(function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [cardsPerView, setCardsPerView] = useState(3)
  const [isMobile, setIsMobile] = useState(false)

  // Detect screen size and adjust cards per view with debouncing
  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const updateCardsPerView = () => {
      const width = window.innerWidth
      setIsMobile(width < 768)
      
      if (width < 768) {
        setCardsPerView(1)
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

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentIndex(prev => Math.max(0, prev - 1))
    } else {
      setCurrentIndex(prev => Math.min(projects.length - cardsPerView, prev + 1))
    }
  }, [cardsPerView])

  return (
    <section id="projects" className="min-h-screen py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-gradient">
            Featured Work
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A curated collection of projects showcasing my expertise in modern web development, 
            creative problem-solving, and attention to detail.
          </p>
        </motion.div>

        {/* Horizontal Scrollable Carousel */}
        <div className="relative">
          {/* Left Navigation Button */}
          <motion.button
            onClick={() => scroll('left')}
            disabled={currentIndex === 0}
            className="absolute left-0 md:left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-gray-900 border-2 border-gray-700 rounded-full flex items-center justify-center hover:bg-gray-800 hover:border-gray-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 shadow-xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="text-gray-300" size={20} />
          </motion.button>

          {/* Right Navigation Button */}
          <motion.button
            onClick={() => scroll('right')}
            disabled={currentIndex >= projects.length - cardsPerView}
            className="absolute right-0 md:right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-gray-900 border-2 border-gray-700 rounded-full flex items-center justify-center hover:bg-gray-800 hover:border-gray-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 shadow-xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="text-gray-300" size={20} />
          </motion.button>

          {/* Left Fade Gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
          
          {/* Right Fade Gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

          {/* Cards Container */}
          <div className="overflow-hidden px-12 md:px-16">
            <motion.div
              ref={scrollContainerRef}
              className="flex gap-4 md:gap-6"
              animate={{ x: `-${currentIndex * (100 / cardsPerView)}%` }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="group relative bg-black border-2 border-gray-800 rounded-xl overflow-hidden flex-shrink-0 transition-all duration-300"
                  style={{ 
                    width: `calc(${100 / cardsPerView}% - ${cardsPerView === 1 ? '12px' : '16px'})`, 
                    height: '280px' 
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

                  <div className="relative p-5 flex flex-col justify-between h-full">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start space-x-3 flex-1 min-w-0">
                        <div className="p-2 bg-gray-900 border border-gray-800 rounded-lg group-hover:border-gray-700 group-hover:bg-gray-800 transition-all duration-300 flex-shrink-0">
                          <Code2 className="text-gray-400 group-hover:text-white transition-colors duration-300" size={18} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1.5">
                            {project.featured && (
                              <div className="flex items-center space-x-1">
                                <Star className="text-gray-500 group-hover:text-gray-400 transition-colors" size={10} fill="currentColor" />
                                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Featured</span>
                              </div>
                            )}
                            <span className="text-xs text-gray-500">{project.category}</span>
                          </div>
                          <h4 className="text-base font-bold text-white mb-1 group-hover:text-gradient transition-all duration-300 leading-tight line-clamp-2">
                            {project.title}
                          </h4>
                          <p className="text-gray-400 text-xs">{project.year}</p>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed mb-3 text-xs line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tech.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs font-medium bg-gray-900 text-gray-300 border border-gray-800 rounded hover:border-gray-600 hover:bg-gray-800 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 5 && (
                        <span className="px-2 py-0.5 text-xs font-medium text-gray-500 border border-gray-800 rounded">
                          +{project.tech.length - 5}
                        </span>
                      )}
                    </div>

                    {/* Footer with links */}
                    <div className="flex items-center justify-between pt-2.5 border-t border-gray-800 group-hover:border-gray-700 transition-colors">
                      <div className="flex items-center space-x-3">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            className="flex items-center space-x-1.5 text-gray-500 hover:text-gray-300 transition-colors"
                          >
                            <ExternalLink size={11} />
                            <span className="text-xs font-medium">Live</span>
                          </a>
                        )}
                        <a
                          href={project.repoUrl}
                          className="flex items-center space-x-1.5 text-gray-500 hover:text-gray-300 transition-colors"
                        >
                          <Github size={11} />
                          <span className="text-xs font-medium">Code</span>
                        </a>
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
          <div className="flex justify-center items-center space-x-2 mt-8 mb-20">
            {Array.from({ length: Math.max(1, projects.length - 2) }).map((_, index) => (
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

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center bg-gray-900 border border-gray-800 rounded-xl p-12"
        >

          <h3 className="text-3xl font-bold text-white mb-4">
            Like What You See?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            These projects represent just a glimpse of what&apos;s possible. 
            Let&apos;s collaborate and create something extraordinary together.
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full font-semibold text-white border border-gray-500 hover:from-gray-700 hover:to-gray-900 transition-all"
            whileHover={{ scale: 1.0 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start a Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
})

export default Projects
