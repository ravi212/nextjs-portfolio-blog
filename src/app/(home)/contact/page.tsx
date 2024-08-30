const ContactSection = lazy(() =>  import("@/components/molecules/client/contact/ContactSection") )
import { Metadata } from "next";
import { lazy } from "react";

export const metadata: Metadata = {
  title: "Ravi Raina - Contact",
  description: "Personal Portfolio Web app of and by Ravi Raina",
};

export default function Page() {
    return (
      <section>
        <p className="text-4xl text-primaryColor font-medium py-6 md:w-[70%] w-[90%] leading-snug">
          Let’s talk about a project, collaboration or an idea you may have
        </p>
        <ContactSection />
      </section>
      
    );
  }
  