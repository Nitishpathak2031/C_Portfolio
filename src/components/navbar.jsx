import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className=' flex top-0 w-full backdrop-blur-lg border-b border-white/10 shadow-lg place-content-between items-center bg-[#171717] font-normal p-2.5'>
        <Link className=' text-2xl font-medium bg-gradient-to-r from-[#4081FA] to-[#FA0472] bg-clip-text text-transparent leading-right' to="/">Rahul Singh</Link>
        <ul className='flex gap-5 text-lg text-white '>
            <li>
                <Link className=' hover:text-[#FF006E]' to="/about">About</Link>
            </li>
             <li>
                <Link className='hover:text-[#FF006E]' to="/services">Services</Link>
            </li>
            <li>
               <Link className=' hover:text-[#FF006E]' to="/projects">Projects</Link>
            </li>
            <li>
               <Link className=' hover:text-[#FF006E]' to="/teams">Teams</Link>
            </li>
            <li>
               <Link className=' hover:text-[#FF006E]' to="/testimonial">Testimonial</Link>
            </li>
            <li className='mr-3'>
               <Link className=' hover:text-[#FF006E]' to="/contact">Contact</Link>
            </li>
            
        </ul>
    </nav>
    </>
  )
}

export default Navbar