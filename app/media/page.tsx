/**
 * Media & News Page
 */

'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Award, Newspaper, Calendar, ExternalLink } from 'lucide-react'

const newsItems = [
  {
    type: 'award',
    icon: Award,
    title: 'ISNA Green Masjid Award 2024',
    date: 'September 2024',
    description: 'RCM recognized for leadership in sustainable mosque design and the Beyond Walls initiative.',
    link: '#',
  },
  {
    type: 'press',
    icon: Newspaper,
    title: 'Beyond Walls Campaign Announced',
    date: 'June 2024',
    description: 'Roswell Community Masjid announces $20M capital campaign for world\'s first Living Building Challenge mosque.',
    link: '#',
  },
  {
    type: 'event',
    icon: Calendar,
    title: 'Groundbreaking Ceremony',
    date: 'December 6, 2025',
    description: 'Save the date for the historic groundbreaking of the Beyond Walls campus. Community invited.',
    link: '#',
  },
  {
    type: 'press',
    icon: Newspaper,
    title: 'Partnership with Kendeda Building',
    date: 'March 2024',
    description: 'Georgia Tech\'s Kendeda Building team to advise on Living Building Challenge certification.',
    link: '#',
  },
  {
    type: 'award',
    icon: Award,
    title: 'Living Future Institute Recognition',
    date: 'January 2024',
    description: 'LFI acknowledges Beyond Walls as first faith-based project pursuing full LBC certification.',
    link: '#',
  },
  {
    type: 'event',
    icon: Calendar,
    title: 'Community Town Hall',
    date: 'Quarterly',
    description: 'Regular updates for the community on project progress, design decisions, and campaign status.',
    link: '#',
  },
]

const getTypeColor = (type: string) => {
  switch (type) {
    case 'award':
      return 'bg-brand-gold-100 text-brand-gold-600'
    case 'press':
      return 'bg-brand-green-100 text-brand-green-600'
    case 'event':
      return 'bg-rcm-teal-100 text-rcm-teal-600'
    default:
      return 'bg-gray-100 text-gray-600'
  }
}

export default function MediaPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-24 sm:pt-28 pb-16 sm:pb-20 bg-gradient-to-br from-deep-navy-950 via-deep-navy-900 to-deep-navy-950">
        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider text-brand-gold-400 mb-4">
              Media & News
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Recognizing a Historic Project
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Awards, press coverage, and upcoming events for the Beyond Walls initiative.
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section ref={ref} className="section-padding bg-white">
        <div className="container-max">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                className="bg-soft-gray-50 rounded-2xl p-6 border border-gray-100 hover:bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl ${getTypeColor(item.type)} flex items-center justify-center`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {item.type}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-green-700 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-sm text-brand-green-600 font-medium mb-3">{item.date}</p>
                
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{item.description}</p>
                
                <a 
                  href={item.link}
                  className="inline-flex items-center gap-1 text-sm font-medium text-brand-green-600 hover:text-brand-green-700 transition-colors"
                >
                  Read more
                  <ExternalLink className="w-3 h-3" />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="section-padding bg-soft-gray-50">
        <div className="container-max text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Media Inquiries</h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">
            For press inquiries, interview requests, or media resources, please contact our communications team.
          </p>
          <a 
            href="mailto:media@roswellmasjid.org"
            className="btn-secondary inline-flex"
          >
            media@roswellmasjid.org
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}

