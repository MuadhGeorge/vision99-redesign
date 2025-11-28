'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface MasjidModelProps {
  phase: number // 0-4 representing construction phases
  scrollProgress: number
}

/**
 * Cinematic MasjidModel - Animated procedural 3D model
 * 
 * Modern architectural style with heavy animation:
 * - Phase-based construction animation
 * - Continuous breathing/floating motion
 * - Material animations (glow, color shifts)
 * - Wireframe → solid transitions
 * 
 * TODO: Replace with actual GLB model at /public/models/vision99-campus.glb
 */
export default function MasjidModel({ phase, scrollProgress }: MasjidModelProps) {
  const groupRef = useRef<THREE.Group>(null)
  const time = useRef(0)
  const buildProgress = useRef(0)

  // Calculate target build progress based on phase
  const targetProgress = phase / 4

  useFrame((state, delta) => {
    time.current += delta
    
    // Smooth build progress interpolation
    buildProgress.current = THREE.MathUtils.lerp(buildProgress.current, targetProgress, delta * 2)

    if (groupRef.current) {
      // Subtle floating animation
      groupRef.current.position.y = Math.sin(time.current * 0.3) * 0.05
      // Very subtle rotation breathing
      groupRef.current.rotation.y = Math.sin(time.current * 0.1) * 0.01
    }
  })

  // Materials with animation capabilities
  const materials = useMemo(() => ({
    whiteBrick: new THREE.MeshStandardMaterial({
      color: '#f5f5f5',
      roughness: 0.7,
      metalness: 0.1,
      emissive: '#14b8a6',
      emissiveIntensity: 0,
    }),
    woodPanel: new THREE.MeshStandardMaterial({
      color: '#8b5a2b',
      roughness: 0.5,
      metalness: 0.0,
    }),
    glass: new THREE.MeshStandardMaterial({
      color: '#aaddff',
      roughness: 0.1,
      metalness: 0.3,
      transparent: true,
      opacity: 0.7,
    }),
    darkMetal: new THREE.MeshStandardMaterial({
      color: '#1a1a1a',
      roughness: 0.3,
      metalness: 0.8,
    }),
    concrete: new THREE.MeshStandardMaterial({
      color: '#9ca3af',
      roughness: 0.9,
      metalness: 0.0,
    }),
    wireframe: new THREE.MeshBasicMaterial({
      color: '#14b8a6',
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    }),
    glowMaterial: new THREE.MeshBasicMaterial({
      color: '#14b8a6',
      transparent: true,
      opacity: 0.3,
    }),
  }), [])

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={0.5}>
      {/* Phase 0: Wireframe outline of the building */}
      <WireframeOutline 
        visible={phase >= 0} 
        opacity={phase === 0 ? 1 : Math.max(0, 1 - phase * 0.3)} 
        materials={materials}
      />
      
      {/* Phase 1: Foundation */}
      <Foundation 
        visible={phase >= 1} 
        progress={Math.min(1, Math.max(0, (buildProgress.current - 0.25) * 4))}
        materials={materials} 
      />
      
      {/* Phase 2: Structural skeleton */}
      <Structure 
        visible={phase >= 2}
        progress={Math.min(1, Math.max(0, (buildProgress.current - 0.5) * 4))}
        materials={materials}
      />
      
      {/* Phase 3: Exterior cladding */}
      <Exterior 
        visible={phase >= 3}
        progress={Math.min(1, Math.max(0, (buildProgress.current - 0.75) * 4))}
        materials={materials}
      />
      
      {/* Phase 4: Final details */}
      <FinalDetails 
        visible={phase >= 4}
        materials={materials}
      />
      
      {/* Minaret - always building up */}
      <AnimatedMinaret phase={phase} materials={materials} />
      
      {/* Glow effects for current construction */}
      <ConstructionGlow phase={phase} />
    </group>
  )
}

