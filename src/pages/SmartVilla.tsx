import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Droplets, Sprout, Radio, Home, Zap, TrendingUp, ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/villa-exterior-2.jpg";
import villaExterior1 from "@/assets/villa-exterior-1.jpg";
import gardenInterior1 from "@/assets/villa-garden-interior-1.jpg";
import gardenInterior2 from "@/assets/villa-garden-interior-2.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const systems = [
  { icon: Droplets, title: "Water Management", desc: "Rainwater collection, greywater recycling and smart distribution." },
  { icon: Sprout, title: "Smart Garden", desc: "Automated irrigation and monitoring for year-round food production." },
  { icon: Radio, title: "Automation", desc: "Sensors, data and intelligent control — future-ready from day one." },
];

const SmartVilla = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[85vh] flex items-end">
        <img src={heroImg} alt="Smart Villa — self-sustaining Scandinavian home" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link to="/" className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors mb-8 font-body">
              <ArrowLeft size={14} /> Back
            </Link>
            <p className="text-sm text-primary tracking-[0.3em] uppercase mb-4 font-body">Smart Villa</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6 font-display">
              The future of living —<br />starting at home
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl font-body leading-relaxed mb-8">
              A connected system where water, growing, and technology work together to create a more self-sustaining villa.
            </p>
            <a
              href="#systems"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold tracking-wide hover:scale-105 transition-all duration-300 glow-green-sm font-body"
            >
              Explore the System
            </a>
          </motion.div>
        </div>
      </section>

      {/* What It Is */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeIn}>
            <p className="text-sm text-primary tracking-[0.3em] uppercase mb-4 font-body">What It Is</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6 font-display">An integrated system for home environments</h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              The Smart Villa brings together water management, food production and automation into one connected system — designed for Scandinavian conditions. Instead of separate solutions, everything works as one intelligent whole.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Systems */}
      <section id="systems" className="py-24 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeIn}>
            <p className="text-sm text-primary tracking-[0.3em] uppercase mb-4 font-body">Systems Included</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-16 font-display">Three systems working as one</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {systems.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-8 rounded-2xl border border-border bg-card"
              >
                <s.icon className="w-6 h-6 text-primary mb-4 drop-shadow-[0_0_6px_hsl(var(--primary)/0.5)]" strokeWidth={1.5} />
                <h3 className="text-lg font-bold mb-2 font-display">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Gallery */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeIn}>
            <p className="text-sm text-primary tracking-[0.3em] uppercase mb-4 font-body">The Smart Villa Experience</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-12 font-display">Where nature meets technology</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={villaExterior1} alt="Scandinavian smart villa with solar panels and natural garden" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <p className="absolute bottom-4 left-4 text-sm font-body text-foreground/80">Solar-integrated architecture</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }} className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={gardenInterior1} alt="Smart greenhouse with raised beds and monitoring system" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <p className="absolute bottom-4 left-4 text-sm font-body text-foreground/80">Automated growing environment</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }} className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={gardenInterior2} alt="Smart garden interior with sensor displays and raised beds" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <p className="absolute bottom-4 left-4 text-sm font-body text-foreground/80">Sensor-driven food production</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }} className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={heroImg} alt="Modern Scandinavian villa with integrated garden and water features" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <p className="absolute bottom-4 left-4 text-sm font-body text-foreground/80">Integrated water & landscape design</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeIn}>
            <p className="text-sm text-primary tracking-[0.3em] uppercase mb-4 font-body">Why It Matters</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6 font-display">Less dependency. More control.</h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              A self-sustaining villa reduces your dependency on external infrastructure — giving you more control over water, food and resources. It's not about going off-grid. It's about building resilience into where you live.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Long-term, these systems lower costs, reduce waste, and create a home that works with nature instead of against it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Future Expansion */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <p className="text-sm text-primary tracking-[0.3em] uppercase mb-4 font-body">Future Vision</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6 font-display">Designed to grow</h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              The Smart Villa is built to expand. Future modules include energy systems, climate-responsive architecture, and deeper automation — turning your home into a fully intelligent living environment.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-8"
          >
            {[
              { icon: Zap, label: "Energy Systems" },
              { icon: Home, label: "Climate-Responsive" },
              { icon: TrendingUp, label: "Self-Optimizing" },
            ].map((f) => (
              <div key={f.label} className="text-center">
                <f.icon className="w-5 h-5 text-primary mx-auto mb-2" strokeWidth={1.5} />
                <p className="text-xs text-muted-foreground font-body">{f.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center">
        <motion.h2 {...fadeIn} className="text-2xl md:text-4xl font-bold tracking-tight mb-8 font-display">
          Interested in the Smart Villa system?
        </motion.h2>
        <a
          href="mailto:369futurevillage@gmail.com"
          className="group inline-flex items-center gap-3 px-10 py-4 rounded-full bg-primary text-primary-foreground text-sm font-semibold tracking-wide hover:scale-105 transition-all duration-300 glow-green-sm font-body"
        >
          Book a Call
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default SmartVilla;
