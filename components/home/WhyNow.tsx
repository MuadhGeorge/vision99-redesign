'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Users, Leaf, History } from 'lucide-react'

const reasons = [
  {
    icon: Users,
    title: 'Youth Need a "Third Place"',
    description: 'Without spaces that speak to their reality, we risk losing an entire generation to disconnection and identity crisis.',
  },
  {
    icon: Leaf,
    title: 'Stewardship Demands Action',
    description: 'Islamic tradition calls us to be stewards of the earth. This campus moves from talking about sustainability to practicing khilafah.',
  },
  {
    icon: History,
    title: 'History Favors the Bold',
    description: 'For the first time, a Muslim community will lead in sustainable innovation—setting a global standard for houses of worship.',
  },
]

export default function WhyNow() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-deep-navy-900 text-white overflow-hidden">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider text-brand-gold-400 mb-3">
              The Urgency
            </span>
            <h2 className="section-heading-light">
              We Are at a Crossroads.<br />
              The World Is Watching.
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              This is a once-in-a-lifetime opportunity to change the narrative of Islam in the West. 
              To show what&apos;s possible when faith meets innovation. Miss it, and it may be decades 
              before another chance arises.
            </p>
            
            {/* Reasons */}
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-deep-navy-800 border border-deep-navy-600 flex items-center justify-center">
                    <reason.icon className="w-6 h-6 text-brand-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{reason.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10"
            >
              <Link href="/campaign" className="btn-primary group">
                Make Your Mark on History
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
              <div className="aspect-[4/3] relative bg-deep-navy-800">
                <Image
                  src="/Photos/Copy of P2874-RCC-INT-YOUTH CENTER-19_03.png"
                  alt="Modern youth center designed for the next generation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy-900/60 via-transparent to-transparent" />
              </div>
            </div>
            
            {/* Stats overlay */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <p className="text-sm text-white/90 font-medium">
                  <span className="text-brand-gold-400 font-bold text-2xl">67%</span> of Muslim youth 
                  report feeling disconnected from their local masjid.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

