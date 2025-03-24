export default function CircleLogo() {
  return (
    <div className="relative h-10 cursor-pointer flex items-center">
      {/* Circle logo */}
      <div className="h-8 w-8 rounded-full bg-brand-yellow mr-2 flex-shrink-0"></div>

      {/* Text "pluto" */}
      <span className="text-lg font-medium">pluto</span>

      <span className="sr-only">pluto</span>
    </div>
  )
}

