import React, { useState } from 'react'
import { learnCategories } from '../../data';
import { IoIosArrowForward } from "react-icons/io";

const Learn = () => {

    const categories = ["Striver's DSA Sheet", "System Design", "Core Subjects", "Interview Experience"];
    const [buttonCategory, setButtonCategory] = useState("Striver's DSA Sheet");

    function categoryActiveHandler(category){
        setButtonCategory(category);
    }


return (
    <div className='w-full mt-24'>
        <div className='w-full space-y-10'>
            <div className='font-mont text-xl sm:text-4xl font-bold text-center'>
                Revolutionize the Way You Learn
            </div>
            <div className='w-[95%] lg:w-[80%] mx-auto flex flex-col space-y-6 sm:space-y-16 bg-[#252629] px-2 py-10 lg:px-28 sm:py-20 rounded-2xl'>
                <div className='w-full flex overflow-x-auto scrollbar-none justify-between gap-4 sm:gap-10'>
                    {
                        categories.map((category)=>{
                            return  <div className='w-full'>
                                        <div className={`button-category whitespace-nowrap ${category === buttonCategory ? ("active") : ("")}`}  onClick={() => categoryActiveHandler(category)}>{category}</div>
                                    </div>
                        })
                    }
                </div>

                <div className='w-full flex flex-col lg:flex-row gap-5 justify-between'>
                    <div className='lg:hidden w-full flex items-center justify-center'>
                        {
                            <img src='https://takeuforward.org/static/media/SdeSheets.cfe7a095d81b2d3b8b42.png' alt='img'/>
                        }
                    </div>
                    <div className='w-[90%] lg:w-[50%] flex flex-col gap-10'>
                        {
                            learnCategories[buttonCategory].map((item)=>{
                                return  <div className='space-y-2'>
                                            <div className='category-head'>
                                                {item.head}
                                            </div>
                                            <div className='category-desc'>
                                                {item.desc}
                                            </div>
                                            <div className='cursor-pointer flex gap-1 items-center group'>
                                                <div className='get-started'>
                                                    {item.button}
                                                </div>
                                                <div className='group-hover:translate-x-1 transition-all duration-200'>
                                                    <IoIosArrowForward />
                                                </div>
                                            </div>
                                        </div>
                            })
                        }
                    </div>
                    <div className='hidden w-[45%] lg:flex items-center justify-center'>
                        {
                            <img src='https://takeuforward.org/static/media/SdeSheets.cfe7a095d81b2d3b8b42.png' alt='img'/>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Learn