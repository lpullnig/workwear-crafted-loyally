import { Building2, MapPin, Repeat, Star, Users } from "lucide-react";

const advantages = [
  { icon: Building2, title: "Stickerei & Textildruck direkt im Haus", desc: "Alles aus einer Hand – schnell und professionell" },
  { icon: Users, title: "Persönliche Beratung in ganz Österreich", desc: "Unser Außendienst kommt direkt zu Ihnen" },
  { icon: MapPin, title: "Regionaler Service in Kärnten", desc: "Ihr Partner vor Ort in Klagenfurt und Umgebung" },
  { icon: Star, title: "Hochwertige Workwear Marken", desc: "Nur bewährte Qualität für Ihre Berufsbekleidung" },
  { icon: Repeat, title: "Einfache Nachbestellung für Unternehmen", desc: "Unkompliziert neue Mitarbeiter einkleiden" },
];

const VorteileSection = () => {
  return (
    <section className="section-padding bg-kpw-card">
      <div className="container mx-auto max-w-6xl">
        <p className="text-primary font-bold tracking-[0.25em] uppercase text-xs text-center mb-3">
          Ihre Vorteile
        </p>
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-4 uppercase tracking-tight">
          Warum <span className="text-gradient">KPW Workwear</span>
        </h2>
        <p className="text-muted-foreground text-center mb-14 max-w-2xl mx-auto text-sm">
          Warum Unternehmen und Vereine auf unsere Stickerei und Textildruckerei vertrauen
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border">
          {advantages.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-8 bg-kpw-card hover:bg-kpw-elevated transition-colors"
            >
              <div className="w-12 h-12 rounded-none bg-primary/10 flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold font-display text-sm mb-2 uppercase tracking-wide">{item.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VorteileSection;
