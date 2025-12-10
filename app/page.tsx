/**
 * Beyond Walls / Vision99 - Main Landing Page
 * 
 * MOBILE RESPONSIVENESS (updated Nov 2025):
 * - All sections use mobile-first responsive design with xs/sm/md/lg/xl breakpoints
 * - Added xs breakpoint at 475px for better phone support (Galaxy S24+, iPhones, etc.)
 * - No horizontal scroll on any device (360px-1536px+ tested)
 * - All tap targets meet 44px minimum height requirement
 * - Typography scales appropriately (text-xs → text-base across breakpoints)
 * - Cards, grids, and layouts stack vertically on mobile, expand on larger screens
 * 
 * Components with mobile fixes:
 * - Navigation: Hamburger menu on mobile, proper spacing
 * - HeroSection: Stacked layout, repositioned floating badge, responsive stats grid
 * - VisionSection: Single column cards on mobile
 * - CampusSection: Stacked text/image, responsive building cards
 * - FeaturesSection: Single column on mobile
 * - GallerySection: Single column grid on xs, 2-col on sm, 3-col on md+
 * - ImpactSection: 2-col metrics grid on xs, scales up to 4-col
 * - TimelineSection: Stacked phases on mobile/tablet, 5-col on desktop
 * - FAQSection: Full-width accordion with proper tap targets
 * - DonateSection: Stacked tier cards, reordered for mobile (popular first)
 * - Footer: Stacked layout, responsive newsletter form
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
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollToTop />
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
