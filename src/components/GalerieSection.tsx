import galleryJacket from "@/assets/gallery-jacket.jpg";
import galleryTshirts from "@/assets/gallery-tshirts.jpg";
import galleryPolo from "@/assets/gallery-polo.jpg";
import galleryConstruction from "@/assets/gallery-construction.jpg";
import galleryGastro from "@/assets/gallery-gastro.jpg";
import galleryVerein from "@/assets/gallery-verein.jpg";

const items = [
  { src: galleryJacket, alt: "Bestickte Arbeitsjacke mit Firmenlogo", label: "Bestickte Arbeitsjacken" },
  { src: galleryTshirts, alt: "Bedruckte T-Shirts mit Firmenlogo", label: "Bedruckte T-Shirts" },
  { src: galleryPolo, alt: "Poloshirts mit gesticktem Firmenlogo", label: "Poloshirts mit Logo" },
  { src: galleryConstruction, alt: "Workwear für Bauunternehmen mit Logo", label: "Workwear für Bau" },
  { src: galleryGastro, alt: "Berufsbekleidung für Gastronomie mit Logo", label: "Gastronomie" },
  { src: galleryVerein, alt: "Vereinskleidung bedruckt und bestickt", label: "Vereinskleidung" },
];

const GalerieSection = () => {
  return (
    <section className="section-padding bg-kpw-card">
      <div className="container mx-auto max-w-6xl">
        <p className="text-primary font-bold tracking-[0.25em] uppercase text-xs text-center mb-3">
          Referenzprojekte
        </p>
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-4 uppercase tracking-tight">
          Beispiele unserer <span className="text-gradient">Veredelung</span>
        </h2>
        <p className="text-muted-foreground text-center mb-14 max-w-2xl mx-auto text-sm">
          Von der Arbeitsjacke bis zur Vereinskleidung – professionelle Veredelung für jeden Einsatz
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
          {items.map((item, i) => (
            <div key={i} className="group relative overflow-hidden aspect-[4/3]">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent flex items-end p-5">
                <span className="font-display font-bold text-xs uppercase tracking-wider">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalerieSection;
