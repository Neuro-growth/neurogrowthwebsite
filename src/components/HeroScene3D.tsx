'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// LANDING PAGE 3D — Rotating galaxy of data nodes
// A spiral galaxy of glowing spheres connected by light beams,
// with a bright core and shooting data particles along the arms

export default function HeroScene3D() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const W = mount.clientWidth || 600
    const H = mount.clientHeight || 580

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(W, H)
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    const scene  = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 200)
    camera.position.set(0, 3.5, 7.5)
    camera.lookAt(0, 0, 0)

    // ── Colors ──
    const C1 = new THREE.Color('#00D4FF')
    const C2 = new THREE.Color('#00FFCC')
    const C3 = new THREE.Color('#00a83a')
    const C4 = new THREE.Color('#ffffff')

    // ═══════════════════════════════════════
    // 1. GALAXY ARMS — spiral node positions
    // ═══════════════════════════════════════
    const galaxyGroup = new THREE.Group()
    scene.add(galaxyGroup)

    const armCount    = 3
    const nodesPerArm = 28
    const allNodes: THREE.Vector3[] = []
    const nodeMeshes: THREE.Mesh[]  = []
    const nodeBaseColors: THREE.Color[] = []

    const nodeDotGeo = new THREE.SphereGeometry(0.055, 10, 10)

    for (let arm = 0; arm < armCount; arm++) {
      const armOffset = (arm / armCount) * Math.PI * 2

      for (let i = 0; i < nodesPerArm; i++) {
        const t       = i / nodesPerArm
        const angle   = armOffset + t * Math.PI * 3.5
        const radius  = 0.3 + t * 3.2
        const spread  = t * 0.5
        const x       = Math.cos(angle) * radius + (Math.random() - 0.5) * spread
        const y       = (Math.random() - 0.5) * spread * 0.6
        const z       = Math.sin(angle) * radius + (Math.random() - 0.5) * spread

        const pos = new THREE.Vector3(x, y, z)
        allNodes.push(pos)

        // Color: core nodes bright, outer nodes dimmer
        const blend = t
        const col   = new THREE.Color().lerpColors(C4, arm % 2 === 0 ? C1 : C2, blend * 0.9)
        nodeBaseColors.push(col)

        const mat  = new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.9 })
        const mesh = new THREE.Mesh(nodeDotGeo, mat)
        mesh.position.copy(pos)
        // Size: inner nodes bigger
        const s = 1 + (1 - t) * 1.8
        mesh.scale.setScalar(s)
        galaxyGroup.add(mesh)
        nodeMeshes.push(mesh)
      }
    }

    // ── Connections between nearby nodes (within same arm) ──
    const linePositions: number[] = []
    const lineColors:    number[] = []

    for (let i = 0; i < allNodes.length; i++) {
      for (let j = i + 1; j < allNodes.length; j++) {
        const dist = allNodes[i].distanceTo(allNodes[j])
        if (dist < 1.1) {
          linePositions.push(
            allNodes[i].x, allNodes[i].y, allNodes[i].z,
            allNodes[j].x, allNodes[j].y, allNodes[j].z,
          )
          const c1 = nodeBaseColors[i].clone()
          const c2 = nodeBaseColors[j].clone()
          lineColors.push(c1.r, c1.g, c1.b, c2.r, c2.g, c2.b)
        }
      }
    }

    const lineGeo = new THREE.BufferGeometry()
    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3))
    lineGeo.setAttribute('color',    new THREE.Float32BufferAttribute(lineColors,    3))
    const lineMat = new THREE.LineBasicMaterial({
      vertexColors: true, transparent: true, opacity: 0.18,
    })
    galaxyGroup.add(new THREE.LineSegments(lineGeo, lineMat))

    // ═══════════════════════════════════════
    // 2. BRIGHT CORE
    // ═══════════════════════════════════════
    const coreGeo  = new THREE.SphereGeometry(0.22, 32, 32)
    const coreMat  = new THREE.MeshBasicMaterial({ color: C4 })
    const core     = new THREE.Mesh(coreGeo, coreMat)
    galaxyGroup.add(core)

    // Core glow rings
    const glowRings = [0.38, 0.55, 0.75].map((r, i) => {
      const geo  = new THREE.TorusGeometry(r, 0.008, 8, 64)
      const mat  = new THREE.MeshBasicMaterial({
        color: [C1, C2, C3][i],
        transparent: true,
        opacity: 0.6 - i * 0.15,
      })
      const mesh = new THREE.Mesh(geo, mat)
      galaxyGroup.add(mesh)
      return mesh
    })

    // ═══════════════════════════════════════
    // 3. SHOOTING DATA PARTICLES along arms
    // ═══════════════════════════════════════
    const shooterCount = 40
    const sPositions   = new Float32Array(shooterCount * 3)
    const sColors      = new Float32Array(shooterCount * 3)

    interface Shooter {
      arm: number
      t: number
      speed: number
    }
    const shooters: Shooter[] = []

    for (let i = 0; i < shooterCount; i++) {
      const arm   = i % armCount
      const t     = Math.random()
      const speed = 0.003 + Math.random() * 0.005
      shooters.push({ arm, t, speed })

      const angle  = (arm / armCount) * Math.PI * 2 + t * Math.PI * 3.5
      const radius = 0.3 + t * 3.2
      sPositions[i * 3]     = Math.cos(angle) * radius
      sPositions[i * 3 + 1] = 0
      sPositions[i * 3 + 2] = Math.sin(angle) * radius

      const c = arm === 0 ? C1 : arm === 1 ? C2 : C3
      sColors[i * 3] = c.r; sColors[i * 3 + 1] = c.g; sColors[i * 3 + 2] = c.b
    }

    const sGeo = new THREE.BufferGeometry()
    sGeo.setAttribute('position', new THREE.BufferAttribute(sPositions, 3))
    sGeo.setAttribute('color',    new THREE.BufferAttribute(sColors,    3))
    const sMat = new THREE.PointsMaterial({
      size: 0.09, vertexColors: true,
      transparent: true, opacity: 0.95, sizeAttenuation: true,
    })
    const shooterPoints = new THREE.Points(sGeo, sMat)
    galaxyGroup.add(shooterPoints)

    // ═══════════════════════════════════════
    // 4. OUTER DUST PARTICLES
    // ═══════════════════════════════════════
    const dustCount = 500
    const dPos      = new Float32Array(dustCount * 3)
    const dCol      = new Float32Array(dustCount * 3)

    for (let i = 0; i < dustCount; i++) {
      const r     = 2.5 + Math.random() * 4
      const theta = Math.random() * Math.PI * 2
      const phi   = (Math.random() - 0.5) * 0.5
      dPos[i * 3]     = Math.cos(theta) * r
      dPos[i * 3 + 1] = phi * r * 0.3
      dPos[i * 3 + 2] = Math.sin(theta) * r
      const c = new THREE.Color().lerpColors(C1, C3, Math.random())
      dCol[i * 3] = c.r * 0.5; dCol[i * 3 + 1] = c.g * 0.5; dCol[i * 3 + 2] = c.b * 0.5
    }

    const dGeo = new THREE.BufferGeometry()
    dGeo.setAttribute('position', new THREE.BufferAttribute(dPos, 3))
    dGeo.setAttribute('color',    new THREE.BufferAttribute(dCol, 3))
    const dMat = new THREE.PointsMaterial({
      size: 0.022, vertexColors: true,
      transparent: true, opacity: 0.5, sizeAttenuation: true,
    })
    scene.add(new THREE.Points(dGeo, dMat))

    // ═══════════════════════════════════════
    // 5. RESIZE + MOUSE
    // ═══════════════════════════════════════
    const onResize = () => {
      if (!mount) return
      const w = mount.clientWidth
      const h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    let mx = 0, my = 0
    const onMouse = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth  - 0.5) * 2
      my = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouse)

    // ═══════════════════════════════════════
    // 6. ANIMATION LOOP
    // ═══════════════════════════════════════
    let frame = 0
    let animId: number

    const animate = () => {
      animId = requestAnimationFrame(animate)
      frame++

      // Rotate galaxy slowly
      galaxyGroup.rotation.y += 0.0025
      galaxyGroup.rotation.x  = Math.sin(frame * 0.003) * 0.18

      // Pulse core rings
      glowRings.forEach((ring, i) => {
        ring.rotation.z += 0.01 * (i % 2 === 0 ? 1 : -1)
        ring.rotation.x  = Math.sin(frame * 0.02 + i) * 0.4
        ;(ring.material as THREE.MeshBasicMaterial).opacity =
          0.45 + Math.sin(frame * 0.05 + i * 1.2) * 0.2
      })

      // Pulse core size
      const pulse = 1 + Math.sin(frame * 0.06) * 0.12
      core.scale.setScalar(pulse)

      // Animate node opacities (shimmer)
      nodeMeshes.forEach((m, i) => {
        const mat = m.material as THREE.MeshBasicMaterial
        mat.opacity = 0.6 + Math.sin(frame * 0.03 + i * 0.4) * 0.4
      })

      // Move shooters along spiral arms
      const sa = sGeo.attributes.position as THREE.BufferAttribute
      shooters.forEach((s, i) => {
        s.t += s.speed
        if (s.t > 1) s.t = 0

        const angle  = (s.arm / armCount) * Math.PI * 2 + s.t * Math.PI * 3.5
        const radius = 0.3 + s.t * 3.2
        sa.setXYZ(i, Math.cos(angle) * radius, 0, Math.sin(angle) * radius)
      })
      sa.needsUpdate = true

      // Mouse camera tilt
      camera.position.x += (mx * 1.5 - camera.position.x) * 0.025
      camera.position.y += (3.5 - my * 1.5 - camera.position.y) * 0.025
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouse)
      renderer.dispose()
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div
      ref={mountRef}
      style={{ width: '100%', height: '100%', minHeight: 520 }}
      aria-hidden="true"
    />
  )
}
