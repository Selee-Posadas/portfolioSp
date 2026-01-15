import { CustomNavbar } from "./CustomNavbar";
import logoWhite from '../../assets/logo_white.png';


export const CustomHeader = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 bg-linear-to-b from-black/90 to-transparent backdrop-blur-[2px]">
        <div className="flex items-center">
            <span className="cursor-pointer">
           <img 
             src={logoWhite}
             alt="logo de la pagina" 
             className="h-8 w-auto hover:opacity-80 transition-opacity hover:text-fuchsia-400 
                hover:drop-shadow-[0_0_8px_rgba(232,121,249,0.8)]"
           />
        </span>
        </div>

        <CustomNavbar/>
    </header>
  );
};
