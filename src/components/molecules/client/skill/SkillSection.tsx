"use client";
import { EXPERT_SECTION, SKILLS } from "@/constants/client.const";
import React from "react";

const SkillSection = () => {
  return (
    <div className="w-[90%] md:w-[100%] px-0 flex flex-wrap pb-10 flex-col lg:flex-row text-primaryTextColor gap-8">
      <h4 className="py-6 mt-2 text-2xl sm:text-2xl md:text-3xl font-medium text-primaryColor">
        <span className="underline">I can help</span> you with...
      </h4>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-1">
        {EXPERT_SECTION.map((item, index) => (
          <div
            key={index}
            className="flex border-l-gray-300 border-l min-w-[33%] p-8 flex-col gap-3"
          >
            <p className="pb-6 text-primaryColor font-extralight text-5xl ">
              0{index + 1}
            </p>
            <p className="text-xl font-medium text-primaryColor">
              {" "}
              {item.title}
            </p>
            <p className="text-base text-primaryColor">{item.description}</p>
          </div>
        ))}
      </div>
        
      <div className="flex flex-col gap-6 lg:gap-1">
        <h4 className="py-6 mt-3 text-2xl sm:text-2xl md:text-3xl font-medium text-primaryColor">
          <span className="underline">Skills</span> i offer...
        </h4>
        <div className="w-[90%] grid grid-col-1 lg:grid-cols-1 xl:grid-cols-1 ">
          {SKILLS.map((item: any, index: number) => (
            <div
              key={index}
              className="py-2 lg:py-6 flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-start border-b-primaryColor"
            >
              <p className="w-auto lg:w-[20%] text-primaryColor border-b border-b-primaryColor lg:border-b-secondaryColor border-r border-r-secondaryColor lg:border-r-primaryColor font-medium text-lg lg:text-xl pb-3">
                <span>{item.title}</span>
              </p>
              <ul className="w-auto lg:w-[80%] flex flex-row flex-wrap gap-2">
                {item.skills.map((ele: string, ind: number) => (
                  <li
                    key={ind}
                    className="bg-primaryColor/95 text-md px-3 py-1 text-secondaryColor rounded-sm font-normal"
                  >
                    {ele}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
