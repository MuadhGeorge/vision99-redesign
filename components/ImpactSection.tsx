'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Zap, 
  Droplets, 
  Recycle, 
  Users, 
  Sun,
  Wind,
  Heart,
  TreePine
} from 'lucide-react'

const metrics = [
  {
    icon: Zap,
    value: '105%',
    label: 'Energy Generated On-Site',
    detail: 'Targeted Net-Positive Energy',
    color: 'gold',
  },
  {
    icon: Sun,
    value: '70%',
    label: 'Less Energy Use',
    detail: 'vs Conventional Building',
    color: 'green',
  },
  {
    icon: Droplets,
    value: '<1/3',
    label: 'Municipal Water Use',
    detail: 'vs Typical Building',
    color: 'teal',
  },
  {
    icon: Recycle,
    value: '80%',
    label: 'Construction Waste',
    detail: 'Diverted from Landfills',
    color: 'green',
  },
  {
    icon: Users,
    value: '20%',
    label: 'Diverse Contracts',
    detail: 'M/W/DBE Firms',
    color: 'gold',
  },
  {
    icon: Wind,
    value: '75%',
    label: 'Natural Light Access',
    detail: 'In Occupied Spaces',
    color: 'teal',
  },
  {
    icon: TreePine,
    value: '100%',
    label: 'Red List Free',
    detail: 'No Toxic Materials',
    color: 'green',
  },
  {
    icon: Heart,
    value: '24/7',
    label: 'Community Access',
    detail: 'Designed for All',
    color: 'gold',
  },
]

const getColorClasses = (color: string) => {
  switch (color) {
    case 'gold':
      return {
        bg: 'bg-rcm-gold-100',
        icon: 'text-rcm-gold-600',
        value: 'text-rcm-gold-700',
      }
    case 'teal':
      return {
        bg: 'bg-rcm-teal-100',
        icon: 'text-rcm-teal-600',
        value: 'text-rcm-teal-700',
      }
    default:
      return {
        bg: 'bg-rcm-green-100',
        icon: 'text-rcm-green-600',
        value: 'text-rcm-green-700',
      }
  }
}

export default function ImpactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="impact" className="section-padding bg-white" ref={ref}>
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Measured Impact</span>
          <h2 className="section-heading">Sustainability by the Numbers</h2>
          <p className="section-subheading mx-auto">
            Our commitment to stewardship isn&apos;t just words—it&apos;s built into every design decision. 
            Here&apos;s what the Living Building Challenge means in practice.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {metrics.map((metric, index) => {
            const colors = getColorClasses(metric.color)
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-gray-50 rounded-2xl p-5 md:p-6 text-center hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${colors.bg} mb-4`}>
                  <metric.icon className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <p className={`text-2xl md:text-3xl font-bold ${colors.value} mb-1`}>
                  {metric.value}
                </p>
                <p className="font-semibold text-gray-900 text-sm mb-1">
                  {metric.label}
                </p>
                <p className="text-xs text-gray-500">
                  {metric.detail}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-rcm-green-50 rounded-2xl px-8 py-6 border border-rcm-green-100">
            <p className="text-rcm-green-800 font-medium mb-2">
              🌱 Pursuing Living Building Challenge Certification
            </p>
            <p className="text-sm text-rcm-green-600">
              The world&apos;s most rigorous proven performance standard for buildings
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

