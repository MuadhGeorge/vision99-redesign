'use client'

import dynamic from 'next/dynamic'
import { SiteHeader, SiteFooter } from '@/components/layout'
import {
  HeroSection,
  PartnersSection,
  NarrativeSection,
  CrossroadsSection,
  PillarsSection,
  LeadershipCallSection,
} from '@/components/sections'

// Lazy load the Timeline3D component for better performance
const Timeline3D = dynamic(() => import('@/components/3d/Timeline3D'), {
  ssr: false,
  loading: () => (
    <div className="h-screen bg-gradient-to-br from-teal-800 to-teal-700 flex items-center justify-center">
      <div className="text-center text-white">
        <div className="spinner mx-auto mb-4" />
        <p className="text-lg font-light">Loading Timeline Experience...</p>
      </div>
    </div>
  ),
})

/**
 * Beyond Walls - Vision99 / Roswell Community Masjid Campus
 * 
 * A modern, immersive 3D experience showcasing the Beyond Walls project -
 * The World's First Living Building Masjid.
 * 
 * Page Structure:
 * 1. Hero Section - "Make History with Beyond Walls" with 3D masjid view
 * 2. Partners Strip - Scrolling partner logos
 * 3. Narrative Section - "A Milestone of Pride. A Legacy of Impact."
 * 4. Crossroads Section - "We Are at a Crossroads" + three highlight blocks
 * 5. Pillars Section - "Two Pillars. One Vision." (Sanctuary + Blueprint)
 * 6. Timeline Section - Scroll-based 3D construction timeline
 * 7. Leadership Call Section - Donor and community CTAs
 * 8. Footer - Contact, newsletter, links
 * 
 * TODO: Replace placeholder content with final copy
 * TODO: Add actual V99 RCM logo at /public/images/v99-rcm-logo.png
 * TODO: Add partner logos at /public/images/partners/
 * TODO: Add actual GLB model at /public/models/vision99-campus.glb
 * TODO: Connect donation buttons to actual payment system
 * TODO: Connect newsletter form to actual email service
 */
export default function HomePage() {
  return (
    <main className="relative">
      {/* Navigation Header */}
      <SiteHeader />
      
      {/* Hero Section - "Make History with Beyond Walls" */}
      <HeroSection />
      
      {/* Partners Strip */}
      <PartnersSection />
      
      {/* Narrative Section - "A Milestone of Pride. A Legacy of Impact." */}
      <NarrativeSection />
      
      {/* Crossroads Section - "We Are at a Crossroads" */}
      <CrossroadsSection />
      
      {/* Pillars Section - "Two Pillars. One Vision." */}
      <PillarsSection />
      
      {/* Scroll-Based 3D Timeline - "The Path to Groundbreaking" */}
      <div className="bg-sand-100">
        <Timeline3D />
      </div>
      
      {/* Leadership Call - Donor & Community CTAs */}
      <LeadershipCallSection />
      
      {/* Footer */}
      <SiteFooter />
    </main>
  )
}
