'use client'

import { motion } from 'framer-motion'
import ImageWithFallback from './ImageWithFallback'
import { ArrowRight, Building2, Leaf, Sun, Droplets } from 'lucide-react'

const stats = [
  { icon: Building2, value: '3 Buildings', label: 'on 5 Acres' },
  { icon: Leaf, value: 'Living Building', label: 'Certified Campus' },
  { icon: Sun, value: 'Net-Positive', label: 'Energy & Water' },
  { icon: Droplets, value: '2027', label: 'Target Opening' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-rcm-green-50/30 to-rcm-teal-50/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23166534' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-max section-padding pt-24 md:pt-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="section-label">
              Roswell Community Masjid
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              <span className="text-rcm-green-700">Beyond Walls:</span>
              <br />
              More Than a Building
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
              After years of planning and perseverance, RCM&apos;s new campus is finally breaking ground. 
              This isn&apos;t just construction—it&apos;s the foundation for a <strong className="text-gray-800">vibrant, integrated Muslim community</strong> that 
              will serve generations to come.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#donate" className="btn-primary group">
                Support the Project
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#vision" className="btn-secondary">
                Learn the Vision
              </a>
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-rcm-gold-500 pl-4 italic text-gray-600">
              <p className="mb-2">
                &ldquo;This is us returning to who we are — an ummah that builds with dignity, 
                excellence, and conviction.&rdquo;
              </p>
              <cite className="text-sm font-medium text-rcm-green-700 not-italic">
                — Imam Abdullah Jaber
              </cite>
            </blockquote>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Main Image - Front Entrance View */}
              <div className="aspect-[4/3] relative bg-gray-200">
                <ImageWithFallback
                  src="/images/render-gardens.jpg"
                  alt="Architectural rendering of the RCM Beyond Walls campus entrance featuring lush native gardens, flowering trees, and the modern sanctuary with its distinctive open-frame minaret rising against a clear blue sky"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-rcm-green-100 flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-rcm-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Pursuing</p>
                    <p className="font-bold text-rcm-green-700">Living Building</p>
                    <p className="text-xs text-gray-600">Certification</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Image Peek */}
            <div className="absolute -top-6 -right-6 w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden shadow-xl hidden lg:block border-4 border-white">
              <ImageWithFallback
                src="/images/render-aerial.jpg"
                alt="Aerial view of the complete RCM Beyond Walls campus showing solar panels, landscaped grounds, and the interconnected building complex"
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 md:mt-24"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rcm-green-100 mb-3">
                    <stat.icon className="w-6 h-6 text-rcm-green-600" />
                  </div>
                  <p className="font-bold text-lg md:text-xl text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-rcm-green-500"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

