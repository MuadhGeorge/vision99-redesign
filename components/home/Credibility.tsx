'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Leaf, Zap, Droplets, Scale } from 'lucide-react'

const standards = [
  {
    icon: Leaf,
    title: 'Living Building Challenge',
    description: 'The world\'s most rigorous building performance standard',
  },
  {
    icon: Zap,
    title: 'Net Positive Energy',
    description: 'Generating more energy than we consume annually',
  },
  {
    icon: Droplets,
    title: 'Net Zero Water',
    description: 'Capturing and treating all water on-site',
  },
  {
    icon: Scale,
    title: 'JUST Social Equity',
    description: 'Committed to transparent, ethical operations',
  },
]

const partners = [
  'Islamic Relief USA',
  'CAIR Georgia',
  'Kendeda Building',
  'Living Future Institute',
  'ISNA',
  'ICNA',
  'Muslim Advocates',
  'Emory University',
]

export default function Credibility() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-white overflow-hidden">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label">Credibility</span>
          <h2 className="section-heading">World-Class Standards. Global Backing.</h2>
        </motion.div>

        {/* Standards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16"
        >
          {standards.map((standard, index) => (
            <motion.div
              key={standard.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="text-center p-4 sm:p-6 rounded-2xl bg-soft-gray-50 border border-gray-100
                       hover:bg-white hover:shadow-lg hover:border-brand-green-200 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-green-100 mb-4">
                <standard.icon className="w-7 h-7 text-brand-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">{standard.title}</h3>
              <p className="text-xs sm:text-sm text-gray-500">{standard.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Partner Ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">
            Proudly Supported By
          </p>
          
          <div className="relative overflow-hidden">
            {/* Gradient masks */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
            
            {/* Ticker */}
            <div className="flex animate-ticker">
              {/* First set */}
              {partners.map((partner) => (
                <div
                  key={partner}
                  className="flex-shrink-0 mx-6 sm:mx-8"
                >
                  <span className="text-gray-400 font-medium text-sm sm:text-base whitespace-nowrap">
                    {partner}
                  </span>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {partners.map((partner) => (
                <div
                  key={`${partner}-dup`}
                  className="flex-shrink-0 mx-6 sm:mx-8"
                >
                  <span className="text-gray-400 font-medium text-sm sm:text-base whitespace-nowrap">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

