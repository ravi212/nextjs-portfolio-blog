import ContactForm from "@/components/atoms/client/contact/ContactForm";
import ContactInfo from "@/components/atoms/client/contact/ContactInfo";
import React from "react";

const ContactSection = () => {
  return (
    <div className="w-[90%] md:w-[100%] h-auto py-3 flex flex-col lg:flex-row text-primaryTextColor gap-16">
      <div className="flex-1">
        <ContactForm />
      </div>
      <div className="flex-1">
        <ContactInfo />
      </div>
    </div>
  );
};

export default ContactSection;
