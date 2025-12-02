'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Leaf } from 'lucide-react'
import Link from 'next/link'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'LBC Blueprint', href: '/lbc' },
  { name: 'Leadership & Team', href: '/leadership' },
  { name: 'Capital Campaign', href: '/campaign' },
  { name: 'Media & News', href: '/media' },
  { name: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change or resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header
      // Mobile nav: fixed, notch-safe header that always stays above page content
      // Added safe-area padding and subtle border to keep the brand + menu clearly visible on small screens.
      className={`fixed top-0 left-0 right-0 z-50 pt-[env(safe-area-inset-top)] transition-all duration-300 border-b border-gray-100 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav
        className="container-max py-3 sm:py-4 min-h-[60px] sm:min-h-[68px]"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between">
          {/* Logo - Always show full brand */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 group"
            aria-label="RCM Beyond Walls - Home"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-rcm-teal-500 to-brand-green-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow flex-shrink-0">
              <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display font-bold text-base sm:text-lg text-gray-900">
                RCM
              </span>
              <span className="text-[10px] sm:text-xs text-brand-green-700 font-medium -mt-0.5">
                Beyond Walls
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-3 xl:px-4 py-2 text-sm font-medium text-gray-700 
                         hover:text-brand-green-700 transition-colors rounded-lg 
                         hover:bg-brand-green-50
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-500"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/campaign#donate"
              className="ml-3 btn-primary !py-2.5 !px-5 text-sm"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu - Full Screen Overlay
            - Positioned just below the fixed header (60px / 68px) so the logo + hamburger stay visible.
            - z-index kept below the header but above page content to avoid hero/image overlap on mobile. */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-x-0 top-[60px] sm:top-[68px] bottom-0 bg-white z-40"
            >
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="h-full overflow-y-auto px-4 py-6"
              >
                <div className="space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-3 px-4 text-lg text-gray-800 hover:bg-brand-green-50 
                                 hover:text-brand-green-700 rounded-xl transition-colors font-medium"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8 px-4"
                >
                  <Link
                    href="/campaign#donate"
                    onClick={() => setIsOpen(false)}
                    className="btn-primary w-full text-center justify-center"
                  >
                    Donate Now
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
