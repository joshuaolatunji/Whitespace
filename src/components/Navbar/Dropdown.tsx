import { ChevronDown } from "lucide-react";
import { navItems } from "./navItem";

export function Dropdown() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-10 text-white">
      {navItems.map((item) => (
        <button key={item} className="flex items-center gap-1 text-[15px] font-medium">
          {item}
          <ChevronDown className="h-6 w-7.25" />
        </button>
      ))}
    </div>
  );
}