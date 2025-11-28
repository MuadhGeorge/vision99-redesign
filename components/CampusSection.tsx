'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import ImageWithFallback from './ImageWithFallback'
import { 
  Home, 
  GraduationCap, 
  Users,
  CheckCircle
} from 'lucide-react'

const buildings = [
  {
    icon: Home,
    title: 'Masjid & Sanctuary',
    description: 'A serene space for daily prayers, Friday gatherings, and spiritual reflection. Designed with natural light, acoustic excellence, and accessibility for all.',
    features: ['Prayer halls for men & women', 'Wudu facilities', 'Imam offices'],
  },
  {
    icon: GraduationCap,
    title: 'Next-Generation Youth Center',
    description: 'A dedicated space where young Muslims can grow, learn, and connect. Mentorship programs, study spaces, and activities that speak to their reality.',
    features: ['Tech & innovation lab', 'Sports & recreation', 'Mentorship programs'],
  },
  {
    icon: Users,
    title: 'Family Hub & Community Spaces',
    description: 'Multi-purpose spaces for community gatherings, educational programs, mental health support, and celebrations that bring families together.',
    features: ['Community kitchen', 'Event spaces', 'Counseling rooms'],
  },
]

const campusFeatures = [
  '~5-acre site with integrated landscaping',
  '8+ months of horizontal site work (clearing, utilities, parking)',
  'First faith-based project pursuing Living Building Challenge',
  'Designed for accessibility and multigenerational use',
]

export default function CampusSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="campus" className="section-padding bg-gray-50" ref={ref}>
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our new campus spans approximately <strong className="text-gray-800">5 acres</strong> with 
              <strong className="text-gray-800"> three dedicated buildings</strong> designed to serve every 
              member of our community—from our youngest children to our honored elders.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              This is the <strong className="text-gray-800">first faith-based project</strong> in the country 
              pursuing Living Building Challenge certification, setting a new standard for what a house of 
              worship can be.
            </p>

            <ul className="space-y-4">
              {campusFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-rcm-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-[4/3] relative bg-gray-200">
                <ImageWithFallback
                  src="/images/render-front.jpg"
                  alt="Front entrance view of the RCM Beyond Walls campus showing the modern white stone facade with horizontal textures, warm wood accents, and the distinctive geometric mashrabiya screens on the entrance"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            
            {/* Accent Image */}
            <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-xl overflow-hidden shadow-xl border-4 border-white hidden lg:block">
              <ImageWithFallback
                src="/images/render-side.jpg"
                alt="Side view of the campus from the landscaped gardens, showing the interconnected buildings and natural surroundings"
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>
          </motion.div>
        </div>

        {/* Building Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Three Buildings, One Community
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {buildings.map((building, index) => (
            <motion.div
              key={building.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="card card-hover bg-white"
            >
              <div className="w-14 h-14 rounded-xl bg-rcm-green-100 flex items-center justify-center mb-4">
                <building.icon className="w-7 h-7 text-rcm-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {building.title}
              </h4>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {building.description}
              </p>
              <ul className="space-y-2">
                {building.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-rcm-gold-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

