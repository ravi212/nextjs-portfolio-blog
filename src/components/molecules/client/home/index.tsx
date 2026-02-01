import Project from "@/components/atoms/client/project";
import React from "react";
import LaunchIcon from '@mui/icons-material/Launch';
import Link from "next/link";

const HomeSection = ({ projects }: { projects: ProjectType[] }) => {

  return (
    <div className="w-[92%] h-auto mx-0 my-8 flex flex-col text-primaryTextColor gap-4">
      {/* <h4 className="text-xl sm:text-2xl md:text-3xl text-primaryColor ">Hi I am a</h4> */}
      <h1 className="text-4xl sm:text-4xl md:text-6xl font-medium text-primaryColor">
        Software{" "}
        <span className="font-light text-primaryColor underline"> Developer</span>
      </h1>
      <h3 className="text-xl sm:text-2xl md:text-3xl !leading-normal text-primaryColor">
        focusing on building and designing <span className="bg-secondaryTextColor/40">digital experiences.</span>
      </h3>
      
      <h4 className="flex justify-between items-center py-4 text-lg sm:text-xl md:text-2xl font-medium text-primaryColor">
        <p>My <span className="underline">Recent</span> Work</p>
        <Link href="/projects" className="flex gap-1 items-center hover:text-secondaryTextColor cursor-pointer">
          <LaunchIcon fontSize="small"/>
          <span className="text-sm sm:text-base md:text-base font-light">View all</span>
        </Link>
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
