"use client"

import { useState } from "react"
import PlutoLogo from "./pluto-logo"
import { Menu, X } from "lucide-react"

export default function TopNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto rounded-full border border-gray-200 bg-white px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <PlutoLogo />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-800 hover:text-[#F79009] transition-colors">
            Console
          </a>
          <a href="#" className="text-gray-800 hover:text-[#F79009] transition-colors">
            Web Proofs
          </a>
          <a href="#" className="text-gray-800 hover:text-[#F79009] transition-colors">
            Start Learning
          </a>
          <a href="#" className="text-gray-800 hover:text-[#F79009] transition-colors">
            Blog
          </a>
          <a href="#" className="text-gray-800 hover:text-[#F79009] transition-colors">
            About
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#"
            className="px-4 py-2 text-sm flex items-center justify-center text-white bg-brand-purple hover:bg-[#F79009] rounded-md transition-colors"
          >
            Documentation
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-600 hover:text-[#F79009]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">{mobileMenuOpen ? "Close menu" : "Open menu"}</span>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden pt-2 pb-4 px-4 mt-2 bg-white rounded-lg shadow-lg">
          <div className="flex flex-col space-y-3">
            <a href="#" className="text-gray-800 hover:text-[#F79009] transition-colors py-2">
              Console
            </a>
            <a href="#" className="text-gray-800 hover:text-[#F79009] transition-colors py-2">
              Web Proofs
            </a>
            <a href="#" className="text-gray-800 hover:text-[#F79009] transition-colors py-2">
              Start Learning
            </a>
            <a href="#" className="text-gray-800 hover:text-[#F79009] transition-colors py-2">
              Blog
            </a>
            <a href="#" className="text-gray-800 hover:text-[#F79009] transition-colors py-2">
              About
            </a>
            <a
              href="#"
              className="px-4 py-2 text-sm flex items-center justify-center text-white bg-brand-purple hover:bg-[#F79009] rounded-md transition-colors inline-block w-full text-center mt-2"
            >
              Documentation
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

