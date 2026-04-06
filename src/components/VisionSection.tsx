import { motion } from "framer-motion";
import visionBg from "@/assets/vision-bg.jpg";

const VisionSection = () => {
  return (
    <section id="vision" className="relative py-40 md:py-56 px-6 overflow-hidden">
      <img
        src={visionBg}
        alt="Futuristic regenerative village at dusk"
        loading="lazy"
        width={1920}
        height={800}
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-primary tracking-[0.3em] uppercase mb-8 font-body"
        >
          The Vision
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight glow-text"
        >
          A future where homes produce their own food, manage their own water, and run on intelligent systems — by default.
        </motion.h2>
      </div>
    </section>
  );
};

export default VisionSection;
