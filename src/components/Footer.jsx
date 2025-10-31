import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full mt-10 bg-[#18191B]'>
        <div className='w-full py-24'>
            <div className='w-[80%] mx-auto flex gap-5 justify-between'>

                <div className='w-[20%] space-y-5'>
                    <div>
                        <img src='https://takeuforward.org/static/media/TufLogoWhite.55c3498a0dd7701d258e.png' alt='Tuf' width={100}/>
                    </div>
                    <div className='font-mont text-sm text-gray-400'>
                        The best place to learn data Structures, algorithms, most asked coding interview questions. real interview experiences free of cost.
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
                        <div className='scale-100 bg-gray-500 px-2 py-2 rounded-full cursor-pointer'>
                            <FaYoutube />
                        </div>
                    </div>
                </div>

                <div className='w-[15%] font-mont space-y-3'>
                    <div className='footer-head'>
                        Company
                    </div>
                    <div className='footer-text'>
                        About Us
                    </div>
                    <div className='footer-text'>
                        Contact Us
                    </div>
                    <div className='footer-text'>
                        Pricing
                    </div>
                    <div className='footer-text'>
                        Privacy Policy
                    </div>
                    <div className='footer-text'>
                        Terms and Conditions
                    </div>
                    <div className='footer-text'>
                        Cancellation / Refund Policy
                    </div>
                </div>

                <div className='w-[15%] font-mont space-y-3'>
                    <div className='footer-head'>
                        Quick Access
                    </div>
                    <div className='footer-text'>
                        Striver's DSA Sheet
                    </div>
                    <div className='footer-text'>
                        Technical Blogs
                    </div>
                    <div className='footer-text'>
                        CS Subjects
                    </div>
                    <div className='footer-text'>
                        Striver's CP Sheet
                    </div>
                </div>

                <div className='w-[15%] font-mont space-y-3'>
                    <div className='footer-head'>
                        DSA Sheets
                    </div>
                    <div className='footer-text'>
                        Striver's SDE Sheet
                    </div>
                    <div className='footer-text'>
                        Striver's A2Z DSA Playlist
                    </div>
                    <div className='footer-text'>
                        SDE Core Sheet
                    </div>
                    <div className='footer-text'>
                        Striver's CP Sheet
                    </div>
                </div>

                <div className='w-[15%] font-mont space-y-3'>
                    <div className='footer-head'>
                        DSA Playlist
                    </div>
                    <div className='footer-text'>
                        Array Series
                    </div>
                    <div className='footer-text'>
                        Graph Series
                    </div>
                    <div className='footer-text'>
                        DP Series
                    </div>
                    <div className='footer-text'>
                        LinkedList Series
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer