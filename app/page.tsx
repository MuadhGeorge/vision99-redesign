/**
 * Beyond Walls / Vision99 - Main Landing Page
 * 
 * IMAGE ASSIGNMENTS (from /public/Photos):
 * 
 * HERO SECTION:
 * - Main hero image: EXT-01 (Copy of P2874-RCC-EXT-01_05.png)
 * - Secondary peek image: EXT-02 (Copy of P2874-RCC-EXT-02_05.png)
 * 
 * CAMPUS SECTION:
 * - Main campus image: EXT-02 (Copy of P2874-RCC-EXT-02_05.png)
 * - Secondary accent: EXT-04 (Copy of P2874-RCC-EXT-04_05.png)
 * 
 * CAMPUS LIFE / FEATURES CARDS:
 * - Youth & Family Spaces: INT-YOUTH-CENTER-19 (Copy of P2874-RCC-INT-YOUTH CENTER-19_03.png)
 * - Community Gathering: INT-CAFE-07 (Copy of P2874-RCC-INT-CAFE-07_02.png)
 * - Multi-Purpose Spaces: INT-MAIN-HALL-02 (Copy of P2874-RCC-INT-MAIN HALL-02_03.png)
 * 
 * GALLERY:
 * - All 28 photos from /public/Photos (10 exterior + 18 interior)
 * - Larger featured images at positions 0 and 10
 * 
 * Image categorization logic is in /lib/imageMap.ts
 */

import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import VisionSection from '@/components/VisionSection'
import CampusSection from '@/components/CampusSection'
import FeaturesSection from '@/components/FeaturesSection'
import GallerySection from '@/components/GallerySection'
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
      <FeaturesSection />
      <GallerySection />
      <ImpactSection />
      <TimelineSection />
      <FAQSection />
      <DonateSection />
      <Footer />
    </main>
  )
}
