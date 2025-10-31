import React from 'react'

const JoinUs = () => {
  return (
    <div className='w-full my-20'>
        <div className='w-[90%] px-16 mx-auto bg-[#020612] rounded-3xl py-10 font-mont space-y-8'>
            <div className='text-3xl font-bold'>
                Join a Global Community of <span className='text-[#FF7E42] relative'>12,65,166+ 
                    <span className='absolute w-32 left-0 -bottom-3'>
                        <svg class="w-full h-auto" viewBox="0 0 142 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M38.3992 6.72572C26.7488 6.67399 15.0785 6.63951 3.42803 6.58778C2.11362 6.58778 0.341164 6.13951 0.520402 5.01882C0.659809 4.13951 1.93438 3.8464 2.95006 3.7602C36.2484 0.932612 69.7259 -0.308768 103.203 0.0705427C110.612 0.15675 118 0.311922 125.389 0.553301C126.425 0.587784 134.67 0.725715 133.813 1.65675C132.937 2.62227 124.254 1.7602 122.641 1.77744C107.824 1.86365 92.9869 1.94985 78.17 2.03606C72.5141 2.07054 66.7984 2.10503 61.242 3.07054C83.6666 3.79468 106.091 4.51882 128.516 5.24296C129.711 5.27744 130.985 5.32916 132.001 5.89813C133.017 6.44985 133.654 7.69123 133.017 8.57054C134.67 9.15675 136.542 8.89813 138.294 9.19123C140.047 9.48434 141.899 10.7947 141.421 12.2947C140.923 13.8464 138.553 14.0878 136.701 14.0188C99.0213 12.5878 61.2818 9.10502 23.7018 11.8292C22.5268 11.9154 21.292 12.0016 20.2365 11.5705C19.181 11.1395 18.3844 10.0016 18.9022 9.08778C19.4001 8.17399 20.7742 7.98434 21.9293 7.89813C27.4259 7.48434 32.9026 7.10503 38.3992 6.72572Z" fill="#EA763F"></path></svg>
                    </span>
                 </span> Learners
            </div>
            <div className='w-full flex justify-between gap-5'>
                <div className='join-item'>
                    <div className='join-item-num'>
                        50+
                    </div>
                    <div className='join-item-desc'>
                        Interview Prep Resources
                    </div>
                </div>
                <div className='join-item'>
                    <div className='join-item-num'>
                        600+
                    </div>
                    <div className='join-item-desc'>
                        DSA Problems with Solutions
                    </div>
                </div>
                <div className='join-item'>
                    <div className='join-item-num'>
                        500+
                    </div>
                    <div className='join-item-desc'>
                        Free Video Tutorials
                    </div>
                </div>
                <div>
                    <div className='bg-[#FF7E42] px-5 py-4 rounded-2xl hover:bg-[#ff7e42dd] cursor-pointer transition-all duration-200'>
                        Get Started For Free
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default JoinUs