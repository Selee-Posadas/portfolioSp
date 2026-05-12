import { motion } from "framer-motion";
import { STATS } from "../../data/skills";

export const CustomBioTerminal = () => {
  return (
    <div className="w-full h-full border border-white/10 bg-black/40 backdrop-blur-md rounded-lg overflow-hidden relative">
      
      
      <div className="bg-white/5 px-4 py-2 flex items-center gap-2 border-b border-white/5">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
        <span className="ml-2 text-[10px] font-mono text-gray-500">USER_BIO.LOG</span>
      </div>

      
      <div className="p-6 font-mono text-sm md:text-base space-y-4">
        
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-fuchsia-500">root@selene:~$</span> 
          <span className="text-gray-300"> run identify_user.exe</span>
        </motion.div>

       
        <div className="pl-4 border-l-2 border-white/10 space-y-2">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + (index * 0.1) }}
              className="flex flex-col md:flex-row md:gap-4"
            >
              <span className="text-cyan-400 font-bold min-w-30"> {stat.label}:</span>
              <span className="text-gray-300">{stat.value}</span>
            </motion.div>
          ))}
        </div>

        
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1 }}
          className="pt-4 text-gray-400 leading-relaxed"
        >
          <p>
            <span className="text-green-400">SUCCESS:</span>
             (ESTO ES UN CAMBIO HECHO DE PRUEBA)
             +3 años de trayectoria analizando y resolviendo desafíos lógicos en sistemas productivos de alta complejidad.
            Evolucionando hacia el dominio total del stack moderno (React/NestJS).
            <br/><br/>
            En búsqueda constante del Full Stack Mastery mediante Clean Architecture.
          </p>
        </motion.div>

        
        <motion.div 
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-2 h-4 bg-fuchsia-500 align-middle ml-1"
        />
      </div>

      
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-fuchsia-500/5 to-transparent pointer-events-none opacity-20 animate-scan" />
    </div>
  );
};