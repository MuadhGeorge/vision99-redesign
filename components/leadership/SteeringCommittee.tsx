'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const committee = [
  {
    name: 'Sam Evans',
    role: 'Campaign Chair',
    description: 'Former Fortune 500 executive with 30+ years in strategic leadership and capital campaigns.',
  },
  {
    name: 'Saad Dar',
    role: 'Project Director',
    description: 'Civil engineer and community leader with expertise in sustainable infrastructure development.',
  },
  {
    name: 'Dr. Amina Hassan',
    role: 'Community Liaison',
    description: 'Pediatrician and longtime RCM member, bridging professional and community perspectives.',
  },
  {
    name: 'Khalid Rahman',
    role: 'Finance Chair',
    description: 'CPA with expertise in nonprofit financial management and capital project oversight.',
  },
  {
    name: 'Sarah Ahmed',
    role: 'Development Director',
    description: 'Nonprofit development professional with track record of successful major gift campaigns.',
  },
  {
    name: 'Omar Malik',
    role: 'Construction Liaison',
    description: 'Commercial construction manager ensuring project quality and timeline adherence.',
  },
]

export default function SteeringCommittee() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label">Project Leadership</span>
          <h2 className="section-heading">Steering Committee</h2>
          <p className="section-subheading mx-auto">
            The dedicated team guiding Beyond Walls from vision to reality.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {committee.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="bg-soft-gray-50 rounded-2xl p-6 border border-gray-100 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-green-500 to-rcm-teal-500 flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-sm font-medium text-brand-green-600 mb-3">{member.role}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

