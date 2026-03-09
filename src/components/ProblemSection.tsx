import { motion } from "framer-motion";
import { AlertTriangle, Eye, MapPin } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Insegurança nas ruas",
    description: "Milhões de pessoas enfrentam situações de risco diariamente ao caminhar pela cidade, sem informações sobre áreas perigosas.",
  },
  {
    icon: Eye,
    title: "Falta de visibilidade",
    description: "Ruas mal iluminadas e sem movimento são armadilhas urbanas. Sem dados acessíveis, é impossível evitá-las de forma inteligente.",
  },
  {
    icon: MapPin,
    title: "Navegação sem inteligência",
    description: "Aplicativos de navegação atuais focam apenas em velocidade e distância — nunca consideram a segurança do trajeto.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-24 bg-card relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">O Problema</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mt-3 mb-4">
            Se deslocar não deveria ser um risco
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            No Brasil, milhões de pessoas se sentem inseguras ao caminhar pela cidade, especialmente à noite ou em locais desconhecidos. Faltam ferramentas que coloquem a segurança em primeiro lugar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="p-8 rounded-2xl border border-border bg-background hover:shadow-glow transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mb-5">
                <problem.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold font-display text-foreground mb-3">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
