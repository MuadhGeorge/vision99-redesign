/**
 * Beyond Walls v2 - Main Landing Page
 * 
 * Funnel Structure:
 * 1. Hero - Big hook (World's first LBC masjid)
 * 2. Vision - The movement / legacy
 * 3. Why Now - Youth + stewardship urgency
 * 4. Solution - Sanctuary vs Blueprint 2×3 grid
 * 5. Credibility - LBC standards + partner logos ticker
 * 6. Roadmap - Timeline to Dec 6, 2025 / 2027 opening
 * 7. The Ask - Dual CTA cards: Founders Circle vs Builders
 */

import Navigation from '@/components/Navigation'
import Hero from '@/components/home/Hero'
import Vision from '@/components/home/Vision'
import WhyNow from '@/components/home/WhyNow'
import Solution from '@/components/home/Solution'
import Credibility from '@/components/home/Credibility'
import Roadmap from '@/components/home/Roadmap'
import TheAsk from '@/components/home/TheAsk'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Vision />
      <WhyNow />
      <Solution />
      <Credibility />
      <Roadmap />
      <TheAsk />
      <Footer />
    </main>
  )
}
