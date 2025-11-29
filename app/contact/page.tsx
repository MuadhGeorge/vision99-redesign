/**
 * Contact Page with Form
 */

'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

const inquiryTypes = [
  { value: 'general', label: 'General Question' },
  { value: 'donation', label: 'Make a Donation' },
  { value: 'briefing', label: 'Private Donor Briefing' },
  { value: 'media', label: 'Media Inquiry' },
  { value: 'volunteer', label: 'Volunteer Interest' },
  { value: 'other', label: 'Other' },
]

function ContactForm() {
  const searchParams = useSearchParams()
  const preselectedType = searchParams.get('type') || 'general'
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: preselectedType,
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setLoading(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-brand-green-50 rounded-2xl p-8 text-center border border-brand-green-200"
      >
        <div className="w-16 h-16 rounded-full bg-brand-green-100 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-brand-green-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-600 mb-6">
          Thank you for reaching out. Our team will respond within 2-3 business days.
        </p>
        <button
          onClick={() => {
            setSubmitted(false)
            setFormData({ name: '', email: '', phone: '', type: 'general', message: '' })
          }}
          className="text-brand-green-600 font-medium hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green-500 focus:ring-2 focus:ring-brand-green-500/20 outline-none transition-all"
            placeholder="Your name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green-500 focus:ring-2 focus:ring-brand-green-500/20 outline-none transition-all"
            placeholder="you@example.com"
          />
        </div>
      </div>
      
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number <span className="text-gray-400">(optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green-500 focus:ring-2 focus:ring-brand-green-500/20 outline-none transition-all"
            placeholder="(555) 555-5555"
          />
        </div>
        
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
            Inquiry Type *
          </label>
          <select
            id="type"
            name="type"
            required
            value={formData.type}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green-500 focus:ring-2 focus:ring-brand-green-500/20 outline-none transition-all bg-white"
          >
            {inquiryTypes.map(type => (
              <option key={type.value} value={type.value}>{type.label}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green-500 focus:ring-2 focus:ring-brand-green-500/20 outline-none transition-all resize-none"
          placeholder="How can we help you?"
        />
      </div>
      
      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full sm:w-auto group disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? (
          'Sending...'
        ) : (
          <>
            Send Message
            <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>
    </form>
  )
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 bg-gradient-to-br from-brand-green-50 to-rcm-teal-50/50">
        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider text-brand-green-600 mb-4">
              Contact Us
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Questions about the project? Interested in contributing? We&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-green-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Email</p>
                    <a href="mailto:info@roswellmasjid.org" className="text-brand-green-600 hover:underline">
                      info@roswellmasjid.org
                    </a>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-green-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Phone</p>
                    <a href="tel:+17708178677" className="text-brand-green-600 hover:underline">
                      (770) 817-8677
                    </a>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-green-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Location</p>
                    <p className="text-gray-600">Roswell, Georgia</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-soft-gray-50 rounded-xl">
                <p className="text-sm text-gray-600">
                  <strong>Response time:</strong> We typically respond within 2-3 business days. 
                  For urgent matters, please call during office hours.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-soft-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <Suspense fallback={<div className="h-96 flex items-center justify-center text-gray-500">Loading form...</div>}>
                  <ContactForm />
                </Suspense>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

