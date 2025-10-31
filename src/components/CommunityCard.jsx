import React from 'react'
import CountUp from 'react-countup';
import { FaYoutube } from "react-icons/fa";


const CommunityCard = ({comm}) => {
  return (
    <div className='bg-amber-50 w-[220px] h-[220px] flex justify-center items-center rounded-2xl'>
        <div className='flex justify-center items-center flex-col gap-3 font-mont bg-black w-[180px] h-40 rounded-2xl'>
            <div className='flex text-3xl font-bold'>
                <div>
                    <CountUp start={0} end={comm.value} delay={0}>
                        {({ countUpRef }) => (
                            <div>
                                <span ref={countUpRef} />
                            </div>
                        )}
                    </CountUp>
                </div>
                <div>
                    K+
                </div>
            </div>
            <div className='flex items-center gap-1'>
                <div>
                    {
                        comm.platform
                    }
                </div>
                <div className='scale-110 text-red-600'>
                    <FaYoutube/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CommunityCard