function WireframeOutline({ visible, opacity, materials }: any) {
  const ref = useRef<THREE.Group>(null)
  const time = useRef(0)

  useFrame((state, delta) => {
    time.current += delta
    if (ref.current && visible) {
      // Animated line drawing effect
      ref.current.children.forEach((child, i) => {
        if (child instanceof THREE.LineSegments) {
          const mat = child.material as THREE.LineBasicMaterial
          mat.opacity = opacity * (0.3 + Math.sin(time.current * 2 + i) * 0.2)
        }
      })
    }
  })

  if (!visible) return null

  return (
    <group ref={ref}>
      {/* Main building outline */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(12, 5, 10)]} />
        <lineBasicMaterial color="#14b8a6" transparent opacity={opacity * 0.5} />
      </lineSegments>
      
      {/* Wing outlines */}
      <lineSegments position={[-5, 0, 4]}>
        <edgesGeometry args={[new THREE.BoxGeometry(4, 3.5, 6)]} />
        <lineBasicMaterial color="#14b8a6" transparent opacity={opacity * 0.5} />
      </lineSegments>
      <lineSegments position={[5, 0, 4]}>
        <edgesGeometry args={[new THREE.BoxGeometry(4, 3.5, 6)]} />
        <lineBasicMaterial color="#14b8a6" transparent opacity={opacity * 0.5} />
      </lineSegments>
    </group>
  )
}

function Foundation({ visible, progress, materials }: any) {
  const ref = useRef<THREE.Group>(null)

  useFrame(() => {
    if (ref.current) {
      ref.current.scale.y = THREE.MathUtils.lerp(ref.current.scale.y, progress, 0.1)
    }
  })

  if (!visible) return null

  return (
    <group ref={ref}>
      <mesh position={[0, 0.15, 0]} castShadow receiveShadow>
        <boxGeometry args={[12, 0.3, 10]} />
        <primitive object={materials.concrete} attach="material" />
      </mesh>
      <mesh position={[-5, 0.15, 4]} castShadow receiveShadow>
        <boxGeometry args={[4, 0.3, 6]} />
        <primitive object={materials.concrete} attach="material" />
      </mesh>
      <mesh position={[5, 0.15, 4]} castShadow receiveShadow>
        <boxGeometry args={[4, 0.3, 6]} />
        <primitive object={materials.concrete} attach="material" />
      </mesh>
    </group>
  )
}

function Structure({ visible, progress, materials }: any) {
  const ref = useRef<THREE.Group>(null)

  useFrame(() => {
    if (ref.current) {
      // Animate columns rising up
      ref.current.scale.y = THREE.MathUtils.lerp(ref.current.scale.y, progress, 0.1)
    }
  })

  if (!visible) return null

  const columnPositions: [number, number, number][] = []
  for (let x = -5; x <= 5; x += 2.5) {
    for (let z = -4; z <= 4; z += 4) {
      columnPositions.push([x, 2, z])
    }
  }

  return (
    <group ref={ref}>
      {columnPositions.map((pos, i) => (
        <mesh key={i} position={pos} castShadow>
          <boxGeometry args={[0.2, 4, 0.2]} />
          <meshStandardMaterial color="#78716c" roughness={0.4} metalness={0.6} />
        </mesh>
      ))}
      {/* Horizontal beams */}
      <mesh position={[0, 4, 0]} castShadow>
        <boxGeometry args={[12, 0.3, 0.2]} />
        <meshStandardMaterial color="#78716c" roughness={0.4} metalness={0.6} />
      </mesh>
    </group>
  )
}

