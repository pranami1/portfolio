'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react'; // Install lucide-react for icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName !== 'A' || !target.getAttribute('href')?.startsWith('#')) return;

      const id = target.getAttribute('href')!.substring(1);
      const section = document.getElementById(id);
      if (section) {
        e.preventDefault();
        section.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false); // Close menu after click
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const navLinks = (
    <>
      <a href="#hero" className="text-sm font-medium text-white hover:text-pink-500 px-3 py-1 rounded-md transition-all duration-300 hover:border hover:border-purple-400 hover:bg-white/10">Home</a>
      <a href="#about" className="text-sm font-medium text-white hover:text-pink-500 px-3 py-1 rounded-md transition-all duration-300 hover:border hover:border-purple-400 hover:bg-white/10">Who I Am</a>
      <a href="#skills" className="text-sm font-medium text-white hover:text-pink-500 px-3 py-1 rounded-md transition-all duration-300 hover:border hover:border-purple-400 hover:bg-white/10">Skills</a>
      <a href="#projects" className="text-sm font-medium text-white hover:text-pink-500 px-3 py-1 rounded-md transition-all duration-300 hover:border hover:border-purple-400 hover:bg-white/10">Projects</a>
      <a href="#contact" className="text-sm font-medium text-white hover:text-pink-500 px-3 py-1 rounded-md transition-all duration-300 hover:border hover:border-purple-400 hover:bg-white/10">Contact</a>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#1A0B2E] shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="text-base font-semibold text-white hover:text-blue-500">
          Pranami&apos;s Portfolio
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">
          {navLinks}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 px-4 pb-4">
          {navLinks}
        </div>
      )}
    </nav>
  );
}
