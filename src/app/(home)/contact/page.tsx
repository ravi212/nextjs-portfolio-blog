const ContactSection = lazy(
  () => import("@/components/molecules/client/contact/ContactSection")
);
import { lazy } from "react";

export const generateMetadata = async () => {
  return {
    title: `Ping me!`,
    openGraph: {
      title: "Ping me!",
      description: "Feel free to contact me for technical support.",
    },
  };
};

export default function Page() {
  return (
    <section>
      <div className="py-6">
      <h2 className="text-3xl text-primaryColor font-semibold ">{`Let's`} <span  className="underline">Work Together</span></h2>
      <p className="text-xl text-primaryColor font-medium py-3 md:w-[70%] w-[90%] leading-snug">
        {`If you’ve got a `}<span className="">vision</span>, I’ve got <span className="">skills</span>, <span  className="bg-secondaryTextColor/30">{`let’s create something impactful together.`}</span>
      
       
      </p>
      </div>

      <ContactSection />
    </section>
  );
}
