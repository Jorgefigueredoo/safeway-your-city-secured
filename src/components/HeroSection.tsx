import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, ChevronRight } from "lucide-react";
import heroMap from "@/assets/hero-map.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero opacity-[0.03]" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Segurança Urbana Inteligente</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight text-foreground mb-6">
              Caminhe com{" "}
              <span className="text-gradient">confiança</span>
              <br />pela sua cidade
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              O SafeWay usa inteligência artificial e dados em tempo real para encontrar as rotas mais seguras para você. Transforme a forma como você se move pela cidade.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="rounded-full px-8">
                Começar agora
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
              <Button variant="heroOutline" size="lg" className="rounded-full px-8">
                Saiba mais
              </Button>
            </div>

            <div className="flex items-center gap-8 mt-10">
              <div>
                <p className="text-2xl font-bold font-display text-foreground">50K+</p>
                <p className="text-sm text-muted-foreground">Usuários ativos</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="text-2xl font-bold font-display text-foreground">98%</p>
                <p className="text-sm text-muted-foreground">Satisfação</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="text-2xl font-bold font-display text-foreground">12</p>
                <p className="text-sm text-muted-foreground">Cidades</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 gradient-hero rounded-3xl opacity-20 blur-2xl" />
              <img
                src={heroMap}
                alt="SafeWay - Mapa de rotas seguras"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
