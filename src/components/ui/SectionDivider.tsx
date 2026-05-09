type SectionDividerProps = {
  tone?: "light" | "dark"
}

export function SectionDivider({ tone = "light" }: SectionDividerProps) {
  const lineColor =
    tone === "dark"
      ? "from-transparent via-white/20 to-transparent"
      : "from-transparent via-black/15 to-transparent"

  const softLineColor =
    tone === "dark"
      ? "from-transparent via-white/10 to-transparent"
      : "from-transparent via-black/8 to-transparent"

  return (
    <div aria-hidden className="relative py-1 md:py-2">
      <div className="mx-auto w-[92%] md:w-[86%] max-w-[1120px]">
        <div className={`h-px bg-gradient-to-r ${lineColor}`} />
        <div className={`mt-1 h-px bg-gradient-to-r ${softLineColor}`} />
      </div>
    </div>
  )
}
