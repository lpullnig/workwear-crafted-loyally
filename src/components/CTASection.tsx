import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-padding bg-kpw-card">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
          Jetzt Arbeitskleidung mit <span className="text-gradient">Logo gestalten</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
          Gestalten Sie Ihre Workwear online oder lassen Sie sich persönlich beraten.
          Unser Team freut sich auf Ihre Anfrage!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl">
            Arbeitskleidung gestalten
          </Button>
          <Button variant="heroOutline" size="xl">
            Beratung anfragen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
