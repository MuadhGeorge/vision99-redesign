'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Building2, Mail, Phone, CheckCircle, ArrowLeft, AlertCircle, X } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { CONTACT } from '@/lib/constants'
import Link from 'next/link'

export default function PartnerPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    organizationName: '',
    contactName: '',
    email: '',
    phone: '',
    title: '',
    message: '',
  })

  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)
    
    try {
      const response = await fetch('/api/partnership', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit inquiry')
      }
      
      setIsSubmitted(true)
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const { strategic_partner } = CONTACT

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow bg-gradient-to-b from-gray-50 to-white">
        <div className="container-max section-padding pt-24 sm:pt-32 pb-16 sm:pb-24">
          {/* Back Button */}
          <Link 
            href="/donate"
            className="inline-flex items-center gap-2 text-rcm-green-600 hover:text-rcm-green-700 font-medium mb-8 group transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to donation options
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-rcm-green-500 to-rcm-teal-500 mb-6">
              <Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Strategic Partnership Support
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
              Our institution/organization would like to become a strategic partner for this project.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Partnership Inquiry Form</h2>
                  
                  {/* Error Banner */}
                  {submitError && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div className="flex-grow">
                        <p className="text-sm font-medium text-red-800">Failed to submit inquiry</p>
                        <p className="text-sm text-red-600">{submitError}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setSubmitError(null)}
                        className="p-1 hover:bg-red-100 rounded transition-colors"
                        aria-label="Dismiss error"
                      >
                        <X className="w-4 h-4 text-red-500" />
                      </button>
                    </div>
                  )}
                  
                  <div className="space-y-5">
                    {/* Organization Name */}
                    <div>
                      <label htmlFor="organizationName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Organization / Institution Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="organizationName"
                        name="organizationName"
                        required
                        value={formData.organizationName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rcm-green-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                        placeholder="Enter your organization name"
                      />
                    </div>

                    {/* Contact Name */}
                    <div>
                      <label htmlFor="contactName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Contact Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="contactName"
                        name="contactName"
                        required
                        value={formData.contactName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rcm-green-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                        placeholder="Your full name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rcm-green-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                        placeholder="your.email@organization.org"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rcm-green-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    {/* Title/Role */}
                    <div>
                      <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
                        Title / Role
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rcm-green-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                        placeholder="Executive Director, Board Member, etc."
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rcm-green-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400 resize-none"
                        placeholder="Tell us about your organization's interest in partnering with us..."
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full bg-gradient-to-r from-rcm-green-600 to-rcm-green-700 text-white py-4 px-6 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </span>
                      ) : (
                        'Request Partnership Conversation'
                      )}
                    </motion.button>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg border border-gray-100 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-rcm-green-100 mb-6">
                    <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-rcm-green-600" />
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    JazakumAllahu khayran
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    We will reach out soon to discuss partnership opportunities.
                  </p>
                  
                  <Link 
                    href="/"
                    className="inline-flex items-center justify-center px-8 py-3 bg-rcm-green-600 text-white font-semibold rounded-lg hover:bg-rcm-green-700 transition-colors"
                  >
                    Return to Home
                  </Link>
                </motion.div>
              )}
            </motion.div>

            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-1"
            >
              <div className="bg-gradient-to-br from-rcm-green-600 to-rcm-green-700 rounded-2xl p-6 sm:p-8 shadow-lg text-white sticky top-24">
                <h3 className="text-lg sm:text-xl font-bold mb-2">Direct Contact</h3>
                <p className="text-rcm-green-100 text-sm mb-6">
                  Prefer to reach out directly? Connect with our partnerships team.
                </p>
                
                <div className="space-y-6">
                  {/* Contact Info */}
                  <div>
                    <p className="text-2xl font-bold mb-1">{strategic_partner.name}</p>
                    <p className="text-rcm-green-200 text-sm">{strategic_partner.title}</p>
                  </div>

                  {/* Phone */}
                  <a
                    href={`tel:${strategic_partner.phoneRaw}`}
                    className="flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-rcm-green-200">Phone:</p>
                      <p className="font-semibold group-hover:underline">{strategic_partner.phone}</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${strategic_partner.email}`}
                    className="flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 overflow-hidden">
                      <p className="text-xs text-rcm-green-200">Email:</p>
                      <p className="font-semibold group-hover:underline break-all">{strategic_partner.email}</p>
                    </div>
                  </a>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 pt-6 border-t border-white/20 space-y-3">
                  <a
                    href={`mailto:${strategic_partner.email}`}
                    className="flex items-center justify-center gap-2 w-full bg-white text-rcm-green-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Email {strategic_partner.name.split(' ')[0]}
                  </a>
                  <a
                    href={`tel:${strategic_partner.phoneRaw}`}
                    className="flex items-center justify-center gap-2 w-full bg-white/10 hover:bg-white/20 text-white py-3 px-4 rounded-lg font-semibold transition-colors border border-white/30"
                  >
                    <Phone className="w-4 h-4" />
                    Call {strategic_partner.name.split(' ')[0]}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
