import { motion } from "framer-motion";

const CredibilitySection = () => {
  return (
    <section className="py-20 px-6">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-muted-foreground text-base md:text-lg max-w-2xl mx-auto font-body"
      >
        Open for collaborations with eco-villages, municipalities, investors and future-focused partners.
      </motion.p>
    </section>
  );
};

export default CredibilitySection;
