'use client'

import dynamic from 'next/dynamic'

const AfricaMap3D = dynamic(() => import('./AfricaMap3D'), { ssr: false })

export default function AfricaMap3DWrapper() {
  return <AfricaMap3D />
}
