import { motion } from "framer-motion";
import { PROJECTS } from "../data/projects";
import { CustomProjectsView } from "../components/custom/CustomProjectsView";

export const ProjectsPage = () => {
  return (

    <div className="relative z-10 w-full min-h-[calc(100vh-100px)] flex flex-col justify-center items-center px-4 md:px-12 pt-20 md:pt-20">
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-7xl mb-8 flex items-end justify-between border-b border-white/10 pb-4"
      >
        <div>
           <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-2 font-orbitron">
            SELECTED <span className="text-transparent bg-clip-text bg-linear-to-r from-fuchsia-500 to-cyan-500">WORKS</span>
          </h2>
          <p className="text-sm font-mono text-gray-400 tracking-widest">
            // SCROLL TO EXPLORE 
          </p>
        </div>
        
        <div className="hidden md:block text-right">
             <span className="text-xs font-mono text-gray-600">DB_STATUS: ONLINE</span>
             <br />
             <span className="text-xs font-mono text-fuchsia-500">ENTRIES: {PROJECTS.length}</span>
        </div>
      </motion.div>

      <div className="w-full max-w-350 "> 
         <CustomProjectsView />
      </div>

    </div>
  );
};

export default ProjectsPage;