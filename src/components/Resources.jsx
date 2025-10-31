import React from 'react'
import ResourcesCard from './ResourcesCard'
import { resources } from '../../data'

const Resources = () => {
  return (
    <div className='w-full mt-24'>
        <div className='w-[80%] mx-auto space-y-14'>
            <div className='text-4xl font-mont font-bold text-center'>
                Resouces to Learn
            </div>
            <div className='flex flex-wrap justify-between gap-y-12'>
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