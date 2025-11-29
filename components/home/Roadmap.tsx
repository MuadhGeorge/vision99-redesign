'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle, Circle, Users } from 'lucide-react'

const milestones = [
  {
    title: 'Vision & Design',
    date: 'Completed',
    status: 'completed',
    description: 'Master plan approved, LBC pathway defined.',
  },
  {
    title: 'Capital Campaign',
    date: 'Now',
    status: 'current',
    description: 'Building the financial foundation.',
  },
  {
    title: 'Groundbreaking',
    date: 'Dec 6, 2025',
    status: 'upcoming',
    description: 'Breaking ground on our shared vision.',
  },
  {
    title: 'Construction',
    date: 'Jan 2026',
    status: 'upcoming',
    description: 'Transforming vision into reality.',
  },
  {
    title: 'Grand Opening',
    date: 'Aug 2027',
    status: 'upcoming',
    description: 'Welcoming the community home.',
  },
]

export default function Roadmap() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-soft-gray-50">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="section-label">Roadmap</span>
          <h2 className="section-heading">The Path to Groundbreaking</h2>
        </motion.div>

        {/* Timeline - Desktop (horizontal) */}
        <div className="hidden lg:block relative">
          {/* Line */}
          <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-200">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '20%' } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full bg-brand-green-500"
            />
          </div>
          
          {/* Milestones */}
          <div className="grid grid-cols-5 gap-4">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="relative"
              >
                {/* Dot */}
                <div className="flex justify-center mb-4">
                  {milestone.status === 'completed' ? (
                    <div className="w-12 h-12 rounded-full bg-brand-green-500 flex items-center justify-center shadow-lg z-10">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                  ) : milestone.status === 'current' ? (
                    <div className="w-12 h-12 rounded-full bg-brand-gold-500 flex items-center justify-center shadow-lg ring-4 ring-brand-gold-200 z-10 animate-pulse-slow">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center z-10">
                      <Circle className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                </div>
                
                {/* Card */}
                <div className={`text-center p-4 rounded-xl ${
                  milestone.status === 'current' 
                    ? 'bg-brand-gold-50 border-2 border-brand-gold-300' 
                    : 'bg-white border border-gray-100'
                }`}>
                  <span className={`text-xs font-semibold uppercase tracking-wider ${
                    milestone.status === 'current' ? 'text-brand-gold-600' : 'text-gray-400'
                  }`}>
                    {milestone.date}
                  </span>
                  <h3 className={`font-bold mt-1 ${
                    milestone.status === 'current' ? 'text-brand-gold-700' : 'text-gray-900'
                  }`}>
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{milestone.description}</p>
                  
                  {milestone.status === 'current' && (
                    <span className="inline-flex items-center gap-1 mt-3 text-xs font-bold text-brand-green-700 bg-brand-green-100 px-3 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-green-500 animate-pulse" />
                      You Are Here
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline - Mobile (vertical) */}
        <div className="lg:hidden space-y-4">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.title}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="flex gap-4"
            >
              {/* Dot and line */}
              <div className="flex flex-col items-center">
                {milestone.status === 'completed' ? (
                  <div className="w-10 h-10 rounded-full bg-brand-green-500 flex items-center justify-center shadow-lg flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                ) : milestone.status === 'current' ? (
                  <div className="w-10 h-10 rounded-full bg-brand-gold-500 flex items-center justify-center shadow-lg ring-4 ring-brand-gold-200 flex-shrink-0 animate-pulse-slow">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                    <Circle className="w-5 h-5 text-gray-400" />
                  </div>
                )}
                {index < milestones.length - 1 && (
                  <div className={`w-0.5 flex-grow mt-2 ${
                    milestone.status === 'completed' ? 'bg-brand-green-500' : 'bg-gray-200'
                  }`} />
                )}
              </div>
              
              {/* Content */}
              <div className={`flex-grow pb-6 p-4 rounded-xl ${
                milestone.status === 'current' 
                  ? 'bg-brand-gold-50 border-2 border-brand-gold-300' 
                  : 'bg-white border border-gray-100'
              }`}>
                <span className={`text-xs font-semibold uppercase tracking-wider ${
                  milestone.status === 'current' ? 'text-brand-gold-600' : 'text-gray-400'
                }`}>
                  {milestone.date}
                </span>
                <h3 className={`font-bold mt-1 ${
                  milestone.status === 'current' ? 'text-brand-gold-700' : 'text-gray-900'
                }`}>
                  {milestone.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{milestone.description}</p>
                
                {milestone.status === 'current' && (
                  <span className="inline-flex items-center gap-1 mt-3 text-xs font-bold text-brand-green-700 bg-brand-green-100 px-3 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green-500 animate-pulse" />
                    You Are Here
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

