import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Droplets, Sprout, Radio, Eye, Shield, TrendingUp, Zap, Home, ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/ecovillage-hero-4k.jpg";
import ecoImg2 from "@/assets/ecovillage-community.jpg";
import ecoImg3 from "@/assets/ecovillage-gardens.jpg";
import ecoImg4 from "@/assets/ecovillage-water.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const pilotSteps = [
  { step: "01", title: "Map Water Flow", desc: "Understand how water moves through the village — sources, usage and waste." },
  { step: "02", title: "Connect Growing Areas", desc: "Link garden beds and growing zones to shared monitoring." },
  { step: "03", title: "Add Simple Sensors", desc: "Soil moisture, water levels, and basic environmental data." },
  { step: "04", title: "Observe Over Time", desc: "Build a data foundation before making bigger decisions." },
];

const EcoVillages = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[85vh] flex items-end">
        <img src={heroImg} alt="Eco-village — regenerative community" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-sm text-primary tracking-[0.3em] uppercase mb-4 font-body">Ecovillages</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6 font-display">
              Smart systems<br />for eco-villages
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl font-body leading-relaxed mb-8">
              We help eco-villages understand, connect and evolve their water and growing systems — starting with simple pilots.
            </p>
            <a
              href="mailto:369futurevillage@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold tracking-wide hover:scale-105 transition-all duration-300 glow-green-sm font-body"
            >
              Book a Call
            </a>
          </motion.div>
        </div>
      </section>

      {/* What This Is */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeIn}>
            <p className="text-sm text-primary tracking-[0.3em] uppercase mb-4 font-body">What This Is</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6 font-display">System understanding — not disruption</h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              We don't come in with a fixed plan. We start by understanding the systems that already exist in your village — water flows, growing patterns, energy use — and help you see them clearly before making any changes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[ecoImg2, ecoImg3, ecoImg4].map((img, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={img} alt="Ecovillage community" loading="lazy" width={1920} height={1080} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pilot Approach */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeIn}>
            <p className="text-sm text-primary tracking-[0.3em] uppercase mb-4 font-body">Pilot Approach</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-16 font-display">Start small. Learn fast.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {pilotSteps.map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.5 }}>
                <span className="text-4xl font-bold text-primary/20 font-display">{s.step}</span>
                <h3 className="text-lg font-bold mt-2 mb-2 font-display">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeIn}>
            <p className="text-sm text-primary tracking-[0.3em] uppercase mb-4 font-body">Why It Matters</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-16 font-display">Stronger foundations for the long term</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Eye, title: "Better Understanding", desc: "See how water, soil and resources actually flow through your community." },
              { icon: Shield, title: "Less Manual Work", desc: "Automation handles routine tasks so people can focus on what matters." },
              { icon: TrendingUp, title: "Long-Term Resilience", desc: "Data-driven decisions create systems that get stronger over time." },
            ].map((b, i) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="p-8 rounded-2xl border border-border bg-card">
                <b.icon className="w-6 h-6 text-primary mb-4 drop-shadow-[0_0_6px_hsl(var(--primary)/0.5)]" strokeWidth={1.5} />
                <h3 className="text-lg font-bold mb-2 font-display">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <p className="text-sm text-primary tracking-[0.3em] uppercase mb-4 font-body">Future Vision</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6 font-display">From pilot to platform</h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              What starts as a simple pilot can evolve into a full village operating system — energy management, climate-responsive infrastructure, and semi-automated environments that learn and adapt.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex items-center justify-center gap-8">
            {[
              { icon: Zap, label: "Energy Systems" },
              { icon: Home, label: "Climate Infrastructure" },
              { icon: Radio, label: "Semi-Automated" },
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
          Ready to explore a pilot for your village?
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

export default EcoVillages;