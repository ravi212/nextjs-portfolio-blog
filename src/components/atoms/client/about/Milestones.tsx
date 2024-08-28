"use client"

import React, { useState } from 'react'
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { BiSolidUpArrow } from "react-icons/bi";
import { JOURNEY, JOURNEY_MILESTONES } from '@/constants/common';

const Milestones = () => {
    const [journey, setJourney] = useState(JOURNEY);
    const [milestones, setMilestones] = useState(JOURNEY_MILESTONES);
  
    const [_, resetUi] = useState(false);
    
    const setExpand = (index) => {
        milestones[index].isExpand = !milestones[index].isExpand;
        setMilestones(milestones);
        resetUi((i) => !i);
      };

  return (
    <>
        {journey.map((item, index) => (
        <div key={"jou" + index} className="flex gap-6 ">
          {/* journey checkpoint title for large screens*/}
          <div className="w-[20%] lg:w-[15%] lg:flex hidden flex-col justify-end">
            <div className="">
              <p className="text-md text-primaryColor/70">
                {item.checkpoint}
              </p>
              <p className="text-lg">{item.date}</p>
            </div>
          </div>

          {/* journey checkpoint Indicator */}
          <div className="relative flex justify-center items-end">
            <div
              key={item.id}
              className={`bg-primaryTextColor z-10 w-6 h-6 rounded-full flex justify-center items-center`}
            >
              <div className="w-4 h-4 bg-secondaryColor rounded-full"></div>
            </div>

            <div
              className={`absolute z-0 ${
                index == journey?.length - 1 ? "bottom-[-50px]" : ""
              } h-[170%] w-[2px] bg-primaryColor`}
            ></div>
          </div>

          <div className="flex flex-col w-[90%] lg:w-[60%]">
            <div className="mt-3">
              {milestones.map((ele, ind) => (
                <div key={'ext-mil-'+ind}>
                  {ele.isExpand &&
                    ele.checkpointId == item.id &&
                    ele?.milestones
                      ?.sort((a: any, b: any) => b.order - a.order)
                      .map((ele, ind) => (
                        <div className="transition-all duration-100"  key={"mil" + ind}>
                          <div className="relative flex py-2 items-start">
                            <div className="z-20 absolute justify-center items-center bg-secondaryColor top-3 left-[-44px]">
                              <BiSolidUpArrow className="w-4 h-4 fill-primaryColor"/>
                            </div>
                            <div>
                              <p className="font-medium text-lg">
                                {ele.date}
                              </p>
                              <p className="font-medium text-normal py-1">
                                {ele.title}
                              </p>
                              <p className="text-sm">{ele.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                  {ind == milestones.length - 1 &&
                    ele.checkpointId == item.id && (
                      <>
                        {ele.isExpand ? (
                          <div
                            onClick={() => setExpand(ind)}
                            className="py-3 flex flex-row cursor-pointer "
                          >
                            <ExpandLessIcon />
                            <p className="font-normal text-secondaryTextColor">
                              Click here for relevant info only
                            </p>
                          </div>
                        ) : (
                          <div
                            onClick={() => setExpand(ind)}
                            className="py-3 flex flex-row cursor-pointer "
                          >
                            <ExpandMoreIcon />
                            <p className="font-normal text-secondaryTextColor">
                              Click here to know more about me
                            </p>
                          </div>
                        )}
                      </>
                    )}
                </div>
              ))}
            </div>

            {/* Journey checkpoint description */}
            <div className="relative mt-6 rounded-lg">
              {/* <div className="absolute h-[2px] w-7 left-[-30px] bg-primaryColor/30 bottom-[10px]">

              </div> */}
              <p>{item.description}</p>
              <p className="text-lg font-medium">{item.title}</p>
            </div>

            {/* journey checkpoint title for small screens*/}
            <div className="lg:hidden flex flex-col pt-2 ">
              <div className="">
                <p className="text-md text-primaryColor/70">
                  {item.checkpoint}
                </p>
                <p className="text-xl text-primaryColor">{item.date}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>

  )
}

export default Milestones