import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Rocket } from "lucide-react";
import logo from "@/assets/logo-safeway.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-[0.03]" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.img
              src={logo}
              alt="SafeWay Logo"
              className="w-24 h-24 mx-auto mb-8 object-contain"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />

            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-6">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Projeto em desenvolvimento</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight text-foreground mb-6">
              Caminhe com{" "}
              <span className="text-gradient">confiança</span>
              <br />pela sua cidade
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
              O SafeWay será um aplicativo que usa dados inteligentes para encontrar as rotas mais seguras para você. Estamos transformando essa visão em realidade.
            </p>

            <p className="text-sm text-muted-foreground/70 mb-8">
              🚧 Atualmente em fase de planejamento — acompanhe nosso progresso.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" className="rounded-full px-8">
                Seja um apoiador
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
              <Button variant="heroOutline" size="lg" className="rounded-full px-8">
                Saiba mais
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
