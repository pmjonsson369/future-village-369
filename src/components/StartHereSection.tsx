import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "Smart Garden",
    text: "A simple, real starting point — automated watering and a healthier, low-maintenance garden.",
    btn: "Learn More",
    href: "/smart-garden",
    isEmail: false,
  },
  {
    title: "Smart Villa",
    text: "A connected home system combining water, growing and future automation.",
    btn: "Explore",
    href: "/smart-villa",
    isEmail: false,
  },
  {
    title: "Eco-Villages",
    text: "Pilot projects for mapping and connecting systems in eco-communities.",
    btn: "Book a Call",
    href: "mailto:369futurevillage@gmail.com",
    isEmail: true,
  },
];

const StartHereSection = () => {
  return (
    <section className="py-32 md:py-40 px-6 bg-gradient-section">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-primary tracking-[0.3em] uppercase mb-6 text-center font-body"
        >
          Start Here
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-center mb-20"
        >
          Where do you begin?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {columns.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="rounded-2xl border border-border bg-card p-10 flex flex-col"
            >
              <h3 className="text-xl font-bold mb-4">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-body mb-8 flex-1">{c.text}</p>
              {c.isEmail ? (
                <a
                  href={c.href}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-border text-sm font-semibold tracking-wide text-foreground/80 hover:border-primary/40 hover:text-foreground transition-all duration-300 font-body w-fit"
                >
                  {c.btn} <ArrowRight size={14} />
                </a>
              ) : (
                <Link
                  to={c.href}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold tracking-wide hover:scale-105 transition-all duration-300 glow-green-sm font-body w-fit"
                >
                  {c.btn} <ArrowRight size={14} />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartHereSection;
