import { motion } from "framer-motion";
import { Home, Sprout, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import villaImg from "@/assets/villa-module.jpg";
import gardenImg from "@/assets/smart-garden.jpg";

const modules = [
  {
    label: "Scandinavian Self-Sustaining Villa",
    desc: "A fully self-sustaining living unit designed for Nordic conditions — combining architecture, energy, water and food into one intelligent system.",
    icon: Home,
    image: villaImg,
    href: "/future-villa",
  },
  {
    label: "Smart Garden System",
    desc: "An intelligent food production system using AI, automation and regenerative design to grow clean, local food anywhere.",
    icon: Sprout,
    image: gardenImg,
    href: "/smart-garden",
  },
];

const ModulesSection = () => {
  return (
    <section id="modules" className="py-32 md:py-40 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-primary tracking-[0.3em] uppercase mb-6 text-center font-body"
        >
          Modules of the Future
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-center mb-4"
        >
          We don't just design systems.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-20 font-body"
        >
          We build the components of a new way of living.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modules.map((m, i) => (
            <Link key={m.label} to={m.href}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 hover:-translate-y-1 transition-all duration-500 cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.label}
                    loading="lazy"
                    width={1280}
                    height={720}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                </div>

                <div className="relative p-10">
                  <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-primary/0 group-hover:bg-primary/5 blur-[80px] transition-all duration-700" />

                  <m.icon className="w-6 h-6 text-primary mb-5 drop-shadow-[0_0_6px_hsl(var(--primary)/0.6)]" strokeWidth={1.5} />
                  <h3 className="text-xl font-bold mb-3">{m.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-body mb-4">{m.desc}</p>
                  <span className="inline-flex items-center gap-2 text-xs text-primary font-medium tracking-wide font-body group-hover:gap-3 transition-all duration-300">
                    Learn More <ArrowRight size={14} />
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
