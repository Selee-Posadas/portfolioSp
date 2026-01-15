import type { ReactNode } from "react";
import { Link } from "react-router";

  interface Props{
    toUrl: string;
    icon?: ReactNode;
    label?: string;
    value?: string;
  };


export const CustomSocialLink = ({ toUrl, icon, label, value }: Props) => (
  <Link 
    to={toUrl} 
    target="_blank" 
    rel="noreferrer"
    className="flex items-center gap-4 p-4 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 hover:border-fuchsia-500/30 transition-all group cursor-pointer"
  > 
    <div className="p-3 rounded-full bg-black/30 text-gray-400 group-hover:text-fuchsia-400 transition-colors">
      {icon}
    </div>
    <div>
      <div className="text-[10px] font-orbitron text-gray-500">{label}</div>
      <div className="text-gray-200 font-mono text-sm">{value}</div>
    </div>
  </Link>
);