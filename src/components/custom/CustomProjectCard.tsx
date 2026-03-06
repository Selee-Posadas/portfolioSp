import { motion } from "framer-motion";
import type { Project } from "../../data/projects";
import { Github, ExternalLink } from "lucide-react";
import { Link } from "react-router";

export const CustomProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative w-full rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-fuchsia-500/50 hover:shadow-[0_0_30px_rgba(232,121,249,0.15)]"
    >

      <div className="relative h-48 w-full overflow-hidden">

        <div className="absolute inset-0 bg-linear-to-t from-[#111111] via-transparent to-transparent z-10 opacity-60" />

        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>


      <div className="relative z-20 p-6">

        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-orbitron text-2xl font-black tracking-tighter text-white group-hover:text-fuchsia-400 transition-colors">
              {project.title}
            </h3>
            <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">
              PROJ_0{project.id} //
              <span className="px-3 py-1 text-[10px] font-bold tracking-wider text-green-300 bg-green-900/20 border border-b-green-500/20 rounded-sm">{project.state}</span>
            </span>
          </div>

          <div className="flex gap-3">
            <Link to={project.github} className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"><Github size={18} /></Link>
            {
              project.link !== '#' && (
                <Link
                  to={project.link}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={18} />
                </Link>
              )
            }
          </div>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-[10px] font-bold tracking-wider text-fuchsia-300 bg-fuchsia-900/20 border border-fuchsia-500/20 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
