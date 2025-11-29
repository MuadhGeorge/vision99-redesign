'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const trustees = [
  { name: 'Dr. Ahmed Khan', role: 'Board Chair' },
  { name: 'Fatima Ali', role: 'Vice Chair' },
  { name: 'Mohammed Rashid', role: 'Treasurer' },
  { name: 'Aisha Patel', role: 'Secretary' },
  { name: 'Ibrahim Hassan', role: 'Member' },
  { name: 'Nadia Mahmoud', role: 'Member' },
]

export default function Governance() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Board of Trustees */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Governance</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Board of Trustees</h2>
            
            <div className="space-y-3">
              {trustees.map((trustee) => (
                <div
                  key={trustee.name}
                  className="flex items-center justify-between p-4 bg-soft-gray-50 rounded-xl"
                >
                  <span className="font-medium text-gray-900">{trustee.name}</span>
                  <span className="text-sm text-brand-green-600">{trustee.role}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Founding Legacy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="section-label">Heritage</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Founding Legacy</h2>
            
            <div className="bg-gradient-to-br from-brand-gold-50 to-white rounded-2xl p-6 border border-brand-gold-200">
              <p className="text-gray-700 leading-relaxed mb-4">
                Roswell Community Masjid was founded in 1995 by a group of visionary Muslim women 
                who saw the need for a spiritual home in North Metro Atlanta. Against the backdrop 
                of the civil rights movement&apos;s legacy, these founders built not just a mosque, 
                but a beacon of interfaith harmony.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Three decades later, their vision continues to guide us. The Beyond Walls project 
                honors their courage by expanding that dream—creating a campus that serves not 
                just our community, but all of humanity.
              </p>
              <p className="text-sm text-brand-gold-700 font-medium italic">
                &ldquo;From humble beginnings to historic ambitions—rooted in faith, growing in service.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

