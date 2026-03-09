import { motion } from "framer-motion";
import { TrendingUp, Heart, Lightbulb, Globe } from "lucide-react";

const impacts = [
  {
    icon: TrendingUp,
    value: "40%",
    label: "Redução de incidentes",
    description: "Usuários relatam significativa redução em situações de risco.",
  },
  {
    icon: Heart,
    value: "100K+",
    label: "Vidas impactadas",
    description: "Pessoas que se sentem mais seguras no dia a dia.",
  },
  {
    icon: Lightbulb,
    value: "1M+",
    label: "Alertas compartilhados",
    description: "Comunidade ativa e engajada pela segurança.",
  },
  {
    icon: Globe,
    value: "12",
    label: "Cidades atendidas",
    description: "Expansão contínua para novas regiões.",
  },
];

const ImpactSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-[0.03]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Impacto Social</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mt-3 mb-4">
            Tecnologia que transforma vidas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Nosso compromisso vai além da tecnologia. Estamos construindo cidades mais seguras e comunidades mais conectadas.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-14 h-14 rounded-2xl gradient-hero mx-auto mb-4 flex items-center justify-center shadow-glow">
                <impact.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <p className="text-4xl font-bold font-display text-gradient mb-1">{impact.value}</p>
              <p className="text-foreground font-semibold mb-1">{impact.label}</p>
              <p className="text-sm text-muted-foreground">{impact.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
