'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Shield,
  CheckCircle
} from 'lucide-react'
import { staggerContainer, staggerItem } from './animations'
import { useContact } from './ContactContext'

const donationTiers = [
  {
    name: 'Founders Circle',
    amount: '$25,000+',
    description: 'Legacy-level giving that creates lasting impact. Shape the future with naming opportunities and become a permanent part of this historic masjid.',
    features: ['Permanent naming opportunities', 'Lifetime legacy recognition', 'Private campaign briefings', 'Exclusive founding member events', 'Personalized impact reports'],
    cta: 'Become a Legacy Builder',
    popular: false,
    isFounders: true,
  },
  {
    name: 'Community Builders',
    amount: 'Any Amount',
    description: 'Every contribution—whether one-time or monthly—helps build this sanctuary. Join thousands of supporters making this vision a reality.',
    features: ['Tax-deductible receipt', 'Regular project updates', 'Name on community wall', 'Invitation to special events', 'Monthly giving options available'],
    cta: 'Become a Community Builder',
    popular: false,
    isFounders: false,
  },
]

export default function DonateSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { openContactModal } = useContact()

  return (
    <section id="donate" className="section-padding bg-gradient-to-b from-rcm-green-900 to-rcm-green-950 text-white scroll-mt-20" ref={ref}>
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider text-rcm-gold-400 mb-3 sm:mb-4">
            Support the Vision
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Two Ways to Build This Legacy
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-rcm-green-200 max-w-3xl mx-auto px-2">
            Whether you&apos;re called to legacy-level leadership or community-level support, 
            your contribution shapes the future of this sanctuary.
          </p>
        </motion.div>

        {/* Donation Tiers - Two Equal Cards */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-16 items-stretch"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {donationTiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={staggerItem}
              whileHover={{ 
                y: -4, 
                scale: 1.01,
                transition: { duration: 0.2 } 
              }}
              className={`relative rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 flex flex-col transition-shadow duration-300 ${
                tier.isFounders
                  ? 'bg-gradient-to-br from-rcm-green-800 to-rcm-green-900 text-white border-2 border-rcm-gold-400 shadow-2xl hover:shadow-rcm-gold-500/30'
                  : 'bg-white text-gray-900 border-2 border-gray-200 shadow-lg hover:shadow-xl'
              }`}
            >
              <div className="text-center mb-4 sm:mb-6">
                <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${tier.isFounders ? 'text-rcm-gold-400' : 'text-gray-900'}`}>
                  {tier.name}
                </h3>
                <p className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-2 ${tier.isFounders ? 'text-white' : 'text-rcm-green-600'}`}>
                  {tier.amount}
                </p>
                <p className={`text-sm sm:text-base ${tier.isFounders ? 'text-rcm-green-200' : 'text-gray-600'}`}>
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-grow">
                {tier.features.map((feature, fIndex) => (
                  <motion.li 
                    key={fIndex} 
                    className="flex items-center gap-2 sm:gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + fIndex * 0.1 }}
                  >
                    <CheckCircle className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ${tier.isFounders ? 'text-rcm-gold-400' : 'text-rcm-green-500'}`} />
                    <span className={`text-xs sm:text-sm ${tier.isFounders ? 'text-rcm-green-100' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={openContactModal}
                className={`w-full py-3 sm:py-4 px-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base min-h-[44px] ${
                  tier.isFounders
                    ? 'bg-rcm-gold-500 text-gray-900 hover:bg-rcm-gold-400 shadow-lg hover:shadow-xl'
                    : 'bg-rcm-green-600 text-white hover:bg-rcm-green-700 shadow-lg hover:shadow-xl'
                }`}
              >
                {tier.cta}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Financial Integrity Promise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-rcm-green-800/40 border border-rcm-green-700/50 rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Shield className="w-5 h-5 text-rcm-gold-400" />
            <h3 className="text-lg sm:text-xl font-bold text-white">Financial Integrity Promise</h3>
          </div>
          <p className="text-sm sm:text-base text-rcm-green-200 max-w-2xl mx-auto">
            100% of donations go to the Beyond Walls Capital Fund. Audited, transparent, 501(c)(3).
          </p>
        </motion.div>
      </div>
    </section>
  )
}
