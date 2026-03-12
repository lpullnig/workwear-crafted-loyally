import { Monitor, Handshake } from "lucide-react";

const SoFunktioniertSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-4">
          So funktioniert es
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Zwei Wege zu Ihrer individuellen Arbeitskleidung mit Logo
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Online */}
          <div className="p-8 rounded-2xl bg-kpw-card border border-border">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Monitor className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold font-display mb-6">Online Konfigurator</h3>
            <ol className="space-y-5">
              {[
                "Arbeitskleidung auswählen",
                "Logo hochladen und Kleidung gestalten",
                "Anfrage über den Konfigurator senden",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </span>
                  <span className="text-foreground/80 pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Beratung */}
          <div className="p-8 rounded-2xl bg-kpw-card border border-border">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Handshake className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold font-display mb-6">Persönliche Beratung</h3>
            <ol className="space-y-5">
              {[
                "Kontakt aufnehmen",
                "Außendienst besucht Ihr Unternehmen",
                "Planung und Produktion Ihrer Firmenkleidung",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </span>
                  <span className="text-foreground/80 pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoFunktioniertSection;
