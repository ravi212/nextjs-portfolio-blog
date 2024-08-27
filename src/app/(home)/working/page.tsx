import ProjectSection from "@/components/molecules/client/project/ProjectSection";
import WorkingSection from "@/components/molecules/client/working/WorkingSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ravi Raina - Projects",
  description: "Personal Portfolio Web app of and by Ravi Raina",
};

export default function Projects() {
    return (
        <WorkingSection />
    );
  }
  