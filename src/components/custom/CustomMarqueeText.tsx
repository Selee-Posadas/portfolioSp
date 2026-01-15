import { motion } from "framer-motion";

interface MarqueeTextProps {
  text: string;
  direction?: "left" | "right";
  speed?: number;
  className?: string;
}

export const CustomMarqueeText = ({ 
  text, 
  direction = "left", 
  speed = 20, 
  className = "" 
}: MarqueeTextProps) => {
  
  return (
    <div className={`w-full overflow-hidden flex whitespace-nowrap select-none pointer-events-none ${className}`}>
      <motion.div
        className="flex gap-10" 
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i}>
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};