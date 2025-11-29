'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface CountUpOnViewProps {
  target: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

/**
 * Animated count-up component that triggers when scrolled into view
 * 
 * Usage:
 * <CountUpOnView target={105} suffix="%" />
 * <CountUpOnView target={24} suffix="/7" />
 */
export function CountUpOnView({ 
  target, 
  suffix = '', 
  prefix = '',
  duration = 1.5,
  className = ''
}: CountUpOnViewProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (prefersReducedMotion) {
      setCount(target)
      return
    }

    const startTime = Date.now()
    const endTime = startTime + duration * 1000

    const updateCount = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / (duration * 1000), 1)
      
      // Easing function (ease-out cubic)
      const eased = 1 - Math.pow(1 - progress, 3)
      
      setCount(Math.round(eased * target))

      if (progress < 1) {
        requestAnimationFrame(updateCount)
      }
    }

    requestAnimationFrame(updateCount)
  }, [isInView, target, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  )
}

interface FadeInTextProps {
  text: string
  className?: string
}

/**
 * Simple fade-in text for non-numeric values like "<1/3"
 */
export function FadeInText({ text, className = '' }: FadeInTextProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <span 
      ref={ref} 
      className={`transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0'} ${className}`}
    >
      {text}
    </span>
  )
}

