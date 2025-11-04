import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


const Instructor = () => {
  return (
    <div className="w-full flex justify-center py-10">
        <div className="relative w-full">
            <img
            src="https://static.takeuforward.org/content/_striver.png"
            alt="Striver"
            className="w-[60%] sm:w-[45%] h-auto mx-auto object-contain"
            />

            <div className="absolute top-[2%] lg:top-[24%] left-1/2 -translate-x-1/2">
                <div className="text-[#FF7E42] text-sm font-mont border border-[#FF7E42] px-3 py-1 rounded-3xl text-center">
                    Meet Your Instructor
                </div>
            </div>

            <div className="w-full absolute top-[18%] lg:top-[30%] left-1/2 -z-10 -translate-x-1/2">
                <div className="text-white font-mont text-lg sm:text-3xl font-bold text-center">
                    The Architecture for your Success
                </div>
            </div>

            <div className='w-[95%] mx-auto lg:w-[30%] lg:absolute top-[50%] left-[10%] font-mont text-[12px] sm:text-sm tracking-wider space-y-5'>
                <div>
                    <svg class="mb-4" width="46" height="35" viewBox="0 0 46 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.4575 31.3036C1.8825 28.5686 0.5 25.5011 0.5 20.5286C0.5 11.7786 6.6425 3.93609 15.575 0.0585938L17.8075 3.50359C9.47 8.01359 7.84 13.8661 7.19 17.5561C8.5325 16.8611 10.29 16.6186 12.0125 16.7786C16.5225 17.1961 20.0775 20.8986 20.0775 25.5011C20.0775 27.8217 19.1556 30.0473 17.5147 31.6883C15.8737 33.3292 13.6481 34.2511 11.3275 34.2511C10.0441 34.24 8.77577 33.9737 7.59632 33.4677C6.41687 32.9616 5.34988 32.226 4.4575 31.3036ZM29.4575 31.3036C26.8825 28.5686 25.5 25.5011 25.5 20.5286C25.5 11.7786 31.6425 3.93609 40.575 0.0585938L42.8075 3.50359C34.47 8.01359 32.84 13.8661 32.19 17.5561C33.5325 16.8611 35.29 16.6186 37.0125 16.7786C41.5225 17.1961 45.0775 20.8986 45.0775 25.5011C45.0775 27.8217 44.1556 30.0473 42.5147 31.6883C40.8737 33.3292 38.6481 34.2511 36.3275 34.2511C35.0441 34.24 33.7758 33.9737 32.5963 33.4677C31.4169 32.9616 30.3499 32.226 29.4575 31.3036Z" fill="#EA763F"></path></svg>
                </div>
                <div>
                    A Google Software Engineer, ex-Amazon and Media.net, with offers from Facebook London, and a competitive coding ace with Candidate Master and 6* Codechef accolades.
                </div>
                <div className='text-gray-400'>
                    Find more about me on
                </div>
                <div className='flex gap-2'>
                    <div className='scale-100 bg-gray-500 px-2 py-2 rounded-full cursor-pointer'>
                        <FaInstagram />
                    </div>
                    <div className='scale-100 bg-gray-500 px-2 py-2 rounded-full cursor-pointer'>
                        <FaXTwitter />
                    </div>
                    <div className='scale-100 bg-gray-500 px-2 py-2 rounded-full cursor-pointer'>
                        <FaLinkedin />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Instructor
