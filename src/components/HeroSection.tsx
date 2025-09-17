import { useTranslation } from 'react-i18next';
import { NetworkGlobe } from '@/components/3d/NetworkGlobe';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-bg opacity-50" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-neon-magenta/10 rounded-full blur-3xl float-animation" style={{animationDelay: '2s'}} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-foreground">{t('hero.title')} </span>
              <span className="neon-text bg-gradient-neon bg-clip-text text-transparent">
                {t('hero.highlight')}
              </span>
              <span className="text-foreground">{t('hero.subtitle')}</span>
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button 
                size="lg" 
                className="bg-gradient-neon hover:shadow-glow transition-all duration-300 text-white font-semibold px-8 py-4"
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-purple-500/50 text-foreground hover:bg-purple-600/20 hover:border-purple-400 transition-all duration-300 px-8 py-4"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* 3D Globe */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-transparent to-transparent blur-2xl" />
            <NetworkGlobe className="w-full h-96 lg:h-[500px]" />
            
            {/* Floating particles */}
            <div className="absolute top-10 left-10 w-2 h-2 bg-neon-glow rounded-full float-animation opacity-60" />
            <div className="absolute top-20 right-16 w-1 h-1 bg-neon-magenta rounded-full float-animation opacity-80" style={{animationDelay: '1s'}} />
            <div className="absolute bottom-16 left-20 w-1.5 h-1.5 bg-purple-400 rounded-full float-animation opacity-70" style={{animationDelay: '3s'}} />
            <div className="absolute top-32 right-8 w-1 h-1 bg-neon-glow rounded-full float-animation opacity-60" style={{animationDelay: '2s'}} />
            <div className="absolute bottom-32 right-24 w-1.5 h-1.5 bg-neon-magenta rounded-full float-animation opacity-80" style={{animationDelay: '4s'}} />
          </div>
        </div>
      </div>
    </section>
  );
};