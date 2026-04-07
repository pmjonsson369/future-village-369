import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Thermometer, Sun, Droplets, Cpu, Leaf, TrendingUp, ArrowUpRight, ArrowRight } from "lucide-react";
import heroImg from "@/assets/greenhouse-dark.jpg";
import greenhouseWood from "@/assets/greenhouse-wood.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const SmartGreenhouse = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[85vh] flex items-end">
        <img src={heroImg} alt="Smart Greenhouse — year-round growing" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link to="/smart-garden" className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors mb-8 font-body">
              <ArrowLeft size={14} /> Smart Garden
            </Link>
            <p className="text-sm text-primary tracking-[0.3em] uppercase mb-4 font-body">Smart Greenhouse</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6 font-display">
              Grow year-round.<br />No compromises.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl font-body leading-relaxed mb-8">
              A climate-controlled growing environment that extends your garden through every season — automated, intelligent, and beautifully designed.
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

      {/* What It Is */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeIn}>
            <p className="text-sm text-primary tracking-[0.3em] uppercase mb-4 font-body">What It Is</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6 font-display">The next level of smart growing</h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              The Smart Greenhouse is the natural evolution from the Smart Garden. It brings your growing system indoors — with full climate control, automated irrigation, and sensor-driven monitoring. Grow vegetables, herbs, and greens year-round regardless of weather, season, or climate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeIn} className="relative rounded-2xl overflow-hidden aspect-[16/9]">
            <img src={greenhouseWood} alt="Smart greenhouse interior with raised beds and monitoring" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            <p className="absolute bottom-4 left-4 text-sm font-body text-foreground/80">Sensor-driven growing, year-round</p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
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

      {/* Progression */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeIn}>
            <p className="text-sm text-primary tracking-[0.3em] uppercase mb-4 font-body">Progression</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-16 font-display">From garden to greenhouse</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Smart Garden", desc: "Start outdoors with automated irrigation and sensor-driven care.", link: "/smart-garden" },
              { step: "02", title: "Smart Greenhouse", desc: "Extend into a controlled environment for year-round production.", link: null },
              { step: "03", title: "Full Integration", desc: "Connect water, energy, and growing into one self-sustaining system.", link: null },
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
                <p className="text-sm text-muted-foreground leading-relaxed font-body mb-3">{s.desc}</p>
                {s.link && (
                  <Link to={s.link} className="inline-flex items-center gap-2 text-xs text-primary font-medium tracking-wide font-body hover:gap-3 transition-all">
                    Learn more <ArrowRight size={12} />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeIn}>
            <p className="text-sm text-primary tracking-[0.3em] uppercase mb-4 font-body">Why It Matters</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6 font-display">Food independence starts here</h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              A Smart Greenhouse gives you control over your food supply — fresh, organic produce from your own home, in any climate, any season. Combined with a Smart Garden, you build a complete growing system that reduces waste, cuts costs, and connects you closer to what you eat.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              It's the foundation for a truly self-sustaining home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center">
        <motion.h2 {...fadeIn} className="text-2xl md:text-4xl font-bold tracking-tight mb-8 font-display">
          Ready to grow year-round?
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

export default SmartGreenhouse;
