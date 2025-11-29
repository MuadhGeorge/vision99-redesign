'use client'

import { motion } from 'framer-motion'

export default function LeadershipHero() {
  return (
    <section className="relative pt-24 sm:pt-28 pb-16 sm:pb-20 bg-gradient-to-br from-deep-navy-950 via-deep-navy-900 to-deep-navy-950">
      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider text-brand-gold-400 mb-4">
            Leadership & Team
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Stewards of a Historic Trust
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            Decades of professional expertise combined with deep spiritual commitment. 
            Our leadership brings together business acumen, community roots, and 
            unwavering dedication to excellence.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

