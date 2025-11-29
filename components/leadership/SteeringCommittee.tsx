'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const committee = [
  {
    name: 'Sam Evans',
    role: 'Co-Lead, Fundraising',
    description: 'Leading fundraising efforts to secure transformational gifts for the Beyond Walls capital campaign.',
  },
  {
    name: 'Saad Dar',
    role: 'Co-Lead, Marketing',
    description: 'Driving the strategic marketing and communications for the Vision 99 initiative.',
  },
  {
    name: 'Kamran Siddiq',
    role: 'Project Development Lead',
    description: 'Overseeing the design, development, and execution of the Beyond Walls campus project.',
  },
  {
    name: 'Renee Alnoubani',
    role: 'Green Team Lead',
    description: 'Ensuring adherence to Living Building Challenge standards and sustainability goals.',
  },
  {
    name: 'Altaf S.',
    role: 'Fundraising Advisor',
    description: 'Providing strategic counsel on major gift cultivation and donor engagement.',
  },
  {
    name: 'Munawar',
    role: 'Fundraising Advisor',
    description: 'Supporting fundraising strategy and community donor relations.',
  },
  {
    name: 'Maher Budeir',
    role: 'RCM Board Liaison',
    description: 'Connecting the Vision 99 team with RCM Board governance and oversight.',
  },
  {
    name: 'Tanvir Sarmast',
    role: 'RCM Board Liaison',
    description: 'Ensuring alignment between project execution and board-level strategy.',
  },
  {
    name: 'Hina Mahmood',
    role: 'Accounting & Finance',
    description: 'Managing financial operations, reporting, and fiscal accountability for the campaign.',
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

