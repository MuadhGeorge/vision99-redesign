'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sky, Cloud, Stars } from '@react-three/drei'
import * as THREE from 'three'

/**
 * Animated Sky Environment
 * 
 * Creates a living sky with:
 * - Animated sun position
 * - Moving clouds
 * - Subtle color shifts
 */
export function AnimatedSky() {
  const sunRef = useRef({ azimuth: 0.25, inclination: 0.6 })
  const time = useRef(0)

  useFrame((state, delta) => {
    time.current += delta * 0.02
    // Very subtle sun movement
    sunRef.current.azimuth = 0.25 + Math.sin(time.current) * 0.02
    sunRef.current.inclination = 0.6 + Math.sin(time.current * 0.5) * 0.02
  })

  return (
    <>
      <Sky
        distance={450000}
        sunPosition={[
          Math.cos(sunRef.current.azimuth * Math.PI * 2) * Math.cos(sunRef.current.inclination * Math.PI),
          Math.sin(sunRef.current.inclination * Math.PI),
          Math.sin(sunRef.current.azimuth * Math.PI * 2) * Math.cos(sunRef.current.inclination * Math.PI)
        ].map(v => v * 100) as [number, number, number]}
        turbidity={8}
        rayleigh={0.5}
        mieCoefficient={0.005}
        mieDirectionalG={0.8}
      />
      <Stars
        radius={100}
        depth={50}
        count={1000}
        factor={3}
        saturation={0}
        fade
        speed={0.5}
      />
    </>
  )
}

/**
 * Animated Clouds
 */
export function AnimatedClouds() {
  const cloudGroupRef = useRef<THREE.Group>(null)
  const time = useRef(0)

  useFrame((state, delta) => {
    time.current += delta * 0.1
    if (cloudGroupRef.current) {
      cloudGroupRef.current.position.x = Math.sin(time.current) * 5
      cloudGroupRef.current.position.z = Math.cos(time.current * 0.7) * 3
    }
  })

  return (
    <group ref={cloudGroupRef}>
      <Cloud
        position={[-20, 25, -30]}
        speed={0.2}
        opacity={0.3}
        width={20}
        depth={5}
        segments={20}
      />
      <Cloud
        position={[25, 30, -25]}
        speed={0.15}
        opacity={0.25}
        width={15}
        depth={4}
        segments={15}
      />
      <Cloud
        position={[0, 28, -35]}
        speed={0.1}
        opacity={0.2}
        width={25}
        depth={6}
        segments={25}
      />
    </group>
  )
}

/**
 * Ground Plane with subtle grid
 */
export function GroundPlane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial
        color="#1a3a30"
        roughness={0.9}
        metalness={0.1}
      />
    </mesh>
  )
}

/**
 * Scene Lighting Setup
 */
export function SceneLighting({ phase = 4 }: { phase?: number }) {
  const ambientRef = useRef<THREE.AmbientLight>(null)
  const time = useRef(0)

  useFrame((state, delta) => {
    time.current += delta
    if (ambientRef.current) {
      // Subtle intensity breathing
      ambientRef.current.intensity = 0.4 + Math.sin(time.current * 0.5) * 0.05
    }
  })

  return (
    <>
      <ambientLight ref={ambientRef} intensity={0.4} color="#e6f2ff" />
      <hemisphereLight
        color="#87ceeb"
        groundColor="#3a5f0b"
        intensity={0.3}
      />
      {/* Fill light */}
      <directionalLight
        position={[-15, 10, -15]}
        intensity={0.4}
        color="#ffeedd"
      />
      {/* Rim light for depth */}
      <pointLight
        position={[0, 15, -20]}
        intensity={0.5}
        color="#14b8a6"
        distance={50}
      />
    </>
  )
}

