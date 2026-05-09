import { useEffect } from "react"
import { Header } from "./components/sections/Header"
import { Hero } from "./components/sections/Hero"
import { ProblemSection } from "./components/sections/ProblemSection"
import { SolutionsSection } from "./components/sections/SolutionsSection"
import { WebsiteSection } from "./components/sections/WebsiteSection"
import { AIAgentsSection } from "./components/sections/AIAgentsSection"
import { ProcessSection } from "./components/sections/ProcessSection"
import { StructuresSection } from "./components/sections/StructuresSection"
import { AboutSection } from "./components/sections/AboutSection"
import { AudienceSection } from "./components/sections/AudienceSection"
import { FAQSection } from "./components/sections/FAQSection"
import { FinalCTA } from "./components/sections/FinalCTA"
import { Footer } from "./components/sections/Footer"

function App() {
  // Fix Safari bfcache: page goes blank when navigating back
  useEffect(() => {
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        document.body.style.opacity = "1"
        document.documentElement.style.overflowX = "hidden"
      }
    }
    window.addEventListener("pageshow", handlePageShow)
    return () => window.removeEventListener("pageshow", handlePageShow)
  }, [])

  // Guardrail: when scroll velocity spikes, temporarily disable heavy GPU effects
  // to avoid white-screen compositor glitches and frame drops on desktop.
  useEffect(() => {
    let lastY = window.scrollY
    let lastTime = performance.now()
    let clearClassTimeout: number | undefined

    const disableHeavyFxTemporarily = () => {
      document.documentElement.classList.add("is-fast-scroll")
      if (clearClassTimeout) window.clearTimeout(clearClassTimeout)
      clearClassTimeout = window.setTimeout(() => {
        document.documentElement.classList.remove("is-fast-scroll")
      }, 140)
    }

    const onScroll = () => {
      const now = performance.now()
      const y = window.scrollY
      const dt = now - lastTime

      if (dt > 0) {
        const velocity = Math.abs(y - lastY) / dt // px per ms
        // ~2.8px/ms = 2800px/s: high-velocity wheel/touchpad flick
        if (velocity > 2.8) {
          disableHeavyFxTemporarily()
        }
      }

      lastY = y
      lastTime = now
    }

    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", onScroll)
      if (clearClassTimeout) window.clearTimeout(clearClassTimeout)
      document.documentElement.classList.remove("is-fast-scroll")
    }
  }, [])

  return (
    <div className="flex flex-col font-inter overflow-x-hidden w-full">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProblemSection />
        <SolutionsSection />
        <WebsiteSection />
        <AIAgentsSection />
        <ProcessSection />
        <StructuresSection />
        <AboutSection />
        <AudienceSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
