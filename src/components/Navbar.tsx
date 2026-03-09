import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 gradient-hero rounded-lg flex items-center justify-center">
            <Shield className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold font-display text-foreground">SafeWay</span>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#problema" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Problema</a>
          <a href="#solucao" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Solução</a>
          <a href="#funcionalidades" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Funcionalidades</a>
          <a href="#impacto" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Impacto</a>
          <Button variant="hero" size="sm" className="rounded-full">Baixar app</Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 py-4 space-y-3">
          <a href="#problema" className="block text-sm text-muted-foreground" onClick={() => setOpen(false)}>Problema</a>
          <a href="#solucao" className="block text-sm text-muted-foreground" onClick={() => setOpen(false)}>Solução</a>
          <a href="#funcionalidades" className="block text-sm text-muted-foreground" onClick={() => setOpen(false)}>Funcionalidades</a>
          <a href="#impacto" className="block text-sm text-muted-foreground" onClick={() => setOpen(false)}>Impacto</a>
          <Button variant="hero" size="sm" className="rounded-full w-full">Baixar app</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
