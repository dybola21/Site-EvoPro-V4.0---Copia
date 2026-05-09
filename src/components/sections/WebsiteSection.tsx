import { MessageCircle, ArrowRight, Layout, Globe } from "lucide-react"
import { Container } from "../ui/Container"
import { SectionHeader } from "../ui/SectionHeader"
import { getWhatsAppLink } from "../../config/site"

export function WebsiteSection() {
  const benefits = [
    "Primeira impressão mais profissional",
    "Serviços apresentados com clareza",
    "Caminho direto para WhatsApp",
    "Mais confiança antes do contato",
    "Estrutura responsiva para celular",
    "Página pensada para conversão",
    "Mais credibilidade no digital",
    "Apresentação alinhada ao valor da empresa"
  ]

  return (
    <section id="sites" className="py-32 bg-[#FAFAFA] overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <SectionHeader
              align="left"
              title={
                <>
                  Antes do cliente falar com você,<br />
                  ele já julgou sua empresa<br />
                  pelo digital.
                </>
              }
              subtitle="Um bom site não é apenas uma vitrine. Ele organiza sua apresentação, mostra seus serviços com clareza, transmite confiança e cria um caminho direto para o cliente entrar em contato."
            />

            <div className="mt-10 grid sm:grid-cols-2 gap-y-6 gap-x-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 group border-b border-black/[0.03] pb-3">
                  <div className="w-1.5 h-1.5 rounded-full transition-all duration-300 bg-evo-action shadow-[0_0_8px_rgba(37,99,235,0.4)] group-hover:scale-125" />
                  <span className="transition-colors text-evo-dark font-semibold text-[15px] md:text-[16px]">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-black/5 hidden lg:block">
              <a
                href={getWhatsAppLink("Olá! Vi o site da EvoPro e quero saber mais sobre criação de site profissional para minha empresa.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-evo-action hover:bg-evo-action/90 text-white px-8 py-4 rounded-xl text-sm md:text-base font-semibold shadow-[0_10px_20px_-10px_rgba(37,99,235,0.4)] hover:shadow-[0_15px_30px_-10px_rgba(37,99,235,0.6)] transition-all duration-300 group/cta"
              >
                <span>Quero um site profissional</span>
                <ArrowRight className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="relative h-[550px] lg:h-[700px] w-full flex items-center justify-center">
            {/* Ambient glow behind the mockup */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[360px] lg:max-w-[420px] h-[480px] lg:h-[560px] bg-evo-action/5 blur-[40px] md:blur-[100px] rounded-full pointer-events-none" />

            {/* The CSS Mockup */}
            <div className="relative z-10 w-full max-w-[340px] lg:max-w-[380px] bg-[#050B14] rounded-[2rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3),_0_0_60px_rgba(37,99,235,0.08)] border border-white/10 overflow-hidden flex flex-col group transform transition-transform hover:-translate-y-2 duration-500">
              {/* Browser Header / Navigation */}
              <div className="bg-[#03070C]/90 backdrop-blur-md border-b border-white/[0.05] px-4 py-2.5 flex items-center justify-between relative z-20">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/[0.15]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/[0.15]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/[0.15]" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-white/[0.03] px-5 py-1 rounded-full text-[8px] text-white/30 tracking-widest uppercase flex items-center gap-2">
                    <Globe className="w-2 h-2 opacity-50" />
                    empresa.com.br
                  </div>
                </div>
                <div className="w-10"></div>
              </div>

              {/* Mockup Body - Mini Site */}
              <div className="relative flex-1 p-6 lg:p-8 flex flex-col pt-8 overflow-hidden h-[480px] lg:h-[600px] bg-[#050B14]">
                {/* Background effects */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-evo-action/10 blur-2xl md:blur-[60px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-evo-cyan/10 blur-2xl md:blur-[50px] rounded-full pointer-events-none" />

                {/* Subtle Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

                {/* Navbar */}
                <div className="relative z-10 w-full flex justify-between items-center mb-8">
                  <div className="flex items-center gap-2.5 group/logo cursor-pointer">
                    {/* Premium Abstract Logo */}
                    <div className="relative w-4 h-4 flex items-center justify-center transform group-hover/logo:scale-105 transition-transform duration-300">
                      <div className="absolute inset-0 bg-gradient-to-tr from-evo-action to-evo-cyan rounded-[4px] shadow-[0_0_12px_rgba(37,99,235,0.5)] rotate-45 group-hover/logo:rotate-90 transition-transform duration-500" />
                      <div className="absolute inset-[1.5px] bg-[#050B14] rounded-[3px] rotate-45 group-hover/logo:rotate-90 transition-transform duration-500" />
                      <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,1)] z-10" />
                    </div>
                    {/* Brand Name */}
                    <span className="text-[13px] font-semibold text-white/95 tracking-[0.05em] font-sora">
                      Sua Marca
                    </span>
                  </div>
                  <div className="flex items-center gap-4 hidden sm:flex">
                    <span className="text-[8px] text-white/50 uppercase tracking-widest font-semibold">Serviços</span>
                    <span className="text-[8px] text-white/50 uppercase tracking-widest font-semibold">Sobre</span>
                  </div>
                  <div className="bg-white/[0.05] border border-white/[0.05] text-white/90 text-[8px] font-bold px-4 py-1.5 rounded-full hover:bg-white/[0.1] transition-colors cursor-pointer">
                    Contato
                  </div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 flex flex-col items-center text-center mt-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.05] mb-5 shadow-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse shadow-[0_0_8px_#10B981]" />
                    <span className="text-[7.5px] text-white/60 uppercase tracking-widest font-semibold">Online & Disponível</span>
                  </div>

                  <h3 className="text-[22px] lg:text-[30px] font-sora font-medium text-white mb-3 lg:mb-4 leading-[1.1] text-balance drop-shadow-sm">
                    Uma presença digital à altura do seu serviço.
                  </h3>

                  <p className="text-[10px] lg:text-[11px] text-white/50 mb-7 lg:mb-10 max-w-[85%] lg:max-w-[75%] leading-relaxed font-light">
                    Transformamos visitantes em clientes com uma estrutura projetada para transmitir confiança e gerar vendas.
                  </p>

                  <div className="flex gap-3 w-full justify-center">
                    <div className="bg-evo-action text-white text-[10px] font-semibold px-6 py-3 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] flex items-center gap-2 hover:scale-105 transition-all cursor-pointer border border-white/10">
                      Solicitar orçamento <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>

                  {/* Trust Badges */}
                  <div className="mt-8 flex items-center justify-center gap-2 text-[7.5px] text-white/40 uppercase tracking-widest font-semibold">
                    <span>Site Responsivo</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>WhatsApp Direto</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>Conversão</span>
                  </div>
                </div>

                {/* Floating Service Cards */}
                <div className="relative z-10 mt-10 lg:mt-14 grid grid-cols-2 gap-3 lg:gap-4 w-full max-w-[300px] lg:max-w-[340px] mx-auto">
                  <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-3.5 shadow-xl backdrop-blur-sm md:backdrop-blur-md hover:bg-white/[0.04] transition-colors transform hover:-translate-y-1 duration-500">
                    <div className="w-6 h-6 rounded bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center mb-3 border border-white/[0.05]">
                      <Globe className="w-3 h-3 text-white/70" />
                    </div>
                    <span className="block text-[10px] font-semibold text-white/90 mb-1">Presença Digital</span>
                    <span className="block text-[8px] text-white/40 leading-relaxed font-light">Sua marca forte no mercado.</span>
                  </div>
                  <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-3.5 shadow-xl backdrop-blur-sm md:backdrop-blur-md hover:bg-white/[0.04] transition-colors transform hover:-translate-y-1 duration-500 delay-75">
                    <div className="w-6 h-6 rounded bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center mb-3 border border-white/[0.05]">
                      <Layout className="w-3 h-3 text-white/70" />
                    </div>
                    <span className="block text-[10px] font-semibold text-white/90 mb-1">Apresentação</span>
                    <span className="block text-[8px] text-white/40 leading-relaxed font-light">Vitrine clara de serviços.</span>
                  </div>
                </div>

                {/* Floating WhatsApp Widget */}
                <div className="absolute bottom-6 right-6 w-11 h-11 bg-[#25D366] rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] flex items-center justify-center z-30 hover:scale-110 transition-transform cursor-pointer">
                  <MessageCircle className="w-5 h-5 text-white" />
                  <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-[#0A111D] rounded-full animate-bounce" />
                </div>
              </div>
            </div>

          </div>

          {/* Mobile Button - Shown only on small screens below the mockup */}
          <div className="lg:hidden w-full flex justify-center mt-2 relative z-20">
            <a
              href={getWhatsAppLink("Olá! Vi o site da EvoPro e quero saber mais sobre criação de site profissional para minha empresa.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full justify-center items-center gap-3 bg-evo-action hover:bg-evo-action/90 text-white px-8 py-4 rounded-xl text-sm md:text-base font-semibold shadow-[0_10px_20px_-10px_rgba(37,99,235,0.4)] hover:shadow-[0_15px_30px_-10px_rgba(37,99,235,0.6)] transition-all duration-300 group/cta"
            >
              <span>Quero um site profissional</span>
              <ArrowRight className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
