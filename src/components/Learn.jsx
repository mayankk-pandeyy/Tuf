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
            <div className='font-mont text-4xl font-bold text-center'>
                Revolutionize the Way You Learn
            </div>
            <div className='w-[80%] mx-auto flex flex-col space-y-16 bg-[#252629] px-28 py-20 rounded-2xl'>
                <div className='flex flex-wrap justify-between gap-10'>
                    {
                        categories.map((category)=>{
                            return  <div>
                                        <div className={`button-category ${category === buttonCategory ? ("active") : ("")}`}  onClick={() => categoryActiveHandler(category)}>{category}</div>
                                    </div>
                        })
                    }
                </div>

                <div className='w-full flex gap-5 justify-between'>
                    <div className='w-[50%] flex flex-col gap-10'>
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
                    <div className='w-[45%] flex items-center justify-center'>
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