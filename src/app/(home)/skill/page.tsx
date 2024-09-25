import SkillSection from "@/components/molecules/client/skill/SkillSection";

export const generateMetadata = async ({ params }) => {
  return {
    title: `I can help you with...`,
    openGraph: {
      title: 'I can help you with...',
      description: 'Explore more about my work, skills and find out how can help you, feel free to contact for support!',
    },
  }
}

export default function Page() {
    return (
        <SkillSection />
    );
  }
  