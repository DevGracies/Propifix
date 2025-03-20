'use client'
import React, { useEffect, useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-bl from-[#9747FF] to-[#5D14AD] shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="https://uploadthingy.s3.us-west-1.amazonaws.com/aii3NQJeB275yMBJMT6UfL/Group_1000002686.png"
              alt="PropiFix Logo"
              className="h-8"
            />
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            <a
              href="#"
              className="text-white hover:text-purple-200 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-purple-200 transition-colors"
            >
              Find An Agent
            </a>
            <a
              href="#"
              className="text-white hover:text-purple-200 transition-colors"
            >
              Services
            </a>
            <a
              href="#"
              className="text-white hover:text-purple-200 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#"
              className="text-white hover:text-purple-200 transition-colors"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-white hover:text-purple-200 transition-colors"
            >
              Contact Us
            </a>
          </nav>
          {/* CTA Button */}
          <div className="hidden lg:block">
            <button className="bg-transparent text-white border-2 border-white rounded-full px-6 py-2 hover:bg-white hover:text-purple-600 transition-colors duration-300">
              Get Started
            </button>
          </div>
          {/* Mobile Menu Button */}
          <div className="lg:hidden relative z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-purple-600 bg-opacity-95 backdrop-blur-sm z-40 lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-4 py-20">
          <nav className="flex flex-col space-y-6 items-center">
            <a
              href="#"
              className="text-white text-xl hover:text-purple-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#"
              className="text-white text-xl hover:text-purple-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Find An Agent
            </a>
            <a
              href="#"
              className="text-white text-xl hover:text-purple-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#"
              className="text-white text-xl hover:text-purple-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#"
              className="text-white text-xl hover:text-purple-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </a>
            <a
              href="#"
              className="text-white text-xl hover:text-purple-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </a>
            <button className="bg-transparent text-white border-2 border-white rounded-full px-8 py-3 mt-4 hover:bg-white hover:text-purple-600 transition-colors duration-300">
              Get Started
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
