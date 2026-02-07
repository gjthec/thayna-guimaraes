
/**
 * Configuração de Imagens e Social
 * @isUrl: true usa links externos (IBB), false usa arquivos na pasta /public
 */
export const IMAGE_CONFIG = {
  isUrl: false, 
  images: {
    certificate: {
      url: "https://i.ibb.co/yBYM8B97/Certificado.png",
      local: "/Certificado.png"
    },
    procedure: {
      url: "https://i.ibb.co/JFqBqbhT/Procedimento.png",
      local: "/Procedimento.png"
    }
  },
  social: {
    instagram: "https://www.instagram.com/taaaaaaaaai/",
    whatsapp: "https://wa.me/555481274089",
    displayPhone: "(54) 98127-4089",
    handle: "@taaaaaaaaai"
  },
  professional: {
    name: "Thayná Guimarães",
    title: "Estética Facial Avançada"
  }
};

export const getImagePath = (key: 'certificate' | 'procedure') => {
  const config = IMAGE_CONFIG.images[key];
  return IMAGE_CONFIG.isUrl ? config.url : config.local;
};
