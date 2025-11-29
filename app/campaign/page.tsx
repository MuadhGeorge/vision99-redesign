/**
 * Capital Campaign Page
 */

'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, Download, Mail, Check } from 'lucide-react'

const namingOpportunities = [
  { name: 'Main Prayer Hall', amount: '$2,500,000', status: 'available' },
  { name: 'Solar Canopy Array', amount: '$1,000,000', status: 'available' },
  { name: 'Youth Innovation Center', amount: '$750,000', status: 'available' },
  { name: 'Regenerative Gardens', amount: '$500,000', status: 'available' },
  { name: 'Water Reclamation System', amount: '$400,000', status: 'available' },
  { name: 'Community Kitchen', amount: '$250,000', status: 'available' },
  { name: 'Women\'s Prayer Hall', amount: '$500,000', status: 'available' },
  { name: 'Wudu Facilities', amount: '$150,000', status: 'available' },
]

export default function CampaignPage() {
  const progressRef = useRef(null)
  const progressInView = useInView(progressRef, { once: true, margin: '-100px' })
  
  const namingRef = useRef(null)
  const namingInView = useInView(namingRef, { once: true, margin: '-100px' })

  // Placeholder progress (update with real data)
  const raised = 4200000
  const goal = 20000000
  const progress = (raised / goal) * 100

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
              Capital Campaign
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Funding the World&apos;s First
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              A $20 million campaign to build a campus that will serve generations. 
              Every dollar invested today creates lasting impact for tomorrow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Progress Section */}
      <section ref={progressRef} className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={progressInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Campaign Progress</h2>
              <p className="text-gray-600">Join the growing community of founders and builders.</p>
            </div>
            
            <div className="bg-soft-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Raised</p>
                  <p className="text-3xl sm:text-4xl font-bold text-brand-green-600">
                    ${(raised / 1000000).toFixed(1)}M
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 mb-1">Goal</p>
                  <p className="text-xl font-bold text-gray-900">
                    ${(goal / 1000000).toFixed(0)}M
                  </p>
                </div>
              </div>
              
              <div className="h-4 bg-gray-200 rounded-full overflow-hidden mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={progressInView ? { width: `${progress}%` } : {}}
                  transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-brand-green-500 to-brand-green-600 rounded-full"
                />
              </div>
              
              <p className="text-center text-sm text-gray-500">
                {progress.toFixed(0)}% of goal reached • Updated monthly
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="section-padding bg-soft-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <span className="section-label">Investment</span>
            <h2 className="section-heading">Where Your Dollars Go</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Hard Costs</h3>
              <ul className="space-y-3">
                <li className="flex justify-between text-sm">
                  <span className="text-gray-600">Site Development</span>
                  <span className="font-medium text-gray-900">$3.2M</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-gray-600">Building Construction</span>
                  <span className="font-medium text-gray-900">$12.0M</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-gray-600">LBC Systems & Materials</span>
                  <span className="font-medium text-gray-900">$2.8M</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between">
                <span className="font-bold text-gray-900">Total Hard Costs</span>
                <span className="font-bold text-brand-green-600">$18.0M</span>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Soft Costs</h3>
              <ul className="space-y-3">
                <li className="flex justify-between text-sm">
                  <span className="text-gray-600">Architecture & Engineering</span>
                  <span className="font-medium text-gray-900">$1.2M</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-gray-600">Permitting & Fees</span>
                  <span className="font-medium text-gray-900">$400K</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-gray-600">Campaign & Contingency</span>
                  <span className="font-medium text-gray-900">$400K</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between">
                <span className="font-bold text-gray-900">Total Soft Costs</span>
                <span className="font-bold text-brand-green-600">$2.0M</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Naming Opportunities */}
      <section ref={namingRef} id="founders" className="section-padding bg-deep-navy-900 text-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={namingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider text-brand-gold-400 mb-3">
              Founders Circle
            </span>
            <h2 className="section-heading-light">Naming Opportunities</h2>
            <p className="section-subheading-light mx-auto">
              Leave a lasting legacy with a named space that will serve generations.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {namingOpportunities.map((opp, index) => (
              <motion.div
                key={opp.name}
                initial={{ opacity: 0, y: 20 }}
                animate={namingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                className="bg-deep-navy-800 rounded-xl p-5 border border-deep-navy-700 hover:border-brand-gold-500/50 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  {opp.status === 'available' ? (
                    <span className="text-xs px-2 py-0.5 bg-brand-green-500/20 text-brand-green-400 rounded-full">
                      Available
                    </span>
                  ) : (
                    <span className="text-xs px-2 py-0.5 bg-brand-gold-500/20 text-brand-gold-400 rounded-full flex items-center gap-1">
                      <Check className="w-3 h-3" /> Reserved
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-white mb-1">{opp.name}</h3>
                <p className="text-brand-gold-400 font-semibold">{opp.amount}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#" className="btn-gold group inline-flex items-center justify-center">
              <Download className="w-4 h-4 mr-2" />
              Download Campaign Prospectus
            </Link>
            <Link href="/contact?type=briefing" className="btn-ghost-light group inline-flex items-center justify-center">
              <Mail className="w-4 h-4 mr-2" />
              Talk to Our Campaign Team
            </Link>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="section-padding bg-white">
        <div className="container-max text-center">
          <span className="section-label">Give Now</span>
          <h2 className="section-heading">Make Your Contribution</h2>
          <p className="section-subheading mx-auto mb-8">
            Every gift, regardless of size, brings us closer to groundbreaking.
          </p>
          
          <div className="bg-brand-green-50 rounded-2xl p-8 max-w-2xl mx-auto border border-brand-green-200">
            <p className="text-gray-700 mb-6">
              Online giving coming soon. For now, please contact us directly to make your tax-deductible contribution.
            </p>
            <Link href="/contact?type=donation" className="btn-primary group">
              Contact to Donate
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-xs text-gray-500 mt-4">
              Roswell Community Masjid is a 501(c)(3) nonprofit. All donations are tax-deductible.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

