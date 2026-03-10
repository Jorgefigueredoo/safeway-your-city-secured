import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl gradient-hero p-12 md:p-20 text-center overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-primary-foreground mb-4">
              Juntos por cidades mais seguras
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
              Acreditamos que a tecnologia pode transformar a segurança urbana. Acompanhe o desenvolvimento do SafeWay e faça parte dessa mudança.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="rounded-full px-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold text-base"
              >
                Seja um apoiador
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
