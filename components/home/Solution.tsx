'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Home, 
  Sparkles, 
  Heart, 
  BookOpen, 
  Globe, 
  Lightbulb 
} from 'lucide-react'

const sanctuaryItems = [
  {
    icon: Home,
    title: 'Village of Belonging',
    description: 'A family and youth hub where every generation finds their place—from toddlers to elders.',
  },
  {
    icon: Sparkles,
    title: 'Faith Reimagined',
    description: 'A tranquil, nature-connected worship environment that elevates the soul and inspires devotion.',
  },
  {
    icon: Heart,
    title: 'Welcome to All',
    description: 'Open doors for Muslims and non-Muslims alike—for dialogue, education, and service.',
  },
]

const blueprintItems = [
  {
    icon: BookOpen,
    title: 'Prophetic Ethics',
    description: 'Stewardship and excellence embedded in every design decision, honoring our traditions.',
  },
  {
    icon: Globe,
    title: 'Historic First',
    description: 'The world\'s first Living Building Challenge house of worship, led by a Muslim community.',
  },
  {
    icon: Lightbulb,
    title: 'A Solution, Not a Conflict',
    description: 'Tangible solutions that counter misconceptions and demonstrate Islam\'s commitment to humanity.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
}

export default function Solution() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-soft-gray-50">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="section-label">The Solution</span>
          <h2 className="section-heading">Two Pillars. One Vision.</h2>
          <p className="section-subheading mx-auto">
            To address the challenges facing our youth and our planet, we&apos;re building a campus 
            defined by <strong className="text-gray-800">Sanctuary</strong> and <strong className="text-gray-800">Blueprint</strong>.
          </p>
        </motion.div>

        {/* Two-Column Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Sanctuary Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Sanctuary
              </h3>
              <p className="text-brand-green-700 font-medium">
                A Place of Belonging for All
              </p>
            </div>
            
            <div className="space-y-4">
              {sanctuaryItems.map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="bg-white rounded-xl p-5 sm:p-6 border border-gray-100 shadow-sm 
                           hover:shadow-lg hover:border-brand-green-200 transition-all duration-300"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-green-100 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-brand-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Blueprint Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Blueprint
              </h3>
              <p className="text-brand-gold-600 font-medium">
                Setting a Global Standard
              </p>
            </div>
            
            <div className="space-y-4">
              {blueprintItems.map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="bg-white rounded-xl p-5 sm:p-6 border border-gray-100 shadow-sm 
                           hover:shadow-lg hover:border-brand-gold-200 transition-all duration-300"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-gold-100 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-brand-gold-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

