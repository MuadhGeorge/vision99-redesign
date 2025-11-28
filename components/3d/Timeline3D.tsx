'use client'

import { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import MasjidModel from './MasjidModel'
import SceneDirector, { SceneEnvironment } from './SceneDirector'

/**
 * Timeline Phase Data - Beyond Walls specific phases
 */
const TIMELINE_PHASES = [
  {
    id: 0,
    title: 'Vision & Design',
    status: 'COMPLETED',
    statusColor: 'text-emerald-600 bg-emerald-100',
    description: 'Architectural blueprints finalized. LBC Feasibility confirmed.',
    details: [
      'Master planning completed',
      'Living Building Challenge pathway established',
      'Community engagement & design input',
    ],
  },
  {
    id: 1,
    title: 'The Capital Campaign',
    status: 'WE ARE HERE',
    statusColor: 'text-gold-600 bg-amber-100',
    description: 'Securing the Founders Circle. Join us in making history.',
    details: [
      'Founders Circle fundraising active',
      'Community-wide giving campaign',
      'Transformational partnerships forming',
    ],
  },
  {
    id: 2,
    title: 'Groundbreaking',
    status: 'December 6, 2025',
    statusColor: 'text-teal-600 bg-teal-100',
    description: 'The ceremonial beginning of construction.',
    details: [
      'Community celebration event',
      'Official construction permit',
      'Site preparation begins',
    ],
  },
  {
    id: 3,
    title: 'Construction Begins',
    status: 'January 2026',
    statusColor: 'text-teal-600 bg-teal-100',
    description: 'Breaking ground on the future.',
    details: [
      'Foundation and structural work',
      'Living Building systems installation',
      'Progress updates to donors',
    ],
  },
  {
    id: 4,
    title: 'Complete Construction',
    status: 'August 2027',
    statusColor: 'text-teal-600 bg-teal-100',
    description: 'Opening our doors to the community and the world.',
    details: [
      'Grand opening celebration',
      'LBC certification pursuit',
      'Community programming launch',
    ],
  },
]

interface Timeline3DProps {
  className?: string
}

/**
 * Timeline3D - "The Path to Groundbreaking"
 * 
 * Scroll-synchronized 3D timeline showing the masjid being built through phases
 */
export default function Timeline3D({ className = '' }: Timeline3DProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentPhase, setCurrentPhase] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const phaseProgress = useTransform(scrollYProgress, [0, 1], [0, 4])

  useMotionValueEvent(phaseProgress, 'change', (latest) => {
    const newPhase = Math.min(4, Math.max(0, Math.round(latest)))
    if (newPhase !== currentPhase) {
      setCurrentPhase(newPhase)
    }
  })

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
    const handleResize = () => setIsMobile(window.innerWidth < 1024)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section
      ref={containerRef}
      id="timeline"
      className={`${className} relative`}
      style={{ height: '500vh' }}
    >
      {/* Section Header - Fixed at top initially */}
      <div className="sticky top-0 z-20 bg-gradient-to-b from-sand-100 via-sand-100 to-transparent py-8 pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-teal-700 font-medium tracking-wider uppercase text-sm mb-2"
          >
            The Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl text-gray-900"
          >
            The Path to Groundbreaking
          </motion.h2>
        </div>
      </div>

      {/* Sticky Content Container */}
      <div className="sticky top-24 h-[calc(100vh-6rem)] w-full flex flex-col lg:flex-row">
        {/* 3D Canvas - Left/Center */}
        <div className="relative w-full lg:w-1/2 xl:w-3/5 h-1/2 lg:h-full bg-gradient-to-br from-teal-800 to-teal-700">
          <Canvas
            shadows
            dpr={[1, 1.5]}
            gl={{
              antialias: true,
              alpha: false,
              powerPreference: 'high-performance',
            }}
            className="!absolute inset-0"
          >
            <SceneEnvironment />
            
            <PerspectiveCamera
              makeDefault
              position={[12, 8, 12]}
              fov={45}
              near={0.1}
              far={100}
            />

            <Suspense fallback={null}>
              <SceneDirector phase={currentPhase} />
              <MasjidModel phase={currentPhase} />
            </Suspense>
          </Canvas>

          {/* Phase indicator overlay */}
          <div className="absolute bottom-8 left-8 z-10">
            <div className="flex items-center gap-2">
              {TIMELINE_PHASES.map((phase, i) => (
                <div
                  key={phase.id}
                  className={`phase-dot ${i === currentPhase ? 'active' : ''} ${i < currentPhase ? 'completed' : ''}`}
                  title={phase.title}
                />
              ))}
            </div>
            <p className="text-white/70 text-sm mt-2">
              Phase {currentPhase + 1} of 5
            </p>
          </div>
        </div>

        {/* Timeline Text Panels - Right */}
        <div className="relative w-full lg:w-1/2 xl:w-2/5 h-1/2 lg:h-full bg-sand-50 overflow-hidden">
          {TIMELINE_PHASES.map((phase, index) => (
            <TimelinePanel
              key={phase.id}
              phase={phase}
              isActive={index === currentPhase}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="fixed bottom-8 right-8 z-50 text-teal-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollYProgress.get() < 0.9 ? 1 : 0 }}
      >
        <div className="flex flex-col items-center bg-white/90 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg">
          <span className="text-sm font-medium mb-2">Scroll to build</span>
          <motion.svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </motion.svg>
        </div>
      </motion.div>
    </section>
  )
}

interface TimelinePanelProps {
  phase: typeof TIMELINE_PHASES[0]
  isActive: boolean
  index: number
}

function TimelinePanel({ phase, isActive, index }: TimelinePanelProps) {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center p-6 lg:p-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: isActive ? 1 : 0,
        y: isActive ? 0 : 30,
        pointerEvents: isActive ? 'auto' : 'none',
      }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-md">
        {/* Phase number */}
        <motion.div
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -20 }}
          transition={{ delay: 0.1 }}
        >
          <span className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center text-lg font-bold">
            {index + 1}
          </span>
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${phase.statusColor}`}>
            {phase.status}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h3
          className="font-display text-3xl lg:text-4xl text-gray-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
          transition={{ delay: 0.15 }}
        >
          {phase.title}
        </motion.h3>

        {/* Description */}
        <motion.p
          className="text-lg text-gray-600 mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
          transition={{ delay: 0.2 }}
        >
          {phase.description}
        </motion.p>

        {/* Details */}
        <motion.ul
          className="space-y-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ delay: 0.25 }}
        >
          {phase.details.map((detail, i) => (
            <motion.li
              key={i}
              className="flex items-start gap-3 text-gray-600"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -10 }}
              transition={{ delay: 0.3 + i * 0.05 }}
            >
              <svg
                className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{detail}</span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Special highlight for current phase */}
        {index === 1 && (
          <motion.div
            className="mt-8 p-4 bg-gradient-to-r from-gold-500/10 to-amber-500/10 rounded-xl border border-gold-500/30"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.95 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-amber-800 font-medium text-sm">
              ✨ Your contribution today moves us closer to groundbreaking
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
