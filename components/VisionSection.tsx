'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Heart, 
  Shield, 
  Users, 
  Leaf, 
  Globe,
  Sparkles
} from 'lucide-react'
import { staggerContainer, staggerItem } from './animations'

const promises = [
  {
    icon: Users,
    title: 'Community-First Design',
    description: 'Every space designed with input from families, youth, and elders to serve real community needs.',
    color: 'rcm-gold',
  },
  {
    icon: Heart,
    title: 'Radically Inclusive Sanctuary',
    description: 'A welcoming space for all—families, reverts, seekers, and neighbors—where everyone finds belonging.',
    color: 'rcm-teal',
  },
  {
    icon: Sparkles,
    title: 'Generational Legacy',
    description: 'A next-generation incubator with youth spaces, mentorship programs, and innovation labs to secure our children\'s whole identity.',
    color: 'rcm-gold',
  },
  {
    icon: Globe,
    title: 'Global & National Influence',
    description: 'A model for Muslim communities worldwide—proving we can lead in sustainability, design, and community building.',
    color: 'rcm-teal',
  },
  {
    icon: Shield,
    title: 'Institutional Resilience',
    description: 'A permanent home built to last centuries—financially sustainable, structurally sound, and spiritually anchored.',
    color: 'rcm-green',
  },
  {
    icon: Leaf,
    title: 'Stewardship in Action',
    description: 'A campus designed to be net-positive for energy and water, honoring the Islamic mandate of environmental stewardship.',
    color: 'rcm-green',
  },
]

const getColorClasses = (color: string) => {
  switch (color) {
    case 'rcm-gold':
      return {
        bg: 'bg-rcm-gold-100',
        bgHover: 'group-hover:bg-rcm-gold-200',
        icon: 'text-rcm-gold-600',
        border: 'hover:border-rcm-gold-300',
      }
    case 'rcm-teal':
      return {
        bg: 'bg-rcm-teal-100',
        bgHover: 'group-hover:bg-rcm-teal-200',
        icon: 'text-rcm-teal-600',
        border: 'hover:border-rcm-teal-300',
      }
    default:
      return {
        bg: 'bg-rcm-green-100',
        bgHover: 'group-hover:bg-rcm-green-200',
        icon: 'text-rcm-green-600',
        border: 'hover:border-rcm-green-300',
      }
  }
}

export default function VisionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="vision" className="section-padding bg-white scroll-mt-20" ref={ref}>
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Our Vision</span>
          <h2 className="section-heading">Why &ldquo;Beyond Walls&rdquo;?</h2>
          <p className="section-subheading mx-auto">
            Beyond Walls is more than a building—it&apos;s a global movement. A campus that influences 
            our local community, inspires the global Ummah, and honors our planet.
          </p>
        </motion.div>

        {/* Six Core Promises Label */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-rcm-green-700 mb-8">
            The Six Core Promises
          </p>
        </motion.div>

        {/* Promise Cards Grid with Stagger */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {promises.map((promise) => {
            const colors = getColorClasses(promise.color)
            return (
              <motion.div
                key={promise.title}
                variants={staggerItem}
                whileHover={{ 
                  y: -4, 
                  scale: 1.01,
                  transition: { duration: 0.2, ease: 'easeOut' } 
                }}
                className={`group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-default ${colors.border}`}
              >
                <motion.div 
                  className={`w-11 h-11 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl ${colors.bg} ${colors.bgHover} flex items-center justify-center mb-3 sm:mb-4 transition-colors duration-300`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <promise.icon className={`w-5 h-5 sm:w-7 sm:h-7 ${colors.icon}`} />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2 group-hover:text-rcm-green-700 transition-colors">
                  {promise.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {promise.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
