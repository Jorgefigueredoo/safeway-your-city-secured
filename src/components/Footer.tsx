import logo from "@/assets/logo-safeway.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="SafeWay" className="w-8 h-8 object-contain" />
            <span className="text-lg font-bold font-display text-foreground">SafeWay</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 SafeWay. Projeto em desenvolvimento. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
