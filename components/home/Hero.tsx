'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-soft-gray-50 via-white to-brand-green-50/30" />
      
      <div className="container-max relative z-10 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image - First on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] relative bg-gray-100">
                <Image
                  src="/Photos/Copy of P2874-RCC-EXT-01_05.png"
                  alt="Architectural rendering of the RCM Beyond Walls campus - the world's first Living Building Challenge masjid"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            
            {/* Floating quote card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="hidden sm:block absolute -bottom-6 -left-6 lg:-left-8 max-w-xs bg-white rounded-xl shadow-xl p-4 border border-gray-100"
            >
              <p className="text-sm text-gray-600 italic leading-relaxed">
                &ldquo;The first generation to lead in sustainable innovation. A revival of Muslim legacy.&rdquo;
              </p>
              <p className="text-xs text-brand-green-700 font-medium mt-2">
                — RCM Vision Statement
              </p>
            </motion.div>
          </motion.div>
          
          {/* Content - Second on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-brand-gold-600 mb-4">
              <span className="w-8 h-px bg-brand-gold-400" />
              World&apos;s First
            </span>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-gray-900 leading-[1.1] mb-6">
              <span className="text-brand-green-700">Beyond Walls:</span>
              <br />
              <span className="text-gray-800">Building the World&apos;s First Living Building Challenge Masjid</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed max-w-lg font-medium">
              Faith in action. Innovation by design.
            </p>
            
            {/* Key dates */}
            <div className="flex flex-wrap gap-4 sm:gap-6 mb-8 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-4 h-4 text-brand-green-600" />
                <span><strong>Groundbreaking:</strong> Dec 6, 2025</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-4 h-4 text-brand-green-600" />
                <span><strong>Construction:</strong> Jan 2026</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/campaign#founders" className="btn-gold group">
                Join the Founders Circle
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact?type=briefing" className="btn-ghost">
                Schedule a Private Donor Briefing
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

