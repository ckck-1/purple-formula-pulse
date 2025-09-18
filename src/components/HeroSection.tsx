import { useTranslation } from 'react-i18next';
import { NetworkGlobe } from '@/components/3d/NetworkGlobe';
import { Button } from '@/components/ui/button';
import cyberCity from '@/assets/cyber-city.jpg';

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage: `url(${cyberCity})`,
            filter: 'blur(2px) hue-rotate(270deg) saturate(1.2)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-bg opacity-70" />
        <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      </div>
      
      <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl float-animation holographic" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-neon-magenta/15 rounded-full blur-3xl float-animation holographic" style={{animationDelay: '2s'}} />
      
      {/* Floating geometric elements */}
      <div className="absolute top-1/4 left-1/4 w-6 h-6 rotate-45 bg-gradient-neon opacity-40 float-animation crystal-glow" />
      <div className="absolute bottom-1/3 right-1/3 w-4 h-4 rotate-12 bg-neon-glow rounded-full glow-pulse" />
      <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-accent-magenta rounded-full shimmer rotate-slow" />
      
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
                className="bg-gradient-neon hover:shadow-glow transition-all duration-300 text-white font-semibold px-8 py-4 hover:scale-105 crystal-glow"
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="glass-panel border-purple-500/50 text-foreground hover:bg-purple-600/20 hover:border-purple-400 transition-all duration-300 px-8 py-4 hover:scale-105"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Enhanced 3D Globe */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-radial blur-3xl opacity-60" />
            <div className="glass-panel p-8 rounded-3xl shadow-glow">
              <NetworkGlobe className="w-full h-96 lg:h-[500px]" />
            </div>
            
            {/* Enhanced floating particles */}
            <div className="absolute top-10 left-10 w-3 h-3 bg-neon-glow rounded-full float-animation glow-pulse" />
            <div className="absolute top-20 right-16 w-2 h-2 bg-neon-magenta rounded-full float-animation glow-pulse" style={{animationDelay: '1s'}} />
            <div className="absolute bottom-16 left-20 w-2.5 h-2.5 bg-purple-400 rounded-full float-animation glow-pulse" style={{animationDelay: '3s'}} />
            <div className="absolute top-32 right-8 w-1.5 h-1.5 bg-neon-glow rounded-full float-animation glow-pulse" style={{animationDelay: '2s'}} />
            <div className="absolute bottom-32 right-24 w-2 h-2 bg-neon-magenta rounded-full float-animation glow-pulse" style={{animationDelay: '4s'}} />
            
            {/* Orbital rings */}
            <div className="absolute inset-8 border border-purple-500/20 rounded-full rotate-slow opacity-40" />
            <div className="absolute inset-16 border border-accent-magenta/30 rounded-full rotate-slow opacity-60" style={{animationDirection: 'reverse'}} />
          </div>
        </div>
      </div>
    </section>
  );
};