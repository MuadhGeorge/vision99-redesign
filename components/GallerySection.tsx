'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

/**
 * Curated Gallery for Vision Section
 * 
 * Categories:
 * - exterior: Campus & exterior views
 * - sanctuary: Prayer hall & sanctuary
 * - youth-community: Youth center, cafe, gym, event spaces
 * - support: Entry, wudu, offices
 */

type GalleryCategory = 'exterior' | 'sanctuary' | 'youth-community' | 'support'

interface GalleryImage {
  src: string
  title: string
  alt: string
  category: GalleryCategory
}

// Curated gallery with human-readable labels (using existing image paths)
const galleryImages: GalleryImage[] = [
  // EXTERIOR & CAMPUS (4 images)
  {
    src: '/Photos/Copy of P2874-RCC-EXT-01_05.png',
    title: 'Campus Aerial & Entry Plaza',
    alt: 'Aerial view of the new Roswell Community Masjid campus showing entry plaza and landscaping',
    category: 'exterior',
  },
  {
    src: '/Photos/Copy of P2874-RCC-EXT-07_05.png',
    title: 'Sanctuary & Courtyard',
    alt: 'Exterior view of the sanctuary building with central courtyard',
    category: 'exterior',
  },
  {
    src: '/Photos/Copy of P2874-RCC-EXT-09_05.png',
    title: 'Campus from Street Approach',
    alt: 'Street-level view of the new RCM campus as visitors approach',
    category: 'exterior',
  },
  {
    src: '/Photos/Copy of P2874-RCC-EXT-12_05.png',
    title: 'Evening View of Full Campus',
    alt: 'Evening rendering showing the full campus with warm lighting',
    category: 'exterior',
  },
  
  // SANCTUARY & PRAYER (2 images)
  {
    src: '/Photos/Copy of P2874-RCC-INT-PRAYER HALL-05_03.png',
    title: 'Main Prayer Hall – Daylight',
    alt: 'Prayer hall sanctuary flooded with natural daylight through geometric windows',
    category: 'sanctuary',
  },
  {
    src: '/Photos/Copy of P2874-RCC-INT-PRAYER HALL-13_03.png',
    title: 'Prayer Hall – View from Rear',
    alt: 'Prayer hall sanctuary viewed from the rear showing full space and mihrab',
    category: 'sanctuary',
  },
  
  // YOUTH & COMMUNITY (5 images)
  {
    src: '/Photos/Copy of P2874-RCC-INT-YOUTH CENTER-19_03.png',
    title: 'Youth Center & Lounge',
    alt: 'Modern youth center lounge designed for teens and young adults',
    category: 'youth-community',
  },
  {
    src: '/Photos/Copy of P2874-RCC-INT-CAFE-07_02.png',
    title: 'Community Cafe & Social Space',
    alt: 'Community cafe with comfortable seating for gathering and conversation',
    category: 'youth-community',
  },
  {
    src: '/Photos/Copy of P2874-RCC-INT-EVENT HALL-10_03.png',
    title: 'Multi-Purpose Hall & Events',
    alt: 'Flexible multi-purpose event hall for community gatherings and celebrations',
    category: 'youth-community',
  },
  {
    src: '/Photos/Copy of P2874-RCC-INT-GYM-01_03.png',
    title: 'Recreation & Gymnasium',
    alt: 'Full-size gymnasium for basketball, sports, and recreational activities',
    category: 'youth-community',
  },
  {
    src: '/Photos/Copy of P2874-RCC-INT-TODDLER MOMMY-20_03.png',
    title: 'Family & Toddler Lounge',
    alt: 'Welcoming space designed for mothers and young children',
    category: 'youth-community',
  },
  
  // SUPPORT SPACES (3 images)
  {
    src: '/Photos/Copy of P2874-RCC-INT-MAIN HALL-02_03.png',
    title: 'Entry & Welcome Hall',
    alt: 'Grand entrance hall welcoming visitors to the new campus',
    category: 'support',
  },
  {
    src: '/Photos/Copy of P2874-RCC-INT-WADU-11_03.png',
    title: 'Wudu & Preparation Area',
    alt: 'Modern wudu facilities with natural materials and good lighting',
    category: 'support',
  },
  {
    src: '/Photos/Copy of P2874-RCC-INT-OFFICE-16_03.png',
    title: 'Administrative Offices',
    alt: 'Professional administrative offices for campus management',
    category: 'support',
  },
]

const categoryLabels: Record<GalleryCategory | 'all', string> = {
  all: 'All',
  exterior: 'Exterior & Campus',
  sanctuary: 'Sanctuary & Prayer',
  'youth-community': 'Youth & Community',
  support: 'Support Spaces',
}

const categoryOrder: (GalleryCategory | 'all')[] = ['all', 'exterior', 'sanctuary', 'youth-community', 'support']

export default function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | 'all'>('all')

  // Filter images by category
  const visibleImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  const openLightbox = (index: number) => setSelectedImage(index)
  const closeLightbox = () => setSelectedImage(null)
  
  const goToNext = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === visibleImages.length - 1 ? 0 : selectedImage + 1)
    }
  }, [selectedImage, visibleImages.length])

  const goToPrevious = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? visibleImages.length - 1 : selectedImage - 1)
    }
  }, [selectedImage, visibleImages.length])

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return
      
      switch (e.key) {
        case 'Escape':
          closeLightbox()
          break
        case 'ArrowLeft':
          goToPrevious()
          break
        case 'ArrowRight':
          goToNext()
          break
      }
    }

    if (selectedImage !== null) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedImage, goToNext, goToPrevious])

  return (
    <section id="gallery" className="section-padding bg-gray-50 scroll-mt-20" ref={ref}>
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="section-label">Vision Gallery</span>
          <h2 className="section-heading">See the Vision Come to Life</h2>
          <p className="section-subheading mx-auto">
            Explore architectural renderings of every corner of the Beyond Walls campus—from the 
            serene sanctuary to the vibrant youth spaces.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categoryOrder.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category)
                setSelectedImage(null) // Reset lightbox when changing category
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-rcm-green-600 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {visibleImages.map((image, index) => (
            <motion.button
              key={image.src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
              onClick={() => openLightbox(index)}
              className={`relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-rcm-green-500 focus-visible:ring-offset-2 ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              aria-label={`View ${image.title}`}
            >
              <div className={`relative ${index === 0 ? 'aspect-square md:aspect-[4/3]' : 'aspect-[4/3]'}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes={index === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                {/* Title always visible */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm md:text-base font-semibold drop-shadow-lg">
                    {image.title}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery lightbox"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors z-10"
              aria-label="Close gallery (Escape)"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-4 p-2 text-white/80 hover:text-white transition-colors z-10"
              aria-label="Previous image (Left Arrow)"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 p-2 text-white/80 hover:text-white transition-colors z-10"
              aria-label="Next image (Right Arrow)"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Image */}
            <div 
              className="relative max-w-6xl max-h-[85vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={visibleImages[selectedImage].src}
                alt={visibleImages[selectedImage].alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <p className="text-white text-xl font-semibold mb-1">
                  {visibleImages[selectedImage].title}
                </p>
                <p className="text-white/70 text-sm">
                  {visibleImages[selectedImage].alt}
                </p>
                <p className="text-white/50 text-xs mt-2">
                  {selectedImage + 1} of {visibleImages.length} • Use arrow keys to navigate
                </p>
              </div>
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-md overflow-x-auto px-4">
              {visibleImages.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => { e.stopPropagation(); setSelectedImage(index); }}
                  className={`w-2 h-2 rounded-full transition-all flex-shrink-0 ${
                    index === selectedImage ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
