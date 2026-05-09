import { Container } from "../ui/Container"
import { SectionHeader } from "../ui/SectionHeader"
import { ArrowRight } from "lucide-react"

export function StructuresSection() {
  const projects = [
    {
      name: "Site Institucional",
      category: "SITE PROFISSIONAL",
      goal: "Presença institucional mais forte.",
      image: "/projects/projeto-sorio.png",
      link: "#"
    },
    {
      name: "Landing Page",
      category: "CAPTAÇÃO",
      goal: "Captação com caminho direto para contato.",
      image: "",
      link: "#"
    },
    {
      name: "Site de Serviços",
      category: "SITE DE SERVIÇOS",
      goal: "Apresentação digital mais profissional.",
      image: "",
      link: "#"
    },
    {
      name: "Estrutura Digital",
      category: "SITE + CAPTAÇÃO",
      goal: "Estrutura pensada para conversão.",
      image: "",
      link: "#"
    }
  ]

  return (
    <section className="py-32 bg-[#FAFAFA] border-t border-gray-200/50">
      <Container>
        <div className="max-w-4xl">
          <SectionHeader 
            title="Projetos reais desenvolvidos pela EvoPro"
            subtitle="Sites criados para transmitir mais confiança, apresentar melhor os serviços e gerar oportunidades reais no digital."
            align="left"
          />
        </div>

        <div className="mt-20">
          {/* 
            Mobile: Scroll horizontal com snap 
            Desktop: Grid 4 colunas 
          */}
          <div 
            className="flex overflow-x-auto pb-12 -mx-4 px-4 snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:gap-8 lg:overflow-visible lg:snap-none lg:mx-0 lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="min-w-[85vw] sm:min-w-[400px] lg:min-w-0 snap-center flex flex-col gap-6 mr-6 lg:mr-0 group"
              >
                {/* Frame do Mockup (Mini-Viewport) */}
                <div className="relative rounded-xl border border-gray-200/60 bg-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden transition-shadow duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)]">
                  
                  {/* Top Bar (Simulando navegador) */}
                  <div className="h-10 bg-[#F8F9FA] border-b border-gray-100 flex items-center px-4 gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                  </div>
                  
                  {/* Viewport com Scroll Interno */}
                  <div 
                    className="h-[360px] lg:h-[420px] overflow-y-auto bg-gray-50 relative [&::-webkit-scrollbar]:hidden"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={`Projeto ${project.name}`} 
                        className="w-full h-auto block" 
                      />
                    ) : (
                      <div className="absolute inset-0 m-5 rounded-xl border border-gray-200/80 bg-white/90 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.6)] flex items-center justify-center">
                        <div className="flex flex-col items-center gap-3 text-center px-6">
                          <div className="w-14 h-10 rounded-md bg-gradient-to-b from-gray-100 to-gray-50 border border-gray-200/70 shadow-sm" />
                          <div className="text-[11px] uppercase tracking-[0.2em] text-gray-400 font-semibold">
                            Projeto em breve
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Informações do Projeto */}
                <div className="px-2 flex flex-col flex-1">
                  <span className="text-xs font-bold tracking-widest uppercase text-evo-action mb-3 block">
                    {project.category}
                  </span>
                  
                  <h3 className="text-xl font-sora font-semibold text-evo-dark mb-3">
                    {project.name}
                  </h3>
                  
                  <p className="text-sm text-gray-500 font-light mb-6 flex-1">
                    {project.goal}
                  </p>
                  
                  <a 
                    href={project.link} 
                    className="inline-flex items-center gap-2 text-sm font-medium text-evo-dark hover:text-evo-action transition-colors w-fit group/link"
                  >
                    Ver estrutura
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
