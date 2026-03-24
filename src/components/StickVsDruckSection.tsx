const StickVsDruckSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <p className="text-primary font-bold tracking-[0.25em] uppercase text-xs text-center mb-3">
          Veredelung
        </p>
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-4 uppercase tracking-tight">
          Stickerei oder Textildruck?
        </h2>
        <p className="text-muted-foreground text-center mb-14 max-w-2xl mx-auto text-sm">
          Beide Verfahren haben ihre Stärken. Wir beraten Sie gerne, welche Methode für Ihre Firmenkleidung ideal ist.
        </p>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          <div className="p-10 bg-background">
            <h3 className="text-2xl font-bold font-display mb-1 text-gradient uppercase tracking-wide">Stickerei</h3>
            <p className="text-muted-foreground text-xs uppercase tracking-wider font-semibold mb-8">Hochwertig · Langlebig · Professionell</p>
            <ul className="space-y-4">
              {[
                "Besonders langlebig und waschbeständig",
                "Hochwertige, edle Optik",
                "Ideal für Arbeitsjacken und Poloshirts",
                "Perfekt für kleinere Logos und Schriftzüge",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                  <span className="text-foreground/80 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-10 bg-background">
            <h3 className="text-2xl font-bold font-display mb-1 text-gradient uppercase tracking-wide">Textildruck</h3>
            <p className="text-muted-foreground text-xs uppercase tracking-wider font-semibold mb-8">Vielseitig · Farbenfroh · Kosteneffizient</p>
            <ul className="space-y-4">
              {[
                "Ideal für größere Logos und Motive",
                "Kräftige Farben und feine Details",
                "Perfekt für T-Shirts und Hoodies",
                "Kostengünstig bei größeren Stückzahlen",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                  <span className="text-foreground/80 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickVsDruckSection;
