import { motion } from "framer-motion";

const pillars = [
  { label: "Water", icon: "💧" },
  { label: "Food", icon: "🌱" },
  { label: "Energy", icon: "⚡" },
  { label: "Monitoring", icon: "📡" },
];

const SystemSection = () => {
  return (
    <section id="system" className="py-32 md:py-40 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-muted-foreground tracking-widest uppercase mb-6 text-center"
        >
          The System
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight text-center mb-20"
        >
          We design systems for water, food, energy and smart monitoring.
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-8 text-center"
            >
              <span className="text-3xl block mb-4">{p.icon}</span>
              <span className="text-sm font-medium text-foreground">{p.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemSection;
