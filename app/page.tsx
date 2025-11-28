'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import dynamic from 'next/dynamic'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import HeroSection from '@/components/sections/HeroSection'
import PartnersSection from '@/components/sections/PartnersSection'
import NarrativeSection from '@/components/sections/NarrativeSection'
import CrossroadsSection from '@/components/sections/CrossroadsSection'
import PillarsSection from '@/components/sections/PillarsSection'
import TimelineSection from '@/components/sections/TimelineSection'
import LeadershipCallSection from '@/components/sections/LeadershipCallSection'

// Lazy load the 3D scene for performance
const ImmersiveScene = dynamic(() => import('@/components/3d/ImmersiveScene'), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="spinner mx-auto mb-6" />
        <p className="text-white/80 text-lg animate-pulse">Entering Beyond Walls...</p>
      </div>
    </div>
  ),
})

/**
 * Beyond Walls - Cinematic 3D Experience
 * 
 * A scene-first architecture where the 3D environment is the primary layer
 * and UI sections are overlaid on top with glassmorphism effects.
 * 
 * Features:
 * - Immersive 3D masjid campus as persistent background
 * - Scroll-driven camera movement along a cinematic path
 * - Timeline section that "builds" the masjid in 3D
 * - Heavy use of Framer Motion for smooth animations
 * - Glassmorphism UI components throughout
 * - Particle effects and post-processing
 * 
 * TODO: Replace placeholder assets:
 * - /public/images/v99-rcm-logo.png - V99 RCM logo
 * - /public/models/vision99-campus.glb - 3D masjid model
 * - /public/images/partners/*.png - Partner logos
 * 
 * TODO: Connect forms to backends:
 * - Donation buttons to payment processor
 * - Newsletter form to email service
 * - Private briefing request to CRM
 */
export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [timelinePhase, setTimelinePhase] = useState(0)
  const [isClient, setIsClient] = useState(false)

  // Global scroll progress for camera movement
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Convert scroll progress to a value the camera can use
  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0, 1])

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Track scroll progress for camera
  const [cameraProgress, setCameraProgress] = useState(0)
  useEffect(() => {
    const unsubscribe = scrollProgress.on('change', (v) => {
      setCameraProgress(v)
    })
    return () => unsubscribe()
  }, [scrollProgress])

  return (
    <div ref={containerRef} className="relative bg-black">
      {/* Immersive 3D Background - Fixed, always visible */}
      {isClient && (
        <ImmersiveScene
          scrollProgress={cameraProgress}
          timelinePhase={timelinePhase}
          className="!fixed inset-0 z-0"
        />
      )}

      {/* UI Layer - Scrolls on top of 3D */}
      <div className="relative z-10">
        {/* Navigation */}
        <SiteHeader />

        {/* Content Sections */}
        <main>
          {/* Hero - Full viewport with 3D behind */}
          <HeroSection />

          {/* Partners Strip */}
          <PartnersSection />

          {/* Narrative - "A Milestone of Pride" */}
          <NarrativeSection />

          {/* Crossroads - "We Are at a Crossroads" */}
          <CrossroadsSection />

          {/* Two Pillars - Sanctuary + Blueprint */}
          <PillarsSection />

          {/* Timeline - Controls the 3D building animation */}
          <TimelineSection onPhaseChange={setTimelinePhase} />

          {/* Leadership Call - Donor CTAs */}
          <LeadershipCallSection />

          {/* Footer */}
          <SiteFooter />
        </main>
      </div>

      {/* Ambient gradient overlay for depth */}
      <div className="fixed inset-0 pointer-events-none z-[5]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>
    </div>
  )
}
