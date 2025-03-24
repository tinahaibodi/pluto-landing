"use client"

import { useState, useEffect, useRef } from "react"

interface RotatingWordsProps {
  words: string[]
  interval?: number
  className?: string
}

export default function RotatingWords({ words, interval = 1500, className = "" }: RotatingWordsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const containerRef = useRef<HTMLSpanElement>(null)

  // Find the longest word to set a fixed width
  const longestWord = words.reduce((longest, word) => (word.length > longest.length ? word : longest), "")

  useEffect(() => {
    // Handle the rotation of words
    const rotationInterval = setInterval(() => {
      // Start fade out
      setIsVisible(false)

      // Change word and fade in after a short delay
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
        setIsVisible(true)
      }, 200) // Transition duration
    }, interval)

    return () => clearInterval(rotationInterval)
  }, [words, interval])

  return (
    <span
      ref={containerRef}
      className={`inline-block transition-opacity duration-200 ${isVisible ? "opacity-100" : "opacity-0"} ${className}`}
      style={{
        minWidth: `${longestWord.length * 0.6}em`, // Approximate width based on character count
        display: "inline-block",
        textAlign: "left",
      }}
      aria-live="polite"
    >
      {words[currentIndex]}
    </span>
  )
}

