'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Heart,
  Award,
  Shield,
  CheckCircle
} from 'lucide-react'
import { staggerContainer, staggerItem } from './animations'

const donationTiers = [
  {
    name: 'Community Builder',
    amount: 'Any Amount',
    description: 'Every contribution helps build this legacy. Join thousands of supporters.',
    features: ['Tax-deductible receipt', 'Project updates', 'Name on community wall'],
    cta: 'Give Now',
    popular: false,
  },
  {
    name: 'Monthly Sustainer',
    amount: '$50+/month',
    description: 'Steady support provides reliable funding for construction milestones.',
    features: ['All Builder benefits', 'Exclusive updates', 'Sustainer recognition', 'Special events access'],
    cta: 'Start Monthly',
    popular: true,
  },
  {
    name: 'Founders Circle',
    amount: '$25,000+',
    description: 'Major gifts that create lasting impact. Naming opportunities available.',
    features: ['All Sustainer benefits', 'Naming opportunities', 'Private briefings', 'Legacy recognition'],
    cta: 'Learn More',
    popular: false,
  },
]

const trustIndicators = [
  { icon: Shield, text: '501(c)(3) Nonprofit' },
  { icon: CheckCircle, text: 'Audited Financials' },
  { icon: Award, text: 'BBB Accredited' },
]

export default function DonateSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
            Build Beyond Walls With Us
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-rcm-green-200 max-w-3xl mx-auto px-2">
            Great movements are built by the many, not the few. Be one of the builders who lays 
            the foundation for this sanctuary. Your contribution carries the barakah of the first generation.
          </p>
        </motion.div>

        {/* Donation Tiers with Stagger */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-16 items-stretch"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {donationTiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={staggerItem}
              whileHover={tier.popular ? { 
                scale: 1.02,
                transition: { duration: 0.2 } 
              } : { 
                y: -4, 
                scale: 1.01,
                transition: { duration: 0.2 } 
              }}
              className={`relative rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 flex flex-col transition-shadow duration-300 ${
                tier.popular
                  ? 'bg-white text-gray-900 shadow-2xl ring-2 ring-rcm-gold-400 hover:shadow-rcm-gold-500/20 sm:col-span-2 lg:col-span-1 order-first sm:order-none'
                  : 'bg-rcm-green-800/50 backdrop-blur border border-rcm-green-700 hover:border-rcm-green-500 hover:shadow-xl hover:shadow-rcm-green-900/50'
              }`}
            >
              {tier.popular && (
                <motion.div 
                  className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-rcm-gold-500 to-rcm-gold-600 text-white text-[10px] sm:text-xs font-bold px-3 sm:px-5 py-1 sm:py-1.5 rounded-full shadow-lg whitespace-nowrap"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Most Popular
                </motion.div>
              )}
              
              <div className="text-center mb-4 sm:mb-6">
                <h3 className={`text-lg sm:text-xl font-bold mb-1 sm:mb-2 ${tier.popular ? 'text-gray-900' : 'text-white'}`}>
                  {tier.name}
                </h3>
                <p className={`text-xl sm:text-2xl md:text-3xl font-bold ${tier.popular ? 'text-rcm-green-600' : 'text-rcm-gold-400'}`}>
                  {tier.amount}
                </p>
                <p className={`text-xs sm:text-sm mt-1 sm:mt-2 ${tier.popular ? 'text-gray-600' : 'text-rcm-green-300'}`}>
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-grow">
                {tier.features.map((feature, fIndex) => (
                  <motion.li 
                    key={fIndex} 
                    className="flex items-center gap-2 sm:gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + fIndex * 0.1 }}
                  >
                    <CheckCircle className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ${tier.popular ? 'text-rcm-green-500' : 'text-rcm-gold-400'}`} />
                    <span className={`text-xs sm:text-sm ${tier.popular ? 'text-gray-600' : 'text-rcm-green-200'}`}>
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 sm:py-3.5 px-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base min-h-[44px] ${
                  tier.popular
                    ? 'bg-rcm-green-600 text-white hover:bg-rcm-green-700 shadow-lg hover:shadow-xl'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/30 hover:border-white/50'
                }`}
              >
                {tier.cta}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Ways to Give */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Other Ways to Give</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm px-2">
            {['Stock Donations', 'DAF Contributions', 'Planned Giving', 'Corporate Matching', 'Zakat Eligible'].map((method, index) => (
              <motion.span 
                key={method}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.05 }}
                whileHover={{ scale: 1.03, y: -2 }}
                className="inline-flex items-center gap-1.5 sm:gap-2 bg-rcm-green-800/60 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full border border-rcm-green-600/50 hover:bg-rcm-green-700/60 hover:border-rcm-green-500/50 transition-all duration-300 cursor-pointer"
              >
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-rcm-gold-400" />
                {method}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-rcm-green-800"
        >
          {trustIndicators.map((indicator, index) => (
            <motion.div 
              key={index} 
              className="flex items-center gap-2 text-rcm-green-300"
              whileHover={{ scale: 1.05, color: '#86efac' }}
            >
              <indicator.icon className="w-5 h-5" />
              <span className="text-sm">{indicator.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Financial Promise */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center text-sm text-rcm-green-400 mt-6"
        >
          100% of your donation goes directly to the Beyond Walls Capital Fund. 
          Secure, encrypted, and tax-deductible.
        </motion.p>
      </div>
    </section>
  )
}
