export default function PixelatedPlanetLogo() {
  return (
    <div className="relative h-10 w-10">
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        {/* Background ring/orbit */}
        <path d="M6,16 L4,18 L4,22 L6,24 L8,24 L10,22 L10,18 L8,16 Z" fill="#FF4500" />
        <path d="M32,16 L30,18 L30,22 L32,24 L34,24 L36,22 L36,18 L34,16 Z" fill="#FF4500" />

        {/* Main planet body - pixelated circle */}
        <path d="M16,8 L24,8 L28,12 L30,16 L30,24 L28,28 L24,32 L16,32 L12,28 L10,24 L10,16 L12,12 Z" fill="#4B0082" />

        {/* Craters and details */}
        <rect x="14" y="12" width="4" height="4" fill="#FFA500" opacity="0.7" />
        <rect x="22" y="16" width="4" height="4" fill="#FFA500" opacity="0.7" />
        <rect x="18" y="24" width="4" height="4" fill="#FF4500" opacity="0.7" />
        <rect x="14" y="20" width="2" height="2" fill="#FFA500" opacity="0.5" />
        <rect x="24" y="24" width="2" height="2" fill="#FFA500" opacity="0.5" />

        {/* Pixel details */}
        <rect x="16" y="16" width="2" height="2" fill="#FFA500" opacity="0.3" />
        <rect x="20" y="20" width="2" height="2" fill="#FFA500" opacity="0.3" />
        <rect x="24" y="12" width="2" height="2" fill="#FFA500" opacity="0.3" />
      </svg>
      <span className="sr-only">Pluto</span>
    </div>
  )
}

