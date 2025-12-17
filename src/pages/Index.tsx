import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { WorkflowSection } from "@/components/WorkflowSection";
import { TechStackSection } from "@/components/TechStackSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { StickyCTA } from "@/components/StickyCTA";
import { AnimatedSection } from "@/components/AnimatedSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AnimatedSection delay={0.1}>
        <AboutSection />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <ServicesSection />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <ProjectsSection />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <WorkflowSection />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <TechStackSection />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <TestimonialsSection />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <ContactSection />
      </AnimatedSection>
      <Footer />
      <BackToTop />
      <StickyCTA />
    </main>
  );
};

export default Index;
