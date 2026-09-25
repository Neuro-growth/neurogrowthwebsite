'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import type { FeatureCollection, Feature } from 'geojson'

// Real Africa GeoJSON → Three.js
// Each country border is converted from lng/lat to 3D coordinates
// and rendered as glowing lines with city pulse nodes

// Major African business hubs [lng, lat, name, color]
const CITIES: [number, number, string, string][] = [
  [ 36.82,  -1.29, 'Nairobi',       '#00FFCC'],
  [  3.39,   6.45, 'Lagos',         '#00D4FF'],
  [ 31.23,  30.06, 'Cairo',         '#00AAFF'],
  [ 28.04, -26.20, 'Johannesburg',  '#00FFCC'],
  [ -0.19,   5.55, 'Accra',         '#00D4FF'],
  [ 39.27,  -6.79, 'Dar es Salaam', '#00FFCC'],
  [ -7.59,  33.59, 'Casablanca',    '#00AAFF'],
  [ 38.74,   9.03, 'Addis Ababa',   '#00FFCC'],
  [ 32.58,   0.32, 'Kampala',       '#00D4FF'],
  [ 30.06,  -1.94, 'Kigali',        '#00FFCC'],
  [-17.43,  14.69, 'Dakar',         '#00AAFF'],
  [ 28.28, -15.42, 'Lusaka',        '#00D4FF'],
  [ 17.87,  11.87, 'Ndjamena',      '#00AAFF'],
  [ 13.15,   9.06, 'Kano',          '#00D4FF'],
  [ 18.56,  -4.32, 'Kinshasa',      '#00FFCC'],
  [  2.35,   6.36, 'Cotonou',       '#00D4FF'],
]

// Connection pairs (indices into CITIES)
const CONNECTIONS = [
  [0,1],[0,3],[0,7],[0,8],[0,9],[1,2],[1,4],[1,10],
  [2,7],[3,5],[3,11],[8,9],[5,9],[11,3],[4,13],[13,12],
  [14,3],[14,1],[15,1],
]

// Convert lng/lat → normalised x/y on a flat plane
// Africa spans roughly lng: -18 to 52, lat: -35 to 38
function lngLatToXY(lng: number, lat: number): [number, number] {
  const LNG_MIN = -18, LNG_MAX = 52
  const LAT_MIN = -36, LAT_MAX = 38
  const SCALE = 5.5 // total width in Three.js units
  const AR = (LAT_MAX - LAT_MIN) / (LNG_MAX - LNG_MIN)
  const x = ((lng - LNG_MIN) / (LNG_MAX - LNG_MIN) - 0.5) * SCALE
  const y = ((lat - LAT_MIN) / (LAT_MAX - LAT_MIN) - 0.5) * SCALE * AR
  return [x, y]
}

