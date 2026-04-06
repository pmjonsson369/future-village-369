import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const StartHereSection = () => {
  return (
    <section className="py-32 md:py-40 px-6 bg-gradient-section">
      <div className="max-w-5xl mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Homeowners */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-border bg-card p-10 md:p-12 flex flex-col"
          >
            <h3 className="text-2xl font-bold mb-4">For Homeowners</h3>
            <p className="text-muted-foreground leading-relaxed font-body mb-8 flex-1">
              Start with a smart garden system — automated watering, simple setup, and a first step toward a more self-sustaining home.
            </p>
            <Link
              to="/smart-garden"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold tracking-wide hover:scale-105 transition-all duration-300 glow-green-sm font-body w-fit"
            >
              Get Started <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* Eco-villages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="rounded-2xl border border-border bg-card p-10 md:p-12 flex flex-col"
          >
            <h3 className="text-2xl font-bold mb-4">For Eco-Villages</h3>
            <p className="text-muted-foreground leading-relaxed font-body mb-8 flex-1">
              Start with a lightweight pilot to map water systems, understand resource flows, and build a foundation for future development.
            </p>
            <a
              href="mailto:369futurevillage@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-border text-sm font-semibold tracking-wide text-foreground/80 hover:border-primary/40 hover:text-foreground transition-all duration-300 font-body w-fit"
            >
              Book a Call <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StartHereSection;
