'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { User, Building2, Briefcase, ArrowRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const MOHID_DONATION_LINK = 'https://mohid.co/go/jK92YAo'

const donorTypes = [
  {
    id: 'individual',
    title: 'Individual',
    description: 'I am donating as an individual or family',
    icon: User,
    href: MOHID_DONATION_LINK,
    color: 'from-rcm-green-500 to-rcm-teal-500',
    external: true,
  },
  {
    id: 'organization',
    title: 'Organization',
    description: 'I represent an organization seeking partnership',
    icon: Building2,
    href: '/donate/partner',
    color: 'from-rcm-gold-500 to-rcm-gold-600',
    external: false,
  },
  {
    id: 'institution',
    title: 'Institution',
    description: 'I represent an institution interested in strategic support',
    icon: Briefcase,
    href: '/donate/partner',
    color: 'from-rcm-teal-600 to-rcm-green-700',
    external: false,
  },
]

export default function DonateLanding() {

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow bg-gradient-to-b from-gray-50 to-white">
        <div className="container-max section-padding pt-24 sm:pt-32 pb-16 sm:pb-24">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Before you donate...
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
              Please tell us what best describes you so we can direct you properly.
            </p>
          </motion.div>

          {/* Selection Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {donorTypes.map((type, index) => {
              const cardContent = (
                <>
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <div className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <type.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="relative flex-grow">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-rcm-green-700 transition-colors duration-300">
                      {type.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {type.description}
                    </p>
                  </div>

                  {/* Arrow Icon */}
                  <div className="relative flex items-center justify-end mt-6">
                    <div className="flex items-center gap-2 text-rcm-green-600 font-semibold text-sm group-hover:gap-4 transition-all duration-300">
                      <span>{type.external ? 'Donate Now' : 'Continue'}</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </>
              )

              const cardClassName = "group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-transparent overflow-hidden text-left min-h-[280px] flex flex-col hover:-translate-y-2"

              return (
                <motion.div
                  key={type.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {type.external ? (
                    <a
                      href={type.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cardClassName}
                    >
                      {cardContent}
                    </a>
                  ) : (
                    <Link
                      href={type.href}
                      className={cardClassName}
                    >
                      {cardContent}
                    </Link>
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* Help Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12 sm:mt-16"
          >
            <p className="text-sm text-gray-500">
              Not sure which option to choose?{' '}
              <a 
                href="mailto:info@rcmbeyondwalls.org" 
                className="text-rcm-green-600 hover:text-rcm-green-700 font-medium underline"
              >
                Contact us
              </a>
              {' '}for guidance.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
