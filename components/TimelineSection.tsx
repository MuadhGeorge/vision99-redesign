'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useMemo } from 'react'
import { 
  FileText, 
  Users, 
  Shovel, 
  HardHat, 
  PartyPopper,
  CheckCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react'

/**
 * Timeline data with parseable dates for automatic status calculation
 * 
 * Date formats:
 * - Range: "2021-01-01 to 2025-03-01" (uses end date for comparison)
 * - Single: "2025-12-06" (exact date)
 * - Month: "2026-01-01" (first of month)
 * - Approximate: "2027-12-01" (end of year)
 */
const timelinePhases = [
  {
    icon: FileText,
    title: 'Vision & Design',
    displayDate: '2021 – 2025',
    // End date for this phase
    targetDate: new Date('2025-03-01'),
    description: 'Architectural blueprints finalized. Living Building Challenge feasibility confirmed.',
    highlights: ['Master plan approved', 'LBC pathway defined', 'Community input gathered'],
  },
  {
    icon: Users,
    title: 'Capital Campaign',
    displayDate: 'Now – Dec 2025',
    // End of campaign phase
    targetDate: new Date('2025-12-05'),
    description: 'Securing the Founders Circle. Building the financial foundation for construction.',
    highlights: ['Founders Circle forming', 'Community pledges growing', 'Major gifts secured'],
  },
  {
    icon: Shovel,
    title: 'Groundbreaking',
    displayDate: 'December 6, 2025',
    targetDate: new Date('2025-12-06'),
    description: 'The ceremonial beginning of construction. Breaking ground on our shared vision.',
    highlights: ['Site preparation', 'Community celebration', 'Construction begins'],
  },
  {
    icon: HardHat,
    title: 'Construction',
    displayDate: 'January 2026',
    // Start of construction
    targetDate: new Date('2026-01-01'),
    description: 'Breaking ground on the future. Transforming vision into reality.',
    highlights: ['Horizontal work', 'Vertical construction', 'Systems installation'],
  },
  {
    icon: PartyPopper,
    title: 'Grand Opening',
    displayDate: 'End of 2027, in shaa Allah',
    targetDate: new Date('2027-12-01'),
    description: 'Opening our doors to the community and the world.',
    highlights: ['Final inspections', 'Community move-in', 'LBC certification pursuit'],
  },
]

type PhaseStatus = 'completed' | 'current' | 'upcoming'

/**
 * Calculate the status of each timeline phase based on current date
 * 
 * Logic:
 * - Current step = latest step whose date <= today
 * - Steps before current = completed
 * - Steps after current = upcoming
 * 
 * Edge cases:
 * - If all steps are in the future, first step is current
 * - If all steps are in the past, last step is current
 */
function calculatePhaseStatuses(): PhaseStatus[] {
  const today = new Date()
  today.setHours(0, 0, 0, 0) // Normalize to start of day
  
  // Find the index of the latest step whose date is <= today
  let currentIndex = -1
  
  for (let i = 0; i < timelinePhases.length; i++) {
    const targetDate = new Date(timelinePhases[i].targetDate)
    targetDate.setHours(0, 0, 0, 0)
    
    if (targetDate <= today) {
      currentIndex = i // Keep updating to get the LATEST step <= today
    } else {
      break // Once we hit a future date, stop (dates are in chronological order)
    }
  }
  
  // Edge cases
  if (currentIndex === -1) {
    // All dates are in the future → first step is current
    currentIndex = 0
  } else if (currentIndex === timelinePhases.length - 1) {
    // All dates are in the past, but we still want to show the last one as current
    // (already set correctly)
  }
  
  // Build the status array
  const statuses: PhaseStatus[] = []
  for (let i = 0; i < timelinePhases.length; i++) {
    if (i < currentIndex) {
      statuses.push('completed')
    } else if (i === currentIndex) {
      statuses.push('current')
    } else {
      statuses.push('upcoming')
    }
  }
  
  return statuses
}

const getStatusStyles = (status: PhaseStatus) => {
  switch (status) {
    case 'completed':
      return {
        line: 'bg-rcm-green-500',
        dot: 'bg-rcm-green-500 text-white',
        card: 'border-rcm-green-200 bg-rcm-green-50/50',
        badge: 'bg-rcm-green-100 text-rcm-green-700',
        highlight: false,
      }
    case 'current':
      return {
        line: 'bg-rcm-gold-500',
        dot: 'bg-gradient-to-br from-rcm-gold-500 to-rcm-gold-600 text-white ring-4 ring-rcm-gold-200 ring-offset-2 ring-offset-gray-50',
        card: 'border-rcm-gold-400 bg-gradient-to-br from-rcm-gold-50 via-white to-rcm-gold-50/30 shadow-xl shadow-rcm-gold-200/50',
        badge: 'bg-rcm-gold-500 text-white',
        highlight: true,
      }
    default:
      return {
        line: 'bg-gray-200',
        dot: 'bg-gray-200 text-gray-400',
        card: 'border-gray-200 bg-white',
        badge: 'bg-gray-100 text-gray-600',
        highlight: false,
      }
  }
}

export default function TimelineSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  // Calculate statuses based on current date (memoized)
  const phaseStatuses = useMemo(() => calculatePhaseStatuses(), [])
  
  // Calculate progress percentage for the timeline line
  const completedCount = phaseStatuses.filter(s => s === 'completed').length
  const currentIndex = phaseStatuses.findIndex(s => s === 'current')
  const progressPercent = useMemo(() => {
    if (currentIndex === -1 && completedCount === timelinePhases.length) {
      return 100
    }
    // Progress to middle of current phase
    return ((completedCount + 0.5) / timelinePhases.length) * 100
  }, [completedCount, currentIndex])

  return (
    <section id="timeline" className="section-padding bg-gray-50 scroll-mt-20" ref={ref}>
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
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
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gray-200">
            <motion.div
              initial={{ width: '0%' }}
              animate={isInView ? { width: `${progressPercent}%` } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full bg-rcm-green-500"
            />
          </div>

          {/* Timeline Items - Stack on mobile/tablet, 5 cols on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 lg:gap-4">
            {timelinePhases.map((phase, index) => {
              const status = phaseStatuses[index]
              const styles = getStatusStyles(status)
              const isCurrent = status === 'current'
              
              return (
                <motion.div
                  key={phase.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className={`relative ${isCurrent ? 'lg:-mt-2 lg:mb-2 sm:col-span-2 lg:col-span-1' : ''}`}
                >
                  {/* Dot */}
                  <div className="flex lg:justify-center mb-4">
                    <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full ${styles.dot} flex items-center justify-center shadow-lg z-10 relative transition-all duration-300`}>
                      {status === 'completed' ? (
                        <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                      ) : (
                        <phase.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      )}
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`rounded-xl border-2 p-5 sm:p-6 ${styles.card} transition-all duration-300 ${isCurrent ? 'lg:scale-105' : ''}`}>
                    <div className="flex items-center justify-between mb-3 gap-2 flex-wrap">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${styles.badge}`}>
                        {phase.displayDate}
                      </span>
                      {/* "We're here" indicator - only shown for current phase */}
                      {isCurrent && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-600/10 text-emerald-700 border border-emerald-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          We&apos;re here
                        </span>
                      )}
                    </div>
                    <h3 className={`font-bold mb-2 text-base sm:text-lg ${isCurrent ? 'text-rcm-gold-700' : 'text-gray-900'}`}>
                      {phase.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{phase.description}</p>
                    <ul className="space-y-1.5">
                      {phase.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-center gap-2 text-xs text-gray-500">
                          <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isCurrent ? 'bg-rcm-gold-500' : status === 'completed' ? 'bg-rcm-green-500' : 'bg-gray-300'}`} />
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
          className="mt-12 sm:mt-16"
        >
          <div className="bg-gradient-to-r from-rcm-gold-50 via-white to-rcm-gold-50 rounded-xl sm:rounded-2xl border-2 border-rcm-gold-200 p-6 sm:p-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rcm-gold-100 rounded-full text-rcm-gold-700 text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              Capital Campaign in Progress
            </div>
            <p className="text-base sm:text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              We&apos;re in the <strong className="text-rcm-gold-600">Capital Campaign</strong> phase. 
              Your support today directly shapes what opens in 2027. Join our founding community.
            </p>
            <a href="#donate" className="btn-gold group inline-flex">
              Join the Founders Circle
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
