'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Clock, Leaf } from 'lucide-react'

export default function TrueCost() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-deep-navy-900 text-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider text-brand-gold-400 mb-3">
              Investment
            </span>
            <h2 className="section-heading-light">
              The True Cost of Stewardship
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Living Building Challenge certification requires approximately 20% more upfront investment 
              than conventional construction. But this isn&apos;t a cost—it&apos;s an investment in perpetuity.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-gold-500/20 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-brand-gold-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">$300M+ Operational Savings</h3>
                  <p className="text-sm text-gray-400">Projected savings over 100-year building lifespan through energy and water independence.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-gold-500/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-brand-gold-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Generational Legacy</h3>
                  <p className="text-sm text-gray-400">Buildings designed to last centuries, not decades. True stewardship for future generations.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-gold-500/20 flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-6 h-6 text-brand-gold-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Net Positive Impact</h3>
                  <p className="text-sm text-gray-400">A building that gives back more to the environment than it takes.</p>
                </div>
              </div>
            </div>
            
            <Link href="/campaign#founders" className="btn-gold group">
              Secure a Petal. Build the Legacy.
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-deep-navy-800 rounded-2xl p-8 border border-deep-navy-700">
              <h3 className="text-xl font-bold text-white mb-6">Investment Breakdown</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Conventional Construction</span>
                    <span className="text-gray-300">~$16M</span>
                  </div>
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full w-[80%] bg-gray-500 rounded-full" />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">LBC Premium (+20%)</span>
                    <span className="text-brand-gold-400">+$4M</span>
                  </div>
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-r from-brand-gold-500 to-brand-gold-400 rounded-full" />
                  </div>
                </div>
                
                <div className="pt-4 border-t border-deep-navy-600">
                  <div className="flex justify-between">
                    <span className="font-bold text-white">Total Campaign Goal</span>
                    <span className="font-bold text-brand-gold-400 text-xl">$20M</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-brand-green-900/30 rounded-xl border border-brand-green-800/50">
                <p className="text-sm text-brand-green-300">
                  <strong>Return on Investment:</strong> The 20% premium pays for itself within 
                  15 years through operational savings—then generates value for generations.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

