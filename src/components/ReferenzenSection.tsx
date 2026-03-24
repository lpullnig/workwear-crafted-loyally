import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Markus H.",
    company: "Baufirma Steiner GmbH",
    text: "Die Qualität der Stickerei ist hervorragend. Unsere gesamte Mannschaft trägt jetzt einheitliche Arbeitskleidung mit unserem Logo. Top Service!",
  },
  {
    name: "Sandra K.",
    company: "Gasthaus zum Anker",
    text: "Schnelle Lieferung und perfekte Umsetzung unseres Logos auf den Kochbekleidungen. Die persönliche Beratung war super hilfreich.",
  },
  {
    name: "Thomas R.",
    company: "SV Sportverein Villach",
    text: "Vereinskleidung für über 50 Mitglieder – alles pünktlich und in bester Qualität. Nachbestellungen sind unkompliziert. Können wir nur empfehlen!",
  },
];

const ReferenzenSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <p className="text-primary font-bold tracking-[0.25em] uppercase text-xs text-center mb-3">
          Kundenstimmen
        </p>
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-4 uppercase tracking-tight">
          Das sagen unsere <span className="text-gradient">Kunden</span>
        </h2>
        <p className="text-muted-foreground text-center mb-14 max-w-2xl mx-auto text-sm">
          Unternehmen und Vereine vertrauen auf unsere Stickerei und Textildruckerei
        </p>
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 bg-background">
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm mb-8 leading-relaxed">„{t.text}"</p>
              <div className="border-t border-border pt-4">
                <p className="font-display font-bold text-sm uppercase tracking-wide">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferenzenSection;
