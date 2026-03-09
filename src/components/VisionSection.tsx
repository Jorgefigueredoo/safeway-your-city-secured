import { motion } from "framer-motion";
import { Check } from "lucide-react";
import logo from "@/assets/logo-safeway.png";

const visionPoints = [
  "Usar dados de segurança pública para calcular rotas com menor risco",
  "Integrar informações de iluminação e fluxo de pessoas",
  "Criar uma rede colaborativa de alertas comunitários",
  "Permitir compartilhamento de trajeto em tempo real",
  "Empoderar cidadãos com informação para decisões mais seguras",
];

const VisionSection = () => {
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
            <div className="relative aspect-square max-w-sm mx-auto">
              <div className="absolute inset-0 gradient-hero rounded-3xl opacity-10" />
              <div className="absolute inset-4 bg-card rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <img src={logo} alt="SafeWay" className="w-24 h-24 mx-auto mb-6 object-contain" />
                  <h3 className="text-2xl font-bold font-display text-foreground mb-2">SafeWay</h3>
                  <p className="text-muted-foreground text-sm">Segurança urbana inteligente</p>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-medium text-primary">Em desenvolvimento</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Nossa Visão</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mt-3 mb-4">
              Tecnologia a serviço da segurança
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Acreditamos que a tecnologia pode transformar a forma como as pessoas se movem pela cidade. O SafeWay pretende combinar inteligência de dados com colaboração comunitária para criar uma experiência de navegação focada em segurança.
            </p>

            <div className="space-y-4">
              {visionPoints.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full gradient-hero flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-primary-foreground" />
                  </div>
                  <span className="text-foreground">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
