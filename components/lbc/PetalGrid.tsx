'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Zap, 
  Droplets, 
  Recycle, 
  Scale, 
  Heart, 
  MapPin, 
  Sparkles 
} from 'lucide-react'

const petals = [
  {
    icon: Zap,
    title: 'Energy',
    subtitle: 'Net Positive Energy',
    description: 'Generate 105% of energy needs through rooftop solar arrays. Export surplus to the grid.',
    points: [
      'Rooftop photovoltaic system',
      'High-performance building envelope',
      'Smart energy management',
      'LED lighting throughout',
    ],
    color: 'brand-gold',
  },
  {
    icon: Droplets,
    title: 'Water',
    subtitle: 'Net Zero Water',
    description: 'Capture, treat, and reuse all water on-site. Municipal water use reduced to less than 1/3 typical.',
    points: [
      'Rainwater harvesting',
      'Greywater recycling',
      'Native landscaping',
      'Low-flow fixtures',
    ],
    color: 'rcm-teal',
  },
  {
    icon: Recycle,
    title: 'Materials',
    subtitle: 'Red List Free',
    description: '100% non-toxic materials. No harmful chemicals that damage human or ecological health.',
    points: [
      'Red List chemical elimination',
      'FSC-certified wood',
      'Recycled/reclaimed materials',
      'Local sourcing priority',
    ],
    color: 'brand-green',
  },
  {
    icon: Scale,
    title: 'Equity',
    subtitle: 'JUST Social Equity',
    description: 'Commitment to transparent operations, fair wages, and community benefit.',
    points: [
      '20% diverse contractor goal',
      'Living wage commitment',
      'Community hiring programs',
      'Transparent governance',
    ],
    color: 'brand-gold',
  },
  {
    icon: Heart,
    title: 'Health & Happiness',
    subtitle: 'Human Wellbeing',
    description: 'Spaces designed for physical, mental, and spiritual health.',
    points: [
      '75% natural daylight access',
      'Biophilic design elements',
      'Indoor air quality monitoring',
      'Acoustic comfort design',
    ],
    color: 'rcm-teal',
  },
  {
    icon: MapPin,
    title: 'Place',
    subtitle: 'Context & Integration',
    description: 'Design that honors the land, climate, and community context.',
    points: [
      'Native plant restoration',
      'Habitat creation',
      'Stormwater management',
      'Community connectivity',
    ],
    color: 'brand-green',
  },
  {
    icon: Sparkles,
    title: 'Beauty',
    subtitle: 'Inspiration & Education',
    description: 'Architecture that inspires, educates, and elevates the human spirit.',
    points: [
      'Public art integration',
      'Educational signage',
      'Visitor experience design',
      'Timeless aesthetic',
    ],
    color: 'brand-gold',
  },
]

const getColorClasses = (color: string) => {
  switch (color) {
    case 'brand-gold':
      return {
        bg: 'bg-brand-gold-100',
        icon: 'text-brand-gold-600',
        border: 'border-brand-gold-200',
        hover: 'hover:border-brand-gold-300',
      }
    case 'rcm-teal':
      return {
        bg: 'bg-rcm-teal-100',
        icon: 'text-rcm-teal-600',
        border: 'border-rcm-teal-200',
        hover: 'hover:border-rcm-teal-300',
      }
    default:
      return {
        bg: 'bg-brand-green-100',
        icon: 'text-brand-green-600',
        border: 'border-brand-green-200',
        hover: 'hover:border-brand-green-300',
      }
  }
}

export default function PetalGrid() {
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
          <span className="section-label">The Seven Petals</span>
          <h2 className="section-heading">Performance Categories</h2>
          <p className="section-subheading mx-auto">
            Each petal represents a performance area that must be achieved for full LBC certification.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {petals.map((petal, index) => {
            const colors = getColorClasses(petal.color)
            return (
              <motion.div
                key={petal.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                className={`bg-white rounded-2xl p-6 border ${colors.border} ${colors.hover} 
                           hover:shadow-lg transition-all duration-300`}
              >
                <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}>
                  <petal.icon className={`w-7 h-7 ${colors.icon}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-1">{petal.title}</h3>
                <p className="text-sm font-medium text-gray-500 mb-3">{petal.subtitle}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{petal.description}</p>
                
                <ul className="space-y-2">
                  {petal.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-gray-500">
                      <span className={`w-1.5 h-1.5 rounded-full ${colors.bg.replace('100', '500')} mt-1.5 flex-shrink-0`} />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

