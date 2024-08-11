"use client";
import { RESUME_SECTIONS } from "@/constants/common";
import React, { useState } from "react";
import ResumeSubSection from "@/components/atoms/client/resume/ResumeSubSection";
import ResumeNav from "@/components/atoms/client/resume/ResumeNav";
const ResumeSection = () => {
  const [selectedSection, setSelectedSection] = useState(RESUME_SECTIONS[0]);
  return (
    <div className="w-[90%] md:w-[100%] m-auto h-auto px-0 py-20 md:px-20 md:py-20 flex flex-col lg:flex-row text-primaryTextColor gap-5">

      <ResumeNav handle={selectedSection.handle} onButtonClick={(index) => setSelectedSection(RESUME_SECTIONS[index])}/>

      {selectedSection && (
        <ResumeSubSection selectedSection={selectedSection} />
      )}
    </div>
  );
};

export default ResumeSection;
