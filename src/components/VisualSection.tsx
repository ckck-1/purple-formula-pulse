import { useTranslation } from 'react-i18next';
import { Reveal } from '@/components/animations/Reveal';
import businessOffice from '@/assets/business-office.jpg';
import globalNetwork from '@/assets/global-network.jpg';
import fintechConcept from '@/assets/fintech-concept.jpg';
import businessTeam from '@/assets/business-team.jpg';
import futuristicOffice from '@/assets/futuristic-office.jpg';
import digitalFinance from '@/assets/digital-finance.jpg';
import cyberCity from '@/assets/cyber-city.jpg';
import { HolographicChart } from '@/components/3d/HolographicChart';
import { CrystalTower } from '@/components/3d/CrystalTower';

export const VisualSection = () => {
  const { t } = useTranslation();

  const visualCards = [
    {
      image: businessOffice,
      title: t('sections.corporate.title'),
      subtitle: t('sections.corporate.subtitle'),
      description: t('sections.corporate.description'),
    },
    {
      image: globalNetwork,
      title: t('sections.global.title'),
      subtitle: t('sections.global.subtitle'),
      description: t('sections.global.description'),
    },
    {
      image: fintechConcept,
      title: t('sections.assets.title'),
      subtitle: t('sections.assets.subtitle'),
      description: t('sections.assets.description'),
    },
    {
      image: businessTeam,
      title: t('sections.portfolio.title'),
      subtitle: t('sections.portfolio.subtitle'),
      description: t('sections.portfolio.description'),
    },
  ];

  return (
    <section className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-40 w-96 h-96 bg-black/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 -left-40 w-80 h-80 bg-black/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <Reveal as="div" className="text-center mb-16" y={20} blur={8}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="neon-text">Visualizing</span>{' '}
            <span className="text-foreground">Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience our cutting-edge solutions through immersive visuals and advanced technology
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {visualCards.map((card, index) => (
            <Reveal
              key={index}
              as="div"
              className="group glass-panel rounded-2xl overflow-hidden hover:shadow-glow transition-all duration-500 hover:-translate-y-2"
              y={24}
              blur={8}
              delay={index * 0.08}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={card.image}
                  alt={`${card.title} ${card.subtitle}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-neon-glow transition-colors">
                    {card.title}
                  </h3>
                  <h4 className="text-xl font-semibold neon-text">
                    {card.subtitle}
                  </h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {card.description}
                </p>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-neon opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500 pointer-events-none" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};