import { motion } from "framer-motion";
import SacredGeometry from "./SacredGeometry";

const VisionSection = () => {
  return (
    <section id="vision" className="relative py-32 overflow-hidden sacred-gradient">
      <SacredGeometry className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow" size={600} opacity={0.03} />

      <div className="container max-w-4xl text-center relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-secondary text-sm tracking-[0.25em] uppercase mb-4"
        >
          Vision
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display font-bold mb-8"
        >
          A global network of
          <br />
          <span className="text-gradient">intelligent villages</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-16"
        >
          We envision a decentralized web of regenerative communities — each unique in culture and landscape,
          yet connected through shared intelligence, resources, and purpose.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Future Villages",
              description: "Self-sustaining communities powered by nature and AI, designed for abundance.",
            },
            {
              title: "Connected Network",
              description: "A global mesh of villages sharing knowledge, resources, and innovation in real time.",
            },
            {
              title: "Regenerative Living",
              description: "Systems that give back more than they take — healing the land while serving people.",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-2xl bg-card border border-border p-8 text-left glow-border"
            >
              <h3 className="font-display font-semibold text-lg mb-3">{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
