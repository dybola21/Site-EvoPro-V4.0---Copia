import { Bot, Globe, Layout, Layers, ArrowRight } from "lucide-react"
import { Container } from "../ui/Container"
import { getWhatsAppLink } from "../../config/site"
import { motion } from "framer-motion"
import { useRef } from "react"
import { MotionSafe } from "../ui/MotionSafe"
import { useIsMobile } from "../../hooks/useIsMobile"

export function SolutionsSection() {
  const isMobile = useIsMobile()
  const containerRef = useRef<HTMLDivElement>(null)
  const rightColumnRef = useRef<HTMLDivElement>(null)
  const layers = [
    {
      id: "01",
      layer: "Fundação",
      service: "Sites Profissionais",
      description: "A base da sua presença digital. Um site profissional organiza sua apresentação, mostra seus serviços com clareza e transmite confiança antes mesmo do primeiro contato.",
      icon: <Globe className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />,
      visual: (
        <div className="w-full h-full min-h-[160px] bg-[#0A111D] rounded-2xl border border-white/10 p-4 flex flex-col gap-3 relative group-hover:border-white/20 transition-colors shadow-[0_0_20px_rgba(0,0,0,0.5)]">
          {/* Browser Top */}
          <div className="flex items-center gap-2 border-b border-white/10 pb-3 relative z-10">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 bg-red-500/70 rounded-full" />
              <div className="w-2.5 h-2.5 bg-yellow-500/70 rounded-full" />
              <div className="w-2.5 h-2.5 bg-green-500/70 rounded-full" />
            </div>
            <div className="flex-1 h-5 bg-white/10 rounded-md ml-2 flex items-center px-2 border border-white/5">
              <div className="w-16 h-1.5 bg-white/40 rounded-full" />
            </div>
          </div>
          {/* Content */}
          <div className="w-3/4 h-3 bg-white/40 rounded-full mt-1 relative z-10" />
          <div className="w-1/2 h-2 bg-white/20 rounded-full relative z-10" />
          <div className="w-1/3 h-2 bg-white/20 rounded-full relative z-10" />
          
          <div className="mt-auto grid grid-cols-2 gap-3 relative z-10">
            <div className="h-10 bg-white/10 rounded-lg border border-white/10" />
            <div className="h-10 bg-white/10 rounded-lg border border-white/10" />
          </div>
          {/* Light spot */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-[24px] rounded-full pointer-events-none" />
        </div>
      )
    },
    {
      id: "02",
      layer: "Captação",
      service: "Landing Pages",
      description: "Páginas focadas em campanhas, serviços ou ofertas específicas para transformar visitantes em oportunidades reais de conversa.",
      icon: <Layout className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />,
      visual: (
          <div className="w-full h-full min-h-[160px] bg-[#0A111D] rounded-2xl border border-white/10 p-4 flex flex-col items-center justify-center relative group-hover:border-white/20 transition-colors shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            {/* The Form */}
            <div className="w-[90%] bg-white/[0.05] border border-white/15 rounded-xl p-4 flex flex-col gap-3 z-10 backdrop-blur-md fx-backdrop shadow-2xl">
            <div className="w-24 h-2 bg-white/50 rounded-full mx-auto mb-2" />
            <div className="w-full h-7 bg-[#050B14] rounded-md shadow-inner border border-white/15 flex items-center px-3">
               <div className="w-10 h-1.5 bg-white/20 rounded-full" />
            </div>
            <div className="w-full h-7 bg-[#050B14] rounded-md shadow-inner border border-white/15 flex items-center px-3">
               <div className="w-10 h-1.5 bg-white/20 rounded-full" />
            </div>
            <div className="w-full h-8 bg-evo-action/60 rounded-md mt-1 border border-evo-action flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.3)]">
               <div className="w-16 h-2 bg-white rounded-full shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-evo-cyan/20 blur-[30px] rounded-full pointer-events-none" />
        </div>
      )
    },
    {
      id: "03",
      layer: "Inteligência",
      service: "Agentes de IA",
      description: "Agentes de IA ajudam a organizar contatos, apoiar o atendimento inicial, notificar sua equipe e iniciar follow-ups com mais consistência.",
      icon: <Bot className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />,
      visual: (
        <div className="w-full h-full min-h-[160px] bg-[#0A111D] rounded-2xl border border-white/10 p-4 flex items-center justify-center relative group-hover:border-white/20 transition-colors shadow-[0_0_20px_rgba(0,0,0,0.5)]">
          {/* Flow Diagram */}
          <div className="flex items-center gap-3 z-10 w-full justify-center">
            {/* Lead */}
            <div className="w-8 h-8 rounded-full bg-white/10 border border-white/30 flex items-center justify-center">
              <div className="w-3 h-3 bg-white/60 rounded-full" />
            </div>
            <div className="w-6 h-[2px] bg-white/30" />
            {/* Agent */}
            <div className="w-12 h-12 rounded-xl bg-evo-action/20 border border-evo-action/50 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)] relative">
              <Bot className="w-6 h-6 text-white" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)] border border-[#0A111D]" />
            </div>
            <div className="w-6 h-[2px] bg-white/30" />
            {/* Team */}
            <div className="flex flex-col gap-2">
              <div className="w-12 h-6 bg-white/10 border border-white/20 rounded flex items-center px-2">
                 <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_5px_rgba(74,222,128,0.8)]" />
              </div>
              <div className="w-12 h-6 bg-white/10 border border-white/20 rounded flex items-center px-2">
                 <div className="w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_5px_rgba(250,204,21,0.8)]" />
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-[24px] rounded-full pointer-events-none" />
        </div>
      )
    },
    {
      id: "04",
      layer: "Estrutura Completa",
      service: "Estrutura Digital Profissional",
      description: "Quando presença, captação e atendimento trabalham juntos, sua empresa deixa de improvisar e passa a operar com mais clareza, confiança e organização.",
      icon: <Layers className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />,
      isGrandFinale: true,
      visual: (
        <div className="w-full h-full min-h-[200px] bg-gradient-to-br from-[#0A111D] to-[#0D1626] rounded-2xl border-2 border-evo-action/50 p-5 flex items-center justify-center relative group-hover:border-evo-action transition-all duration-500 overflow-hidden shadow-[0_0_40px_rgba(37,99,235,0.25)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
          
          <div className="relative w-48 h-48 z-10">
            {/* 3 orbital rings */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-2 border-white/40 bg-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)] backdrop-blur-sm fx-backdrop z-20">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <div className="absolute bottom-0 left-0 w-12 h-12 rounded-full border-2 border-white/40 bg-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)] backdrop-blur-sm fx-backdrop z-20">
              <Layout className="w-5 h-5 text-white" />
            </div>
            <div className="absolute bottom-0 right-0 w-12 h-12 rounded-full border-2 border-white/40 bg-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)] backdrop-blur-sm fx-backdrop z-20">
              <Bot className="w-5 h-5 text-white" />
            </div>
            
            {/* Connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-80" viewBox="0 0 192 192">
               <line x1="96" y1="24" x2="24" y2="168" stroke="#2563EB" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
               <line x1="96" y1="24" x2="168" y2="168" stroke="#2563EB" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
               <line x1="24" y1="168" x2="168" y2="168" stroke="#2563EB" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
            </svg>
            
            {/* Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-evo-action border-2 border-white flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.8)] z-30">
              <Layers className="w-7 h-7 text-white drop-shadow-md" />
            </div>
          </div>
          
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-evo-action/30 blur-[50px] rounded-full pointer-events-none" />
        </div>
      )
    }
  ]

  return (
    <section id="solucoes" ref={containerRef} className="py-20 md:py-32 bg-[#050B14] relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-evo-action/5 blur-[60px] md:blur-[120px] fx-heavy-blur rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-white/[0.02] blur-[50px] md:blur-[100px] fx-heavy-blur rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
          
          {/* Left Side: Sticky Text Content */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sora font-extrabold text-white leading-[1.1] tracking-tight mb-6 md:mb-8 text-balance">
                A estrutura que tira sua empresa do <span className="text-evo-action">improviso digital.</span>
              </h2>
              <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed mb-10 text-balance">
                A EvoPro combina site profissional, landing pages e agentes de IA em uma estrutura pensada para empresas que querem transmitir confiança, captar melhor e organizar o atendimento.
              </p>
            </div>
          </div>

          {/* Right Side: Stacked Architecture Layers */}
          <div className="lg:col-span-7 relative pl-0 md:pl-16" ref={rightColumnRef}>
            {/* The Timeline Connection Line (Desktop only) */}
            <div className="hidden md:block absolute left-[22.5px] top-0 bottom-0 w-[1px] bg-white/[0.03] z-0" />
            {/* Timeline line — desktop only, driven by scroll */}
            <div
              className="hidden md:block absolute left-[22px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-evo-action/20 to-evo-action/60 z-10 shadow-[0_0_12px_rgba(37,99,235,0.25)] rounded-full"
            />
            {/* Leading Edge removed - The user wants the GPS arrow in the Hero section instead */}

            <div className="flex flex-col gap-8 relative z-20">
              {layers.map((layer, index) => (
                <div key={index} className="relative group">
                  {/* Node on the line (Desktop only) */}
                  <motion.div
                    initial={isMobile ? false : "hidden"}
                    whileInView="visible"
                    viewport={{ margin: "0px 0px -50% 0px" }}
                    className={`hidden md:flex absolute -left-[57px] top-10 items-center justify-center z-30 transition-all duration-500
                    ${layer.isGrandFinale ? 'w-10 h-10 -translate-x-1' : 'w-8 h-8'}
                  `}>
                    <motion.div
                      variants={{
                        hidden: { borderColor: "rgba(255,255,255,0.1)", backgroundColor: "rgba(5,11,20,0.8)", boxShadow: "0 0 0px rgba(37,99,235,0)" },
                        visible: { borderColor: "rgba(37,99,235,0.5)", backgroundColor: "rgba(10,17,29,1)", boxShadow: "0 0 15px rgba(37,99,235,0.4)" }
                      }}
                      className="absolute inset-0 rounded-full border transition-colors backdrop-blur-sm fx-backdrop"
                    />
                    <motion.div
                      variants={{
                        hidden: { backgroundColor: "rgba(255,255,255,0.3)", boxShadow: "0 0 0px rgba(255,255,255,0)", scale: 0.5 },
                        visible: { backgroundColor: "rgba(255,255,255,1)", boxShadow: "0 0 12px rgba(255,255,255,1)", scale: 1 }
                      }}
                      className="relative z-10 rounded-full transition-all duration-500 w-3 h-3"
                    />
                  </motion.div>
                  
                  {/* The Card */}
                  {/* The Card — MotionSafe: div on mobile, motion.div on desktop */}
                  <MotionSafe
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className={`relative rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-500
                      ${layer.isGrandFinale ? 'p-6 sm:p-8 md:p-10 border-2 border-evo-action/40 bg-gradient-to-br from-[#0A111D] to-[#0A1A3A] shadow-xl md:shadow-[0_20px_60px_-15px_rgba(37,99,235,0.3)]' : 'p-5 sm:p-6 md:p-8 bg-gradient-to-br from-[#0A111D] to-[#0D1626] border border-white/5 hover:border-white/15 shadow-md md:shadow-lg hover:shadow-xl'}
                    `}
                  >
                    {/* Subtle top spotlight */}
                    <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="flex flex-col xl:flex-row gap-6 md:gap-8 items-stretch relative z-10">
                      {/* Left: Text Content */}
                      <div className="flex-1 flex flex-col justify-center min-w-0">
                        <div className="flex items-center gap-3 mb-5">
                          {layer.isGrandFinale ? (
                            <span className="px-3 py-1 bg-evo-action/10 text-evo-action border border-evo-action/30 rounded-full text-[10px] uppercase tracking-widest font-extrabold shadow-[0_0_10px_rgba(37,99,235,0.1)]">
                              Resultado Final
                            </span>
                          ) : (
                            <>
                              <span className="text-[10px] md:text-[11px] uppercase tracking-widest font-extrabold text-white/30 group-hover:text-white/60 transition-colors">
                                {layer.id}
                              </span>
                              <div className="w-6 h-[1px] bg-white/20" />
                              <span className="text-[10px] md:text-[11px] uppercase tracking-widest font-bold text-evo-action/90">
                                {layer.layer}
                              </span>
                            </>
                          )}
                        </div>
                        
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center shrink-0 shadow-inner
                            ${layer.isGrandFinale ? 'text-white mt-1.5' : 'text-white/50 group-hover:text-white transition-colors mt-0.5'}
                          `}>
                            {layer.icon}
                          </div>
                          <h3 className={`font-sora tracking-tight leading-[1.1]
                            ${layer.isGrandFinale ? 'text-xl sm:text-2xl md:text-3xl xl:text-[36px] text-white font-black' : 'text-lg sm:text-xl md:text-2xl text-white/90 font-bold'}
                          `}>
                            {layer.service}
                          </h3>
                        </div>
                        
                        <p className={`leading-relaxed font-light ${layer.isGrandFinale ? 'text-white/70 text-base md:text-lg' : 'text-white/60 text-sm md:text-[15px]'}`}>
                          {layer.description}
                        </p>

                        {layer.isGrandFinale && (
                          <div className="mt-10">
                            <a 
                              href={getWhatsAppLink("Olá! Gostaria de montar a estrutura digital da minha empresa.")}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-3 bg-evo-action hover:bg-evo-action/90 text-white px-5 md:px-8 py-3 md:py-4 rounded-xl text-[13px] md:text-base font-semibold shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all duration-300 group/cta w-full sm:w-auto"
                            >
                              <span>Montar minha estrutura digital</span>
                              <ArrowRight className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform" />
                            </a>
                          </div>
                        )}
                      </div>
                      
                      {/* Right: Abstract Visual UI */}
                      <div className="w-full xl:w-[240px] shrink-0 rounded-2xl overflow-hidden hidden sm:block">
                         {layer.visual}
                      </div>
                    </div>
                  </MotionSafe>
                </div>
              ))}
            </div>

          </div>
        </div>
      </Container>
    </section>
  )
}
