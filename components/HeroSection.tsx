'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Building2, Leaf, Sun, Calendar } from 'lucide-react'
import { sectionImages, exteriorPhotos, getAltText } from '@/lib/imageMap'

/**
 * Hero Section - Main campaign landing
 * Images: EXT-01 (main), EXT-02 (secondary peek)
 * 
 * ALTERNATE LAYOUT OPTION (not currently active):
 * For a background image variant, the architectural render could be set as the full background
 * with the hero text block positioned as a foreground card with semi-transparent backdrop.
 * To implement: Set heroImage as section background-image, add backdrop-blur to text container,
 * and adjust text container to be a card overlay with bg-white/90 or similar.
 */

const stats = [
  { icon: Building2, value: '3 Buildings', label: 'on 5.5 Acres', color: 'bg-rcm-green-100 text-rcm-green-600' },
  { icon: Sun, value: 'Net-Positive', label: 'Energy & Water', color: 'bg-rcm-gold-100 text-rcm-gold-600' },
  { icon: Leaf, value: '1st LBC', label: 'House of Worship', color: 'bg-rcm-teal-100 text-rcm-teal-600' },
]

const heroImage = sectionImages.hero
const secondaryImage = exteriorPhotos[1] ?? exteriorPhotos[0]

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[80vh] flex items-center overflow-hidden pb-4 sm:pb-6 md:pb-8">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-rcm-green-50/60 via-white to-rcm-teal-50/40" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" aria-hidden="true">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23166534' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-max section-padding pt-20 sm:pt-24 md:pt-32 pb-0 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Text Content - Shows second on mobile, first on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="order-2 lg:order-1"
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-rcm-gold-600 mb-4">
              <span className="w-8 h-px bg-rcm-gold-400" />
              Roswell Community Masjid
            </span>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-4 sm:mb-6">
              <span className="text-rcm-green-700">Beyond Walls:</span>
              <br />
              <span className="text-gray-800">Building the World&apos;s First Living Building Challenge Masjid</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-6 sm:mb-8 italic">
              Faith in action. Innovation by design.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
              <a href="#donate" className="btn-primary group">
                Support the Project
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#vision" className="btn-secondary">
                Learn the Vision
              </a>
            </div>

            {/* Quote Card - Refined */}
            <div className="rounded-xl sm:rounded-2xl border border-rcm-green-200 bg-gradient-to-br from-rcm-green-50/80 to-rcm-teal-50/60 p-5 sm:p-6">
              <blockquote>
                <p className="text-sm sm:text-base text-gray-700 italic leading-relaxed">
                  &ldquo;This is us returning to who we are — an ummah that builds with dignity, 
                  excellence, and conviction.&rdquo;
                </p>
                <footer className="mt-2 sm:mt-3 text-xs sm:text-sm font-medium text-rcm-green-700">
                  — Imam Abdullah Jaber, Roswell Community Masjid
                </footer>
              </blockquote>
            </div>
          </motion.div>

          {/* Image - Shows first on mobile, second on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-900/10">
                <div className="aspect-[4/3] relative bg-gray-100">
                  <Image
                    src={heroImage.src}
                    alt={getAltText.exterior(heroImage.name)}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              
              {/* Floating Badge - Hidden on very small screens, repositioned on mobile */}
              <motion.div 
                className="hidden sm:block absolute -bottom-3 sm:-bottom-4 left-2 sm:-left-4 bg-white rounded-lg sm:rounded-xl shadow-xl p-3 sm:p-4 border border-gray-100 max-w-[180px] sm:max-w-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-rcm-green-500 to-rcm-teal-500 flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-wider font-medium">Pursuing</p>
                    <p className="font-bold text-rcm-green-700 text-xs sm:text-sm">Living Building</p>
                    <p className="text-[9px] sm:text-[10px] text-gray-500">Certification</p>
                  </div>
                </div>
              </motion.div>

              {/* Secondary Image */}
              <div className="absolute -top-4 -right-4 w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden shadow-xl hidden lg:block border-4 border-white">
                <Image
                  src={secondaryImage.src}
                  alt={getAltText.exterior(secondaryImage.name)}
                  fill
                  className="object-cover"
                  sizes="144px"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 sm:mt-12 md:mt-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6 text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className={`inline-flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl ${stat.color.split(' ')[0]} mb-2 sm:mb-3`}>
                  <stat.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${stat.color.split(' ')[1]}`} />
                </div>
                <p className="font-bold text-gray-900 text-sm sm:text-base">{stat.value}</p>
                <p className="text-xs sm:text-sm text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
