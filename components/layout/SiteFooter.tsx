'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import GlassCard from '@/components/ui/GlassCard'

const QUICK_LINKS = [
  { label: 'Our Vision', href: '#vision' },
  { label: 'The Sanctuary', href: '#sanctuary' },
  { label: 'The Blueprint', href: '#sanctuary' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Donate', href: '#donate' },
]

const SOCIAL_LINKS = [
  { label: 'Facebook', href: '#', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  { label: 'Instagram', href: '#', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z' },
  { label: 'YouTube', href: '#', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z' },
]

/**
 * SiteFooter - Animated glassmorphism footer
 */
export default function SiteFooter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Connect to newsletter API
    setIsSubscribed(true)
    setEmail('')
  }

  return (
    <footer ref={ref} className="relative py-20 pointer-events-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <GlassCard className="max-w-7xl mx-auto mx-4 sm:mx-auto p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <Image
                src="/images/v99-rcm-logo.png"
                alt="Vision99"
                width={160}
                height={54}
                className="h-12 w-auto brightness-0 invert mb-6"
              />
              <div className="space-y-2 text-white/70">
                <p className="text-teal-400 font-semibold">Building Beyond Walls</p>
                <p>A Global Vision for All</p>
                <p className="text-sm text-white/50">The World&apos;s First Living Building Masjid</p>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-3 mt-6">
                {SOCIAL_LINKS.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 hover:bg-teal-500/30 rounded-lg flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-display text-lg text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {QUICK_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-teal-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="font-display text-lg text-white mb-6">Connect</h3>
              <address className="not-italic space-y-3 text-white/60">
                <p>
                  <a href="mailto:info@vision99.org" className="hover:text-teal-400 transition-colors">
                    info@vision99.org
                  </a>
                </p>
                <p>
                  <a href="tel:+11234567890" className="hover:text-teal-400 transition-colors">
                    (123) 456-7890
                  </a>
                </p>
                <p>Roswell, Georgia</p>
              </address>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-display text-lg text-white mb-4">Stay Updated</h3>
              <p className="text-white/60 text-sm mb-4">
                Subscribe to receive updates on our progress
              </p>
              
              {isSubscribed ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-teal-500/20 text-teal-400 rounded-lg text-sm"
                >
                  ✓ Thank you for subscribing!
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-teal-500 transition-colors"
                  />
                  <motion.button
                    type="submit"
                    className="w-full px-4 py-3 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-lg transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Subscribe
                  </motion.button>
                </form>
              )}
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Roswell Community Masjid. All rights reserved. | 501(c)(3) Nonprofit
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-white/40 hover:text-teal-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/40 hover:text-teal-400 transition-colors">
                Terms of Use
              </Link>
              <Link href="#" className="text-white/40 hover:text-teal-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </footer>
  )
}
