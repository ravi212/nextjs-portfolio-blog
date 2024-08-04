import dynamic from "next/dynamic";
import { lazy } from "react";
const SocialIcons = lazy(() => import("@/components/molecules/SocialIcons")) 

export default function Home() {
  return (
    <div className="relative">
      <div >

      </div>
      <div id="social-icons" className=" bottom-5">
        <SocialIcons />
      </div>
    </div>
  );
}
