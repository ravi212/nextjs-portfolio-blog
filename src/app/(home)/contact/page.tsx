const ContactSection = lazy(() =>  import("@/components/molecules/client/contact/ContactSection") )
import { lazy } from "react";

export const generateMetadata = async ({ params }) => {
  return {
    title: `Ping me!`,
    openGraph: {
      title: 'Ping me!',
      description: 'Feel free to contact me for technical support.',
    },
  }
}

export default function Page() {
    return (
      <section>
        <p className="text-2xl text-primaryColor font-medium py-6 md:w-[70%] w-[90%] leading-snug">
          Let’s talk about a project, collaboration or an idea you may have
        </p>
        <ContactSection />
      </section>
      
    );
  }
  