import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  "Rotas otimizadas por segurança, não só distância",
  "Dados atualizados em tempo real pela comunidade",
  "Integração com dados públicos de criminalidade",
  "Compartilhamento de trajeto com pessoas de confiança",
  "Alertas inteligentes baseados em localização",
];

const SolutionSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 gradient-hero rounded-3xl opacity-10" />
              <div className="absolute inset-4 bg-card rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 gradient-hero rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-glow">
                    <span className="text-3xl font-bold text-primary-foreground font-display">SW</span>
                  </div>
                  <h3 className="text-2xl font-bold font-display text-foreground mb-2">SafeWay</h3>
                  <p className="text-muted-foreground">Sua segurança em primeiro lugar</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">A Solução</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mt-3 mb-4">
              Navegação inteligente e segura
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              O SafeWay combina dados de segurança pública, iluminação, fluxo de pessoas e alertas comunitários para traçar as melhores rotas para você.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full gradient-hero flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-primary-foreground" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
