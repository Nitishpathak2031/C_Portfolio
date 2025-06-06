import React from 'react';

const Navbar = () => (
  <nav className='flex top-0 w-full backdrop-blur-lg border-b border-white/10 shadow-lg place-content-between items-center bg-[#171717] font-normal p-2.5'>
    <a href="#home" className='text-2xl font-medium bg-gradient-to-r from-[#4081FA] to-[#FA0472] bg-clip-text text-transparent leading-right'>
      Rahul Singh
    </a>
    <ul className='flex gap-5 text-lg text-white'>
      <li><a href="#about" className='hover:text-[#FF006E]'>About</a></li>
      <li><a href="#services" className='hover:text-[#FF006E]'>Services</a></li>
      <li><a href="#projects" className='hover:text-[#FF006E]'>Projects</a></li>
      <li><a href="#teams" className='hover:text-[#FF006E]'>Teams</a></li>
      <li><a href="#testimonial" className='hover:text-[#FF006E]'>Testimonial</a></li>
      <li className='mr-3'><a href="#contact" className='hover:text-[#FF006E]'>Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;
