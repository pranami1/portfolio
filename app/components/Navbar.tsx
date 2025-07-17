'use client';

import { useEffect } from 'react';


export default function Navbar() {
  // Smooth scroll behavior
useEffect(() => {
  const links = document.querySelectorAll('a[href^="#"]');

  const handleClick = function (e: Event) {
    e.preventDefault();
    const targetId = (this as HTMLAnchorElement).getAttribute('href')?.slice(1);
    const target = document.getElementById(targetId!);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  links.forEach(link => link.addEventListener('click', handleClick));

  return () => {
    links.forEach(link => link.removeEventListener('click', handleClick));
  };
}, []);


  return (
   <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#1A0B2E] shadow-md px-6 py-4">

      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left Side - Logo or name */}
        <a href="#hero" className="text-base font-semibold text-white hover:text-blue-500">
          Pranami's Portfolio
        </a>

        {/* Right Side - Navigation Links */}
        <div className="flex gap-6">
          <a href="#hero" className="text-sm font-medium text-white hover:text-pink-500 px-3 py-1 rounded-md transition-all duration-300 hover:border hover:border-purple-400 hover:bg-white/10">Home</a>
          <a href="#about" className="text-sm font-medium text-white hover:text-pink-500 px-3 py-1 rounded-md transition-all duration-300 hover:border hover:border-purple-400 hover:bg-white/10">Who I Am</a>
          <a href="#skills" className="text-sm font-medium text-white hover:text-pink-500 px-3 py-1 rounded-md transition-all duration-300 hover:border hover:border-purple-400 hover:bg-white/10">Skills</a>
          <a href="#projects" className="text-sm font-medium text-white hover:text-pink-500 px-3 py-1 rounded-md transition-all duration-300 hover:border hover:border-purple-400 hover:bg-white/10">Projects</a>
          <a href="#contact" className="text-sm font-medium text-white hover:text-pink-500 px-3 py-1 rounded-md transition-all duration-300 hover:border hover:border-purple-400 hover:bg-white/10">Contact</a>
        </div>
      </div>
    </nav>
  );
}
