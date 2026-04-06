import { motion } from "framer-motion";
import { Home, Sprout, Trees, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import villaImg from "@/assets/villa-module.jpg";
import gardenImg from "@/assets/smart-garden-hero.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const modules = [
  {
    label: "Smart Garden",
    desc: "Automated irrigation, healthier plants, and a simple first step toward self-sustaining food production.",
    icon: Sprout,
    image: gardenImg,
    href: "/smart-garden",
  },
  {
    label: "Smart Villa",
    desc: "A connected home system where water, growing and automation work together for a more self-sustaining villa.",
    icon: Home,
    image: villaImg,
    href: "/smart-villa",
  },
  {
    label: "Eco-Villages",
    desc: "Pilot projects for mapping water systems, connecting growing areas and building smarter communities.",
    icon: Trees,
    image: heroBg,
    href: "/eco-villages",
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
          Our Systems
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-center mb-4"
        >
          Three systems. One vision.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-20 font-body"
        >
          From a single garden to an entire village — scalable systems for every level of self-sustaining living.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modules.map((m, i) => (
            <Link key={m.label} to={m.href}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 hover:-translate-y-1 transition-all duration-500 cursor-pointer h-full"
              >
                <div className="relative h-56 overflow-hidden">
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

                <div className="relative p-8">
                  <m.icon className="w-6 h-6 text-primary mb-4 drop-shadow-[0_0_6px_hsl(var(--primary)/0.6)]" strokeWidth={1.5} />
                  <h3 className="text-lg font-bold mb-2">{m.label}</h3>
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
