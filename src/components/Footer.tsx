import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative py-20 border-t border-purple-500/20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-magenta/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold neon-text mb-4">
                La Formula Capital Group
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Transforming businesses through innovative financial technology 
                solutions and strategic digital optimization.
              </p>
            </div>
            
            <div className="flex gap-4">
              <div className="w-3 h-3 bg-neon-glow rounded-full glow-pulse" />
              <div className="w-3 h-3 bg-accent-magenta rounded-full glow-pulse" style={{animationDelay: '0.5s'}} />
              <div className="w-3 h-3 bg-purple-400 rounded-full glow-pulse" style={{animationDelay: '1s'}} />
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-foreground">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-neon-glow transition-colors duration-300 hover:underline">
                  Process Optimization
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-neon-glow transition-colors duration-300 hover:underline">
                  Corporate Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-neon-glow transition-colors duration-300 hover:underline">
                  Global Business Structure
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-neon-glow transition-colors duration-300 hover:underline">
                  Portfolio Management
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-neon-glow transition-colors duration-300 hover:underline">
                  Asset Management
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-foreground">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-neon-glow transition-colors duration-300 hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-neon-glow transition-colors duration-300 hover:underline">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-neon-glow transition-colors duration-300 hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-neon-glow transition-colors duration-300 hover:underline">
                  News & Insights
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-neon-glow transition-colors duration-300 hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-foreground">Stay Connected</h4>
            
            <div className="space-y-4">
              <div className="glass-panel p-4 rounded-xl">
                <p className="text-sm text-muted-foreground mb-3">
                  Subscribe to our newsletter for the latest updates
                </p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-purple-800/50 border border-purple-600/30 rounded-lg text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-purple-500"
                  />
                  <Button size="sm" className="bg-gradient-neon hover:shadow-glow text-white">
                    Subscribe
                  </Button>
                </div>
              </div>
              
              <div className="text-sm text-muted-foreground">
                <p>Email: info@laformulacg.net</p>
                <p>Phone: +1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-purple-500/20 pt-12">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-neon-glow transition-colors duration-300">
                Terms & Conditions
              </a>
              <a href="#" className="text-muted-foreground hover:text-neon-glow transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-neon-glow transition-colors duration-300">
                Disclaimer
              </a>
              <a href="#" className="text-muted-foreground hover:text-neon-glow transition-colors duration-300">
                Cookies Policy
              </a>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © 2024 La Formula Capital Group. All rights reserved.
            </div>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-10 right-10 w-2 h-2 bg-neon-glow rounded-full float-animation opacity-60" />
        <div className="absolute bottom-10 left-10 w-1.5 h-1.5 bg-accent-magenta rounded-full float-animation opacity-80" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-purple-400 rounded-full shimmer" />
      </div>
    </footer>
  );
};