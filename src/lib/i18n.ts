import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        services: "Services",
        about: "About Us",
        languages: "Languages"
      },
      hero: {
        title: "We enhance your efficiency and competitiveness with specialized",
        highlight: "B2B solutions",
        subtitle: "."
      },
      sections: {
        optimizing: {
          title: "Optimizing",
          subtitle: "Processes",
          description: "We achieve outstanding results by enhancing processes and efficiently managing costs."
        },
        corporate: {
          title: "Corporate",
          subtitle: "Solutions",
          description: "Our corporate solutions possess the necessary potential to propel your organization forward."
        },
        structure: {
          title: "Corporate",
          subtitle: "Structure",
          description: "We develop the corporate and financial structure of your business, optimizing your resources to the highest level."
        },
        portfolio: {
          title: "Top-level",
          subtitle: "Portfolio",
          description: "We have a portfolio of first-class clients and suppliers, facilitating business relationships."
        },
        global: {
          title: "Global Business",
          subtitle: "Centralization",
          description: "Global-level business structures, centralized for easy and remote management."
        },
        assets: {
          title: "Assets",
          subtitle: "Banking",
          description: "Strategic banking agreements for enhanced asset management."
        }
      }
    }
  },
  es: {
    translation: {
      nav: {
        services: "Servicios",
        about: "Acerca de Nosotros",
        languages: "Idiomas"
      },
      hero: {
        title: "Potenciamos su eficiencia y competitividad con soluciones especializadas",
        highlight: "B2B",
        subtitle: "."
      },
      sections: {
        optimizing: {
          title: "Optimización",
          subtitle: "de Procesos",
          description: "Logramos resultados sobresalientes mejorando procesos y gestionando costos de manera eficiente."
        },
        corporate: {
          title: "Soluciones",
          subtitle: "Corporativas",
          description: "Nuestras soluciones corporativas poseen el potencial necesario para impulsar su organización hacia adelante."
        },
        structure: {
          title: "Estructura",
          subtitle: "Corporativa",
          description: "Desarrollamos la estructura corporativa y financiera de su negocio, optimizando sus recursos al máximo nivel."
        },
        portfolio: {
          title: "Cartera de",
          subtitle: "Primer Nivel",
          description: "Tenemos una cartera de clientes y proveedores de primera clase, facilitando las relaciones comerciales."
        },
        global: {
          title: "Centralización de",
          subtitle: "Negocios Globales",
          description: "Estructuras comerciales a nivel global, centralizadas para una gestión fácil y remota."
        },
        assets: {
          title: "Banca de",
          subtitle: "Activos",
          description: "Acuerdos bancarios estratégicos para una gestión mejorada de activos."
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;