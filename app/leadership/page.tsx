/**
 * Leadership & Team Page
 */

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import LeadershipHero from '@/components/leadership/LeadershipHero'
import SteeringCommittee from '@/components/leadership/SteeringCommittee'
import ReligiousGuidance from '@/components/leadership/ReligiousGuidance'
import Governance from '@/components/leadership/Governance'
import Partners from '@/components/leadership/Partners'

export const metadata = {
  title: 'Leadership & Team | Beyond Walls',
  description: 'Meet the stewards guiding the Beyond Walls project - decades of professional expertise combined with deep spiritual commitment.',
}

export default function LeadershipPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <LeadershipHero />
      <SteeringCommittee />
      <ReligiousGuidance />
      <Governance />
      <Partners />
      <Footer />
    </main>
  )
}

