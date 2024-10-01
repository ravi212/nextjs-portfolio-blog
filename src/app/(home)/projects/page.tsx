import WorkingSection from "@/components/molecules/client/working/WorkingSection";

export const generateMetadata = async () => {
  return {
    title: `Projects`,
    openGraph: {
      title: "Projects",
      description:
        "Explore more about my recent work, skills and find out how can help you, feel free to contact for support!",
    },
  };
};

export default function Page() {
  return <WorkingSection />;
}
