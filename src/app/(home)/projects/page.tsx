import ProjectSection from "@/components/molecules/client/project/ProjectSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ravi Raina - Projects",
  description: "Personal Portfolio Web app of and by Ravi Raina",
};

export default function Projects() {
    return (
      <div className="w-[100%] md:w-[70%] lg:w-[100%] m-auto h-auto mx-0 my-10 md:mx-10 md:my-10 flex flex-col text-primaryTextColor gap-5">
        <ProjectSection />
      </div>
    );
  }
  