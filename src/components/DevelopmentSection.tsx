import { motion } from "framer-motion";
import { Lightbulb, Code2, Users, Target } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Ideação",
    description: "Pesquisa e definição do conceito do SafeWay.",
    status: "done" as const,
  },
  {
    icon: Target,
    title: "Planejamento",
    description: "Definição de funcionalidades e arquitetura do sistema.",
    status: "current" as const,
  },
  {
    icon: Code2,
    title: "Desenvolvimento",
    description: "Construção do aplicativo e integração com dados de segurança.",
    status: "upcoming" as const,
  },
  {
    icon: Users,
    title: "Lançamento Beta",
    description: "Testes com primeiros usuários e coleta de feedback.",
    status: "upcoming" as const,
  },
];

const DevelopmentSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-[0.02]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Em Desenvolvimento</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mt-3 mb-4">
            De ideia a realidade
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Estamos trabalhando para transformar o SafeWay em um produto real que impacte positivamente a vida das pessoas.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-6 rounded-2xl border text-center transition-all duration-300 ${
                step.status === "current"
                  ? "border-primary bg-primary/5 shadow-glow"
                  : step.status === "done"
                  ? "border-border bg-card"
                  : "border-dashed border-border bg-background opacity-70"
              }`}
            >
              {step.status === "current" && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-primary-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" />
                    Fase atual
                  </span>
                </div>
              )}

              <div className={`w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center ${
                step.status === "done"
                  ? "gradient-hero"
                  : step.status === "current"
                  ? "gradient-hero shadow-glow"
                  : "bg-muted"
              }`}>
                <step.icon className={`w-6 h-6 ${
                  step.status === "upcoming" ? "text-muted-foreground" : "text-primary-foreground"
                }`} />
              </div>

              <h3 className="text-lg font-semibold font-display text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>

              {step.status === "done" && (
                <span className="inline-block mt-3 text-xs font-medium text-primary">✓ Concluído</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentSection;
