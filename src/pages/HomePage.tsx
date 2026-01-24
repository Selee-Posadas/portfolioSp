import { motion } from "framer-motion";
import ProfilePic from '../assets/sp_picture_p.png';
import { Link } from "react-router";

export const HomePage = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">

      <div className="relative z-10 h-full w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center px-8 pt-28 md:pt-0">

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="
            absolute 
            md:right-[10%] md:top-[20%]
            top-[15%]
            w-75 h-75 md:w-125 md:h-125 
            rounded-full bg-fuchsia-500
            blur-[100px] md:blur-[150px]
            z-0
          "
        />

        <div className="flex-1 order-2 md:order-1 text-center md:text-left z-20 mt-4 md:mt-0 pb-24 md:pb-0">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-fuchsia-400 font-mono tracking-widest mb-4 text-sm md:text-base"
          >
            HOLA, SOY
          </motion.h2>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-orbitron text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-tight"
          >
            SELENE <br className="hidden md:block" /> POSADAS
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 text-lg md:text-xl max-w-md mx-auto md:mx-0 mb-8"
          >
            Desarrolladora Frontend. Creo experiencias digitales inmersivas y funcionales.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-row items-center justify-center md:justify-start gap-4"
          >
            <Link to="/projects" className="inline-block px-8 py-3 bg-fuchsia-600 hover:bg-fuchsia-700 transition-colors text-white font-bold rounded-sm tracking-wider">
              VER PROYECTOS
            </Link>
            <Link to='/portfolioSp/cv.pdf'
              className="inline-block px-8 py-3 bg-fuchsia-600 hover:bg-fuchsia-700 transition-colors text-white font-bold rounded-sm tracking-wider"
              download='Selene_Posadas_CV.pdf'
              target="_blank"
              rel="noopener noreferrer"
            >
              Descargar CV
            </Link>
          </motion.div>
        </div>

        <div className="flex-1 order-1 md:order-2 relative z-20 flex justify-center w-full">
          <motion.div
            initial={{ x: 100, opacity: 0, filter: 'grayscale(100%)' }}
            animate={{ x: 0, opacity: 1, filter: 'grayscale(100%)' }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="relative w-fit mx-auto"
          >
            <img
              src={ProfilePic}
              alt="Selene Posadas"
              className="
                  w-auto 
                  h-[35vh]
                  sm:h-[45vh]
                  md:h-162.5 
                  grayscale brightness-110 contrast-125
                  object-cover pointer-events-none select-none
                  drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]
                  mask-[linear-gradient(to_bottom,black_80%,transparent_100%)]
                "
            />
          </motion.div>
        </div>

      </div>
    </div>
  );
};
