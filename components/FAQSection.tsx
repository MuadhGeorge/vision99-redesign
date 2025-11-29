'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown, MessageCircle } from 'lucide-react'

const faqs = [
  {
    question: 'What is the Living Building Challenge?',
    answer: 'The Living Building Challenge is the world\'s most rigorous proven performance standard for buildings. It requires buildings to generate more energy than they use, capture and treat all water on-site, use only non-toxic materials, and create a net-positive impact on human and ecological health. RCM will be the first faith-based project to pursue this certification.',
  },
  {
    question: 'Why is this project called "Beyond Walls"?',
    answer: 'For decades, many Muslim communities focused on building walls—both literal and figurative—to protect ourselves. "Beyond Walls" represents our shift toward openness, sustainability, and integration. We\'re building a campus that welcomes all people, contributes positively to our environment, and serves as a model for communities worldwide.',
  },
  {
    question: 'When will construction begin and end?',
    answer: 'Groundbreaking is scheduled for December 6, 2025. Horizontal site work (clearing, utilities, parking infrastructure) will take approximately 8 months. Vertical construction follows, with our target grand opening in August 2027.',
  },
  {
    question: 'How can I contribute to the project?',
    answer: 'There are several ways to support Beyond Walls: Join the Founders Circle for major gifts and naming opportunities, make a one-time donation, set up a recurring monthly contribution, volunteer your skills and time, or help spread the word in your networks. Every contribution, regardless of size, helps build this legacy.',
  },
  {
    question: 'What makes this campus different from a typical mosque?',
    answer: 'Beyond Walls is designed as a complete community campus with three dedicated buildings: a sanctuary for worship, a youth center for the next generation, and a family hub for community programs. It\'s designed for sustainability, accessibility, and multi-generational use—not just a prayer space, but a complete ecosystem for Muslim life in America.',
  },
  {
    question: 'Is my donation tax-deductible?',
    answer: 'Yes. Roswell Community Masjid is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the extent allowed by law. You will receive a receipt for your records.',
  },
  {
    question: 'How will the campus achieve net-positive energy?',
    answer: 'The campus will feature extensive solar panel arrays, high-performance building envelopes, energy-efficient HVAC systems, LED lighting throughout, and smart building management systems. Combined, these features will allow us to generate more energy than we consume annually.',
  },
  {
    question: 'Can non-Muslims visit or use the campus?',
    answer: 'Absolutely. A core value of Beyond Walls is radical hospitality. The campus is designed to welcome people of all faiths and backgrounds for interfaith dialogue, community events, educational programs, and social services. Our doors are open to all.',
  },
]

export default function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="section-padding bg-white scroll-mt-20" ref={ref}>
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label">Questions</span>
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <p className="section-subheading mx-auto">
            Have questions about Beyond Walls? Here are answers to some common inquiries.
          </p>
        </motion.div>

        {/* FAQ Container */}
        <div className="max-w-3xl mx-auto">
          <div 
            className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden divide-y divide-gray-100" 
            role="region" 
            aria-label="Frequently Asked Questions"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              const panelId = `faq-panel-${index}`
              const buttonId = `faq-button-${index}`
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                >
                  <h3>
                    <button
                      id={buttonId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className={`w-full flex items-center justify-between p-5 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-rcm-green-500 focus-visible:ring-inset ${
                        isOpen ? 'bg-rcm-green-50/50' : 'hover:bg-gray-50'
                      }`}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                    >
                      <span className={`font-medium pr-4 ${isOpen ? 'text-rcm-green-700' : 'text-gray-900'}`}>
                        {faq.question}
                      </span>
                      <span className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                        <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-rcm-green-600' : 'text-gray-400'}`} />
                      </span>
                    </button>
                  </h3>
                  
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    initial={false}
                    animate={{
                      height: isOpen ? 'auto' : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-gray-600 leading-relaxed text-sm">
                      {faq.answer}
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full bg-slate-50 border border-slate-200 px-6 py-3">
            <MessageCircle className="w-5 h-5 text-rcm-green-600" />
            <span className="text-gray-600">
              Don&apos;t see your question?{' '}
              <a 
                href="mailto:info@roswellmasjid.org" 
                className="text-rcm-green-600 font-semibold hover:text-rcm-green-700 underline underline-offset-2"
              >
                Contact us
              </a>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
