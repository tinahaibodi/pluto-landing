export default function StylizedPluto() {
  return (
    <div className="w-full overflow-hidden py-4">
      <svg viewBox="0 0 600 120" className="w-full h-auto" aria-label="pluto">
        {/* P - with pixelated edges and glitch elements */}
        <path
          d="M60,20 L60,100 L80,100 L80,70 L100,70 L120,70 L120,50 L100,50 L100,40 L90,40 L90,30 L120,30 L120,20 Z
             M80,30 L80,50 L100,50 L100,30 Z
             M70,25 L75,25 L75,30 L70,30 Z"
          fill="#808080"
        />

        {/* L - with step pattern */}
        <path
          d="M140,20 L140,100 L200,100 L200,90 L190,90 L190,80 L180,80 L180,90 L160,90 L160,20 Z
             M150,30 L155,30 L155,35 L150,35 Z"
          fill="#808080"
        />

        {/* U - with pixelated bottom and glitch */}
        <path
          d="M220,20 L220,80 L230,80 L230,90 L270,90 L270,80 L280,80 L280,20 L260,20 L260,70 L240,70 L240,20 Z
             M230,30 L235,30 L235,35 L230,35 Z
             M265,75 L270,75 L270,80 L265,80 Z"
          fill="#808080"
        />

        {/* T - with pixelated crossbar */}
        <path
          d="M300,20 L300,30 L310,30 L310,100 L330,100 L330,30 L350,30 L350,20 Z
             M320,25 L325,25 L325,30 L320,30 Z
             M335,35 L340,35 L340,40 L335,40 Z"
          fill="#808080"
        />

        {/* O - with pixelated edges and inner cutout */}
        <path
          d="M370,20 L370,30 L360,30 L360,90 L370,90 L370,100 L410,100 L410,90 L420,90 L420,30 L410,30 L410,20 Z
             M380,30 L400,30 L400,90 L380,90 Z
             M375,40 L385,40 L385,50 L375,50 Z
             M395,70 L400,70 L400,75 L395,75 Z"
          fill="#808080"
        />

        {/* Additional glitch elements */}
        <rect x="50" y="40" width="5" height="5" fill="#808080" />
        <rect x="130" y="85" width="5" height="5" fill="#808080" />
        <rect x="215" y="50" width="5" height="5" fill="#808080" />
        <rect x="295" y="60" width="5" height="5" fill="#808080" />
        <rect x="425" y="45" width="5" height="5" fill="#808080" />

        {/* Step patterns */}
        <path d="M95,20 L100,20 L100,25 L95,25 Z" fill="#808080" />
        <path d="M175,100 L180,100 L180,105 L175,105 Z" fill="#808080" />
        <path d="M250,90 L255,90 L255,95 L250,95 Z" fill="#808080" />
        <path d="M340,20 L345,20 L345,25 L340,25 Z" fill="#808080" />
        <path d="M415,100 L420,100 L420,105 L415,105 Z" fill="#808080" />
      </svg>
    </div>
  )
}

