import { ArrowRight, Bot, Globe, MessageSquare, CheckCircle2 } from "lucide-react"
import { Button } from "../ui/Button"
import { Container } from "../ui/Container"
import { getWhatsAppLink } from "../../config/site"
import { MotionSafe } from "../ui/MotionSafe"

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:min-h-screen md:pt-36 md:pb-24 bg-[#050B14] overflow-hidden flex items-center">
      {/* Base Dark Background */}
      <div className="absolute inset-0 bg-[#050B14] pointer-events-none" />

      {/* Abstract Texture Image (Responsive mask and position) */}
      <div className="absolute inset-0 pointer-events-none mobile-hide-decor">
        <div 
          className="absolute inset-0 bg-no-repeat bg-cover bg-[center_bottom] sm:bg-right lg:bg-[center_right_-20%] opacity-30 mix-blend-screen fx-blend saturate-50 
                     [mask-image:linear-gradient(to_bottom,transparent_0%,transparent_10%,black_60%,black_100%)] 
                     [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,transparent_10%,black_60%,black_100%)] 
                     sm:[mask-image:linear-gradient(to_right,transparent_0%,transparent_20%,black_60%,black_100%)] 
                     sm:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,transparent_20%,black_60%,black_100%)]"
          style={{ backgroundImage: "url('/hero-bg-abstract.png')" }}
        />
      </div>

      {/* Premium Glows */}
      <div className="absolute top-0 left-[20%] w-[400px] md:w-[800px] h-[300px] md:h-[500px] bg-evo-action/5 blur-[60px] md:blur-[150px] fx-heavy-blur rounded-[100%] pointer-events-none mobile-hide-decor" />
      <div className="hidden md:block absolute top-[20%] right-[-10%] w-[1000px] h-[800px] bg-evo-action/15 blur-[200px] fx-heavy-blur rounded-full pointer-events-none mobile-hide-decor" />
      <div className="absolute bottom-[-10%] right-[10%] w-[400px] md:w-[800px] h-[300px] md:h-[600px] bg-evo-cyan/10 blur-[80px] md:blur-[180px] fx-heavy-blur rounded-full pointer-events-none mobile-hide-decor" />
      
      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)] opacity-30 pointer-events-none" />

      {/* Dark Vignette for borders */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#050B14_100%)] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">
          
          {/* Text Content */}
          <MotionSafe
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <h1 className="text-4xl md:text-5xl lg:text-[4.2rem] font-sora font-bold text-white leading-[1.1] tracking-tight mb-8 text-balance">
              Sua empresa trabalha sério. Agora ela precisa parecer séria no digital.
            </h1>
            
            <p className="text-lg md:text-xl text-evo-light/70 mb-12 max-w-xl text-balance leading-relaxed font-light">
              A EvoPro cria sites profissionais, landing pages e agentes de IA para empresas que querem transmitir mais confiança, captar clientes e organizar melhor o atendimento.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button asChild size="lg" className="w-full sm:w-auto group relative overflow-hidden bg-evo-action text-white hover:bg-evo-action/90 shadow-[0_0_40px_-10px_rgba(37,99,235,0.4)] border border-evo-action/50 transition-all duration-300 rounded-lg h-14 px-8">
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10 flex items-center font-semibold text-[15px]">
                    Solicitar diagnóstico gratuito
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  {/* Hover effect highlight */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="w-full sm:w-auto text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 shadow-lg shadow-black/20 transition-all duration-300 rounded-lg h-14 px-8 group">
                <a href="#solucoes" className="flex items-center gap-2">
                  Ver soluções
                  <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                </a>
              </Button>
            </div>
            
            <div className="mt-10 pt-8 border-t border-white/[0.08] flex flex-wrap items-center gap-y-3 gap-x-6 text-[13.5px] font-medium text-white/60">
              <span className="flex items-center gap-2"><Globe className="w-4 h-4 text-evo-action" /> Presença digital</span>
              <span className="hidden sm:inline text-white/10">•</span>
              <span className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-evo-action" /> Captação</span>
              <span className="hidden sm:inline text-white/10">•</span>
              <span className="flex items-center gap-2"><Bot className="w-4 h-4 text-evo-action" /> Atendimento estruturado</span>
            </div>
          </MotionSafe>

          {/* Premium Visual Composition */}
          <MotionSafe
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full mx-auto mt-4 lg:mt-0 h-[500px] sm:h-[560px] lg:h-[800px]"
          >
            {/* The inner container is fixed width and scaled down via CSS transforms.
                Absolute positioning prevents its unscaled height from blowing up the flex/grid layout. */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[600px] sm:h-[700px] lg:h-[800px] flex flex-col items-center justify-center scale-[0.68] sm:scale-[0.78] lg:scale-100 origin-top">
              
              {/* Central connecting hub lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50 origin-center" viewBox="0 0 500 800">
                {/* Paths */}
                <path d="M 140 120 C 140 260, 380 220, 380 400" stroke="url(#flow-grad-1)" strokeWidth="1.5" fill="none" strokeDasharray="4 6" />
                <path d="M 380 430 C 380 520, 160 500, 160 600" stroke="url(#flow-grad-2)" strokeWidth="1.5" fill="none" strokeDasharray="4 6" />
                <path d="M 160 630 C 160 700, 350 690, 350 760" stroke="url(#flow-grad-3)" strokeWidth="1.5" fill="none" strokeDasharray="4 6" />
                
                {/* Glowing Nodes at joints */}
                <circle cx="140" cy="120" r="3" fill="#2563EB" />
                <circle cx="380" cy="400" r="3" fill="#06B6D4" />
                <circle cx="160" cy="600" r="3" fill="#22C55E" />
                <circle cx="350" cy="760" r="3" fill="#10B981" />

                {/* Animated Data Packet (Navigation Arrow) */}
                <g filter="url(#glow-dot)" className="hidden md:block fx-svg-glow">
                  <path d="M-10,-10 L14,0 L-10,10 L-3,0 Z" fill="#06B6D4">
                    <animateMotion dur="4s" repeatCount="indefinite" rotate="auto" path="M 140 120 C 140 260, 380 220, 380 400 L 380 430 C 380 520, 160 500, 160 600 L 160 630 C 160 700, 350 690, 350 760" />
                  </path>
                  <path d="M-5,-4 L9,0 L-5,4 L-1.5,0 Z" fill="#FFFFFF">
                    <animateMotion dur="4s" repeatCount="indefinite" rotate="auto" path="M 140 120 C 140 260, 380 220, 380 400 L 380 430 C 380 520, 160 500, 160 600 L 160 630 C 160 700, 350 690, 350 760" />
                  </path>
                </g>

                <defs>
                  <linearGradient id="flow-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563EB" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                  <linearGradient id="flow-grad-2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#06B6D4" />
                    <stop offset="100%" stopColor="#22C55E" />
                  </linearGradient>
                  <linearGradient id="flow-grad-3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22C55E" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                  <filter id="glow-dot" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur1"/>
                    <feGaussianBlur stdDeviation="6" result="blur2"/>
                    <feMerge>
                      <feMergeNode in="blur2"/>
                      <feMergeNode in="blur1"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
              </svg>

              {/* Node 1: Website/Presence (THE PROTAGONIST) */}
              <MotionSafe
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute top-[0%] left-[-5%] sm:left-[0%] w-[320px] sm:w-[380px] z-30 group"
              >
                {/* External Label - More Prominent */}
                <div className="flex items-center gap-2 mb-3 ml-1 bg-white/[0.03] backdrop-blur-md fx-backdrop border border-white/[0.05] py-1.5 px-3 rounded-full w-fit shadow-lg shadow-black/20">
                  <div className="w-6 h-6 rounded-full bg-evo-action flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.8)] relative">
                    <Globe className="w-3.5 h-3.5 text-white relative z-10" />
                    <div className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-20"></div>
                  </div>
                  <span className="text-[14px] font-bold text-white tracking-wide drop-shadow-md">Site Profissional EvoPro</span>
                </div>

                {/* Browser Window - Stronger Presence */}
                <div className="bg-[#03070C] border border-white/[0.25] rounded-xl shadow-2xl md:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.9),0_0_60px_rgba(37,99,235,0.3)] overflow-hidden group-hover:border-white/[0.4] group-hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.9),0_0_90px_rgba(37,99,235,0.4)] transition-all duration-500 relative ring-1 ring-white/5">
                  
                  {/* Browser Bar */}
                  <div className="bg-[#08101E] border-b border-white/[0.1] px-3 py-2 flex items-center gap-3 relative z-10">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-white/25" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/25" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/25" />
                    </div>
                    <div className="flex-1 flex justify-center">
                      <span className="text-[9px] font-medium text-white/60 bg-white/[0.05] px-4 py-0.5 rounded-full shadow-inner border border-white/[0.05]">evopro.com.br</span>
                    </div>
                    <div className="w-8" /> {/* Spacer to balance dots */}
                  </div>

                  {/* Browser Content (Accurate Mini Hero) */}
                  <div className="p-6 flex flex-col items-start text-left relative overflow-hidden h-[220px]">
                    {/* Mini Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

                    {/* Mini Header */}
                    <div className="w-full flex justify-between items-center mb-5 relative z-10">
                      <span className="text-[13px] font-extrabold text-white font-sora tracking-tight">
                        EvoPro<span className="text-evo-action">.</span>
                      </span>
                      <div className="flex flex-col gap-[2.5px]">
                        <div className="w-4 h-[1.5px] bg-white/40 rounded-full" />
                        <div className="w-4 h-[1.5px] bg-white/40 rounded-full" />
                        <div className="w-4 h-[1.5px] bg-white/40 rounded-full" />
                      </div>
                    </div>
                    
                    <h3 className="text-[16px] font-sora font-extrabold text-white mb-2.5 leading-[1.1] relative z-10 max-w-[95%] drop-shadow-sm mt-2">
                      Sua empresa trabalha sério. Agora ela precisa parecer séria no digital.
                    </h3>
                    
                    <p className="text-[9px] text-evo-light/70 mb-4 max-w-[85%] relative z-10 leading-relaxed">
                      A EvoPro cria sites profissionais, landing pages e agentes de IA para empresas.
                    </p>
                    
                    <div className="flex gap-2.5 relative z-10 w-full mt-1">
                      <div className="bg-evo-action text-white text-[8px] font-bold px-4 py-2 rounded shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                        Solicitar diagnóstico
                      </div>
                      <div className="bg-white/5 border border-white/10 text-white/80 text-[8px] font-semibold px-4 py-2 rounded hover:bg-white/10 transition-colors">
                        Ver soluções
                      </div>
                    </div>
                  </div>

                  {/* Captação Ativa Badge */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-[#050B14] border border-evo-cyan/60 px-3 py-1.5 rounded-md shadow-[0_5px_20px_rgba(6,182,212,0.4)] backdrop-blur-md fx-backdrop z-20 group-hover:border-evo-cyan transition-colors">
                    <span className="flex h-2 w-2 rounded-full bg-evo-cyan animate-pulse shadow-[0_0_12px_#06B6D4]"></span>
                    <span className="text-[9px] font-extrabold text-evo-cyan uppercase tracking-wider">Captação Ativa</span>
                  </div>
                </div>
              </MotionSafe>

              {/* Node 2: AI Agent (Toned Down) */}
              <MotionSafe
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute top-[44%] right-[-2%] sm:right-[5%] w-[240px] bg-[#0A1324] border border-white/10 rounded-2xl p-[1px] shadow-2xl z-50 group"
              >
                {/* Glow effect - Subtle now */}
                <div className="absolute -inset-1 bg-gradient-to-r from-evo-cyan/20 to-transparent rounded-2xl opacity-10 group-hover:opacity-20 blur transition-opacity duration-500" />
                
                <div className="relative bg-gradient-to-br from-[#0D192F] to-[#0A1324] rounded-2xl p-4 border border-white/[0.02]">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center relative">
                        <Bot className="w-5 h-5 text-white/70 group-hover:text-evo-cyan transition-colors" />
                        <span className="absolute -top-1 -right-1 flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-evo-cyan opacity-40"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-evo-cyan/80"></span>
                        </span>
                      </div>
                      <div>
                        <span className="block text-[13px] font-semibold text-white/90">Agente de IA</span>
                        <span className="block text-[8px] text-white/40 tracking-wider uppercase mt-0.5">Processando Dados</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2 text-[10px] text-white/50 bg-white/[0.02] p-2 rounded-lg border border-white/[0.02]">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                      <span>Qualificando intenção de compra</span>
                    </div>
                  </div>
                </div>
              </MotionSafe>

              {/* Node 3: Notification/Team */}
              <MotionSafe
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute top-[72%] left-[0%] sm:left-[5%] w-[220px] bg-[#0A1324]/95 backdrop-blur-sm md:backdrop-blur-xl fx-backdrop border border-evo-success/30 rounded-2xl p-4 shadow-xl md:shadow-[0_20px_40px_-15px_rgba(34,197,94,0.15)] z-30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-evo-success/10 border border-evo-success/20 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-evo-success fill-evo-success/20" />
                  </div>
                  <div>
                    <span className="block text-[12px] font-semibold text-white mb-0.5">Equipe Notificada</span>
                    <p className="text-[9px] text-white/50 leading-snug">
                      Lead pronto no WhatsApp.
                    </p>
                  </div>
                </div>
              </MotionSafe>

              {/* Node 4: Follow up */}
              <MotionSafe
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="absolute top-[92%] right-[0%] sm:right-[10%] w-[190px] bg-[#0A1324]/95 backdrop-blur-sm md:backdrop-blur-xl fx-backdrop border border-white/[0.08] rounded-2xl p-3.5 shadow-xl md:shadow-2xl z-40 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                </div>
                <div>
                  <span className="block text-[10px] font-semibold text-white">Follow-up Iniciado</span>
                  <span className="block text-[8px] text-white/40 mt-0.5">Próxima ação sugerida</span>
                </div>
              </MotionSafe>

            </div>
          </MotionSafe>

        </div>
      </Container>
    </section>
  )
}
