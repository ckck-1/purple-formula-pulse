import { useTranslation } from 'react-i18next';
import { ServiceCard } from '@/components/ServiceCard';
import futuristicOffice from '@/assets/futuristic-office.jpg';

export const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      key: 'optimizing',
      iconType: 'phone' as const,
    },
    {
      key: 'corporate',
      iconType: 'laptop' as const,
    },
    {
      key: 'structure',
      iconType: 'network' as const,
    },
    {
      key: 'portfolio',
      iconType: 'briefcase' as const,
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
      {/* Enhanced background with futuristic imagery */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url(${futuristicOffice})`,
            filter: 'blur(1px) hue-rotate(270deg)'
          }}
        />
        <div className="absolute top-40 -left-20 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl holographic" />
        <div className="absolute bottom-40 -right-20 w-96 h-96 bg-neon-magenta/5 rounded-full blur-3xl holographic" />
        
        {/* Floating geometric elements */}
        <div className="absolute top-20 right-1/4 w-4 h-4 rotate-45 bg-gradient-neon opacity-60 float-animation" />
        <div className="absolute bottom-32 left-1/3 w-3 h-3 rotate-12 bg-neon-glow rounded-full glow-pulse" />
        <div className="absolute top-1/2 right-12 w-2 h-2 bg-accent-magenta rounded-full shimmer" />
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