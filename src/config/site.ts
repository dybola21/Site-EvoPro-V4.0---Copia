export const siteConfig = {
  name: "EvoPro Digital",
  description: "A EvoPro cria sites profissionais, landing pages e agentes de IA para empresas que querem transmitir confiança, captar clientes e organizar melhor o atendimento.",
  contact: {
    whatsapp: "5500000000000",
    email: "contato@evopro.com.br",
    defaultMessage: "Olá! Vi o site da EvoPro e quero entender como melhorar minha presença digital e atendimento com agentes de IA.",
  },
  links: {
    instagram: "https://instagram.com/evopro",
    linkedin: "https://linkedin.com/company/evopro",
  }
};

export function getWhatsAppLink(message: string = siteConfig.contact.defaultMessage) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodedMessage}`;
}
