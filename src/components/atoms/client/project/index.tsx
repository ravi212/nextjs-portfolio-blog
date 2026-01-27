import React from "react";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import ComputerIcon from "@mui/icons-material/Computer";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import { ProjectPlatform } from "@/enum/enum";

const Project = ({ project }: { project: ProjectType }) => {
  const renderIcon = (title) => {
    switch (title) {
      case ProjectPlatform.WEB:
        return <LanguageIcon className="w-5 h-5"/>;
      case ProjectPlatform.DESKTOP:
        return <ComputerIcon className="w-5 h-5"/>;
      case ProjectPlatform.ANDROID:
        return <AndroidIcon className="w-5 h-5"/>;
      case ProjectPlatform.IOS:
        return <AppleIcon className="w-5 h-5"/>;
    }
  };

  return (
    <div className="bg-white rounded-lg mr-6 p-1 h-[520px] flex flex-col">
      {/* Image */}
      <div className="relative w-full h-[200px] overflow-hidden rounded-t-lg">
        <img
          alt="blog-img"
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-150 cursor-pointer"
          src={project?.coverImage}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 py-6 px-4 bg-secondaryColor shadow-xl rounded-b-lg justify-between gap-4">
        <div>
          <h1 className="text-primaryColor text-lg font-semibold">
            {project?.title}
          </h1>

          <p className="text-primaryColor text-base py-1 line-clamp-3">
            {project?.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project?.technologies?.map((item, index) => (
            <span
              key={index}
              className="py-1 px-2 bg-gray-200 text-[#0e1f39] font-medium rounded-md text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {project?.platform?.map((item, index) => (
            <Link
              target="_blank"
              href={item?.link}
              key={index}
              className="hover:scale-110 transition-transform duration-100 shadow-xl p-2 bg-primaryColor text-secondaryColor rounded-md text-sm"
            >
              <div className="flex gap-1 items-center justify-center">
                {renderIcon(item?.title)}
                <span className="lowercase">{item.title}</span>
              </div>
            </Link>
          ))}

          {project?.github && (
            <Link
              target="_blank"
              href={project?.github}
              className="hover:scale-110 transition-transform duration-100 shadow-xl p-2 bg-primaryColor text-secondaryColor rounded-md text-sm"
            >
              <div className="flex gap-1 items-center justify-center">
                <GitHubIcon className="w-5 h-5"/>
                <span className="lowercase">github</span>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default Project;
