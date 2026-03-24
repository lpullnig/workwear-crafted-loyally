import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto max-w-6xl flex items-center justify-between h-14 px-4">
        <a href="/" className="font-display font-bold text-xl tracking-tight text-gradient">KPW</a>
        
        <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          <a href="#vorteile" className="hover:text-primary transition-colors">Vorteile</a>
          <a href="#ablauf" className="hover:text-primary transition-colors">Ablauf</a>
          <a href="#galerie" className="hover:text-primary transition-colors">Galerie</a>
          <a href="#branchen" className="hover:text-primary transition-colors">Branchen</a>
          <a href="#referenzen" className="hover:text-primary transition-colors">Referenzen</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="hero" size="sm" className="uppercase tracking-wider text-xs">Jetzt gestalten</Button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-1">
          {["Vorteile", "Ablauf", "Galerie", "Branchen", "Referenzen"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground py-3 border-b border-border/50 hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button variant="hero" size="sm" className="w-full mt-3 uppercase tracking-wider text-xs">Jetzt gestalten</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
