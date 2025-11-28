'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const FEATURES = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Net-Positive Energy',
    description: 'Solar arrays generate more energy than the campus consumes, contributing clean power back to the grid.',
    bullets: [
      'Rooftop photovoltaic system',
      'Energy-efficient building envelope',
      'Smart building management',
    ],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Water Stewardship',
    description: 'Responsible water use through collection, treatment, and recycling—honoring water as a sacred trust.',
    bullets: [
      'Rainwater harvesting system',
      'Greywater recycling for irrigation',
      'Low-flow fixtures throughout',
    ],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Healthy Materials',
    description: 'Every material chosen for human health and environmental safety—no toxic chemicals or Red List materials.',
    bullets: [
      'Non-toxic building materials',
      'Natural ventilation design',
      'Biophilic interior elements',
    ],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Nature Connection',
    description: 'Designed to bring the outdoors in, with gardens, natural light, and spaces that connect us to Allah\'s creation.',
    bullets: [
      'Courtyard with native plants',
      'Abundant natural daylight',
      'Outdoor prayer and gathering spaces',
    ],
  },
]

/**
 * LivingBuildingSection - Sustainability goals explained simply
 * 
 * TODO: Replace placeholder content with final Vision99 sustainability details
 */
export default function LivingBuildingSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      id="living-building"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-gradient-to-b from-sand-50 to-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-200 rounded-full blur-3xl opacity-30 -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-40 translate-y-1/2 translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-emerald-700 font-medium tracking-wider uppercase text-sm mb-4"
          >
            Sustainability
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl text-emerald-950 mb-6"
          >
            Living Building Goals
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Inspired by Islamic principles of environmental stewardship (khilafa), 
            Vision99 aims to meet the rigorous Living Building Challenge—creating 
            a campus that gives back more than it takes.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 mb-12">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="flex gap-5">
                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center">
                  {feature.icon}
                </div>

                <div className="flex-1">
                  {/* Title */}
                  <h3 className="font-display text-xl text-emerald-950 mb-2">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2">
                    {feature.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                        <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="relative overflow-hidden bg-gradient-to-r from-emerald-700 to-emerald-800 rounded-2xl p-8 md:p-10 text-center"
        >
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 islamic-pattern" style={{ filter: 'invert(1)' }} />
          </div>

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-4">
              <svg className="w-5 h-5 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-white text-sm font-medium">Living Building Challenge</span>
            </div>

            <h3 className="font-display text-2xl md:text-3xl text-white mb-3">
              Pioneering Faith-Based Sustainability
            </h3>
            <p className="text-emerald-100 max-w-2xl mx-auto">
              Vision99 aims to be one of the first faith-based Living Building campus 
              projects in America—setting a new standard for how places of worship 
              can lead in environmental responsibility.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