export default function AfricaMap3D() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const W = mount.clientWidth  || 600
    const H = mount.clientHeight || 680

    // ── Renderer ──
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(W, H)
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    const scene  = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(42, W / H, 0.1, 200)
    camera.position.set(0, 0, 10)

    const group = new THREE.Group()
    scene.add(group)

    // ── Load GeoJSON and render ──
    fetch('/africa.geojson')
      .then(r => r.json())
      .then((geojson: FeatureCollection) => {

        // Colors
        const borderColor   = new THREE.Color('#00D4FF')
        const fillColor     = new THREE.Color('#001828')
        const highlightColor= new THREE.Color('#00FFCC')

        geojson.features.forEach((feature: Feature) => {
          const geom = feature.geometry
          if (!geom) return

          const polys: number[][][][] =
            geom.type === 'Polygon'
              ? [geom.coordinates as number[][][]]
              : geom.type === 'MultiPolygon'
                ? geom.coordinates as number[][][][]
                : []

          polys.forEach(poly => {
            poly.forEach(ring => {
              // --- Filled shape ---
              const shape = new THREE.Shape()
              ring.forEach(([lng, lat], i) => {
                const [x, y] = lngLatToXY(lng, lat)
                if (i === 0) shape.moveTo(x, y)
                else shape.lineTo(x, y)
              })
              shape.closePath()

              const fillGeo = new THREE.ShapeGeometry(shape)
              const fillMat = new THREE.MeshBasicMaterial({
                color: fillColor,
                transparent: true,
                opacity: 0.7,
                side: THREE.DoubleSide,
              })
              group.add(new THREE.Mesh(fillGeo, fillMat))

              // --- Border line ---
              const pts = ring.map(([lng, lat]) => {
                const [x, y] = lngLatToXY(lng, lat)
                return new THREE.Vector3(x, y, 0.01)
              })
              const lineGeo = new THREE.BufferGeometry().setFromPoints(pts)
              const lineMat = new THREE.LineBasicMaterial({
                color: borderColor,
                transparent: true,
                opacity: 0.75,
              })
              group.add(new THREE.Line(lineGeo, lineMat))

              // --- Outer glow border (slightly offset) ---
              const glowPts = ring.map(([lng, lat]) => {
                const [x, y] = lngLatToXY(lng, lat)
                return new THREE.Vector3(x * 1.001, y * 1.001, -0.01)
              })
              const glowGeo = new THREE.BufferGeometry().setFromPoints(glowPts)
              const glowMat = new THREE.LineBasicMaterial({
                color: highlightColor,
                transparent: true,
                opacity: 0.18,
              })
              group.add(new THREE.Line(glowGeo, glowMat))
            })
          })
        })

        // ── Grid overlay ──
        const gridMat = new THREE.LineBasicMaterial({ color: '#00D4FF', transparent: true, opacity: 0.04 })
        for (let x = -3; x <= 3; x += 0.6) {
          const pts = [new THREE.Vector3(x, -5, 0.02), new THREE.Vector3(x, 5, 0.02)]
          group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), gridMat))
        }
        for (let y = -4; y <= 3; y += 0.6) {
          const pts = [new THREE.Vector3(-4, y, 0.02), new THREE.Vector3(4, y, 0.02)]
          group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), gridMat))
        }

        // ── City nodes ──
        const cityMeshes: THREE.Mesh[]  = []
        const cityRings:  THREE.Mesh[]  = []
        const cityPos:    THREE.Vector3[] = []

        CITIES.forEach(([lng, lat, , color]) => {
          const [x, y] = lngLatToXY(lng, lat)
          const pos     = new THREE.Vector3(x, y, 0.08)
          cityPos.push(pos)

          // Dot
          const dot = new THREE.Mesh(
            new THREE.SphereGeometry(0.06, 10, 10),
            new THREE.MeshBasicMaterial({ color })
          )
          dot.position.copy(pos)
          group.add(dot)
          cityMeshes.push(dot)

          // Ping ring
          const ring = new THREE.Mesh(
            new THREE.TorusGeometry(0.13, 0.008, 8, 32),
            new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.6 })
          )
          ring.position.copy(pos)
          group.add(ring)
          cityRings.push(ring)
        })

        // ── Curved connection lines with moving particles ──
        const connData: { pts: THREE.Vector3[]; t: number; speed: number; mesh: THREE.Mesh }[] = []

        CONNECTIONS.forEach(([a, b]) => {
          if (!cityPos[a] || !cityPos[b]) return
          const p1  = cityPos[a].clone()
          const p2  = cityPos[b].clone()
          const mid = p1.clone().add(p2).multiplyScalar(0.5)
          mid.z     = 0.25 + p1.distanceTo(p2) * 0.12

          const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2)
          const pts   = curve.getPoints(50)

          // Static dim arc
          const arcGeo = new THREE.BufferGeometry().setFromPoints(pts)
          const arcMat = new THREE.LineBasicMaterial({
            color: new THREE.Color(CITIES[a][3]),
            transparent: true, opacity: 0.15,
          })
          group.add(new THREE.Line(arcGeo, arcMat))

          // Moving particle
          const pMesh = new THREE.Mesh(
            new THREE.SphereGeometry(0.04, 6, 6),
            new THREE.MeshBasicMaterial({ color: CITIES[a][3], transparent: true, opacity: 0.9 })
          )
          pMesh.position.copy(p1)
          group.add(pMesh)
          connData.push({ pts, t: Math.random(), speed: 0.005 + Math.random() * 0.005, mesh: pMesh })
        })

        // ── Animation loop ──
        let frame  = 0
        let animId: number
        let mx = 0, my = 0

        const onMouse = (e: MouseEvent) => {
          mx = (e.clientX / window.innerWidth  - 0.5) * 2
          my = (e.clientY / window.innerHeight - 0.5) * 2
        }
        window.addEventListener('mousemove', onMouse)

        const onResize = () => {
          if (!mount) return
          camera.aspect = mount.clientWidth / mount.clientHeight
          camera.updateProjectionMatrix()
          renderer.setSize(mount.clientWidth, mount.clientHeight)
        }
        window.addEventListener('resize', onResize)

        const animate = () => {
          animId = requestAnimationFrame(animate)
          frame++

          // Slow auto-rotation
          group.rotation.y  = Math.sin(frame * 0.002) * 0.25
          group.rotation.x  = Math.sin(frame * 0.0015) * 0.12

          // Mouse parallax
          group.rotation.y += (mx * 0.25 - group.rotation.y) * 0.02
          group.rotation.x += (-my * 0.12 - group.rotation.x) * 0.02

          // Pulse city rings
          cityRings.forEach((r, i) => {
            const s = 1 + Math.sin(frame * 0.05 + i * 0.7) * 0.3
            r.scale.setScalar(s)
            ;(r.material as THREE.MeshBasicMaterial).opacity =
              0.35 + Math.sin(frame * 0.05 + i * 0.7) * 0.3
          })

          // Move particles
          connData.forEach(c => {
            c.t += c.speed
            if (c.t >= 1) c.t = 0
            const idx = Math.min(Math.floor(c.t * c.pts.length), c.pts.length - 1)
            c.mesh.position.copy(c.pts[idx])
            ;(c.mesh.material as THREE.MeshBasicMaterial).opacity =
              0.5 + Math.sin(c.t * Math.PI) * 0.5
          })

          renderer.render(scene, camera)
        }
        animate()

        // Store cleanup refs
        ;(mount as HTMLDivElement & { _cleanupROW?: () => void })._cleanupROW = () => {
          cancelAnimationFrame(animId)
          window.removeEventListener('mousemove', onMouse)
          window.removeEventListener('resize', onResize)
        }
      })
      .catch(console.error)

    return () => {
      const m = mount as HTMLDivElement & { _cleanupROW?: () => void }
      m._cleanupROW?.()
      renderer.dispose()
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div
      ref={mountRef}
      style={{ width: '100%', height: '100%', minHeight: 680 }}
      aria-hidden="true"
    />
  )
}
