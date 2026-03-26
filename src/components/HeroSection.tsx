import { motion } from "framer-motion";
import heroImage from "@/assets/hero-village.jpg";
import SacredGeometry from "./SacredGeometry";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Futuristic eco-village"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Sacred geometry decorations */}
      <SacredGeometry className="absolute top-10 right-10 animate-spin-slow" size={300} opacity={0.06} />
      <SacredGeometry className="absolute bottom-20 left-10 animate-spin-slow" size={200} opacity={0.04} />

      <div className="relative container text-center z-10 pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm tracking-[0.3em] uppercase text-secondary mb-6"
        >
          AI × Nature × Community
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.05] tracking-tight mb-8"
        >
          Building the
          <br />
          <span className="text-gradient">Future of Living</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Regenerative eco-systems powered by intelligence, rooted in nature, built for community.
        </motion.p>

        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="inline-block px-8 py-4 rounded-full bg-primary/20 border border-primary/40 text-primary-foreground font-medium tracking-wide hover:bg-primary/30 transition-all glow-primary"
        >
          Explore the Vision
        </motion.a>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
