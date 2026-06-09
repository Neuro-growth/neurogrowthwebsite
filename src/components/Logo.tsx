// NeuroGrowth Tech — SVG logo mark (circuit N)
// Recreated from brand colors: #00AAFF → #00FFCC gradient

export default function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="NeuroGrowth Tech logo mark"
    >
      <defs>
        <linearGradient id="ng-grad" x1="20" y1="10" x2="80" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00AAFF" />
          <stop offset="50%" stopColor="#00D4FF" />
          <stop offset="100%" stopColor="#00FFCC" />
        </linearGradient>
      </defs>

      {/* Left vertical bar of N */}
      <rect x="16" y="12" width="14" height="76" rx="3" fill="url(#ng-grad)" />

      {/* Diagonal stroke of N */}
      <polygon points="30,12 44,12 70,76 56,76" fill="url(#ng-grad)" />

      {/* Right vertical bar of N (solid left side only — circuit replaces right) */}
      <rect x="56" y="12" width="14" height="36" rx="3" fill="url(#ng-grad)" />

      {/* Circuit board lines branching from right bar */}
      {/* Main vertical stem */}
      <line x1="63" y1="48" x2="63" y2="88" stroke="url(#ng-grad)" strokeWidth="3.5" strokeLinecap="round" />

      {/* Branch left */}
      <line x1="63" y1="60" x2="50" y2="60" stroke="url(#ng-grad)" strokeWidth="3.5" strokeLinecap="round" />
      {/* Branch right-up */}
      <line x1="63" y1="52" x2="78" y2="52" stroke="url(#ng-grad)" strokeWidth="3.5" strokeLinecap="round" />
      {/* Branch right-down */}
      <line x1="63" y1="74" x2="78" y2="74" stroke="url(#ng-grad)" strokeWidth="3.5" strokeLinecap="round" />

      {/* Circuit nodes (circles) */}
      <circle cx="50" cy="60" r="4.5" fill="none" stroke="url(#ng-grad)" strokeWidth="3" />
      <circle cx="78" cy="52" r="4.5" fill="none" stroke="url(#ng-grad)" strokeWidth="3" />
      <circle cx="78" cy="74" r="4.5" fill="none" stroke="url(#ng-grad)" strokeWidth="3" />
      <circle cx="63" cy="88" r="4.5" fill="none" stroke="url(#ng-grad)" strokeWidth="3" />
    </svg>
  )
}
