import React from 'react'

const ResourcesCard = ({resource}) => {
  return (
    <div className='w-[350px] bg-[#1E1F22] rounded-3xl'>
        <div className='font-mont px-5 py-5 space-y-3 group cursor-pointer'>
            <div className='w-full h-[180px] flex justify-center items-center cursor-pointer group rounded-3xl' style={{backgroundColor : resource.color}}>
                <div className='group-hover:scale-125 transition-all duration-300 px-2 py-2 rounded-xl'>
                    {
                        <img src={resource.resourceLogo} alt='Image' width={40}/>
                    }
                </div>
            </div>
            <div className='text-xl font-bold'>
                {
                    resource.heading
                }
            </div>
            <div className='text-sm font-light'>
                {
                    resource.desc
                }
            </div>
        </div>
    </div>
  )
}

export default ResourcesCard