'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Zap, 
  Recycle, 
  Users, 
  Sun,
  Wind,
  Heart,
  TreePine,
  Leaf,
  ArrowRight,
  MapPin,
  Sprout
} from 'lucide-react'
import { CountUpOnView, FadeInText } from './CountUpOnView'
import { staggerContainer, staggerItem } from './animations'

interface Metric {
  icon: typeof Zap
  value: string
  numericValue?: number
  suffix?: string
  label: string
  detail: string
  color: string
}

const metrics: Metric[] = [
  {
    icon: Zap,
    value: '105%',
    numericValue: 105,
    suffix: '%',
    label: 'Energy Generated On-Site',
    detail: 'Targeted Net-Positive Energy',
    color: 'gold',
  },
  {
    icon: Sun,
    value: '70%',
    numericValue: 70,
    suffix: '%',
    label: 'Less Energy Use',
    detail: 'vs Conventional Building',
    color: 'green',
  },
  {
    icon: MapPin,
    value: '50%',
    numericValue: 50,
    suffix: '%',
    label: 'Materials Sourced Locally',
    detail: 'Within Georgia / locally sourced',
    color: 'teal',
  },
  {
    icon: Recycle,
    value: '100%',
    numericValue: 100,
    suffix: '%',
    label: 'Waste Diverted from Landfills',
    detail: '0 lbs sent to landfill',
    color: 'green',
  },
  {
    icon: Users,
    value: '20%',
    numericValue: 20,
    suffix: '%',
    label: 'Diverse Contracts',
    detail: 'M/W/DBE Firms',
    color: 'gold',
  },
  {
    icon: Wind,
    value: '75%',
    numericValue: 75,
    suffix: '%',
    label: 'Natural Light Access',
    detail: 'In Occupied Spaces',
    color: 'teal',
  },
  {
    icon: TreePine,
    value: '90%',
    numericValue: 90,
    suffix: '%',
    label: 'Red List Free',
    detail: 'No Toxic Materials',
    color: 'green',
  },
  {
    icon: Heart,
    value: '24/7',
    numericValue: 24,
    suffix: '/7',
    label: 'Community Access',
    detail: 'Designed for All',
    color: 'gold',
  },
  {
    icon: Sprout,
    value: '10%',
    numericValue: 10,
    suffix: '%',
    label: 'Land Dedicated to Agriculture',
    detail: 'On-site productive landscape',
    color: 'green',
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
    <section id="impact" className="section-padding bg-white scroll-mt-20" ref={ref}>
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

        {/* Metrics Grid with Stagger */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {metrics.map((metric) => {
            const colors = getColorClasses(metric.color)
            return (
              <motion.div
                key={metric.label}
                variants={staggerItem}
                whileHover={{ 
                  y: -4, 
                  scale: 1.02,
                  transition: { duration: 0.2 } 
                }}
                className="bg-gray-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 text-center hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-default"
              >
                <motion.div 
                  className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl ${colors.bg} mb-2 sm:mb-4`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <metric.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${colors.icon}`} />
                </motion.div>
                <p className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ${colors.value} mb-0.5 sm:mb-1`}>
                  {metric.numericValue !== undefined ? (
                    <CountUpOnView 
                      target={metric.numericValue} 
                      suffix={metric.suffix || ''} 
                      duration={1.2}
                    />
                  ) : (
                    <FadeInText text={metric.value} />
                  )}
                </p>
                <p className="font-semibold text-gray-900 text-xs sm:text-sm mb-0.5 sm:mb-1">
                  {metric.label}
                </p>
                <p className="text-[10px] sm:text-xs text-gray-500">
                  {metric.detail}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Living Building Challenge Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 sm:mt-12"
        >
          <motion.div 
            className="relative bg-gradient-to-br from-rcm-green-600 to-rcm-teal-600 rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-10 text-white overflow-hidden"
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2.5a.5.5 0 01.8-.4l5 4a.5.5 0 010 .8l-5 4a.5.5 0 01-.8-.4z'/%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 text-center sm:text-left">
                <motion.div 
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center flex-shrink-0"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </motion.div>
                <div>
                  <span className="inline-block px-2 sm:px-3 py-1 bg-white/20 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-2">
                    First Faith-Based Project
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
                    Pursuing Living Building Challenge Certification
                  </h3>
                  <p className="text-rcm-green-100 mt-1 max-w-lg text-sm sm:text-base">
                    The world&apos;s most rigorous proven performance standard for buildings—requiring net-positive 
                    energy, water, and a regenerative impact on the environment.
                  </p>
                </div>
              </div>
              <motion.a 
                href="#vision" 
                className="flex-shrink-0 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-white text-rcm-green-700 font-semibold rounded-lg hover:bg-rcm-green-50 transition-colors shadow-lg text-sm sm:text-base min-h-[44px]"
                whileHover={{ scale: 1.03, x: 2 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
