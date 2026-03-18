import catJacken from "@/assets/cat-jacken.jpg";
import catTshirts from "@/assets/cat-tshirts.jpg";
import catPolo from "@/assets/cat-polo.jpg";
import catHoodies from "@/assets/cat-hoodies.jpg";
import catWarnwesten from "@/assets/cat-warnwesten.jpg";
import catCaps from "@/assets/cat-caps.jpg";

const categories = [
  { label: "Arbeitsjacken", image: catJacken, href: "https://kp-workwear.com/collections/arbeitsjacken" },
  { label: "T-Shirts", image: catTshirts, href: "https://kp-workwear.com/collections/t-shirts" },
  { label: "Poloshirts", image: catPolo, href: "https://kp-workwear.com/collections/poloshirts" },
  { label: "Hoodies", image: catHoodies, href: "https://kp-workwear.com/collections/hoodies" },
  { label: "Warnwesten", image: catWarnwesten, href: "https://kp-workwear.com/collections/warnwesten" },
  { label: "Caps", image: catCaps, href: "https://kp-workwear.com/collections/caps" },
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
            <a
              key={i}
              href={cat.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden aspect-square bg-kpw-card border border-border hover:border-primary/40 transition-all hover:glow-green"
            >
              <img
                src={cat.image}
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent flex items-end justify-center p-4">
                <span className="font-display font-semibold text-sm text-foreground">{cat.label}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KategorienSection;
