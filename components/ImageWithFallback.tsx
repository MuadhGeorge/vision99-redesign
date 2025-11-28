'use client'

import { useState } from 'react'
import Image, { ImageProps } from 'next/image'

interface ImageWithFallbackProps extends Omit<ImageProps, 'onError'> {
  fallbackSrc?: string
}

export default function ImageWithFallback({
  src,
  alt,
  fallbackSrc = '/images/placeholder.svg',
  ...props
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  return (
    <>
      {hasError ? (
        <div 
          className="w-full h-full bg-gradient-to-br from-rcm-green-100 to-rcm-teal-100 flex items-center justify-center"
          role="img"
          aria-label={alt}
        >
          <div className="text-center p-4">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-rcm-green-200 flex items-center justify-center">
              <svg className="w-8 h-8 text-rcm-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-sm text-rcm-green-700 font-medium">Campus Rendering</p>
            <p className="text-xs text-rcm-green-600">Image coming soon</p>
          </div>
        </div>
      ) : (
        <Image
          {...props}
          src={imgSrc}
          alt={alt}
          onError={() => {
            setHasError(true)
          }}
        />
      )}
    </>
  )
}

