import { siteConfig } from "../../config/site"
import { Container } from "../ui/Container"

export function Footer() {
  return (
    <footer className="bg-evo-deep text-evo-light/60 py-12 border-t border-white/10">
      <Container>
        <div className="grid md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-white font-sora">
                EvoPro<span className="text-evo-action">.</span>
              </span>
            </a>
            <p className="max-w-sm mb-6">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-3">
              <li><a href="#solucoes" className="hover:text-white transition-colors">Soluções</a></li>
              <li><a href="#sites" className="hover:text-white transition-colors">Sites Profissionais</a></li>
              <li><a href="#agentes-ia" className="hover:text-white transition-colors">Agentes de IA</a></li>
              <li><a href="#processo" className="hover:text-white transition-colors">Processo</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${siteConfig.contact.email}`} 
                  className="hover:text-white transition-colors"
                >
                  E-mail
                </a>
              </li>
              <li>
                <a 
                  href={siteConfig.links.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
