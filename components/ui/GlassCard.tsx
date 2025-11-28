'use client'

import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover3D?: boolean
  glow?: 'teal' | 'gold' | 'none'
  float?: boolean
  delay?: number
}

/**
 * GlassCard - Glassmorphism card with 3D hover effect
 * 
 * Features:
 * - Backdrop blur and subtle borders
 * - 3D tilt on hover (perspective transform)
 * - Optional glow effect
 * - Optional floating animation
 */
export default function GlassCard({
  children,
  className = '',
  hover3D = true,
  glow = 'none',
  float = false,
  delay = 0,
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Mouse position for 3D effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth spring physics
  const springConfig = { stiffness: 150, damping: 15 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hover3D || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  const glowClasses = {
    teal: 'shadow-[0_0_30px_rgba(20,184,166,0.3)]',
    gold: 'shadow-[0_0_30px_rgba(212,175,55,0.3)]',
    none: '',
  }

  return (
    <motion.div
      ref={cardRef}
      className={`
        relative overflow-hidden rounded-2xl
        bg-white/[0.08] backdrop-blur-xl
        border border-white/[0.15]
        ${isHovered && glow !== 'none' ? glowClasses[glow] : ''}
        ${className}
      `}
      style={{
        rotateX: hover3D ? rotateX : 0,
        rotateY: hover3D ? rotateY : 0,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      animate={float ? {
        y: [0, -8, 0],
        transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
      } : {}}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}

/**
 * GlassButton - Animated glassmorphism button
 */
interface GlassButtonProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'secondary' | 'gold'
  className?: string
}

export function GlassButton({
  children,
  onClick,
  href,
  variant = 'primary',
  className = '',
}: GlassButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const variants = {
    primary: 'bg-gradient-to-r from-teal-600 to-teal-500 text-white',
    secondary: 'bg-white/10 border border-white/30 text-white',
    gold: 'bg-gradient-to-r from-amber-500 to-yellow-400 text-gray-900',
  }

  const Component = href ? motion.a : motion.button

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`
        relative px-8 py-4 rounded-xl font-semibold
        overflow-hidden cursor-pointer
        ${variants[variant]}
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        scale: 1.02,
        y: -4,
        rotateX: 5,
        rotateY: -3,
      }}
      whileTap={{ scale: 0.98 }}
      style={{ transformStyle: 'preserve-3d' }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {/* Glow effect */}
      <motion.div
        className={`
          absolute inset-0 rounded-xl blur-xl
          ${variant === 'gold' ? 'bg-amber-400' : 'bg-teal-400'}
        `}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.4 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%' }}
        animate={{ x: isHovered ? '100%' : '-100%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />
      
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </Component>
  )
}

