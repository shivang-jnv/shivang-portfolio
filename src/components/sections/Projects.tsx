'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Code2, ArrowRight, Calendar, Tag } from 'lucide-react'
import { useCallback, useEffect, useMemo, useState, memo } from 'react'

// Add performance hook
const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  
  useEffect(() => {
    // Safe check for browser environment
    if (typeof window === 'undefined') return
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])
  
  return prefersReducedMotion
}


const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.',
    longDescription: 'Built with Next.js, Node.js, PostgreSQL, and Stripe. Features include user authentication, shopping cart, order tracking, and comprehensive admin panel with real-time analytics.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS', 'Redis'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/yourusername/ecommerce',
    year: '2024',
    featured: true,
    category: 'Full Stack',
    metrics: { users: '1.2K+', performance: '95%', uptime: '99.9%' }
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, team collaboration, and deadline tracking.',
    longDescription: 'React-based SPA with Firebase backend. Includes drag-and-drop functionality, real-time notifications, team workspace management, and advanced analytics.',
    tech: ['React', 'Firebase', 'Material-UI', 'Framer Motion', 'WebSocket'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/yourusername/taskmanager',
    year: '2024',
    featured: true,
    category: 'Frontend',
    metrics: { teams: '50+', tasks: '2.5K+', efficiency: '87%' }
  },
  {
    id: 3,
    title: 'Weather Analytics Dashboard',
    description: 'Data visualization dashboard showing weather patterns, forecasts, and historical climate data.',
    longDescription: 'Python Flask backend with React frontend. Integrates multiple weather APIs and provides interactive charts and geographical visualizations with machine learning predictions.',
    tech: ['Python', 'Flask', 'React', 'Chart.js', 'OpenWeather API', 'D3.js'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/yourusername/weather',
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
    repoUrl: 'https://github.com/yourusername/social-api',
    year: '2023',
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
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/yourusername/ai-chatbot',
    year: '2024',
    featured: true,
    category: 'AI/ML',
    metrics: { accuracy: '96%', languages: '5+', conversations: '5K+' }
  },
  {
    id: 6,
    title: 'Real-Time Video Chat App',
    description: 'Secure video conferencing platform with screen sharing, chat, and room management features.',
    longDescription: 'Built with React, Node.js, and WebRTC technology. Features include end-to-end encryption, multi-participant rooms, screen sharing, file transfer, and recording capabilities with cloud storage integration.',
    tech: ['React', 'Node.js', 'WebRTC', 'Socket.io', 'AWS S3', 'WebSocket'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/yourusername/video-chat',
    year: '2023',
    featured: false,
    category: 'Full Stack',
    metrics: { rooms: '800+', concurrent: '50+', quality: 'HD' }
  }
]

const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'Data Visualization', 'AI/ML']

const Projects = memo(function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  // Add this performance optimization
  const prefersReducedMotion = useReducedMotion()
  const [shouldReduceAnimations, setShouldReduceAnimations] = useState(false)

  useEffect(() => {
    const checkShouldReduce = () => {
      setShouldReduceAnimations(prefersReducedMotion || window.innerWidth < 768)
    }
    
    checkShouldReduce()
    window.addEventListener('resize', checkShouldReduce, { passive: true })
    return () => window.removeEventListener('resize', checkShouldReduce)
  }, [prefersReducedMotion])

  // Memoize expensive filtering operations
const filteredProjects = useMemo(() => {
  return activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)
}, [activeCategory])

const featuredProjects = useMemo(() => {
  return projects.filter(project => project.featured)
}, [])

