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
    <section id="processo" className="py-24 bg-white">
      <Container>
        <SectionHeader 
          title="Como funciona a criação da sua estrutura digital."
        />

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-evo-light before:to-transparent">
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-evo-action text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10">
                  {index + 1}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-evo-offwhite p-6 rounded-2xl border border-evo-light hover:border-evo-action/30 transition-colors shadow-sm">
                  <h3 className="text-xl font-bold font-sora text-evo-dark mb-2">{step.title}</h3>
                  <p className="text-evo-muted leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
