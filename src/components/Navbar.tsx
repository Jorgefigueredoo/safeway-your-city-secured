import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-safeway.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="SafeWay" className="w-8 h-8 object-contain" />
          <span className="text-xl font-bold font-display text-foreground">SafeWay</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#problema" className="text-sm text-muted-foreground hover:text-foreground transition-colors">O Problema</a>
          <a href="#visao" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Nossa Visão</a>
          <a href="#como-funciona" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Como Funcionará</a>
          <a href="#desenvolvimento" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Status</a>
          <Button variant="hero" size="sm" className="rounded-full">Acompanhar projeto</Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 py-4 space-y-3">
          <a href="#problema" className="block text-sm text-muted-foreground" onClick={() => setOpen(false)}>O Problema</a>
          <a href="#visao" className="block text-sm text-muted-foreground" onClick={() => setOpen(false)}>Nossa Visão</a>
          <a href="#como-funciona" className="block text-sm text-muted-foreground" onClick={() => setOpen(false)}>Como Funcionará</a>
          <a href="#desenvolvimento" className="block text-sm text-muted-foreground" onClick={() => setOpen(false)}>Status</a>
          <Button variant="hero" size="sm" className="rounded-full w-full">Acompanhar projeto</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
