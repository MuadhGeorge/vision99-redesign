'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen } from 'lucide-react'

const scholars = [
  {
    name: 'Imam Abdullah Jaber',
    role: 'Resident Imam, RCM',
    description: 'Spiritual anchor of RCM, guiding the community in worship, education, and the vision for Beyond Walls.',
  },
  {
    name: 'Sheikh Yasir Fahmy',
    role: 'Advisory Scholar',
    description: 'Renowned Islamic scholar providing guidance on the theological foundations of sustainable stewardship.',
  },
  {
    name: 'Ustadha Fatima Lette',
    role: 'Community Educator',
    description: 'Leading women\'s programming and educational initiatives that will define the new campus experience.',
  },
]

export default function ReligiousGuidance() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-brand-green-50 to-rcm-teal-50/50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label">Spiritual Foundation</span>
          <h2 className="section-heading">Religious Guidance</h2>
          <p className="section-subheading mx-auto">
            Our scholars ensure every decision aligns with Islamic principles and serves the community&apos;s spiritual needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {scholars.map((scholar, index) => (
            <motion.div
              key={scholar.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-brand-green-100 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-green-600 to-rcm-teal-600 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{scholar.name}</h3>
              <p className="text-sm font-medium text-brand-green-600 mb-3">{scholar.role}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{scholar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

