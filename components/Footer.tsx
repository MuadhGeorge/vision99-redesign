'use client'

import { motion } from 'framer-motion'
import { Leaf, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const quickLinks = [
  { name: 'Vision', href: '#vision' },
  { name: 'Campus', href: '#campus' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Timeline', href: '#timeline' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Donate', href: '#donate' },
]

const socialLinks = [
  { name: 'Facebook', href: '#' },
  { name: 'Instagram', href: '#' },
  { name: 'YouTube', href: '#' },
  { name: 'Twitter', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container-max section-padding !py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Stay Updated</h3>
              <p className="text-gray-400">Get construction updates and community news delivered to your inbox.</p>
            </div>
            <form className="flex w-full md:w-auto gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 md:w-64 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rcm-green-500"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-rcm-green-600 text-white font-semibold rounded-lg hover:bg-rcm-green-700 transition-colors flex items-center gap-2"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-max section-padding !py-12">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rcm-teal-500 to-rcm-green-600 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white">
                  Roswell Community Masjid
                </span>
                <span className="block text-xs text-rcm-green-400 font-medium -mt-0.5">
                  Beyond Walls
                </span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Building the world&apos;s first faith-based Living Building certified campus. 
              A sanctuary for generations, a beacon for the community, and a model for the world.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-rcm-green-600 transition-colors"
                  aria-label={link.name}
                >
                  <span className="text-xs font-bold">{link.name.charAt(0)}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-rcm-green-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rcm-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Roswell, Georgia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-rcm-green-500 flex-shrink-0" />
                <a href="mailto:info@roswellmasjid.org" className="text-gray-400 hover:text-rcm-green-400 transition-colors">
                  info@roswellmasjid.org
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-rcm-green-500 flex-shrink-0" />
                <a href="tel:+17708178677" className="text-gray-400 hover:text-rcm-green-400 transition-colors">
                  (770) 817-8677
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>
              © {new Date().getFullYear()} Roswell Community Masjid. All rights reserved. 
              501(c)(3) Nonprofit Organization.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

