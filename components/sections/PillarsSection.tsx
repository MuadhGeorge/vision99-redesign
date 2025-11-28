'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import GlassCard from '@/components/ui/GlassCard'

const SANCTUARY_ITEMS = [
  { subtitle: 'The Village of Belonging', description: 'A nurturing hub built for families, where youth find connection, and where brothers and sisters stand strong in dignity.' },
  { subtitle: 'Faith Reimagined', description: 'A physical environment designed for tranquility, connecting all worshippers to nature. A place for our children to grow rooted in the Deen.' },
  { subtitle: 'Welcome to All', description: 'A mosque that is intentionally open, welcoming Muslims and non-Muslims of all backgrounds for dialogue, education, and social service.' },
]

const BLUEPRINT_ITEMS = [
  { subtitle: 'Prophetic Ethics', description: 'Where Amanah (stewardship) and Ihsan (excellence) become the literal blueprint for every element of the building and our Community.' },
  { subtitle: 'The Historic First', description: 'The World\'s first LBC house of worship, and the first LBC project led by the Muslim community. We are leading, not following.' },
  { subtitle: 'A Solution, Not a Conflict', description: 'Our innovative choice contributes undeniable solutions to a better future for all people, actively countering misconception.' },
]

/**
 * PillarsSection - "Two Pillars. One Vision." with animated split columns
 */
export default function PillarsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const leftX = useTransform(scrollYProgress, [0, 0.5], [-100, 0])
  const rightX = useTransform(scrollYProgress, [0, 0.5], [100, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <section
      ref={ref}
      id="sanctuary"
      className="relative min-h-screen flex items-center py-32 pointer-events-auto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Two Pillars.{' '}
            <span className="text-teal-400 glow-text-teal">One Vision.</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed">
            To answer the call of our youth and the crisis of our time, we are building a campus defined by two uncompromising standards:
          </p>
        </motion.div>

        {/* Two Columns */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left - Sanctuary */}
          <motion.div style={{ x: leftX, opacity }}>
            <GlassCard className="p-8 lg:p-10 h-full" glow="teal" float={true}>
              {/* Header */}
              <div className="mb-8">
                <motion.span
                  className="inline-block px-4 py-1.5 bg-teal-500/20 text-teal-400 text-sm font-semibold rounded-full mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  PILLAR ONE
                </motion.span>
                <h3 className="font-display text-3xl text-white mb-2">A SANCTUARY</h3>
                <p className="text-xl text-teal-400">A Place of Belonging for ALL</p>
              </div>

              {/* Items */}
              <div className="space-y-8">
                {SANCTUARY_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.subtitle}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    className="border-l-2 border-teal-500/30 pl-6"
                  >
                    <h4 className="font-display text-xl text-white mb-2">{item.subtitle}</h4>
                    <p className="text-white/60 leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Right - Blueprint */}
          <motion.div style={{ x: rightX, opacity }}>
            <GlassCard className="p-8 lg:p-10 h-full" glow="gold" float={true}>
              {/* Header */}
              <div className="mb-8">
                <motion.span
                  className="inline-block px-4 py-1.5 bg-amber-500/20 text-amber-400 text-sm font-semibold rounded-full mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  PILLAR TWO
                </motion.span>
                <h3 className="font-display text-3xl text-white mb-2">BLUEPRINT</h3>
                <p className="text-xl text-amber-400">Set A Global Standard</p>
              </div>

              {/* Items */}
              <div className="space-y-8">
                {BLUEPRINT_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.subtitle}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    className="border-l-2 border-amber-500/30 pl-6"
                  >
                    <h4 className="font-display text-xl text-white mb-2">{item.subtitle}</h4>
                    <p className="text-white/60 leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
