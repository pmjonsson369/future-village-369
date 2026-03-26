import { motion } from "framer-motion";
import SacredGeometry from "./SacredGeometry";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7 },
};

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <SacredGeometry className="absolute -right-20 top-10 animate-spin-slow" size={400} opacity={0.04} />

      <div className="container max-w-4xl">
        <motion.p {...fadeUp} className="text-secondary text-sm tracking-[0.25em] uppercase mb-4">
          About
        </motion.p>

        <motion.h2 {...fadeUp} className="text-4xl md:text-5xl font-display font-bold mb-8">
          Systems thinking
          <br />
          <span className="text-gradient">meets real-world action</span>
        </motion.h2>

        <motion.div {...fadeUp} className="space-y-6 text-muted-foreground text-lg leading-relaxed">
          <p>
            369 Future Village is led by a systems architect developing regenerative living infrastructure.
            The mission: connect water, energy, food, and communities into intelligent, self-sustaining ecosystems.
          </p>
          <p>
            This is not theory. Every concept is tested through real-world experimentation —
            upgrading existing eco-villages with practical, scalable solutions that prove the future of living is already possible.
          </p>
        </motion.div>

        <motion.p
          {...fadeUp}
          className="mt-12 text-xl md:text-2xl font-display font-semibold text-gradient"
        >
          "We don't build from scratch — we upgrade what already exists."
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
