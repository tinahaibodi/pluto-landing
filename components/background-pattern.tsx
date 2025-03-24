export default function BackgroundPattern() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {/* Dotted grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#000" strokeWidth="0.5" strokeDasharray="1,1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Yellow dotted lines that extend fully across */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Curved line 1 - extends beyond viewport */}
        <path
          d="M-200,200 Q150,250 500,150 T1200,300"
          fill="none"
          stroke="#FFA500"
          strokeWidth="2"
          strokeDasharray="5,5"
          opacity="0.6"
          vectorEffect="non-scaling-stroke"
        />

        {/* Curved line 2 - extends beyond viewport */}
        <path
          d="M-200,500 Q200,400 600,600 T1400,500"
          fill="none"
          stroke="#FFA500"
          strokeWidth="2"
          strokeDasharray="5,5"
          opacity="0.6"
          vectorEffect="non-scaling-stroke"
        />

        {/* Curved line 3 - extends beyond viewport */}
        <path
          d="M-100,100 Q400,150 900,100 T1400,200"
          fill="none"
          stroke="#FFA500"
          strokeWidth="2"
          strokeDasharray="5,5"
          opacity="0.6"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  )
}

