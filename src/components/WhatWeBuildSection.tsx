import { motion } from "framer-motion";
import { Droplets, Sprout, Radio } from "lucide-react";

const focuses = [
  {
    icon: Sprout,
    title: "Smart Garden Systems",
    desc: "Automated irrigation and monitoring for effortless, self-sustaining food production.",
  },
  {
    icon: Droplets,
    title: "Water Flow Mapping",
    desc: "Mapping and optimizing water systems for homes and communities.",
  },
  {
    icon: Radio,
    title: "Connected Living Design",
    desc: "Early-stage system design for intelligent, resource-efficient environments.",
  },
];

const WhatWeBuildSection = () => {
  return (
    <section className="py-32 md:py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-primary tracking-[0.3em] uppercase mb-6 text-center font-body"
        >
          What We Do
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-center mb-6"
        >
          What we are building
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-20 font-body"
        >
          We are currently developing and testing simple, scalable systems that help homes and eco-villages become more self-sustaining.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {focuses.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="rounded-2xl border border-border bg-card p-10 hover:border-primary/30 transition-all duration-500"
            >
              <f.icon className="w-6 h-6 text-primary mb-6 drop-shadow-[0_0_6px_hsl(var(--primary)/0.6)]" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold mb-3">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuildSection;
