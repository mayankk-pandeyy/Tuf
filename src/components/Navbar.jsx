import React from 'react'
import { MdDarkMode } from "react-icons/md";
import { LuChevronDown } from "react-icons/lu";
import { GrAction } from "react-icons/gr";

const Navbar = () => {
  return (
    <div className='w-full fixed z-30 top-5'>
        <div className='w-[90%] py-5 px-5 rounded-2xl bg-[#1D1C20] mx-auto flex justify-between'>
            {/* Left */}
            <div className='flex items-center gap-2 select-none'>
                <div className='bg-gray-800 py-4 rounded-2xl px-2'>
                    <img src='https://takeuforward.org/static/media/TufLogowhite.c3d7f1c91c905c610f4a.png' alt='tuf-logo' width={60}/>
                </div>
                <div className='mont-500 select-none'>
                    takeUforward
                </div>
            </div>

            {/* Right */}
            <div className='flex items-center gap-12'>
                <div className='cursor-pointer'>
                    <img src='https://takeuforward.org/static/media/TufPlusLight.041fc694d612b3fbaaa0.png' alt='tuf-dark-logo' width={80}/>
                </div>
                <div className='flex items-center gap-1 cursor-pointer'>
                    <div className='mont-500 select-none'>
                        Resources
                    </div>
                    <div>
                        <LuChevronDown />
                    </div>
                </div>
                {/* Theme */}
                <div className='cursor-pointer'>
                    <MdDarkMode className='w-6 h-6'/>
                </div>
                {/* User */}
                <div className='cursor-pointer'>
                    <div className='font-mont flex items-center gap-1.5 group text-lg px-4 py-2 rounded-2xl cursor-pointer bg-[#FF7E42] text-gray-200'>
                        <div>
                            Login
                        </div>
                        <div className='group-hover:w-5 opacity-0 group-hover:opacity-100 w-0 transition-all duration-200'>
                            <GrAction />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar