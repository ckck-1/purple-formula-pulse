import { useTranslation } from 'react-i18next';
import { ServiceCard } from '@/components/ServiceCard';

export const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      key: 'optimizing',
      iconType: 'gear' as const,
    },
    {
      key: 'corporate',
      iconType: 'building' as const,
    },
    {
      key: 'structure',
      iconType: 'network' as const,
    },
    {
      key: 'portfolio',
      iconType: 'portfolio' as const,
    },
    {
      key: 'global',
      iconType: 'globe' as const,
    },
    {
      key: 'assets',
      iconType: 'bank' as const,
    },
  ];

  return (
    <section id="services" className="py-20 relative">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-40 -left-20 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -right-20 w-96 h-96 bg-neon-magenta/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div 
              key={service.key}
              className={`animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ServiceCard
                title={t(`sections.${service.key}.title`)}
                subtitle={t(`sections.${service.key}.subtitle`)}
                description={t(`sections.${service.key}.description`)}
                iconType={service.iconType}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};