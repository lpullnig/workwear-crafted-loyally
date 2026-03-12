import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-gradient">KPW Workwear</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Ihre Textildruckerei und Stickerei für Arbeitskleidung in Österreich und Kärnten.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> +43 (0) 463 XXX XXX</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> office@kp-workwear.com</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Klagenfurt, Kärnten</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Links</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Online Konfigurator</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Datenschutz</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-6 text-center text-muted-foreground text-xs">
          © {new Date().getFullYear()} KPW Workwear. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
