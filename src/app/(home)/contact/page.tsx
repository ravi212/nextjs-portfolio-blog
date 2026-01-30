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
        Let’s talk about a <span  className="bg-secondaryTextColor/30">project, collaboration or an idea</span> you may have
      </p>
      </div>

      <ContactSection />
    </section>
  );
}
