import { useTranslation } from 'react-i18next';
import { CrystalTower } from '@/components/3d/CrystalTower';
import { HolographicChart } from '@/components/3d/HolographicChart';
import { Reveal } from '@/components/animations/Reveal';
import digitalFinance from '@/assets/digital-finance.jpg';

export const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: `url(${digitalFinance})`,
            filter: 'blur(3px) hue-rotate(270deg)'
          }}
        />
        {/* Removed mesh overlay for a cleaner, darker look */}
      </div>
      
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-black/25 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-black/20 rounded-full blur-3xl" style={{animationDelay: '5s'}} />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main About Content */}
        <Reveal as="div" className="text-center mb-16" y={20} blur={8}>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="text-foreground">About </span>
            <span className="neon-text bg-gradient-neon bg-clip-text text-transparent">
              La Formula Capital Group
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We are a cutting-edge financial technology company that specializes in optimizing 
            business processes, corporate solutions, and global asset management through 
            innovative digital transformation strategies.
          </p>
        </Reveal>

        {/* Three Column Layout */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Our Mission */}
          <Reveal as="div" className="glass-panel p-8 rounded-2xl hover:shadow-glow transition-all duration-500 group" y={24} blur={8}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 glass-panel rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 bg-gradient-neon rounded-full glow-pulse" />
              </div>
              <h3 className="text-2xl font-bold neon-text">Our Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To revolutionize the financial industry by providing innovative, 
              secure, and scalable solutions that empower businesses to achieve 
              their full potential in the digital economy.
            </p>
          </Reveal>

          {/* Our Vision */}
          <Reveal as="div" className="glass-panel p-8 rounded-2xl hover:shadow-glow transition-all duration-500 group" y={24} blur={8} delay={0.1}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 glass-panel rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 bg-gradient-radial rounded-full shimmer" />
              </div>
              <h3 className="text-2xl font-bold neon-text">Our Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To become the leading global provider of next-generation financial 
              solutions, setting new standards for innovation, transparency, 
              and client success in the fintech industry.
            </p>
          </Reveal>

          {/* Our Values */}
          <Reveal as="div" className="glass-panel p-8 rounded-2xl hover:shadow-glow transition-all duration-500 group" y={24} blur={8} delay={0.2}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 glass-panel rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 bg-accent-magenta rounded-full glow-pulse" />
              </div>
              <h3 className="text-2xl font-bold neon-text">Our Values</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Innovation, integrity, and excellence drive everything we do. 
              We believe in transparent communication, cutting-edge technology, 
              and delivering exceptional value to our clients worldwide.
            </p>
          </Reveal>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Reveal as="div" className="space-y-8" y={24} blur={8}>
            <h3 className="text-4xl font-bold neon-text mb-8">
              Transforming Businesses Globally
            </h3>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-panel p-6 rounded-xl hover:shadow-glow transition-all duration-300">
                <div className="text-3xl font-bold neon-text mb-2">500+</div>
                <div className="text-muted-foreground">Global Clients</div>
              </div>
              <div className="glass-panel p-6 rounded-xl hover:shadow-glow transition-all duration-300">
                <div className="text-3xl font-bold neon-text mb-2">$2.5B+</div>
                <div className="text-muted-foreground">Assets Managed</div>
              </div>
              <div className="glass-panel p-6 rounded-xl hover:shadow-glow transition-all duration-300">
                <div className="text-3xl font-bold neon-text mb-2">50+</div>
                <div className="text-muted-foreground">Countries</div>
              </div>
              <div className="glass-panel p-6 rounded-xl hover:shadow-glow transition-all duration-300">
                <div className="text-3xl font-bold neon-text mb-2">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </div>
            </div>

            <div className="pt-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our expertise spans across multiple industries, providing tailored 
                solutions that drive growth, efficiency, and sustainable success 
                for businesses of all sizes.
              </p>
            </div>
          </Reveal>

          {/* 3D Visualization */}
          <Reveal as="div" className="relative" y={24} blur={8} delay={0.15}>
            <div className="glass-panel p-8 rounded-2xl shadow-glow">
              <CrystalTower className="w-full h-80" />
              
              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-neon-glow rounded-full glow-pulse" />
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-accent-magenta rounded-full shimmer" />
              <div className="absolute top-12 left-8 w-1.5 h-1.5 bg-purple-400 rounded-full float-animation" />
            </div>
          </Reveal>
        </div>

        {/* Technology Excellence */}
        <Reveal as="div" className="mt-20 text-center" y={24} blur={8}>
          <div className="glass-panel p-12 rounded-3xl shadow-glow">
            <h3 className="text-4xl font-bold neon-text mb-8">
              Powered by Advanced Technology
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Reveal as="div" className="space-y-6 text-left lg:text-center" y={16} blur={6}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our proprietary algorithms and AI-driven analytics provide 
                  real-time insights, risk assessment, and automated optimization 
                  to maximize your business potential.
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center">
                  {['AI Analytics', 'Blockchain', 'Cloud Computing', 'Cybersecurity'].map((tech, index) => (
                    <Reveal
                      as="div"
                      key={tech}
                      className="glass-panel px-4 py-2 rounded-full hover:shadow-glow transition-all duration-300"
                      y={12}
                      blur={6}
                      delay={index * 0.05}
                    >
                      <span className="text-sm font-semibold text-foreground">{tech}</span>
                    </Reveal>
                  ))}
                </div>
              </Reveal>
              
              <Reveal as="div" className="relative" y={16} blur={6} delay={0.1}>
                <HolographicChart className="w-full h-64" />
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};