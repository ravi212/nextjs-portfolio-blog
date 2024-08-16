"use client"
import { PROJECTS } from '@/constants/common'
import { Card } from 'antd'
import React from 'react'

const ProjectSection = () => {
  return (
    <div className="w-[90%] md:w-[100%] m-auto px-0 py-10 md:px-10 md:py-10 flex flex-wrap flex-col lg:flex-row text-primaryTextColor gap-10">
      {
        PROJECTS.map((item: any, index: number) => (
            <div
              key={index}
              className="p-6 bg-primaryColor min-h-[300px] min-w-[45%] shadow-2xl text-secondaryColor rounded-2xl"
            >
              <div className="flex flex-row justify-between items-center">
                <p className="text-xl font-semibold">{item.title}</p>
              </div>

              <p className="text-lg font-medium py-2">{item.description}</p>
              <p className="text-md font-medium">{item.technologies.join()}</p>
            </div>
        ))
      }
      
    </div>
  )
}

export default ProjectSection