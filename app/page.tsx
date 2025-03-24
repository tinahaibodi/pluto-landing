import PlayfulBanner from "../components/playful-banner"
import BackgroundPattern from "../components/background-pattern"
import TerminalModal from "../components/terminal-modal"
import HowItWorks from "../components/how-it-works"
import PlutoLogo from "../components/pluto-logo"
import RotatingWords from "../components/rotating-words"
import TopNavigation from "../components/top-navigation"
import { ArrowRight, Github } from "lucide-react"

export default function Home() {
  const dataSources = ["Spotify", "Reddit", "Venmo", "Twitter", "Coinbase", "GitHub", "LinkedIn", "Ashby", "Discord"]

  return (
    <main className="min-h-screen bg-[#f8f5f0] relative">
      {/* Background Pattern */}
      <BackgroundPattern />

      {/* Content */}
      <div className="relative z-10">
        {/* Top Navigation */}
        <TopNavigation />

        {/* Hero Section */}
        <section className="px-6 py-12 md:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="mt-8 max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-10 text-left flex flex-wrap">
                <span>Add </span>
                <RotatingWords words={dataSources} className="text-[#F79009] mx-2" />
                <span className="text-brand-purple">verifiable data</span>
                <span> to any application</span>
              </h1>

              <ul className="mb-8 space-y-6">
                <li className="flex items-start">
                  <span className="inline-block w-6 h-6 bg-[#F79009] rounded-full mr-4 flex-shrink-0 mt-1"></span>
                  <div>
                    <p className="font-medium text-lg">Clone the example</p>
                    <p className="text-gray-600">Get our starter template with everything you need</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-6 h-6 bg-[#FF4500] rounded-full mr-4 flex-shrink-0 mt-1"></span>
                  <div>
                    <p className="font-medium text-lg">Install the SDK to react/node/python</p>
                    <p className="text-gray-600">Connect to your preferred environment</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-6 h-6 bg-[#4B0082] rounded-full mr-4 flex-shrink-0 mt-1"></span>
                  <div>
                    <p className="font-medium text-lg">Prove your first automation</p>
                    <p className="text-gray-600">"curl command" outputs a proof</p>
                  </div>
                </li>
              </ul>

              <TerminalModal />

              <div className="mt-8 flex space-x-4">
                <a
                  href="#"
                  className="px-4 py-2 text-sm flex items-center justify-center text-white bg-brand-purple hover:bg-[#F79009] rounded-md transition-colors"
                >
                  Start deploying
                </a>
                <a
                  href="#"
                  className="px-4 py-2 text-sm flex items-center text-brand-purple border-2 border-brand-purple bg-transparent hover:border-[#F79009] hover:text-[#F79009] rounded-md transition-colors"
                >
                  Docs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="p-2 text-sm flex items-center justify-center text-brand-purple border-2 border-brand-purple bg-transparent hover:border-[#F79009] hover:text-[#F79009] rounded-md transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Playful Banner */}
        <PlayfulBanner />

        {/* Integration Guide Section */}
        <section className="px-6 py-16 md:py-24 bg-[#f8f5f0]">
          <div className="max-w-5xl mx-auto">
            <HowItWorks />
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-12 mt-12 border-t border-gray-200">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <PlutoLogo />
            </div>
            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-6 mb-4">
                <a href="#" className="text-gray-400 hover:text-[#F79009] transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#F79009] transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4.11841 1H19.5982V3.98014H24L23.0775 6.96101H22.2964V19.0199C22.6881 19.0199 23.0061 19.3226 23.0061 19.6967V20.5096H23.1482C23.5406 20.5096 23.8587 20.813 23.8587 21.1871V22H15.9053V21.1871C15.9053 20.813 16.2233 20.5096 16.6157 20.5096H16.7578V19.6967C16.7578 19.3714 16.9984 19.0999 17.3187 19.0344L17.3036 12.3806C17.0525 9.7221 14.7106 7.63855 11.8583 7.63855C9.00592 7.63855 6.66404 9.7221 6.41293 12.3806L6.39789 19.0286C6.77681 19.0824 7.24293 19.3612 7.24293 19.6967V20.5096H7.38502C7.77671 20.5096 8.09473 20.813 8.09473 21.1871V22H0.142092V21.1871C0.142092 20.813 0.460107 20.5096 0.8518 20.5096H0.993892V19.6967C0.993892 19.3226 1.31191 19.0199 1.70435 19.0199V6.96101H0.923221L0 3.98014H4.11841V1Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="sr-only">Farcaster</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#F79009] transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 9h4v12H2z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="4"
                      cy="4"
                      r="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#F79009] transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="sr-only">GitHub</span>
                </a>
              </div>
              <div className="text-sm text-gray-500">© {new Date().getFullYear()} Pluto. All rights reserved.</div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}

