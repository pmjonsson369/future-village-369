import { motion } from "framer-motion";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32">
      <div className="container max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-secondary text-sm tracking-[0.25em] uppercase mb-4"
        >
          Projects
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display font-bold mb-16"
        >
          Upgrading <span className="text-gradient">real eco-villages</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl bg-card border border-border p-8 md:p-12 glow-border"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-secondary animate-pulse-glow" />
            <span className="text-sm text-secondary tracking-wide uppercase">Active Project</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Suderbyn Ecovillage
          </h3>

          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl">
            A living laboratory on the island of Gotland, Sweden. We're integrating AI-driven resource
            management, regenerative food systems, and smart energy grids into an existing community
            — proving that the future doesn't require starting over.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Smart Water", icon: "💧" },
              { label: "Solar Grid", icon: "⚡" },
              { label: "Food Forest", icon: "🌱" },
              { label: "AI Systems", icon: "🧠" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl bg-muted/50 border border-border p-4 text-center">
                <span className="text-2xl block mb-2">{item.icon}</span>
                <span className="text-sm text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
