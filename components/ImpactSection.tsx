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
  TreePine,
  Leaf,
  ArrowRight
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

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {metrics.map((metric, index) => {
            const colors = getColorClasses(metric.color)
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-gray-50 rounded-2xl p-5 md:p-6 text-center hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${colors.bg} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <metric.icon className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <p className={`text-2xl md:text-3xl lg:text-4xl font-bold ${colors.value} mb-1`}>
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

        {/* Living Building Challenge Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <div className="relative bg-gradient-to-br from-rcm-green-600 to-rcm-teal-600 rounded-2xl p-8 md:p-10 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2.5a.5.5 0 01.8-.4l5 4a.5.5 0 010 .8l-5 4a.5.5 0 01-.8-.4z'/%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
                    First Faith-Based Project
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold">
                    Pursuing Living Building Challenge Certification
                  </h3>
                  <p className="text-rcm-green-100 mt-1 max-w-lg">
                    The world&apos;s most rigorous proven performance standard for buildings—requiring net-positive 
                    energy, water, and a regenerative impact on the environment.
                  </p>
                </div>
              </div>
              <a 
                href="#vision" 
                className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-white text-rcm-green-700 font-semibold rounded-lg hover:bg-rcm-green-50 transition-colors shadow-lg"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

