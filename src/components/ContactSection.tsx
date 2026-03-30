import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 md:py-40 px-6 border-t border-border">
      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-muted-foreground tracking-widest uppercase mb-6"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight mb-8"
        >
          Let's build together.
        </motion.h2>

        <motion.a
          href="mailto:hello@369futurevillage.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-8 py-3.5 rounded-full bg-primary text-primary-foreground text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
        >
          Get in Touch
        </motion.a>
      </div>
    </section>
  );
};

export default ContactSection;
