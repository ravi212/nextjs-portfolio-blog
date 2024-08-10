import ResumeSection from "@/components/molecules/client/resume/ResumeSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ravi Raina - About",
  description: "Personal Portfolio Web app of and by Ravi Raina",
};

export default function Resume() {
    return (
      <ResumeSection />
    );
  }
  