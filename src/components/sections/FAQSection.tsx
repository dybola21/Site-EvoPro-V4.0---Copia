import { useState } from "react"
import { Container } from "../ui/Container"
import { SectionHeader } from "../ui/SectionHeader"
import { ChevronDown } from "lucide-react"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Minha empresa precisa mesmo de um site?",
      answer: "Sim. Um site é sua base própria na internet. Enquanto redes sociais são ótimas para alcance, um site transmite estabilidade, profissionalismo e organiza sua apresentação para quem já está pronto para contratar ou comprar."
    },
    {
      question: "Qual a diferença entre site e landing page?",
      answer: "O site institucional apresenta toda a sua empresa, serviços, história e contatos. A landing page é uma página única focada em conversão para uma oferta, serviço ou campanha específica, sem distrações."
    },
    {
      question: "O que um agente de IA pode fazer pela minha empresa?",
      answer: "Ele atua no atendimento inicial coletando dados, respondendo perguntas frequentes, notificando sua equipe quando um lead quente chega e iniciando processos de follow-up, ajudando a não perder oportunidades."
    },
    {
      question: "O agente de IA substitui minha equipe?",
      answer: "Não. O agente de IA serve para apoiar sua equipe, tirando o peso de tarefas repetitivas e garantindo que nenhum contato fique sem resposta inicial, preparando o terreno para um fechamento humano."
    },
    {
      question: "Vocês criam os textos do site?",
      answer: "Sim. Criamos ou revisamos a copy do seu site para garantir uma comunicação clara, comercial e focada no seu público-alvo."
    },
    {
      question: "O site funciona no celular?",
      answer: "Com certeza. Desenvolvemos com foco prioritário na experiência mobile (smartphones), onde a grande maioria dos seus clientes irá acessar."
    },
    {
      question: "Posso começar apenas com um site?",
      answer: "Sim. Você pode começar apenas com o desenvolvimento do site profissional e, posteriormente, implementar landing pages ou agentes de IA conforme sua empresa cresce."
    },
    {
      question: "Posso contratar apenas um agente de IA?",
      answer: "Sim. Se você já tem uma estrutura digital sólida e precisa apenas organizar seu atendimento e captação via WhatsApp, podemos focar na criação e configuração do agente."
    },
    {
      question: "Como funciona o diagnóstico gratuito?",
      answer: "Você entra em contato conosco pelo WhatsApp, entendemos seu cenário atual, seus objetivos e indicamos qual seria a estrutura digital ideal para o momento da sua empresa, sem compromisso."
    },
    {
      question: "Quanto tempo leva para criar o projeto?",
      answer: "O prazo varia conforme a complexidade. Um site institucional ou landing page costuma levar de 2 a 4 semanas. Estruturas completas com IA podem levar um pouco mais. Alinhamos o cronograma no planejamento."
    }
  ]

  return (
    <section id="faq" className="py-24 bg-white">
      <Container>
        <SectionHeader 
          title="Perguntas Frequentes"
        />

        <div className="mt-16 max-w-3xl mx-auto divide-y divide-evo-light border-y border-evo-light">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                className="flex w-full items-center justify-between text-left gap-4"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-sora font-semibold text-evo-dark">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-evo-action transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-evo-muted leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
