import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 md:py-40 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight mb-8"
        >
          We don't build eco-villages.
          <br />
          <span className="text-muted-foreground">We design connected living systems.</span>
        </motion.h2>
      </div>
    </section>
  );
};

export default AboutSection;
