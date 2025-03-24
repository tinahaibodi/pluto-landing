"use client"

import { useState, useEffect, useRef } from "react"
import { Copy, Check, Terminal } from "lucide-react"

interface TerminalEditorProps {
  initialCode: string
  language?: string
  title?: string
  visibleLines?: number
}

export default function TerminalEditor({
  initialCode,
  language = "javascript",
  title = "iFrame.js",
  visibleLines = 15,
}: TerminalEditorProps) {
  const [code, setCode] = useState(initialCode)
  const [isCopied, setIsCopied] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [timestamp, setTimestamp] = useState("")

  // Update timestamp every second
  useEffect(() => {
    const updateTimestamp = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, "0")
      const minutes = now.getMinutes().toString().padStart(2, "0")
      const seconds = now.getSeconds().toString().padStart(2, "0")
      setTimestamp(`${hours}:${minutes}:${seconds}`)
    }

    updateTimestamp()
    const interval = setInterval(updateTimestamp, 1000)
    return () => clearInterval(interval)
  }, [])

  // Reset the copied state after 2 seconds
  useEffect(() => {
    if (isCopied) {
      const timeout = setTimeout(() => {
        setIsCopied(false)
      }, 2000)
      return () => clearTimeout(timeout)
    }
  }, [isCopied])

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setIsCopied(true)
  }

  // Format code lines with timestamps and prefixes
  const formatCodeLines = () => {
    return code.split("\n").map((line, index) => {
      const now = new Date()
      // Slightly randomize timestamps to make it look more realistic
      const hours = now.getHours()
      const minutes = (now.getMinutes() + (index % 3)).toString().padStart(2, "0")
      const seconds = (now.getSeconds() + (index % 7)).toString().padStart(2, "0")
      const timestamp = `${hours}:${minutes}:${seconds}`

      // Alternate between different log types
      let prefix = "web.1"
      let content = line

      if (index % 5 === 0) {
        prefix = "build-sdk.1"
      } else if (index % 7 === 0) {
        prefix = "react-example.1"
      }

      // Add HMR updates or build messages occasionally
      if (index % 4 === 0) {
        content = `[vite] hmr update /src/components/${title}`
      } else if (index % 6 === 0) {
        content = `[nodemon] restarting due to changes...`
      }

      return {
        timestamp: `${timestamp} PM`,
        prefix,
        content,
      }
    })
  }

  const formattedLines = formatCodeLines()

  return (
    <div className="rounded-lg overflow-hidden border border-gray-800 bg-[#121212] shadow-md">
      {/* Editor header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#1E1E1E] text-white w-full">
        <div className="flex items-center">
          <div className="flex space-x-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <Terminal className="w-4 h-4 mr-2 text-gray-400" />
          <span className="text-sm font-mono text-gray-300">
            [developer:(main*)]:{timestamp}:~/code/zk/tee-web-prover]$
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="text-xs px-3 py-1 rounded-full bg-[#333333] hover:bg-opacity-90 text-white transition-colors flex items-center"
        >
          {isCopied ? (
            <>
              <Check className="w-3 h-3 mr-1" /> Copied
            </>
          ) : (
            <>
              <Copy className="w-3 h-3 mr-1" /> Copy
            </>
          )}
        </button>
      </div>

      {/* Terminal content */}
      <div className="bg-[#121212] p-4 font-mono text-sm overflow-auto" style={{ maxHeight: `${visibleLines * 24}px` }}>
        {formattedLines.map((line, index) => (
          <div key={index} className="flex whitespace-nowrap">
            <span className="text-[#F06292] w-28 flex-shrink-0">{line.timestamp}</span>
            <span className="text-[#64B5F6] w-32 flex-shrink-0">{line.prefix}</span>
            <span className="text-[#B0BEC5] pl-2">|</span>
            <span className="text-[#A5D6A7] pl-2">{line.content}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

