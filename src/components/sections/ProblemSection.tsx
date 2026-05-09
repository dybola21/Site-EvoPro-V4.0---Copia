import { Container } from "../ui/Container"

export function ProblemSection() {
  const problems = [
    {
      id: "01",
      title: "Presença digital fraca",
      description: "A empresa não transmite confiança no primeiro contato. Faltam informações claras e um visual que valorize o alto nível do seu serviço."
    },
    {
      id: "02",
      title: "Captação desorganizada",
      description: "O cliente se interessa, mas não encontra um caminho óbvio para falar com a equipe, resultando em perda diária de ótimas oportunidades."
    },
    {
      id: "03",
      title: "Sem continuidade",
      description: "Leads chegam, mas acabam esfriando por demora na resposta, falta de triagem inicial ou ausência de um fluxo de follow-up."
    }
  ]

  return (
    <section className="py-32 md:py-40 bg-[#FAFAFA] relative overflow-hidden">
      <Container>
        <div className="max-w-5xl mx-auto text-center mb-24 md:mb-32">
          <h2 className="text-4xl md:text-6xl lg:text-[4.5rem] font-sora font-extrabold text-[#0D1522] leading-[1.05] tracking-tighter text-balance">
            O problema não é sua empresa ser pequena. <br className="hidden md:block"/>
            <span className="text-evo-action/90 font-light italic tracking-tight">É parecer improvisada.</span>
          </h2>
          <p className="mt-10 text-xl md:text-2xl text-evo-dark/60 font-light max-w-3xl mx-auto leading-relaxed text-balance">
            Hoje, os clientes pesquisam antes de comprar. Se a sua empresa não tem uma estrutura à altura do serviço que entrega, ela perde a venda antes mesmo do primeiro contato.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-x-12 gap-y-16 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div key={index} className="relative group flex flex-col">
              {/* Elegant Top Line */}
              <div className="w-full h-[1px] bg-evo-dark/10 mb-8 relative">
                {/* Animated progress bar on hover */}
                <div className="absolute top-0 left-0 h-full w-0 bg-evo-action transition-all duration-700 ease-out group-hover:w-full" />
              </div>
              
              <div className="flex flex-col gap-2 mb-4">
                <span className="text-sm font-bold text-evo-action tracking-widest font-sora">{problem.id}</span>
                <h3 className="text-2xl font-bold font-sora text-[#0D1522] tracking-tight">{problem.title}</h3>
              </div>
              
              <p className="text-evo-dark/70 leading-relaxed font-light text-lg">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
