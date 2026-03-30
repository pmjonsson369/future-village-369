import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.08] tracking-tight mb-8"
        >
          Building the Future of Regenerative Living
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-12"
        >
          We design intelligent eco-systems for villages, communities and future cities.
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="inline-block px-8 py-3.5 rounded-full bg-primary text-primary-foreground text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
        >
          Work With Me
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
