export default function SpikyCharacterLogo() {
  return (
    <div className="relative h-10 cursor-pointer flex items-center">
      <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full">
        <g stroke="black" strokeWidth="1.5" fill="none">
          {/* Face outline - similar to Ollama's llama */}
          <path d="M15,8 L15,28 C15,30 17,32 20,32 C23,32 25,30 25,28 L25,8" />

          {/* Ears */}
          <path d="M15,10 L10,6 L10,14" />
          <path d="M25,10 L30,6 L30,14" />

          {/* Eyes - simple dots */}
          <circle cx="17" cy="18" r="1" fill="black" />
          <circle cx="23" cy="18" r="1" fill="black" />

          {/* Snout - neutral expression */}
          <ellipse cx="20" cy="24" rx="3" ry="2" />
          <line x1="19" y1="26" x2="21" y2="26" strokeWidth="1" />
        </g>

        {/* Text part - "pluto" */}
        <text x="38" y="24" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="black">
          pluto
        </text>
      </svg>
      <span className="sr-only">pluto</span>
    </div>
  )
}

