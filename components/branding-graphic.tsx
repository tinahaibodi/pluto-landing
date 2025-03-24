"use client"

import { useEffect, useRef } from "react"
import PlutoLogo from "./pluto-logo"

// Color palette from the existing site
const colorPalette = {
  yellow: "#FFA500", // Gold/Yellow
  orange: "#FF4500", // Orange/Red
  purple: "#4B0082", // Deep Purple
  background: "#121212", // Dark background
}

export default function BrandingGraphic() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with device pixel ratio for sharp rendering
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()

    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    // Draw background
    ctx.fillStyle = colorPalette.background
    ctx.fillRect(0, 0, rect.width, rect.height)

    // Draw grid pattern
    const gridSize = 20
    const dotSize = 1

    ctx.fillStyle = "rgba(255, 255, 255, 0.2)"

    for (let x = 0; x < rect.width; x += gridSize) {
      for (let y = 0; y < rect.height; y += gridSize) {
        // Randomly skip some dots for a more organic feel
        if (Math.random() > 0.2) {
          ctx.beginPath()
          ctx.arc(x, y, dotSize, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    // Draw some of the robot/tech shapes from PlayfulBanner component
    const drawShape = (x: number, y: number, type: string, color: string, scale = 1) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.scale(scale, scale)

      ctx.fillStyle = color

      switch (type) {
        case "gear":
          // Draw gear
          ctx.beginPath()
          ctx.moveTo(0, -8)
          ctx.lineTo(3, -8)
          ctx.lineTo(3, -3)
          ctx.lineTo(8, -3)
          ctx.lineTo(8, 0)
          ctx.lineTo(3, 0)
          ctx.lineTo(3, 3)
          ctx.lineTo(8, 3)
          ctx.lineTo(8, 8)
          ctx.lineTo(3, 8)
          ctx.lineTo(3, 3)
          ctx.lineTo(0, 3)
          ctx.lineTo(0, 8)
          ctx.lineTo(-3, 8)
          ctx.lineTo(-3, 3)
          ctx.lineTo(-8, 3)
          ctx.lineTo(-8, 0)
          ctx.lineTo(-3, 0)
          ctx.lineTo(-3, -3)
          ctx.lineTo(-8, -3)
          ctx.lineTo(-8, -8)
          ctx.lineTo(-3, -8)
          ctx.lineTo(-3, -3)
          ctx.lineTo(0, -3)
          ctx.fill()

          // Inner circle
          ctx.fillStyle = "rgba(255, 255, 255, 0.3)"
          ctx.beginPath()
          ctx.arc(0, 0, 2, 0, Math.PI * 2)
          ctx.fill()
          break

        case "circuit":
          // Draw circuit board
          ctx.fillRect(-6, -6, 12, 12)

          // Draw circuit lines
          ctx.fillStyle = "rgba(255, 255, 255, 0.5)"
          ctx.fillRect(-4, -2, 8, 1)
          ctx.fillRect(-4, 2, 8, 1)
          ctx.fillRect(-2, -4, 1, 8)
          ctx.fillRect(2, -4, 1, 8)

          // Draw circuit dots
          ctx.beginPath()
          ctx.arc(-2, -2, 1, 0, Math.PI * 2)
          ctx.arc(2, 2, 1, 0, Math.PI * 2)
          ctx.fill()
          break

        case "robot":
          // Draw robot head
          ctx.fillRect(-5, -6, 10, 8)

          // Draw eyes
          ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
          ctx.fillRect(-3, -3, 2, 2)
          ctx.fillRect(1, -3, 2, 2)

          // Draw mouth
          ctx.fillRect(-2, 1, 4, 1)

          // Draw antenna
          ctx.fillStyle = color
          ctx.fillRect(-1, -8, 2, 2)
          ctx.fillRect(-2, -6, 4, 1)
          break

        case "chip":
          // Draw microchip
          ctx.fillRect(-5, -5, 10, 10)

          // Draw inner square
          ctx.fillStyle = "rgba(255, 255, 255, 0.2)"
          ctx.fillRect(-3, -3, 6, 6)

          // Draw pins
          ctx.fillStyle = color
          ctx.fillRect(-7, -2, 2, 4)
          ctx.fillRect(5, -2, 2, 4)
          ctx.fillRect(-2, -7, 4, 2)
          ctx.fillRect(-2, 5, 4, 2)
          break
      }

      ctx.restore()
    }

    // Draw shapes around the canvas
    const shapes = [
      { x: rect.width * 0.2, y: rect.height * 0.3, type: "gear", color: colorPalette.orange },
      { x: rect.width * 0.8, y: rect.height * 0.7, type: "gear", color: colorPalette.yellow },
      { x: rect.width * 0.15, y: rect.height * 0.75, type: "circuit", color: colorPalette.purple },
      { x: rect.width * 0.85, y: rect.height * 0.25, type: "circuit", color: colorPalette.orange },
      { x: rect.width * 0.3, y: rect.height * 0.8, type: "robot", color: colorPalette.yellow },
      { x: rect.width * 0.7, y: rect.height * 0.2, type: "robot", color: colorPalette.purple },
      { x: rect.width * 0.25, y: rect.height * 0.5, type: "chip", color: colorPalette.orange },
      { x: rect.width * 0.75, y: rect.height * 0.5, type: "chip", color: colorPalette.yellow },
    ]

    shapes.forEach((shape) => {
      drawShape(shape.x, shape.y, shape.type, shape.color, 1.5)
    })

    // Add some connecting lines between shapes
    ctx.strokeStyle = colorPalette.yellow
    ctx.setLineDash([5, 5])
    ctx.lineWidth = 1

    ctx.beginPath()
    ctx.moveTo(rect.width * 0.2, rect.height * 0.3)
    ctx.bezierCurveTo(
      rect.width * 0.3,
      rect.height * 0.4,
      rect.width * 0.4,
      rect.height * 0.5,
      rect.width * 0.5,
      rect.height * 0.5,
    )
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(rect.width * 0.5, rect.height * 0.5)
    ctx.bezierCurveTo(
      rect.width * 0.6,
      rect.height * 0.5,
      rect.width * 0.7,
      rect.height * 0.6,
      rect.width * 0.8,
      rect.height * 0.7,
    )
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(rect.width * 0.15, rect.height * 0.75)
    ctx.bezierCurveTo(
      rect.width * 0.25,
      rect.height * 0.65,
      rect.width * 0.35,
      rect.height * 0.55,
      rect.width * 0.5,
      rect.height * 0.5,
    )
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(rect.width * 0.5, rect.height * 0.5)
    ctx.bezierCurveTo(
      rect.width * 0.65,
      rect.height * 0.45,
      rect.width * 0.75,
      rect.height * 0.35,
      rect.width * 0.85,
      rect.height * 0.25,
    )
    ctx.stroke()

    // Draw a subtle glow around the center for the logo
    const gradient = ctx.createRadialGradient(
      rect.width / 2,
      rect.height / 2,
      0,
      rect.width / 2,
      rect.height / 2,
      rect.width * 0.2,
    )
    gradient.addColorStop(0, "rgba(255, 165, 0, 0.2)")
    gradient.addColorStop(1, "rgba(255, 165, 0, 0)")

    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.arc(rect.width / 2, rect.height / 2, rect.width * 0.2, 0, Math.PI * 2)
    ctx.fill()
  }, [])

  return (
    <div className="relative w-full aspect-video max-w-4xl mx-auto overflow-hidden rounded-lg">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Center logo and text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-lg">
          <div className="flex justify-center mb-4">
            <div className="h-24 w-24">
              <PlutoLogo />
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-serif text-white mb-2">
              for builders <span className="italic">by</span> builders
            </h2>
            <p className="text-white text-opacity-80 text-sm">Add verifiable data to any application</p>
          </div>
        </div>
      </div>
    </div>
  )
}

