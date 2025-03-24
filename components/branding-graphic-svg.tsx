export default function BrandingGraphicSVG() {
  // Color palette from the existing site
  const colorPalette = {
    yellow: "#FFA500", // Gold/Yellow
    orange: "#FF4500", // Orange/Red
    purple: "#4B0082", // Deep Purple
    background: "#121212", // Dark background
  }

  return (
    <svg
      viewBox="0 0 800 450"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto", maxWidth: "800px" }}
    >
      {/* Background */}
      <rect width="800" height="450" fill={colorPalette.background} />

      {/* Grid pattern */}
      <g opacity="0.2">
        {Array.from({ length: 41 }).map((_, i) =>
          Array.from({ length: 23 }).map(
            (_, j) =>
              // Only render ~80% of dots for a more organic feel
              Math.random() > 0.2 && <circle key={`dot-${i}-${j}`} cx={i * 20} cy={j * 20} r="1" fill="white" />,
          ),
        )}
      </g>

      {/* Tech/Robot elements */}
      {/* Gear 1 */}
      <g transform="translate(160, 135) scale(1.5)">
        <path
          d="M0,-8 L3,-8 L3,-3 L8,-3 L8,0 L3,0 L3,3 L8,3 L8,8 L3,8 L3,3 L0,3 L0,8 L-3,8 L-3,3 L-8,3 L-8,0 L-3,0 L-3,-3 L-8,-3 L-8,-8 L-3,-8 L-3,-3 L0,-3 Z"
          fill={colorPalette.orange}
        />
        <circle cx="0" cy="0" r="2" fill="rgba(255, 255, 255, 0.3)" />
      </g>

      {/* Gear 2 */}
      <g transform="translate(640, 315) scale(1.5)">
        <path
          d="M0,-8 L3,-8 L3,-3 L8,-3 L8,0 L3,0 L3,3 L8,3 L8,8 L3,8 L3,3 L0,3 L0,8 L-3,8 L-3,3 L-8,3 L-8,0 L-3,0 L-3,-3 L-8,-3 L-8,-8 L-3,-8 L-3,-3 L0,-3 Z"
          fill={colorPalette.yellow}
        />
        <circle cx="0" cy="0" r="2" fill="rgba(255, 255, 255, 0.3)" />
      </g>

      {/* Circuit 1 */}
      <g transform="translate(120, 337) scale(1.5)">
        <rect x="-6" y="-6" width="12" height="12" fill={colorPalette.purple} />
        <rect x="-4" y="-2" width="8" height="1" fill="rgba(255, 255, 255, 0.5)" />
        <rect x="-4" y="2" width="8" height="1" fill="rgba(255, 255, 255, 0.5)" />
        <rect x="-2" y="-4" width="1" height="8" fill="rgba(255, 255, 255, 0.5)" />
        <rect x="2" y="-4" width="1" height="8" fill="rgba(255, 255, 255, 0.5)" />
        <circle cx="-2" cy="-2" r="1" fill="rgba(255, 255, 255, 0.5)" />
        <circle cx="2" cy="2" r="1" fill="rgba(255, 255, 255, 0.5)" />
      </g>

      {/* Circuit 2 */}
      <g transform="translate(680, 112) scale(1.5)">
        <rect x="-6" y="-6" width="12" height="12" fill={colorPalette.orange} />
        <rect x="-4" y="-2" width="8" height="1" fill="rgba(255, 255, 255, 0.5)" />
        <rect x="-4" y="2" width="8" height="1" fill="rgba(255, 255, 255, 0.5)" />
        <rect x="-2" y="-4" width="1" height="8" fill="rgba(255, 255, 255, 0.5)" />
        <rect x="2" y="-4" width="1" height="8" fill="rgba(255, 255, 255, 0.5)" />
        <circle cx="-2" cy="-2" r="1" fill="rgba(255, 255, 255, 0.5)" />
        <circle cx="2" cy="2" r="1" fill="rgba(255, 255, 255, 0.5)" />
      </g>

      {/* Robot 1 */}
      <g transform="translate(240, 360) scale(1.5)">
        <rect x="-5" y="-6" width="10" height="8" fill={colorPalette.yellow} />
        <rect x="-3" y="-3" width="2" height="2" fill="rgba(255, 255, 255, 0.7)" />
        <rect x="1" y="-3" width="2" height="2" fill="rgba(255, 255, 255, 0.7)" />
        <rect x="-2" y="1" width="4" height="1" fill="rgba(255, 255, 255, 0.7)" />
        <rect x="-1" y="-8" width="2" height="2" fill={colorPalette.yellow} />
        <rect x="-2" y="-6" width="4" height="1" fill={colorPalette.yellow} />
      </g>

      {/* Robot 2 */}
      <g transform="translate(560, 90) scale(1.5)">
        <rect x="-5" y="-6" width="10" height="8" fill={colorPalette.purple} />
        <rect x="-3" y="-3" width="2" height="2" fill="rgba(255, 255, 255, 0.7)" />
        <rect x="1" y="-3" width="2" height="2" fill="rgba(255, 255, 255, 0.7)" />
        <rect x="-2" y="1" width="4" height="1" fill="rgba(255, 255, 255, 0.7)" />
        <rect x="-1" y="-8" width="2" height="2" fill={colorPalette.purple} />
        <rect x="-2" y="-6" width="4" height="1" fill={colorPalette.purple} />
      </g>

      {/* Chip 1 */}
      <g transform="translate(200, 225) scale(1.5)">
        <rect x="-5" y="-5" width="10" height="10" fill={colorPalette.orange} />
        <rect x="-3" y="-3" width="6" height="6" fill="rgba(255, 255, 255, 0.2)" />
        <rect x="-7" y="-2" width="2" height="4" fill={colorPalette.orange} />
        <rect x="5" y="-2" width="2" height="4" fill={colorPalette.orange} />
        <rect x="-2" y="-7" width="4" height="2" fill={colorPalette.orange} />
        <rect x="-2" y="5" width="4" height="2" fill={colorPalette.orange} />
      </g>

      {/* Chip 2 */}
      <g transform="translate(600, 225) scale(1.5)">
        <rect x="-5" y="-5" width="10" height="10" fill={colorPalette.yellow} />
        <rect x="-3" y="-3" width="6" height="6" fill="rgba(255, 255, 255, 0.2)" />
        <rect x="-7" y="-2" width="2" height="4" fill={colorPalette.yellow} />
        <rect x="5" y="-2" width="2" height="4" fill={colorPalette.yellow} />
        <rect x="-2" y="-7" width="4" height="2" fill={colorPalette.yellow} />
        <rect x="-2" y="5" width="4" height="2" fill={colorPalette.yellow} />
      </g>

      {/* Connecting lines */}
      <path
        d="M160,135 C240,180 320,225 400,225"
        stroke={colorPalette.yellow}
        strokeWidth="1"
        strokeDasharray="5,5"
        fill="none"
      />

      <path
        d="M400,225 C480,225 560,270 640,315"
        stroke={colorPalette.yellow}
        strokeWidth="1"
        strokeDasharray="5,5"
        fill="none"
      />

      <path
        d="M120,337 C200,292 280,247 400,225"
        stroke={colorPalette.yellow}
        strokeWidth="1"
        strokeDasharray="5,5"
        fill="none"
      />

      <path
        d="M400,225 C520,202 600,157 680,112"
        stroke={colorPalette.yellow}
        strokeWidth="1"
        strokeDasharray="5,5"
        fill="none"
      />

      {/* Center glow */}
      <circle cx="400" cy="225" r="120" fill="url(#centerGlow)" />

      {/* Pluto Logo */}
      <g transform="translate(400, 225) scale(0.8)">
        <rect width="84" height="84" rx="14" fill="#FEF3E4" transform="translate(-42, -42)" />
        <path
          d="M-20.355 17.742C-20.814 7.635 -12.755 -0.811 -2.652 -0.811H0.264C9.738 -0.811 17.537 6.652 17.967 16.131L19.309 45.71C19.768 55.817 11.71 64.263 1.607 64.263H-1.31C-10.784 64.263 -18.582 56.8 -19.013 47.321L-20.355 17.742Z"
          fill="#7A2E0E"
        />
        <path
          d="M28.606 -0.811C38.709 -0.811 46.767 7.635 46.308 17.742L44.966 47.321C44.536 56.8 36.738 64.263 27.263 64.263H24.347C14.244 64.263 6.185 55.817 6.644 45.71L7.987 16.131C8.417 6.652 16.215 -0.811 25.689 -0.811H28.606Z"
          fill="#7A2E0E"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-82.617 -118C-90.481 -118 -97.404 -112.81 -99.62 -105.254L-105.204 -86.214C-106.681 -81.176 -111.296 -77.716 -116.539 -77.716H-121.197C-160.957 -77.559 -193.632 -49.446 -201.67 -12.642H-202.371C-216 -12.642 -226.803 -1.126 -225.953 12.497L-222.999 59.823C-222.221 72.295 -211.895 82.01 -199.418 82.01H-196.746C-190.933 122.533 -156.203 153 -114.896 153H37.897C79.204 153 113.934 122.533 119.747 82.01H122.418C134.895 82.01 145.221 72.295 146 59.823L148.953 12.497C149.803 -1.126 139 -12.642 125.371 -12.642H124.671C116.633 -49.446 83.958 -77.559 44.197 -77.716L43.864 -77.716H39.539C34.296 -77.716 29.681 -81.176 28.204 -86.214L22.62 -105.254C20.404 -112.81 13.481 -118 5.617 -118H-82.617ZM-167.92 9.433C-170.463 -18.297 -148.668 -42.221 -120.863 -42.221H43.864C71.669 -42.221 93.464 -18.297 90.921 9.433L84.954 74.507C82.721 98.865 62.321 117.505 37.897 117.505C37.897 117.505 -3.714 82.952 -35.547 82.01C-69.47 81.006 -114.896 117.505 -114.896 117.505C-139.32 117.505 -159.719 98.865 -161.953 74.507L-167.92 9.433Z"
          fill="#F79009"
          transform="translate(40, 40) scale(0.25)"
        />
      </g>

      {/* Text container */}
      <rect x="300" y="280" width="200" height="80" rx="8" fill="rgba(255, 255, 255, 0.1)" />

      {/* Text */}
      <text x="400" y="320" fontFamily="serif" fontSize="20" textAnchor="middle" fill="white">
        for builders <tspan fontStyle="italic">by</tspan> builders
      </text>
      <text x="400" y="345" fontFamily="sans-serif" fontSize="12" textAnchor="middle" fill="rgba(255, 255, 255, 0.8)">
        Add verifiable data to any application
      </text>

      {/* Definitions */}
      <defs>
        <radialGradient id="centerGlow" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
          <stop offset="0%" stopColor="rgba(255, 165, 0, 0.2)" />
          <stop offset="100%" stopColor="rgba(255, 165, 0, 0)" />
        </radialGradient>
      </defs>
    </svg>
  )
}