// Memoize category change handler
const handleCategoryChange = useCallback((category: string) => {
  setActiveCategory(category)
}, [])


  return (
    <section id="projects" className="min-h-screen py-20 px-6 relative">
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

        {/* Featured Projects - Large Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-24"
        >

          <h3 className="text-3xl font-bold text-white mb-12 text-center">Spotlight Projects</h3>
          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3, margin: "-50px" }}
                transition={{ duration: 0.6, delay: Math.min(index * 0.15, 0.3), ease: [0.25, 0.46, 0.45, 0.94] }}
              >

                {/* Project Visual */}
                <motion.div
                  className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  // style={{ willChange: 'transform' }}  
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                >

                  <div className="relative h-80 bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
                    {/* Background Pattern - Optimized */}
                    <div className="absolute inset-0 opacity-10">
                      <div 
                        className={`grid grid-cols-8 grid-rows-8 h-full transition-opacity duration-300 ${
                          hoveredProject === project.id ? 'opacity-30' : 'opacity-10'
                        }`}
                        style={{
                          backgroundImage: 'linear-gradient(to right, #4b5563 1px, transparent 1px), linear-gradient(to bottom, #4b5563 1px, transparent 1px)',
                          backgroundSize: '12.5% 12.5%'
                        }}
                      />
                    </div>


                    {/* Project Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{
                          rotate: hoveredProject === project.id ? 360 : 0,
                          scale: hoveredProject === project.id ? 1.1 : 1
                        }}
                        transition={{ duration: 0.8 }}
                      >
                        <Code2 className="text-gray-600" size={80} />
                      </motion.div>
                    </div>

                    {/* Hover Overlay */}
                    <AnimatePresence>
                      {hoveredProject === project.id && (
                        <motion.div
                          className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center space-x-6"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {project.liveUrl && (
                            <motion.a
                              href={project.liveUrl}
                              className="flex items-center space-x-2 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ delay: 0.1 }}
                              whileHover={{ scale: 1.05 }}
                            >
                              <ExternalLink size={18} />
                              <span className="font-medium">Live Demo</span>
                            </motion.a>
                          )}
                          <motion.a
                            href={project.repoUrl}
                            className="flex items-center space-x-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Github size={18} />
                            <span className="font-medium">Source Code</span>
                          </motion.a>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Year Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700">
                      {project.year}
                    </div>
                  </div>
                </motion.div>

                {/* Project Details */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="flex items-center space-x-3">
                    <Tag className="text-gray-400" size={16} />
                    <span className="text-sm text-gray-400 uppercase tracking-wide">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-white group-hover:text-gradient transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-lg">
                    {project.longDescription}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full border border-gray-700 hover:border-gray-500 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-white">{value}</div>
                        <div className="text-xs text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Action */}
                  <button
                    onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                    className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight 
                      className="group-hover:translate-x-1 transition-transform" 
                      size={16} 
                    />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex justify-center mb-16"
        >

          <div className="flex flex-wrap gap-3 p-3 bg-gray-900 rounded-xl border border-gray-800">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-gray-700 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* All Projects - Compact Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-gray-900 rounded-xl border border-gray-800 hover:border-gray-600 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, transform: 'scale(0.95)' }}
              animate={{ opacity: 1, transform: 'scale(1)' }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3), ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -8, transition: { duration: 0.2, ease: "easeOut" } }}
              style={{ willChange: 'transform' }}
            >

              {/* Project Header */}
              <div className="relative h-48 bg-gray-800 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800" />
                
                {/* Animated Grid Pattern - Optimized */}
                <div 
                  className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-30"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #4b5563 1px, transparent 1px), linear-gradient(to bottom, #4b5563 1px, transparent 1px)',
                    backgroundSize: '16.66% 16.66%'
                  }}
                />


                <div className="absolute inset-0 flex items-center justify-center">
                  <Code2 className="text-gray-600" size={48} />
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-2 py-1 text-xs bg-black bg-opacity-60 text-white rounded">
                  {project.category}
                </div>

                {/* Year Badge */}
                <div className="absolute top-3 right-3 px-2 py-1 text-xs bg-black bg-opacity-60 text-white rounded">
                  {project.year}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack Preview */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-xs text-gray-500">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-1 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink size={14} />
                      <span>Live</span>
                    </a>
                  )}
                  <a
                    href={project.repoUrl}
                    className="flex items-center space-x-1 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={14} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

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
            These projects represent just a glimpse of what's possible. 
            Let's collaborate and create something extraordinary together.
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full font-semibold text-white border border-gray-500 hover:from-gray-700 hover:to-gray-900 transition-all"
            whileHover={{ scale: 1.05 }}
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
