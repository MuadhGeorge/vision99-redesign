'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { sectionImages, getAltText } from '@/lib/imageMap'

/**
 * Image assignments for Campus Life / Features Section:
 * - Youth & Family Spaces: INT-YOUTH-CENTER-19 (Youth Center)
 * - Community Gathering: INT-CAFE-07 (Cafe space)
 * - Outdoor Pavilion: INT-MAIN-HALL-02 (Main Hall)
 */

// Get images from the image map for each feature card
const youthImage = sectionImages.campusLife.youth
const communityImage = sectionImages.campusLife.community
const pavilionImage = sectionImages.campusLife.pavilion

const features = [
  {
    image: youthImage.src,
    alt: getAltText.interior(youthImage.subCategory),
    title: 'Youth & Family Spaces',
    description: 'Dedicated areas for children to play, learn, and grow—including playgrounds, youth centers, and family-friendly gathering spaces.',
  },
  {
    image: communityImage.src,
    alt: getAltText.interior(communityImage.subCategory),
    title: 'Community Gathering',
    description: 'Thoughtfully designed spaces for community bonding—from the cafe to shaded seating areas and social gathering spots.',
  },
  {
    image: pavilionImage.src,
    alt: getAltText.interior(pavilionImage.subCategory),
    title: 'Multi-Purpose Spaces',
    description: 'Beautiful multi-purpose halls for overflow prayers, community events, and connecting with neighbors during special occasions.',
  },
]

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Campus Life</span>
          <h2 className="section-heading">More Than a Mosque</h2>
          <p className="section-subheading mx-auto">
            Beyond Walls is a complete community ecosystem—designed for every age, every family, 
            and every moment of life.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2 group-hover:text-rcm-green-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
