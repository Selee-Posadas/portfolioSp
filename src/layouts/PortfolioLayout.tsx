import { CustomFooter } from "@/components/custom/CustomFooter";
import { CustomHeader } from "@/components/custom/CustomHeader";
import { CustomMarqueeText } from "@/components/custom/CustomMarqueeText";
import { CustomNavigationDots } from "@/components/custom/CustomNavigationDots";
import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router";

export const PortfolioLayout = () => {
  const location = useLocation();

  return (
    <div className="bg-[#111111] min-h-screen text-white overflow-hidden relative">
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem'
        }}
      />

      <div className="absolute inset-0 z-0 flex flex-col justify-between py-10 opacity-[0.03]">
        
        <CustomMarqueeText 
          text="TECH" 
          direction="left" 
          speed={50} 
          className="text-[15rem] md:text-[20rem] font-black tracking-tighter leading-none"
        />

        <div className="pb-2 md:pb-1">
            <CustomMarqueeText 
              text="DEVELOPER" 
              direction="right" 
              speed={100} 
              className="text-[15rem] md:text-[20rem] font-black tracking-tighter leading-none"
            />
        </div>
      </div>

      <CustomHeader />
      <CustomNavigationDots/>
        <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }} 
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="h-screen w-full overflow-y-auto overflow-x-hidden cyber-scrollbar relative z-10"
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
      <CustomFooter/>
    </div>
  );
};
