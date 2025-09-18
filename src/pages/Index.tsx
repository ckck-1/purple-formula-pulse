import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { VisualSection } from "@/components/VisualSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <VisualSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
