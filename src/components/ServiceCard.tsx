import { ServiceIcon3D } from '@/components/3d/ServiceIcon3D';
import { Card } from '@/components/ui/card';

interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  iconType: 'phone' | 'laptop' | 'globe' | 'briefcase' | 'network' | 'bank' | 'gear' | 'building';
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  subtitle,
  description,
  iconType,
}) => {
  return (
    <Card className="group glass-panel hover:shadow-glow transition-all duration-500 p-8 hover:-translate-y-2">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* 3D Icon */}
        <div className="flex-shrink-0">
          <ServiceIcon3D 
            type={iconType} 
            className="w-20 h-20 md:w-24 md:h-24 group-hover:scale-110 transition-transform duration-300" 
          />
        </div>
        
        {/* Content */}
        <div className="text-center md:text-left space-y-3">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-neon-glow transition-colors duration-300">
              {title}
            </h3>
            <h4 className="text-xl md:text-2xl font-semibold neon-text">
              {subtitle}
            </h4>
          </div>
          
          <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
            {description}
          </p>

          {/* Interactive glow particles */}
          <div className="flex gap-2 justify-center md:justify-start pt-2">
            <div className="w-2 h-2 bg-neon-glow rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-neon-magenta rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
          </div>
        </div>
      </div>
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-neon opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-500 pointer-events-none" />
    </Card>
  );
};