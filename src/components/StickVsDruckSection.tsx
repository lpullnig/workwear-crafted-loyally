const StickVsDruckSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-4">
          Stickerei oder Textildruck – welche Veredelung passt zu Ihrer Arbeitskleidung?
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Beide Verfahren haben ihre Stärken. Wir beraten Sie gerne, welche Methode für Ihre Firmenkleidung ideal ist.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-kpw-card border border-border">
            <h3 className="text-2xl font-bold font-display mb-2 text-gradient">Stickerei</h3>
            <p className="text-muted-foreground text-sm mb-6">Hochwertig, langlebig, professionell</p>
            <ul className="space-y-3">
              {[
                "Besonders langlebig und waschbeständig",
                "Hochwertige, edle Optik",
                "Ideal für Arbeitsjacken und Poloshirts",
                "Perfekt für kleinere Logos und Schriftzüge",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-foreground/80 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-kpw-card border border-border">
            <h3 className="text-2xl font-bold font-display mb-2 text-gradient">Textildruck</h3>
            <p className="text-muted-foreground text-sm mb-6">Vielseitig, farbenfroh, kosteneffizient</p>
            <ul className="space-y-3">
              {[
                "Ideal für größere Logos und Motive",
                "Kräftige Farben und feine Details",
                "Perfekt für T-Shirts und Hoodies",
                "Kostengünstig bei größeren Stückzahlen",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
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
