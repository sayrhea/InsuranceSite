import { useState } from "react";
import menuIcon from "/hamburger.png";
import closeIcon from "/close.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="bg-[#f5f5f5] [box-shadow:0_4px_4px_0_#eee0e080] border-[1px] border-[solid] border-[#eee0e080] md:mx-20 mx-4 my-8 rounded-[30px] h-[70px] lg:pt-[10px]">
            <nav className="flex justify-between items-center w-[92%] mx-auto">
                <div className="flex items-center gap-2">
                    <div className="logo">
                        <img src="/logo.png" alt="logo" className="logo-img" />
                    </div>
                    <div className="logo-name">Colloway Health</div>
                </div>
                <div className={`md:static absolute bg-[#f5f5f5] md:min-h-fit h-full left-0 md:w-auto w-full flex items-center px-5 ${menuOpen ? "top-0" : "top-[-100%]"}`}>

                    <div className="flex md:flex-row flex-col items-center md:gap-[4vw] gap-8">
                        <button
                            onClick={() => { if (menuOpen) { setMenuOpen(false) } else { setMenuOpen(true) } }}
                            className="md:hidden"
                        ><img src={closeIcon} alt="close" className="h-[20px] w-[20px]" /></button>
                        <button className="hover:text-green-700">Services</button>
                        <button className="hover:text-green-700">About</button>
                        <button className="hover:text-green-700">FAQ</button>
                    </div>

                </div>
                <div className="contact-btn flex items-center md:gap-6 gap-2 md:mt-0 mt-3">
                    <button className="bg-gray-800 text-white px-6 py-3 text-sm rounded-full hover:bg-green-800">Contact Us</button>
                    <img
                        src={menuOpen ? menuIcon : closeIcon} alt="hamburger" className="h-[20px] w-[20px] md:hidden"
                        onClick={() => { if (menuOpen) { setMenuOpen(false) } else { setMenuOpen(true) } }}
                    />
                    {/* <img
                        src={closeIcon} alt="close" className="h-[20px] w-[20px] md:hidden"
                        onClick={() => { if (menuOpen) { setMenuOpen(false) } else { setMenuOpen(true) } }} /> */}
                </div>
            </nav>
        </header >
    )
}

export default Navbar;