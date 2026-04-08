import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Smartphone, Eye, Sparkles, Timer, Leaf, Plane, Wifi, Thermometer, Sun, Cpu } from "lucide-react";
import heroImg from "@/assets/garden-outdoor-1.jpg";
import gardenBeds from "@/assets/garden-beds.jpg";
import gardenCourtyard from "@/assets/garden-courtyard.jpg";
import gardenCloseup from "@/assets/garden-closeup.jpg";
import gardenEvening from "@/assets/garden-evening.jpg";
import gardenLights from "@/assets/garden-lights.jpg";
import gardenOutdoor2 from "@/assets/garden-outdoor-2.jpg";
import greenhouseDark from "@/assets/greenhouse-dark.jpg";
import greenhouseWood from "@/assets/greenhouse-wood.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const SmartGrowingSystems = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[85vh] flex items-end">
        <img src={heroImg} alt="Smart Growing Systems" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-sm text-primary tracking-[0.3em] uppercase mb-4 font-body">Smart Growing Systems</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6 font-display">
              From garden to greenhouse.<br />Grow smarter.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl font-body leading-relaxed">
              A progressive system for modern food production — starting with a simple smart garden and evolving into year-round climate-controlled growing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* SMART GARDEN SECTION */}
      {/* ═══════════════════════════════════════════ */}

      <section id="smart-garden" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeIn}>
            <p className="text-sm text-primary tracking-[0.3em] uppercase mb-4 font-body">Smart Garden</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 font-display">A new way of growing</h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-2">Where nature and technology work as one.</p>
            <p className="text-muted-foreground font-body leading-relaxed">
              The Smart Garden is a fully automated outdoor growing system designed for modern homeowners who want a beautiful, productive garden without the constant effort. Sensors monitor soil conditions, drip irrigation delivers water exactly where it's needed, and the entire system runs quietly in the background — clean, invisible, and effortless.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Garden Gallery */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div {...fadeIn} className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img src={gardenBeds} alt="Raised garden beds with lush greenery" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            <p className="absolute bottom-4 left-4 text-sm font-body text-foreground/80">Clean raised beds, thriving plants</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }} className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img src={gardenCourtyard} alt="Garden courtyard" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            <p className="absolute bottom-4 left-4 text-sm font-body text-foreground/80">Integrated landscape design</p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeIn}>
            <p className="text-sm text-primary tracking-[0.3em] uppercase mb-4 font-body">How It Works</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-16 font-display">Technology that disappears</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Droplets, title: "Automated Irrigation", desc: "Soil sensors trigger drip watering exactly when and where it's needed." },
              { icon: Smartphone, title: "App-Controlled", desc: "Monitor and adjust your garden from anywhere, anytime." },
              { icon: Eye, title: "Hidden Infrastructure", desc: "No visible cables, no messy tech — everything is built in." },
              { icon: Sparkles, title: "Future-Ready Design", desc: "Modular architecture that grows with your ambitions." },
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

      {/* Garden Gallery Row 2 */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[gardenCloseup, gardenEvening, gardenLights].map((img, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative rounded-2xl overflow-hidden aspect-[3/4]">
              <img src={img} alt="Smart garden detail" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeIn}>
            <p className="text-sm text-primary tracking-[0.3em] uppercase mb-4 font-body">Benefits</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-16 font-display">Less work. Healthier plants. Smarter water use.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { icon: Timer, title: "Saves Time", desc: "No more manual watering or guesswork." },
              { icon: Plane, title: "Works on Vacation", desc: "Leave for weeks. Your garden stays perfect." },
              { icon: Leaf, title: "Healthier Plants", desc: "Data-driven care for stronger growth." },
              { icon: Droplets, title: "Clean Design", desc: "Modern aesthetics, no visible tech." },
              { icon: Wifi, title: "Scalable System", desc: "Start small, expand as you go." },
            ].map((b, i) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }} className="text-center">
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

      {/* Garden Vision */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <p className="text-sm text-primary tracking-[0.3em] uppercase mb-4 font-body">Vision</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6 font-display">The first step toward something bigger</h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              Smart Garden is your entry point into self-sustaining living. From here, the system expands — into greenhouses, water management, and fully integrated smart environments. Start simple. Grow further.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Full-width Garden Image */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeIn} className="relative rounded-2xl overflow-hidden aspect-[21/9]">
            <img src={gardenOutdoor2} alt="Scandinavian backyard with smart garden" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* SMART GREENHOUSE SECTION */}
      {/* ═══════════════════════════════════════════ */}

      <section id="smart-greenhouse" className="py-24 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeIn}>
            <p className="text-sm text-primary tracking-[0.3em] uppercase mb-4 font-body">Smart Greenhouse</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 font-display">Grow year-round. No compromises.</h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              The Smart Greenhouse is the natural evolution from the Smart Garden. It brings your growing system indoors — with full climate control, automated irrigation, and sensor-driven monitoring. Grow vegetables, herbs, and greens year-round regardless of weather, season, or climate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Greenhouse Image */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div {...fadeIn} className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img src={greenhouseDark} alt="Smart greenhouse exterior" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            <p className="absolute bottom-4 left-4 text-sm font-body text-foreground/80">Climate-controlled environment</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }} className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img src={greenhouseWood} alt="Smart greenhouse interior" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            <p className="absolute bottom-4 left-4 text-sm font-body text-foreground/80">Sensor-driven growing, year-round</p>
          </motion.div>
        </div>
      </section>

      {/* Greenhouse Features */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeIn}>
            <p className="text-sm text-primary tracking-[0.3em] uppercase mb-4 font-body">Features</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-16 font-display">Intelligent growing, simplified</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Thermometer, title: "Climate Control", desc: "Automated temperature and humidity management for optimal growth." },
              { icon: Sun, title: "Year-Round Growing", desc: "Grow through winter, spring, summer, and fall — without interruption." },
              { icon: Droplets, title: "Automated Irrigation", desc: "Smart watering integrated with soil sensors and weather data." },
              { icon: Cpu, title: "Sensor Intelligence", desc: "Real-time monitoring of soil, air, light, and water levels." },
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

      {/* Progression */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeIn}>
            <p className="text-sm text-primary tracking-[0.3em] uppercase mb-4 font-body">Progression</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-16 font-display">From garden to greenhouse</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Smart Garden", desc: "Start outdoors with automated irrigation and sensor-driven care." },
              { step: "02", title: "Smart Greenhouse", desc: "Extend into a controlled environment for year-round production." },
              { step: "03", title: "Full Integration", desc: "Connect water, energy, and growing into one self-sustaining system." },
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
          Ready to start growing smarter?
        </motion.h2>
        <a
          href="mailto:369futurevillage@gmail.com"
          className="group inline-flex items-center gap-3 px-10 py-4 rounded-full bg-primary text-primary-foreground text-sm font-semibold tracking-wide hover:scale-105 transition-all duration-300 glow-green-sm font-body"
        >
          Book a Call
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default SmartGrowingSystems;
