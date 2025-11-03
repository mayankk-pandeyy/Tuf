import React from 'react'
import ResourcesCard from './ResourcesCard'
import { resources } from '../../data'

const Resources = () => {
  return (
    <div className='w-full mt-12 sm:mt-24'>
        <div className='w-[95%] lg:w-[80%] mx-auto space-y-6 sm:space-y-14'>
            <div className='text-2xl sm:text-4xl font-mont font-bold text-center'>
                Resouces to Learn
            </div>
            <div className='w-full flex flex-wrap justify-center md:justify-between space-x-3 gap-y-12'>
                {
                    resources.map((resource) => {
                        return <ResourcesCard resource={resource}/>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Resources