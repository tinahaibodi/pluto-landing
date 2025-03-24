"use client"

import { useEffect, useRef } from "react"

// Color palette
const colorPalette = {
  yellow: "#FFA500", // Gold/Yellow
  orange: "#FF4500", // Orange/Red
  purple: "#4B0082", // Deep Purple
}

export default function PlayfulBanner() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Add slight random movement to each shape
    const shapes = container.querySelectorAll(".shape")
    shapes.forEach((shape) => {
      const randomDelay = Math.random() * 5
      const randomDuration = 3 + Math.random() * 2
      ;(shape as HTMLElement).style.animation = `float ${randomDuration}s ease-in-out ${randomDelay}s infinite`
    })
  }, [])

  return (
    <div ref={containerRef} className="w-full h-32 md:h-40 lg:h-48 relative my-12 overflow-hidden bg-[#f8f5f0]">
      {/* Shapes container with lower z-index */}
      <div className="absolute inset-0 z-0">
        {/* Robot Head 1 */}
        <div className="shape absolute left-[10%] top-[20%]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="4" width="16" height="14" fill={colorPalette.purple} />
            <rect x="6" y="8" width="4" height="2" fill="#fff" opacity="0.7" />
            <rect x="14" y="8" width="4" height="2" fill="#fff" opacity="0.7" />
            <rect x="8" y="14" width="8" height="2" fill="#fff" opacity="0.5" />
            <rect x="2" y="6" width="2" height="6" fill={colorPalette.purple} />
            <rect x="20" y="6" width="2" height="6" fill={colorPalette.purple} />
          </svg>
        </div>

        {/* Gear 1 */}
        <div className="shape absolute left-[15%] top-[60%]">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12,2 L18,2 L18,6 L22,6 L22,12 L28,12 L28,18 L22,18 L22,24 L18,24 L18,28 L12,28 L12,24 L8,24 L8,18 L2,18 L2,12 L8,12 L8,6 L12,6 Z"
              fill={colorPalette.orange}
            />
            <circle cx="15" cy="15" r="5" fill="#fff" opacity="0.3" />
          </svg>
        </div>

        {/* Circuit Board 1 */}
        <div className="shape absolute left-[25%] top-[30%]">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="16" height="16" fill={colorPalette.yellow} />
            <path d="M4,4 L4,8 L8,8 L8,4 Z" fill="#fff" opacity="0.5" />
            <path d="M12,4 L12,8 L16,8 L16,4 Z" fill="#fff" opacity="0.5" />
            <path d="M4,12 L4,16 L8,16 L8,12 Z" fill="#fff" opacity="0.5" />
            <path d="M12,12 L12,16 L16,16 L16,12 Z" fill="#fff" opacity="0.5" />
            <path d="M8,8 L8,12 L12,12 L12,8 Z" fill="#fff" opacity="0.3" />
            <path d="M6,4 L6,16" stroke="#fff" strokeWidth="0.5" opacity="0.7" />
            <path d="M14,4 L14,16" stroke="#fff" strokeWidth="0.5" opacity="0.7" />
            <path d="M4,6 L16,6" stroke="#fff" strokeWidth="0.5" opacity="0.7" />
            <path d="M4,14 L16,14" stroke="#fff" strokeWidth="0.5" opacity="0.7" />
          </svg>
        </div>

        {/* Robot Arm */}
        <div className="shape absolute left-[35%] top-[70%]">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="4" width="4" height="17" fill={colorPalette.purple} />
            <rect x="8" y="4" width="13" height="4" fill={colorPalette.purple} />
            <rect x="17" y="8" width="4" height="8" fill={colorPalette.purple} />
            <circle cx="19" cy="19" r="3" fill={colorPalette.purple} />
            <circle cx="6" cy="6" r="1" fill="#fff" opacity="0.5" />
          </svg>
        </div>

        {/* Microchip */}
        <div className="shape absolute left-[45%] top-[25%]">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="4" width="14" height="14" fill={colorPalette.orange} />
            <rect x="6" y="6" width="10" height="10" fill="#fff" opacity="0.2" />
            <rect x="8" y="8" width="6" height="6" fill={colorPalette.orange} />
            <rect x="2" y="9" width="2" height="4" fill={colorPalette.orange} />
            <rect x="18" y="9" width="2" height="4" fill={colorPalette.orange} />
            <rect x="9" y="2" width="4" height="2" fill={colorPalette.orange} />
            <rect x="9" y="18" width="4" height="2" fill={colorPalette.orange} />
          </svg>
        </div>

        {/* Robot Head 2 */}
        <div className="shape absolute left-[55%] top-[65%]">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="5" width="20" height="15" rx="2" fill={colorPalette.yellow} />
            <rect x="9" y="10" width="4" height="3" fill="#fff" opacity="0.7" />
            <rect x="17" y="10" width="4" height="3" fill="#fff" opacity="0.7" />
            <rect x="11" y="16" width="8" height="2" fill="#fff" opacity="0.5" />
            <rect x="10" y="20" width="10" height="5" fill={colorPalette.yellow} />
            <rect x="3" y="10" width="2" height="5" fill={colorPalette.yellow} />
            <rect x="25" y="10" width="2" height="5" fill={colorPalette.yellow} />
          </svg>
        </div>

        {/* Battery */}
        <div className="shape absolute left-[65%] top-[35%]">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="6" width="14" height="10" fill={colorPalette.purple} />
            <rect x="18" y="8" width="2" height="6" fill={colorPalette.purple} />
            <rect x="6" y="8" width="2" height="6" fill="#fff" opacity="0.3" />
            <rect x="10" y="8" width="2" height="6" fill="#fff" opacity="0.3" />
            <rect x="14" y="8" width="2" height="6" fill="#fff" opacity="0.3" />
          </svg>
        </div>

        {/* Radar/Antenna */}
        <div className="shape absolute left-[75%] top-[20%]">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12.5" cy="17.5" r="5" fill={colorPalette.orange} />
            <path d="M12.5,12.5 L12.5,2.5" stroke={colorPalette.orange} strokeWidth="2" />
            <path d="M8.5,6.5 L16.5,6.5" stroke={colorPalette.orange} strokeWidth="2" />
            <circle cx="12.5" cy="17.5" r="2" fill="#fff" opacity="0.3" />
          </svg>
        </div>

        {/* Cog/Gear */}
        <div className="shape absolute left-[80%] top-[60%]">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8,2 L12,2 L12,4 L14,4 L14,6 L16,6 L16,8 L18,8 L18,12 L16,12 L16,14 L14,14 L14,16 L12,16 L12,18 L8,18 L8,16 L6,16 L6,14 L4,14 L4,12 L2,12 L2,8 L4,8 L4,6 L6,6 L6,4 L8,4 Z"
              fill={colorPalette.yellow}
            />
            <circle cx="10" cy="10" r="3" fill="#fff" opacity="0.3" />
          </svg>
        </div>

        {/* Robot Eye */}
        <div className="shape absolute left-[85%] top-[40%]">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="6" width="16" height="8" rx="4" fill={colorPalette.purple} />
            <circle cx="10" cy="10" r="3" fill="#fff" opacity="0.6" />
            <circle cx="10" cy="10" r="1" fill={colorPalette.purple} />
          </svg>
        </div>

        {/* Circuit Board 2 */}
        <div className="shape absolute left-[5%] top-[45%]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="12" height="12" fill={colorPalette.orange} />
            <line x1="2" y1="6" x2="14" y2="6" stroke="#fff" strokeWidth="0.5" opacity="0.7" />
            <line x1="2" y1="10" x2="14" y2="10" stroke="#fff" strokeWidth="0.5" opacity="0.7" />
            <line x1="6" y1="2" x2="6" y2="14" stroke="#fff" strokeWidth="0.5" opacity="0.7" />
            <line x1="10" y1="2" x2="10" y2="14" stroke="#fff" strokeWidth="0.5" opacity="0.7" />
            <circle cx="6" cy="6" r="1" fill="#fff" opacity="0.5" />
            <circle cx="10" cy="10" r="1" fill="#fff" opacity="0.5" />
          </svg>
        </div>

        {/* Small Robot */}
        <div className="shape absolute left-[90%] top-[25%]">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="2" width="8" height="6" fill={colorPalette.yellow} />
            <rect x="4" y="4" width="2" height="1" fill="#fff" opacity="0.7" />
            <rect x="8" y="4" width="2" height="1" fill="#fff" opacity="0.7" />
            <rect x="5" y="6" width="4" height="1" fill="#fff" opacity="0.5" />
            <rect x="4" y="8" width="2" height="4" fill={colorPalette.yellow} />
            <rect x="8" y="8" width="2" height="4" fill={colorPalette.yellow} />
          </svg>
        </div>

        {/* Motherboard */}
        <div className="shape absolute left-[40%] top-[15%]">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="14" height="14" fill={colorPalette.orange} />
            <rect x="4" y="4" width="4" height="4" fill="#fff" opacity="0.2" />
            <rect x="10" y="4" width="4" height="4" fill="#fff" opacity="0.2" />
            <rect x="4" y="10" width="4" height="4" fill="#fff" opacity="0.2" />
            <rect x="10" y="10" width="4" height="4" fill="#fff" opacity="0.2" />
            <circle cx="6" cy="6" r="1" fill={colorPalette.orange} />
            <circle cx="12" cy="6" r="1" fill={colorPalette.orange} />
            <circle cx="6" cy="12" r="1" fill={colorPalette.orange} />
            <circle cx="12" cy="12" r="1" fill={colorPalette.orange} />
            <line x1="9" y1="2" x2="9" y2="16" stroke="#fff" strokeWidth="0.5" opacity="0.5" />
            <line x1="2" y1="9" x2="16" y2="9" stroke="#fff" strokeWidth="0.5" opacity="0.5" />
          </svg>
        </div>

        {/* Robot Claw */}
        <div className="shape absolute left-[20%] top-[75%]">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="7" y="2" width="4" height="10" fill={colorPalette.purple} />
            <path d="M4,12 L7,12 L7,16 L4,16 Z" fill={colorPalette.purple} />
            <path d="M11,12 L14,12 L14,16 L11,16 Z" fill={colorPalette.purple} />
            <circle cx="9" cy="5" r="1" fill="#fff" opacity="0.5" />
          </svg>
        </div>

        {/* Small Gear */}
        <div className="shape absolute left-[70%] top-[80%]">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6,2 L8,2 L8,3 L9,3 L9,4 L10,4 L10,5 L11,5 L11,6 L12,6 L12,8 L11,8 L11,9 L10,9 L10,10 L9,10 L9,11 L8,11 L8,12 L6,12 L6,11 L5,11 L5,10 L4,10 L4,9 L3,9 L3,8 L2,8 L2,6 L3,6 L3,5 L4,5 L4,4 L5,4 L5,3 L6,3 Z"
              fill={colorPalette.yellow}
            />
            <circle cx="7" cy="7" r="2" fill="#fff" opacity="0.3" />
          </svg>
        </div>

        {/* Robot Antenna */}
        <div className="shape absolute left-[30%] top-[50%]">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="8" width="6" height="12" fill={colorPalette.purple} />
            <rect x="10" y="2" width="2" height="6" fill={colorPalette.purple} />
            <circle cx="11" cy="2" r="1" fill="#fff" opacity="0.7" />
            <rect x="6" y="6" width="10" height="2" fill={colorPalette.purple} />
          </svg>
        </div>

        {/* Small Circuit */}
        <div className="shape absolute left-[95%] top-[55%]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="10" height="10" fill={colorPalette.orange} />
            <path d="M5,5 L5,11 L11,11 L11,5 Z" fill="#fff" opacity="0.2" />
            <circle cx="8" cy="8" r="2" fill={colorPalette.orange} />
            <circle cx="8" cy="8" r="1" fill="#fff" opacity="0.5" />
          </svg>
        </div>
      </div>

      {/* Text container with higher z-index and background */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="bg-[#f8f5f0] bg-opacity-80 px-6 py-2 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-serif text-center">
            for builders <span className="italic">by</span> builders
          </h2>
        </div>
      </div>
    </div>
  )
}

