import { motion } from "framer-motion";

  interface Props{
    titleWhite : string;
    titleColors: string;
    subtitle: string;
    className?: string;
  };

export const CustomTitle = ({titleWhite, titleColors, subtitle, className = ''}:Props) => {
  return (
     <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={className}
      >
        <div>
           <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-2 font-orbitron">
            {titleWhite} <span className="text-transparent bg-clip-text bg-linear-to-r from-fuchsia-500 to-cyan-500">{titleColors}</span>
          </h2>
          <p className="text-sm font-mono text-gray-400 tracking-widest">
            {subtitle}
          </p>
        </div>
      </motion.div>
  )
}
