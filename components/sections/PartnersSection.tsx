'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import GlassCard from '@/components/ui/GlassCard'

const PARTNERS = [
  { name: 'Islamic Relief', logo: '/images/partners/islamic-relief.png' },
  { name: 'CAIR', logo: '/images/partners/cair.png' },
  { name: 'Subha Saliha', logo: '/images/partners/subha-saliha.png' },
  { name: 'Partner 4', logo: '/images/partners/partner-4.png' },
  { name: 'Partner 5', logo: '/images/partners/partner-5.png' },
  { name: 'Partner 6', logo: '/images/partners/partner-6.png' },
]

/**
 * Animated Partners Marquee
 */
export default function PartnersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-16 pointer-events-auto">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-sm font-medium text-teal-400 uppercase tracking-widest"
        >
          Proudly Supported By
        </motion.p>
      </div>

      {/* Marquee container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="marquee-container"
      >
        <div className="marquee-track">
          {/* Double the items for seamless loop */}
          {[...PARTNERS, ...PARTNERS].map((partner, i) => (
            <PartnerCard key={`${partner.name}-${i}`} partner={partner} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

function PartnerCard({ partner, index }: { partner: typeof PARTNERS[0]; index: number }) {
  return (
    <motion.div
      className="flex-shrink-0 mx-4"
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <GlassCard 
        className="w-40 h-24 flex items-center justify-center p-4"
        glow="teal"
      >
        {/* TODO: Replace with actual partner logos */}
        <div className="text-center">
          <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-teal-500/20 flex items-center justify-center">
            <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-xs text-white/70 font-medium">{partner.name}</span>
        </div>
      </GlassCard>
    </motion.div>
  )
}
