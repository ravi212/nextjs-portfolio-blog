const ContactSection = lazy(() =>  import("@/components/molecules/client/contact/ContactSection") )
import { Metadata } from "next";
import { lazy } from "react";

export const metadata: Metadata = {
  title: "Ravi Raina - Contact",
  description: "Personal Portfolio Web app of and by Ravi Raina",
};

export default function Contact() {
    return (
      <ContactSection />
    );
  }
  