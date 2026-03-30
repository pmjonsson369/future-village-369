import { motion } from "framer-motion";
import suderbynImg from "@/assets/suderbyn-project.jpg";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 md:py-40 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-primary tracking-[0.3em] uppercase mb-6 text-center font-body"
        >
          Pilot Project
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-center mb-6"
        >
          Suderbyn Ecovillage, Sweden
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-lg text-center max-w-xl mx-auto mb-16 font-body"
        >
          System mapping and optimization of an existing eco-community on the island of Gotland.
        </motion.p>

        {/* Project image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden border border-border group"
        >
          <img
            src={suderbynImg}
            alt="Aerial view of Suderbyn Ecovillage on Gotland, Sweden"
            loading="lazy"
            width={1280}
            height={720}
            className="w-full h-[300px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/20" />

          {/* Overlay details */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="flex flex-wrap gap-3">
              {["System Mapping", "Water Analysis", "Energy Audit", "IoT Integration"].map((tag) => (
                <span key={tag} className="px-4 py-1.5 rounded-full bg-card/80 backdrop-blur-sm border border-border text-xs text-muted-foreground font-body">
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
