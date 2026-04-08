import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:369futurevillage@gmail.com?subject=Contact from ${name}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-sm text-primary tracking-[0.3em] uppercase mb-4 font-body">Contact</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6 font-display">
              Let's build the future together
            </h1>
            <p className="text-muted-foreground font-body leading-relaxed mb-12">
              Whether you're a homeowner, community leader, or just curious about regenerative living — we'd love to hear from you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 font-body">Name</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors font-body text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 font-body">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors font-body text-sm"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 font-body">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors font-body text-sm resize-none"
                  placeholder="Tell us about your project or idea..."
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center gap-3 px-10 py-4 rounded-full bg-primary text-primary-foreground text-sm font-semibold tracking-wide hover:scale-105 transition-all duration-300 glow-green-sm font-body"
              >
                Send Message
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </form>

            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center gap-3 text-sm text-muted-foreground font-body">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:369futurevillage@gmail.com" className="hover:text-primary transition-colors">369futurevillage@gmail.com</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
