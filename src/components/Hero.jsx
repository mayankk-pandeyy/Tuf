import React from 'react'
import TextTransition, { presets } from 'react-text-transition';
import { BsChevronDoubleDown } from "react-icons/bs";
import { GrAchievement } from "react-icons/gr";
import { GrDeploy } from "react-icons/gr";



const TEXTS = ['DSA Sheets', 'Interview insights', 'CP Sheets', 'CS Subjects', 'CP Sheets', 'Technical Blogs'];
const COLORS = ['#3B9FE8', '#9979F7', '#E85A60', '#EA8353', '#DFAE46', '#ea8353']

const Hero = () => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(
          () => setIndex((index) => index + 1),
          2000,
        );
        return () => clearTimeout(intervalId);
    }, []);


    return (
        <div className='w-full mt-56 relative'>
            <div className='absolute right-5 -top-10 sm:right-20'>
                <svg className="h-6 w-6 md:h-12 md:w-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 0L25.3597 8.25467C26.5758 15.6377 32.3624 21.4242 39.7453 22.6403L48 24L39.7453 25.3597C32.3624 26.5758 26.5758 32.3624 25.3597 39.7453L24 48L22.6403 39.7453C21.4242 32.3624 15.6376 26.5758 8.25467 25.3597L0 24L8.25467 22.6403C15.6377 21.4242 21.4242 15.6376 22.6403 8.25467L24 0Z" className="fill-[#EF966C]"></path></svg>
            </div>
            <div className='w-full flex flex-col items-center gap-8'>
                <div className='text-xl sm:text-5xl font-bold font-mont mx-auto flex flex-col items-center gap-10'>
                    <div className='flex flex-col sm:flex-row gap-2 items-center'>
                        <div>
                            Advance Your Career with
                        </div>
                        <div>
                            <TextTransition style={{color : COLORS[index % COLORS.length]}} springConfig={presets.gentle}>{TEXTS[index % TEXTS.length]}</TextTransition>
                        </div>
                    </div>
                    <div className='flex gap-1.5 items-center'>
                        <div>
                            Join the
                        </div>
                        <div>
                            <div className='font-mont font-normal text-[#EA763F] border text-sm sm:text-2xl px-3 py-2 rounded-4xl border-[#EA763F] -rotate-6'>
                                Top 1%
                            </div>
                        </div>
                        <div>
                            Today
                        </div>
                    </div>
                </div>
                <div className='w-[80%] text-[12px] sm:text-sm font-mont text-center text-gray-400'>
                    Master DSA with curated resources and expert guidance – Learn the skills that set you apart and join the Top 1% of coding achievers!
                </div>

                <div className='flex flex-col sm:flex-row gap-10 select-none'>
                    <div className='group flex items-center text-lg font-mont gap-1 border border-gray-400 px-4 py-2 cursor-pointer rounded-2xl'>
                        <div className='opacity-0 group-hover:opacity-100 max-w-0 group-hover:max-w-6 transition-all duration-500'>
                            <GrDeploy />
                        </div>
                        <div>
                            Start for Free
                        </div>
                        <div>
                            <BsChevronDoubleDown />
                        </div>
                    </div>
                    <div className='font-mont flex items-center gap-1.5 group text-lg px-4 py-2 rounded-2xl cursor-pointer bg-amber-500 text-gray-200'>
                        <div>
                            Explore Plus
                        </div>
                        <div className='group-hover:w-5 opacity-0 group-hover:opacity-100 w-0 transition-all duration-200'>
                            <GrAchievement />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero