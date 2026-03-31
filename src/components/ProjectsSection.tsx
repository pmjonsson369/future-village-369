import { motion } from "framer-motion";
import suderbynImg from "@/assets/suderbyn-project.jpg";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-primary tracking-[0.3em] uppercase mb-6 text-center font-body"
        >
          Early Case Study
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold leading-tight tracking-tight text-center mb-4"
        >
          Suderbyn Ecovillage, Sweden
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-base text-center max-w-lg mx-auto mb-12 font-body"
        >
          Initial system mapping and optimization of an existing eco-community.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden border border-border group"
        >
          <img
            src={suderbynImg}
            alt="Suderbyn Ecovillage on Gotland, Sweden"
            loading="lazy"
            width={1280}
            height={720}
            className="w-full h-[240px] md:h-[360px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/20" />

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="flex flex-wrap gap-2">
              {["System Mapping", "Water Analysis", "Energy Audit"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-card/80 backdrop-blur-sm border border-border text-xs text-muted-foreground font-body">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
