"use client";
import { RESUME_SECTIONS } from "@/constants/common";
import React, { useState } from "react";
import AboutSubSection from "@/components/atoms/client/about/AboutSubSection";
import AboutNav from "@/components/atoms/client/about/AboutNav";
const ResumeSection = () => {
  const [selectedSection, setSelectedSection] = useState(RESUME_SECTIONS[0]);
  return (
    <div className="w-[90%] md:w-[100%] m-auto h-auto px-0 py-10  md:py-10 flex flex-col lg:flex-row text-primaryTextColor lg:gap-12 gap-5">

      <AboutNav handle={selectedSection.handle} onButtonClick={(index) => setSelectedSection(RESUME_SECTIONS[index])}/>

      {selectedSection && (
        <AboutSubSection selectedSection={selectedSection} />
      )}
    </div>
  );
};

export default ResumeSection;
