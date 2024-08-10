"use client";
import { RESUME_NAV_ITEMS, RESUME_SECTIONS } from "@/constants/common";
import React, { useState } from "react";

const ResumeSection = () => {
  const [selectedSection, setSelectedSection] = useState(RESUME_SECTIONS[0]);
  return (
    <div className="w-[90%] md:w-[100%] m-auto h-auto px-0 py-20 md:px-20 md:py-20 flex flex-col text-primaryTextColor gap-5">
      <div className="w-[100%] flex flex-col">
        <h3>Why Hire me?</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          facilis impedit cum minima maxime! Libero repellat consequatur culpa
          magni, maxime delectus officiis obcaecati ut labore fuga nobis
          doloribus! Corporis, vero?
        </p>
        <div className="flex flex-row gap-4 my-4">
          {RESUME_NAV_ITEMS.map((item, index) => (
            <span
              onClick={() => setSelectedSection(RESUME_SECTIONS[index])}
              key={index}
              className={`${item.handle == selectedSection.handle? 'bg-secondaryTextColor' : 'bg-primaryTextColor'} cursor-pointer hover:bg-secondaryTextColor p-3 rounded-xl text-center text-background `}
            >
              {item.title}
            </span>
          ))}
        </div>
      </div>

      {selectedSection && (
        <div className="w-[100%] ">
          <h3>{selectedSection.title}</h3>
          <p>{selectedSection.description}</p>
          <div className="flex flex-col my-4">
            {selectedSection.handle == "experience" && (
              <div>
                {selectedSection.items.map((item: any, index: number) => (
                  <div className="p-5">
                    <p>{item.role}</p>
                    <p>{item.title}</p>
                    <p>{item.period}</p>
                  </div>
                ))}
              </div>
            )}
            {selectedSection.handle == "skills" && (
              <div>
                {selectedSection.items.map((item: any, index: number) => (
                  <div className="p-5 ">
                    <p>{item.title}</p>
                    <p>{item.skills}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeSection;
