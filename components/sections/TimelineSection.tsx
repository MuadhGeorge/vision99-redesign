'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import GlassCard from '@/components/ui/GlassCard'

interface TimelineSectionProps {
  onPhaseChange: (phase: number) => void
}

const TIMELINE_PHASES = [
  {
    id: 0,
    title: 'Vision & Design',
    status: 'COMPLETED',
    statusColor: 'bg-emerald-500/20 text-emerald-400',
    description: 'Architectural blueprints finalized. LBC Feasibility confirmed.',
    details: ['Master planning completed', 'Living Building Challenge pathway established', 'Community engagement & design input'],
  },
  {
    id: 1,
    title: 'The Capital Campaign',
    status: 'WE ARE HERE',
    statusColor: 'bg-amber-500/20 text-amber-400',
    description: 'Securing the Founders Circle. Join us in making history.',
    details: ['Founders Circle fundraising active', 'Community-wide giving campaign', 'Transformational partnerships forming'],
  },
  {
    id: 2,
    title: 'Groundbreaking',
    status: 'December 6, 2025',
    statusColor: 'bg-teal-500/20 text-teal-400',
    description: 'The ceremonial beginning of construction.',
    details: ['Community celebration event', 'Official construction permit', 'Site preparation begins'],
  },
  {
    id: 3,
    title: 'Construction Begins',
    status: 'January 2026',
    statusColor: 'bg-teal-500/20 text-teal-400',
    description: 'Breaking ground on the future.',
    details: ['Foundation and structural work', 'Living Building systems installation', 'Progress updates to donors'],
  },
  {
    id: 4,
    title: 'Complete Construction',
    status: 'August 2027',
    statusColor: 'bg-teal-500/20 text-teal-400',
    description: 'Opening our doors to the community and the world.',
    details: ['Grand opening celebration', 'LBC certification pursuit', 'Community programming launch'],
  },
]

/**
 * TimelineSection - Scroll-driven timeline that controls 3D building
 */
export default function TimelineSection({ onPhaseChange }: TimelineSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentPhase, setCurrentPhase] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Map scroll to phases
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const phase = Math.min(4, Math.floor(latest * 5))
    if (phase !== currentPhase) {
      setCurrentPhase(phase)
      onPhaseChange(phase)
    }
  })

  return (
    <section
      ref={containerRef}
      id="timeline"
      className="relative pointer-events-auto"
      style={{ height: '500vh' }}
    >
      {/* Sticky header */}
      <div className="sticky top-0 z-20 pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-teal-400 text-sm font-medium tracking-widest uppercase"
          >
            The Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl text-white mt-2"
          >
            The Path to Groundbreaking
          </motion.h2>
        </div>
      </div>

      {/* Timeline content - sticky on right side */}
      <div className="sticky top-32 h-[calc(100vh-8rem)] flex items-center justify-end pr-4 md:pr-8 lg:pr-16">
        <div className="w-full max-w-md">
          {TIMELINE_PHASES.map((phase, index) => (
            <TimelineCard
              key={phase.id}
              phase={phase}
              isActive={index === currentPhase}
              isPast={index < currentPhase}
            />
          ))}
        </div>
      </div>

      {/* Phase indicators on left */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-30 hidden lg:block">
        <div className="flex flex-col gap-4">
          {TIMELINE_PHASES.map((phase, i) => (
            <motion.div
              key={phase.id}
              className={`timeline-dot ${i === currentPhase ? 'active' : ''} ${i < currentPhase ? 'completed' : ''}`}
              whileHover={{ scale: 1.2 }}
              title={phase.title}
            />
          ))}
        </div>
        <p className="text-white/50 text-xs mt-4 text-center">
          {currentPhase + 1} / 5
        </p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="fixed bottom-8 right-8 z-30"
        animate={{ opacity: currentPhase < 4 ? 1 : 0 }}
      >
        <div className="flex flex-col items-center text-white/50">
          <span className="text-xs mb-2">Scroll to build</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

function TimelineCard({ phase, isActive, isPast }: {
  phase: typeof TIMELINE_PHASES[0]
  isActive: boolean
  isPast: boolean
}) {
  return (
    <motion.div
      className="absolute inset-0 flex items-center"
      initial={{ opacity: 0, x: 50 }}
      animate={{
        opacity: isActive ? 1 : 0,
        x: isActive ? 0 : 50,
        scale: isActive ? 1 : 0.95,
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{ pointerEvents: isActive ? 'auto' : 'none' }}
    >
      <GlassCard className="p-8 w-full" glow={isActive ? 'teal' : 'none'}>
        {/* Phase indicator */}
        <div className="flex items-center gap-3 mb-4">
          <motion.span
            className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold"
            animate={isActive ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {phase.id + 1}
          </motion.span>
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${phase.statusColor}`}>
            {phase.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-3xl text-white mb-4">{phase.title}</h3>

        {/* Description */}
        <p className="text-white/70 text-lg mb-6">{phase.description}</p>

        {/* Details */}
        <ul className="space-y-2">
          {phase.details.map((detail, i) => (
            <motion.li
              key={i}
              className="flex items-start gap-3 text-white/60"
              initial={{ opacity: 0, x: -10 }}
              animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <svg className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>{detail}</span>
            </motion.li>
          ))}
        </ul>

        {/* Special highlight for current campaign */}
        {phase.id === 1 && isActive && (
          <motion.div
            className="mt-6 p-4 bg-gradient-to-r from-amber-500/10 to-transparent rounded-xl border border-amber-500/30"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-amber-400 font-medium">
              ✨ Your contribution today moves us closer to groundbreaking
            </p>
          </motion.div>
        )}
      </GlassCard>
    </motion.div>
  )
}

