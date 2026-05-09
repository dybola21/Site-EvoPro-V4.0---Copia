import { Container } from "../ui/Container"
import { SectionHeader } from "../ui/SectionHeader"
import { Check } from "lucide-react"

export function AudienceSection() {
  const audiences = [
    "Clínicas",
    "Escritórios",
    "Prestadores de serviço",
    "Consultorias",
    "Comércios locais",
    "Profissionais liberais",
    "Empresas B2B",
    "Negócios que dependem de orçamento",
    "Empresas que recebem contatos pelo WhatsApp"
  ]

  return (
    <section className="py-24 bg-evo-deep text-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader 
              align="left"
              dark
              title="Para empresas que querem sair do improviso digital."
            />
            <p className="mt-6 text-lg text-evo-light/80 leading-relaxed max-w-xl">
              Se sua empresa já trabalha sério, mas ainda não tem uma presença digital à altura, a EvoPro pode ajudar a estruturar essa evolução.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              {audiences.map((audience, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-evo-action/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-evo-action" />
                  </div>
                  <span className="text-evo-light font-medium">{audience}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
