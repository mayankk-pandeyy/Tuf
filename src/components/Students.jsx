import React from 'react'
import StudentCard from './StudentCard'
import {students} from "../../data.js"
import Marquee from 'react-fast-marquee'

const Students = () => {
  return (
    <div className='w-full mt-40 relative'>
        <div className='absolute -top-32 left-60'>
            <svg class="h-6 w-6 md:h-12 md:w-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 0L25.3597 8.25467C26.5758 15.6377 32.3624 21.4242 39.7453 22.6403L48 24L39.7453 25.3597C32.3624 26.5758 26.5758 32.3624 25.3597 39.7453L24 48L22.6403 39.7453C21.4242 32.3624 15.6376 26.5758 8.25467 25.3597L0 24L8.25467 22.6403C15.6377 21.4242 21.4242 15.6376 22.6403 8.25467L24 0Z" class="fill-[#F4A810]"></path></svg>
        </div>
        <div className='absolute -top-20 right-60 rotate-12'>
            <svg class="h-6 w-6 md:h-12 md:w-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 12.1733L23.5902 23.5902L12.1733 24L23.5902 24.4098L24 35.8267L24.4098 24.4098L35.8267 24L24.4098 23.5902L24 12.1733ZM22.7477 22.7477L23.5642 0H24.4358L25.2523 22.7477L48 23.5642V24.4358L25.2523 25.2523L24.4358 48H23.5642L22.7477 25.2523L0 24.4358V23.5642L22.7477 22.7477Z" fill="#F4A810"></path></svg>
        </div>
        <div className='w-[95%] sm:w-[80%] mx-auto font-mont bg-[#1E1F22] px-3 sm:px-10 py-6'>
            <div className='text-xl sm:text-2xl'>
                <span className='text-[#EA763F] pr-2'>
                    12,61,570+
                </span>
                <span>
                    Learners
                </span>
            </div>
            <div className='text-[10px] font-mont sm:text-sm'>
                have exceeded in their career through our platform
            </div>
            <div className='mt-4'>
                <Marquee>
                    {
                        students.map((student)=>{
                            return <StudentCard student={student}/>
                        })
                    }
                </Marquee>
            </div>
        </div>
    </div>
  )
}

export default Students