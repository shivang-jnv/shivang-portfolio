'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Award, Calendar, ExternalLink, CheckCircle, Star } from 'lucide-react'

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
  return (
    <section id="certificates" className="min-h-screen py-20 px-6 relative">
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

        {/* Featured Certificates - Compact Style */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3, margin: "-50px" }}
  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
  className="mb-20"
>
  <h3 className="text-3xl font-bold text-white mb-12 text-center">Featured Certifications</h3>
  <div className="grid md:grid-cols-2 gap-6">
    {certificates.filter(cert => cert.featured).map((cert, index) => (
      <motion.div
        key={cert.credentialId}
        className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg border border-gray-700 hover:border-gray-500 transition-all duration-500 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        whileHover={{ 
          // y: -8, 
          // scale: 1.005,
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
          transition: { duration: 0.2, ease: "easeOut" } 
        }}
      >
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: 'linear-gradient(45deg, #4b5563 1px, transparent 1px), linear-gradient(-45deg, #4b5563 1px, transparent 1px)',
              backgroundSize: '8px 8px'
            }}
          />
        </div>

        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
          <div className="absolute top-2 right-2 w-20 h-4 bg-gradient-to-r from-gray-600 to-gray-500 transform rotate-45 shadow-sm"></div>
        </div>

        <div className="relative p-5">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gray-800 rounded-lg">
                <Award className="text-gray-300" size={20} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white group-hover:text-gradient transition-colors">
                  {cert.title}
                </h4>
                <p className="text-gray-400 text-sm">{cert.issuer}</p>
              </div>
            </div>
            {cert.verified && (
              <div className="flex items-center space-x-1 text-green-400">
                <CheckCircle size={14} />
                <span className="text-xs">Verified</span>
              </div>
            )}
          </div>

          <p className="text-gray-400 leading-relaxed mb-4 text-sm">
            {cert.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {cert.skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded border border-gray-700 hover:border-gray-500 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Calendar size={12} />
              <span className="text-xs">{cert.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs">ID: {cert.credentialId}</span>
              <ExternalLink size={10} className="cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
      </motion.div>
    ))}
  </div>
</motion.div>


        {/* All Certificates - Enhanced Appealing Cards */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3, margin: "-50px" }}
  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
>
  <h3 className="text-3xl font-bold text-white mb-12 text-center">All Certifications</h3>
  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
    {certificates.map((cert, index) => (
      <motion.div
        key={cert.credentialId}
        className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 hover:border-gray-500 transition-all duration-500 overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3), ease: [0.25, 0.46, 0.45, 0.94] }}
        whileHover={{ 
          // y: -8, 
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
          transition: { duration: 0.2, ease: "easeOut" } 
        }}
        style={{ willChange: 'transform' }}
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: 'linear-gradient(45deg, #4b5563 1px, transparent 1px), linear-gradient(-45deg, #4b5563 1px, transparent 1px)',
              backgroundSize: '8px 8px'
            }}
          />
        </div>

        {/* Certificate ribbon effect */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
          <div className="absolute top-2 right-2 w-20 h-4 bg-gradient-to-r from-gray-600 to-gray-500 transform rotate-45 shadow-sm"></div>
        </div>

        <div className="relative p-4"> {/* Reduced from p-6 */}
          {/* Header with icon and verification */}
          <div className="flex items-start justify-between mb-3"> 
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors">
                <Award className="text-gray-300 group-hover:text-white transition-colors" size={18} />
              </div>
              {cert.featured && (
                <div className="flex items-center space-x-1 text-yellow-400">
                  <Star size={12} fill="currentColor" /> 
                  <span className="text-xs font-medium">Featured</span>
                </div>
              )}
            </div>
            {cert.verified && (
              <div className="flex items-center space-x-1 px-2 py-1 bg-green-900 bg-opacity-30 rounded-full border border-green-700">
                <CheckCircle className="text-green-400" size={10} />
                <span className="text-xs text-green-300 font-medium">Verified</span>
              </div>
            )}
          </div>

          {/* Certificate info */}
          <h4 className="text-base font-bold text-white mb-2 group-hover:text-gradient transition-colors leading-tight">
            {cert.title}
          </h4>
          
          <p className="text-gray-300 font-medium mb-3 text-sm">{cert.issuer}</p> 
          
          {/* Skills tags */}
          <div className="flex flex-wrap gap-1 mb-3"> 
            {cert.skills.slice(0, 3).map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded-full border border-gray-600 group-hover:border-gray-500 transition-colors"
              >
                {skill}
              </span>
            ))}
            {cert.skills.length > 3 && (
              <span className="px-2 py-1 text-xs text-gray-400 border border-gray-600 rounded-full">
                +{cert.skills.length - 3} more
              </span>
            )}
          </div>

          {/* Footer with date and action */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-700 group-hover:border-gray-600 transition-colors"> 
            <div className="flex items-center space-x-2 text-gray-400">
              <Calendar size={12} /> 
              <span className="text-xs font-medium">{cert.date}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 group-hover:text-white transition-colors cursor-pointer">
              <span className="text-xs font-medium">View Credential</span>
              <ExternalLink size={12} />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
      </motion.div>
    ))}
  </div>
</motion.div>


      </div>
    </section>
  )
})

Certificates.displayName = 'Certificates'
export default Certificates
