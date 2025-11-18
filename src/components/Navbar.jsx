import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full bg-[#141414]/80 backdrop-blur-md z-50 px-6 md:px-64 py-6 md:py-8 flex justify-between items-center">
      {/* Logo */}
      <h2 className="text-2xl font-bold text-white">
        Iffti <span className="text-[#fa0000]">Rahman</span>
      </h2>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 list-none">
        <Link to="portfolio" smooth={true} duration={600}>
          <li className="text-white hover:text-red-500 cursor-pointer transition-colors duration-300">Portfolio</li>
        </Link>
        <Link to="service-cards" smooth={true} duration={600}>
          <li className="text-white hover:text-red-500 cursor-pointer transition-colors duration-300">Services</li>
        </Link>
        <Link to="about" smooth={true} duration={600}>
          <li className="text-white hover:text-red-500 cursor-pointer transition-colors duration-300">About</li>
        </Link>
        <Link to="footer" smooth={true} duration={600}>
          <li className="text-white hover:text-red-500 cursor-pointer transition-colors duration-300">Contact</li>
        </Link>
      </ul>

      {/* Hamburger Button */}
      <button 
        className="md:hidden text-white text-2xl z-50"
        onClick={toggleMenu}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-2/3 bg-[#141414] shadow-lg transform transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-8 p-10 text-lg">
          <Link to="portfolio" smooth={true} duration={600} onClick={toggleMenu}>
            <li className="text-white hover:text-red-500 cursor-pointer transition-colors duration-300">Portfolio</li>
          </Link>
          <Link to="service-cards" smooth={true} duration={600} onClick={toggleMenu}>
            <li className="text-white hover:text-red-500 cursor-pointer transition-colors duration-300">Services</li>
          </Link>
          <Link to="about" smooth={true} duration={600} onClick={toggleMenu}>
            <li className="text-white hover:text-red-500 cursor-pointer transition-colors duration-300">About</li>
          </Link>
          <Link to="footer" smooth={true} duration={600} onClick={toggleMenu}>
            <li className="text-white hover:text-red-500 cursor-pointer transition-colors duration-300">Contact</li>
          </Link>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
