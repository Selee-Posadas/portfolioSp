import { NAV_ITEMS } from "@/config/routes";
import { Link, useLocation } from "react-router";


export const CustomNavbar = () => {
  const { pathname } = useLocation();

  return (
    <nav>
      <ul className="flex items-center gap-8 md:gap-12">
        {NAV_ITEMS.map((link) => {
          const isActive = pathname === link.path;

          return (
            <li key={link.label}>
              <Link
                to={link.path}
                className={`
                  relative text-xs md:text-sm font-medium uppercase tracking-[0.2em] transition-all duration-300
                  ${
                    isActive
                      ? "text-fuchsia-400 drop-shadow-[0_0_8px_rgba(232,121,249,0.8)]"
                      : "text-gray-300 hover:text-fuchsia-400"
                  }
                `}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
