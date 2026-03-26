import { motion } from "framer-motion";

const nodes = [
  { icon: "💧", label: "Water", angle: -72 },
  { icon: "⚡", label: "Energy", angle: -144 },
  { icon: "🌱", label: "Food", angle: 144 },
  { icon: "🏡", label: "Community", angle: 72 },
  { icon: "🧠", label: "AI", angle: 0 },
];

const SystemSection = () => {
  const radius = 140;

  return (
    <section id="system" className="relative py-32 overflow-hidden sacred-gradient">
      <div className="container text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-secondary text-sm tracking-[0.25em] uppercase mb-4"
        >
          The System
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display font-bold mb-6"
        >
          One intelligent <span className="text-gradient">ecosystem</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-lg max-w-xl mx-auto mb-16"
        >
          Five pillars interconnected into a single regenerative system, orchestrated by intelligence.
        </motion.p>

        {/* Circular diagram */}
        <div className="relative w-[340px] h-[340px] mx-auto">
          {/* Center circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full border border-primary/30 flex items-center justify-center glow-primary animate-pulse-glow">
              <span className="text-xs font-display tracking-widest text-primary uppercase">369</span>
            </div>
          </div>

          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 340 340">
            {nodes.map((node) => {
              const x = 170 + radius * Math.cos((node.angle * Math.PI) / 180);
              const y = 170 + radius * Math.sin((node.angle * Math.PI) / 180);
              return (
                <line
                  key={node.label}
                  x1={170}
                  y1={170}
                  x2={x}
                  y2={y}
                  stroke="hsl(262 76% 57%)"
                  strokeWidth="0.5"
                  strokeOpacity={0.3}
                />
              );
            })}
          </svg>

          {/* Nodes */}
          {nodes.map((node, i) => {
            const x = radius * Math.cos((node.angle * Math.PI) / 180);
            const y = radius * Math.sin((node.angle * Math.PI) / 180);
            return (
              <motion.div
                key={node.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
                style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
              >
                <div className="w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center text-2xl glow-border">
                  {node.icon}
                </div>
                <span className="text-xs font-medium text-muted-foreground tracking-wide">{node.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SystemSection;
