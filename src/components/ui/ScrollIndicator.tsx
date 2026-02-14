'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export const ScrollIndicator = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.div 
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      onClick={scrollToAbout}
      whileHover={{ scale: 1.1 }}
    >
      <div className="flex flex-col items-center space-y-2">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center relative">
          <motion.div 
            className="w-1 h-3 bg-gradient-to-b from-gray-400 to-white rounded-full mt-2"
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
        <ChevronDown className="text-gray-400" size={16} />
      </div>
    </motion.div>
  )
}
