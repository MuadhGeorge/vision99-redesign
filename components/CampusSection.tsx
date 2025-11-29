'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { 
  Home, 
  GraduationCap, 
  Users,
  CheckCircle,
  Sparkles
} from 'lucide-react'
import { sectionImages, exteriorPhotos, getAltText } from '@/lib/imageMap'
import { staggerContainer, staggerItem } from './animations'

/**
 * Campus Section - The New RCM Campus
 * Images: EXT-02 (main), EXT-04 (accent)
 */

const buildings = [
  {
    icon: Home,
    title: 'Masjid & Sanctuary',
    badge: 'Worship',
    badgeColor: 'bg-rcm-green-100 text-rcm-green-700',
    cardBg: 'bg-gradient-to-br from-rcm-green-50/50 to-white',
    description: 'A serene space for daily prayers, Friday gatherings, and spiritual reflection. Designed with natural light, acoustic excellence, and accessibility for all.',
    features: ['Prayer halls for men & women', 'Wudu facilities', 'Imam offices'],
  },
  {
    icon: GraduationCap,
    title: 'Next-Generation Youth Center',
    badge: 'Youth',
    badgeColor: 'bg-rcm-teal-100 text-rcm-teal-700',
    cardBg: 'bg-gradient-to-br from-rcm-teal-50/50 to-white',
    description: 'A dedicated space where young Muslims can grow, learn, and connect. Mentorship programs, study spaces, and activities that speak to their reality.',
    features: ['Tech & innovation lab', 'Sports & recreation', 'Mentorship programs'],
  },
  {
    icon: Users,
    title: 'Family Hub & Community Spaces',
    badge: 'Family',
    badgeColor: 'bg-rcm-gold-100 text-rcm-gold-700',
    cardBg: 'bg-gradient-to-br from-rcm-gold-50/50 to-white',
    description: 'Multi-purpose spaces for community gatherings, educational programs, mental health support, and celebrations that bring families together.',
    features: ['Community kitchen', 'Event spaces', 'Counseling rooms'],
  },
]

const campusFeatures = [
  '~5-acre site with integrated landscaping',
  '8+ months of horizontal site work',
  'First faith-based Living Building project',
  'Designed for accessibility',
]

const mainCampusImage = sectionImages.campus.main
const secondaryCampusImage = exteriorPhotos[3] ?? sectionImages.campus.secondary

export default function CampusSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="campus" className="section-padding bg-slate-50 scroll-mt-20" ref={ref}>
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">The Campus</span>
          <h2 className="section-heading">The New RCM Campus</h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-20">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed max-w-lg">
              Our new campus spans approximately <strong className="text-gray-800">5 acres</strong> with 
              <strong className="text-gray-800"> three dedicated buildings</strong> designed to serve every 
              member of our community—from our youngest children to our honored elders.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-lg">
              This is the <strong className="text-gray-800">first faith-based project</strong> in the country 
              pursuing Living Building Challenge certification, setting a new standard for what a house of 
              worship can be.
            </p>

            {/* Feature List - Proper bullets */}
            <ul className="space-y-2.5 sm:space-y-3">
              {campusFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2.5 sm:gap-3"
                >
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-rcm-green-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Images */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
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
            
            {/* Accent Image */}
            <div className="absolute -bottom-6 -left-6 w-36 h-36 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden lg:block">
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

        {/* Building Cards Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="text-center mb-6 sm:mb-10"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            Three Buildings, One Community
          </h3>
          <p className="mt-1.5 sm:mt-2 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Each building serves a unique purpose, together creating a complete community ecosystem.
          </p>
        </motion.div>

        {/* Building Cards */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {buildings.map((building) => (
            <motion.div
              key={building.title}
              variants={staggerItem}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 ${building.cardBg}`}
            >
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white shadow-sm flex items-center justify-center">
                  <building.icon className="w-5 h-5 sm:w-6 sm:h-6 text-rcm-green-600" />
                </div>
                <span className={`text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-full ${building.badgeColor}`}>
                  {building.badge}
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2">
                {building.title}
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                {building.description}
              </p>
              <ul className="space-y-1.5 sm:space-y-2">
                {building.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                    <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-rcm-gold-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
