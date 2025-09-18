import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ChevronDown, Globe } from 'lucide-react';

export const Header = () => {
  const { t, i18n } = useTranslation();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const toggleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsLanguageMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/logo.webp"
              alt="La Formula logo"
              className="w-12 h-12 md:w-14 md:h-14 object-contain rounded-lg drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]"
            />
            <span className="text-xl font-bold neon-text">La Formula</span>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#services" 
              className="text-foreground hover:text-neon-glow transition-colors duration-300"
            >
              {t('nav.services')}
            </a>
            <a 
              href="#about" 
              className="text-foreground hover:text-neon-glow transition-colors duration-300"
            >
              {t('nav.about')}
            </a>
            
            {/* Language Selector */}
            <div className="relative">
              <Button
                variant="ghost"
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center space-x-2 text-foreground hover:text-neon-glow"
              >
                <Globe size={16} />
                <span>{t('nav.languages')}</span>
                <ChevronDown size={16} />
              </Button>
              
              {isLanguageMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 glass-panel rounded-lg shadow-glow">
                  <div className="p-2">
                    <button
                      onClick={() => toggleLanguage('en')}
                      className={`w-full text-left px-3 py-2 rounded hover:bg-purple-600/30 transition-colors ${
                        i18n.language === 'en' ? 'text-neon-glow' : 'text-foreground'
                      }`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => toggleLanguage('es')}
                      className={`w-full text-left px-3 py-2 rounded hover:bg-purple-600/30 transition-colors ${
                        i18n.language === 'es' ? 'text-neon-glow' : 'text-foreground'
                      }`}
                    >
                      Español
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            className="md:hidden text-foreground hover:text-neon-glow"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </nav>
    </header>
  );
};