import React, { useState } from 'react'
import { MdDarkMode } from "react-icons/md";
import { LuChevronDown } from "react-icons/lu";
import { GrAction } from "react-icons/gr";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    

    return (
        <div className='w-full fixed z-30 top-0 sm:top-5'>
            <div className='w-full sm:w-[90%] py-5 px-5 sm:rounded-2xl bg-[#1D1C20] mx-auto flex items-center justify-between'>
                {/* Left */}
                <div className='flex items-center gap-2 select-none'>
                    <div className='bg-gray-800 py-4 rounded-2xl px-2'>
                        <div className='w-10 sm:w-[60px]'>
                            <img src='https://takeuforward.org/static/media/TufLogowhite.c3d7f1c91c905c610f4a.png' alt='tuf-logo'/>
                        </div>
                    </div>
                    <div className='hidden sm:block mont-500 select-none'>
                        takeUforward
                    </div>
                </div>

                {/* Right */}
                <div className='hidden md:block'>
                    <div className='flex items-center gap-12'>
                        <div className='cursor-pointer hidden lg:block'>
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

                <div className="md:hidden cursor-pointer flex flex-col justify-between w-7 h-6 group" onClick={() => setOpen(!open)}>
                    <div className={`h-0.5 w-full bg-white rounded transition-all duration-300 ${ open ? "rotate-45 translate-y-[9px]" : ""}`}></div>
                    <div className={`h-0.5 w-full bg-white rounded transition-all duration-300 ${ open ? "opacity-0" : "opacity-100" }`}></div>
                    <div className={`h-0.5 w-full bg-white rounded transition-all duration-300 ${ open ? "-rotate-45 -translate-y-[9px]" : ""}`}></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar