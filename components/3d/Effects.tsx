'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { EffectComposer, Bloom, Vignette, ChromaticAberration, DepthOfField } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import * as THREE from 'three'

interface PostProcessingProps {
  bloomIntensity?: number
  vignetteIntensity?: number
  enableDOF?: boolean
}

/**
 * Cinematic Post-Processing Effects
 * 
 * Adds:
 * - Bloom for glowing elements
 * - Vignette for cinematic framing
 * - Subtle chromatic aberration for film look
 * - Optional depth of field
 */
export function PostProcessing({ 
  bloomIntensity = 0.8, 
  vignetteIntensity = 0.4,
  enableDOF = false 
}: PostProcessingProps) {
  return (
    <EffectComposer>
      <Bloom
        intensity={bloomIntensity}
        luminanceThreshold={0.6}
        luminanceSmoothing={0.9}
        mipmapBlur
      />
      <Vignette
        offset={0.3}
        darkness={vignetteIntensity}
        blendFunction={BlendFunction.NORMAL}
      />
      <ChromaticAberration
        offset={new THREE.Vector2(0.0005, 0.0005)}
        blendFunction={BlendFunction.NORMAL}
      />
      {enableDOF && (
        <DepthOfField
          focusDistance={0.02}
          focalLength={0.05}
          bokehScale={3}
        />
      )}
    </EffectComposer>
  )
}

/**
 * Animated Sun Rays / God Rays effect (simplified)
 */
export function SunRays() {
  const lightRef = useRef<THREE.DirectionalLight>(null)
  const time = useRef(0)

  useFrame((state, delta) => {
    time.current += delta
    if (lightRef.current) {
      // Subtle intensity pulsing
      lightRef.current.intensity = 2 + Math.sin(time.current * 0.5) * 0.3
      // Gentle position drift
      lightRef.current.position.x = 10 + Math.sin(time.current * 0.1) * 2
      lightRef.current.position.y = 20 + Math.sin(time.current * 0.08) * 1
    }
  })

  return (
    <directionalLight
      ref={lightRef}
      position={[10, 20, 10]}
      intensity={2}
      color="#fff5e6"
      castShadow
      shadow-mapSize={[2048, 2048]}
      shadow-camera-far={50}
      shadow-camera-left={-25}
      shadow-camera-right={25}
      shadow-camera-top={25}
      shadow-camera-bottom={-25}
      shadow-bias={-0.0001}
    />
  )
}

