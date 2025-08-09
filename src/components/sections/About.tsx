'use client'
import React from "react"
import { motion } from 'framer-motion'
import { Code, Database, Cloud, Smartphone, Globe, Zap, Download, MapPin } from 'lucide-react'

const skills = [
  { name: 'Frontend', icon: Globe, items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'], level: 90 },
  { name: 'Backend', icon: Code, items: ['Node.js', 'Express', 'Python', 'REST APIs'], level: 85 },
  { name: 'Database', icon: Database, items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma'], level: 80 },
  { name: 'DevOps', icon: Cloud, items: ['AWS', 'Docker', 'CI/CD', 'Linux'], level: 75 },
  { name: 'Mobile', icon: Smartphone, items: ['React Native', 'Flutter', 'iOS', 'Android'], level: 70 },
  { name: 'Performance', icon: Zap, items: ['Optimization', 'Caching', 'SEO', 'Analytics'], level: 85 },
]

const experiences = [
  {
    period: '2024 - Present',
    role: 'Full Stack Developer',
    company: 'Tech Startup',
    description: 'Building scalable web applications with modern tech stack. Leading frontend architecture decisions and implementing robust backend solutions.'
  },
  {
    period: '2023 - 2024',
    role: 'Frontend Developer',
    company: 'Digital Agency',
    description: 'Created responsive, user-friendly interfaces for clients across various industries. Optimized performance and implemented modern design systems.'
  },
  {
    period: '2022 - 2023',
    role: 'Junior Developer',
    company: 'Software Company',
    description: 'Learned full-stack development and contributed to team projects. Gained experience in agile development and collaborative coding practices.'
  }
]

const About = React.memo(() => {
  return (
    <section id="about" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >

          <h2 className="text-5xl md:text-7xl font-black mb-6 text-gradient">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with a love for creating 
            digital experiences that make a difference. With expertise across 
            the entire development stack, I bring ideas to life through code.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-full"
          >

            <h3 className="text-3xl font-bold mb-8 text-white">Technical Skills</h3>
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <skill.icon className="text-gray-400 group-hover:text-white transition-colors" size={20} />
                      <span className="text-lg font-semibold text-white">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden mb-3">
                    <motion.div
                      className="h-full bg-gradient-to-r from-gray-500 to-white rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                  
                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full border border-gray-700 hover:border-gray-500 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-full flex flex-col"
          >

            <h3 className="text-3xl font-bold mb-8 text-white">Experience</h3>
            <div className="space-y-10 flex-grow">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8 border-l border-gray-700 hover:border-gray-500 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-600 border-2 border-gray-400 rounded-full" />
                  
                  <div className="space-y-3">
                    <p className="text-sm text-gray-400 font-medium">{exp.period}</p>
                    <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                    <p className="text-lg text-gray-300">{exp.company}</p>
                    <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action Buttons - Bottom of Experience Section */}
            <motion.div
              className="mt-12 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >

              <motion.button 
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 rounded-lg transition-colors group flex-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={16} className="group-hover:scale-110 transition-transform" />
                <span className="font-medium">Download Resume</span>
              </motion.button>
              
              <motion.button 
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-transparent hover:bg-gray-800 border border-gray-600 hover:border-gray-500 rounded-lg transition-colors group flex-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MapPin size={16} className="group-hover:scale-110 transition-transform" />
                <span className="font-medium">Based in India</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
})

export default About
