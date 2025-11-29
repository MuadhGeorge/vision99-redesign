/**
 * LBC Blueprint Page - Project Details & Living Building Challenge
 */

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import LBCHero from '@/components/lbc/LBCHero'
import PetalGrid from '@/components/lbc/PetalGrid'
import TrueCost from '@/components/lbc/TrueCost'

export const metadata = {
  title: 'LBC Blueprint | Beyond Walls',
  description: 'Explore the Living Building Challenge standards and our path to becoming the world\'s first LBC-certified house of worship.',
}

export default function LBCPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <LBCHero />
      <PetalGrid />
      <TrueCost />
      <Footer />
    </main>
  )
}

