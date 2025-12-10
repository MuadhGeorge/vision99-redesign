'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { sectionImages, exteriorPhotos, getAltText } from '@/lib/imageMap'

/**
 * Campus Section - Introduction to the New RCM Campus
 * 
 * This section provides a high-level overview of the campus project.
 * The detailed building/space cards are in FeaturesSection ("More Than a Mosque").
 * 
 * Images: EXT-02 (main), EXT-04 (accent)
 */

const mainCampusImage = sectionImages.campus.main
const secondaryCampusImage = exteriorPhotos[3] ?? sectionImages.campus.secondary

export default function CampusSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="campus" className="section-padding bg-slate-50 scroll-mt-20" ref={ref}>
      <div className="container-max-np px-4 xs:px-5 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="section-label">The Campus</span>
          <h2 className="section-heading">The New RCM Campus</h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-5 leading-relaxed">
              Our new campus spans approximately <strong className="text-gray-800">5.5 acres</strong> with 
              <strong className="text-gray-800"> three dedicated buildings</strong> designed to serve every 
              member of our community—from our youngest children to our honored elders.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-5 sm:mb-6">
              This is the <strong className="text-gray-800">first ever faith-based project in the world</strong> pursuing 
              Living Building Challenge certification, setting a new standard for what a house of worship can be.
            </p>
            <a
              href="#features"
              className="inline-flex items-center gap-2 text-rcm-green-700 font-semibold hover:text-rcm-green-800 transition-colors group"
            >
              Explore our spaces
              <svg 
                className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* Right: Images */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
              <div className="aspect-[4/3] relative bg-gray-100">
                <Image
                  src={mainCampusImage.src}
                  alt={getAltText.exterior(mainCampusImage.name)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            
            {/* Accent Image - Hidden on mobile */}
            <div className="absolute -bottom-5 -left-5 lg:-bottom-6 lg:-left-6 w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden sm:block">
              <Image
                src={secondaryCampusImage.src}
                alt={getAltText.exterior(secondaryCampusImage.name)}
                fill
                className="object-cover"
                sizes="144px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
