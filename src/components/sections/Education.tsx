'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Award, BookOpen } from 'lucide-react'

const education = [
  {
    period: '2025',
    degree: 'Bachelor of Technology',
    field: 'Computer Science and Engineering',
    institution: 'Dr. A. P. J. Abdul Kalam Technical University',
    location: 'Lucknow, India',
    grade: 'CGPA: 7.6/10',
    description: 'Comprehensive study of computer science fundamentals, software engineering principles, data structures, algorithms, and modern development practices. Specialized in web technologies and software architecture.'
  },
  {
    period: '2019',
    degree: 'Class 12 (Higher Secondary)',
    field: 'Science Stream',
    institution: 'Jawahar Navodaya Vidyalaya',
    location: 'Shahjahanpur, India',
    grade: 'Percentage: 89.2%',
    description: 'Strong foundation in mathematics, physics and chemistry. Focused on analytical thinking and problem-solving skills that prepared for engineering studies.'
  }
]

const achievements = [
  'Selected in top 80 among 5000+ students in JNVST Entrance Exam',
  'Organized Web/App Mania tech event with 100+ participants during college fest',
  'Led a team of 5+ members in group discussion at a college level event and secured #1',
  'Technical Society Member'
]

const Education = React.memo(() => {
  return (
    <section id="education" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-gradient">
            Education
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            My academic journey in computer science and engineering, building the 
            foundation for my passion in technology and software development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-full"
          >
            <h3 className="text-3xl font-bold mb-8 text-white">Academic Background</h3>
            <div className="space-y-10">
              {education.map((edu, index) => (
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
                    <div className="flex items-center space-x-2">
                      <Calendar className="text-gray-400" size={14} />
                      <p className="text-sm text-gray-400 font-medium">{edu.period}</p>
                    </div>
                    
                    <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                    <p className="text-lg text-gray-300">{edu.field}</p>
                    
                    <div className="space-y-2">
                      <p className="text-gray-300">{edu.institution}</p>
                      <p className="text-sm text-gray-400">{edu.location}</p>
                      <p className="text-sm text-gray-300 font-medium">{edu.grade}</p>
                    </div>
                    
                    <p className="text-gray-400 leading-relaxed">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-full flex flex-col"
          >
            <h3 className="text-3xl font-bold mb-8 text-white">Achievements</h3>
            <div className="space-y-6 flex-grow">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center space-x-3 p-4 bg-gray-900 rounded-lg border border-gray-800 hover:border-gray-600 transition-colors">
                    <Award className="text-gray-400 group-hover:text-white transition-colors" size={20} />
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {achievement}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Relevant Coursework */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h4 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                <BookOpen className="text-gray-400" size={20} />
                <span>Key Coursework</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Data Structures & Algorithms', 'Database Systems', 'Software Engineering', 'Computer Networks', 'Operating Systems', 'Web Technologies', 'Machine Learning', 'System Design'].map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full border border-gray-700 hover:border-gray-500 transition-colors"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
})

Education.displayName = 'Education'
export default Education
