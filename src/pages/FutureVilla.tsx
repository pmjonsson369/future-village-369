import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Home, Zap, Droplets, Sprout } from "lucide-react";
import heroImg from "@/assets/future-villa-hero.jpg";
import ecoImg from "@/assets/future-villa-eco.jpg";
import interiorImg from "@/assets/future-villa-interior.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  { icon: Zap, title: "Energy", desc: "Solar, wind and battery storage designed for Nordic conditions." },
  { icon: Droplets, title: "Water", desc: "Rainwater harvesting, greywater recycling and purification systems." },
  { icon: Sprout, title: "Food", desc: "Integrated greenhouse and smart garden for year-round food production." },
  { icon: Home, title: "Architecture", desc: "Passive house design with natural materials and smart climate control." },
];

const FutureVilla = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[85vh] flex items-end">
        <img
          src={heroImg}
          alt="Future Villa — Scandinavian self-sustaining home in Nordic forest"
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
            <p className="text-sm text-primary tracking-[0.3em] uppercase mb-4 font-body">Module 01</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6 font-display">
              Future Villa
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl font-body leading-relaxed">
              A fully self-sustaining living unit designed for Nordic conditions — combining architecture, energy, water and food into one intelligent system.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold tracking-tight mb-16 font-display"
          >
            One system. Four pillars.
          </motion.h2>
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
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden aspect-[16/10]"
          >
            <img
              src={ecoImg}
              alt="Eco architecture integrated into Nordic nature"
              loading="lazy"
              width={1280}
              height={720}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <p className="absolute bottom-6 left-6 text-sm font-body text-foreground/80">Architecture — Nature-integrated design</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden aspect-[16/10]"
          >
            <img
              src={interiorImg}
              alt="Minimalist Nordic interior with natural materials"
              loading="lazy"
              width={1280}
              height={720}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <p className="absolute bottom-6 left-6 text-sm font-body text-foreground/80">Interior — Natural materials & smart climate</p>
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
          Interested in the Future Villa system? Let's talk.
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

export default FutureVilla;
