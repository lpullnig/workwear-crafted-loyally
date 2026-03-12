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
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-4">
          Arbeitskleidung mit Logo für <span className="text-gradient">Unternehmen und Vereine</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Unsere Stickerei und Textildruckerei eignet sich für zahlreiche Branchen und Einsatzbereiche
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {branches.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-colors">
              <item.icon className="w-10 h-10 text-primary mb-3" />
              <span className="font-display font-semibold text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchenSection;
