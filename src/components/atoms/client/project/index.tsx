import Image from "next/image";
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
        return <LanguageIcon />;
      case ProjectPlatform.DESKTOP:
        return <ComputerIcon />;
      case ProjectPlatform.ANDROID:
        return <AndroidIcon />;
      case ProjectPlatform.IOS:
        return <AppleIcon />;
    }
  };

  return (
    <div className="bg-white rounded-lg mr-6 p-1">
      <div className=" relative w-full min-h-[300px] overflow-hidden rounded-t-lg transition-all duration-150 ease-in-out ">
        {/* overlay with opacity */}
        {/* <div className="w-full h-full absolute bg-opacity-90 z-10 inset-0 bg-gradient-to-t from-white "></div> */}
        <img
          alt="blog-img"
          className="absolute inset-0 object-cover hover:scale-105 transition-transform duration-100 cursor-pointer"
          src={project?.coverImage}
        />
      </div>

      <div className="py-6 px-4 flex  flex-col bg-secondaryColor justify-between shadow-xl rounded-b-lg  gap-4">
        <div>
          <h1 className="text-primaryColor text-lg font-semibold">
            {project?.title}
          </h1>

          <p className="text-primaryColor text-base py-1 text-wrap">
            {" "}
            {project?.description}
          </p>
        </div>

        <div className="left-4 z-20 flex flex-wrap gap-2 pb-3">
          {project?.technologies?.map((item, index) => (
            <span
              key={index}
              className="py-1 px-2 bg-gray-200 text-[#0e1f39] font-medium rounded-md text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap flex-row gap-2">
          {project?.platform?.map((item, index) => (
            <Link
              target="_blank"
              href={item?.link}
              key={index}
              className="hover:scale-110 duration-100 capitalize transition-transform shadow-xl p-2 bg-primaryColor text-secondaryColor rounded-full text-sm"
            >
              <div className="flex gap-1 items-center justify-center">
                {renderIcon(item?.title)}
                <span className="lowercase">{item.title}</span>
              </div>
            </Link>
          ))}

          {project?.github?.length > 0 && (
            <Link
              target="_blank"
              href={project?.github}
              className="hover:scale-110 duration-100 capitalize transition-transform shadow-xl p-2 bg-primaryColor text-secondaryColor rounded-full text-sm"
            >
              <div className="flex gap-1 items-center justify-center">
                <GitHubIcon />
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
