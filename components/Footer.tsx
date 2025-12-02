'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'LBC Blueprint', href: '/lbc' },
  { name: 'Leadership & Team', href: '/leadership' },
  { name: 'Capital Campaign', href: '/campaign' },
  { name: 'Media & News', href: '/media' },
  { name: 'Contact', href: '/contact' },
]

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Use', href: '/terms' },
  { name: 'Accessibility', href: '/accessibility' },
]

export default function Footer() {
  return (
    <footer className="bg-deep-navy-950 text-gray-300">
      {/* Main Footer */}
      <div className="container-max py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <Image
                src="/Photos/rcm-logo.png"
                alt="RCM Beyond Walls logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain flex-shrink-0"
              />
              <div>
                <span className="font-display font-bold text-lg text-white">
                  RCM
                </span>
                <span className="block text-xs text-brand-green-400 font-medium -mt-0.5">
                  Beyond Walls
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Building the world&apos;s first faith-based Living Building Challenge certified campus. 
              A sanctuary for generations, a beacon for the community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-brand-green-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">
                  Roswell, Georgia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-green-500 flex-shrink-0" />
                <a 
                  href="mailto:info@roswellmasjid.org" 
                  className="text-sm text-gray-400 hover:text-brand-green-400 transition-colors"
                >
                  info@roswellmasjid.org
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-green-500 flex-shrink-0" />
                <a 
                  href="tel:+17708178677" 
                  className="text-sm text-gray-400 hover:text-brand-green-400 transition-colors"
                >
                  (770) 817-8677
                </a>
              </li>
            </ul>
          </div>

          {/* Tagline */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="bg-deep-navy-900 rounded-xl p-5 border border-deep-navy-800">
              <p className="text-sm text-gray-300 italic leading-relaxed mb-3">
                &ldquo;A Beacon for All Humanity&rdquo;
              </p>
              <p className="text-xs text-gray-500">
                Roswell Community Masjid is committed to serving our local community, 
                the global Ummah, and humanity at large.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-deep-navy-800">
        <div className="container-max py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <p>
              © {new Date().getFullYear()} Roswell Community Masjid. All rights reserved. 
              501(c)(3) Nonprofit Organization.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-gray-300 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
