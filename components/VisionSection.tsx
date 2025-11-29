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
    icon: Sparkles,
    title: 'Generational Legacy',
    description: 'A next-generation incubator with youth spaces, mentorship programs, and innovation labs to secure our children\'s whole identity.',
    color: 'rcm-gold',
  },
  {
    icon: Shield,
    title: 'Institutional Resilience',
    description: 'A permanent home built to last centuries—financially sustainable, structurally sound, and spiritually anchored.',
    color: 'rcm-green',
  },
  {
    icon: Heart,
    title: 'Radically Inclusive Sanctuary',
    description: 'A welcoming space for all—families, reverts, seekers, and neighbors—where everyone finds belonging.',
    color: 'rcm-teal',
  },
  {
    icon: Leaf,
    title: 'Stewardship in Action',
    description: 'A campus designed to be net-positive for energy and water, honoring the Islamic mandate of environmental stewardship.',
    color: 'rcm-green',
  },
  {
    icon: Globe,
    title: 'Global & National Influence',
    description: 'A model for Muslim communities worldwide—proving we can lead in sustainability, design, and community building.',
    color: 'rcm-teal',
  },
  {
    icon: Users,
    title: 'Community-First Design',
    description: 'Every space designed with input from families, youth, and elders to serve real community needs.',
    color: 'rcm-gold',
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
            This project isn&apos;t just a building—it&apos;s a long-term institution designed to address 
            the real challenges facing American Muslim communities: youth identity crises, mental health stigma, 
            social isolation, and the need for belonging.
          </p>
        </motion.div>

        {/* Five Core Promises Label */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-rcm-green-700 mb-8">
            The Five Core Promises
          </p>
        </motion.div>

        {/* Promise Cards Grid with Stagger */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                  y: -6, 
                  scale: 1.02,
                  transition: { duration: 0.2, ease: 'easeOut' } 
                }}
                className={`group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-default ${colors.border}`}
              >
                <motion.div 
                  className={`w-14 h-14 rounded-xl ${colors.bg} ${colors.bgHover} flex items-center justify-center mb-4 transition-colors duration-300`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <promise.icon className={`w-7 h-7 ${colors.icon}`} />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-rcm-green-700 transition-colors">
                  {promise.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
