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
