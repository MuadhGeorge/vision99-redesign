'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Home, GraduationCap, Users, Sparkles } from 'lucide-react'
import { sectionImages, getAltText } from '@/lib/imageMap'

/**
 * Campus Life / Features Section - "More Than a Mosque"
 * 
 * This is the PRIMARY section explaining the campus buildings/spaces.
 * Combines visual tiles with key features from each building.
 * 
 * Image assignments:
 * - Masjid & Sanctuary: INT-PRAYER-HALL or INT-MAIN-HALL
 * - Youth Center: INT-YOUTH-CENTER-19 (Youth Center)
 * - Family Hub: INT-CAFE-07 (Cafe space)
 */

// Get images from the image map for each feature card
const sanctuaryImage = sectionImages.campusLife.pavilion // Main Hall
const youthImage = sectionImages.campusLife.youth
const familyImage = sectionImages.campusLife.community

const features = [
  {
    icon: Home,
    image: sanctuaryImage.src,
    alt: getAltText.interior(sanctuaryImage.subCategory),
    badge: 'Worship',
    badgeColor: 'bg-rcm-green-100 text-rcm-green-700',
    title: 'Masjid & Sanctuary',
    description: 'A serene space for daily prayers, Friday gatherings, and spiritual reflection—designed with natural light and accessibility for all.',
    highlights: [
      'Prayer halls for men & women',
      'Wudu facilities & shoe halls',
      'Outdoor plaza & pavilion',
    ],
  },
  {
    icon: GraduationCap,
    image: youthImage.src,
    alt: getAltText.interior(youthImage.subCategory),
    badge: 'Youth',
    badgeColor: 'bg-rcm-teal-100 text-rcm-teal-700',
    title: 'Youth Center',
    description: 'A dedicated space where young Muslims can grow, learn, and connect through mentorship, study, and activities.',
    highlights: [
      'Full gymnasium & flex spaces',
      'Youth lounge & study areas',
      'Classrooms & café',
    ],
  },
  {
    icon: Users,
    image: familyImage.src,
    alt: getAltText.interior(familyImage.subCategory),
    badge: 'Family',
    badgeColor: 'bg-rcm-gold-100 text-rcm-gold-700',
    title: 'Family Hub',
    description: 'Multi-purpose spaces for community gatherings, educational programs, and celebrations that bring families together.',
    highlights: [
      'Family-friendly café',
      'Playground & green spaces',
      'Event halls & parents rooms',
    ],
  },
]

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="features" className="section-padding bg-white scroll-mt-20" ref={ref}>
      <div className="container-max-np px-4 xs:px-5 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="section-label">Campus Life</span>
          <h2 className="section-heading">More Than a Mosque</h2>
          <p className="section-subheading mx-auto">
            Three buildings designed for every age, every family, and every moment of life.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />
                  
                  {/* Badge on image */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className={`text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full ${feature.badgeColor}`}>
                      {feature.badge}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4 sm:p-5 lg:p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-5 h-5 text-rcm-green-600" />
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-rcm-green-700 transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                    {feature.description}
                  </p>
                  
                  {/* Highlights */}
                  <ul className="space-y-1.5">
                    {feature.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                        <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-rcm-gold-500 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
