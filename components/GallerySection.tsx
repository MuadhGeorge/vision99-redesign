'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { galleryImages, type Photo } from '@/lib/imageMap'

/**
 * Ramp-Style Gallery Section
 * 
 * Large, hero-like cards in a horizontal slider
 * Swipeable on mobile, arrow navigation on desktop
 * Uses curated images from imageMap with proper categories and descriptions
 */

type GalleryCategory = 'exterior' | 'sanctuary' | 'youth-community' | 'support'

const categoryLabels: Record<GalleryCategory | 'all', string> = {
  all: 'All Spaces',
  exterior: 'Exterior',
  sanctuary: 'Sanctuary',
  'youth-community': 'Community',
  support: 'Support',
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

  // Filter images by category from the curated galleryImages array
  const visibleImages: Photo[] = activeCategory === 'all' 
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
    setCanScrollLeft(scrollLeft > 10)
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

  // Scroll slider smoothly
  const scrollSlider = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return
    const cardWidth = sliderRef.current.querySelector('.gallery-card')?.clientWidth || 400
    const gap = 24 // gap-6 = 24px
    const scrollAmount = direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap)
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }

  return (
    <section id="gallery" className="section-padding bg-gray-50 scroll-mt-20 overflow-hidden" ref={ref}>
      {/* Section Header */}
      <div className="container-max mb-8 sm:mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="section-label">Vision Gallery</span>
          <h2 className="section-heading">See the Vision Come to Life</h2>
          <p className="section-subheading mx-auto">
            Explore architectural renderings of every corner of the Beyond Walls campus.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mt-8"
        >
          {categoryOrder.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category)
                setSelectedImage(null)
                if (sliderRef.current) {
                  sliderRef.current.scrollLeft = 0
                }
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 min-h-[40px] ${
                activeCategory === category
                  ? 'bg-rcm-green-600 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Horizontal Scrollable Gallery - Ramp Style */}
      <div className="relative group">
        {/* Left Arrow - Desktop */}
        <button
          onClick={() => scrollSlider('left')}
          disabled={!canScrollLeft}
          className={`hidden lg:flex absolute left-4 xl:left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 items-center justify-center rounded-full bg-white shadow-2xl transition-all duration-300 ${
            canScrollLeft 
              ? 'opacity-0 group-hover:opacity-100 hover:scale-110 hover:shadow-xl' 
              : 'opacity-0 pointer-events-none'
          } focus:outline-none focus-visible:ring-2 focus-visible:ring-rcm-green-500 focus-visible:opacity-100`}
          aria-label="Previous story"
        >
          <ChevronLeft className="w-7 h-7 text-gray-700" />
        </button>

        {/* Right Arrow - Desktop */}
        <button
          onClick={() => scrollSlider('right')}
          disabled={!canScrollRight}
          className={`hidden lg:flex absolute right-4 xl:right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 items-center justify-center rounded-full bg-white shadow-2xl transition-all duration-300 ${
            canScrollRight 
              ? 'opacity-0 group-hover:opacity-100 hover:scale-110 hover:shadow-xl' 
              : 'opacity-0 pointer-events-none'
          } focus:outline-none focus-visible:ring-2 focus-visible:ring-rcm-green-500 focus-visible:opacity-100`}
          aria-label="Next story"
        >
          <ChevronRight className="w-7 h-7 text-gray-700" />
        </button>

        {/* Horizontal Slider Container */}
        <div
          ref={sliderRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pl-5 sm:pl-6 md:pl-8 lg:pl-10 pr-5 sm:pr-6 md:pr-8 lg:pr-10 pb-6"
        >
          {visibleImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.4) }}
              className="gallery-card group snap-start flex-shrink-0 w-[88vw] sm:w-[70vw] md:w-[55vw] lg:w-[42vw] xl:w-[38vw]"
            >
              {/* Card Container */}
              <div className="h-full bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
                {/* Large Image Area - Ramp-style tall hero image */}
                <button
                  onClick={() => openLightbox(index)}
                  className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden group/image focus:outline-none focus-visible:ring-2 focus-visible:ring-rcm-green-500 focus-visible:ring-offset-2"
                  aria-label={`View full image: ${image.title}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover/image:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 88vw, (max-width: 768px) 70vw, (max-width: 1024px) 55vw, (max-width: 1280px) 42vw, 38vw"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover/image:opacity-40 transition-opacity duration-500" />
                  
                  {/* View Full Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/95 backdrop-blur-sm px-5 py-3 rounded-full shadow-xl flex items-center gap-2">
                      <ExternalLink className="w-4 h-4 text-rcm-green-700" />
                      <span className="text-sm font-semibold text-rcm-green-700">View Full</span>
                    </div>
                  </div>
                </button>

                {/* Card Content */}
                <div className="p-6 sm:p-7 lg:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-rcm-green-700 transition-colors">
                    {image.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {image.alt}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll Hint - Mobile/Tablet */}
      <div className="lg:hidden text-center mt-4 px-5">
        <p className="text-xs sm:text-sm text-gray-500 font-medium">← Swipe to explore more →</p>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-3 sm:top-6 right-3 sm:right-6 p-2 sm:p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all z-10 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close gallery (press Escape)"
          >
            <X className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all z-10 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Previous image (Left Arrow)"
          >
            <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all z-10 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Next image (Right Arrow)"
          >
            <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>

          {/* Image Container */}
          <div 
            className="relative max-w-7xl max-h-[85vh] w-full h-full mx-12 sm:mx-20"
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
            {/* Image Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 sm:p-6">
              <p className="text-white text-lg sm:text-2xl font-bold mb-2">
                {visibleImages[selectedImage].title}
              </p>
              <p className="text-white/60 text-xs sm:text-sm">
                {selectedImage + 1} of {visibleImages.length} • <span className="hidden sm:inline">Use arrow keys to navigate</span><span className="sm:hidden">Tap arrows or swipe</span>
              </p>
            </div>
          </div>
        </motion.div>
      )}

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
