import AboutSection from "@/components/molecules/client/about/AboutSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ravi Raina - About",
  description: "Personal Portfolio Web app of and by Ravi Raina",
};

export default function About() {
    return (
      <AboutSection />
    );
  }
  