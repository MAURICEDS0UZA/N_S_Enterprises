import { useState } from "react";
import { Link } from "react-router-dom";
import useIsMobile from "./../utils/hooks/isMobile"; 


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=" bg-orange-500 text-white p-4 w-full font-serif">
      <nav className="container mx-auto flex items-center justify-between">
        <div>
          {!isMobile && <img src="./src/assets/images/nsLogo.png" alt="N.S.Enterprises" />} 
          {isMobile &&<div className="text-xl font-bold">N.S. Enterprises</div>}
          </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/">Home</Link>
          <Link to="/skills">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/resume">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="flex flex-col space-y-2 p-4">
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/skills" onClick={toggleMenu}>
              Services
            </Link>
            <Link to="/projects" onClick={toggleMenu}>
              Projects
            </Link>
            <Link to="/resume" onClick={toggleMenu}>
              Gallery
            </Link>
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
