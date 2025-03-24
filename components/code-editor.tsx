"use client"

import { useState, useEffect, useRef } from "react"
import { Copy, Check } from "lucide-react"

interface CodeEditorProps {
  initialCode: string
  language?: string
  title?: string
  visibleLines?: number
}

export default function CodeEditor({
  initialCode,
  language = "javascript",
  title = "iFrame.js",
  visibleLines = 15,
}: CodeEditorProps) {
  const [code, setCode] = useState(initialCode)
  const [isCopied, setIsCopied] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

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

  const lineCount = code.split("\n").length
  const lineHeight = 24 // Line height in pixels
  const editorHeight = visibleLines * lineHeight

  return (
    <div className="rounded-lg overflow-hidden border border-gray-200 bg-white shadow-md">
      {/* Editor header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#4B0082] text-white w-full">
        <div className="flex items-center">
          <div className="flex space-x-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-sm font-medium">{title}</span>
        </div>
        <button
          onClick={handleCopy}
          className="text-xs px-3 py-1 rounded-full bg-[#F79009] hover:bg-opacity-90 text-white transition-colors flex items-center"
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

      {/* Editor content */}
      <div className="flex">
        {/* Line numbers */}
        <div className="w-14 bg-gray-100 border-r border-gray-200 text-center select-none">
          {Array.from({ length: visibleLines }).map((_, i) => (
            <div
              key={i}
              className="text-sm text-gray-500"
              style={{ height: `${lineHeight}px`, lineHeight: `${lineHeight}px` }}
            >
              {i + 1}
            </div>
          ))}
        </div>

        {/* Code area */}
        <div className="flex-grow">
          <textarea
            ref={textareaRef}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-full font-mono text-sm bg-white focus:outline-none resize-none p-4"
            spellCheck="false"
            style={{
              height: `${editorHeight}px`,
              lineHeight: `${lineHeight}px`,
              minHeight: `${editorHeight}px`,
            }}
          />
        </div>
      </div>
    </div>
  )
}

