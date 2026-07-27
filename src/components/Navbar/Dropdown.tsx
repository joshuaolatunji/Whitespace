import { ChevronDown } from "lucide-react";
import { navItems } from "./navItem";

export function Dropdown() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-10 text-white">
      {navItems.map((item) => (
        <button key={item} className="flex items-center gap-1 text-sm font-medium">
          {item}
          <ChevronDown size={16} />
        </button>
      ))}
    </div>
  );
}