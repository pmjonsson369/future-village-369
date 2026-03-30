import { motion } from "framer-motion";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 md:py-40 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-muted-foreground tracking-widest uppercase mb-6 text-center"
        >
          Pilot Project
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight text-center mb-6"
        >
          Suderbyn Ecovillage, Sweden
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-lg text-center max-w-xl mx-auto"
        >
          System mapping and optimization of an existing eco-community on the island of Gotland.
        </motion.p>
      </div>
    </section>
  );
};

export default ProjectsSection;
