'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import ImageWithFallback from './ImageWithFallback'

const features = [
  {
    image: '/images/render-playground.jpg',
    alt: 'Colorful children\'s playground surrounded by native landscaping, designed for safe outdoor play and family gatherings',
    title: 'Youth & Family Spaces',
    description: 'Dedicated areas for children to play, learn, and grow—including playgrounds, youth centers, and family-friendly gathering spaces.',
  },
  {
    image: '/images/render-firepit.jpg',
    alt: 'Circular stone fire pit under a majestic oak tree, creating an intimate gathering space for community conversations',
    title: 'Community Gathering',
    description: 'Thoughtfully designed outdoor spaces for community bonding—from the fire pit circle to shaded seating areas under mature trees.',
  },
  {
    image: '/images/render-pavilion.jpg',
    alt: 'Rustic timber pavilion with exposed beams and metal roof, perfect for outdoor prayers and community events',
    title: 'Outdoor Pavilion',
    description: 'A beautiful timber-frame pavilion for overflow prayers, outdoor events, and connecting with nature during worship.',
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={feature.image}
                  alt={feature.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-rcm-green-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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

