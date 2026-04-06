import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Wifi, Droplets, Smartphone, Eye, Timer, Plane, Leaf, Sparkles, ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/smart-garden-hero.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const SmartGarden = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[85vh] flex items-end">
        <img src={heroImg} alt="Smart Garden — automated garden system" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link to="/" className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors mb-8 font-body">
              <ArrowLeft size={14} /> Back
            </Link>
            <p className="text-sm text-primary tracking-[0.3em] uppercase mb-4 font-body">Smart Garden</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6 font-display">
              Smart garden systems<br />for modern homes
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl font-body leading-relaxed mb-8">
              Automated watering, healthier plants, and a simple first step toward a more self-sustaining garden.
            </p>
            <a
              href="mailto:369futurevillage@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold tracking-wide hover:scale-105 transition-all duration-300 glow-green-sm font-body"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </section>

      {/* What It Is */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeIn}>
            <p className="text-sm text-primary tracking-[0.3em] uppercase mb-4 font-body">What It Is</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6 font-display">A simple, automated irrigation system</h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              The Smart Garden is a straightforward system that automates watering for your garden beds. Sensors monitor soil moisture, and drip irrigation delivers water exactly where and when it's needed — no manual work required.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeIn}>
            <p className="text-sm text-primary tracking-[0.3em] uppercase mb-4 font-body">What You Get</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-16 font-display">Less work. Healthier plants. Smarter water use.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Timer, title: "Saves Time", desc: "No more manual watering or guesswork." },
              { icon: Leaf, title: "Healthier Plants", desc: "Data-driven care for stronger growth." },
              { icon: Droplets, title: "Water Efficiency", desc: "Use only what's needed — nothing wasted." },
              { icon: Plane, title: "Works on Vacation", desc: "Leave for weeks. Your garden stays perfect." },
            ].map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
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

      {/* How It Works */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeIn}>
            <p className="text-sm text-primary tracking-[0.3em] uppercase mb-4 font-body">Process</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-16 font-display">How it works</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Assessment", desc: "We map your garden, soil conditions and water access." },
              { step: "02", title: "Installation", desc: "Sensors and drip irrigation are set up — clean and discreet." },
              { step: "03", title: "Automation", desc: "The system runs on its own. You enjoy the results." },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
              >
                <span className="text-4xl font-bold text-primary/20 font-display">{s.step}</span>
                <h3 className="text-lg font-bold mt-2 mb-2 font-display">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilot Offer */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <p className="text-sm text-primary tracking-[0.3em] uppercase mb-4 font-body">Pilot Program</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6 font-display">Join our early adopter program</h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              We're working with a limited number of homeowners to test, refine and improve the Smart Garden system in real conditions.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Early adopters get priority access, lower cost, and the chance to co-create the next generation of automated garden systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center">
        <motion.h2 {...fadeIn} className="text-2xl md:text-4xl font-bold tracking-tight mb-8 font-display">
          Ready to start?
        </motion.h2>
        <a
          href="mailto:369futurevillage@gmail.com"
          className="group inline-flex items-center gap-3 px-10 py-4 rounded-full bg-primary text-primary-foreground text-sm font-semibold tracking-wide hover:scale-105 transition-all duration-300 glow-green-sm font-body"
        >
          Apply for Pilot
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default SmartGarden;
