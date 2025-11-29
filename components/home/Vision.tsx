'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function Vision() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">The Vision</span>
            <h2 className="section-heading">
              A Milestone of Pride.<br />
              A Legacy of Impact.
            </h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-lg">
                For decades, Muslim communities in America focused on building walls—structures 
                of protection in uncertain times. Now, we&apos;re ready for something greater.
              </p>
              <p>
                Beyond Walls represents a transformation: from building for survival to building 
                for <strong className="text-gray-800">influence</strong>. A campus that doesn&apos;t 
                just serve our community, but shapes our city, inspires the global Ummah, and 
                honors our planet.
              </p>
              <p>
                This is more than architecture. It&apos;s a statement that Muslims in America are 
                ready to lead—in sustainability, in design, in community building.
              </p>
            </div>
            
            {/* Power Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 p-6 bg-gradient-to-br from-brand-green-50 to-rcm-teal-50/50 rounded-2xl border-l-4 border-brand-green-500"
            >
              <p className="text-lg text-gray-700 italic leading-relaxed">
                &ldquo;The most beloved of people to Allah are those who are most beneficial to people.&rdquo;
              </p>
              <footer className="mt-3 text-sm font-medium text-brand-green-700">
                — Prophetic Tradition
              </footer>
            </motion.blockquote>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
              <div className="aspect-[4/3] relative bg-gray-100">
                <Image
                  src="/Photos/Copy of P2874-RCC-INT-PRAYER HALL-05_03.png"
                  alt="Interior rendering of the prayer hall with natural light streaming through geometric windows"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-brand-green-100 rounded-2xl sm:rounded-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

