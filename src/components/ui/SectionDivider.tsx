type SectionDividerProps = {
  tone?: "light" | "dark"
}

export function SectionDivider({ tone = "light" }: SectionDividerProps) {
  const stroke = tone === "dark" ? "rgba(255,255,255,0.22)" : "rgba(10,17,29,0.22)"
  const glow = tone === "dark" ? "rgba(37,99,235,0.45)" : "rgba(37,99,235,0.3)"

  return (
    <div aria-hidden className="relative py-2 md:py-3">
      <div className="mx-auto w-[88%] md:w-[72%] max-w-[760px]">
        <svg className="w-full h-5 md:h-6" viewBox="0 0 760 24" fill="none" preserveAspectRatio="none">
          <path d="M8 12C110 5 214 5 316 12" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
          <path d="M444 12C546 5 650 5 752 12" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="380" cy="12" r="2.8" fill={glow} />
        </svg>
      </div>
    </div>
  )
}
