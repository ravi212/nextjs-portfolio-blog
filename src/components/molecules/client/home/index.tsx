import { EXPERTISE } from '@/constants/common'
import React from 'react'

const HomeSection = () => {
  return (
    <div className="w-[100%] md:w-[90%] h-auto mx-0 my-10 flex flex-col text-primaryTextColor gap-6">
        <h4 className="text-xl sm:text-2xl md:text-3xl text-primaryColor ">Hi I am a</h4>
        <h1 className="text-5xl sm:text-5xl md:text-7xl font-medium text-primaryColor">Software <span className="font-normal text-primaryColor"> Developer</span></h1>
        <h3 className="text-2xl sm:text-3xl md:text-4xl text-primaryColor">focusing on building and designing digital experiences.</h3>

        <h4 className='py-6 mt-3 text-xl sm:text-2xl md:text-3xl font-medium text-primaryColor'>My Expertise</h4>
        <div className='flex flex-col md:flex-row gap-1'>
            {
                EXPERTISE.map((item, index) => (
                    <div key={index} className='flex border-l-gray-300 border-l min-w-[33%] p-8 flex-col gap-3'>
                        <p className='pb-14 text-primaryColor font-extralight text-6xl '>0{index+1}</p>
                        <p className='text-2xl font-medium text-primaryColor'> {item.title}</p>
                        <p className='text-lg text-primaryColor'>{item.description}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default HomeSection