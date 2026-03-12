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
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-4">
          Beispiele unserer <span className="text-gradient">Stickerei & Textildruckerei</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Von der Arbeitsjacke bis zur Vereinskleidung – professionelle Veredelung für jeden Einsatz
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <div key={i} className="group relative rounded-xl overflow-hidden aspect-square">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="font-display font-semibold text-sm">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalerieSection;
