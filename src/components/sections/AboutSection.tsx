import { Container } from "../ui/Container"
import { SectionHeader } from "../ui/SectionHeader"

export function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <SectionHeader 
            align="left"
            title="Empresas boas não deveriam parecer improvisadas no digital."
            className="mb-10"
          />
          
          <div className="space-y-6 text-lg text-evo-muted leading-relaxed font-inter">
            <p>
              A EvoPro nasceu para ajudar empresas que trabalham sério a construírem uma presença digital mais profissional, clara e preparada para gerar oportunidades.
            </p>
            <p>
              Muitos negócios entregam bons serviços, mas ainda se apresentam online de forma desorganizada, sem site, sem captação estruturada e sem continuidade no atendimento.
            </p>
            <p>
              Nosso trabalho é unir design, estratégia e agentes de IA para que sua empresa transmita mais confiança, capte melhor e organize melhor o relacionamento com potenciais clientes.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
