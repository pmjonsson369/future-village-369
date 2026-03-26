import { motion } from "framer-motion";
import SacredGeometry from "./SacredGeometry";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-32 overflow-hidden sacred-gradient">
      <SacredGeometry className="absolute right-0 bottom-0 animate-spin-slow" size={350} opacity={0.04} />

      <div className="container max-w-3xl text-center relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-secondary text-sm tracking-[0.25em] uppercase mb-4"
        >
          Collaborate
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display font-bold mb-6"
        >
          Join the <span className="text-gradient">movement</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-lg leading-relaxed mb-10"
        >
          We're looking for eco-villages ready to upgrade, companies aligned with regenerative systems,
          and visionaries who want to build the future of living — together.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          href="mailto:hello@369futurevillage.com"
          className="inline-block px-10 py-4 rounded-full bg-secondary/20 border border-secondary/40 text-foreground font-medium tracking-wide hover:bg-secondary/30 transition-all glow-secondary"
        >
          Get in Touch
        </motion.a>
      </div>
    </section>
  );
};

export default ContactSection;
