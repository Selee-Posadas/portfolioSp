import { NAV_ITEMS } from "@/config/routes";
import { Link, useLocation } from "react-router";

export const CustomNavigationDots = () => {

    const { pathname } = useLocation();


 return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-6 z-50 md:flex sm: hidden">
      {NAV_ITEMS.map((item) => {
        const isActive = pathname === item.path;

        return (
          <Link
            key={item.label}
            to={item.path}
            className="group flex items-center flex-row-reverse"
          >
            <div
              className={`
                w-3 h-3 rounded-full transition-all duration-500
                ${isActive
                    ? "bg-fuchsia-500 scale-150 shadow-[0_0_15px_rgba(232,121,249,1)]"
                    : "bg-gray-700 hover:bg-gray-500"
                }
              `}
            />
             <span className={`mr-4 text-[10px] text-fuchsia-400 
                transition-opacity duration-300 
                ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
               {item.label}
             </span>
          </Link>
        );
      })}
    </div>
  );
};
