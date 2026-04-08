import { useEffect } from "react";
import { motion } from "framer-motion";
import { Leaf, Droplets, Radio, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const About = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-sm text-primary tracking-[0.3em] uppercase mb-4 font-body">About</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-8 font-display">
              Building the foundation for future living
            </h1>
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6">
              369 Future Village started with a simple question: what if our homes could sustain themselves? What if the systems we rely on — water, food, energy — could work together intelligently, invisibly, and in harmony with nature?
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              We're a small, founder-driven company based in Scandinavia. We design, test, and build smart systems for homes and communities — starting with what matters most: water and food production.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Our approach is grounded in regenerative thinking. We don't force technology onto nature — we design systems where technology serves nature, creating environments that are more resilient, more efficient, and more beautiful over time.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeIn}>
            <p className="text-sm text-primary tracking-[0.3em] uppercase mb-4 font-body">What Drives Us</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-16 font-display">Nature. Technology. Integration.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: "Regenerative Design", desc: "Systems that give back more than they take — creating abundance through intelligent cycles." },
              { icon: Droplets, title: "Resource Independence", desc: "Reducing dependency on external infrastructure by managing water, food, and energy locally." },
              { icon: Radio, title: "Invisible Technology", desc: "Technology should feel natural — integrated, quiet, and working in the background." },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="p-8 rounded-2xl border border-border bg-card">
                <item.icon className="w-6 h-6 text-primary mb-4 drop-shadow-[0_0_6px_hsl(var(--primary)/0.5)]" strokeWidth={1.5} />
                <h3 className="text-lg font-bold mb-2 font-display">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6 font-display">We don't sell ideas. We build real systems.</h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              Every system we design is tested, iterated, and built to work in real environments — starting with our own homes and expanding into communities.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-primary text-primary-foreground text-sm font-semibold tracking-wide hover:scale-105 transition-all duration-300 glow-green-sm font-body"
            >
              Get in Touch <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
