type SectionDividerProps = {
  tone?: "light" | "dark"
  variant?: "line" | "notch"
}

export function SectionDivider({ tone = "light", variant = "line" }: SectionDividerProps) {
  const lineColor =
    tone === "dark"
      ? "from-transparent via-white/20 to-transparent"
      : "from-transparent via-black/15 to-transparent"

  const softLineColor =
    tone === "dark"
      ? "from-transparent via-white/10 to-transparent"
      : "from-transparent via-black/8 to-transparent"

  const notchFill = tone === "dark" ? "bg-[#050B14]" : "bg-[#FAFAFA]"
  const notchBorder = tone === "dark" ? "border-white/15" : "border-black/10"
  const notchChevron = tone === "dark" ? "border-white/40" : "border-black/35"

  if (variant === "notch") {
    return (
      <div aria-hidden className="relative h-9 md:h-10">
        <div className="mx-auto w-[96%] md:w-[92%] max-w-[1320px]">
          <div className={`h-px bg-gradient-to-r ${lineColor}`} />
        </div>
        <div
          className={`absolute left-1/2 -translate-x-1/2 -top-[1px] w-16 md:w-20 h-8 md:h-9 rounded-b-[999px] border-x border-b ${notchBorder} ${notchFill} flex items-center justify-center`}
        >
          <span className={`block w-2.5 h-2.5 border-r border-b rotate-45 -translate-y-0.5 ${notchChevron}`} />
        </div>
      </div>
    )
  }

  return (
    <div aria-hidden className="relative py-1 md:py-2">
      <div className="mx-auto w-[92%] md:w-[86%] max-w-[1120px]">
        <div className={`h-px bg-gradient-to-r ${lineColor}`} />
        <div className={`mt-1 h-px bg-gradient-to-r ${softLineColor}`} />
      </div>
    </div>
  )
}
