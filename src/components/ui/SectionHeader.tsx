import * as React from "react"
import { cn } from "../../lib/utils"

interface SectionHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title: React.ReactNode
  subtitle?: React.ReactNode
  badge?: string
  align?: "left" | "center"
  dark?: boolean
}

export function SectionHeader({ 
  title, 
  subtitle, 
  badge, 
  align = "center",
  dark = false,
  className,
  ...props 
}: SectionHeaderProps) {
  return (
    <div 
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center mx-auto max-w-3xl" : "items-start text-left max-w-2xl",
        className
      )}
      {...props}
    >
      {badge && (
        <span className="text-sm font-bold uppercase tracking-wider text-evo-action">
          {badge}
        </span>
      )}
      <h2 className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance",
        dark ? "text-white" : "text-evo-dark"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "text-lg leading-relaxed mt-2",
          dark ? "text-evo-light/80" : "text-evo-muted"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
