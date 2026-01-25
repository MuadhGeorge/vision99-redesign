'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useContact } from './ContactContext'

const navLinks = [
  { name: 'Home', href: '/', isContact: false },
  { name: 'Contact', href: '#contact', isContact: true },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { openContactModal } = useContact()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsOpen(false) // Close mobile menu if open
    openContactModal()
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm'
            : 'bg-white/95 backdrop-blur-md md:bg-transparent md:backdrop-blur-none'
        }`}
      >
        <nav className="container-max section-padding !py-4" aria-label="Main navigation">
          <div className="flex items-center justify-between">
            {/* Logo - Always show full brand on all screen sizes */}
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-3 group"
              aria-label="Roswell Community Masjid - Home"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 relative flex-shrink-0">
                <Image
                  src="/Photos/rcm-logo.png"
                  alt="Roswell Community Masjid Logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 36px, 40px"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display font-bold text-base sm:text-lg text-gray-900">
                  RCM
                </span>
                <span className="text-[10px] sm:text-xs text-rcm-green-700 font-medium -mt-0.5">
                  Beyond Walls
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                link.isContact ? (
                  <button
                    key={link.name}
                    onClick={handleContactClick}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-rcm-green-50 hover:text-rcm-green-700 ${
                      scrolled ? 'text-gray-700' : 'text-gray-700'
                    } focus:outline-none focus-visible:ring-2 focus-visible:ring-rcm-green-500 focus-visible:ring-offset-2`}
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-rcm-green-50 hover:text-rcm-green-700 ${
                      scrolled ? 'text-gray-700' : 'text-gray-700'
                    } focus:outline-none focus-visible:ring-2 focus-visible:ring-rcm-green-500 focus-visible:ring-offset-2`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <Link
                href="/donate"
                className="ml-4 btn-primary !py-2.5 !px-6 text-sm"
              >
                Donate
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
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

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                id="mobile-menu"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden overflow-hidden"
              >
                <div className="pt-4 pb-2 space-y-1">
                  {navLinks.map((link) => (
                    link.isContact ? (
                      <button
                        key={link.name}
                        onClick={handleContactClick}
                        className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-rcm-green-50 hover:text-rcm-green-700 rounded-lg transition-colors font-medium"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-3 px-4 text-gray-700 hover:bg-rcm-green-50 hover:text-rcm-green-700 rounded-lg transition-colors font-medium"
                      >
                        {link.name}
                      </Link>
                    )
                  ))}
                  <div className="pt-2">
                    <Link
                      href="/donate"
                      onClick={() => setIsOpen(false)}
                      className="btn-primary w-full text-center"
                    >
                      Donate Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </>
  )
}