function Exterior({ visible, progress, materials }: any) {
  const ref = useRef<THREE.Group>(null)

  useFrame(() => {
    if (ref.current) {
      ref.current.children.forEach((child) => {
        if (child instanceof THREE.Mesh) {
          const mat = child.material as THREE.MeshStandardMaterial
          if (mat.transparent !== undefined) {
            mat.opacity = THREE.MathUtils.lerp(mat.opacity || 0, progress, 0.1)
          }
        }
      })
    }
  })

  if (!visible) return null

  return (
    <group ref={ref}>
      {/* Main walls */}
      <mesh position={[0, 2.5, -5]} castShadow receiveShadow>
        <boxGeometry args={[12, 5, 0.4]} />
        <meshStandardMaterial {...materials.whiteBrick} transparent opacity={progress} />
      </mesh>
      <mesh position={[0, 2.5, 5]} castShadow receiveShadow>
        <boxGeometry args={[12, 5, 0.4]} />
        <meshStandardMaterial {...materials.whiteBrick} transparent opacity={progress} />
      </mesh>
      <mesh position={[-6, 2.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.4, 5, 10]} />
        <meshStandardMaterial {...materials.whiteBrick} transparent opacity={progress} />
      </mesh>
      <mesh position={[6, 2.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.4, 5, 10]} />
        <meshStandardMaterial {...materials.whiteBrick} transparent opacity={progress} />
      </mesh>
      
      {/* Roof */}
      <mesh position={[0, 5.1, 0]} castShadow receiveShadow>
        <boxGeometry args={[12.5, 0.3, 10.5]} />
        <meshStandardMaterial {...materials.whiteBrick} transparent opacity={progress} />
      </mesh>
      
      {/* Wood accents */}
      <mesh position={[-4, 2.5, -5.3]} castShadow>
        <boxGeometry args={[1.5, 4, 0.15]} />
        <meshStandardMaterial {...materials.woodPanel} transparent opacity={progress} />
      </mesh>
      <mesh position={[4, 2.5, -5.3]} castShadow>
        <boxGeometry args={[1.5, 4, 0.15]} />
        <meshStandardMaterial {...materials.woodPanel} transparent opacity={progress} />
      </mesh>
      
      {/* Glass entrance */}
      <mesh position={[0, 2, -5.3]}>
        <boxGeometry args={[2.5, 3, 0.1]} />
        <meshStandardMaterial {...materials.glass} transparent opacity={progress * 0.7} />
      </mesh>
      
      {/* Wings */}
      <Wing position={[-5, 0, 4]} progress={progress} materials={materials} />
      <Wing position={[5, 0, 4]} progress={progress} materials={materials} />
    </group>
  )
}

function Wing({ position, progress, materials }: any) {
  return (
    <group position={position}>
      <mesh position={[0, 1.75, 0]} castShadow receiveShadow>
        <boxGeometry args={[4, 3.5, 6]} />
        <meshStandardMaterial {...materials.whiteBrick} transparent opacity={progress} />
      </mesh>
      <mesh position={[0, 3, 0]} castShadow>
        <boxGeometry args={[4.1, 0.8, 6.1]} />
        <meshStandardMaterial {...materials.woodPanel} transparent opacity={progress} />
      </mesh>
    </group>
  )
}

function FinalDetails({ visible, materials }: any) {
  const ref = useRef<THREE.Group>(null)
  const time = useRef(0)

  useFrame((state, delta) => {
    time.current += delta
    if (ref.current) {
      // Trees swaying
      ref.current.children.forEach((child, i) => {
        if (child.userData.isTree) {
          child.rotation.z = Math.sin(time.current + i) * 0.02
        }
      })
    }
  })

  if (!visible) return null

  const treePositions: [number, number, number][] = [
    [-3, 0, 7], [3, 0, 7], [-8, 0, 2], [8, 0, 2], [-4, 0, -8], [4, 0, -8]
  ]

  return (
    <group ref={ref}>
      {/* Solar panels */}
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <mesh
            key={`solar-${row}-${col}`}
            position={[3 + (col - 1.5) * 1.2, 5.6, (row - 1) * 1.5]}
            rotation={[-0.3, 0, 0]}
            castShadow
          >
            <boxGeometry args={[1, 0.05, 1.2]} />
            <meshStandardMaterial color="#1e3a5f" roughness={0.2} metalness={0.7} />
          </mesh>
        ))
      )}
      
      {/* Trees */}
      {treePositions.map((pos, i) => (
        <group key={i} position={pos} userData={{ isTree: true }}>
          <mesh position={[0, 1, 0]} castShadow>
            <cylinderGeometry args={[0.15, 0.2, 2, 8]} />
            <meshStandardMaterial color="#5c4033" roughness={0.9} />
          </mesh>
          <mesh position={[0, 2.5, 0]} castShadow>
            <coneGeometry args={[1.2, 2, 8]} />
            <meshStandardMaterial color="#2d5016" roughness={0.8} />
          </mesh>
          <mesh position={[0, 3.5, 0]} castShadow>
            <coneGeometry args={[0.8, 1.5, 8]} />
            <meshStandardMaterial color="#3a6b1e" roughness={0.8} />
          </mesh>
        </group>
      ))}
      
      {/* Landscaping - grass areas */}
      <mesh position={[0, 0.01, 6]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[8, 4]} />
        <meshStandardMaterial color="#4ade80" roughness={1} />
      </mesh>
    </group>
  )
}

