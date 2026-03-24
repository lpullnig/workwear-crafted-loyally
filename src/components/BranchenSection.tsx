import { Building, Wrench, Droplets, Truck, UtensilsCrossed, Settings, Users, Flag } from "lucide-react";

const branches = [
  { icon: Building, label: "Bauunternehmen" },
  { icon: Wrench, label: "Elektriker & Installateure" },
  { icon: Droplets, label: "Installateure" },
  { icon: Truck, label: "Logistikunternehmen" },
  { icon: UtensilsCrossed, label: "Gastronomie" },
  { icon: Settings, label: "Werkstätten" },
  { icon: Users, label: "Vereine" },
  { icon: Flag, label: "Brauchtumsgruppen" },
];

const BranchenSection = () => {
  return (
    <section className="section-padding bg-kpw-card">
      <div className="container mx-auto max-w-6xl">
        <p className="text-primary font-bold tracking-[0.25em] uppercase text-xs text-center mb-3">
          Branchen
        </p>
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-4 uppercase tracking-tight">
          Für <span className="text-gradient">Unternehmen & Vereine</span>
        </h2>
        <p className="text-muted-foreground text-center mb-14 max-w-2xl mx-auto text-sm">
          Unsere Stickerei und Textildruckerei eignet sich für zahlreiche Branchen und Einsatzbereiche
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border">
          {branches.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center p-8 bg-kpw-card hover:bg-kpw-elevated transition-colors">
              <item.icon className="w-8 h-8 text-primary mb-4" />
              <span className="font-display font-bold text-xs uppercase tracking-wider">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchenSection;
