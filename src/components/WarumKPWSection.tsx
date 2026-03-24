import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Stickerei und Textildruck direkt bei uns im Haus",
  "Persönliche Beratung für Unternehmen in ganz Österreich",
  "Große Auswahl an Workwear und Berufsbekleidung",
  "Professionelle Umsetzung Ihres Firmenlogos",
  "Schnelle Produktion und Lieferung",
  "Einfache Nachbestellung für bestehende Kunden",
];

const WarumKPWSection = () => {
  return (
    <section className="section-padding bg-kpw-card">
      <div className="container mx-auto max-w-5xl">
        <p className="text-primary font-bold tracking-[0.25em] uppercase text-xs text-center mb-3">
          Über uns
        </p>
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-4 uppercase tracking-tight">
          Warum <span className="text-gradient">KPW Workwear</span>?
        </h2>
        <p className="text-muted-foreground text-center mb-14 max-w-2xl mx-auto text-sm">
          Ihr Partner für Arbeitskleidung mit Logo in Österreich und Kärnten
        </p>
        <div className="grid sm:grid-cols-2 gap-px bg-border">
          {reasons.map((reason, i) => (
            <div key={i} className="flex items-center gap-4 p-6 bg-kpw-card">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="font-semibold text-sm">{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WarumKPWSection;
