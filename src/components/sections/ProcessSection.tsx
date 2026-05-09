import { Container } from "../ui/Container"
import { SectionHeader } from "../ui/SectionHeader"

export function ProcessSection() {
  const steps = [
    {
      title: "Diagnóstico",
      description: "Entendemos sua empresa, serviços, público e objetivos."
    },
    {
      title: "Planejamento",
      description: "Definimos a estrutura ideal: site, landing page, agente de IA ou pacote completo."
    },
    {
      title: "Criação",
      description: "Desenvolvemos layout, textos, páginas e experiência responsiva."
    },
    {
      title: "Configuração dos agentes",
      description: "Criamos fluxos de apoio para atendimento, organização e follow-up."
    },
    {
      title: "Integração",
      description: "Conectamos canais como WhatsApp, formulários, e-mail ou outras ferramentas necessárias."
    },
    {
      title: "Entrega",
      description: "Publicamos, testamos e orientamos os próximos passos."
    }
  ]

  return (
    <section id="processo" className="py-20 md:py-24 bg-white">
      <Container>
        <SectionHeader
          title="Como funciona a criação da sua estrutura digital."
        />

        <div className="mt-12 md:mt-16 max-w-3xl mx-auto">
          <div className="flex flex-col gap-6 relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-gray-200 to-transparent hidden md:block" />

            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-5 group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-evo-action text-white font-bold text-sm shrink-0 shadow-sm relative z-10">
                  {index + 1}
                </div>
                <div className="flex-1 bg-evo-offwhite p-5 md:p-6 rounded-2xl border border-evo-light hover:border-evo-action/30 transition-colors shadow-sm">
                  <h3 className="text-lg md:text-xl font-bold font-sora text-evo-dark mb-1.5">{step.title}</h3>
                  <p className="text-evo-muted leading-relaxed text-sm md:text-base">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
