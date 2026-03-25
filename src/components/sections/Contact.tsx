'use client'
import { motion } from 'framer-motion'
import { Mail, MapPin, Clock, Send, Copy, Check } from 'lucide-react'
import React, { useState, useCallback } from 'react'

const Contact = React.memo(() => {
  Contact.displayName = 'Contact'
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleCopyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText('skjnvspn@gmail.com')
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }, [])

  const inputClass =
    'w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:border-white/25 focus:bg-white/[0.07] outline-none transition-all duration-200'

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-gray-500 font-semibold mb-3">
            Get in touch
          </p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-gradient mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-base text-gray-400 max-w-xl mx-auto">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Email card */}
            <div
              className="p-[1px] rounded-2xl"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 100%)' }}
            >
              <div className="rounded-2xl p-6" style={{ background: '#0c0c0c' }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2.5 rounded-xl bg-white/[0.06] border border-white/[0.08]">
                    <Mail size={18} className="text-gray-300" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-1">Email</p>
                    <p className="text-white font-semibold text-sm">skjnvspn@gmail.com</p>
                    <p className="text-xs text-gray-600 mt-1">Best way to reach me for projects and collaborations</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a
                    href="mailto:skjnvspn@gmail.com"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Send size={12} />
                    Send Email
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="px-4 py-2.5 text-xs font-medium rounded-lg bg-white/[0.05] border border-white/[0.08] text-gray-400 hover:border-white/20 hover:text-white transition-all flex items-center gap-1.5"
                  >
                    {copiedEmail ? <><Check size={12} className="text-green-400" /><span>Copied</span></> : <><Copy size={12} /><span>Copy</span></>}
                  </button>
                </div>
              </div>
            </div>

            {/* Quick info */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: MapPin, label: 'Location', value: 'India' },
                { icon: Clock, label: 'Response', value: 'Within 24h' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 flex items-center gap-3">
                  <Icon size={15} className="text-gray-500 shrink-0" />
                  <div>
                    <p className="text-[11px] text-gray-600 font-medium">{label}</p>
                    <p className="text-sm text-white font-semibold">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div
              className="p-[1px] rounded-2xl"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 100%)' }}
            >
              <form
                className="rounded-2xl p-7 space-y-5"
                style={{ background: '#0c0c0c' }}
                onSubmit={(e) => e.preventDefault()}
              >
                <div>
                  <label className="block text-xs text-gray-500 font-medium mb-2 uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 font-medium mb-2 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 font-medium mb-2 uppercase tracking-wider">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-black font-bold text-sm hover:bg-gray-200 transition-colors"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={15} />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
})

export default Contact
