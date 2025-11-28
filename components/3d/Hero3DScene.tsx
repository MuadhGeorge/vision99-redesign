'use client'

import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import MasjidModel from './MasjidModel'
import CameraRig from './CameraRig'
import { PostProcessing, SunRays } from './Effects'
import { FloatingParticles, DustMotes } from './Particles'
import { AnimatedSky, GroundPlane, SceneLighting } from './Environment'

interface Hero3DSceneProps {
  className?: string
}

/**
 * Hero3DScene - Standalone 3D scene for hero section (fallback/alternative)
 */
export default function Hero3DScene({ className = '' }: Hero3DSceneProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [hasWebGL, setHasWebGL] = useState(true)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl')
      setHasWebGL(!!gl)
    } catch {
      setHasWebGL(false)
    }

    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500)
    return () => clearTimeout(timer)
  }, [])

  if (!hasWebGL) {
    return (
      <div className={`${className} relative bg-gradient-to-br from-teal-900 to-gray-900`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-teal-800/50 rounded-full flex items-center justify-center">
              <svg className="w-16 h-16 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h2 className="text-2xl font-display mb-4">Beyond Walls</h2>
            <p className="text-white/70">The World&apos;s First Living Building Masjid</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`${className} relative`}>
      <div
        className={`absolute inset-0 z-10 flex items-center justify-center bg-black transition-opacity duration-1000 ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="text-center text-white">
          <div className="spinner mx-auto mb-4" />
          <p className="text-lg font-light tracking-wide">Loading Beyond Walls...</p>
        </div>
      </div>

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
        <color attach="background" args={['#0a0f0d']} />
        <fog attach="fog" args={['#0a1510', 30, 100]} />

        <PerspectiveCamera makeDefault position={[15, 10, 15]} fov={50} near={0.1} far={200} />

        <Suspense fallback={null}>
          <AnimatedSky />
          <SceneLighting phase={4} />
          <SunRays />
          <GroundPlane />
          <MasjidModel phase={4} scrollProgress={1} />
          <FloatingParticles count={100} />
          <DustMotes count={200} />
          <CameraRig scrollProgress={0} isHero={true} />
          <PostProcessing bloomIntensity={0.5} vignetteIntensity={0.3} />
        </Suspense>

        <OrbitControls
          enablePan={false}
          enableZoom={!isMobile}
          minDistance={10}
          maxDistance={30}
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
