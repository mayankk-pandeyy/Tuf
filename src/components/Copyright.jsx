import React from 'react'
import { FaHeart } from "react-icons/fa";

const Copyright = () => {
  return (
    <div className='w-full py-3'>
        <div className='font-mont text-xs text-center group cursor-pointer'>
            Made with Love! <div className='inline-block group-hover:text-orange-500 transition-all duration-200'><FaHeart /></div> Inspired by @takeUforward[https://takeuforward.org/]
        </div>
    </div>
  )
}

export default Copyright