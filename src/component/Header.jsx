import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-cyan-400">MyPortfolio</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-300 hover:text-cyan-400 transition">
            About
          </a>
          <a href="#projects" className="text-gray-300 hover:text-cyan-400 transition">
            Projects
          </a>
          <a href="#skillssection" className="text-gray-300 hover:text-cyan-400 transition">
            My Skills
          </a>
          <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="md:hidden text-cyan-400 font-bold"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
