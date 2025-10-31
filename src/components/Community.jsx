import React from 'react'
import CommunityCard from './CommunityCard'
import { community } from '../../data'


const Community = () => {
  return (
    <div className='w-full mt-20 bg-[#18191B] py-20'>
        <div className='font-mont w-[80%] mx-auto space-y-16'>
            <div className='text-4xl font-bold text-center'>
                Join Our Ever-Growing Global Community
            </div>
            <div className='flex justify-between flex-wrap gap-5'>
                {
                    community.map((comm)=>{
                        return <CommunityCard comm={comm}/>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Community