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
  return (
    <div className="min-h-screen flex flex-col font-inter overflow-x-hidden w-full">
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
