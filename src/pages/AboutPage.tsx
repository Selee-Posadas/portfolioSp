/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion } from "framer-motion";
import { CustomBioTerminal } from "../components/custom/CustomBioTerminal";
import { SKILLS } from "../data/skills";
import { CustomTitle } from "@/components/custom/CustomTitle";

export const AboutPage = () => {
  return (
    <div className="relative z-10 w-full  flex flex-col  items-center px-4 md:px-12 pt-20 md:pt-20 pb-13">
      
      <CustomTitle 
      titleWhite="SYSTEM" 
      titleColors="SPECS" 
      subtitle="// HARDWARE & SOFTWARE CONFIGURATION"
      className="w-full max-w-6xl mb-4"
      />

      
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="h-full"
        >
          <CustomBioTerminal />
        </motion.div>

       
        <div className="space-y-6">
          
          {SKILLS.map((skillGroup, groupIndex) => (
            <motion.div 
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (groupIndex * 0.2) }}
            >
              
              <div className="flex items-center gap-3 mb-2 text-cyan-400">
                <skillGroup.icon size={20} />
                <h3 className="font-orbitron tracking-widest text-sm font-bold">
                  {skillGroup.category}
                </h3>
                <div className="h-px bg-white/10 flex-1" />
              </div>

              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skillGroup.techs.map((tech) => (
                  <motion.div
                    key={tech}
                    whileHover={{ scale: 1.05, borderColor: "rgba(217,70,239,0.5)" }}
                    className="
                      relative group overflow-hidden
                      bg-white/5 border border-white/10 rounded-sm p-3
                      flex items-center justify-center text-center
                      transition-all duration-300
                      hover:shadow-[0_0_15px_rgba(217,70,239,0.2)]
                      cursor-default
                    "
                  >
                    <span className="text-xs md:text-sm font-bold text-gray-300 group-hover:text-white z-10">
                      {tech}
                    </span>
                    
                   
                    <div className="absolute inset-0 bg-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-fuchsia-500 transition-colors" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 group-hover:border-fuchsia-500 transition-colors" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default AboutPage;