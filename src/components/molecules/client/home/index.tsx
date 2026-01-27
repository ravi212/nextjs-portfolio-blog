import Project from "@/components/atoms/client/project";
import { EXPERTISE } from "@/constants/client.const";
import React from "react";

const HomeSection = ({ projects }: { projects: ProjectType[] }) => {
  return (
    <div className="w-[100%] md:w-[90%] h-auto mx-0 my-10 flex flex-col text-primaryTextColor gap-6">
      {/* <h4 className="text-xl sm:text-2xl md:text-3xl text-primaryColor ">Hi I am a</h4> */}
      <h1 className="text-5xl sm:text-5xl md:text-7xl font-medium text-primaryColor">
        Software{" "}
        <span className="font-normal text-primaryColor"> Developer</span>
      </h1>
      <h3 className="text-2xl sm:text-3xl md:text-4xl text-primaryColor">
        focusing on building and designing digital experiences.
      </h3>

      <h4 className="py-6 mt-3 text-xl sm:text-2xl md:text-3xl font-medium text-primaryColor">
        My Recent Work
      </h4>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:flex-row gap-8 lg:gap-4">
        {projects &&
          projects
            .filter((project: ProjectType) => project?.recent).sort((a, b) => a.createdAt - b.createdAt)
            .map((project: ProjectType, index: number) => (
              <div key={index}>
                <Project project={project} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default HomeSection;
