'use client'

import { Leaf, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

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
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container-max section-padding !py-8 sm:!py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Stay Updated</h3>
              <p className="text-sm sm:text-base text-gray-400">Get construction updates and community news delivered to your inbox.</p>
            </div>
            <form className="flex flex-col sm:flex-row w-full md:w-auto gap-2 sm:gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 md:w-64 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rcm-green-500 text-sm sm:text-base min-h-[44px]"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="px-5 sm:px-6 py-3 bg-rcm-green-600 text-white font-semibold rounded-lg hover:bg-rcm-green-700 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base min-h-[44px]"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-max section-padding !py-8 sm:!py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-rcm-teal-500 to-rcm-green-600 flex items-center justify-center flex-shrink-0">
                <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div>
                <span className="font-display font-bold text-base sm:text-lg text-white">
                  Roswell Community Masjid
                </span>
                <span className="block text-[10px] sm:text-xs text-rcm-green-400 font-medium -mt-0.5">
                  Beyond Walls
                </span>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-400 mb-5 sm:mb-6 max-w-md">
              Building the world&apos;s first faith-based Living Building certified campus. 
              A sanctuary for generations, a beacon for the community, and a model for the world.
            </p>
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-rcm-green-600 transition-colors min-h-[44px] min-w-[44px]"
                  aria-label={link.name}
                >
                  <span className="text-xs font-bold">{link.name.charAt(0)}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-gray-400 hover:text-rcm-green-400 hover:underline transition-colors py-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-3 sm:mb-4 text-sm sm:text-base">Contact</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-rcm-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-gray-400">
                  Roswell, Georgia
                </span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-rcm-green-500 flex-shrink-0" />
                <a 
                  href="mailto:info@roswellmasjid.org" 
                  className="text-sm sm:text-base text-gray-400 hover:text-rcm-green-400 hover:underline transition-colors break-all"
                >
                  info@roswellmasjid.org
                </a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-rcm-green-500 flex-shrink-0" />
                <a 
                  href="tel:+17708178677" 
                  className="text-sm sm:text-base text-gray-400 hover:text-rcm-green-400 hover:underline transition-colors"
                >
                  (770) 817-8677
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 text-center md:text-left">
            <p>
              © {new Date().getFullYear()} Roswell Community Masjid. All rights reserved. 
              <span className="block sm:inline"> 501(c)(3) Nonprofit Organization.</span>
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <a href="#" className="hover:text-gray-300 hover:underline transition-colors py-1">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300 hover:underline transition-colors py-1">Terms of Use</a>
              <a href="#" className="hover:text-gray-300 hover:underline transition-colors py-1">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
