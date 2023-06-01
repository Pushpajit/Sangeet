import React from 'react';
import avatar from '../assets/man.png';
import { FcSearch } from 'react-icons/fc';
import { BsGridFill } from 'react-icons/bs';
import { MdOutlineArrowDropDownCircle } from 'react-icons/md';

function Navbar() {
  return (
    <nav className='md:ml-8 ml-2 mt-4 flex justify-between md:gap-2 gap-1'>
      {/* left part of navbar */}
      <div className="space-x-3 flex items-center md:gap-2 gap-1 md:hover:cursor-pointer">
        {/* icon button collaps */}
        <div className='md:hover:text-[#F96071] text-[#F96071] md:text-slate-700 md:hover:transition-colors duration-300 ease-in-out'>
          <BsGridFill size={25}/>
        </div>

        {/* search box */}
        <div className='relative'>
          <input type="search" name="search" id="src" placeholder='Search song, artist, album' className='outline-none rounded-md p-1 pl-[40px] lg:w-[90%] w-[100%] lg:text-sm text-base text-gray-500' style={{ "boxShadow": "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px" }} />
          <FcSearch className='absolute top-[25%] left-[5px]' size={20} />
        </div>

      </div>

      {/* right part of the navbar */}
      <div className='flex items-center mr-3 gap-2 md:gap-3 w-1/2'>
        
        {/* Image of user*/}  
        <div className='rounded-full border-2 border-white'>
          <img src={avatar} alt="Man" className='object-cover w-8' />
        </div>

        {/* name of the user */}
        <p className='text-xs font-semibold text-neutral-500 whitespace-nowrap overflow-hidden text-ellipsis'>
          Pushpajit Biswas
        </p>

        {/* drop down menu for md screen */}
        <div className='hidden md:block'>
          <MdOutlineArrowDropDownCircle size={20} className='text-gray-400 hover:cursor-pointer'/>
        </div>
        {/* notification bell icon */}
        <i class="fa-solid fa-bell ml-1 text-slate-400 md:hover:cursor-pointer md:ml-40 md:hover:text-slate-600 md:hover:transition-colors duration-300 ease-in-out "></i>
      </div>

    </nav>
  )
}

export default Navbar
