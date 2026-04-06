import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.img
        src={heroBg}
        alt="Futuristic eco-village at golden hour"
        width={1920}
        height={1080}
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] animate-glow-pulse" />

      <div className="relative z-10 max-w-4xl text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm tracking-[0.3em] uppercase text-primary/80 mb-8 font-body"
        >
          369 Future Village
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-8 glow-text"
        >
          Smart systems for self-sustaining homes and eco-villages
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-14 font-body"
        >
          Starting with water, food and automation — building the foundation for future living where nature and technology work as one.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/smart-garden"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-primary text-primary-foreground text-sm font-semibold tracking-wide hover:scale-105 transition-all duration-300 glow-green-sm font-body"
          >
            Explore Smart Garden <ArrowRight size={14} />
          </Link>
          <Link
            to="/eco-villages"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full border border-border text-sm font-semibold tracking-wide text-foreground/80 hover:border-primary/40 hover:text-foreground transition-all duration-300 font-body"
          >
            Explore Eco-Villages <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
