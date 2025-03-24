"use client"

import { Home, Users, Sprout, Code, Presentation } from "lucide-react"
import { useState } from "react"

export default function Navigation() {
  const [activeTab, setActiveTab] = useState("home")

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "people", icon: Users, label: "People" },
    { id: "projects", icon: Sprout, label: "Projects" },
    { id: "code", icon: Code, label: "Code" },
    { id: "presentations", icon: Presentation, label: "Presentations" },
  ]

  return (
    <div className="flex flex-col items-center">
      <div className="flex">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`w-10 h-10 flex items-center justify-center border border-gray-300 ${
              item.id === activeTab ? "bg-black text-white" : "bg-white text-black"
            }`}
            onClick={() => setActiveTab(item.id)}
            aria-label={item.label}
          >
            <item.icon className="w-4 h-4" />
          </button>
        ))}
      </div>

      {activeTab && (
        <div className="relative mt-1">
          <div className="absolute left-1/2 top-0 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent border-b-black transform -translate-x-1/2 -translate-y-full"></div>
          <div className="bg-black text-white text-[10px] tracking-widest uppercase px-3 py-1 rounded-full">
            {navItems.find((item) => item.id === activeTab)?.label}
          </div>
        </div>
      )}
    </div>
  )
}

