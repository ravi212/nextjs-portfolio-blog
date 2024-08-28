import React from "react";
import Journey from "@/components/molecules/client/about/Journey";

const ResumeSection = () => {
  return (
    <div className="w-[90%] h-[100%] flex-1  md:w-[100%]  px-0 py-10  md:py-10 flex flex-col lg:flex-row text-primaryTextColor lg:gap-12 gap-5">
      <Journey />
    </div>
  );
};

export default ResumeSection;
