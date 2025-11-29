'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Building2, Leaf, Sun, Calendar } from 'lucide-react'
import { sectionImages, exteriorPhotos, getAltText } from '@/lib/imageMap'

/**
 * Hero Section - Main campaign landing
 * Images: EXT-01 (main), EXT-02 (secondary peek)
 */

const stats = [
  { icon: Building2, value: '3 Buildings', label: 'on 5 Acres', color: 'bg-rcm-green-100 text-rcm-green-600' },
  { icon: Leaf, value: 'Living Building', label: 'Certification', color: 'bg-rcm-teal-100 text-rcm-teal-600' },
  { icon: Sun, value: 'Net-Positive', label: 'Energy & Water', color: 'bg-rcm-gold-100 text-rcm-gold-600' },
  { icon: Calendar, value: '2027', label: 'Target Opening', color: 'bg-rcm-green-100 text-rcm-green-600' },
]

const heroImage = sectionImages.hero
const secondaryImage = exteriorPhotos[1] ?? exteriorPhotos[0]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
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

      <div className="container-max section-padding pt-24 md:pt-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-rcm-gold-600 mb-4">
              <span className="w-8 h-px bg-rcm-gold-400" />
              Roswell Community Masjid
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-6">
              <span className="text-rcm-green-700">Beyond Walls:</span>
              <br />
              <span className="text-gray-800">More Than a Building</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              After years of planning and perseverance, RCM&apos;s new campus is finally breaking ground. 
              This isn&apos;t just construction—it&apos;s the foundation for a{' '}
              <strong className="text-gray-800 font-semibold">vibrant, integrated Muslim community</strong> that 
              will serve generations to come.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#donate" className="btn-primary group">
                Support the Project
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#vision" className="btn-secondary">
                Learn the Vision
              </a>
            </div>

            {/* Quote Card - Refined */}
            <div className="rounded-2xl border border-rcm-green-200 bg-gradient-to-br from-rcm-green-50/80 to-rcm-teal-50/60 p-5">
              <blockquote>
                <p className="text-gray-700 italic leading-relaxed">
                  &ldquo;This is us returning to who we are — an ummah that builds with dignity, 
                  excellence, and conviction.&rdquo;
                </p>
                <footer className="mt-3 text-sm font-medium text-rcm-green-700">
                  — Imam Abdullah Jaber, Roswell Community Masjid
                </footer>
              </blockquote>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="relative"
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
              
              {/* Floating Badge */}
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-rcm-green-500 to-rcm-teal-500 flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider font-medium">Pursuing</p>
                    <p className="font-bold text-rcm-green-700 text-sm">Living Building</p>
                    <p className="text-[10px] text-gray-500">Certification</p>
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
          className="mt-16 md:mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${stat.color.split(' ')[0]} mb-3`}>
                  <stat.icon className={`w-5 h-5 ${stat.color.split(' ')[1]}`} />
                </div>
                <p className="font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
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
