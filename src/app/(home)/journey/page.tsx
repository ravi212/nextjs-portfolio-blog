import AboutSection from "@/components/molecules/client/about/AboutSection";

export const generateMetadata = async () => {
  return {
    title: `My Journey`,
    openGraph: {
      title: "My Journey",
      description:
        "Explore more about my career, my choices and my life, Know more about me!",
    },
  };
};

export default function Page() {
  return (
    <>
      <AboutSection />
    </>
  );
}
