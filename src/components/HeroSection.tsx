import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-workwear.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] flex items-end pb-20 md:pb-28 overflow-hidden">
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
        <p className="text-primary font-bold tracking-[0.25em] uppercase text-xs mb-6 animate-fade-up">
          KPW Workwear – Stickerei & Textildruckerei
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.05] mb-6 uppercase tracking-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Textildruckerei &<br />Stickerei für<br />
          <span className="text-gradient">Arbeitskleidung</span>
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-10 animate-fade-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
          Professionelle Veredelung von Workwear, Arbeitskleidung und Berufsbekleidung mit Ihrem Logo.
          Gestalten Sie Ihre Kleidung online oder lassen Sie sich persönlich beraten.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Button variant="hero" size="xl" className="uppercase tracking-wider font-bold">
            Arbeitskleidung online gestalten
          </Button>
          <Button variant="heroOutline" size="xl" className="uppercase tracking-wider font-bold">
            Beratung anfragen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
