'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface ParticlesProps {
  count?: number
  color?: string
  size?: number
  spread?: number
  speed?: number
}

/**
 * Floating Light Particles - Ambient atmosphere effect
 * 
 * Creates magical floating particles that drift through the scene
 */
export function FloatingParticles({
  count = 200,
  color = '#14b8a6',
  size = 0.08,
  spread = 30,
  speed = 0.3
}: ParticlesProps) {
  const meshRef = useRef<THREE.Points>(null)
  const time = useRef(0)

  // Generate initial particle positions
  const [positions, velocities, phases] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const vel = new Float32Array(count * 3)
    const pha = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      // Random position within spread
      pos[i * 3] = (Math.random() - 0.5) * spread
      pos[i * 3 + 1] = Math.random() * spread * 0.5
      pos[i * 3 + 2] = (Math.random() - 0.5) * spread

      // Random velocity
      vel[i * 3] = (Math.random() - 0.5) * 0.02
      vel[i * 3 + 1] = Math.random() * 0.01 + 0.005
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.02

      // Random phase for sine wave variation
      pha[i] = Math.random() * Math.PI * 2
    }

    return [pos, vel, pha]
  }, [count, spread])

  useFrame((state, delta) => {
    if (!meshRef.current) return
    time.current += delta * speed

    const posArray = meshRef.current.geometry.attributes.position.array as Float32Array

    for (let i = 0; i < count; i++) {
      const i3 = i * 3

      // Animate position with sine waves
      posArray[i3] += velocities[i3] + Math.sin(time.current + phases[i]) * 0.002
      posArray[i3 + 1] += velocities[i3 + 1]
      posArray[i3 + 2] += velocities[i3 + 2] + Math.cos(time.current + phases[i]) * 0.002

      // Reset particles that go too high
      if (posArray[i3 + 1] > spread * 0.5) {
        posArray[i3 + 1] = -spread * 0.1
        posArray[i3] = (Math.random() - 0.5) * spread
        posArray[i3 + 2] = (Math.random() - 0.5) * spread
      }
    }

    meshRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        color={color}
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

/**
 * Dust Motes - Smaller, denser particles for atmosphere
 */
export function DustMotes({ count = 500 }: { count?: number }) {
  return (
    <FloatingParticles
      count={count}
      color="#ffffff"
      size={0.02}
      spread={40}
      speed={0.1}
    />
  )
}

/**
 * Golden Sparkles - Special effect for donation/highlight sections
 */
export function GoldenSparkles({ count = 100 }: { count?: number }) {
  return (
    <FloatingParticles
      count={count}
      color="#d4af37"
      size={0.12}
      spread={20}
      speed={0.5}
    />
  )
}

