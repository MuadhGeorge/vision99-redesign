'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

interface SiteHeaderProps {
  variant?: 'transparent' | 'solid'
}

const NAV_ITEMS = [
  { label: 'Our Vision', href: '#vision' },
  { label: 'The Sanctuary', href: '#sanctuary' },
  { label: 'The Blueprint', href: '#sanctuary' },
  { label: 'Timeline', href: '#timeline' },
]

/**
 * SiteHeader - Beyond Walls navigation header
 * 
 * Features:
 * - Transparent on hero, becomes solid on scroll
 * - Mobile hamburger menu
 * - V99 RCM logo
 * - Prominent donate button
 */
export default function SiteHeader({ variant = 'transparent' }: SiteHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const showSolid = variant === 'solid' || isScrolled

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          showSolid
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              {/* TODO: Replace with actual V99 RCM logo */}
              <Image
                src="/images/v99-rcm-logo.png"
                alt="Vision99 - Roswell Community Masjid"
                width={140}
                height={48}
                className={`h-10 w-auto transition-all ${
                  showSolid ? '' : 'brightness-0 invert'
                }`}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    showSolid
                      ? 'text-gray-700 hover:text-teal-700 hover:bg-teal-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Donate Button */}
              <Link
                href="#donate"
                className={`ml-4 px-6 py-2.5 rounded-lg font-semibold transition-all ${
                  showSolid
                    ? 'bg-gradient-to-r from-teal-600 to-teal-500 text-white hover:from-teal-500 hover:to-teal-400 shadow-md hover:shadow-lg'
                    : 'bg-white text-teal-700 hover:bg-teal-50 shadow-lg'
                }`}
                aria-label="Donate to Beyond Walls"
              >
                Donate
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 rounded-lg ${
                showSolid ? 'text-gray-700' : 'text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.nav
              className="absolute top-16 left-0 right-0 bg-white shadow-xl"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-4 py-6 space-y-2">
                {NAV_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-gray-700 hover:text-teal-700 hover:bg-teal-50 rounded-lg font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: NAV_ITEMS.length * 0.05 }}
                  className="pt-4"
                >
                  <Link
                    href="#donate"
                    className="block w-full px-4 py-3 bg-gradient-to-r from-teal-600 to-teal-500 text-white text-center rounded-lg font-semibold hover:from-teal-500 hover:to-teal-400"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Donate Now
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
