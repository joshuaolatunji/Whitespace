import { Dropdown } from "./Dropdown"
import Logo from "./Logo"
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <nav className="flex w-full bg-[#043873] shadow-md fixed top-0 left-0 z-50">

            <div className="">
                <Logo />
            </div>

            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                
                <div className="hidden lg:flex">
                    <Dropdown />
                </div>

                <div className="hidden lg:flex items-center gap-9">
                    <button className="bg-yellow-200 text-[#043873] text-sm font-semibold px-4 py-2 rounded-sm ml-10">Login</button>

                    <button className="bg-[#4F9CF9] text-white text-sm font-semibold px-4 py-2 rounded-sm">
                    Try Whitepace Free
                    </button>
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
          <button className="bg-yellow-200 text-white text-sm font-medium text-left">Login</button>

          <button className="bg-[#4F9CF9] text-white text-sm font-semibold px-4 py-2 rounded-md">
            Try Whitepace Free
          </button>
           </div>
      )}

        </nav>
    )

}

export default Navbar