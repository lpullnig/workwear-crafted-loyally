import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VorteileSection from "@/components/VorteileSection";
import SoFunktioniertSection from "@/components/SoFunktioniertSection";
import GalerieSection from "@/components/GalerieSection";
import StickVsDruckSection from "@/components/StickVsDruckSection";
import BranchenSection from "@/components/BranchenSection";
import KategorienSection from "@/components/KategorienSection";
import WarumKPWSection from "@/components/WarumKPWSection";
import ReferenzenSection from "@/components/ReferenzenSection";
import CTASection from "@/components/CTASection";
import SEOTextSection from "@/components/SEOTextSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <div id="vorteile"><VorteileSection /></div>
        <div id="ablauf"><SoFunktioniertSection /></div>
        <div id="galerie"><GalerieSection /></div>
        <StickVsDruckSection />
        <div id="branchen"><BranchenSection /></div>
        <KategorienSection />
        <WarumKPWSection />
        <div id="referenzen"><ReferenzenSection /></div>
        <CTASection />
        <SEOTextSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
