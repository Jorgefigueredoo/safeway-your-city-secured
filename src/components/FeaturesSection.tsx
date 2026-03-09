import { motion } from "framer-motion";
import { Route, Map, Share2, Bell } from "lucide-react";

const features = [
  {
    icon: Route,
    title: "Rotas mais seguras",
    description: "Algoritmos que calcularão o caminho com menor risco, considerando múltiplos fatores de segurança urbana.",
  },
  {
    icon: Map,
    title: "Mapa de risco",
    description: "Um mapa interativo mostrando áreas da cidade com diferentes níveis de segurança, atualizado com dados reais.",
  },
  {
    icon: Bell,
    title: "Alertas da comunidade",
    description: "Sistema colaborativo onde usuários poderão reportar e receber alertas sobre incidentes e situações de risco.",
  },
  {
    icon: Share2,
    title: "Compartilhamento de trajeto",
    description: "Compartilhe seu trajeto em tempo real com familiares e amigos para que acompanhem sua localização.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-card relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Como Funcionará</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mt-3 mb-4">
            Funcionalidades planejadas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Estamos projetando ferramentas que trabalharão juntas para oferecer uma experiência de navegação mais segura.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl border border-border bg-background hover:border-primary/30 hover:shadow-glow transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:gradient-hero group-hover:shadow-glow transition-all duration-300">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold font-display text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
