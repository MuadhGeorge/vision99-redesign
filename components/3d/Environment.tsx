'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sky, Stars } from '@react-three/drei'
import * as THREE from 'three'

/**
 * Animated Sky Environment
 * 
 * Creates a living sky with animated stars
 */
export function AnimatedSky() {
  return (
    <>
      <Sky
        distance={450000}
        sunPosition={[10, 20, 10]}
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
 * Animated Clouds - Simple mesh-based clouds
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
      {/* Simple cloud meshes */}
      {[
        { pos: [-20, 25, -30], scale: 8 },
        { pos: [25, 30, -25], scale: 6 },
        { pos: [0, 28, -35], scale: 10 },
      ].map((cloud, i) => (
        <mesh key={i} position={cloud.pos as [number, number, number]}>
          <sphereGeometry args={[cloud.scale, 16, 16]} />
          <meshStandardMaterial
            color="#ffffff"
            transparent
            opacity={0.15}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  )
}

/**
 * Ground Plane with subtle color
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
