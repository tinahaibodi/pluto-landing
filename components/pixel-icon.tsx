interface PixelIconProps {
  type: "data" | "shield" | "key" | "code" | "user" | "check" | "lock" | "star"
  className?: string
  size?: "sm" | "md" | "lg"
}

export default function PixelIcon({ type, className = "", size = "md" }: PixelIconProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  }

  const renderIcon = () => {
    switch (type) {
      case "data":
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="4" width="4" height="4" fill="currentColor" />
            <rect x="8" y="4" width="4" height="4" fill="currentColor" />
            <rect x="12" y="4" width="4" height="4" fill="currentColor" />
            <rect x="16" y="4" width="4" height="4" fill="currentColor" />
            <rect x="4" y="8" width="4" height="4" fill="currentColor" />
            <rect x="16" y="8" width="4" height="4" fill="currentColor" />
            <rect x="4" y="12" width="4" height="4" fill="currentColor" />
            <rect x="16" y="12" width="4" height="4" fill="currentColor" />
            <rect x="4" y="16" width="4" height="4" fill="currentColor" />
            <rect x="8" y="16" width="4" height="4" fill="currentColor" />
            <rect x="12" y="16" width="4" height="4" fill="currentColor" />
            <rect x="16" y="16" width="4" height="4" fill="currentColor" />
          </svg>
        )
      case "shield":
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="2" width="8" height="4" fill="currentColor" />
            <rect x="4" y="6" width="4" height="4" fill="currentColor" />
            <rect x="16" y="6" width="4" height="4" fill="currentColor" />
            <rect x="4" y="10" width="4" height="4" fill="currentColor" />
            <rect x="16" y="10" width="4" height="4" fill="currentColor" />
            <rect x="8" y="14" width="8" height="4" fill="currentColor" />
            <rect x="12" y="18" width="4" height="4" fill="currentColor" />
          </svg>
        )
      case "key":
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="8" width="4" height="4" fill="currentColor" />
            <rect x="8" y="4" width="4" height="4" fill="currentColor" />
            <rect x="12" y="4" width="4" height="4" fill="currentColor" />
            <rect x="16" y="8" width="4" height="4" fill="currentColor" />
            <rect x="12" y="12" width="4" height="4" fill="currentColor" />
            <rect x="16" y="16" width="4" height="4" fill="currentColor" />
            <rect x="8" y="12" width="4" height="4" fill="currentColor" />
            <rect x="4" y="16" width="4" height="4" fill="currentColor" />
          </svg>
        )
      case "code":
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="8" width="4" height="4" fill="currentColor" />
            <rect x="8" y="4" width="4" height="4" fill="currentColor" />
            <rect x="16" y="4" width="4" height="4" fill="currentColor" />
            <rect x="12" y="8" width="4" height="4" fill="currentColor" />
            <rect x="8" y="12" width="4" height="4" fill="currentColor" />
            <rect x="16" y="12" width="4" height="4" fill="currentColor" />
            <rect x="4" y="16" width="4" height="4" fill="currentColor" />
            <rect x="12" y="16" width="4" height="4" fill="currentColor" />
          </svg>
        )
      case "user":
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="4" width="8" height="4" fill="currentColor" />
            <rect x="4" y="8" width="4" height="4" fill="currentColor" />
            <rect x="16" y="8" width="4" height="4" fill="currentColor" />
            <rect x="8" y="12" width="8" height="4" fill="currentColor" />
            <rect x="8" y="16" width="2" height="4" fill="currentColor" />
            <rect x="14" y="16" width="2" height="4" fill="currentColor" />
          </svg>
        )
      case "check":
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="16" y="4" width="4" height="4" fill="currentColor" />
            <rect x="12" y="8" width="4" height="4" fill="currentColor" />
            <rect x="8" y="12" width="4" height="4" fill="currentColor" />
            <rect x="4" y="16" width="4" height="4" fill="currentColor" />
          </svg>
        )
      case "lock":
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="4" width="8" height="4" fill="currentColor" />
            <rect x="4" y="8" width="4" height="4" fill="currentColor" />
            <rect x="16" y="8" width="4" height="4" fill="currentColor" />
            <rect x="4" y="12" width="16" height="4" fill="currentColor" />
            <rect x="8" y="16" width="8" height="4" fill="currentColor" />
          </svg>
        )
      case "star":
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="12" y="2" width="4" height="4" fill="currentColor" />
            <rect x="8" y="6" width="4" height="4" fill="currentColor" />
            <rect x="16" y="6" width="4" height="4" fill="currentColor" />
            <rect x="4" y="10" width="16" height="4" fill="currentColor" />
            <rect x="8" y="14" width="8" height="4" fill="currentColor" />
            <rect x="4" y="18" width="4" height="4" fill="currentColor" />
            <rect x="16" y="18" width="4" height="4" fill="currentColor" />
          </svg>
        )
      default:
        return null
    }
  }

  return <div className={`${sizeClasses[size]} ${className}`}>{renderIcon()}</div>
}

