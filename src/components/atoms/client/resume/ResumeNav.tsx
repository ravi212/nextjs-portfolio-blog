import { RESUME_NAV_ITEMS } from '@/constants/common'
import React from 'react'

const ResumeNav = ({handle, onButtonClick}: {handle: string; onButtonClick: (index: number) => void}) => {
  return (
    <div className="w-[100%] lg:w-[40%] flex flex-col">
    {/* <h3>Why Hire me?</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
      facilis impedit cum minima maxime! Libero repellat consequatur culpa
      magni, maxime delectus officiis obcaecati ut labore fuga nobis
      doloribus! Corporis, vero?
    </p> */}
    <div className="flex flex-col  gap-4 my-4 ">
      {RESUME_NAV_ITEMS.map((item, index) => (
        <span
          onClick={() => onButtonClick(index)}
          key={index}
          className={`${
            item.handle == handle
              ? "bg-secondaryTextColor"
              : "bg-primaryTextColor"
          } w-full font-semibold cursor-pointer hover:bg-secondaryTextColor p-3 rounded-xl text-center text-background `}
        >
          {item.title}
        </span>
      ))}
    </div>
  </div>
  )
}

export default ResumeNav