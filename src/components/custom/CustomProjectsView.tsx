import { CustomProjectCard } from "./CustomProjectCard";
import { PROJECTS } from "../../data/projects";
import { motion } from "framer-motion";

export const CustomProjectsView = () => {
  return (
    <div className="w-full relative">
      <div 
        className="
          flex gap-6 overflow-x-auto snap-x snap-mandatory w-full px-2 pb-4 mb-8 
          cyber-scrollbar scroll-smooth
        "
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            

            className="
              snap-center shrink-0 
              w-[85vw]
              md:w-100
            "
          >
            <CustomProjectCard project={project} index={index} />
          </motion.div>
        ))}

        <div className="w-4 shrink-0" />
        
      </div>

    </div>
  );
};