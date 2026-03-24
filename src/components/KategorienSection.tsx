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
        <p className="text-primary font-bold tracking-[0.25em] uppercase text-xs text-center mb-3">
          Sortiment
        </p>
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-4 uppercase tracking-tight">
          Arbeitskleidung zum <span className="text-gradient">Bedrucken & Besticken</span>
        </h2>
        <p className="text-muted-foreground text-center mb-14 max-w-2xl mx-auto text-sm">
          Große Auswahl an Workwear – alle Produkte können mit Ihrem Logo veredelt werden
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1">
          {categories.map((cat, i) => (
            <a
              key={i}
              href={cat.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden aspect-[3/4] bg-kpw-card"
            >
              <img
                src={cat.image}
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent flex items-end justify-center p-4">
                <span className="font-display font-bold text-xs uppercase tracking-wider text-foreground">{cat.label}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KategorienSection;
