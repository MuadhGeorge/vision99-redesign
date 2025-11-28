'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import GlassCard, { GlassButton } from '@/components/ui/GlassCard'

const HIGHLIGHT_CARDS = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Our Youth Cannot Wait',
    description: 'They need a "Third Place"—a sanctuary that honors their identity and their future. If we don\'t build it, we lose them.',
    color: 'teal',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Our Tradition Demands Stewardship',
    description: 'The earth is a mosque, yet we have neglected it. This project moves beyond "sustainability" and returns to Khilafah—active, God-conscious stewardship.',
    color: 'emerald',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: 'History Favors the Bold',
    description: 'This is the first time a Muslim community has led the world in sustainable innovation. We are ushering in a new Golden Age.',
    color: 'gold',
  },
]

/**
 * CrossroadsSection - "We Are at a Crossroads" with animated cards
 */
export default function CrossroadsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [80, -80])

  return (
    <section
      ref={ref}
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
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-8">
            We Are at a Crossroads.{' '}
            <span className="text-teal-400 glow-text-teal">The World is Watching.</span>
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-white/70 leading-relaxed">
            <p>
              We have a once-in-a-lifetime opportunity to change the narrative of Islam in the West—or let the moment pass us by.
            </p>
            <p>
              Our community has spent decades &ldquo;fitting in.&rdquo; We built walls to protect ourselves. But the world has changed, and our children are asking for more.
            </p>
            <p>
              They are seeking a faith that speaks to their reality. They are looking for a community that doesn&apos;t just preach stewardship, but{' '}
              <span className="text-teal-400 font-semibold">practices it</span>.
            </p>
          </div>
        </motion.div>

        {/* Three Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {HIGHLIGHT_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
            >
              <GlassCard 
                className="p-8 h-full"
                glow={card.color as any}
                float={true}
                delay={i * 0.1}
              >
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                    card.color === 'teal' ? 'bg-teal-500/20 text-teal-400' :
                    card.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-400' :
                    'bg-amber-500/20 text-amber-400'
                  }`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {card.icon}
                </motion.div>

                <h3 className="font-display text-2xl text-white mb-4">
                  {card.title}
                </h3>

                <p className="text-white/70 leading-relaxed">
                  {card.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <GlassButton href="#donate" variant="primary">
            Make Your Mark on History
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </GlassButton>
        </motion.div>
      </motion.div>
    </section>
  )
}
