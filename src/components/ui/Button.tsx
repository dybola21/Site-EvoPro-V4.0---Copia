import * as React from "react"
import { cn } from "../../lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-evo-action disabled:pointer-events-none disabled:opacity-50"
    
    const variants = {
      primary: "bg-evo-action text-white hover:bg-evo-action/90 shadow-sm",
      secondary: "bg-evo-petroleum text-white hover:bg-evo-petroleum/90",
      outline: "border border-evo-light bg-transparent hover:bg-evo-offwhite text-evo-dark",
      ghost: "hover:bg-evo-light/50 text-evo-dark",
    }

    const sizes = {
      default: "h-11 px-6 py-2",
      sm: "h-9 px-4 text-sm",
      lg: "h-14 px-8 text-lg font-semibold",
      icon: "h-11 w-11",
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
