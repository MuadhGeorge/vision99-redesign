import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import VisionSection from '@/components/VisionSection'
import CampusSection from '@/components/CampusSection'
import ImpactSection from '@/components/ImpactSection'
import TimelineSection from '@/components/TimelineSection'
import FAQSection from '@/components/FAQSection'
import DonateSection from '@/components/DonateSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <VisionSection />
      <CampusSection />
      <ImpactSection />
      <TimelineSection />
      <FAQSection />
      <DonateSection />
      <Footer />
    </main>
  )
}

