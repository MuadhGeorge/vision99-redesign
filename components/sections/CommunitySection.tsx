'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const PROGRAMS = [
  {
    category: 'Prayer & Worship',
    items: [
      'Daily five prayers with congregation',
      'Jumu\'ah (Friday) prayer services',
      'Taraweeh and Eid celebrations',
      'Spiritual retreats and halaqas',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    category: 'Education & Youth',
    items: [
      'Weekend Islamic school',
      'Quran memorization programs',
      'Youth mentorship and activities',
      'Adult education classes',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    category: 'Community Service',
    items: [
      'Food pantry and distributions',
      'Interfaith dialogue events',
      'Neighbor outreach programs',
      'Social services and counseling',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
]

const CAMPUS_SPACES = [
  {
    name: 'Main Prayer Hall',
    description: 'Spacious musalla with natural light and direct qibla orientation.',
    image: '/images/prayer-hall.jpg', // TODO: Add actual image
  },
  {
    name: 'Community Center',
    description: 'Multipurpose hall for events, classes, and gatherings.',
    image: '/images/community-center.jpg', // TODO: Add actual image
  },
  {
    name: 'Educational Wing',
    description: 'Classrooms and library for Islamic education programs.',
    image: '/images/education.jpg', // TODO: Add actual image
  },
  {
    name: 'Outdoor Spaces',
    description: 'Gardens, playground, and gathering areas for all ages.',
    image: '/images/outdoor.jpg', // TODO: Add actual image
  },
]

/**
 * CommunitySection - How the campus will be used
 * 
 * TODO: Replace placeholder content with final Vision99 program details
 * TODO: Add actual images for campus spaces
 */
export default function CommunitySection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      id="community"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 islamic-pattern opacity-20" />
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-emerald-700 font-medium tracking-wider uppercase text-sm mb-4"
          >
            Programs & Spaces
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl text-emerald-950 mb-6"
          >
            A Campus for Community
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Vision99 is designed to be a vibrant hub for spiritual growth, 
            education, and community building—serving Muslims and neighbors 
            throughout North Fulton County.
          </motion.p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Programs List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-display text-2xl text-emerald-950 mb-8">
              How We&apos;ll Use the Campus
            </h3>

            <div className="space-y-8">
              {PROGRAMS.map((program, index) => (
                <div key={program.category} className="flex gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center">
                    {program.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="font-display text-lg text-emerald-900 mb-3">
                      {program.category}
                    </h4>
                    <ul className="space-y-2">
                      {program.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600">
                          <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Campus Spaces Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {CAMPUS_SPACES.map((space, index) => (
              <motion.div
                key={space.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl ${
                  index === 0 ? 'col-span-2' : ''
                }`}
              >
                {/* Placeholder Background - TODO: Replace with actual images */}
                <div 
                  className={`bg-gradient-to-br from-emerald-200 to-emerald-400 ${
                    index === 0 ? 'h-48' : 'h-40'
                  }`}
                >
                  {/* Placeholder pattern */}
                  <div className="absolute inset-0 islamic-pattern opacity-30" />
                  
                  {/* Icon placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/30 rounded-xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/50 to-transparent flex flex-col justify-end p-4">
                  <h4 className="font-display text-white text-lg mb-1">
                    {space.name}
                  </h4>
                  <p className="text-emerald-100 text-sm leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {space.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

