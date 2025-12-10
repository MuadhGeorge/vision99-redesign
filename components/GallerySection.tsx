'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

/**
 * Gallery Section with Horizontal Swipeable Slider
 * 
 * Features:
 * - Native scroll + CSS scroll-snap for smooth swiping
 * - Touch-friendly on mobile
 * - Arrow buttons on desktop
 * - Category filtering
 * - Lightbox for full view
 */

type GalleryCategory = 'exterior' | 'sanctuary' | 'youth-community' | 'support'

interface GalleryImage {
  src: string
  title: string
  alt: string
  category: GalleryCategory
}

// Curated gallery with human-readable labels
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
  const sliderRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | 'all'>('all')
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

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

  // Update scroll button states
  const updateScrollButtons = useCallback(() => {
    if (!sliderRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
  }, [])

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    updateScrollButtons()
    slider.addEventListener('scroll', updateScrollButtons)
    window.addEventListener('resize', updateScrollButtons)

    return () => {
      slider.removeEventListener('scroll', updateScrollButtons)
      window.removeEventListener('resize', updateScrollButtons)
    }
  }, [updateScrollButtons, visibleImages])

  // Scroll slider by one card width
  const scrollSlider = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return
    const cardWidth = sliderRef.current.querySelector('.gallery-card')?.clientWidth || 300
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }

  return (
    <section id="gallery" className="section-padding bg-gray-50 scroll-mt-20" ref={ref}>
      <div className="max-w-[100vw] overflow-hidden">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 px-5 sm:px-6 md:px-8 lg:px-10"
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
          className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8 px-5 sm:px-6 md:px-8 lg:px-10"
        >
          {categoryOrder.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category)
                setSelectedImage(null)
                // Reset scroll position when changing category
                if (sliderRef.current) {
                  sliderRef.current.scrollLeft = 0
                }
              }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 min-h-[40px] ${
                activeCategory === category
                  ? 'bg-rcm-green-600 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </motion.div>

        {/* Horizontal Scrollable Gallery with Navigation */}
        <div className="relative group">
          {/* Left Arrow - Desktop */}
          <button
            onClick={() => scrollSlider('left')}
            disabled={!canScrollLeft}
            className={`hidden md:flex absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-xl transition-all duration-300 ${
              canScrollLeft 
                ? 'opacity-0 group-hover:opacity-100 hover:bg-white hover:scale-110' 
                : 'opacity-0 pointer-events-none'
            } focus:outline-none focus-visible:ring-2 focus-visible:ring-rcm-green-500`}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          {/* Right Arrow - Desktop */}
          <button
            onClick={() => scrollSlider('right')}
            disabled={!canScrollRight}
            className={`hidden md:flex absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-xl transition-all duration-300 ${
              canScrollRight 
                ? 'opacity-0 group-hover:opacity-100 hover:bg-white hover:scale-110' 
                : 'opacity-0 pointer-events-none'
            } focus:outline-none focus-visible:ring-2 focus-visible:ring-rcm-green-500`}
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Horizontal Slider */}
          <div
            ref={sliderRef}
            className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-5 sm:px-6 md:px-8 lg:px-10 pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {visibleImages.map((image, index) => (
              <motion.button
                key={image.src}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
                onClick={() => openLightbox(index)}
                className="gallery-card group relative flex-shrink-0 w-[85vw] xs:w-[75vw] sm:w-[60vw] md:w-[45vw] lg:w-[32vw] snap-start overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-rcm-green-500 focus-visible:ring-offset-2"
                aria-label={`View ${image.title}`}
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 85vw, (max-width: 768px) 60vw, (max-width: 1024px) 45vw, 32vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <p className="text-white text-sm sm:text-base font-semibold drop-shadow-lg">
                      {image.title}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Scroll Hint - Mobile */}
        <div className="md:hidden text-center mt-4 px-5">
          <p className="text-xs text-gray-500">← Swipe to explore more →</p>
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-2 sm:p-4"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery lightbox"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-2 sm:top-4 right-2 sm:right-4 p-2 text-white/80 hover:text-white transition-colors z-10 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full hover:bg-white/10"
              aria-label="Close gallery (Escape)"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 p-2 text-white/80 hover:text-white transition-colors z-10 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full hover:bg-white/10"
              aria-label="Previous image (Left Arrow)"
            >
              <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 p-2 text-white/80 hover:text-white transition-colors z-10 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full hover:bg-white/10"
              aria-label="Next image (Right Arrow)"
            >
              <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
            </button>

            {/* Image */}
            <div 
              className="relative max-w-6xl max-h-[80vh] sm:max-h-[85vh] w-full h-full mx-8 sm:mx-16"
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
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3 sm:p-6">
                <p className="text-white text-base sm:text-xl font-semibold mb-1">
                  {visibleImages[selectedImage].title}
                </p>
                <p className="text-white/70 text-xs sm:text-sm hidden sm:block">
                  {visibleImages[selectedImage].alt}
                </p>
                <p className="text-white/50 text-xs mt-1 sm:mt-2">
                  {selectedImage + 1} of {visibleImages.length} • <span className="hidden sm:inline">Use arrow keys to navigate</span><span className="sm:hidden">Swipe to navigate</span>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
