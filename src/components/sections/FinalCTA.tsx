import { ArrowRight } from "lucide-react"
import { Button } from "../ui/Button"
import { Container } from "../ui/Container"
import { SectionHeader } from "../ui/SectionHeader"
import { getWhatsAppLink } from "../../config/site"

export function FinalCTA() {
  return (
    <section className="py-24 bg-evo-deep relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-evo-action/20 blur-[60px] md:blur-[150px] rounded-full pointer-events-none mobile-hide-decor" />

      <Container className="relative z-10 text-center">
        <SectionHeader 
          dark
          title="Pronto para fazer sua empresa parecer mais profissional no digital?"
          subtitle="Solicite um diagnóstico gratuito e veja como um site profissional e agentes de IA podem ajudar sua empresa a transmitir confiança, captar clientes e organizar melhor o atendimento."
        />
        
        <div className="mt-12 flex flex-col items-center gap-4">
          <Button asChild variant="primary" size="lg" className="w-full sm:w-auto group">
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              Solicitar diagnóstico gratuito
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <span className="text-sm text-evo-light/60">
            Sem compromisso. A ideia é entender seu momento e indicar o melhor caminho.
          </span>
        </div>
      </Container>
    </section>
  )
}
