'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Globe, Users, Leaf, Lightbulb, Heart, Star } from 'lucide-react'

const visionBoxes = [
  {
    icon: Globe,
    title: 'A Global Movement',
    description: 'Not just a building—a paradigm shift. We\'re redefining what Muslim communities can achieve in the West.',
    image: '/Photos/Copy of P2874-RCC-EXT-01_05.png',
    dark: true,
  },
  {
    icon: Users,
    title: 'For Our Community',
    description: 'A sanctuary that nurtures families, empowers youth, and honors every member with dignity.',
    image: '/Photos/Copy of P2874-RCC-INT-PRAYER HALL-05_03.png',
    dark: false,
  },
  {
    icon: Leaf,
    title: 'For Our Planet',
    description: 'Prophetic stewardship in action. Net-positive energy, net-zero water, zero toxins.',
    // Replaced EXT-07 (26MB) with EXT-04 (20MB) to meet Cloudflare Pages 25MB limit
    image: '/Photos/Copy of P2874-RCC-EXT-04_05.png',
    dark: true,
  },
  {
    icon: Lightbulb,
    title: 'Leading Innovation',
    description: 'The world\'s first Living Building masjid. Setting standards, not following them.',
    image: '/Photos/Copy of P2874-RCC-INT-CAFE-07_02.png',
    dark: false,
  },
  {
    icon: Heart,
    title: 'Open to All',
    description: 'A beacon for interfaith dialogue, education, and service to all of humanity.',
    image: '/Photos/Copy of P2874-RCC-EXT-09_05.png',
    dark: true,
  },
  {
    icon: Star,
    title: 'A New Golden Age',
    description: 'Reviving the legacy of Muslim excellence. From protection to influence. From survival to leadership.',
    image: '/Photos/Copy of P2874-RCC-INT-MAIN HALL-02_03.png',
    dark: false,
  },
]

export default function Vision() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="section-label">The Vision</span>
          <h2 className="section-heading">
            A Milestone of Pride.<br />
            A Legacy of Impact.
          </h2>
          <p className="section-subheading mx-auto">
            Beyond Walls is more than a building—it&apos;s a global movement. A campus that 
            influences our local community, inspires the global Ummah, and honors our planet.
          </p>
        </motion.div>

        {/* 2x3 Grid of Big Feature Boxes */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 lg:mb-16">
          {visionBoxes.map((box, index) => (
            <motion.div
              key={box.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl ${
                box.dark ? 'bg-deep-navy-900' : 'bg-soft-gray-100'
              } min-h-[280px] sm:min-h-[320px] cursor-pointer`}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <Image
                  src={box.image}
                  alt={box.title}
                  fill
                  className={`object-cover transition-transform duration-700 group-hover:scale-110 ${
                    box.dark ? 'opacity-30' : 'opacity-20'
                  }`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className={`absolute inset-0 ${
                  box.dark 
                    ? 'bg-gradient-to-t from-deep-navy-950 via-deep-navy-900/80 to-deep-navy-900/60' 
                    : 'bg-gradient-to-t from-white via-white/90 to-white/70'
                }`} />
              </div>
              
              {/* Content */}
              <div className="relative h-full p-6 sm:p-8 flex flex-col justify-end">
                <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${
                  box.dark 
                    ? 'bg-brand-gold-500/20 text-brand-gold-400' 
                    : 'bg-brand-green-100 text-brand-green-600'
                }`}>
                  <box.icon className="w-6 h-6" />
                </div>
                
                <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${
                  box.dark ? 'text-white' : 'text-gray-900'
                }`}>
                  {box.title}
                </h3>
                
                <p className={`text-sm sm:text-base leading-relaxed ${
                  box.dark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {box.description}
                </p>
              </div>
              
              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl border-2 transition-colors duration-300 ${
                box.dark 
                  ? 'border-transparent group-hover:border-brand-gold-500/50' 
                  : 'border-transparent group-hover:border-brand-green-500/50'
              }`} />
            </motion.div>
          ))}
        </div>

        {/* Power Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-3xl mx-auto text-center p-8 bg-gradient-to-br from-brand-green-50 to-rcm-teal-50/50 rounded-2xl border border-brand-green-200"
        >
          <p className="text-xl sm:text-2xl text-gray-700 italic leading-relaxed">
            &ldquo;The most beloved of people to Allah are those who are most beneficial to people.&rdquo;
          </p>
          <footer className="mt-4 text-sm font-medium text-brand-green-700">
            — Prophetic Tradition
          </footer>
        </motion.blockquote>
      </div>
    </section>
  )
}

