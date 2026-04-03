import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Wifi, Droplets, Smartphone, Leaf, Timer, Plane, Sparkles, Eye, Zap, TrendingUp } from "lucide-react";
import heroImg from "@/assets/smart-garden-hero.jpg";
import overviewImg from "@/assets/smart-garden-overview.jpg";
import systemImg from "@/assets/smart-garden-system.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const features = [
  { icon: Wifi, title: "Wireless Sensors", desc: "Discrete soil moisture and temperature sensors hidden throughout your garden beds." },
  { icon: Droplets, title: "Automated Irrigation", desc: "AI-controlled drip lines deliver the exact amount of water each zone needs." },
  { icon: Smartphone, title: "App Control", desc: "Monitor and adjust everything from your phone — at home or on vacation." },
  { icon: Eye, title: "Hidden Technology", desc: "All hardware is concealed in valve boxes, underground, or mounted discreetly." },
];

const howItWorks = [
  { step: "01", title: "System Design", desc: "We map your garden and design a custom sensor and irrigation layout." },
  { step: "02", title: "Installation", desc: "Sensors, valves and drip lines are installed — all hidden from view." },
  { step: "03", title: "AI Calibration", desc: "The system learns your soil, plants and local climate patterns." },
  { step: "04", title: "Autopilot", desc: "Your garden runs itself. You enjoy the results." },
];

const benefits = [
  { icon: Timer, title: "Saves Time", desc: "No more manual watering or guesswork. The system handles everything." },
  { icon: Plane, title: "Works on Vacation", desc: "Leave for weeks — your garden stays perfectly maintained." },
  { icon: Leaf, title: "Healthier Plants", desc: "Data-driven care means stronger growth and less waste." },
  { icon: Sparkles, title: "Effortless Beauty", desc: "A stunning outdoor space without the daily effort." },
];

const SmartGarden = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[85vh] flex items-end">
        <img
          src={heroImg}
          alt="Smart Garden System — automated garden for Scandinavian homes"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors mb-8 font-body"
            >
              <ArrowLeft size={14} />
              Back
            </Link>
            <p className="text-sm text-primary tracking-[0.3em] uppercase mb-4 font-body">Smart Garden System</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6 font-display">
              The Self-Sustaining<br />Garden for Homeowners
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl font-body leading-relaxed">
              An intelligent outdoor system that waters, monitors and maintains your garden — so you don't have to.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Image */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn} className="relative rounded-2xl overflow-hidden">
            <img
              src={overviewImg}
              alt="Smart Garden system overview — sensors, control box, drip irrigation and app control"
              loading="lazy"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeIn}>
            <p className="text-sm text-primary tracking-[0.3em] uppercase mb-4 font-body">Technology</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 font-display">
              Invisible tech. Visible results.
            </h2>
            <p className="text-muted-foreground max-w-2xl mb-16 font-body">
              Every component is designed to disappear into your garden while delivering precise, automated care.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-8 rounded-2xl border border-border bg-card"
              >
                <f.icon className="w-6 h-6 text-primary mb-4 drop-shadow-[0_0_6px_hsl(var(--primary)/0.5)]" strokeWidth={1.5} />
                <h3 className="text-lg font-bold mb-2 font-display">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">{f.desc}</p>
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
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-16 font-display">
              How it works
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {howItWorks.map((s, i) => (
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

      {/* System Image */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn} className="relative rounded-2xl overflow-hidden">
            <img
              src={systemImg}
              alt="Smart Garden — solar panels, rainwater collection, smart monitoring and EV charging"
              loading="lazy"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeIn}>
            <p className="text-sm text-primary tracking-[0.3em] uppercase mb-4 font-body">Benefits</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 font-display">
              A beautiful garden — without the work.
            </h2>
            <p className="text-muted-foreground max-w-2xl mb-16 font-body">
              Designed for homeowners who want a stunning outdoor space without spending hours maintaining it.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
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

      {/* Future Vision */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <p className="text-sm text-primary tracking-[0.3em] uppercase mb-4 font-body">Future Vision</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6 font-display">
              Every home becomes a micro-ecosystem.
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              We envision a future where every villa, townhouse and apartment has an intelligent garden system — producing fresh food, conserving water and running entirely on renewable energy.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              The Smart Garden is the first step toward homes that give back more than they take.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-8 mt-16"
          >
            <div className="text-center">
              <Zap className="w-5 h-5 text-primary mx-auto mb-2" strokeWidth={1.5} />
              <p className="text-xs text-muted-foreground font-body">Solar Powered</p>
            </div>
            <div className="text-center">
              <Droplets className="w-5 h-5 text-primary mx-auto mb-2" strokeWidth={1.5} />
              <p className="text-xs text-muted-foreground font-body">Rainwater Harvesting</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-5 h-5 text-primary mx-auto mb-2" strokeWidth={1.5} />
              <p className="text-xs text-muted-foreground font-body">Self-Optimizing</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-lg max-w-xl mx-auto mb-8 font-body"
        >
          Interested in the Smart Garden System? Let's talk.
        </motion.p>
        <a
          href="mailto:369futurevillage@gmail.com"
          className="inline-flex items-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm tracking-wide hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-500 font-body"
        >
          Get in Touch
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default SmartGarden;