function AnimatedMinaret({ phase, materials }: any) {
  const ref = useRef<THREE.Group>(null)
  const time = useRef(0)
  const targetHeight = phase >= 4 ? 12 : phase >= 3 ? 10 : phase >= 2 ? 6 : 0

  useFrame((state, delta) => {
    time.current += delta
    if (ref.current) {
      // Animate minaret height
      ref.current.scale.y = THREE.MathUtils.lerp(ref.current.scale.y, targetHeight / 12, delta * 2)
    }
  })

  if (phase < 2) return null

  return (
    <group ref={ref} scale={[1, 0, 1]}>
      {/* Open-frame tower posts */}
      {[[-0.4, -0.4], [-0.4, 0.4], [0.4, -0.4], [0.4, 0.4]].map(([x, z], i) => (
        <mesh key={i} position={[x, 6, z]} castShadow>
          <boxGeometry args={[0.15, 12, 0.15]} />
          <primitive object={materials.whiteBrick} attach="material" />
        </mesh>
      ))}
      
      {/* Cross-bracing */}
      {[2, 4, 6, 8, 10].map((y) => (
        <group key={y} position={[0, y, 0]}>
          <mesh position={[0, 0, -0.4]} castShadow>
            <boxGeometry args={[0.95, 0.1, 0.08]} />
            <primitive object={materials.darkMetal} attach="material" />
          </mesh>
          <mesh position={[0, 0, 0.4]} castShadow>
            <boxGeometry args={[0.95, 0.1, 0.08]} />
            <primitive object={materials.darkMetal} attach="material" />
          </mesh>
        </group>
      ))}
      
      {/* Top finial */}
      {phase >= 4 && (
        <group position={[0, 12.5, 0]}>
          <mesh castShadow>
            <coneGeometry args={[0.3, 1.5, 4]} />
            <primitive object={materials.whiteBrick} attach="material" />
          </mesh>
          <mesh position={[0, 1.2, 0]} castShadow>
            <torusGeometry args={[0.15, 0.03, 8, 16, Math.PI]} />
            <meshStandardMaterial color="#d4af37" metalness={0.8} roughness={0.2} emissive="#d4af37" emissiveIntensity={0.3} />
          </mesh>
        </group>
      )}
    </group>
  )
}

function ConstructionGlow({ phase }: { phase: number }) {
  const ref = useRef<THREE.Mesh>(null)
  const time = useRef(0)

  useFrame((state, delta) => {
    time.current += delta
    if (ref.current) {
      const mat = ref.current.material as THREE.MeshBasicMaterial
      mat.opacity = 0.1 + Math.sin(time.current * 2) * 0.05
    }
  })

  if (phase >= 4) return null

  return (
    <mesh ref={ref} position={[0, 2, 0]}>
      <sphereGeometry args={[8, 32, 32]} />
      <meshBasicMaterial 
        color="#14b8a6" 
        transparent 
        opacity={0.1} 
        side={THREE.BackSide}
        depthWrite={false}
      />
    </mesh>
  )
}
