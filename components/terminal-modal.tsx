"use client"

import { useState } from "react"
import { Copy } from "lucide-react"

export default function TerminalModal() {
  const [activeTab, setActiveTab] = useState("bash")
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(getCommandForTab(activeTab))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const getCommandForTab = (tab: string) => {
    switch (tab) {
      case "bash":
        return "git clone https://raw.githubuser.com/pluto/install.git"
      case "python":
        return "pip install pluto-sdk"
      case "javascript":
        return "npm install @pluto/sdk"
      default:
        return "git clone https://raw.githubuser.com/pluto/install.git"
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 max-w-2xl mx-auto">
      {/* Tab navigation */}
      <div className="flex border-b border-gray-200">
        <button
          className={`px-4 py-2 text-sm ${activeTab === "bash" ? "bg-gray-100 font-medium" : "text-gray-600"}`}
          onClick={() => setActiveTab("bash")}
        >
          bash
        </button>
        <button
          className={`px-4 py-2 text-sm ${activeTab === "python" ? "bg-gray-100 font-medium" : "text-gray-600"}`}
          onClick={() => setActiveTab("python")}
        >
          python
        </button>
        <button
          className={`px-4 py-2 text-sm ${activeTab === "javascript" ? "bg-gray-100 font-medium" : "text-gray-600"}`}
          onClick={() => setActiveTab("javascript")}
        >
          javascript
        </button>
      </div>

      {/* Terminal content */}
      <div className="p-4 bg-gray-50">
        <div className="flex items-center text-sm font-mono">
          <span className="text-gray-500 mr-2">$</span>
          <span className="text-gray-800">{getCommandForTab(activeTab)}</span>
          <button className="ml-2 text-gray-400 hover:text-gray-600" aria-label="Copy command" onClick={handleCopy}>
            {copied ? <span className="text-green-500 text-xs">Copied!</span> : <Copy size={14} />}
          </button>
        </div>
      </div>

      {/* Action buttons - removed Run locally and Run remotely */}
      <div className="flex p-3 bg-white border-t border-gray-200">
        <div className="flex items-center text-xs text-gray-600">
          <span className="mr-4">
            Stars <span className="font-medium">1042</span>
          </span>
          <span className="mr-4">Changelog</span>
          <span>v20.2.7</span>
        </div>
      </div>
    </div>
  )
}

