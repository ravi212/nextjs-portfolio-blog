import dynamic from "next/dynamic";
import { lazy } from "react";
const SocialIcons = lazy(() => import("@/components/molecules/SocialIcons")) 

export default function Home() {
  return (
    <div className="">
      <div className="w-[70%] p-10 flex flex-col text-primaryTextColor gap-5">
        <h4 className="text-2xl">Hi my name is</h4>
        <h1 className="text-7xl">Ravi Raina.</h1>
        <h3 className="text-3xl">I am a Software Developer focusing on building and designing digital experiences.</h3>
      </div>
      <div id="social-icons" className="absolute bottom-20">
        <SocialIcons />
      </div>
    </div>
  );
}
