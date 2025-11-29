'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  FileText, 
  Users, 
  Shovel, 
  HardHat, 
  PartyPopper,
  CheckCircle,
  Circle,
  ArrowRight
} from 'lucide-react'

const timelinePhases = [
  {
    icon: FileText,
    title: 'Vision & Design',
    status: 'completed',
    date: 'Completed',
    description: 'Architectural blueprints finalized. Living Building Challenge feasibility confirmed.',
    highlights: ['Master plan approved', 'LBC pathway defined', 'Community input gathered'],
  },
  {
    icon: Users,
    title: 'Capital Campaign',
    status: 'current',
    date: 'Now – Dec 2025',
    description: 'Securing the Founders Circle. Building the financial foundation for construction.',
    highlights: ['Founders Circle forming', 'Community pledges growing', 'Major gifts secured'],
  },
  {
    icon: Shovel,
    title: 'Groundbreaking',
    status: 'upcoming',
    date: 'December 6, 2025',
    description: 'The ceremonial beginning of construction. Breaking ground on our shared vision.',
    highlights: ['Site preparation', 'Community celebration', 'Construction begins'],
  },
  {
    icon: HardHat,
    title: 'Construction',
    status: 'upcoming',
    date: 'January 2026',
    description: 'Breaking ground on the future. Transforming vision into reality.',
    highlights: ['Horizontal work', 'Vertical construction', 'Systems installation'],
  },
  {
    icon: PartyPopper,
    title: 'Grand Opening',
    status: 'upcoming',
    date: 'August 2027',
    description: 'Opening our doors to the community and the world.',
    highlights: ['Final inspections', 'Community move-in', 'LBC certification pursuit'],
  },
]

const getStatusStyles = (status: string) => {
  switch (status) {
    case 'completed':
      return {
        line: 'bg-rcm-green-500',
        dot: 'bg-rcm-green-500 text-white',
        card: 'border-rcm-green-200 bg-rcm-green-50/50',
        badge: 'bg-rcm-green-100 text-rcm-green-700',
      }
    case 'current':
      return {
        line: 'bg-rcm-gold-500',
        dot: 'bg-gradient-to-br from-rcm-gold-500 to-rcm-gold-600 text-white ring-4 ring-rcm-gold-200',
        card: 'border-rcm-gold-400 bg-gradient-to-br from-rcm-gold-50 to-white shadow-xl',
        badge: 'bg-rcm-gold-500 text-white',
      }
    default:
      return {
        line: 'bg-gray-200',
        dot: 'bg-gray-200 text-gray-400',
        card: 'border-gray-200 bg-white',
        badge: 'bg-gray-100 text-gray-600',
      }
  }
}

export default function TimelineSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="timeline" className="section-padding bg-gray-50 scroll-mt-20" ref={ref}>
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">The Journey</span>
          <h2 className="section-heading">Path to Groundbreaking</h2>
          <p className="section-subheading mx-auto">
            Every great vision requires a clear path. Here&apos;s where we are and where we&apos;re headed.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line - Desktop */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gray-200">
            <motion.div
              initial={{ width: '0%' }}
              animate={isInView ? { width: '30%' } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full bg-rcm-green-500"
            />
          </div>

          {/* Timeline Items */}
          <div className="grid md:grid-cols-5 gap-6 md:gap-4">
            {timelinePhases.map((phase, index) => {
              const styles = getStatusStyles(phase.status)
              return (
                <motion.div
                  key={phase.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="relative"
                >
                  {/* Dot */}
                  <div className="flex md:justify-center mb-4">
                    <div className={`w-12 h-12 rounded-full ${styles.dot} flex items-center justify-center shadow-md z-10 relative`}>
                      {phase.status === 'completed' ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        <phase.icon className="w-6 h-6" />
                      )}
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`rounded-xl border-2 p-4 ${styles.card} transition-all duration-300`}>
                    <div className="flex items-center justify-between mb-2 gap-2 flex-wrap">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${styles.badge}`}>
                        {phase.date}
                      </span>
                      {phase.status === 'current' && (
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-rcm-green-600 text-white animate-pulse">
                          We&apos;re Here
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{phase.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{phase.description}</p>
                    <ul className="space-y-1">
                      {phase.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-center gap-2 text-xs text-gray-500">
                          <div className="w-1 h-1 rounded-full bg-rcm-green-400" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 mb-6">
            We&apos;re in the <strong className="text-rcm-gold-600">Capital Campaign</strong> phase. 
            Your support today shapes what opens in 2027.
          </p>
          <a href="#donate" className="btn-gold group">
            Join the Founders Circle
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

