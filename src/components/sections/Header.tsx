import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "../ui/Button"
import { Container } from "../ui/Container"
import { getWhatsAppLink } from "../../config/site"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (ticking) return

      ticking = true
      window.requestAnimationFrame(() => {
        const next = window.scrollY > 20
        setIsScrolled((prev) => (prev === next ? prev : next))
        ticking = false
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Soluções", href: "#solucoes" },
    { label: "Sites", href: "#sites" },
    { label: "Agentes de IA", href: "#agentes-ia" },
    { label: "Processo", href: "#processo" },
    { label: "FAQ", href: "#faq" },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-evo-deep/95 backdrop-blur-md fx-backdrop shadow-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <Container className="flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 z-50 group">
          <img 
            src="/Logo.png" 
            alt="EvoPro" 
            className="h-10 md:h-[52px] w-auto group-hover:opacity-90 transition-opacity" 
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className="text-sm font-medium text-white/70 hover:text-white relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-evo-action after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left transition-colors pb-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button 
            asChild
            variant="primary" 
            size="sm" 
            className="hidden lg:inline-flex bg-evo-action hover:bg-evo-action/90 text-white border border-evo-action/50 shadow-[0_0_20px_-5px_rgba(37,99,235,0.3)] font-semibold h-10 px-6 rounded-md transition-all"
          >
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              Solicitar diagnóstico
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <div className={`
          fixed inset-0 bg-evo-deep z-40 flex flex-col pt-24 px-6
          transition-transform duration-300 ease-in-out md:hidden
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}>
          <ul className="flex flex-col gap-6 text-xl font-sora">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className="text-white hover:text-evo-action transition-colors block py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto pb-12">
            <Button 
              asChild
              variant="primary" 
              className="w-full text-lg h-14"
            >
              <a 
                href={getWhatsAppLink()} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Solicitar diagnóstico
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}
