import { Suspense, lazy } from "react"
import { Header } from "./components/sections/Header"
import { Hero } from "./components/sections/Hero"

// Lazy load para componentes abaixo da dobra (reduz o tamanho do bundle inicial)
const ProblemSection = lazy(() => import("./components/sections/ProblemSection").then(m => ({ default: m.ProblemSection })))
const SolutionsSection = lazy(() => import("./components/sections/SolutionsSection").then(m => ({ default: m.SolutionsSection })))
const WebsiteSection = lazy(() => import("./components/sections/WebsiteSection").then(m => ({ default: m.WebsiteSection })))
const AIAgentsSection = lazy(() => import("./components/sections/AIAgentsSection").then(m => ({ default: m.AIAgentsSection })))
const ProcessSection = lazy(() => import("./components/sections/ProcessSection").then(m => ({ default: m.ProcessSection })))
const StructuresSection = lazy(() => import("./components/sections/StructuresSection").then(m => ({ default: m.StructuresSection })))
const AboutSection = lazy(() => import("./components/sections/AboutSection").then(m => ({ default: m.AboutSection })))
const AudienceSection = lazy(() => import("./components/sections/AudienceSection").then(m => ({ default: m.AudienceSection })))
const FAQSection = lazy(() => import("./components/sections/FAQSection").then(m => ({ default: m.FAQSection })))
const FinalCTA = lazy(() => import("./components/sections/FinalCTA").then(m => ({ default: m.FinalCTA })))
const Footer = lazy(() => import("./components/sections/Footer").then(m => ({ default: m.Footer })))

function App() {
  return (
    <div className="min-h-screen flex flex-col font-inter overflow-x-hidden w-full">
      <Header />
      <main className="flex-1">
        <Hero />
        <Suspense fallback={<div className="h-screen w-full flex items-center justify-center bg-[#FAFAFA]"><div className="w-8 h-8 border-4 border-evo-action/30 border-t-evo-action rounded-full animate-spin" /></div>}>
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
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
