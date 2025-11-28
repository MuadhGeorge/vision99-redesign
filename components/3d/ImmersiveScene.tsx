'use client'

import { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Preload } from '@react-three/drei'
import CameraRig from './CameraRig'
import MasjidModel from './MasjidModel'
import { PostProcessing, SunRays } from './Effects'
import { FloatingParticles, DustMotes, GoldenSparkles } from './Particles'
import { AnimatedSky, AnimatedClouds, GroundPlane, SceneLighting } from './Environment'

interface ImmersiveSceneProps {
  scrollProgress: number
  timelinePhase: number
  className?: string
}

/**
 * ImmersiveScene - The main 3D world container
 * 
 * This is the "scene-first" architecture where the 3D environment
 * is the primary experience layer, with UI overlaid on top.
 */
export default function ImmersiveScene({ 
  scrollProgress, 
  timelinePhase,
  className = '' 
}: ImmersiveSceneProps) {
  const [isReady, setIsReady] = useState(false)
  const [hasWebGL, setHasWebGL] = useState(true)

  useEffect(() => {
    // Check WebGL support
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl')
      setHasWebGL(!!gl)
    } catch {
      setHasWebGL(false)
    }
    
    // Simulate loading
    const timer = setTimeout(() => setIsReady(true), 800)
    return () => clearTimeout(timer)
  }, [])

  // Fallback for no WebGL
  if (!hasWebGL) {
    return (
      <div className={`${className} fixed inset-0 bg-gradient-to-br from-teal-900 to-gray-900`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-8 max-w-md">
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
    <div className={`${className} fixed inset-0`}>
      {/* Loading overlay */}
      <div
        className={`absolute inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-1000 ${
          isReady ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="text-center">
          <div className="spinner mx-auto mb-6" />
          <p className="text-white/80 text-lg font-light tracking-wider animate-pulse">
            Entering Beyond Walls...
          </p>
        </div>
      </div>

      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: 'high-performance',
          stencil: false,
        }}
        className="!absolute inset-0"
      >
        <PerspectiveCamera makeDefault position={[20, 15, 20]} fov={50} near={0.1} far={500} />

        {/* Scene Environment */}
        <color attach="background" args={['#0a0f0d']} />
        <fog attach="fog" args={['#0a1510', 30, 100]} />

        <Suspense fallback={null}>
          {/* Sky and atmosphere */}
          <AnimatedSky />
          <AnimatedClouds />
          
          {/* Lighting */}
          <SceneLighting phase={timelinePhase} />
          <SunRays />
          
          {/* Ground */}
          <GroundPlane />
          
          {/* The Masjid */}
          <MasjidModel phase={timelinePhase} scrollProgress={scrollProgress} />
          
          {/* Atmospheric particles */}
          <FloatingParticles count={150} color="#14b8a6" />
          <DustMotes count={300} />
          {timelinePhase >= 4 && <GoldenSparkles count={50} />}
          
          {/* Camera control */}
          <CameraRig scrollProgress={scrollProgress} isHero={scrollProgress < 0.05} />
          
          {/* Post-processing */}
          <PostProcessing 
            bloomIntensity={0.6 + timelinePhase * 0.1} 
            vignetteIntensity={0.35}
          />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  )
}

