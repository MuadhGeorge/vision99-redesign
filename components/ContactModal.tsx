'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, CheckCircle, Mail, User, Phone, MessageSquare, ChevronDown } from 'lucide-react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  triggerRef?: React.RefObject<HTMLElement>
}

interface FormData {
  fullName: string
  email: string
  phone: string
  subject: string
  reason: string
  message: string
}

const initialFormData: FormData = {
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  reason: '',
  message: '',
}

const reasonOptions = [
  { value: '', label: 'Select a reason (optional)' },
  { value: 'general', label: 'General Inquiry' },
  { value: 'campaign', label: 'Capital Campaign' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'media', label: 'Media' },
  { value: 'volunteer', label: 'Volunteer' },
  { value: 'other', label: 'Other' },
]

export default function ContactModal({ isOpen, onClose, triggerRef }: ContactModalProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const modalRef = useRef<HTMLDivElement>(null)
  const firstFocusableRef = useRef<HTMLButtonElement>(null)
  const lastFocusableRef = useRef<HTMLButtonElement>(null)

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // Lock body scroll when modal is open
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

  // Focus management
  useEffect(() => {
    if (isOpen && firstFocusableRef.current) {
      firstFocusableRef.current.focus()
    }
  }, [isOpen])

  // Return focus to trigger element on close
  useEffect(() => {
    if (!isOpen && triggerRef?.current) {
      triggerRef.current.focus()
    }
  }, [isOpen, triggerRef])

  // Focus trap
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== 'Tab') return
    
    const focusableElements = modalRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    
    if (!focusableElements || focusableElements.length === 0) return
    
    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement
    
    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault()
      lastElement.focus()
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault()
      firstElement.focus()
    }
  }, [])

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    // Simulate API call - replace with actual submission logic later
    console.log('Contact Form Submission:', formData)
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleClose = () => {
    setFormData(initialFormData)
    setErrors({})
    setIsSubmitted(false)
    onClose()
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const inputClasses = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-lg border transition-all duration-200 text-gray-900 placeholder-gray-400 text-sm sm:text-base min-h-[44px] ${
      hasError
        ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200'
        : 'border-gray-300 focus:border-rcm-green-500 focus:ring-2 focus:ring-rcm-green-100'
    } focus:outline-none`

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
            aria-hidden="true"
          />
          
          {/* Modal Container */}
          <div className="flex min-h-full items-center justify-center p-4">
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-modal-title"
              onKeyDown={handleKeyDown}
            >
              {/* Close Button */}
              <button
                ref={firstFocusableRef}
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-rcm-green-500"
                aria-label="Close contact form"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>

              {/* Scrollable Content */}
              <div className="overflow-y-auto max-h-[90vh] p-6 sm:p-8">
                {isSubmitted ? (
                  /* Success State */
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-rcm-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-rcm-green-600" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600 mb-6 text-sm sm:text-base">
                      Thank you for reaching out. We&apos;ll get back to you soon, in shaa Allah.
                    </p>
                    <button
                      onClick={handleClose}
                      className="btn-primary"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  /* Form State */
                  <>
                    {/* Header */}
                    <div className="mb-6">
                      <h2
                        id="contact-modal-title"
                        className="text-xl sm:text-2xl font-bold text-gray-900 mb-2"
                      >
                        Contact Us
                      </h2>
                      <p className="text-sm sm:text-base text-gray-600">
                        Have a question or want to get involved? We&apos;d love to hear from you.
                      </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Full Name */}
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-sm font-medium text-gray-700 mb-1.5"
                        >
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Your full name"
                            className={`${inputClasses(!!errors.fullName)} pl-10`}
                            aria-invalid={!!errors.fullName}
                            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                          />
                        </div>
                        {errors.fullName && (
                          <p id="fullName-error" className="mt-1 text-sm text-red-500">
                            {errors.fullName}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1.5"
                        >
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className={`${inputClasses(!!errors.email)} pl-10`}
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? 'email-error' : undefined}
                          />
                        </div>
                        {errors.email && (
                          <p id="email-error" className="mt-1 text-sm text-red-500">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Phone (Optional) */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1.5"
                        >
                          Phone Number <span className="text-gray-400 font-normal">(optional)</span>
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(555) 123-4567"
                            className={`${inputClasses(false)} pl-10`}
                          />
                        </div>
                      </div>

                      {/* Reason for Contacting (Optional) */}
                      <div>
                        <label
                          htmlFor="reason"
                          className="block text-sm font-medium text-gray-700 mb-1.5"
                        >
                          Reason for Contacting
                        </label>
                        <div className="relative">
                          <select
                            id="reason"
                            name="reason"
                            value={formData.reason}
                            onChange={handleChange}
                            className={`${inputClasses(false)} appearance-none cursor-pointer pr-10`}
                          >
                            {reasonOptions.map(option => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                      </div>

                      {/* Subject (Optional) */}
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-gray-700 mb-1.5"
                        >
                          Subject <span className="text-gray-400 font-normal">(optional)</span>
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Brief subject line"
                          className={inputClasses(false)}
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700 mb-1.5"
                        >
                          Message <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="How can we help you?"
                            rows={4}
                            className={`${inputClasses(!!errors.message)} pl-10 resize-none`}
                            aria-invalid={!!errors.message}
                            aria-describedby={errors.message ? 'message-error' : undefined}
                          />
                        </div>
                        {errors.message && (
                          <p id="message-error" className="mt-1 text-sm text-red-500">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <button
                        ref={lastFocusableRef}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  )
}

