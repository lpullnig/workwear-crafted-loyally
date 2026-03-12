import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto max-w-6xl flex items-center justify-between h-16 px-4">
        <a href="/" className="font-display font-bold text-xl text-gradient">KPW</a>
        
        <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#vorteile" className="hover:text-foreground transition-colors">Vorteile</a>
          <a href="#ablauf" className="hover:text-foreground transition-colors">Ablauf</a>
          <a href="#galerie" className="hover:text-foreground transition-colors">Galerie</a>
          <a href="#branchen" className="hover:text-foreground transition-colors">Branchen</a>
          <a href="#referenzen" className="hover:text-foreground transition-colors">Referenzen</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="hero" size="sm">Jetzt gestalten</Button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          <a href="#vorteile" className="block text-sm text-muted-foreground py-2" onClick={() => setOpen(false)}>Vorteile</a>
          <a href="#ablauf" className="block text-sm text-muted-foreground py-2" onClick={() => setOpen(false)}>Ablauf</a>
          <a href="#galerie" className="block text-sm text-muted-foreground py-2" onClick={() => setOpen(false)}>Galerie</a>
          <a href="#branchen" className="block text-sm text-muted-foreground py-2" onClick={() => setOpen(false)}>Branchen</a>
          <a href="#referenzen" className="block text-sm text-muted-foreground py-2" onClick={() => setOpen(false)}>Referenzen</a>
          <Button variant="hero" size="sm" className="w-full">Jetzt gestalten</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
