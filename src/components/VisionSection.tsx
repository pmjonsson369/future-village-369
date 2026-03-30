import { motion } from "framer-motion";

const VisionSection = () => {
  return (
    <section id="vision" className="py-32 md:py-40 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-muted-foreground tracking-widest uppercase mb-6"
        >
          The Vision
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight"
        >
          A new way of living, building and organizing society.
        </motion.h2>
      </div>
    </section>
  );
};

export default VisionSection;
