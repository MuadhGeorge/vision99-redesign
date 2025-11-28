'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import GlassCard, { GlassButton } from '@/components/ui/GlassCard'

/**
 * LeadershipCallSection - "A Call to Bold Leadership" with donor CTAs
 */
export default function LeadershipCallSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section
      ref={ref}
      id="donate"
      className="relative min-h-screen flex items-center py-32 pointer-events-auto"
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ y }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-teal-400 text-sm font-medium tracking-widest uppercase">
            Your Moment
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mt-4 mb-6">
            A Call to Bold Leadership
          </h2>
          <p className="text-xl text-white/70 leading-relaxed">
            We are approaching the finish line. The vision is set. The blueprints are ready. The only missing piece is{' '}
            <span className="text-teal-400 font-semibold">you</span>.
          </p>
        </motion.div>

        {/* Two Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Transformational Partners */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlassCard className="p-8 lg:p-10 h-full" glow="gold" float={true}>
              <motion.span
                className="inline-block px-4 py-1.5 bg-amber-500/20 text-amber-400 text-sm font-semibold rounded-full mb-6"
                whileHover={{ scale: 1.05 }}
              >
                FOUNDERS CIRCLE
              </motion.span>

              <h3 className="font-display text-2xl md:text-3xl text-white mb-4">
                For Transformational Partners
              </h3>

              <p className="text-white/70 leading-relaxed mb-8">
                You understand that some opportunities are not just charity—they are legacy. The Founders Circle is for those ready to make a defining investment in the future of Islam in America.
              </p>

              {/* Naming opportunities */}
              <div className="mb-8">
                <h4 className="text-amber-400 font-semibold mb-4">
                  Secure a permanent naming opportunity:
                </h4>
                <ul className="space-y-3">
                  {['The Solar Canopy', 'The Regenerative Gardens', 'The Main Prayer Hall'].map((item, i) => (
                    <motion.li
                      key={item}
                      className="flex items-center gap-3 text-white/80"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <svg className="w-5 h-5 text-amber-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <GlassButton href="#" variant="gold" className="w-full">
                Request a Private Briefing
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </GlassButton>

              <p className="text-center text-white/50 text-sm mt-4">
                Direct access to the Steering Committee
              </p>
            </GlassCard>
          </motion.div>

          {/* Community */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <GlassCard className="p-8 lg:p-10 h-full" glow="teal" float={true}>
              <motion.span
                className="inline-block px-4 py-1.5 bg-teal-500/20 text-teal-400 text-sm font-semibold rounded-full mb-6"
                whileHover={{ scale: 1.05 }}
              >
                COMMUNITY BUILDERS
              </motion.span>

              <h3 className="font-display text-2xl md:text-3xl text-white mb-4">
                For The Community
              </h3>

              <p className="text-white/70 leading-relaxed mb-8">
                Great movements are built by the many, not the few. Be one of the builders who lays the foundation for this sanctuary. Whether it is a one-time gift or a monthly pledge, your contribution carries the Barakah of the first generation.
              </p>

              {/* Giving options */}
              <div className="mb-8">
                <ul className="space-y-3">
                  {['Join the "313" Monthly Sustainers', 'Purchase a "Virtual Brick"', 'Sponsor a Musalla'].map((item, i) => (
                    <motion.li
                      key={item}
                      className="flex items-center gap-3 text-white/80"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <svg className="w-5 h-5 text-teal-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <GlassButton href="#" variant="primary" className="w-full">
                Donate to Make History
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </GlassButton>
            </GlassCard>
          </motion.div>
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-white/50 text-sm mb-4">
            Secure, encrypted, and tax-deductible.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-white/50 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>501(c)(3) Nonprofit</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>Secure Donations</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              <span>Audited Transparency</span>
            </div>
          </div>

          <p className="text-teal-400 text-sm mt-6 font-medium">
            Financial Integrity Promise: 100% of your donation goes directly to the Beyond Walls Capital Fund.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
