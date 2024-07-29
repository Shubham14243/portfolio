import React from 'react'
import NavItems from './NavItems'
import { useMenuContext } from '../../Context/MenuContext';
import { HiOutlineDownload } from "react-icons/hi";

const Navbar = () => {

  const { menuItem } = useMenuContext();

  return (
    <>
      <div className='w-full flex flex-row items-center justify-between gap-8'>
        <div className='flex flex-row items-center'>
          <h1 className='px-10'>
            <span className='text-gray-200 text-3xl' >
              {menuItem === 'about' && 'About Me!'}
              {menuItem === 'contact' && 'Contact Me!'}
              {menuItem === 'project' && 'My Projects!'}
              {menuItem === 'resume' && 'My Resume!'}
            </span>
          </h1>
          <a href="./Shubham_Kumar_Gupta_Resume.pdf" download="Shubham_Kumar_Gupta_Resume.pdf">
            <button className="btn btn-outline btn-sm btn-primary">
              <span className='text-lg font-thin'>Download Resume </span>
              <HiOutlineDownload className="h-5 w-5" />
            </button>
          </a>
        </div>
        <NavItems />
      </div>
    </>
  )
}

export default Navbar