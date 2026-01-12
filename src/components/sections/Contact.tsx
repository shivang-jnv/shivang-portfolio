'use client'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Clock, Send, Copy, Check } from 'lucide-react'
import React, { useState, useCallback } from 'react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'skjnvspn@gmail.com',
    description: 'Best way to reach me for projects and collaborations',
    action: () => window.open('mailto:skjnvspn@gmail.com')
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 8882514141',
    description: 'Available for calls during business hours (10 AM - 6 PM IST)',
    action: () => window.open('tel:+918882514141')
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

const Contact = React.memo(() => {
  Contact.displayName = 'Contact'
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText('skjnvspn@gmail.com')
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } catch (err) {
      console.error('Failed to copy email: ', err)
    }
  }, [])

  return (
    <section id="contact" className="py-16 px-6 relative">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-3 text-gradient">
            Let&apos;s Connect
          </h2>
          <p className="text-base text-gray-400 max-w-xl mx-auto mb-6">
            Have a project in mind? I&apos;m always open to discussing new opportunities.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-4 mb-8">
          {contactInfo.slice(0, 2).map((info, index) => (
            <motion.div
              key={info.label}
              className="group relative bg-black border-2 border-gray-800 rounded-xl p-5 hover:border-gray-600 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* Top accent */}
              <div className="h-0.5 absolute top-0 left-0 right-0 bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
              
              <div className="flex items-start space-x-3 mb-3">
                <div className="p-2 bg-gray-900 border border-gray-800 rounded-lg group-hover:border-gray-700 transition-colors">
                  <info.icon className="text-gray-400 group-hover:text-white transition-colors" size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-gray-400 mb-1">{info.label}</h3>
                  <p className="text-base font-bold text-white mb-1 break-all">{info.value}</p>
                  <p className="text-xs text-gray-500">{info.description}</p>
                </div>
              </div>

              {info.action && (
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={info.action}
                    className="flex-1 px-3 py-2 text-xs font-medium bg-gray-900 text-gray-300 rounded-lg border border-gray-800 hover:border-gray-600 hover:bg-gray-800 transition-colors"
                  >
                    Contact
                  </button>
                  {info.label === 'Email' && (
                    <button
                      onClick={handleCopyEmail}
                      className="px-3 py-2 text-xs font-medium bg-gray-900 text-gray-300 rounded-lg border border-gray-800 hover:border-gray-600 hover:bg-gray-800 transition-colors flex items-center space-x-1"
                    >
                      {copiedEmail ? (
                        <>
                          <Check size={12} className="text-green-400" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy size={12} />
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

        {/* Quick Info Cards */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {contactInfo.slice(2).map((info, index) => (
            <motion.div
              key={info.label}
              className="bg-black border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index + 2) * 0.1 }}
            >
              <div className="flex items-center space-x-3">
                <info.icon className="text-gray-500" size={16} />
                <div>
                  <p className="text-xs text-gray-500 font-medium">{info.label}</p>
                  <p className="text-sm text-white font-semibold">{info.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-bold text-white mb-2">Ready to Start?</h3>
          <p className="text-sm text-gray-400 mb-5">Let&apos;s discuss your project and bring your ideas to life.</p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.a 
              href="mailto:skjnvspn@gmail.com"
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send size={16} />
              <span>Send Email</span>
            </motion.a>
            
            <motion.a 
              href="tel:+918882514141"
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-transparent text-white rounded-lg font-semibold border-2 border-gray-700 hover:border-gray-600 hover:bg-gray-900 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone size={16} />
              <span>Call Me</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

export default Contact
