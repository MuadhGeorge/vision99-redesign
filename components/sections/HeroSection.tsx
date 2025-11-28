'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import GlassCard, { GlassButton } from '@/components/ui/GlassCard'

/**
 * Cinematic HeroSection - Overlaid on 3D scene
 * 
 * Features:
 * - Glassmorphism cards floating over 3D
 * - Staggered animations on load
 * - Parallax scroll effects
 * - Floating quote with breathing animation
 */
export default function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Parallax values
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -150])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const quoteY = useTransform(scrollYProgress, [0, 1], [0, -80])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-between pointer-events-none"
    >
      {/* Main Hero Content */}
      <motion.div
        className="flex-1 flex items-center pt-24 pb-32"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl pointer-events-auto">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              {/* TODO: Replace with actual V99 RCM logo */}
              <Image
                src="/images/v99-rcm-logo.png"
                alt="Vision99"
                width={180}
                height={60}
                className="h-14 w-auto brightness-0 invert"
                priority
              />
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <GlassCard className="inline-flex items-center gap-3 px-5 py-2.5 mb-8" hover3D={false}>
                <motion.span
                  className="w-2.5 h-2.5 bg-teal-400 rounded-full"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-white/90 text-sm font-medium tracking-wide">
                  The World&apos;s First Living Building Masjid
                </span>
              </GlassCard>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.95] mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="block">Make History</span>
              <span className="block mt-2">
                with{' '}
                <span className="text-teal-400 glow-text-teal">Beyond Walls</span>
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-xl sm:text-2xl text-white/80 font-light mb-10 max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              A Global Vision for All
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <GlassButton href="#donate" variant="gold">
                Make History
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </GlassButton>
              
              <GlassButton href="#partners" variant="secondary">
                Private Donor Call
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </GlassButton>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Floating Quote */}
      <motion.div
        className="w-full pointer-events-auto"
        style={{ y: quoteY }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <GlassCard 
            className="max-w-4xl mx-auto mx-4 sm:mx-auto mb-8 p-8 md:p-10"
            float={true}
            glow="teal"
            hover3D={false}
          >
            <blockquote className="relative">
              <span className="absolute -top-4 -left-2 text-7xl text-teal-400/30 font-serif leading-none">
                &ldquo;
              </span>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed italic pl-8">
                This is us returning to who we are — an ummah that builds with dignity, excellence, and conviction — and daring to set a standard worthy of our faith.
              </p>
              <footer className="mt-6 pl-8">
                <cite className="text-teal-400 not-italic font-medium text-lg">
                  — Imam Abdullah Jaber
                </cite>
              </footer>
            </blockquote>
          </GlassCard>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 pointer-events-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="flex flex-col items-center cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs tracking-widest mb-2">SCROLL</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
