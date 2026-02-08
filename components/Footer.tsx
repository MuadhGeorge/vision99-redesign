'use client'

import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import { useContact } from './ContactContext'

const quickLinks = [
  { name: 'Vision', href: '#vision' },
  { name: 'Campus', href: '#campus' },
  { name: 'Spaces', href: '#features' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Timeline', href: '#timeline' },
  { name: 'Donate', href: '/donate' },
]


export default function Footer() {
  const { openContactModal } = useContact()

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="px-5 sm:px-6 md:px-8 lg:px-10 py-12 sm:py-14 lg:py-16 max-w-7xl mx-auto">
          {/* 2-column layout on tablet+, single column on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16">
            {/* Column 1: Brand + Description + Contact Button */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 relative flex-shrink-0">
                  <Image
                    src="/Photos/rcm-logo.png"
                    alt="Roswell Community Masjid Logo"
                    fill
                    className="object-contain"
                    sizes="44px"
                  />
                </div>
                <div>
                  <span className="font-display font-bold text-base sm:text-lg text-white">
                    Roswell Community Masjid
                  </span>
                  <span className="block text-xs text-rcm-green-400 font-medium -mt-0.5">
                    Beyond Walls
                  </span>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-5 max-w-md">
                Building the world&apos;s first faith-based Living Building certified campus. 
                A sanctuary for generations, a beacon for the community, and a model for the world.
              </p>
              {/* Contact Us Button */}
              <button
                onClick={openContactModal}
                className="inline-flex items-center gap-2 px-5 py-3 bg-rcm-green-600 text-white font-semibold rounded-lg hover:bg-rcm-green-700 transition-colors text-sm min-h-[48px] shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                Contact Us
              </button>
            </div>

            {/* Column 2: Quick Links + Contact Info */}
            <div className="grid grid-cols-2 gap-8 sm:gap-10">
              {/* Quick Links */}
              <div>
                <h4 className="font-bold text-white mb-4 text-sm sm:text-base">Quick Links</h4>
                <ul className="space-y-2.5">
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

              {/* Contact Info */}
              <div>
                <h4 className="font-bold text-white mb-4 text-sm sm:text-base">Contact</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-rcm-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-400">
                      11370 Crabapple Rd, Roswell, Ga 30075
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-rcm-green-500 flex-shrink-0 mt-0.5" />
                    <a 
                      href="mailto:info@roswellmasjid.org" 
                      className="text-sm sm:text-base text-gray-400 hover:text-rcm-green-400 hover:underline transition-colors break-all"
                    >
                      info@roswellmasjid.org
                    </a>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-rcm-green-500 flex-shrink-0 mt-0.5" />
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
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
          <div className="px-5 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-7 max-w-7xl mx-auto">
            <div className="text-center text-xs sm:text-sm text-gray-500">
              <p>
                © {new Date().getFullYear()} Roswell Community Masjid. All rights reserved. 
                <span className="block xs:inline"> 501(c)(3) Nonprofit Organization.</span>
              </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
