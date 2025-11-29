'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Building, Leaf, Award } from 'lucide-react'

const partners = [
  {
    icon: Building,
    name: 'Kendeda Building',
    role: 'Living Building Mentor',
    description: 'Georgia Tech\'s Kendeda Building—the largest LBC-certified project in the Southeast—serves as our guide and inspiration.',
  },
  {
    icon: Leaf,
    name: 'Living Future Institute',
    role: 'Certification Partner',
    description: 'The creators and administrators of the Living Building Challenge, ensuring we meet the world\'s most rigorous standards.',
  },
  {
    icon: Award,
    name: 'Design & Construction Team',
    role: 'To Be Announced',
    description: 'Our architecture and general contractor partners will be announced following final selection in Q1 2025.',
  },
]

export default function Partners() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-soft-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label">Collaborators</span>
          <h2 className="section-heading">Strategic Partners</h2>
          <p className="section-subheading mx-auto">
            World-class organizations helping us achieve the world&apos;s most ambitious building standard.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-green-100 flex items-center justify-center mb-4">
                <partner.icon className="w-7 h-7 text-brand-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{partner.name}</h3>
              <p className="text-sm font-medium text-brand-green-600 mb-3">{partner.role}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{partner.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/contact?type=volunteer" className="btn-secondary group">
            Volunteer with Us
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/contact" className="btn-ghost">
            Contact Leadership
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

