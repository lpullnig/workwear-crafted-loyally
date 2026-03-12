import { Shirt, ShieldCheck } from "lucide-react";

const categories = [
  { label: "Arbeitsjacken", emoji: "🧥" },
  { label: "T-Shirts", emoji: "👕" },
  { label: "Poloshirts", emoji: "👔" },
  { label: "Hoodies", emoji: "🧶" },
  { label: "Warnwesten", emoji: "🦺" },
  { label: "Caps", emoji: "🧢" },
];

const KategorienSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-4">
          Arbeitskleidung zum Bedrucken und Besticken
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Große Auswahl an Workwear – alle Produkte können mit Ihrem Logo veredelt werden
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl bg-kpw-card border border-border hover:border-primary/40 transition-all cursor-pointer text-center hover:glow-green"
            >
              <span className="text-4xl mb-3 block">{cat.emoji}</span>
              <span className="font-display font-semibold text-sm">{cat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KategorienSection;
