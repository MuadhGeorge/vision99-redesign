'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Crown, Users, Shield, Check } from 'lucide-react'

const foundersPerks = [
  'Solar Canopy Naming',
  'Regenerative Gardens',
  'Main Prayer Hall',
  'Youth Innovation Center',
]

const buildersPerks = [
  'Join the "313" Monthly Sustainers',
  'Purchase a Virtual Brick',
  'Sponsor a Musalla',
  'Community Wall Recognition',
]

export default function TheAsk() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-max">
        {/* A Call to Bold Leadership - Main Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="section-label">Join Us</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            A Call to Bold Leadership
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-gray-600 leading-relaxed">
            The vision is set. The blueprints are ready. The only missing piece is the people
            willing to lead this moment for the Ummah and for humanity.
          </p>
        </motion.div>

        {/* Goal / Progress Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-md mx-auto mb-10"
        >
          <div className="space-y-2">
            <div className="flex items-baseline justify-between text-sm text-gray-700">
              <span className="font-semibold text-gray-900">Capital Campaign Goal</span>
              <span className="font-bold text-brand-green-700">$20M</span>
            </div>
            {/* Placeholder progress bar – static for now */}
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-200">
              <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-brand-green-500 to-brand-green-600" />
            </div>
            <p className="text-xs text-gray-500 text-center">
              Progress bar is illustrative. Live campaign totals will be added later.
            </p>
          </div>
        </motion.div>

        {/* Two Ways Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center mb-8"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
            Two Ways to Build This Legacy
          </h3>
        </motion.div>

        {/* Two Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Founders Circle Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-deep-navy-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 overflow-hidden"
          >
            {/* Gold accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold-500/10 rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-brand-gold-500/20 flex items-center justify-center">
                  <Crown className="w-6 h-6 text-brand-gold-400" />
                </div>
                <div>
                  <span className="text-brand-gold-400 text-xs font-semibold uppercase tracking-wider">
                    For Transformational Partners
                  </span>
                </div>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Founders Circle
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Legacy-level giving for visionary donors. Naming opportunities, 
                direct steering committee access, and a permanent place in history.
              </p>
              
              <div className="space-y-3 mb-8">
                <p className="text-sm font-medium text-brand-gold-400">Naming Opportunities:</p>
                {foundersPerks.map((perk) => (
                  <div key={perk} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-brand-gold-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{perk}</span>
                  </div>
                ))}
              </div>
              
              <Link 
                href="/contact?type=briefing" 
                className="btn-gold w-full justify-center group"
              >
                Request a Private Briefing
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                Direct access to steering committee
              </p>
            </div>
          </motion.div>

          {/* Builders Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-brand-green-200 overflow-hidden"
          >
            {/* Green accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green-500/5 rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-brand-green-100 flex items-center justify-center">
                  <Users className="w-6 h-6 text-brand-green-600" />
                </div>
                <div>
                  <span className="text-brand-green-600 text-xs font-semibold uppercase tracking-wider">
                    For the Community
                  </span>
                </div>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Community Builders
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Great movements are built by many. One-time or monthly giving 
                that connects you to something historic.
              </p>
              
              <div className="space-y-3 mb-8">
                <p className="text-sm font-medium text-brand-green-700">Ways to Contribute:</p>
                {buildersPerks.map((perk) => (
                  <div key={perk} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-brand-green-500 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{perk}</span>
                  </div>
                ))}
              </div>
              
              <Link 
                href="/campaign#donate" 
                className="btn-primary w-full justify-center group"
              >
                Donate to Make History
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                Secure, tax-deductible
              </p>
            </div>
          </motion.div>
        </div>

        {/* Trust Seal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-soft-gray-50 rounded-full px-6 py-3 border border-gray-200">
            <Shield className="w-5 h-5 text-brand-green-600" />
            <p className="text-sm text-gray-600">
              <strong>Financial Integrity Promise:</strong> 100% of donations go to the Beyond Walls Capital Fund. 
              Audited, transparent, 501(c)(3).
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

