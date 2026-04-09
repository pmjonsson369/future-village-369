import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Search, Droplets, Layout, Leaf, Sparkles, CheckCircle } from "lucide-react";
import heroImg from "@/assets/garden-analysis-hero.jpg";
import planImg from "@/assets/garden-analysis-plan.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const SmartGardenAnalysis = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[85vh] flex items-end">
        <img src={heroImg} alt="Smart Garden Analysis" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link to="/smart-growing-systems" className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors mb-8 font-body">
              <ArrowLeft size={14} /> Smart Growing Systems
            </Link>
            <p className="text-sm text-primary tracking-[0.3em] uppercase mb-4 font-body">Smart Garden Analysis</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6 font-display">
              Understand your garden.<br />Then transform it.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl font-body leading-relaxed mb-8">
              A personalized analysis of your outdoor space — covering layout, water flow, functionality, and visual harmony. The foundation for a smarter garden.
            </p>
            <a
              href="mailto:369futurevillage@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold tracking-wide hover:scale-105 transition-all duration-300 glow-green-sm font-body"
            >
              Book an Analysis
            </a>
          </motion.div>
        </div>
      </section>

      {/* What It Is */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeIn}>
            <p className="text-sm text-primary tracking-[0.3em] uppercase mb-4 font-body">What It Is</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6 font-display">A professional assessment of your outdoor space</h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              Before building anything, we start by understanding what you have. The Smart Garden Analysis is a detailed review of your garden's current state — its layout, water conditions, sun exposure, soil quality, and overall flow. We identify what works, what doesn't, and where the real opportunities are.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div {...fadeIn} className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img src={planImg} alt="Garden analysis plan" loading="lazy" width={1024} height={768} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }} className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img src={heroImg} alt="Garden analysis on site" loading="lazy" width={1920} height={1080} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* What We Analyze */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeIn}>
            <p className="text-sm text-primary tracking-[0.3em] uppercase mb-4 font-body">What We Analyze</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-16 font-display">A complete picture of your garden</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Layout, title: "Layout & Flow", desc: "How space is used, pathways, zones, and overall structure." },
              { icon: Droplets, title: "Water & Drainage", desc: "Where water collects, flows, and where it's wasted." },
              { icon: Leaf, title: "Planting & Soil", desc: "Soil conditions, sun exposure, and planting potential." },
              { icon: Sparkles, title: "Visual Harmony", desc: "Design coherence, materials, and aesthetic improvements." },
            ].map((b, i) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <b.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-bold mb-2 font-display">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeIn}>
            <p className="text-sm text-primary tracking-[0.3em] uppercase mb-4 font-body">What You Get</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-10 font-display">A clear plan for your garden</h2>
          </motion.div>
          <div className="space-y-6">
            {[
              "Detailed assessment of your current garden layout and conditions",
              "Water flow analysis with suggestions for improvement",
              "Recommendations for planting zones based on sun and soil",
              "Visual direction for a more harmonious outdoor space",
              "Actionable steps — from quick wins to long-term improvements",
              "Foundation for future Smart Garden system integration",
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4 }} className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <p className="text-muted-foreground font-body leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeIn}>
            <p className="text-sm text-primary tracking-[0.3em] uppercase mb-4 font-body">Process</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-16 font-display">Simple, structured, actionable</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Book a Session", desc: "We schedule a visit or remote consultation to understand your space." },
              { step: "02", title: "On-Site Analysis", desc: "We map your garden — water, soil, light, layout, and design flow." },
              { step: "03", title: "Receive Your Plan", desc: "A clear report with insights, recommendations, and next steps." },
            ].map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.5 }}>
                <span className="text-4xl font-bold text-primary/20 font-display">{s.step}</span>
                <h3 className="text-lg font-bold mt-2 mb-2 font-display">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center">
        <motion.h2 {...fadeIn} className="text-2xl md:text-4xl font-bold tracking-tight mb-8 font-display">
          Ready to understand your garden's potential?
        </motion.h2>
        <a
          href="mailto:369futurevillage@gmail.com"
          className="group inline-flex items-center gap-3 px-10 py-4 rounded-full bg-primary text-primary-foreground text-sm font-semibold tracking-wide hover:scale-105 transition-all duration-300 glow-green-sm font-body"
        >
          Book an Analysis
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default SmartGardenAnalysis;