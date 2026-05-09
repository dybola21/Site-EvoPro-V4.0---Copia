import { MessageSquare, Database, Bell, CheckCircle2 } from "lucide-react"
import { Container } from "../ui/Container"
import { SectionHeader } from "../ui/SectionHeader"
import { MotionSafe } from "../ui/MotionSafe"

export function AIAgentsSection() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Mensagem recebida",
      description: "Cliente demonstra interesse e inicia o contato.",
      delay: 0.1
    },
    {
      icon: Database,
      title: "Dados organizados",
      description: "Nome, telefone, interesse e origem centralizados.",
      delay: 0.3
    },
    {
      icon: Bell,
      title: "Equipe notificada",
      description: "Atendimento acionado com mais contexto.",
      delay: 0.5
    },
    {
      icon: CheckCircle2,
      title: "Follow-up sugerido",
      description: "Próxima ação pronta para evitar perda do lead.",
      delay: 0.7
    }
  ]

  return (
    <section id="agentes-ia" className="py-20 md:py-32 bg-[#0A0D14] overflow-hidden relative">
      {/* Decorative background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-evo-action/5 rounded-full blur-[60px] md:blur-[150px] pointer-events-none mobile-hide-decor" />

      <Container>
        <div className="max-w-4xl mx-auto">
          <SectionHeader 
            dark
            title="O agente de IA organiza o caminho entre o interesse do cliente e o atendimento da sua equipe."
            subtitle="Quando um contato chega, o agente ajuda a organizar informações, acionar sua equipe e manter o follow-up em dia — sem substituir o atendimento humano."
          />
        </div>

        <div className="mt-16 md:mt-24 relative z-10 max-w-6xl mx-auto">
          
          <div className="relative">
            
            {/* Elegant Background Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-[32px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />
            
            {/* Elegant Background Connection Line (Mobile) */}
            <div className="lg:hidden absolute top-[32px] bottom-[32px] left-[31px] w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-8 relative z-10">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <MotionSafe
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    key={index}
                    className="flex flex-row lg:flex-col items-start lg:items-center group"
                  >
                    {/* Step Icon Node */}
                    <div className="relative flex-shrink-0 w-16 h-16 rounded-full bg-[#0A0D14] border border-white/[0.08] flex items-center justify-center group-hover:border-evo-cyan/30 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_40px_rgba(37,99,235,0.15)] z-10">
                      
                      {/* Subtle Inner Glow */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />
                      
                      {/* Hover Glow */}
                      <div className="absolute inset-0 rounded-full bg-evo-cyan/0 group-hover:bg-evo-cyan/10 blur-md transition-all duration-500" />
                      
                      {/* The Icon */}
                      <Icon className="w-6 h-6 text-white/50 group-hover:text-evo-cyan relative z-10 transition-colors duration-500" strokeWidth={1.5} />

                      {/* Connection Dots (Desktop) */}
                      {index > 0 && <div className="hidden lg:block absolute top-1/2 -left-[1px] w-1 h-1 rounded-full bg-white/20 group-hover:bg-evo-cyan -translate-y-1/2 transition-colors duration-500" />}
                      {index < steps.length - 1 && <div className="hidden lg:block absolute top-1/2 -right-[1px] w-1 h-1 rounded-full bg-white/20 group-hover:bg-evo-cyan -translate-y-1/2 transition-colors duration-500" />}

                      {/* Connection Dots (Mobile) */}
                      {index > 0 && <div className="lg:hidden absolute left-1/2 -top-[1px] w-1 h-1 rounded-full bg-white/20 group-hover:bg-evo-cyan -translate-x-1/2 transition-colors duration-500" />}
                      {index < steps.length - 1 && <div className="lg:hidden absolute left-1/2 -bottom-[1px] w-1 h-1 rounded-full bg-white/20 group-hover:bg-evo-cyan -translate-x-1/2 transition-colors duration-500" />}
                    </div>

                    {/* Content */}
                    <div className="mt-2 lg:mt-8 ml-6 lg:ml-0 flex-1 lg:text-center">
                      <h4 className="text-white font-sora font-medium mb-2 lg:text-lg tracking-wide group-hover:text-evo-cyan transition-colors duration-300">
                        {step.title}
                      </h4>
                      <p className="text-sm text-white/50 leading-relaxed font-light lg:max-w-[220px] mx-auto group-hover:text-white/70 transition-colors duration-300">
                        {step.description}
                      </p>
                    </div>
                  </MotionSafe>
                );
              })}
            </div>
          </div>

          {/* Minimalist Closing Pill */}
          <MotionSafe
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 md:mt-24 flex items-center justify-center relative z-10"
          >
            <div className="inline-flex items-center gap-4 bg-white/[0.02] border border-white/5 backdrop-blur-sm md:backdrop-blur-md px-6 py-3 rounded-full hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300">
              <div className="relative flex items-center justify-center w-3 h-3">
                <div className="absolute inset-0 bg-evo-cyan/40 rounded-full animate-ping" />
                <div className="w-1.5 h-1.5 rounded-full bg-evo-cyan relative z-10" />
              </div>
              <span className="text-white/60 font-light text-sm md:text-base">
                Enquanto sua equipe foca no atendimento, o agente ajuda a manter o processo organizado.
              </span>
            </div>
          </MotionSafe>

        </div>
      </Container>
    </section>
  )
}
