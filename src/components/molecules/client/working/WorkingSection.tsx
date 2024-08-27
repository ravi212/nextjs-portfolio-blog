"use client"
import { EXPERTISE, PROJECTS, SKILLS } from '@/constants/common'
import { Card } from 'antd'
import React from 'react'

const WorkingSection = () => {
  return (
    <div className="w-[90%] md:w-[100%] px-0 flex flex-wrap pb-10 flex-col lg:flex-row text-primaryTextColor gap-8">
        <h4 className='py-6 mt-3 text-2xl sm:text-3xl md:text-4xl font-medium text-primaryColor'>I can help you with...</h4>
        <div className='flex flex-col lg:flex-row gap-10 lg:gap-1'>
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

export default WorkingSection