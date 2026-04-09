import { motion } from "framer-motion";
import { Droplets, Leaf, Zap, Radio } from "lucide-react";
import waterImg from "@/assets/water-system-realistic.jpg";
import foodImg from "@/assets/food-system-realistic.jpg";
import energyImg from "@/assets/energy-system-realistic.jpg";
import smartImg from "@/assets/smart-systems.jpg";

const systems = [
  { label: "Water", desc: "Closed-loop water harvesting, filtration and recycling systems", icon: Droplets, image: waterImg },
  { label: "Food", desc: "Regenerative food forests and vertical growing systems", icon: Leaf, image: foodImg },
  { label: "Energy", desc: "Solar, wind and battery storage integrated into architecture", icon: Zap, image: energyImg },
  { label: "Smart Systems", desc: "IoT monitoring, AI optimization and real-time data", icon: Radio, image: smartImg },
];

const SystemSection = () => {
  return (
    <section id="system" className="py-32 md:py-40 px-6 bg-gradient-section">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-primary tracking-[0.3em] uppercase mb-6 text-center font-body"
        >
          The System
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-center mb-6"
        >
          We design interconnected systems for water, food, energy and intelligent monitoring.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-20 font-body"
        >
          Each system works independently — and together as one intelligent, regenerative ecosystem.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {systems.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.label}
                  loading="lazy"
                  width={800}
                  height={1024}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>

              <div className="relative p-8">
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full bg-primary/0 group-hover:bg-primary/5 blur-[60px] transition-all duration-700" />

                <s.icon className="w-5 h-5 text-primary mb-4 drop-shadow-[0_0_6px_hsl(var(--primary)/0.6)]" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold mb-2">{s.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemSection;
