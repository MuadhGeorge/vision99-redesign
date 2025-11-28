'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import GlassCard from '@/components/ui/GlassCard'

/**
 * NarrativeSection - "A Milestone of Pride" with animated backdrop
 */
export default function NarrativeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section
      ref={ref}
      id="vision"
      className="relative min-h-screen flex items-center py-32 pointer-events-auto"
    >
      <motion.div
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ y, opacity }}
      >
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            A Milestone of Pride.{' '}
            <span className="text-teal-400 glow-text-teal">A Legacy of Impact.</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Modeled on the impact of the Prophet&apos;s (PBUH) Masjid in Madinah, Beyond Walls is not just a building—it is a global movement.
          </p>
        </motion.div>

        {/* Hadith Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <GlassCard 
            className="p-10 md:p-14 mb-16 text-center gradient-animate"
            glow="teal"
            float={true}
          >
            <motion.span
              className="text-8xl text-teal-400/30 font-serif block mb-4"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              &ldquo;
            </motion.span>
            <blockquote className="text-white text-xl md:text-2xl lg:text-3xl leading-relaxed font-display -mt-8">
              The most beloved of people to Allah are those who are most beneficial to people.
            </blockquote>
            <footer className="mt-8">
              <cite className="text-teal-400 not-italic text-lg">
                — Prophet Muhammad (PBUH){' '}
                <span className="text-teal-400/60">[Al-Mu&apos;jam Al-Awsat]</span>
              </cite>
            </footer>
          </GlassCard>
        </motion.div>

        {/* Body Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            For decades, we have focused on building walls to protect our community. But the time for isolation has passed. RCM is building a new paradigm—a campus that looks{' '}
            <span className="text-teal-400 font-semibold">Beyond Walls</span>{' '}
            to influence the local community, the global Ummah, and the future of our planet.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
