import { lazy } from "react";
const SocialIcons = lazy(() => import("@/components/molecules/SocialIcons")) 

export default function Home() {
  return (
      <div className="w-[100%] md:w-[70%] h-auto mx-0 my-20 md:mx-20 md:my-20 flex flex-col text-primaryTextColor gap-5">
        <h4 className="text-xl sm:text-2xl md:text-3xl ">Hi my name is</h4>
        <h1 className="text-5xl sm:text-6xl md:text-8xl">Ravi Raina.</h1>
        <h3 className="text-2xl sm:text-3xl md:text-4xl">I am a Software Developer focusing on building and designing digital experiences.</h3>
        <button></button>
      </div>
  );
}
