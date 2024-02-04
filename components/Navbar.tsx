"use client"
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="md:flex md:justify-between md:items-center p-4 relative">
      {/* Logo */}
      <div className=" flex justify-between">
        <Link href= "/">
        <div className="text-white text-xl font-bold">Logo</div>
        </Link>
  

{/* Mobile Menu Button */}
<div className="md:hidden cursor-pointer">
  <FaBars size={24} color="white" onClick={toggleMobileMenu} />
</div>
      </div>
     

      {/* Navigation Links */}
      <div
        className={`md:flex md:space-x-4 ${
          isMobileMenuOpen
            ? "flex flex-col space-y-4 absolute top-10 right-7 bg-gray-800 p-4 z-50"
            : "hidden"
        }`}
      >
        <Link  href ="/" className="text-white">
          Home
        </Link>
        <Link  href ="#" className="text-white">
          About
        </Link>
        <Link  href ="/properties" className="text-white">
          Properties
        </Link>
        <Link  href ="#" className="text-white">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
