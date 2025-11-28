'use client'

import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import MasjidModel from './MasjidModel'
import SceneDirector, { SceneEnvironment } from './SceneDirector'

interface Hero3DSceneProps {
  className?: string
}

/**
 * Hero3DScene - Full-screen 3D canvas for the Beyond Walls hero section
 * 
 * Features:
 * - Displays the completed masjid model (phase 4)
 * - Slow, gentle camera orbit on desktop
 * - Static or minimal movement on mobile
 * - Teal-tinted lighting for calm, uplifting vibe
 * - Graceful loading fallback
 * 
 * TODO: Replace placeholder model with actual GLB from /public/models/vision99-campus.glb
 */
export default function Hero3DScene({ className = '' }: Hero3DSceneProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [hasWebGL, setHasWebGL] = useState(true)

  useEffect(() => {
    // Check for mobile device
    setIsMobile(window.innerWidth < 768)
    
    // Check for WebGL support
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      setHasWebGL(!!gl)
    } catch {
      setHasWebGL(false)
    }

    // Handle resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500)
    return () => clearTimeout(timer)
  }, [])

  // Fallback for no WebGL support
  if (!hasWebGL) {
    return (
      <div className={`${className} relative bg-gradient-to-br from-teal-800 to-teal-600`}>
        <div className="absolute inset-0 flex items-center justify-center">
          {/* TODO: Replace with actual pre-rendered image of the masjid */}
          <div className="text-center text-white p-8">
            <div className="w-64 h-64 mx-auto mb-4 bg-white/10 rounded-lg flex items-center justify-center">
              <svg className="w-32 h-32 text-white/50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <p className="text-white/70">Beyond Walls - Vision99 Campus</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`${className} relative`}>
      {/* Loading overlay */}
      <div
        className={`absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-br from-teal-800 to-teal-700 transition-opacity duration-1000 ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="text-center text-white">
          <div className="spinner mx-auto mb-4" />
          <p className="text-lg font-light tracking-wide">Loading Beyond Walls Campus...</p>
        </div>
      </div>

      {/* 3D Canvas */}
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ 
          antialias: true,
          alpha: false,
          powerPreference: 'high-performance',
        }}
        className="!absolute inset-0"
      >
        <SceneEnvironment />
        
        <PerspectiveCamera
          makeDefault
          position={[10, 5, 10]}
          fov={45}
          near={0.1}
          far={100}
        />

        <Suspense fallback={null}>
          <SceneDirector phase={4} isHero={true} />
          <MasjidModel phase={4} opacity={isLoaded ? 1 : 0} />
        </Suspense>

        {/* Orbit controls - limited on mobile */}
        <OrbitControls
          enablePan={false}
          enableZoom={!isMobile}
          minDistance={8}
          maxDistance={20}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2.2}
          autoRotate={!isMobile}
          autoRotateSpeed={0.3}
          dampingFactor={0.05}
          enableDamping
        />
      </Canvas>
    </div>
  )
}

/**
 * Lightweight loading placeholder for lazy loading
 */
export function Hero3DScenePlaceholder() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-teal-800 to-teal-700 flex items-center justify-center">
      <div className="text-center text-white">
        <div className="spinner mx-auto mb-4" />
        <p className="text-lg font-light tracking-wide">Loading Beyond Walls Campus...</p>
      </div>
    </div>
  )
}
