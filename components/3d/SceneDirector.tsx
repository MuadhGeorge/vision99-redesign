'use client'

import { useRef, useEffect } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface SceneDirectorProps {
  phase: number
  isHero?: boolean
}

/**
 * SceneDirector - Controls camera positions and lighting based on phase
 * 
 * Updated for Beyond Walls teal color scheme
 */

// Camera positions for each phase
const CAMERA_POSITIONS: Record<number, { position: THREE.Vector3; target: THREE.Vector3 }> = {
  0: {
    position: new THREE.Vector3(15, 12, 15),
    target: new THREE.Vector3(0, 0, 0),
  },
  1: {
    position: new THREE.Vector3(12, 8, 12),
    target: new THREE.Vector3(0, 0, 0),
  },
  2: {
    position: new THREE.Vector3(10, 6, 10),
    target: new THREE.Vector3(0, 2, 0),
  },
  3: {
    position: new THREE.Vector3(0, 4, 12),
    target: new THREE.Vector3(0, 2, 0),
  },
  4: {
    position: new THREE.Vector3(-3, 3, 10),
    target: new THREE.Vector3(0, 3, 0),
  },
}

// Light settings per phase - teal-tinted for Beyond Walls
const LIGHT_SETTINGS: Record<number, { 
  sunPosition: THREE.Vector3
  sunIntensity: number
  ambientIntensity: number
  sunColor: string
}> = {
  0: {
    sunPosition: new THREE.Vector3(10, 20, 10),
    sunIntensity: 1.5,
    ambientIntensity: 0.4,
    sunColor: '#f0fdfa', // Teal-tinted white
  },
  1: {
    sunPosition: new THREE.Vector3(15, 25, 5),
    sunIntensity: 1.8,
    ambientIntensity: 0.5,
    sunColor: '#ccfbf1', // Light teal
  },
  2: {
    sunPosition: new THREE.Vector3(20, 30, 0),
    sunIntensity: 2.0,
    ambientIntensity: 0.5,
    sunColor: '#ffffff', // Pure white noon
  },
  3: {
    sunPosition: new THREE.Vector3(15, 25, -10),
    sunIntensity: 1.8,
    ambientIntensity: 0.5,
    sunColor: '#fff8dc', // Warm afternoon
  },
  4: {
    sunPosition: new THREE.Vector3(5, 15, -15),
    sunIntensity: 1.5,
    ambientIntensity: 0.6,
    sunColor: '#fcd34d', // Golden hour
  },
}

export default function SceneDirector({ phase, isHero = false }: SceneDirectorProps) {
  const { camera } = useThree()
  const sunRef = useRef<THREE.DirectionalLight>(null)
  const targetPosition = useRef(new THREE.Vector3())
  const targetLookAt = useRef(new THREE.Vector3())
  const orbitAngle = useRef(0)

  // Update target positions when phase changes
  useEffect(() => {
    const config = CAMERA_POSITIONS[phase] || CAMERA_POSITIONS[4]
    targetPosition.current.copy(config.position)
    targetLookAt.current.copy(config.target)
  }, [phase])

  useFrame((state, delta) => {
    if (isHero) {
      // Slow orbit for hero section
      orbitAngle.current += delta * 0.05
      const radius = 12
      const x = Math.sin(orbitAngle.current) * radius
      const z = Math.cos(orbitAngle.current) * radius
      
      camera.position.lerp(new THREE.Vector3(x, 5, z), 0.02)
      camera.lookAt(0, 2, 0)
    } else {
      // Smooth interpolation to target position
      camera.position.lerp(targetPosition.current, delta * 2)
      
      // Smooth look-at transition
      const currentLookAt = new THREE.Vector3()
      camera.getWorldDirection(currentLookAt)
      currentLookAt.lerp(targetLookAt.current, delta * 2)
      camera.lookAt(targetLookAt.current)
    }

    // Update sun position based on phase
    if (sunRef.current) {
      const lightConfig = LIGHT_SETTINGS[phase] || LIGHT_SETTINGS[4]
      sunRef.current.position.lerp(lightConfig.sunPosition, delta * 2)
      sunRef.current.intensity = THREE.MathUtils.lerp(
        sunRef.current.intensity,
        lightConfig.sunIntensity,
        delta * 2
      )
    }
  })

  const lightConfig = LIGHT_SETTINGS[phase] || LIGHT_SETTINGS[4]

  return (
    <>
      {/* Main directional light (sun) */}
      <directionalLight
        ref={sunRef}
        position={lightConfig.sunPosition.toArray()}
        intensity={lightConfig.sunIntensity}
        color={lightConfig.sunColor}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
        shadow-bias={-0.0001}
      />
      
      {/* Ambient light for fill - teal tinted */}
      <ambientLight intensity={lightConfig.ambientIntensity} color="#ccfbf1" />
      
      {/* Subtle hemisphere light for sky/ground color variation */}
      <hemisphereLight
        color="#99f6e4"
        groundColor="#8b7355"
        intensity={0.3}
      />
      
      {/* Rim light for depth */}
      <directionalLight
        position={[-10, 10, -10]}
        intensity={0.3}
        color="#ffeedd"
      />
    </>
  )
}

/**
 * Scene environment setup component - teal-tinted sky
 */
export function SceneEnvironment() {
  return (
    <>
      {/* Sky color background - teal tinted */}
      <color attach="background" args={['#5eead4']} />
      
      {/* Fog for depth - teal tinted */}
      <fog attach="fog" args={['#99f6e4', 30, 80]} />
    </>
  )
}
