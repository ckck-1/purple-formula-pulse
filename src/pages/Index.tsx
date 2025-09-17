import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
      </main>
    </div>
  );
};

export default Index;
