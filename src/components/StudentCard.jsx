import React from 'react'

const StudentCard = () => {
  return (
    <div className='bg-[#2C2D32] py-4 min-w-[200px] rounded-xl'>
        <div className='flex flex-col gap-2 items-center'>
            <div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' width={60}/>
            </div>
            <div>
                <div className='w-20 h-20 bg-amber-200 rounded-full border border-gray-400'></div>
            </div>
            <div>
                Mayank Pandey
            </div>
        </div>
    </div>
  )
}

export default StudentCard