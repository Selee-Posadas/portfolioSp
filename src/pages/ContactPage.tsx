import { motion } from "framer-motion";
import { Terminal} from "lucide-react";

import { CustomTitle } from "@/components/custom/CustomTitle";
import { CustomSocialLink } from "@/components/custom/CustomSocialLinks";
import { CustomForm } from "@/components/custom/CustomForm";
import { SOCIAL_LINKS } from "@/data/socialLinks";

export const ContactPage = () => {
 

  return (
    <div className="relative z-10 w-full min-h-[calc(100vh-100px)] flex flex-col items-center px-4 md:px-12 pt-18 pb-20">

      <CustomTitle
      titleWhite="CONTACT"
      titleColors="NEXUS"
      subtitle="// INITIALIZE TRANSMISSION PROTOCOL"
      className="w-full max-w-6xl mb-5  flex justify-between items-end"
      />

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-4 text-fuchsia-400">
               <Terminal size={24} />
               <h3 className="font-orbitron font-bold">SYSTEM STATUS</h3>
            </div>
            <p className="text-gray-400 font-mono text-sm leading-relaxed">
              <span className="text-green-500">● ONLINE:</span> Actualmente disponible para nuevas oportunidades freelance o contratación full-time.
              <br/><br/>
              Respuesta estimada: <span className="text-white">Within 24 hours.</span>
            </p>
          </div>

          <div className="space-y-4">
             {SOCIAL_LINKS.map((link) => (
              <CustomSocialLink
              key={link.label}
              toUrl={link.toUrl}
              icon={<link.icon size={20}/>}
              label={link.label}
              value={link.value}
              />
             ))}
          </div>
        </motion.div>


        <motion.div
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
        >
          <CustomForm/>
        </motion.div>

      </div>
    </div>
  );
};



export default ContactPage;
