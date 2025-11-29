'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function LBCHero() {
  return (
    <section className="relative pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Photos/Copy of P2874-RCC-EXT-07_05.png"
          alt="Aerial view of the Beyond Walls campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-navy-950/95 via-deep-navy-900/85 to-deep-navy-900/70" />
      </div>
      
      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider text-brand-gold-400 mb-4">
            Project Details
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            The Blueprint: Achieving the World&apos;s Most Rigorous Building Standard
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
            Seven petals. One prophetic vision. The Living Building Challenge represents 
            the highest bar for sustainable architecture—and we&apos;re pursuing full certification.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/20">
              <p className="text-brand-gold-400 font-bold text-2xl">7</p>
              <p className="text-xs text-gray-300">Performance Petals</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/20">
              <p className="text-brand-gold-400 font-bold text-2xl">20+</p>
              <p className="text-xs text-gray-300">Imperatives</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/20">
              <p className="text-brand-gold-400 font-bold text-2xl">1st</p>
              <p className="text-xs text-gray-300">Faith-Based LBC Project</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

