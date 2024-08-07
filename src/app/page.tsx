import dynamic from "next/dynamic";
import { lazy } from "react";
const SocialIcons = lazy(() => import("@/components/molecules/SocialIcons")) 

export default function Home() {
  return (
    <div className="">
      <div className="w-[100%] md:w-[70%] lg:w-[70%] xl:w-[50%] translate-y-[40%] translate-x-[5%] lg:translate-y-[40%] lg:translate-x-[15%] md:translate-y-[20%] md:translate-x-[15%] flex flex-col text-primaryTextColor gap-5">
        <h4 className="text-xl sm:text-2xl md:text-3xl ">Hi my name is</h4>
        <h1 className="text-5xl sm:text-6xl md:text-8xl">Ravi Raina.</h1>
        <h3 className="text-2xl sm:text-3xl md:text-4xl">I am a Software Developer focusing on building and designing digital experiences.</h3>
        <button></button>
      </div>
    </div>
  );
}
