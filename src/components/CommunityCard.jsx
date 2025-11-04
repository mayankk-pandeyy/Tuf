import React from 'react'
import CountUp from 'react-countup';


const CommunityCard = ({comm}) => {
  return (
    <div className='bg-amber-50 w-40 sm:w-[220px] px-3 py-2 sm:h-[220px] flex justify-center items-center rounded-2xl'>
        <div className='flex justify-center items-center flex-col gap-3 font-mont bg-black w-[180px] h-32 sm:h-40 rounded-2xl'>
            <div className='flex text-xl sm:text-3xl font-bold'>
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
                    {
                        <img src={comm.logo} alt='logo' width={20}/>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default CommunityCard