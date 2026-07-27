import { Dropdown } from "./Dropdown";
import Logo from "./Logo";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "../Button/Button";
import { ArrowRight } from 'lucide-react';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 z-50 w-full bg-nav-bg shadow-md">
      <div className="mx-auto flex items-center justify-evenly px-6 py-0">

        <div>
            <Logo />
        </div>
        

        <div className="hidden lg:flex gap-8 lg:gap-10">
          <Dropdown />

           <div className="hidden lg:flex items-center gap-6">
          <button className="bg-but-yel text-[#043873] text-sm font-semibold px-10 py-4 rounded-sm">
            Login
          </button>
         <Button />
        </div>

        </div>

       

        {/* Mobile hamburger */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile dropdown panel */}
      {isOpen && (
        <div className="lg:hidden flex flex-col gap-4 bg-[#043873] px-6 pb-6">
          <Dropdown />
          <button className="bg-but-yel text-[#043873] text-sm font-semibold px-4 py-2 rounded-sm w-50">
            Login
          </button>
          <button className=" flex bg-site text-white text-sm font-semibold px-4 py-2 rounded-md w-50 gap-2">
            Try Whitepace Free
            <ArrowRight />
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;