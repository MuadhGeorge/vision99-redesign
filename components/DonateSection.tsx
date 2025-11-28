'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { 
  Heart, 
  Users, 
  Award,
  ArrowRight,
  Shield,
  CheckCircle
} from 'lucide-react'

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
    <section id="donate" className="section-padding bg-gradient-to-b from-rcm-green-900 to-rcm-green-950 text-white" ref={ref}>
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-rcm-gold-400 mb-4">
            Support the Vision
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Build Beyond Walls With Us
          </h2>
          <p className="text-lg md:text-xl text-rcm-green-200 max-w-3xl mx-auto">
            Great movements are built by the many, not the few. Be one of the builders who lays 
            the foundation for this sanctuary. Your contribution carries the barakah of the first generation.
          </p>
        </motion.div>

        {/* Donation Tiers */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {donationTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`relative rounded-2xl p-6 ${
                tier.popular
                  ? 'bg-white text-gray-900 shadow-2xl scale-105'
                  : 'bg-rcm-green-800/50 backdrop-blur border border-rcm-green-700'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rcm-gold-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className={`text-xl font-bold mb-2 ${tier.popular ? 'text-gray-900' : 'text-white'}`}>
                  {tier.name}
                </h3>
                <p className={`text-2xl font-bold ${tier.popular ? 'text-rcm-green-600' : 'text-rcm-gold-400'}`}>
                  {tier.amount}
                </p>
                <p className={`text-sm mt-2 ${tier.popular ? 'text-gray-600' : 'text-rcm-green-300'}`}>
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-3 mb-6">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2">
                    <CheckCircle className={`w-4 h-4 flex-shrink-0 ${tier.popular ? 'text-rcm-green-500' : 'text-rcm-gold-400'}`} />
                    <span className={`text-sm ${tier.popular ? 'text-gray-600' : 'text-rcm-green-200'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                  tier.popular
                    ? 'bg-rcm-green-600 text-white hover:bg-rcm-green-700 shadow-lg hover:shadow-xl'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Other Ways to Give */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-12"
        >
          <h3 className="text-xl font-bold mb-4">Other Ways to Give</h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-rcm-green-800/50 px-4 py-2 rounded-full border border-rcm-green-700">
              Stock Donations
            </span>
            <span className="bg-rcm-green-800/50 px-4 py-2 rounded-full border border-rcm-green-700">
              DAF Contributions
            </span>
            <span className="bg-rcm-green-800/50 px-4 py-2 rounded-full border border-rcm-green-700">
              Planned Giving
            </span>
            <span className="bg-rcm-green-800/50 px-4 py-2 rounded-full border border-rcm-green-700">
              Corporate Matching
            </span>
            <span className="bg-rcm-green-800/50 px-4 py-2 rounded-full border border-rcm-green-700">
              Zakat Eligible
            </span>
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
            <div key={index} className="flex items-center gap-2 text-rcm-green-300">
              <indicator.icon className="w-5 h-5" />
              <span className="text-sm">{indicator.text}</span>
            </div>
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

