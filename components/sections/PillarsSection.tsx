'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SANCTUARY_ITEMS = [
  {
    subtitle: 'The Village of Belonging',
    description: 'A nurturing hub built for families, where youth find connection, and where brothers and sisters stand strong in dignity.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    subtitle: 'Faith Reimagined',
    description: 'A physical environment designed for tranquility, connecting all worshippers to nature. A place for our children to grow rooted in the Deen.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    subtitle: 'Welcome to All',
    description: 'A mosque that is intentionally open, welcoming Muslims and non-Muslims of all backgrounds for dialogue, education, and social service.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
]

const BLUEPRINT_ITEMS = [
  {
    subtitle: 'Prophetic Ethics',
    description: 'Where Amanah (stewardship) and Ihsan (excellence) become the literal blueprint for every element of the building and our Community.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    subtitle: 'The Historic First',
    description: 'The World\'s first LBC house of worship, and the first LBC project led by the Muslim community. We are leading, not following.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    subtitle: 'A Solution, Not a Conflict',
    description: 'Our innovative choice contributes undeniable solutions to a better future for all people, actively countering misconception.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
]

/**
 * PillarsSection - "Two Pillars. One Vision."
 * 
 * Sanctuary (A Place of Belonging) + Blueprint (Set A Global Standard)
 */
export default function PillarsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      id="sanctuary"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 islamic-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6">
            Two Pillars.{' '}
            <span className="text-teal-700">One Vision.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            To answer the call of our youth and the crisis of our time, we are building a campus defined by two uncompromising standards:
          </p>
        </motion.div>

        {/* Two Columns */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Sanctuary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pillar-card bg-gradient-to-br from-teal-50 to-white rounded-2xl p-8 lg:p-10 shadow-lg"
          >
            {/* Pillar Header */}
            <div className="mb-8">
              <span className="inline-block px-4 py-1 bg-teal-100 text-teal-700 text-sm font-semibold rounded-full mb-4">
                PILLAR ONE
              </span>
              <h3 className="font-display text-3xl text-teal-800 mb-2">
                A SANCTUARY
              </h3>
              <p className="text-xl text-teal-600 font-medium">
                A Place of Belonging for ALL
              </p>
            </div>

            {/* Sanctuary Items */}
            <div className="space-y-8">
              {SANCTUARY_ITEMS.map((item, index) => (
                <div key={item.subtitle} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-100 text-teal-700 rounded-xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-display text-xl text-gray-900 mb-2">
                      {item.subtitle}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Blueprint */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pillar-card bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 lg:p-10 shadow-lg"
          >
            {/* Pillar Header */}
            <div className="mb-8">
              <span className="inline-block px-4 py-1 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full mb-4">
                PILLAR TWO
              </span>
              <h3 className="font-display text-3xl text-amber-800 mb-2">
                BLUEPRINT
              </h3>
              <p className="text-xl text-amber-600 font-medium">
                Set A Global Standard
              </p>
            </div>

            {/* Blueprint Items */}
            <div className="space-y-8">
              {BLUEPRINT_ITEMS.map((item, index) => (
                <div key={item.subtitle} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-display text-xl text-gray-900 mb-2">
                      {item.subtitle}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

