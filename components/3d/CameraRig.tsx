'use client'

import { useRef, useEffect } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface CameraRigProps {
  scrollProgress: number // 0 to 1
  isHero?: boolean
}

/**
 * Cinematic Camera Rig - Scroll-driven camera movement along a path
 * 
 * Creates a smooth camera rail through the scene:
 * - Hero: Aerial approach with orbit
 * - Timeline: Move around and through the building
 * - Leadership: Elevated overview orbit
 */

// Camera keyframes along the scroll journey
const CAMERA_PATH = [
  // 0.0 - Hero aerial approach
  { position: new THREE.Vector3(20, 15, 20), target: new THREE.Vector3(0, 0, 0), fov: 50 },
  // 0.15 - Partners/Narrative - closer view
  { position: new THREE.Vector3(12, 8, 14), target: new THREE.Vector3(0, 1, 0), fov: 45 },
  // 0.3 - Crossroads - side angle
  { position: new THREE.Vector3(-10, 6, 12), target: new THREE.Vector3(0, 2, 0), fov: 45 },
  // 0.45 - Pillars - frontal symmetric
  { position: new THREE.Vector3(0, 5, 15), target: new THREE.Vector3(0, 2, 0), fov: 40 },
  // 0.6 - Timeline start - aerial overview
  { position: new THREE.Vector3(15, 20, 15), target: new THREE.Vector3(0, 0, 0), fov: 55 },
  // 0.75 - Timeline mid - closer construction view
  { position: new THREE.Vector3(8, 4, 10), target: new THREE.Vector3(0, 3, 0), fov: 45 },
  // 0.9 - Leadership - dramatic low angle
  { position: new THREE.Vector3(-5, 3, 12), target: new THREE.Vector3(0, 4, 0), fov: 40 },
  // 1.0 - Footer - wide establishing shot
  { position: new THREE.Vector3(18, 12, 18), target: new THREE.Vector3(0, 2, 0), fov: 50 },
]

function lerpVector3(a: THREE.Vector3, b: THREE.Vector3, t: number): THREE.Vector3 {
  return new THREE.Vector3(
    THREE.MathUtils.lerp(a.x, b.x, t),
    THREE.MathUtils.lerp(a.y, b.y, t),
    THREE.MathUtils.lerp(a.z, b.z, t)
  )
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

export default function CameraRig({ scrollProgress, isHero = false }: CameraRigProps) {
  const { camera } = useThree()
  const currentPosition = useRef(new THREE.Vector3(20, 15, 20))
  const currentTarget = useRef(new THREE.Vector3(0, 0, 0))
  const currentFov = useRef(50)
  const heroOrbitAngle = useRef(0)
  const time = useRef(0)

  useFrame((state, delta) => {
    time.current += delta

    if (isHero && scrollProgress < 0.05) {
      // Hero mode: slow cinematic orbit
      heroOrbitAngle.current += delta * 0.08
      const radius = 18
      const x = Math.sin(heroOrbitAngle.current) * radius
      const z = Math.cos(heroOrbitAngle.current) * radius
      const y = 12 + Math.sin(time.current * 0.3) * 1 // Subtle vertical movement
      
      currentPosition.current.lerp(new THREE.Vector3(x, y, z), 0.02)
      currentTarget.current.lerp(new THREE.Vector3(0, 2, 0), 0.02)
    } else {
      // Scroll-driven camera path
      const totalSegments = CAMERA_PATH.length - 1
      const segment = Math.min(Math.floor(scrollProgress * totalSegments), totalSegments - 1)
      const segmentProgress = (scrollProgress * totalSegments) - segment
      const easedProgress = easeInOutCubic(segmentProgress)

      const startKeyframe = CAMERA_PATH[segment]
      const endKeyframe = CAMERA_PATH[Math.min(segment + 1, CAMERA_PATH.length - 1)]

      // Interpolate position, target, and FOV
      const targetPosition = lerpVector3(startKeyframe.position, endKeyframe.position, easedProgress)
      const targetLookAt = lerpVector3(startKeyframe.target, endKeyframe.target, easedProgress)
      const targetFov = THREE.MathUtils.lerp(startKeyframe.fov, endKeyframe.fov, easedProgress)

      // Add subtle camera shake/breathing
      const breatheOffset = new THREE.Vector3(
        Math.sin(time.current * 0.5) * 0.05,
        Math.sin(time.current * 0.3) * 0.08,
        Math.cos(time.current * 0.4) * 0.05
      )
      targetPosition.add(breatheOffset)

      // Smooth interpolation
      currentPosition.current.lerp(targetPosition, delta * 3)
      currentTarget.current.lerp(targetLookAt, delta * 3)
      currentFov.current = THREE.MathUtils.lerp(currentFov.current, targetFov, delta * 3)
    }

    // Apply to camera
    camera.position.copy(currentPosition.current)
    camera.lookAt(currentTarget.current)
    
    if ((camera as THREE.PerspectiveCamera).fov !== undefined) {
      (camera as THREE.PerspectiveCamera).fov = currentFov.current;
      (camera as THREE.PerspectiveCamera).updateProjectionMatrix()
    }
  })

  return null
}

/**
 * Ambient camera movement for sections without scroll control
 */
export function AmbientCameraMotion({ intensity = 1 }: { intensity?: number }) {
  const { camera } = useThree()
  const initialPosition = useRef<THREE.Vector3 | null>(null)
  const time = useRef(0)

  useEffect(() => {
    initialPosition.current = camera.position.clone()
  }, [camera])

  useFrame((state, delta) => {
    if (!initialPosition.current) return
    time.current += delta

    const offsetX = Math.sin(time.current * 0.2) * 0.3 * intensity
    const offsetY = Math.sin(time.current * 0.15) * 0.2 * intensity
    const offsetZ = Math.cos(time.current * 0.18) * 0.3 * intensity

    camera.position.x = initialPosition.current.x + offsetX
    camera.position.y = initialPosition.current.y + offsetY
    camera.position.z = initialPosition.current.z + offsetZ
  })

  return null
}

