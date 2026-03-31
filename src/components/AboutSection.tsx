import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 md:py-40 px-6 overflow-hidden bg-gradient-section-alt">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
        >
          We don't build eco-villages.
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gradient-green"
        >
          We design connected living systems.
        </motion.h2>
      </div>
    </section>
  );
};

export default AboutSection;
