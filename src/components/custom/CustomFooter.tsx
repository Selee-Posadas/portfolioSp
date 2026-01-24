import { Github, Linkedin, BookUser } from "lucide-react";
import { Link } from "react-router";

export const CustomFooter = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 flex items-center justify-between px-8 py-5 bg-linear-to-t from-black via-black/80 to-transparent backdrop-blur-[2px]">
        <div className="flex items-center">
        <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
          © {new Date().getFullYear()} Selene Posadas
        </span>
      </div>

      <div className="flex items-center gap-6">

        <Link 
          to='https://selee-posadas.github.io/portfolioSp/SelenePosadasCV.pdf'
          target="_blank" 
          rel="noopener noreferrer"
          download='Selene_Posadas_CV.pdf'
          className="text-gray-400 transition-all duration-300 hover:text-fuchsia-400 hover:scale-110 hover:drop-shadow-[0_0_5px_rgba(232,121,249,0.8)]"
        >
          <BookUser size={20} />
        </Link>

        <Link 
          to="https://github.com/Selee-Posadas" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 transition-all duration-300 hover:text-fuchsia-400 hover:scale-110 hover:drop-shadow-[0_0_5px_rgba(232,121,249,0.8)]"
        >
          <Github size={20} />
        </Link>


        <Link 
          to="https://www.linkedin.com/in/selene-posadas-dev/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 transition-all duration-300 hover:text-fuchsia-400 hover:scale-110 hover:drop-shadow-[0_0_5px_rgba(232,121,249,0.8)]"
        >
          <Linkedin size={20} />
        </Link>
        
      </div>
    </footer>
  )
}
