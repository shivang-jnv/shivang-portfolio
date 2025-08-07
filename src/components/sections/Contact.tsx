'use client'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Calendar, Clock, User, Send, Copy, Check } from 'lucide-react'
import { useState } from 'react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your.email@example.com',
    description: 'Best way to reach me for projects and collaborations',
    action: () => window.open('mailto:your.email@example.com')
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 12345 67890',
    description: 'Available for calls during business hours (10 AM - 6 PM IST)',
    action: () => window.open('tel:+911234567890')
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'India',
    description: 'Open to remote work and global collaborations',
    action: null
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 24 hours',
    description: 'I typically respond to emails within one business day',
    action: null
  }
]

const availability = [
  {
    period: 'Mon - Fri',
    status: 'Available',
    hours: '10:00 AM - 6:00 PM IST',
    description: 'Best time for meetings and calls'
  },
  {
    period: 'Weekends',
    status: 'Limited',
    hours: 'Email only',
    description: 'I check emails but no scheduled calls'
  },
  {
    period: 'Currently',
    status: 'Open to Work',
    hours: 'Accepting new projects',
    description: 'Available for freelance and full-time opportunities'
  }
]

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('your.email@example.com')
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } catch (err) {
      console.error('Failed to copy email: ', err)
    }
  }

  return (
    <section id="contact" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-gradient">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on your next project? I'm always excited to work with 
            passionate people and help bring innovative ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-full"
          >
            <h3 className="text-3xl font-bold mb-8 text-white">Contact Information</h3>
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <info.icon className="text-gray-400 group-hover:text-white transition-colors" size={20} />
                      <span className="text-lg font-semibold text-white">{info.label}</span>
                    </div>
                    <span className="text-sm text-gray-400">{info.value}</span>
                  </div>
                  
                  {/* Description */}
                  <div className="mb-3">
                    <p className="text-gray-400 leading-relaxed">{info.description}</p>
                  </div>
                  
                  {/* Action Button */}
                  {info.action && (
                    <div className="flex space-x-2">
                      <button
                        onClick={info.action}
                        className="px-4 py-2 text-sm bg-gray-800 text-gray-300 rounded-lg border border-gray-700 hover:border-gray-500 hover:bg-gray-700 transition-colors"
                      >
                        Contact via {info.label}
                      </button>
                      {info.label === 'Email' && (
                        <button
                          onClick={handleCopyEmail}
                          className="px-4 py-2 text-sm bg-gray-700 text-gray-300 rounded-lg border border-gray-600 hover:border-gray-500 hover:bg-gray-600 transition-colors flex items-center space-x-2"
                        >
                          {copiedEmail ? (
                            <>
                              <Check size={14} className="text-green-400" />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy size={14} />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Availability Schedule */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-full flex flex-col"
          >
            <h3 className="text-3xl font-bold mb-8 text-white">Availability</h3>
            <div className="space-y-10 flex-grow">
              {availability.map((schedule, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8 border-l border-gray-700 hover:border-gray-500 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute -left-2 top-0 w-4 h-4 border-2 border-gray-400 rounded-full ${
                    schedule.status === 'Available' ? 'bg-green-500' : 
                    schedule.status === 'Open to Work' ? 'bg-blue-500' : 'bg-gray-600'
                  }`} />
                  
                  <div className="space-y-3">
                    <p className="text-sm text-gray-400 font-medium">{schedule.period}</p>
                    <h4 className="text-xl font-bold text-white">{schedule.status}</h4>
                    <p className="text-lg text-gray-300">{schedule.hours}</p>
                    <p className="text-gray-400 leading-relaxed">{schedule.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action Buttons - Bottom of Availability Section */}
            <motion.div
              className="mt-12 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a 
                href="mailto:your.email@example.com"
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 rounded-lg transition-colors group flex-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={16} className="group-hover:scale-110 transition-transform" />
                <span className="font-medium">Send Email</span>
              </motion.a>
              
              <motion.a 
                href="tel:+911234567890"
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-transparent hover:bg-gray-800 border border-gray-600 hover:border-gray-500 rounded-lg transition-colors group flex-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone size={16} className="group-hover:scale-110 transition-transform" />
                <span className="font-medium">Call Me</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
