/**
 * Reusable animation variants for Framer Motion
 * 
 * Usage:
 * import { fadeInUp, staggerContainer } from '@/components/animations'
 * 
 * <motion.div variants={staggerContainer} initial="hidden" whileInView="visible">
 *   <motion.div variants={fadeInUp}>Content</motion.div>
 * </motion.div>
 */

import { Variants } from 'framer-motion'

// Basic fade in from bottom
export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 16 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.4, 
      ease: 'easeOut' 
    },
  },
}

// Fade in from left
export const fadeInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -20 
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { 
      duration: 0.5, 
      ease: 'easeOut' 
    },
  },
}

// Fade in from right
export const fadeInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 20 
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { 
      duration: 0.5, 
      ease: 'easeOut' 
    },
  },
}

// Simple fade in
export const fadeIn: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: { 
      duration: 0.4 
    },
  },
}

// Scale up fade in (for cards, badges)
export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.9 
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.4, 
      ease: 'easeOut' 
    },
  },
}

// Container with staggered children
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

// Slower stagger for larger items
export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
}

// Child item for staggered animations
export const staggerItem: Variants = {
  hidden: { 
    opacity: 0, 
    y: 16 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.4, 
      ease: 'easeOut' 
    },
  },
}

// Hover effects for cards (use with whileHover)
export const cardHover = {
  scale: 1.02,
  y: -4,
  transition: { 
    duration: 0.2, 
    ease: 'easeOut' 
  },
}

// Subtle hover for smaller elements
export const subtleHover = {
  scale: 1.05,
  transition: { 
    duration: 0.15 
  },
}

// Default viewport settings for whileInView
export const defaultViewport = {
  once: true,
  amount: 0.3,
}

// Viewport for larger sections
export const sectionViewport = {
  once: true,
  margin: '-100px',
}

