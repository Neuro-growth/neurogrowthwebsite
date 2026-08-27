// NeuroGrowthTech — Logo
// Uses the actual N icon image (log 1.png) + eurogrowthtech wordmark

interface LogoProps {
  height?: number
  iconOnly?: boolean
}

export default function Logo({ height = 48, iconOnly = false }: LogoProps) {
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 0,
      height,
    }}>
      {/* N icon — the actual image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/log 1.png"
        alt="NeuroGrowthTech N icon"
        style={{
          height,
          width: 'auto',
          display: 'block',
          objectFit: 'contain',
          marginRight: -(height * 0.18),
        }}
      />

      {/* Wordmark — only shown when not icon-only */}
      {!iconOnly && (
        <span style={{
          fontFamily: "'Sora', 'Inter', system-ui, sans-serif",
          fontWeight: 300,
          fontSize: height * 0.46,
          letterSpacing: '0.06em',
          color: '#FFFFFF',
          whiteSpace: 'nowrap',
          lineHeight: 1,
        }}>
          eurogrowthtech
        </span>
      )}
    </div>
  )
}
