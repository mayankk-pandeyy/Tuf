import React from 'react'
import { faqs } from '../../data'
import FaqCard from './FaqCard'

const Faq = () => {
  return (
    <div className='w-full mt-24'>
        <div className='w-[60%] font-mont mx-auto space-y-10'>
            <div className='text-4xl font-bold text-center'>
                Frequently Asked Questions
            </div>
            <div className='flex flex-col gap-5'>
                {
                    faqs.map((faq)=>{
                        return <FaqCard faq={faq}/>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Faq