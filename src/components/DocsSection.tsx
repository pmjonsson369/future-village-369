import { motion } from "framer-motion";

const DocsSection = () => {
  return (
    <section id="docs" className="py-32">
      <div className="container max-w-4xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-secondary text-sm tracking-[0.25em] uppercase mb-4"
        >
          Documentation
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display font-bold mb-6"
        >
          Building <span className="text-gradient">in public</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-2xl"
        >
          Every experiment, breakthrough, and lesson is documented. This journey is open for the world to learn from, contribute to, and replicate.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              phase: "01",
              title: "Research & Design",
              description: "Mapping regenerative systems, studying existing eco-villages, and designing modular solutions.",
            },
            {
              phase: "02",
              title: "Prototype & Test",
              description: "Hands-on experimentation with water, energy, and food systems in real environments.",
            },
            {
              phase: "03",
              title: "Integrate & Scale",
              description: "Connecting systems with AI orchestration and deploying to partner communities.",
            },
            {
              phase: "04",
              title: "Share & Replicate",
              description: "Open-sourcing blueprints for other villages, communities, and builders worldwide.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-5 p-6 rounded-xl bg-card border border-border glow-border"
            >
              <span className="text-3xl font-display font-bold text-primary/30">{item.phase}</span>
              <div>
                <h3 className="font-display font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocsSection;
