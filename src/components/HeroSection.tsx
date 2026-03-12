import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-workwear.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-end pb-16 md:pb-24 overflow-hidden">
      <img
        src={heroImg}
        alt="Handwerker mit gebrandeter Arbeitskleidung in einer Werkstatt"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="relative z-10 container mx-auto max-w-5xl px-4">
        <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 animate-fade-up">
          KPW Workwear – Stickerei & Textildruckerei
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Textildruckerei & Stickerei für Arbeitskleidung in Österreich
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Professionelle Veredelung von Workwear, Arbeitskleidung und Berufsbekleidung mit Ihrem Logo.
          Gestalten Sie Ihre Kleidung online oder lassen Sie sich persönlich beraten.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Button variant="hero" size="xl">
            Arbeitskleidung online gestalten
          </Button>
          <Button variant="heroOutline" size="xl">
            Beratung anfragen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
