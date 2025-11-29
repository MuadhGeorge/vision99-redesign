'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect, useCallback } from 'react'
import ImageWithFallback from './ImageWithFallback'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  {
    src: '/images/render-courtyard.jpg',
    alt: 'Peaceful courtyard with fountain, flowering trees, and geometric paving patterns leading to the main sanctuary entrance',
    caption: 'Central Courtyard & Sanctuary Entrance',
  },
  {
    src: '/images/render-aerial.jpg',
    alt: 'Aerial view of the complete RCM campus showing solar panel arrays on rooftops, landscaped grounds, and interconnected buildings',
    caption: 'Campus Aerial with Solar Arrays',
  },
  {
    src: '/images/render-front.jpg',
    alt: 'Street-level view of the main building featuring the RCM logo, modern white stone facade with horizontal textures, and warm wood accents',
    caption: 'Main Building Street View',
  },
  {
    src: '/images/render-side.jpg',
    alt: 'Side perspective of the campus from landscaped gardens, showing the modern minaret tower and connected building wings',
    caption: 'Campus Side View',
  },
  {
    src: '/images/render-gardens.jpg',
    alt: 'Lush entrance gardens with native plantings, pampas grass, and mature trees framing views of the sanctuary',
    caption: 'Entrance Gardens & Landscaping',
  },
  {
    src: '/images/render-firepit.jpg',
    alt: 'Community gathering space featuring a circular stone fire pit under a majestic oak tree, perfect for evening programs and conversations',
    caption: 'Fire Pit Gathering Space',
  },
  {
    src: '/images/render-pavilion.jpg',
    alt: 'Rustic timber pavilion with metal roof, designed for outdoor prayers, community events, and youth activities',
    caption: 'Outdoor Timber Pavilion',
  },
  {
    src: '/images/render-playground.jpg',
    alt: 'Colorful children\'s playground with slides and climbing structures, surrounded by native landscaping and shade trees',
    caption: 'Children\'s Playground',
  },
  {
    src: '/images/render-overview.jpg',
    alt: 'Bird\'s eye view of the complete Beyond Walls campus showing the sanctuary, youth center, family hub, pavilion, and ample parking',
    caption: 'Complete Campus Overview',
  },
  {
    src: '/images/render-entrance.jpg',
    alt: 'Close-up of the main entrance featuring intricate geometric mashrabiya screens, arched doorways, and warm wood framing',
    caption: 'Main Entrance Detail',
  },
]

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
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => openLightbox(index)}
              className={`relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ${
                index === 0 || index === 4 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              aria-label={`View ${image.caption}`}
            >
              <div className={`relative ${index === 0 || index === 4 ? 'aspect-square' : 'aspect-[4/3]'}`}>
                <ImageWithFallback
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
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors z-10"
              aria-label="Close gallery"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-4 p-2 text-white/80 hover:text-white transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 p-2 text-white/80 hover:text-white transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Image */}
            <div 
              className="relative max-w-6xl max-h-[85vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithFallback
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-lg font-semibold">
                  {galleryImages[selectedImage].caption}
                </p>
                <p className="text-white/70 text-sm mt-1">
                  {galleryImages[selectedImage].alt}
                </p>
              </div>
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => { e.stopPropagation(); setSelectedImage(index); }}
                  className={`w-2 h-2 rounded-full transition-all ${
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

