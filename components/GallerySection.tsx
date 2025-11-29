'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { galleryPhotos, getAltText, Photo } from '@/lib/imageMap'

/**
 * Image assignments for Gallery Section:
 * - Uses ALL photos from /public/Photos (28 total)
 * - Exterior photos (10): EXT-01 through EXT-14
 * - Interior photos (18): CAFE, GYM, PRAYER HALL, YOUTH CENTER, etc.
 */

// Generate gallery items with proper captions from the image map
const galleryImages = galleryPhotos.map((photo: Photo) => {
  // Create human-readable captions based on photo metadata
  let caption = 'Campus Rendering'
  
  if (photo.category === 'exterior') {
    caption = `Exterior View - ${photo.name}`
  } else if (photo.subCategory) {
    const subCategoryNames: Record<string, string> = {
      'cafe': 'Community Cafe',
      'gym': 'Recreation & Gymnasium',
      'prayer-hall': 'Prayer Hall Sanctuary',
      'youth': 'Youth Center',
      'event-hall': 'Multi-Purpose Event Hall',
      'toddler': 'Family & Toddler Space',
      'main-hall': 'Main Entrance Hall',
      'wudu': 'Wudu Facilities',
      'shoe-hall': 'Entry & Shoe Hall',
      'office': 'Administrative Offices',
    }
    caption = subCategoryNames[photo.subCategory] || 'Interior View'
  }
  
  return {
    src: photo.src,
    alt: getAltText.gallery(photo),
    caption,
  }
})

export default function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedImage(index)
  const closeLightbox = () => setSelectedImage(null)
  
  const goToNext = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1)
    }
  }, [selectedImage])

  const goToPrevious = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }, [selectedImage])

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
      // Prevent body scroll when lightbox is open
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
          className="text-center mb-12"
        >
          <span className="section-label">Vision Gallery</span>
          <h2 className="section-heading">See the Vision Come to Life</h2>
          <p className="section-subheading mx-auto">
            Explore architectural renderings of every corner of the Beyond Walls campus—from the 
            serene sanctuary to the vibrant youth spaces.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.5) }}
              onClick={() => openLightbox(index)}
              className={`relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-rcm-green-500 ${
                index === 0 || index === 10 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              aria-label={`View ${image.caption}`}
            >
              <div className={`relative ${index === 0 || index === 10 ? 'aspect-square' : 'aspect-[4/3]'}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-medium">{image.caption}</p>
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
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-lg font-semibold">
                  {galleryImages[selectedImage].caption}
                </p>
                <p className="text-white/70 text-sm mt-1">
                  {selectedImage + 1} of {galleryImages.length}
                </p>
              </div>
            </div>

            {/* Dots - show subset for many images */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 max-w-md overflow-x-auto px-4">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => { e.stopPropagation(); setSelectedImage(index); }}
                  className={`w-2 h-2 rounded-full transition-all flex-shrink-0 ${
                    index === selectedImage ? 'bg-white w-4' : 'bg-white/40 hover:bg-white/60'
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
