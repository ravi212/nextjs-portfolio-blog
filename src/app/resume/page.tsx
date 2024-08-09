import Drawer from "@/components/molecules/DrawerMenu";
import { RESUME_NAV_ITEMS } from "@/constants/common";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ravi Raina - About",
  description: "Personal Portfolio Web app of and by Ravi Raina",
};

export default function About() {
    return (
      <div className="w-[70%] flex flex-col xl:flex-row text-primaryTextColor gap-5">

        <div className="w-[40%] flex flex-col">
          <h3>Why Hire me?</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero facilis impedit cum minima maxime! Libero repellat consequatur culpa magni, maxime delectus officiis obcaecati ut labore fuga nobis doloribus! Corporis, vero?</p>
          <div className="flex flex-col my-4">
          {
            RESUME_NAV_ITEMS.map((item, index) => (
              <span key={index} className="p-3 bg-black ">{item.title}</span>
            ))
          }
          </div>

        </div>
        
        <div className="w-[60%]">
        <h3>Why Hire me?</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero facilis impedit cum minima maxime! Libero repellat consequatur culpa magni, maxime delectus officiis obcaecati ut labore fuga nobis doloribus! Corporis, vero?</p>
          <div className="flex flex-col my-4">
          {
            RESUME_NAV_ITEMS.map((item, index) => (
              <span key={index} className="p-3 bg-black ">{item.title}</span>
            ))
          }
          </div>
        </div>
      </div>
    );
  }
  