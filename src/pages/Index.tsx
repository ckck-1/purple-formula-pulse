import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { VisualSection } from "@/components/VisualSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/animations/Reveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Reveal y={32} blur={8}>
          <HeroSection />
        </Reveal>
        <Reveal y={32} blur={8} delay={0.1}>
          <VisualSection />
        </Reveal>
        <Reveal y={32} blur={8} delay={0.2}>
          <AboutSection />
        </Reveal>
        <Reveal y={32} blur={8} delay={0.3}>
          <ContactSection />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
