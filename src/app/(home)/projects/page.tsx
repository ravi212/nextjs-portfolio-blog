import ProjectSection from "@/components/molecules/client/project/ProjectSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ravi Raina - Projects",
  description: "Personal Portfolio Web app of and by Ravi Raina",
};

export default function Page() {
    return (
        <ProjectSection />
    );
  }
  