import React from 'react'

const StudentCard = ({student}) => {
  return (
    <div className='bg-[#2C2D32] py-4 min-w-[200px] mx-4 rounded-xl'>
        <div className='flex flex-col gap-2 items-center'>
            <div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' width={60}/>
            </div>
            <div>
                <div className='w-20 h-20 bg-gray-600 rounded-full border border-gray-400'></div>
            </div>
            <div>
                {student.name}
            </div>
        </div>
    </div>
  )
}

export default StudentCard