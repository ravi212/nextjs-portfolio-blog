import { RESUME_NAV_ITEMS } from '@/constants/client.const'
import React from 'react'

const ResumeNav = ({handle, onButtonClick}: {handle: string; onButtonClick: (index: number) => void}) => {
  return (
    <div className="w-[100%] lg:w-[50%] flex flex-col rounded-3xl ">
    <h3 className='text-2xl font-semibold pb-4'>Why Hire me?</h3>
    <p className='text-base'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
      facilis impedit cum minima maxime! Libero repellat consequatur culpa
      magni, maxime delectus officiis obcaecati ut labore fuga nobis
      doloribus! Corporis, vero?
    </p>
    <div className="flex flex-col  gap-5 my-6 ">
      {RESUME_NAV_ITEMS.map((item, index) => (
        <span
          onClick={() => onButtonClick(index)}
          key={index}
          className={`${
            item.handle == handle
              ? "bg-secondaryTextColor"
              : "bg-primaryTextColor"
          } w-full font-semibold cursor-pointer shadow-xl hover:bg-secondaryTextColor p-3 rounded-xl text-center text-background `}
        >
          {item.title}
        </span>
      ))}
    </div>
  </div>
  )
}

export default ResumeNav